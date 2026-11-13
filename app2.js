/* Hızlı seçim listeleri, kodla oynanan çift / aile oyunları, seçimli hikâyeler ve sonuç görseli.
   index.html içindeki ana betikten sonra yüklenir; oradaki $, opt, start, fact, goHome, store gibi
   yardımcıları kullanır. */

/* ---------- Ortak yardımcılar ---------- */
const framed = (() => { try { return window.self !== window.top; } catch (e) { return true; } })();
const setHash = h => { try { history.replaceState(null, "", h ? "#" + h : location.pathname + location.search); } catch (e) { try { location.hash = h; } catch (e2) {} } };
function showOnly(id) {
  ["home", "play", "quiz", "share", "result"].forEach(v => $(v).hidden = v !== id);
  if (id === "result") $("rImg").innerHTML = "";
}
function el(tag, cls, text) { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
function btn(label, cls, fn) { const b = el("button", cls, label); b.type = "button"; b.addEventListener("click", () => fn(b)); return b; }
async function copyTo(b, text) {
  const old = b.textContent;
  try { await navigator.clipboard.writeText(text); b.textContent = "Kopyalandı"; } catch (e) { b.textContent = "Kopyalanamadı, metni elle seç"; }
  setTimeout(() => { b.textContent = old; }, 1800);
}
function panel(...nodes) { const p = $("panel"); p.innerHTML = ""; p.append(...nodes.filter(Boolean)); showOnly("share"); $("share").scrollTop = 0; }
function tile(o) {
  const b = el("button", "cat" + (o.cls ? " " + o.cls : "")); b.type = "button";
  b.style.background = `linear-gradient(155deg, hsl(${o.h} 58% 38%), hsl(${o.h} 62% 16%))`;
  b.append(el("span", "em", o.em), el("b", null, o.name));
  if (o.sub) b.append(el("small", null, o.sub));
  if (o.badge) b.append(el("span", "ends", o.badge));
  if (o.prog != null) { const p = el("span", "prog"), i = el("i"); i.style.width = (o.prog * 100) + "%"; p.append(i); b.append(p); }
  b.addEventListener("click", o.go);
  return b;
}
const splitOpts = s => s.split(/,(?! )/).map(opt);
const lsGet = (k, d) => { try { const v = JSON.parse(localStorage.getItem(k)); return v == null ? d : v; } catch (e) { return d; } };
const lsSet = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };

/* ---------- Hızlı seçim ---------- */
const QCATS = QUICK.map(c => {
  const cat = { id: c.id, name: c.name, em: c.em, h: c.h, qs: [] }, it = splitOpts(c.items);
  for (let i = 0; i < it.length; i++) for (let j = i + 1; j < it.length; j++)
    cat.qs.push({ id: c.id + "_" + i + "_" + j, cat, i: cat.qs.length, t: c.head, a: it[i], b: it[j] });
  return cat;
});
const QALL = QCATS.flatMap(c => c.qs);

/* ---------- Paketler ve kodlar ---------- */
PACKS.forEach(p => {
  p.qs = p.raw.trim().split("\n").map(l => {
    const a = l.split("|");
    return { s: a[0], g: a.length === 3 ? a[1] : null, o: splitOpts(a.length === 1 ? p.opts : a[a.length - 1]) };
  });
});
const PAIR_N = 12, B36 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
PACKS.forEach(p => { p.pools = (p.pools && p.pools.length ? p.pools : [p.pool]).filter(n => n >= PAIR_N && n <= p.qs.length); if (!p.pools.length) p.pools = [Math.min(p.qs.length, Math.max(PAIR_N, p.pool || p.qs.length))]; p.pool = p.pools[p.pools.length - 1]; });
function pickPair(pack, seed, pool) {
  pool = pool || pack.pool;
  let x = seed + 1;
  const r = () => { x = (Math.imul(x, 1103515245) + 12345) & 0x7fffffff; return x / 0x80000000; };
  const idx = Array.from({ length: pool }, (_, i) => i);
  for (let i = idx.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [idx[i], idx[j]] = [idx[j], idx[i]]; }
  return idx.slice(0, PAIR_N).map(i => pack.qs[i]);
}
const chk = s => B36[[...s].reduce((a, c, i) => a + c.charCodeAt(0) * (i + 1), 0) % 36];
/* T tahmin, U uyum, F grup cevabı (tek cevap seti) · S tahmin sonucu, V uyum sonucu (iki set) · G grup daveti */
/* Paket büyüdükçe havuz (pool) değişir. İlk havuzun kodları eski sağlamayla, sonrakiler havuz boyutunu da katarak üretilir;
   böylece eski kodlar yanlış sorulara değil, kendi havuzlarına açılır. */
