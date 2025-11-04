import { useEffect, useState } from 'react';

declare global {
  interface Window {
    VLibras?: { Widget: new (url: string) => unknown };
    vlibrasWidget?: unknown;
  }
}

export default function VLibras() {
  const [, setLoaded] = useState(false);

  useEffect(() => {
    const container = document.getElementById('vlibras-container');
    const accessButton = document.getElementById('vlibras-access-btn');
    const wrapper = document.getElementById('vlibras-wrapper');

    // Define atributos especiais que o plugin procura
    container?.setAttribute('vw', '');
    accessButton?.setAttribute('vw-access-button', '');
    wrapper?.setAttribute('vw-plugin-wrapper', '');

    const ensureWidget = () => {
      if (!window.vlibrasWidget && window.VLibras) {
        window.vlibrasWidget = new window.VLibras.Widget('https://vlibras.gov.br/app');
        setLoaded(true);
      }
    };

    if (window.VLibras) {
      ensureWidget();
      return;
    }

    const scriptId = 'vlibras-plugin-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
      script.async = true;
      script.onload = ensureWidget;
      document.body.appendChild(script);
    } else {
      const i = setInterval(() => {
        if (window.VLibras) {
          clearInterval(i);
          ensureWidget();
        }
      }, 100);
      setTimeout(() => clearInterval(i), 5000);
    }
  }, []);

  return (
    <div id="vlibras-container" className="enabled">
      <div id="vlibras-access-btn" className="active"></div>
      <div id="vlibras-wrapper">
        <div className="vw-plugin-top-wrapper"></div>
      </div>
    </div>
  );
}


export async function toggleVLibras() {
  await ensureVLibrasLoaded();
  const btn =
    (document.querySelector('[vw-access-button]') as HTMLElement | null) ||
    document.getElementById('vlibras-access-btn') as HTMLElement | null;
  btn?.click();
}

async function ensureVLibrasLoaded() {
  if ((window as any).vlibrasWidget) return;

  await waitFor(() => (window as any).VLibras, 5000);
  try {
    if (!(window as any).vlibrasWidget && (window as any).VLibras) {
      (window as any).vlibrasWidget = new (window as any).VLibras.Widget('https://vlibras.gov.br/app');
    }
  } catch {
    // o componente pode instanciar sozinho apÃ³s o load do script
  }
}

function waitFor<T>(fn: () => T | null | undefined, timeoutMs = 3000, intervalMs = 100): Promise<T> {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    const tick = () => {
      const v = fn();
      if (v) return resolve(v as T);
      if (Date.now() - start > timeoutMs) return reject(new Error('Timeout waiting for resource.'));
      setTimeout(tick, intervalMs);
    };
    tick();
  });
}