/* ===== STYRIS app ===== */
const { useState, useEffect, useRef } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "light",
  "hero": "split",
  "headfont": "geometric"
} /*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Scroll reveal. NOTE: the embedded preview iframe is rendered at full content
  // height and never scrolls internally, so neither scroll events nor
  // IntersectionObserver fire. We therefore (a) reveal whatever is on-screen at
  // load, (b) attach a scroll listener for real deployments, and (c) keep a safety
  // timer that reveals everything so content is NEVER left hidden.
  useEffect(() => {
    const reveal = (el) => el.classList.add('in');
    const pending = () => document.querySelectorAll('.reveal:not(.in)');
    const check = () => {
      const h = window.innerHeight || document.documentElement.clientHeight;
      pending().forEach((el) => {const r = el.getBoundingClientRect();if (r.top < h * 0.9 && r.bottom > 0) reveal(el);});
    };
    check();
    window.addEventListener('scroll', check, { passive: true, capture: true });
    window.addEventListener('resize', check);
    const id = setInterval(check, 250);
    const safety = setTimeout(() => {pending().forEach(reveal);}, 1900);
    requestAnimationFrame(check);
    return () => {window.removeEventListener('scroll', check, { capture: true });window.removeEventListener('resize', check);clearInterval(id);clearTimeout(safety);};
  }, [t.hero, t.theme]);

  return (
    <div className="site" data-theme={t.theme} data-headfont={t.headfont}>
      <Nav theme={t.theme} />
      <main>
        <Hero t={t} />
        <Realizacie />
        <Proces />
        <Materialy />
        <PrecoMy />
        <Galeria />
        <Kontakt />
      </main>
      <Footer theme={t.theme} />

      <TweaksPanel title="Varianty">
        <TweakSection label="Vzhľad" />
        <TweakRadio label="Téma" value={t.theme}
        options={[{ value: 'light', label: 'Svetlá' }, { value: 'dark', label: 'Tmavá' }]}
        onChange={(v) => setTweak('theme', v)} />
        <TweakRadio label="Nadpisy" value={t.headfont}
        options={[{ value: 'geometric', label: 'Čisté' }, { value: 'condensed', label: 'Výrazné' }]}
        onChange={(v) => setTweak('headfont', v)} />
        <TweakSection label="Úvodná sekcia (hero)" />
        <TweakRadio label="Layout" value={t.hero}
        options={[{ value: 'split', label: 'Split' }, { value: 'full', label: 'Foto' }, { value: 'typo', label: 'Typo' }]}
        onChange={(v) => setTweak('hero', v)} />
        <p style={{ font: "12px/1.5 Lato,sans-serif", color: "var(--muted,#888)", padding: "4px 2px 0" }}>
          Split — text + fotka vedľa seba · Foto — celoplošná fotka · Typo — veľký nadpis s pásom fotiek.
        </p>
      </TweaksPanel>
    </div>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);