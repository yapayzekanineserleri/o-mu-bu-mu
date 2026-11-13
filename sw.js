/* Uygulama modu.
   Sayfa ve kod dosyaları: önce internetten (sunucu "değişmedi" derse çok küçük bir yanıt gelir), internet yoksa telefondaki kopyadan.
   Böylece güncellemeler hemen görünür, eski ve yeni dosyalar asla karışmaz, site internetsiz de açılır.
   Yazı tipleri ve ikonlar: telefondaki kopyadan (değişmedikleri için). */
const CACHE = "omubumu-v3";
const CORE = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "favicon.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE.map(u => new Request(u, { cache: "reload" })))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== "GET") return;
  if (url.pathname.endsWith("/admin.html") || url.hostname === "api.github.com" || url.hostname.endsWith("goatcounter.com") || url.hostname === "gc.zgo.at") return;
  const same = url.origin === self.location.origin;
  const font = url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com";
  const staticAsset = same && /\.(png|webp|jpg|svg)$/i.test(url.pathname);
  if (!same && !font) return;

  if (font || staticAsset) {   // değişmeyen dosyalar: önce telefondaki kopya
    e.respondWith(caches.open(CACHE).then(async c => {
      const hit = await c.match(req);
      if (hit) return hit;
      const res = await fetch(req);
      if (res && (res.ok || res.type === "opaque")) c.put(req, res.clone());
      return res;
    }));
    return;
  }
  const key = req.mode === "navigate" ? "index.html" : req;
  e.respondWith(caches.open(CACHE).then(async c => {
    try {
      const res = await fetch(req, { cache: "no-cache" });
      if (res && res.ok) c.put(key, res.clone());
      return res;
    } catch (err) {
      const hit = await c.match(key);
      return hit || new Response("Bağlantı yok. İnternete bağlanınca tekrar dene.", { status: 503, headers: { "Content-Type": "text/plain; charset=utf-8" } });
    }
  }));
});
