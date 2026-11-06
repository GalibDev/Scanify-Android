/* Only application assets are cached. Documents remain in IndexedDB. */
const VERSION = "becccac72cd347fa";
const CORE = ["/","/manifest.webmanifest","/icon.svg","/icons/icon-192.png","/icons/icon-512.png","/icons/maskable-512.png","/icons/apple-touch-icon.png","/_next/static/chunks/00_lf_pu_od7t.js","/_next/static/chunks/069l69d54-yzz.js","/_next/static/chunks/0aq83dgo1adhp.js","/_next/static/chunks/0cz1d0mv5g_q7.js","/_next/static/chunks/0k2_s_6qruccf.js","/_next/static/chunks/0kei32govxjue.js","/_next/static/chunks/0qh4qfcvjkl_p.css","/_next/static/chunks/0wfurka9errm3.js","/_next/static/chunks/11q6og4wv9qq4.css","/_next/static/chunks/1j4y0exdv3xbe.js","/_next/static/chunks/1plugv72o75l3.js","/_next/static/chunks/1sqo76b5rt561.js","/_next/static/chunks/2fe3ldtljui2_.js","/_next/static/chunks/3dutz8v5s_9a9.js","/_next/static/chunks/3qfy96eoyh-ek.js","/_next/static/chunks/3rumfm4zr4v3v.js","/_next/static/chunks/3t12quoa5bygi.js","/_next/static/chunks/3zy8ukqxcj94w.js","/_next/static/chunks/turbopack-2u1d16houkiyo.js","/_next/static/pSdioKsPEPP4aNIVO_3JJ/_buildManifest.js","/_next/static/pSdioKsPEPP4aNIVO_3JJ/_clientMiddlewareManifest.js","/_next/static/pSdioKsPEPP4aNIVO_3JJ/_ssgManifest.js"];
const TOOLS = ["/qpdf-worker.js","/pdf-runtime/cmaps/78-EUC-H.bcmap","/pdf-runtime/cmaps/78-EUC-V.bcmap","/pdf-runtime/cmaps/78-H.bcmap","/pdf-runtime/cmaps/78-RKSJ-H.bcmap","/pdf-runtime/cmaps/78-RKSJ-V.bcmap","/pdf-runtime/cmaps/78-V.bcmap","/pdf-runtime/cmaps/78ms-RKSJ-H.bcmap","/pdf-runtime/cmaps/78ms-RKSJ-V.bcmap","/pdf-runtime/cmaps/83pv-RKSJ-H.bcmap","/pdf-runtime/cmaps/90ms-RKSJ-H.bcmap","/pdf-runtime/cmaps/90ms-RKSJ-V.bcmap","/pdf-runtime/cmaps/90msp-RKSJ-H.bcmap","/pdf-runtime/cmaps/90msp-RKSJ-V.bcmap","/pdf-runtime/cmaps/90pv-RKSJ-H.bcmap","/pdf-runtime/cmaps/90pv-RKSJ-V.bcmap","/pdf-runtime/cmaps/Add-H.bcmap","/pdf-runtime/cmaps/Add-RKSJ-H.bcmap","/pdf-runtime/cmaps/Add-RKSJ-V.bcmap","/pdf-runtime/cmaps/Add-V.bcmap","/pdf-runtime/cmaps/Adobe-CNS1-0.bcmap","/pdf-runtime/cmaps/Adobe-CNS1-1.bcmap","/pdf-runtime/cmaps/Adobe-CNS1-2.bcmap","/pdf-runtime/cmaps/Adobe-CNS1-3.bcmap","/pdf-runtime/cmaps/Adobe-CNS1-4.bcmap","/pdf-runtime/cmaps/Adobe-CNS1-5.bcmap","/pdf-runtime/cmaps/Adobe-CNS1-6.bcmap","/pdf-runtime/cmaps/Adobe-CNS1-UCS2.bcmap","/pdf-runtime/cmaps/Adobe-GB1-0.bcmap","/pdf-runtime/cmaps/Adobe-GB1-1.bcmap","/pdf-runtime/cmaps/Adobe-GB1-2.bcmap","/pdf-runtime/cmaps/Adobe-GB1-3.bcmap","/pdf-runtime/cmaps/Adobe-GB1-4.bcmap","/pdf-runtime/cmaps/Adobe-GB1-5.bcmap","/pdf-runtime/cmaps/Adobe-GB1-UCS2.bcmap","/pdf-runtime/cmaps/Adobe-Japan1-0.bcmap","/pdf-runtime/cmaps/Adobe-Japan1-1.bcmap","/pdf-runtime/cmaps/Adobe-Japan1-2.bcmap","/pdf-runtime/cmaps/Adobe-Japan1-3.bcmap","/pdf-runtime/cmaps/Adobe-Japan1-4.bcmap","/pdf-runtime/cmaps/Adobe-Japan1-5.bcmap","/pdf-runtime/cmaps/Adobe-Japan1-6.bcmap","/pdf-runtime/cmaps/Adobe-Japan1-UCS2.bcmap","/pdf-runtime/cmaps/Adobe-Korea1-0.bcmap","/pdf-runtime/cmaps/Adobe-Korea1-1.bcmap","/pdf-runtime/cmaps/Adobe-Korea1-2.bcmap","/pdf-runtime/cmaps/Adobe-Korea1-UCS2.bcmap","/pdf-runtime/cmaps/B5-H.bcmap","/pdf-runtime/cmaps/B5-V.bcmap","/pdf-runtime/cmaps/B5pc-H.bcmap","/pdf-runtime/cmaps/B5pc-V.bcmap","/pdf-runtime/cmaps/CNS-EUC-H.bcmap","/pdf-runtime/cmaps/CNS-EUC-V.bcmap","/pdf-runtime/cmaps/CNS1-H.bcmap","/pdf-runtime/cmaps/CNS1-V.bcmap","/pdf-runtime/cmaps/CNS2-H.bcmap","/pdf-runtime/cmaps/CNS2-V.bcmap","/pdf-runtime/cmaps/ETen-B5-H.bcmap","/pdf-runtime/cmaps/ETen-B5-V.bcmap","/pdf-runtime/cmaps/ETenms-B5-H.bcmap","/pdf-runtime/cmaps/ETenms-B5-V.bcmap","/pdf-runtime/cmaps/ETHK-B5-H.bcmap","/pdf-runtime/cmaps/ETHK-B5-V.bcmap","/pdf-runtime/cmaps/EUC-H.bcmap","/pdf-runtime/cmaps/EUC-V.bcmap","/pdf-runtime/cmaps/Ext-H.bcmap","/pdf-runtime/cmaps/Ext-RKSJ-H.bcmap","/pdf-runtime/cmaps/Ext-RKSJ-V.bcmap","/pdf-runtime/cmaps/Ext-V.bcmap","/pdf-runtime/cmaps/GB-EUC-H.bcmap","/pdf-runtime/cmaps/GB-EUC-V.bcmap","/pdf-runtime/cmaps/GB-H.bcmap","/pdf-runtime/cmaps/GB-V.bcmap","/pdf-runtime/cmaps/GBK-EUC-H.bcmap","/pdf-runtime/cmaps/GBK-EUC-V.bcmap","/pdf-runtime/cmaps/GBK2K-H.bcmap","/pdf-runtime/cmaps/GBK2K-V.bcmap","/pdf-runtime/cmaps/GBKp-EUC-H.bcmap","/pdf-runtime/cmaps/GBKp-EUC-V.bcmap","/pdf-runtime/cmaps/GBpc-EUC-H.bcmap","/pdf-runtime/cmaps/GBpc-EUC-V.bcmap","/pdf-runtime/cmaps/GBT-EUC-H.bcmap","/pdf-runtime/cmaps/GBT-EUC-V.bcmap","/pdf-runtime/cmaps/GBT-H.bcmap","/pdf-runtime/cmaps/GBT-V.bcmap","/pdf-runtime/cmaps/GBTpc-EUC-H.bcmap","/pdf-runtime/cmaps/GBTpc-EUC-V.bcmap","/pdf-runtime/cmaps/H.bcmap","/pdf-runtime/cmaps/Hankaku.bcmap","/pdf-runtime/cmaps/Hiragana.bcmap","/pdf-runtime/cmaps/HKdla-B5-H.bcmap","/pdf-runtime/cmaps/HKdla-B5-V.bcmap","/pdf-runtime/cmaps/HKdlb-B5-H.bcmap","/pdf-runtime/cmaps/HKdlb-B5-V.bcmap","/pdf-runtime/cmaps/HKgccs-B5-H.bcmap","/pdf-runtime/cmaps/HKgccs-B5-V.bcmap","/pdf-runtime/cmaps/HKm314-B5-H.bcmap","/pdf-runtime/cmaps/HKm314-B5-V.bcmap","/pdf-runtime/cmaps/HKm471-B5-H.bcmap","/pdf-runtime/cmaps/HKm471-B5-V.bcmap","/pdf-runtime/cmaps/HKscs-B5-H.bcmap","/pdf-runtime/cmaps/HKscs-B5-V.bcmap","/pdf-runtime/cmaps/Katakana.bcmap","/pdf-runtime/cmaps/KSC-EUC-H.bcmap","/pdf-runtime/cmaps/KSC-EUC-V.bcmap","/pdf-runtime/cmaps/KSC-H.bcmap","/pdf-runtime/cmaps/KSC-Johab-H.bcmap","/pdf-runtime/cmaps/KSC-Johab-V.bcmap","/pdf-runtime/cmaps/KSC-V.bcmap","/pdf-runtime/cmaps/KSCms-UHC-H.bcmap","/pdf-runtime/cmaps/KSCms-UHC-HW-H.bcmap","/pdf-runtime/cmaps/KSCms-UHC-HW-V.bcmap","/pdf-runtime/cmaps/KSCms-UHC-V.bcmap","/pdf-runtime/cmaps/KSCpc-EUC-H.bcmap","/pdf-runtime/cmaps/KSCpc-EUC-V.bcmap","/pdf-runtime/cmaps/LICENSE","/pdf-runtime/cmaps/NWP-H.bcmap","/pdf-runtime/cmaps/NWP-V.bcmap","/pdf-runtime/cmaps/RKSJ-H.bcmap","/pdf-runtime/cmaps/RKSJ-V.bcmap","/pdf-runtime/cmaps/Roman.bcmap","/pdf-runtime/cmaps/UniCNS-UCS2-H.bcmap","/pdf-runtime/cmaps/UniCNS-UCS2-V.bcmap","/pdf-runtime/cmaps/UniCNS-UTF16-H.bcmap","/pdf-runtime/cmaps/UniCNS-UTF16-V.bcmap","/pdf-runtime/cmaps/UniCNS-UTF32-H.bcmap","/pdf-runtime/cmaps/UniCNS-UTF32-V.bcmap","/pdf-runtime/cmaps/UniCNS-UTF8-H.bcmap","/pdf-runtime/cmaps/UniCNS-UTF8-V.bcmap","/pdf-runtime/cmaps/UniGB-UCS2-H.bcmap","/pdf-runtime/cmaps/UniGB-UCS2-V.bcmap","/pdf-runtime/cmaps/UniGB-UTF16-H.bcmap","/pdf-runtime/cmaps/UniGB-UTF16-V.bcmap","/pdf-runtime/cmaps/UniGB-UTF32-H.bcmap","/pdf-runtime/cmaps/UniGB-UTF32-V.bcmap","/pdf-runtime/cmaps/UniGB-UTF8-H.bcmap","/pdf-runtime/cmaps/UniGB-UTF8-V.bcmap","/pdf-runtime/cmaps/UniJIS-UCS2-H.bcmap","/pdf-runtime/cmaps/UniJIS-UCS2-HW-H.bcmap","/pdf-runtime/cmaps/UniJIS-UCS2-HW-V.bcmap","/pdf-runtime/cmaps/UniJIS-UCS2-V.bcmap","/pdf-runtime/cmaps/UniJIS-UTF16-H.bcmap","/pdf-runtime/cmaps/UniJIS-UTF16-V.bcmap","/pdf-runtime/cmaps/UniJIS-UTF32-H.bcmap","/pdf-runtime/cmaps/UniJIS-UTF32-V.bcmap","/pdf-runtime/cmaps/UniJIS-UTF8-H.bcmap","/pdf-runtime/cmaps/UniJIS-UTF8-V.bcmap","/pdf-runtime/cmaps/UniJIS2004-UTF16-H.bcmap","/pdf-runtime/cmaps/UniJIS2004-UTF16-V.bcmap","/pdf-runtime/cmaps/UniJIS2004-UTF32-H.bcmap","/pdf-runtime/cmaps/UniJIS2004-UTF32-V.bcmap","/pdf-runtime/cmaps/UniJIS2004-UTF8-H.bcmap","/pdf-runtime/cmaps/UniJIS2004-UTF8-V.bcmap","/pdf-runtime/cmaps/UniJISPro-UCS2-HW-V.bcmap","/pdf-runtime/cmaps/UniJISPro-UCS2-V.bcmap","/pdf-runtime/cmaps/UniJISPro-UTF8-V.bcmap","/pdf-runtime/cmaps/UniJISX0213-UTF32-H.bcmap","/pdf-runtime/cmaps/UniJISX0213-UTF32-V.bcmap","/pdf-runtime/cmaps/UniJISX02132004-UTF32-H.bcmap","/pdf-runtime/cmaps/UniJISX02132004-UTF32-V.bcmap","/pdf-runtime/cmaps/UniKS-UCS2-H.bcmap","/pdf-runtime/cmaps/UniKS-UCS2-V.bcmap","/pdf-runtime/cmaps/UniKS-UTF16-H.bcmap","/pdf-runtime/cmaps/UniKS-UTF16-V.bcmap","/pdf-runtime/cmaps/UniKS-UTF32-H.bcmap","/pdf-runtime/cmaps/UniKS-UTF32-V.bcmap","/pdf-runtime/cmaps/UniKS-UTF8-H.bcmap","/pdf-runtime/cmaps/UniKS-UTF8-V.bcmap","/pdf-runtime/cmaps/V.bcmap","/pdf-runtime/cmaps/WP-Symbol.bcmap","/pdf-runtime/iccs/CGATS001Compat-v2-micro.icc","/pdf-runtime/iccs/LICENSE","/pdf-runtime/pdf.worker.min.mjs","/pdf-runtime/PDFJS-LICENSE.txt","/pdf-runtime/QPDF-WASM-LICENSE.txt","/pdf-runtime/qpdf.js","/pdf-runtime/qpdf.wasm","/pdf-runtime/standard_fonts/FoxitDingbats.pfb","/pdf-runtime/standard_fonts/FoxitFixed.pfb","/pdf-runtime/standard_fonts/FoxitFixedBold.pfb","/pdf-runtime/standard_fonts/FoxitFixedBoldItalic.pfb","/pdf-runtime/standard_fonts/FoxitFixedItalic.pfb","/pdf-runtime/standard_fonts/FoxitSerif.pfb","/pdf-runtime/standard_fonts/FoxitSerifBold.pfb","/pdf-runtime/standard_fonts/FoxitSerifBoldItalic.pfb","/pdf-runtime/standard_fonts/FoxitSerifItalic.pfb","/pdf-runtime/standard_fonts/FoxitSymbol.pfb","/pdf-runtime/standard_fonts/LiberationSans-Bold.ttf","/pdf-runtime/standard_fonts/LiberationSans-BoldItalic.ttf","/pdf-runtime/standard_fonts/LiberationSans-Italic.ttf","/pdf-runtime/standard_fonts/LiberationSans-Regular.ttf","/pdf-runtime/standard_fonts/LICENSE_FOXIT","/pdf-runtime/standard_fonts/LICENSE_LIBERATION","/pdf-runtime/wasm/jbig2.wasm","/pdf-runtime/wasm/jbig2_nowasm_fallback.js","/pdf-runtime/wasm/LICENSE_JBIG2","/pdf-runtime/wasm/LICENSE_OPENJPEG","/pdf-runtime/wasm/LICENSE_PDFJS_JBIG2","/pdf-runtime/wasm/LICENSE_PDFJS_OPENJPEG","/pdf-runtime/wasm/LICENSE_PDFJS_QCMS","/pdf-runtime/wasm/LICENSE_PDFJS_QUICKJS","/pdf-runtime/wasm/LICENSE_QCMS","/pdf-runtime/wasm/LICENSE_QUICKJS","/pdf-runtime/wasm/openjpeg.wasm","/pdf-runtime/wasm/openjpeg_nowasm_fallback.js","/pdf-runtime/wasm/qcms_bg.wasm","/pdf-runtime/wasm/quickjs-eval.js","/pdf-runtime/wasm/quickjs-eval.wasm","/ocr-runtime/ben.traineddata.gz","/ocr-runtime/eng.traineddata.gz","/ocr-runtime/TESSERACT-CORE-LICENSE.txt","/ocr-runtime/tesseract-core-lstm.wasm.js","/ocr-runtime/tesseract-core-relaxedsimd-lstm.wasm.js","/ocr-runtime/tesseract-core-simd-lstm.wasm.js","/ocr-runtime/TESSERACT-LICENSE.txt","/ocr-runtime/worker.min.js"];
const SHELL = "scanify-shell-" + VERSION;
const RUNTIME = "scanify-runtime-" + VERSION;
self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(SHELL).then((cache) => cache.addAll(CORE)));
});
self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      for (const key of await caches.keys())
        if (
          (key.startsWith("scanify-shell-") ||
            key.startsWith("scanify-runtime-")) &&
          key !== SHELL &&
          key !== RUNTIME
        )
          await caches.delete(key);
      await self.clients.claim();
    })(),
  );
});
self.addEventListener("fetch", (event) => {
  const request = event.request,
    url = new URL(request.url);
  if (request.method !== "GET" || url.origin !== self.location.origin) return;
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request).catch(async () => (await caches.open(SHELL)).match("/")),
    );
    return;
  }
  if (
    !url.pathname.startsWith("/_next/static/") &&
    !url.pathname.startsWith("/pdf-runtime/") &&
    !url.pathname.startsWith("/ocr-runtime/") &&
    url.pathname !== "/qpdf-worker.js"
  )
    return;
  event.respondWith(
    (async () => {
      const cached = await caches.match(request);
      if (cached) return cached;
      const response = await fetch(request);
      if (response.ok) {
        const cache = await caches.open(RUNTIME);
        await cache.put(request, response.clone()).catch(() => {});
      }
      return response;
    })(),
  );
});
self.addEventListener("message", (event) => {
  if (event.data?.type === "ACTIVATE_UPDATE") {
    self.skipWaiting();
    return;
  }
  if (event.data?.type !== "PREPARE_OFFLINE") return;
  event.waitUntil(
    (async () => {
      try {
        const cache = await caches.open(RUNTIME);
        let done = 0,
          cursor = 0;
        await Promise.all(
          Array.from({ length: 4 }, async () => {
            while (cursor < TOOLS.length) {
              const url = TOOLS[cursor++];
              if (!(await cache.match(url))) await cache.add(url);
              done++;
              event.source?.postMessage({
                type: "OFFLINE_PROGRESS",
                done,
                total: TOOLS.length,
              });
            }
          }),
        );
        await cache.put("/offline-tools-ready", new Response("ready"));
        event.source?.postMessage({ type: "OFFLINE_READY" });
      } catch {
        event.source?.postMessage({
          type: "OFFLINE_ERROR",
          message:
            "Could not finish offline downloads. Check your connection and device storage, then retry.",
        });
      }
    })(),
  );
});
