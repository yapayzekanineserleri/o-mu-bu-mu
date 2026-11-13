/* Uygulama modu: siteyi telefonda internetsiz de açılabilir yapar ve tekrar gelen ziyaretçilerin
   dosyaları yeniden indirmesini önler (sunucu trafiği azalır).
   Strateji: önce önbellekten hızlıca göster, arkada sessizce yenisini indir (stale-while-revalidate).
   Yönetim panelinden yapılan değişiklikler bu yüzden en geç bir sonraki açılışta görünür. */
const CACHE = "omubumu-v1";
const CORE = [
  "./", "index.html", "app2.js", "data-anket.js", "data-hizli.js", "data-pair0.js", "data-paketler.js",
  "data-hikaye.js", "data-tema.js", "manifest.webmanifest", "icon-192.png", "icon-512.png", "favicon.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== "GET") return;
  // Yönetim paneli, GitHub ve istatistik istekleri her zaman doğrudan internete gider
  if (url.pathname.endsWith("/admin.html") || url.hostname === "api.github.com" || url.hostname.endsWith("goatcounter.com") || url.hostname === "gc.zgo.at") return;
  const same = url.origin === self.location.origin, font = url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com";
  if (!same && !font) return;
  const key = same && req.mode === "navigate" ? "index.html" : req;
  e.respondWith(caches.open(CACHE).then(async c => {
    const hit = await c.match(key, { ignoreSearch: same });
    const net = fetch(req).then(res => { if (res && (res.ok || res.type === "opaque")) c.put(key, res.clone()); return res; }).catch(() => null);
    if (hit) { e.waitUntil(net); return hit; }
    const res = await net;
    return res || new Response("Bağlantı yok. İnternete bağlanınca tekrar dene.", { status: 503, headers: { "Content-Type": "text/plain; charset=utf-8" } });
  }));
});