const chkFor = (pack, body, pool) => {
  const seen = [];
  for (const n of pack.pools) {
    let c = chk(body);
    if (n !== pack.pools[0]) { let suf = "/" + n, k = 0; while (seen.includes(chk(body + suf)) && k++ < 36) suf += "/"; c = chk(body + suf); }   // eski havuzların sağlamasıyla çakışmasın
    if (n === pool) return c;
    seen.push(c);
  }
  return chk(body + "/" + pool);
};
function encCode(kind, pack, seed, a, b, pool) {
  pool = pool || pack.pool;
  const body = kind + pack.ch + seed.toString(36).toUpperCase().padStart(3, "0") + (a ? a.join("") : "") + (b ? b.join("") : "");
  return body + chkFor(pack, body, pool);
}
function decCode(raw) {
  let s = String(raw || "");
  const h = s.lastIndexOf("#"); if (h > -1) s = s.slice(h + 1);
  s = s.replace(/^kod-/i, "").toUpperCase().replace(/[^0-9A-Z]/g, "");
  const L = s.length, kind = s[0];
  if (L < 6) return null;
  const body = s.slice(0, -1), last = s.slice(-1);
  let pack, rest;
  if ((L === 17 && "TU".includes(kind)) || (L === 29 && "SV".includes(kind))) { pack = PACKS[0]; rest = s.slice(1, -1); if (chk(body) !== last) return null; }   // ilk sürümün kodları
  else if ((L === 18 && "TUF".includes(kind)) || (L === 30 && "SV".includes(kind)) || (L === 6 && kind === "G")) { pack = PACKS.find(p => p.ch === s[1]); rest = s.slice(2, -1); }
  else return null;
  if (!pack) return null;
  const pool = L === 17 || L === 29 ? pack.pools[0] : pack.pools.slice().reverse().find(n => chkFor(pack, body, n) === last);
  if (!pool) return null;
  const seed = parseInt(rest.slice(0, 3), 36); if (isNaN(seed)) return null;
  const qs = pickPair(pack, seed, pool), d = rest.slice(3).split("").map(c => B36.indexOf(c));
  if (d.some((v, i) => v < 0 || v >= qs[i % PAIR_N].o.length)) return null;
  return { kind, pack, seed, pool, qs, a: d.slice(0, PAIR_N), b: d.length > PAIR_N ? d.slice(PAIR_N) : null };
}
const fmtCode = c => c.match(/.{1,4}/g).join("-");
const CODE_RE = /[0-9A-Za-z]{4}(?:-[0-9A-Za-z]{1,4}){1,7}/g;
const MODE_NAME = { T: "Beni ne kadar tanıyor?", U: "Uyum testi", F: "Aile ve grup anketi", G: "Aile ve grup anketi" };

/* ---------- Paket seçimi ---------- */
function openPacks(kind) {
  const list = PACKS.filter(p => p.modes.includes(kind)).sort((a, b) => kind === "G" ? (b.fam ? 1 : 0) - (a.fam ? 1 : 0) : 0);
  const grid = el("div", "packs");
  list.forEach(p => grid.append(tile({ h: p.h, em: p.em, name: p.name, sub: `${p.qs.length} soruluk havuz`, go: () => kind === "G" ? newGroup(p) : startPair(kind, p) })));
  panel(
    el("p", "eyebrow", "Bir konu paketi seç. Her oyunda paketten rastgele 12 soru gelir."),
    el("h2", null, MODE_NAME[kind]),
    grid,
    (() => { const r = el("div", "ractions"); r.append(btn("Ana sayfa", "pill", goHome)); return r; })()
  );
}

/* ---------- Çoktan seçmeli tur (çift ve grup) ---------- */
let P = null;
function startPair(kind, pack) {
  S = null;
  track(`cift/${kind}/${pack.id}`, `${MODE_NAME[kind]}: ${pack.name}`);
  P = { kind, pack, seed: Math.floor(Math.random() * 46656), role: "A", a: [], b: [], pos: 0 };
  P.pool = pack.pool; P.qs = pickPair(pack, P.seed, P.pool);
  showOnly("quiz"); renderPairQ();
}
function quizPlain() {
  const q = $("quiz"); q.classList.remove("storymode"); q.style.removeProperty("--sticker");
  $("qStory").hidden = true; $("qNext").hidden = true; $("qText").hidden = false; $("qOpts").hidden = false;
}
let pairTimer = null;
function pairAdvance() {
  clearTimeout(pairTimer);
  if (!P || $("quiz").hidden) return;
  const mine = P.role === "A" ? P.a : P.b;
  if (mine[P.pos] == null) return;
  if (++P.pos < PAIR_N) return renderPairQ();
  P.kind === "F" ? groupDone() : P.role === "A" ? pairShare() : pairResult();
}
function renderPairQ() {
  clearTimeout(pairTimer);
  quizPlain();
  const q = P.qs[P.pos], mine = P.role === "A" ? P.a : P.b, guess = P.kind === "T" && P.role === "B";
  $("quiz").classList.toggle("u", P.kind !== "T");
  $("qMode").textContent = `${MODE_NAME[P.kind]} · ${P.pack.name}`;
  $("qCount").textContent = `${P.pos + 1} / ${PAIR_N}`;
  $("qTrack").style.width = (P.pos / PAIR_N * 100) + "%";
  $("qWho").textContent = guess ? "Tahmin et: o bu soruya ne cevap verdi?"
    : P.kind === "T" ? "Kendin için cevapla. Karşı taraf bunu tahmin edecek."
    : P.kind === "F" ? `${P.name}, kendi fikrini söyle. Sonunda herkesin cevabı birleşecek.`
    : "Kendin için cevapla. Sonunda cevaplarınız karşılaştırılacak.";
  $("qText").textContent = guess && q.g ? q.g : q.s;
  const box = $("qOpts"); box.innerHTML = "";
  q.o.forEach((o, i) => {
    const b = el("button", "opt" + (mine[P.pos] === i ? " on" : "")); b.type = "button";
    b.append(el("span", null, o.e), o.x);
    b.addEventListener("click", () => {
      const changed = mine[P.pos] != null && mine[P.pos] !== i;
      mine[P.pos] = i;
      box.querySelectorAll(".opt").forEach(x => x.classList.remove("on")); b.classList.add("on");
      clearTimeout(pairTimer);
      $("qNext").hidden = false; $("qNext").textContent = P.pos + 1 < PAIR_N ? "Sonraki soru ›" : "Bitir ›";
      $("qWho").textContent = changed ? "Seçimin değişti." : "Yanlışsa başka bir şıkka dokun.";
      pairTimer = setTimeout(pairAdvance, 1100);
    });
    box.append(b);
  });
  $("qBack").hidden = P.pos === 0; $("qBack").textContent = "‹ Önceki soru";
  const answered = mine[P.pos] != null;
  $("qNext").hidden = !answered; $("qNext").textContent = P.pos + 1 < PAIR_N ? "Sonraki soru ›" : "Bitir ›";
  $("qNext").onclick = pairAdvance;
  if (answered) $("qWho").textContent = "Bu soruyu cevapladın. Değiştirmek için başka bir şıkka dokun.";
}
$("qBack").addEventListener("click", () => { if (S && !$("quiz").hidden && $("quiz").classList.contains("storymode")) return storyBack(); if (P && P.pos > 0) { clearTimeout(pairTimer); P.pos--; renderPairQ(); } });
$("qExit").addEventListener("click", goHome);

