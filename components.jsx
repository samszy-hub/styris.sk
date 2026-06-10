/* ===== STYRIS components: Icons, Nav, Hero ===== */

const Icon = ({ n, s = 20 }) => {
  const p = { width: s, height: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor",
    strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
  const paths = {
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    arrowDown: <path d="M12 5v14M6 13l6 6 6-6" />,
    phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />,
    mail: <><rect x="3" y="5" width="18" height="14" rx="1.5" /><path d="M3 7l9 6 9-6" /></>,
    pin: <><path d="M12 21s-7-6.5-7-11a7 7 0 1114 0c0 4.5-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></>,
    ig: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" /></>,
    check: <path d="M5 12.5l4.5 4.5L19 7" strokeWidth="2.4" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>
  };
  return <svg {...p}>{paths[n]}</svg>;
};

const LINKS = [
["#realizacie", "Realizácie"], ["#proces", "Proces"], ["#materialy", "Materiály"],
["#preco", "Prečo my"], ["#kontakt", "Kontakt"]];


function Nav({ theme }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20);
    f();window.addEventListener('scroll', f, { passive: true });
    return () => window.removeEventListener('scroll', f);
  }, []);
  const logo = theme === 'dark' ? 'photos/logo-white.png' : 'photos/logo-dark.png';
  return (
    <nav className={"nav" + (scrolled ? " scrolled" : "")}>
      <div className="wrap">
        <a href="#top" aria-label="STYRIS"><img className="nav-logo" src={logo} alt="STYRIS" /></a>
        <div className="nav-links">
          {LINKS.map(([h, l]) => <a key={h} href={h}>{l}</a>)}
        </div>
        <div className="nav-cta">
          <a className="nav-tel" href="tel:+421940498866"><Icon n="phone" s={16} />0940 498 866</a>
          <a className="btn btn-primary" href="#kontakt">Cenová ponuka</a>
          <button className="nav-burger" onClick={() => setOpen((o) => !o)} aria-label="Menu"><Icon n="menu" /></button>
        </div>
      </div>
      {open &&
      <div style={{ position: 'absolute', top: 'var(--hh)', left: 0, right: 0, background: 'var(--bg)',
        borderBottom: '1px solid var(--line)', padding: '10px 0', display: 'flex', flexDirection: 'column' }}>
          {LINKS.map(([h, l]) => <a key={h} href={h} onClick={() => setOpen(false)}
        style={{ padding: '13px 32px', fontFamily: 'Montserrat', fontWeight: 600 }}>{l}</a>)}
        </div>
      }
    </nav>);

}

function HeroCopy() {
  return null;
}

/* ---------- HERO ---------- */
function Hero({ t }) {
  const theme = t.theme;
  const heroImg = theme === 'dark' ? 'photos/schody-cierne.jpg' : 'photos/schody-biele.jpg';
  const v = t.hero;

  const H1 = ({ cls }) =>
  <h1 className={cls}>Kovovýroba<br /><span className="hero-mark">na mieru.</span></h1>;

  const lead = "Navrhneme, vyrobíme a osadíme. Oceľ, nerez aj hliník — do interiéru aj exteriéru. Bez zbytočných komplikácií.";
  const ctas =
  <div className="hero-cta">
      <a className="btn btn-primary btn-lg" href="#kontakt">Nezáväzná cenová ponuka <span className="ar"><Icon n="arrow" s={18} /></span></a>
      <a className="btn btn-ghost btn-lg" href="#realizacie">Pozrieť realizácie</a>
    </div>;


  if (v === 'full') {
    return (
      <header className="hero hero-full" id="top">
        <div className="hbg"><img src="photos/schody-cierne.jpg" alt="Oceľové schodisko na mieru" /></div>
        <div className="hero-meta">
          <div className="m">KOVOVÝROBA · KOŠICE</div>
          <div className="m" style={{ opacity: .7, marginTop: 4 }}>OD ROKU 2019</div>
        </div>
        <div className="wrap">
          <div className="reveal" data-d="1"><H1 cls="h1-xl" /></div>
          <p className="lead reveal" data-d="2">{lead}</p>
          <div className="reveal" data-d="3">{ctas}</div>
        </div>
      </header>);

  }

  if (v === 'typo') {
    return (
      <header className="hero hero-typo" id="top">
        <div className="wrap">
          <div className="htop">
            <div className="reveal" data-d="1"><H1 cls="h1-mega" /></div>
            <p className="lead reveal" data-d="2" style={{ maxWidth: '34ch' }}>{lead}</p>
          </div>
          <div className="hbar reveal" data-d="2">{ctas}</div>
          <div className="hstrip reveal" data-d="3">
            <div className="cell"><img src="photos/schody-biele.jpg" alt="Schodisko" /><span className="cap">Schody</span></div>
            <div className="cell"><img src="photos/zabradlie-1.jpg" alt="Zábradlie" /><span className="cap">Zábradlia</span></div>
            <div className="cell"><img src="photos/brana-1.jpg" alt="Brána" /><span className="cap">Brány & ploty</span></div>
          </div>
        </div>
      </header>);

  }

  /* default: split */
  return (
    <header className="hero hero-split" id="top">
      <div className="wrap">
        <div className="hcol-text">
          <div className="reveal" data-d="1"><H1 cls="h1-xl" /></div>
          <p className="lead reveal" data-d="2">{lead}</p>
          <div className="reveal" data-d="2">{ctas}</div>
          <div className="hero-stats reveal" data-d="3">
            <div><div className="num">5+</div><div className="lbl">rokov skúseností</div></div>
            <div><div className="num">100+</div><div className="lbl">realizácií</div></div>
            <div><div className="num">100%</div><div className="lbl">vlastná výroba</div></div>
          </div>
        </div>
        <div className="hcol-media reveal" data-d="2">
          <img src={heroImg} alt="Schodisko na mieru od STYRIS" />
          <span className="hmedia-tag">Samonosné schodisko · RD</span>
        </div>
      </div>
    </header>);

}

Object.assign(window, { Icon, Nav, Hero });