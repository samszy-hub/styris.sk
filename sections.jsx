/* ===== STYRIS sections ===== */

function Proces() {
  const steps = [
  ["01", "Konzultácia", "Spíšeme, čo potrebujete a kde to bude slúžiť. Poradíme najrozumnejšie riešenie — aj keď ešte nemáte nič vymyslené."],
  ["02", "Návrh a 3D vizualizácia", "Pripravíme vizualizáciu a cenovú ponuku, aby ste výrobok videli ešte pred tým, ako ho začneme vyrábať."],
  ["03", "Ručná výroba\nna mieru", "Vyrobíme vo vlastnej dielni z materiálu, ktorý sedí danej aplikácii. Bez medzičlánkov a subdodávateľov."],
  ["04", "Doprava a montáž", "Privezieme a odborne osadíme aby ste mali čo najmenej starostí"]];

  return (
    <section className="sec" id="proces">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">Ako to prebieha</span>
          <h2>Od nápadu po hotový kus.</h2>
          <p>Nemusíte mať všetko vymyslené dopredu. Prevedieme vás celým procesom — od prvého telefonátu až po montáž.</p>
        </div>
        <div className="proces-grid">
          {steps.map(([n, h, p], i) =>
          <div className="pstep reveal" data-d={String(i % 4)} key={n}>
              <div className="pnum">{n}</div>
              <h3>{h}</h3><p>{p}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function Produkty() {
  return (
    <section className="sec sec-alt" id="produkty">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">Čo vyrábame</span>
          <h2>Štyri veci, ktoré robíme naozaj dobre.</h2>
          <p>Špecializujeme sa na prvky pre rodinné domy a byty — tam, kde záleží na detaile aj na životnosti.</p>
        </div>
        <div className="prod-grid">
          <article className="prod reveal">
            <div className="pimg"><img src="photos/schody-cierne.jpg" alt="Schodisko na mieru" /></div>
            <div className="pbody">
              <h3>Schody</h3>
              <p>Samonosné, konzolové aj priame schodiská — oceľová konštrukcia s dreveným alebo oceľovým stupňom.</p>
              <a className="pmore" href="#kontakt">Mám záujem <span className="ar"><Icon n="arrow" s={16} /></span></a>
            </div>
          </article>
          <article className="prod reveal" data-d="1">
            <div className="pimg"><img src="photos/zabradlie-1.jpg" alt="Zábradlie" /></div>
            <div className="pbody">
              <h3>Zábradlia</h3>
              <p>Subtílne zábradlia na mieru — od geometrických vzorov po čisté minimalistické línie.</p>
              <a className="pmore" href="#kontakt">Mám záujem <span className="ar"><Icon n="arrow" s={16} /></span></a>
            </div>
          </article>
          <article className="prod reveal">
            <div className="pimg"><img src="photos/brana-1.jpg" alt="Brána" /></div>
            <div className="pbody">
              <h3>Brány</h3>
              <p>Posuvné aj krídlové brány s pohonom a diaľkovým ovládaním. Reprezentatívne a spoľahlivé.</p>
              <a className="pmore" href="#kontakt">Mám záujem <span className="ar"><Icon n="arrow" s={16} /></span></a>
            </div>
          </article>
          <article className="prod reveal" data-d="1">
            <div className="pimg"><img src="photos/brana-2.jpg" alt="Plot" /></div>
            <div className="pbody">
              <h3>Ploty</h3>
              <p>Oceľové a hliníkové ploty, ktoré ladia s bránou do jedného čistého celku.</p>
              <a className="pmore" href="#kontakt">Mám záujem <span className="ar"><Icon n="arrow" s={16} /></span></a>
            </div>
          </article>
        </div>
      </div>
    </section>);

}

function Materialy() {
  const m = [
  ["Nerez", "Odolný proti korózii a nenáročný na údržbu — ideálny do exteriéru aj do vlhkých priestorov."],
  ["Oceľ", "Konštrukčná pevnosť pre nosné prvky. Vhodný na schody, brány, ploty."],
  ["Hliník", "Ľahký a stabilný — vhodný pre ploty, brány a exteriérové prvky bez nároku na údržbu."]];

  return (
    <section className="sec sec-alt" id="materialy">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">Materiály</span>
          <h2>Nerez. Oceľ. Hliník.</h2>
          <p>Materiál vždy prispôsobíme tomu, kde bude výrobok slúžiť a čo musí zvládnuť.</p>
        </div>
        <div className="mat-grid">
          {m.map(([h, p], i) =>
          <div className="mat reveal" data-d={String(i)} key={h}>
              <div className="mk">{String(i + 1).padStart(2, '0')}</div>
              <h3>{h}</h3><p>{p}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function PrecoMy() {
  const list = [
  ["Osobný prístup od prvého telefonátu", "Bavíme sa s vami priamo — žiadne call centrá ani obchodníci."],
  ["Orientačná cenová ponuka do 48 hodín", "Ozveme sa rýchlo a s konkrétnym návrhom riešenia."],
  ["Vlastná dielňa, žiadne medzičlánky", "Vyrábame u seba — máme to pod kontrolou od návrhu po montáž."],
  ["Záruka kvality a dlhá životnosť", "Robíme veci tak, aby slúžili roky."]];

  return (
    <section className="sec" id="preco">
      <div className="wrap">
        <div className="preco">
          <div>
            <div className="sec-head reveal" style={{ marginBottom: 34 }}>
              <span className="eyebrow">Prečo práve my</span>
              <h2>Nechcete riskovať?</h2>
              <p>Najčastejšie nás volajú, keď si nie sú istí. Poradíme, navrhneme rozumné riešenie a dodáme výrobok, ktorý bude slúžiť dlhé roky.</p>
            </div>
            <div className="stat-grid reveal" data-d="1">
              <div className="stat"><div className="num">5<em>+</em></div><div className="lbl">rokov skúseností</div></div>
              <div className="stat"><div className="num">100<em>+</em></div><div className="lbl">dokončených realizácií</div></div>
              <div className="stat"><div className="num">100<em style={{ color: "rgb(234, 176, 0)" }}>%</em></div><div className="lbl" style={{ color: "rgb(111, 109, 101)" }}>vlastná výroba</div></div>
              <div className="stat"><div className="num">3D</div><div className="lbl">vizualizácia zdarma</div></div>
            </div>
          </div>
          <ul className="checklist reveal" data-d="1">
            {list.map(([t, s]) =>
            <li key={t}><span className="ci"><Icon n="check" s={15} /></span>
                <span><span className="ct">{t}</span><span className="cs">{s}</span></span></li>
            )}
          </ul>
        </div>
      </div>
    </section>);

}

function Realizacie() {
  const cases = [
  { idx: "01", cat: "Schody", loc: "Rodinný dom", img: "photos/schody-biele.jpg",
    h: "Samonosné schodisko s dreveným stupňom",
    p: "Ľahké, vzdušné schodisko do dvojpodlažného domu. Biela oceľová konštrukcia, dubové stupne a subtílne drôtené zábradlie, ktoré nechá priestor dýchať.",
    specs: ["Oceľ / Výpalky", "Samonosná konštrukcia", "Točité"] },
  { idx: "02", cat: "Schody", loc: "Novostavba", img: "photos/schody-cierne.jpg",
    h: "Čierne oceľové schodisko s centrálnou schodnicou",
    p: "Jednoramenné schody so zatočením na vrchu. Nie len funkčná časť interiéru ale taktiež aj vizuálny prvok",
    specs: ["Oceľ / Výpalky", "Jednoramenné", "Točité"] },
  { idx: "03", cat: "Brány & ploty", loc: "Rezidencia", img: "photos/brana-1.jpg",
    h: "Posuvná brána s pohonom a balikoboxom",
    p: "Samonosná posuvná brána s elektrickým pohonom. Dizajn navrhol Ateliér d3",
    specs: ["Hliník", "Spojené s balíkoboxom"] }];

  return (
    <section className="sec sec-alt" id="realizacie">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">Realizácie</span>
          <h2>Práce z našej dielne.</h2>
          <p>Pozrite si, ako vyzerá cesta od zadania po hotový kus — od rodinných schodísk až po brány.</p>
        </div>
        {cases.map((c) =>
        <article className="case reveal" key={c.idx}>
            <div className="cmedia"><span className="cidx">{c.idx}</span><img src={c.img} alt={c.h} /></div>
            <div className="cbody">
              <div className="cmeta">{c.cat}<span className="dot"></span>{c.loc}</div>
              <h3>{c.h}</h3>
              <p>{c.p}</p>
              <div className="cspecs">
                {c.specs.filter(Boolean).map((v) => <div className="sp" key={v}>{v}</div>)}
              </div>
              <a className="btn btn-ghost" href="#kontakt" style={{ marginTop: 8, alignSelf: 'flex-start' }}>Chcem niečo podobné <span className="ar"><Icon n="arrow" s={16} /></span></a>
            </div>
          </article>
        )}
      </div>
    </section>);

}

function Galeria() {
  const items = [
  ["photos/schody-biele.jpg", "Samonosné schodisko"],
  ["photos/schody-cierne.jpg", "Oceľové schodisko"],
  ["photos/schody-cierne-spine.jpg", "Schodisko točité s podestou"],
  ["photos/zabradlie-1.jpg", "Zábradlie"],
  ["photos/zabradlie-biele-galeria.jpg", "Drôtené zábradlie galérie"],
  ["photos/schody-exterier.jpg", "Vonkajšie oceľové schody"],
  ["photos/panel-police.jpg", "Dierovaný panel s policami"],
  ["photos/brana-1.jpg", "Posuvná brána"],
  [["photos/plot-drevodekor-1.jpg", "photos/plot-drevodekor-2.jpg"], "Plot a brána s drevodekorom"]];

  const VISIBLE = 4;
  const [all, setAll] = React.useState(false);
  const shown = all ? items : items.slice(0, VISIBLE);
  return (
    <section className="sec sec-alt" id="galeria">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">Galéria</span>
          <h2>Naše realizácie.</h2>
          <p>Prierez tým, čo sme vyrobili a osadili. Galériu priebežne dopĺňame o nové zákazky.</p>
        </div>
        <div className="galeria-grid reveal">
          {shown.map(([src, cap]) =>
          <figure className="gal-item" key={Array.isArray(src) ? src[0] : src}>
              {Array.isArray(src) ?
            <div className="gal-duo">
                  {src.map((s) => <img key={s} src={s} alt={cap} loading="lazy" />)}
                </div> :
            <img src={src} alt={cap} loading="lazy" />}
              <figcaption className="gcap">{cap}</figcaption>
            </figure>
          )}
        </div>
        {items.length > VISIBLE &&
        <div className="gal-more">
          <button className="btn btn-ghost" onClick={() => setAll((a) => !a)}>
            {all ? "Zobraziť menej" : "Zobraziť viac"}
            <span className="ar" style={{ transform: all ? 'rotate(180deg)' : 'none' }}><Icon n="arrowDown" s={18} /></span>
          </button>
        </div>}
      </div>
    </section>);

}

// === Nastavenie formulára (Tally) ===
// Po vytvorení formulára na https://tally.so vložte sem jeho ID
// (časť z adresy formulára za /r/ alebo /embed/, napr. "w7XQ2p").
const TALLY_FORM_ID = "2EopPD";

function Kontakt() {
  React.useEffect(() => {
    const run = () => window.Tally && window.Tally.loadEmbeds();
    if (window.Tally) {run();} else {
      let s = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
      if (!s) {
        s = document.createElement('script');
        s.src = "https://tally.so/widgets/embed.js";
        s.onload = run;
        document.body.appendChild(s);
      } else {
        s.addEventListener('load', run);
      }
    }

    // Sledovanie odoslania formulára → Meta Pixel konverzia "Lead"
    const onMessage = (e) => {
      if (typeof e.data !== 'string' && (!e.data || typeof e.data.type === 'undefined')) return;
      let payload = e.data;
      if (typeof payload === 'string') {
        try { payload = JSON.parse(payload); } catch (_) { return; }
      }
      const isSubmit = payload && (
        payload.event === 'Tally.FormSubmitted' ||
        payload.type === 'Tally.FormSubmitted' ||
        payload.includesType === 'Tally.FormSubmitted'
      );
      if (isSubmit && typeof window.fbq === 'function') {
        window.fbq('track', 'Lead', { content_name: 'Dopytový formulár STYRIS' });
      }
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  return (
    <section className="sec kontakt" id="kontakt">
      <div className="wrap">
        <div className="k-grid">
          <div className="k-info reveal">
            <span className="eyebrow">Kontakt</span>
            <h2 style={{ marginTop: 16 }}>Nezáväzná cenová ponuka zdarma.</h2>
            <p>Napíšte nám, čo potrebujete. Ozveme sa do 48 hodín s návrhom riešenia a cenou.</p>
            <div className="k-lines">
              <a className="k-line" href="tel:+421940498866"><span className="ki"><Icon n="phone" s={18} /></span>
                <span><span className="kk">Telefón</span><span className="kv">+421 940 896 866</span></span></a>
              <a className="k-line" href="mailto:styris.sk@gmail.com"><span className="ki"><Icon n="mail" s={18} /></span>
                <span><span className="kk">E-mail</span><span className="kv">styris.sk@gmail.com</span></span></a>
              <a className="k-line" href="https://www.instagram.com/styri.s/" target="_blank" rel="noopener"><span className="ki"><Icon n="ig" s={18} /></span>
                <span><span className="kk">Instagram</span><span className="kv">@styri.s</span></span></a>
              <div className="k-line"><span className="ki"><Icon n="pin" s={18} /></span>
                <span><span className="kk">Pôsobíme</span><span className="kv">Košice · celé Slovensko</span></span></div>
            </div>
          </div>
          <div className="kform-embed-wrap reveal" data-d="1">
            <div className="kform-embed">
              {TALLY_FORM_ID === "VAS_KOD" ?
              <div style={{ padding: '36px 8px', textAlign: 'center', color: '#6F6D65', fontSize: '.95rem', lineHeight: 1.6 }}>
                  Sem sa vloží váš Tally formulár.<br />V súbore <b>sections.jsx</b> nahraďte <b>VAS_KOD</b> za ID svojho formulára.
                </div> :
              <iframe data-tally-src={`https://tally.so/embed/${TALLY_FORM_ID}?alignLeft=1&hideTitle=1&dynamicHeight=1`} loading="lazy" width="100%" height="520" frameBorder="0" title="Dopytový formulár STYRIS"></iframe>}
              <p className="kgdpr">Odoslaním formulára súhlasíte so spracovaním osobných údajov. Vaše kontaktné údaje použijeme výhradne na spätné oslovenie (telefonicky alebo e-mailom) a uchovávame ich len počas doby vybavenia zákazky. Viac v dokumente <a href="GDPR.html">Ochrana osobných údajov</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

function Footer({ theme }) {
  const logo = 'photos/logo-white.png';
  return (
    <footer className="footer">
      <div className="wrap">
        <img src={logo} alt="STYRIS" />
        <div className="flinks">
          {LINKS.map(([h, l]) => <a key={h} href={h}>{l}</a>)}
          <a href="GDPR.html">Ochrana osobných údajov</a>
        </div>
        <div className="fcopy">© {new Date().getFullYear()} STYRIS · Kovovýroba na mieru</div>
      </div>
    </footer>);

}

Object.assign(window, { Proces, Produkty, Materialy, PrecoMy, Realizacie, Galeria, Kontakt, Footer });