function pairShare() {
  const code = fmtCode(encCode(P.kind, P.pack, P.seed, P.a, null, P.pool)), msg = `O mu, bu mu? “${MODE_NAME[P.kind]}” oyununa davetlisin (${P.pack.name}). Siteyi aç, “Kodun mu var?” kutusuna yapıştır: ${code}`;
  setHash("kod-" + code.toLowerCase());
  const acts = el("div", "ractions");
  acts.append(
    btn("Davet mesajını kopyala", "pill solid", b => copyTo(b, msg)),
    framed ? "" : btn("Bağlantıyı kopyala", "pill", b => copyTo(b, location.href.split("#")[0] + "#kod-" + code.toLowerCase())),
    btn("Aynı telefonda devam et", "pill", () => { P.role = "B"; P.b = []; P.pos = 0; showOnly("quiz"); renderPairQ(); }),
    btn("Ana sayfa", "pill", goHome)
  );
  panel(
    el("p", "eyebrow", `${MODE_NAME[P.kind]} · ${P.pack.name}`),
    el("h2", null, "Kodun hazır"),
    el("p", "desc", P.kind === "T"
      ? "Bu kodu karşı tarafa gönder. O da aynı 12 soruda senin ne cevap verdiğini tahmin edecek."
      : "Bu kodu karşı tarafa gönder. O da aynı 12 soruyu kendisi için cevaplayacak."),
    el("div", "codebox", code),
    acts,
    el("p", "sendback", "Sonucu sen nasıl göreceksin? O bitirince ekranında bir sonuç kodu çıkacak. Sana göndersin; aynı kutuya yapıştırınca sonucu sen de görürsün.")
  );
}

function pairResult() {
  const n = PAIR_N, same = P.qs.filter((q, i) => P.a[i] === P.b[i]).length, pct = Math.round(same / n * 100), tahmin = P.kind === "T";
  const code = fmtCode(encCode(tahmin ? "S" : "V", P.pack, P.seed, P.a, P.b, P.pool));
  showOnly("result"); $("result").scrollTop = 0;
  $("result").style.setProperty("--sticker", tahmin ? "#ff6b9d" : "#9775fa");
  const facts = $("rFacts"), rows = $("rRows"); facts.innerHTML = ""; rows.innerHTML = "";
  let title, big;
  if (tahmin) {
    title = pct === 100 ? "Kusursuz tahmin" : pct >= 75 ? "Çok iyi tanıyor" : pct >= 50 ? "Fena değil" : pct >= 25 ? "Biraz daha sohbet lazım" : "Yeniden tanışma vakti";
    big = `${same} / ${n} doğru`;
    $("rDesc").textContent = `${title}. Tahmin eden taraf ${n} cevabın ${same} tanesini bildi.`;
    facts.append(fact("Doğru tahmin", `${same} / ${n}`), fact("Tanıma oranı", "%" + pct));
  } else {
    title = pct === 100 ? "Tek akıl" : pct >= 75 ? "Ruh ikizi" : pct >= 50 ? "İyi anlaşan ikili" : pct >= 25 ? "Tatlı farklılıklar" : "Zıt kutuplar";
    big = `%${pct} uyum`;
    $("rDesc").textContent = `${title}. ${n} sorunun ${same} tanesinde aynı cevabı verdiniz.`;
    facts.append(fact("Aynı cevap", `${same} / ${n}`), fact("Farklı cevap", `${n - same} / ${n}`));
  }
  $("rEyebrow").textContent = `${MODE_NAME[P.kind]} · ${P.pack.name}`;
  $("rTitle").textContent = big;
  P.qs.forEach((q, i) => {
    const ok = P.a[i] === P.b[i], A = q.o[P.a[i]], B = q.o[P.b[i]];
    const li = el("li"), t = el("span");
    t.append(el("span", "q", q.s), ok ? `${A.e} ${A.x}` : tahmin ? `Cevap: ${A.e} ${A.x} · Tahmin: ${B.e} ${B.x}` : `1. kişi: ${A.e} ${A.x} · 2. kişi: ${B.e} ${B.x}`);
    li.append(el("span", "m", ok ? "✅" : "❌"), t); rows.append(li);
  });
  $("rExtra").hidden = false; $("rCode").textContent = code;
  setHash("kod-" + code.toLowerCase());
  lastText = `O mu, bu mu? ${MODE_NAME[P.kind]} (${P.pack.name}): ${big}, ${title}.\nSonucu görmek için bu kodu sitedeki “Kodun mu var?” kutusuna yapıştır: ${code}\n${HANDLE()}`;
  const kind = P.kind;
  $("again").textContent = "Yeni oyun ›"; againFn = () => openPacks(kind);
  storyCard({ kicker: `${MODE_NAME[kind]} · ${P.pack.name}`, title: big, sub: title, h: tahmin ? 338 : 262 });
}

