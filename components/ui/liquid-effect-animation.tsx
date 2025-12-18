"use client";

import { useEffect, useRef } from "react";

export function LiquidEffectAnimation() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let effect: any;

    const loadScript = (src: string) =>
      new Promise<void>((resolve, reject) => {
        const existing = document.querySelector(`script[src="${src}"]`) as
          | HTMLScriptElement
          | null;
        if (existing) {
          if (existing.getAttribute("data-loaded") === "true") {
            resolve();
          } else {
            existing.addEventListener("load", () => resolve());
            existing.addEventListener("error", () =>
              reject(new Error(`Failed to load script: ${src}`)),
            );
          }
          return;
        }

        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = () => {
          script.setAttribute("data-loaded", "true");
          resolve();
        };
        script.onerror = () =>
          reject(new Error(`Failed to load script: ${src}`));
        document.body.appendChild(script);
      });

    const init = async () => {
      if (!containerRef.current) return;

      try {
        // Load three.js and Vanta WAVES from CDN
        await loadScript(
          "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js",
        );
        await loadScript(
          "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js",
        );

        // @ts-ignore
        if (window.VANTA && window.VANTA.WAVES) {
          // @ts-ignore
          effect = window.VANTA.WAVES({
            el: containerRef.current,
            // very dark teal waves on almost-black background
            color: 0x004050,
            shininess: 15,
            waveHeight: 18,
            waveSpeed: 0.7,
            zoom: 1.0,
            // @ts-ignore Vanta accepts this option
            backgroundColor: 0x000000, // pure black for maximum text contrast
          });
        }
      } catch (error) {
        console.error("Failed to initialize liquid background:", error);
      }
    };

    init();

    return () => {
      if (effect && typeof effect.destroy === "function") {
        effect.destroy();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 m-0 h-full w-full touch-none overflow-hidden"
      style={{ fontFamily: '"Montserrat", serif' }}
    />
  );
}

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    VANTA?: any;
  }
}


