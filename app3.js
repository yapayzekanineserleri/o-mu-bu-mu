/* Turnuvalar (eleme) ve sonuç testleri.
   app2.js'ten sonra yüklenir; $, el, tile, showOnly, lsGet, lsSet, splitOpts, track, storyCard, fact,
   goHome, quizPlain gibi ortak yardımcıları kullanır. */

/* ---------- Veri ---------- */
const BRACKETS = (typeof TURNUVA !== "undefined" ? TURNUVA : []).map(b => ({ ...b, list: splitOpts(b.items) })).filter(b => b.list.length >= 2);
const TESTS = (typeof TESTLER !== "undefined" ? TESTLER : []).filter(t => t.qs && t.qs.length && t.results && Object.keys(t.results).length);
const ROUND_NAME = { 2: "Final", 4: "Yarı final", 8: "Çeyrek final", 16: "Son 16", 32: "Son 32" };

function shuffleArr(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function bracketSize(n) { return n >= 16 ? 16 : n >= 8 ? 8 : n >= 4 ? 4 : 2; }

/* ---------- Turnuva ---------- */
let BR = null, brTimer = null;
function playBracket(b) {
  clearTimeout(brTimer);
  P = null; S = null; TS = null;
  const size = bracketSize(b.list.length);
  BR = { b, round: shuffleArr(b.list).slice(0, size), next: [], i: 0, log: [], hist: [], pending: null, size };
  track(`turnuva/${b.id}`, `Turnuva: ${b.name}`);
  showOnly("quiz"); renderMatch();
}
function renderMatch() {
  clearTimeout(brTimer);
  quizPlain();
  const q = $("quiz"); q.classList.add("vsmode"); q.style.setProperty("--sticker", `hsl(${BR.b.h} 72% 52%)`);
  const n = BR.round.length, matches = n / 2;
  $("qMode").textContent = `${BR.b.em} ${BR.b.name}`;
  $("qCount").textContent = `${ROUND_NAME[n] || n + " kişi"} · ${BR.i + 1}/${matches}`;
  const played = BR.log.length; $("qTrack").style.width = (played / (BR.size - 1) * 100) + "%";
  $("qWho").textContent = BR.pending ? "Yanlışsa diğerine dokun." : (n === 2 ? "Büyük final! Şampiyonu sen seç." : "Hangisi bir üst tura çıksın?");
  $("qText").textContent = BR.b.head || "Hangisi?";
  const box = $("qOpts"); box.innerHTML = ""; box.classList.add("vs");
  const pair = [BR.round[BR.i * 2], BR.round[BR.i * 2 + 1]];
  pair.forEach((o, k) => {
    const btn = el("button", "opt big" + (BR.pending === o ? " on" : "")); btn.type = "button";
    btn.append(el("span", null, o.e), el("b", null, o.x));
    btn.addEventListener("click", () => {
      BR.pending = o;
      box.querySelectorAll(".opt").forEach(x => x.classList.remove("on")); btn.classList.add("on");
      $("qWho").textContent = "Yanlışsa diğerine dokun.";
      $("qNext").hidden = false; $("qNext").textContent = n === 2 ? "Şampiyonu ilan et ›" : "Sonraki eşleşme ›";
      clearTimeout(brTimer); brTimer = setTimeout(commitMatch, 900);
    });
    box.append(btn);
  });
  $("qBack").hidden = !BR.hist.length; $("qBack").textContent = "‹ Önceki eşleşme";
  $("qNext").hidden = !BR.pending; $("qNext").onclick = commitMatch;
}
function commitMatch() {
  clearTimeout(brTimer);
  if (!BR || !BR.pending || $("quiz").hidden) return;
  const a = BR.round[BR.i * 2], b = BR.round[BR.i * 2 + 1], w = BR.pending;
  BR.hist.push({ round: BR.round.slice(), next: BR.next.slice(), i: BR.i, log: BR.log.length });
  BR.log.push({ a, b, w, size: BR.round.length });
  BR.next.push(w); BR.i++; BR.pending = null;
  if (BR.i * 2 >= BR.round.length) {
    if (BR.next.length === 1) return bracketResult();
    BR.round = BR.next; BR.next = []; BR.i = 0;
  }
  renderMatch();
}
function bracketBack() {
  clearTimeout(brTimer);
  if (BR.pending) { BR.pending = null; return renderMatch(); }
  const h = BR.hist.pop(); if (!h) return;
  BR.round = h.round; BR.next = h.next; BR.i = h.i; BR.log.length = h.log; BR.pending = null;
  renderMatch();
}
function bracketResult() {
  const b = BR.b, final = BR.log[BR.log.length - 1], champ = final.w, runner = final.a === champ ? final.b : final.a;
  const semis = BR.log.filter(m => m.size === 4).map(m => m.a === m.w ? m.b : m.a);
  const hist = lsGet("omubumu-tr", {}); const mine = (hist[b.id] || []).slice(-4); mine.push(champ.x); hist[b.id] = mine; lsSet("omubumu-tr", hist);
  const prev = mine.length > 1 ? mine[mine.length - 2] : null;
  showOnly("result"); $("result").scrollTop = 0;
  $("result").style.setProperty("--sticker", `hsl(${b.h} 80% 64%)`);
  $("rEyebrow").textContent = `${b.em} ${b.name} · Şampiyon`;
  $("rTitle").textContent = `${champ.e} ${champ.x}`;
  $("rDesc").textContent = `${BR.size} aday arasından ${BR.log.filter(m => m.w === champ).length} eşleşme kazanarak şampiyon oldu.` + (prev && prev !== champ.x ? ` Geçen sefer şampiyonun ${prev} olmuştu.` : prev === champ.x ? " Üst üste ikinci kez şampiyon!" : "");
  const facts = $("rFacts"), rows = $("rRows"); facts.innerHTML = ""; rows.innerHTML = "";
  facts.append(fact("Şampiyon", champ.x), fact("Finalist", runner.x));
  if (semis.length) facts.append(fact("Yarı finalistler", semis.map(s => s.x).join(", ")));
  BR.log.filter(m => m.w === champ).forEach(m => {
    const other = m.a === champ ? m.b : m.a, li = el("li"), t = el("span");
    t.append(el("span", "q", ROUND_NAME[m.size] || `${m.size} kişi`), `${champ.x}, ${other.e} ${other.x} karşısında`);
    li.append(el("span", "m", "🏆"), t); rows.append(li);
  });
  $("rExtra").hidden = true;
  lastText = `O mu, bu mu? “${b.name}” turnuvasında benim şampiyonum: ${champ.x}! Finaldeki rakibi: ${runner.x}.\nSen de oyna: ${location.origin}\n${HANDLE()}`;
  $("again").textContent = "Yeniden oyna ›"; againFn = () => playBracket(b);
  track(`turnuva-sampiyon/${b.id}`, `${b.name}: ${champ.x}`);
  storyCard({ kicker: `${b.em} ${b.name} · Şampiyonum`, title: champ.x, sub: `Finalde ${runner.x} elendi.` + (semis.length ? ` Yarı finalistler: ${semis.map(s => s.x).join(", ")}.` : ""), h: b.h });
}

/* ---------- Sonuç testi ---------- */
let TS = null, tsTimer = null;
function playTest(t) {
  clearTimeout(tsTimer);
  P = null; S = null; BR = null;
  TS = { t, pos: 0, ans: [] };
  track(`test/${t.id}`, `Test: ${t.name}`);
  showOnly("quiz"); renderTestQ();
}
function renderTestQ() {
  clearTimeout(tsTimer);
  quizPlain();
  const q = $("quiz"), t = TS.t, item = t.qs[TS.pos], n = t.qs.length;
  q.classList.add("u"); q.style.setProperty("--sticker", `hsl(${t.h} 70% 52%)`);
  $("qMode").textContent = `${t.em} ${t.name}`;
  $("qCount").textContent = `${TS.pos + 1} / ${n}`;
  $("qTrack").style.width = (TS.pos / n * 100) + "%";
  $("qWho").textContent = TS.ans[TS.pos] != null ? "Bu soruyu cevapladın. Değiştirmek için başka bir şıkka dokun." : "Sana en yakın olanı seç.";
  $("qText").textContent = item.q;
  const box = $("qOpts"); box.innerHTML = "";
  item.o.forEach((o, i) => {
    const op = splitOpts(o[0])[0] || { e: "🔹", x: o[0] };
    const b = el("button", "opt" + (TS.ans[TS.pos] === i ? " on" : "")); b.type = "button";
    b.append(el("span", null, op.e), op.x);
    b.addEventListener("click", () => {
      const changed = TS.ans[TS.pos] != null && TS.ans[TS.pos] !== i;
      TS.ans[TS.pos] = i;
      box.querySelectorAll(".opt").forEach(x => x.classList.remove("on")); b.classList.add("on");
      $("qWho").textContent = changed ? "Seçimin değişti." : "Yanlışsa başka bir şıkka dokun.";
      $("qNext").hidden = false; $("qNext").textContent = TS.pos + 1 < n ? "Sonraki soru ›" : "Sonucumu göster ›";
      clearTimeout(tsTimer); tsTimer = setTimeout(testAdvance, 1000);
    });
    box.append(b);
  });
  $("qBack").hidden = TS.pos === 0; $("qBack").textContent = "‹ Önceki soru";
  $("qNext").hidden = TS.ans[TS.pos] == null; $("qNext").textContent = TS.pos + 1 < n ? "Sonraki soru ›" : "Sonucumu göster ›";
  $("qNext").onclick = testAdvance;
}
function testAdvance() {
  clearTimeout(tsTimer);
  if (!TS || $("quiz").hidden || TS.ans[TS.pos] == null) return;
  if (++TS.pos < TS.t.qs.length) return renderTestQ();
  testResult();
}
function testBack() { clearTimeout(tsTimer); if (TS.pos > 0) { TS.pos--; renderTestQ(); } }
function testResult() {
  const t = TS.t, keys = Object.keys(t.results), score = {};
  keys.forEach(k => score[k] = 0);
  t.qs.forEach((q, i) => { const k = q.o[TS.ans[i]] && q.o[TS.ans[i]][1]; if (k in score) score[k]++; });
  const total = t.qs.length, order = keys.slice().sort((a, b) => score[b] - score[a] || keys.indexOf(a) - keys.indexOf(b));
  const win = t.results[order[0]], second = t.results[order[1]];
  const hist = lsGet("omubumu-test", {}); hist[t.id] = win.t; lsSet("omubumu-test", hist);
  showOnly("result"); $("result").scrollTop = 0;
  $("result").style.setProperty("--sticker", `hsl(${t.h} 80% 64%)`);
  $("rEyebrow").textContent = `${t.em} ${t.name}`;
  $("rTitle").textContent = `${win.em} ${win.t}`;
  $("rDesc").textContent = win.x;
  const facts = $("rFacts"), rows = $("rRows"); facts.innerHTML = ""; rows.innerHTML = "";
  facts.append(fact("Uyum", "%" + Math.round(score[order[0]] / total * 100)), fact("Yakın sonuç", second.t, "%" + Math.round(score[order[1]] / total * 100)));
  order.forEach(k => {
    const r = t.results[k], pct = Math.round(score[k] / total * 100), li = el("li"), tx = el("span"), bar = el("span", "pbar"), fill = el("i");
    fill.style.width = pct + "%"; bar.append(fill);
    tx.append(el("span", "q", `%${pct}`), r.t, bar);
    li.append(el("span", "m", r.em), tx); rows.append(li);
  });
  $("rExtra").hidden = true;
  lastText = `O mu, bu mu? “${t.name}” testinin sonucu: ${win.t}! ${win.x}\nSen de dene: ${location.origin}\n${HANDLE()}`;
  $("again").textContent = "Testi tekrar çöz ›"; againFn = () => playTest(t);
  track(`test-sonuc/${t.id}`, `${t.name}: ${win.t}`);
  storyCard({ kicker: `${t.em} ${t.name}`, title: win.t, sub: win.x, h: t.h });
}

/* ---------- Ortak: geri düğmesi ve çıkış ---------- */
$("qBack").addEventListener("click", () => {
  if ($("quiz").hidden) return;
  if (BR && $("quiz").classList.contains("vsmode")) return bracketBack();
  if (TS && !P && !S) return testBack();
});
const _quizPlain = quizPlain;
quizPlain = function () { _quizPlain(); const q = $("quiz"); q.classList.remove("vsmode"); $("qOpts").classList.remove("vs"); };
$("qExit").addEventListener("click", () => { clearTimeout(brTimer); clearTimeout(tsTimer); BR = null; TS = null; });

/* ---------- Ana sayfa ---------- */
function renderGames() {
  const tr = lsGet("omubumu-tr", {}), ts = lsGet("omubumu-test", {});
  const bx = $("brackets"), tx = $("tests"); if (!bx || !tx) return;
  bx.innerHTML = ""; tx.innerHTML = "";
  BRACKETS.forEach(b => {
    const last = (tr[b.id] || []).slice(-1)[0];
    bx.append(tile({ h: b.h, em: b.em, name: b.name, sub: last ? `Son şampiyonun: ${last}` : `${bracketSize(b.list.length)} aday, ${bracketSize(b.list.length) - 1} eşleşme`, go: () => playBracket(b) }));
  });
  TESTS.forEach(t => {
    const last = ts[t.id];
    tx.append(tile({ h: t.h, em: t.em, name: t.name, sub: last ? `Sonucun: ${last}` : `${t.qs.length} soru`, go: () => playTest(t) }));
  });
  $("brCount").textContent = `${BRACKETS.length} turnuva`;
  $("tsCount").textContent = `${TESTS.length} test`;
}
renderGames();