/* ---------- Aile ve grup anketi ---------- */
function newGroup(pack) {
  track(`aile/${pack.id}`, `Aile anketi: ${pack.name}`);
  const seed = Math.floor(Math.random() * 46656), code = fmtCode(encCode("G", pack, seed, null, null, pack.pool));
  const msg = `O mu, bu mu? “${pack.name}” anketini başlattım. Siteyi aç, “Kodun mu var?” kutusuna şunu yapıştır: ${code}\nBitince çıkan cevap satırını bu gruba at.`;
  const acts = el("div", "ractions");
  acts.append(btn("Davet mesajını kopyala", "pill solid", b => copyTo(b, msg)), btn("Ben de cevaplayayım ›", "pill", () => nameStep(pack, seed, pack.pool)), btn("Ana sayfa", "pill", goHome));
  const steps = el("ul", "rows");
  ["Davet mesajını aile ya da arkadaş grubuna gönder.", "Herkes kodu girip adını yazar, 12 soruyu cevaplar.", "Herkes kendi cevap satırını gruba atar.", "Biri gruptaki bütün cevap satırlarını kopyalayıp “Kodun mu var?” kutusuna yapıştırır: ortak sonuç çıkar."]
    .forEach((t, i) => { const li = el("li"); li.append(el("span", "m", String(i + 1)), el("span", null, t)); steps.append(li); });
  panel(el("p", "eyebrow", `Aile ve grup anketi · ${pack.name}`), el("h2", null, "Davet kodu"), el("div", "codebox", code), acts, steps);
}
function nameStep(pack, seed, pool) {
  pool = pool || pack.pool;
  const input = el("input", "field"); input.type = "text"; input.maxLength = 16; input.placeholder = "Örneğin: Ayşe"; input.id = "nameField"; input.setAttribute("aria-label", "Adın");
  const err = el("p", "eyebrow", "");
  const go = () => {
    const name = input.value.replace(/[:👉\]\[\n]/g, "").trim();
    if (!name) { err.textContent = "Sonuçta kimin ne dediği görünsün diye bir ad yaz."; input.focus(); return; }
    P = { kind: "F", pack, seed, pool, qs: pickPair(pack, seed, pool), role: "A", a: [], b: [], pos: 0, name };
    showOnly("quiz"); renderPairQ();
  };
  input.addEventListener("keydown", e => { if (e.key === "Enter") go(); });
  const acts = el("div", "ractions"); acts.append(btn("Başla ›", "pill solid", go), btn("Ana sayfa", "pill", goHome));
  panel(el("p", "eyebrow", `Aile ve grup anketi · ${pack.name}`), el("h2", null, "Adın ne?"), input, err, acts);
  setTimeout(() => input.focus(), 50);
}
function groupDone() {
  const code = fmtCode(encCode("F", P.pack, P.seed, P.a, null, P.pool)), line = `${P.name} 👉 ${code}`, key = P.pack.ch + P.seed + "/" + P.pool;
  const mine = lsGet("omubumu-grp", {}); mine[key] = line; lsSet("omubumu-grp", mine);
  const acts = el("div", "ractions");
  acts.append(btn("Cevap satırımı kopyala", "pill solid", b => copyTo(b, line)), btn("Ana sayfa", "pill", goHome));
  panel(
    el("p", "eyebrow", `Aile ve grup anketi · ${P.pack.name}`), el("h2", null, "Cevabın hazır"),
    el("p", "desc", "Bu satırı gruba gönder. Herkes gönderdikten sonra biri bütün satırları kopyalayıp ana sayfadaki “Kodun mu var?” kutusuna yapıştırsın."),
    el("div", "copyline", line), acts,
    el("p", "eyebrow", "Kendi cevabın bu telefonda saklandı; sonuçları bu telefonda birleştirirsen satırını ayrıca yapıştırmana gerek yok.")
  );
}
function parseCodes(text) {
  const out = [];
  String(text || "").split("\n").forEach(line => {
    let m; CODE_RE.lastIndex = 0;
    while ((m = CODE_RE.exec(line))) {
      const d = decCode(m[0]); if (!d) continue;
      d.name = (line.slice(0, m.index).replace(/👉/g, "").split(/[:\]]/).map(x => x.trim()).filter(Boolean).pop() || "").replace(/^[^0-9A-Za-zÇĞİÖŞÜçğıöşü]+|[^0-9A-Za-zÇĞİÖŞÜçğıöşü]+$/g, "").slice(-18);
      out.push(d);
    }
  });
  if (!out.length) { const d = decCode(text); if (d) { d.name = ""; out.push(d); } }
  return out;
}
function joinAny(text) {
  const found = parseCodes(text);
  if (!found.length) return "Bu kod tanınmadı. Eksiksiz kopyaladığından emin ol.";
  const fs = found.filter(d => d.kind === "F");
  if (fs.length) return mergeGroup(fs);
  const d = found[0];
  if (d.kind === "G") { nameStep(d.pack, d.seed, d.pool); return null; }
  if (d.b) { P = { kind: d.kind === "S" ? "T" : "U", pack: d.pack, seed: d.seed, pool: d.pool, qs: d.qs, a: d.a, b: d.b, role: "V" }; pairResult(); return null; }
  P = { kind: d.kind, pack: d.pack, seed: d.seed, pool: d.pool, qs: d.qs, role: "B", a: d.a, b: [], pos: 0 };
  showOnly("quiz"); renderPairQ();
  return null;
}
function mergeGroup(fs) {
  const groups = {};
  fs.forEach(d => { const k = d.pack.ch + d.seed + "/" + d.pool; (groups[k] = groups[k] || []).push(d); });
  const key = Object.keys(groups).sort((a, b) => groups[b].length - groups[a].length)[0], list = groups[key];
  const own = lsGet("omubumu-grp", {})[key];
  if (own) { const o = parseCodes(own)[0]; if (o && !list.some(d => d.a.join("") === o.a.join("") && d.name === o.name)) list.push(o); }
  const seen = {}, people = [];
  list.forEach(d => { const id = d.name + "|" + d.a.join(""); if (seen[id]) return; seen[id] = 1; people.push({ name: d.name || `Kişi ${people.length + 1}`, a: d.a }); });
  if (people.length < 2) return "Sonuç için en az iki kişinin cevap satırı gerekli. Gruptaki satırların hepsini birlikte yapıştır.";
  groupResult(list[0].pack, list[0].qs, people);
  return null;
}
function groupResult(pack, qs, people) {
  const n = people.length, N = PAIR_N;
  showOnly("result"); $("result").scrollTop = 0;
  $("result").style.setProperty("--sticker", "#ff922b");
  const facts = $("rFacts"), rows = $("rRows"); facts.innerHTML = ""; rows.innerHTML = "";
  let unan = 0, agr = 0;
  qs.forEach((q, i) => {
    const cnt = q.o.map(() => 0); people.forEach(p => cnt[p.a[i]]++);
    const max = Math.max(...cnt), tops = cnt.map((c, k) => c === max ? k : -1).filter(k => k > -1);
    agr += max / n; if (max === n) unan++;
    const li = el("li"), t = el("span");
    t.append(el("span", "q", q.s));
    if (tops.length === 1) {
      const o = q.o[tops[0]];
      t.append(max === n ? `Herkes: ${o.e} ${o.x}` : `Çoğunluk: ${o.e} ${o.x} (${max} / ${n})`);
      const others = people.filter(p => p.a[i] !== tops[0]).map(p => `${p.name}: ${q.o[p.a[i]].x}`);
      if (others.length) t.append(el("span", "q", others.join(" · ")));
    } else {
      t.append(`Berabere: ${tops.map(k => q.o[k].x).join(", ")}`);
      t.append(el("span", "q", people.map(p => `${p.name}: ${q.o[p.a[i]].x}`).join(" · ")));
    }
    li.append(el("span", "m", max === n ? "🤝" : tops.length === 1 ? q.o[tops[0]].e : "⚖️"), t); rows.append(li);
  });
  const pct = Math.round(agr / N * 100);
  const match = (x, y) => x.a.filter((v, i) => v === y.a[i]).length;
  let best = null;
  for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) { const m = match(people[i], people[j]); if (!best || m > best.m) best = { m, x: people[i], y: people[j] }; }
  facts.append(fact("Herkesin aynı dediği soru", `${unan} / ${N}`), fact("En uyumlu ikili", `${best.m} / ${N}`, `${best.x.name} ve ${best.y.name}`));
  if (n >= 3) {
    const avg = people.map(p => ({ p, v: people.reduce((s, o) => o === p ? s : s + match(p, o), 0) / (n - 1) })).sort((a, b) => a.v - b.v);
    facts.append(fact("Aykırı ses", avg[0].p.name, "Diğerleriyle en az ortak cevabı o verdi"), fact("Ortak akıl", avg[avg.length - 1].p.name, "Çoğunluğa en yakın cevapları o verdi"));
  }
  const title = pct >= 85 ? "Tek yürek" : pct >= 65 ? "Çoğu konuda anlaşıyor" : pct >= 45 ? "Tatlı tartışmalı" : "Herkes ayrı telden";
  $("rEyebrow").textContent = `Aile ve grup anketi · ${pack.name} · ${n} kişi`;
  $("rTitle").textContent = `%${pct} hemfikir`;
  $("rDesc").textContent = `${title}. ${N} sorunun ${unan} tanesinde herkes aynı cevabı verdi.`;
  $("rExtra").hidden = true;
  lastText = `O mu, bu mu? ${pack.name} anketi (${n} kişi): %${pct} hemfikir, ${title}. En uyumlu ikili: ${best.x.name} ve ${best.y.name}.\n${HANDLE()}`;
  $("again").textContent = "Yeni anket ›"; againFn = () => openPacks("G");
  storyCard({ kicker: `${pack.name} · ${n} kişi`, title: `%${pct} hemfikir`, sub: `${title}. En uyumlu ikili: ${best.x.name} ve ${best.y.name}.`, h: 24 });
}

