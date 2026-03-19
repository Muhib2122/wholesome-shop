self.addEventListener("install", e => {
  self.skipWaiting(); // 🔥 important
});

self.addEventListener("activate", e => {
  console.log("SW Activated");
});

self.addEventListener("fetch", e => {
  // no cache (safe)
});