/* ---------- Seçimli hikâyeler ---------- */
const STORIES = STORY_RAW.trim().split(/\n\s*\n/).map(block => {
  const L = block.trim().split("\n"), hd = L[0].slice(2).split(" | ");
  const s = { id: hd[0], title: hd[1], em: hd[2], h: +hd[3], intro: hd[4], scenes: [], ends: [] };
  L.slice(1).forEach(l => {
    if (l[0] === ">") s.scenes.push({ text: l.slice(2), opts: [] });
    else if (l[0] === "!" || l[0] === "-") { const p = l.slice(2).split(" => "); s.scenes[s.scenes.length - 1].opts.push({ label: p[0], out: p[1], bold: l[0] === "!" }); }
    else if (l[0] === "=") { const p = l.slice(2).split(" :: "); s.ends.push({ t: p[0], x: p[1] }); }
  });
  return s;
});
let S = null;
function playStory(s) {
  clearTimeout(pairTimer);
  track(`hikaye/${s.id}`, `Hikâye: ${s.title}`); S = { s, pos: 0, bold: 0, picks: [] }; P = null; showOnly("quiz"); renderScene(); }
function renderScene() {
  const s = S.s, sc = s.scenes[S.pos], n = s.scenes.length, quiz = $("quiz");
  quiz.classList.add("storymode"); quiz.classList.remove("u"); quiz.style.setProperty("--sticker", `hsl(${s.h} 70% 52%)`);
  $("qMode").textContent = `${s.em} ${s.title}`;
  $("qCount").textContent = `Bölüm ${S.pos + 1} / ${n}`;
  $("qTrack").style.width = (S.pos / n * 100) + "%";
  $("qWho").textContent = S.pos === 0 ? s.intro : "";
  $("qText").hidden = true; $("qNext").hidden = true;
  $("qBack").hidden = S.pos === 0; $("qBack").textContent = "‹ Önceki bölüm";
  const st = $("qStory"); st.hidden = false; st.textContent = sc.text;
  const box = $("qOpts"); box.hidden = false; box.innerHTML = "";
  sc.opts.forEach((o, i) => {
    const b = el("button", "opt"); b.type = "button"; b.append(el("span", null, i === 0 ? "🅰️" : "🅱️"), o.label);
    b.addEventListener("click", () => {
      S.picks[S.pos] = o; S.bold = S.picks.filter(x => x && x.bold).length;
      box.hidden = true;
      st.append(el("span", "out", `${o.label}. ${o.out}`));
      $("qBack").hidden = false; $("qBack").textContent = "↩ Seçimi değiştir";
      const nx = $("qNext"); nx.hidden = false; nx.textContent = S.pos + 1 < n ? "Devam et ›" : "Hikâyenin sonunu gör ›";
      nx.onclick = () => { if (++S.pos < n) renderScene(); else storyEnd(); };
    });
    box.append(b);
  });
  quiz.scrollTop = 0;
}
function storyBack() {
  if (!S) return;
  if (S.picks[S.pos]) { S.picks.length = S.pos; S.bold = S.picks.filter(x => x && x.bold).length; return renderScene(); }   // bu bölümdeki seçimi geri al
  if (S.pos > 0) { S.pos--; S.picks.length = S.pos; S.bold = S.picks.filter(x => x && x.bold).length; renderScene(); }   // önceki bölüme dön
}
function storyEnd() {
  const s = S.s, n = s.scenes.length, idx = S.bold <= 1 ? 0 : S.bold === 2 ? 1 : 2, end = s.ends[idx];
  const seenAll = lsGet("omubumu-st", {}), seen = seenAll[s.id] || [];
  if (!seen.includes(idx)) seen.push(idx); seenAll[s.id] = seen; lsSet("omubumu-st", seenAll);
  showOnly("result"); $("result").scrollTop = 0;
  $("result").style.setProperty("--sticker", `hsl(${s.h} 80% 66%)`);
  const facts = $("rFacts"), rows = $("rRows"); facts.innerHTML = ""; rows.innerHTML = "";
  $("rEyebrow").textContent = `${s.title} · Hikâyenin sonu`;
  $("rTitle").textContent = end.t;
  $("rDesc").textContent = end.x;
  facts.append(fact("Gözü kara seçim", `${S.bold} / ${n}`), fact("Gördüğün sonlar", `${seen.length} / ${s.ends.length}`, seen.length < s.ends.length ? "Farklı seçimlerle diğer sonları aç" : "Bu hikâyenin bütün sonlarını gördün"));
  S.picks.forEach((o, i) => { const li = el("li"), t = el("span"); t.append(el("span", "q", `Bölüm ${i + 1}`), o.label); li.append(el("span", "m", o.bold ? "🔥" : "🛡️"), t); rows.append(li); });
  $("rExtra").hidden = true;
  lastText = `O mu, bu mu? “${s.title}” hikâyesinde sonum: ${end.t}.\n${HANDLE()}`;
  $("again").textContent = "Farklı seçimlerle oyna ›"; againFn = () => playStory(s);
  storyCard({ kicker: `${s.em} ${s.title}`, title: end.t, sub: end.x, h: s.h });
}

/* ---------- Hikâye boyutunda sonuç görseli (1080 x 1920) ---------- */
function storyCard(o) {
  const box = $("rImg"); box.innerHTML = "";
  const draw = () => {
    try {
      const c = document.createElement("canvas"); c.width = 1080; c.height = 1920;
      const x = c.getContext("2d"), g = x.createLinearGradient(0, 0, 1080, 1920);
      g.addColorStop(0, `hsl(${o.h} 62% 36%)`); g.addColorStop(1, `hsl(${o.h + 35} 65% 9%)`);
      x.fillStyle = g; x.fillRect(0, 0, 1080, 1920);
      x.fillStyle = "rgba(255,255,255,.07)"; x.beginPath(); x.arc(980, 260, 420, 0, 7); x.fill(); x.beginPath(); x.arc(60, 1700, 320, 0, 7); x.fill();
      const wrap = (text, y, lh, max) => {
        let line = "", lines = 0;
        for (const w of String(text).split(" ")) {
          if (x.measureText(line + w).width > 900 && line) { x.fillText(line.trim(), 90, y); y += lh; line = ""; if (++lines >= max) return y; }
          line += w + " ";
        }
        if (line.trim()) { x.fillText(line.trim(), 90, y); y += lh; }
        return y;
      };
      x.textBaseline = "top";
      const T = typeof TEMA === "object" ? TEMA : {}, FD = `"${T.fontBaslik || "Barlow Condensed"}", "Arial Narrow", sans-serif`, FB = `"${T.fontMetin || "Onest"}", system-ui, sans-serif`;
      x.fillStyle = T.renkVurgu || "#ffd23f"; x.font = "800 72px " + FD; x.fillText(`${T.baslik1 || "O mu,"} ${T.baslik2 || "bu mu?"}`.toLocaleUpperCase("tr"), 90, 150);
      x.fillStyle = "rgba(255,255,255,.85)"; x.font = "500 46px " + FB;
      let y = wrap(o.kicker, 560, 60, 2);
      x.fillStyle = "#fff"; x.font = "800 156px " + FD;
      y = wrap(String(o.title).toLocaleUpperCase("tr"), y + 30, 150, 4);
      x.fillStyle = "rgba(255,255,255,.92)"; x.font = "500 50px " + FB;
      wrap(o.sub, y + 50, 70, 8);
      x.fillStyle = "#fff"; x.font = "700 46px " + FB; x.fillText(HANDLE(), 90, 1740);
      const url = c.toDataURL("image/png"), out = el("div", "card-out"), img = el("img"), side = el("div");
      img.src = url; img.alt = "Hikâye boyutunda sonuç görseli";
      side.append(el("small", null, "Hikâyende paylaşmak için görsele basılı tut ve kaydet."));
      if (!framed) { const a = el("a", "pill", "Görseli indir"); a.href = url; a.download = "o-mu-bu-mu-sonuc.png"; a.style.textDecoration = "none"; a.style.display = "inline-block"; side.append(a); }
      out.append(img, side); box.innerHTML = ""; box.append(out);
    } catch (e) {}
  };
  const f = document.fonts && document.fonts.load ? Promise.all([document.fonts.load(`800 156px "${(typeof TEMA === "object" && TEMA.fontBaslik) || "Barlow Condensed"}"`), document.fonts.load(`500 50px "${(typeof TEMA === "object" && TEMA.fontMetin) || "Onest"}"`)]) : Promise.resolve();
  f.then(draw, draw);
}

/* ---------- Uygulama modu ---------- */
let installEvt = null;
const standalone = () => (window.matchMedia && matchMedia("(display-mode: standalone)").matches) || navigator.standalone === true;
window.addEventListener("beforeinstallprompt", e => { e.preventDefault(); installEvt = e; if (!standalone()) $("installBtn").hidden = false; });
window.addEventListener("appinstalled", () => { $("installBtn").hidden = true; track("uygulama/yuklendi", "Uygulama yüklendi"); });
$("installBtn").addEventListener("click", async () => {
  if (installEvt) { installEvt.prompt(); try { await installEvt.userChoice; } catch (e) {} installEvt = null; $("installBtn").hidden = true; return; }
  $("iosNote").hidden = false;
});
$("iosClose").addEventListener("click", () => { $("iosNote").hidden = true; });
(function () {
  const appleMobile = /iphone|ipad|ipod/i.test(navigator.platform || "") || (navigator.maxTouchPoints > 1 && /mac/i.test(navigator.platform || ""));
  if (appleMobile && !standalone()) $("installBtn").hidden = false;
  if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost") && !framed) {
    window.addEventListener("load", () => { navigator.serviceWorker.register("sw.js").catch(() => {}); });
  }
})();

/* ---------- Ana sayfanın ek bölümleri ---------- */
function applyTema() {
  if (typeof TEMA !== "object") return;
  const set = (id, v) => { if (v) $(id).textContent = v; };
  set("brandT1", TEMA.baslik1); set("brandT2", TEMA.baslik2); set("brandHandle", TEMA.hesap); set("brandSub", TEMA.altyazi);
  document.querySelectorAll(".roundN").forEach(e => e.textContent = ROUND);
  const n = $("notice"); n.hidden = !TEMA.duyuru; n.textContent = TEMA.duyuru || "";
  const safeUrl = u => /^https:\/\/[^\s"'<>]+$/i.test(String(u || "").trim()) ? String(u).trim() : null;
  [["fIg", TEMA.instagram], ["fYt", TEMA.youtube], ["fTt", TEMA.tiktok]].forEach(([id, u]) => {
    const a = $(id); if (!a || u == null) return;
    if (String(u).trim() === "") { a.hidden = true; return; }
    const v = safeUrl(u); if (v) { a.href = v; a.hidden = false; }
  });
  if (TEMA.hesap) { $("fHandle").textContent = TEMA.hesap; const ig = safeUrl(TEMA.instagram); if (ig) $("fHandle").href = ig; }
  if (TEMA.baslik1 || TEMA.baslik2) $("fTitle").textContent = `${TEMA.baslik1 || ""} ${TEMA.baslik2 || ""}`.trim();
  if (TEMA.eposta != null) {
    const mail = String(TEMA.eposta).trim(), col = $("fMail").closest(".fcol");
    if (mail === "") col.hidden = true;
    else if (/^[^\s@<>"']+@[^\s@<>"']+\.[a-z]{2,}$/i.test(mail)) { $("fMail").href = "mailto:" + mail; $("fMailText").textContent = mail; col.hidden = false; }
  }
}

/* ---------- Ziyaretçi istatistiği (GoatCounter, çerezsiz) ---------- */
let statsOn = false;
function startStats() {
  const code = typeof TEMA === "object" ? String(TEMA.istatistik || "").trim().toLowerCase() : "";
  if (statsOn || !/^[a-z0-9][a-z0-9-]{1,40}$/.test(code)) return;
  statsOn = true;
  const sc = document.createElement("script");
  sc.async = true; sc.src = "https://gc.zgo.at/count.js"; sc.dataset.goatcounter = `https://${code}.goatcounter.com/count`;
  document.head.append(sc);
}
function track(path, title) {
  try { if (window.goatcounter && window.goatcounter.count) window.goatcounter.count({ path: "oyun/" + path, title: title || path, event: true }); } catch (e) {}
}

/* ---------- Tema seçici ---------- */
function buildLookMenu() {
  const menu = $("lookMenu"); menu.innerHTML = "";
  Object.keys(LOOKS).forEach(k => {
    const L = LOOKS[k], T = typeof TEMA === "object" ? TEMA : {};
    const sw = el("span", "sw"); sw.style.background = `linear-gradient(135deg, ${L.night || T.renkArka || "#0d0f14"} 50%, ${L.accent || T.renkVurgu || "#ffd23f"} 50%)`;
    const b = el("button"); b.type = "button"; b.setAttribute("role", "menuitemradio"); b.setAttribute("aria-checked", String(window.CURRENT_LOOK === k));
    b.append(sw, L.ad);
    b.addEventListener("click", () => { applyLook(k); buildLookMenu(); closeLook(); track("tema/" + k, "Tema: " + L.ad); });
    menu.append(b);
  });
}
function closeLook() { $("lookMenu").hidden = true; $("lookBtn").setAttribute("aria-expanded", "false"); }
$("lookBtn").addEventListener("click", e => { e.stopPropagation(); const m = $("lookMenu"); if (m.hidden) { buildLookMenu(); m.hidden = false; $("lookBtn").setAttribute("aria-expanded", "true"); } else closeLook(); });
document.addEventListener("click", e => { if (!$("lookMenu").hidden && !e.target.closest(".lookwrap")) closeLook(); });
document.addEventListener("keydown", e => { if (e.key === "Escape" && !$("lookMenu").hidden) closeLook(); });

function renderHomeExtra() {
  applyTema();
  if (typeof renderGames === "function") renderGames();
  const quick = $("quick"); quick.innerHTML = "";
  QCATS.forEach(c => {
    const n = c.qs.filter(q => store.ans[q.id]).length;
    quick.append(tile({ h: c.h, em: c.em, name: c.name, sub: `${n} / ${c.qs.length}`, prog: n / c.qs.length, go: () => start(c) }));
  });
  const seen = lsGet("omubumu-st", {}), st = $("stories"); st.innerHTML = "";
  STORIES.forEach(s => st.append(tile({ cls: "tale", h: s.h, em: s.em, name: s.title, badge: `${(seen[s.id] || []).length} / ${s.ends.length} son`, go: () => playStory(s) })));
  const total = ALL.length + QALL.length, done = ALL.filter(q => store.ans[q.id]).length + QALL.filter(q => store.ans[q.id]).length;
  $("quickCount").textContent = `${QCATS.length} liste, ${QALL.length} ikilem`;
  $("storyCount").textContent = `${STORIES.length} hikâye, her birinde 3 farklı son`;
  $("total").textContent = `${done} / ${total} ikilem cevaplandı`;
  $("leadCount").textContent = (typeof TEMA === "object" && TEMA.giris) ? TEMA.giris + " " : `${total} ikilem, ${PACKS.reduce((s, p) => s + p.qs.length, 0)} sorulu ${PACKS.length} oyun paketi, ${STORIES.length} seçimli hikâye.`;
}

$("pairT").addEventListener("click", () => openPacks("T"));
$("pairU").addEventListener("click", () => openPacks("U"));
$("grpNew").addEventListener("click", () => openPacks("G"));
$("joinForm").addEventListener("submit", e => {
  e.preventDefault();
  const err = joinAny($("joinCode").value);
  $("joinErr").hidden = !err; $("joinErr").textContent = err || "";
  if (!err) $("joinCode").value = "";
});
function fromHash() { if (/^#kod-/i.test(location.hash)) joinAny(location.hash); }
window.addEventListener("hashchange", fromHash);

renderHome();
fromHash();
startStats();
