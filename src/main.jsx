import { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  BookOpen,
  CalendarDays,
  ChevronDown,
  ClipboardList,
  Download,
  ExternalLink,
  FileText,
  Library,
  Menu,
  Music2,
  Newspaper,
  Scale,
  SearchCheck,
  ShieldCheck,
  Stethoscope,
  X
} from "lucide-react";
import {
  claims,
  demands,
  downloads,
  homeCards,
  mirInfografiaUrl,
  mirPortalUrl,
  news,
  pages,
  quickArguments,
  sourceGroups,
  sourceRegistry,
  strikeSongUrl,
  updates
} from "./data";
import "./styles.css";

const pageCopy = {
  home: {
    kicker: "Portal médico-facultativo",
    title: "Estatuto Médico Propio",
    lead: "No pedimos decidir por nadie. Pedimos que nadie decida por nosotros.",
    text:
      "Datos, fuentes, noticias, novedades y materiales para defender un Estatuto Médico y Facultativo propio."
  },
  reivindicaciones: {
    kicker: "Programa",
    title: "Qué reclamamos",
    lead: "Un Estatuto Médico y Facultativo propio no es privilegio: es negociación específica para responsabilidades específicas.",
    text: "Reivindicaciones breves, verificables y pensadas para compartir."
  },
  anteproyecto: {
    kicker: "Matriz de desmontaje",
    title: "Anteproyecto de Estatuto Marco",
    lead: "Qué se anuncia, qué queda sin garantizar, qué riesgo deja abierto y qué reclamamos.",
    text: "Cada bloque separa relato institucional, realidad práctica, impacto y fuentes."
  },
  noticias: {
    kicker: "Respuesta pública",
    title: "Noticias y declaraciones desmontadas",
    lead: "Fichas breves para responder a titulares, comunicados y entrevistas.",
    text: "El objetivo es evitar debates confusos: qué se afirma, respuesta, clave y fuentes."
  },
  novedades: {
    kicker: "Registro vivo",
    title: "Novedades",
    lead: "Cronología de actualizaciones, fuentes incorporadas y respuestas nuevas.",
    text: "Una página para saber qué ha cambiado y qué materiales se han añadido."
  },
  fuentes: {
    kicker: "Auditable",
    title: "Fuentes y evidencia",
    lead: "El argumento debe poder comprobarse.",
    text: "Fuentes oficiales, posición médica, prensa, sindicatos firmantes, bloque MIR y descargas."
  },
  argumentario: {
    kicker: "Mensajes rápidos",
    title: "Argumentario",
    lead: "Frases cortas para redes, asambleas, prensa y conversaciones públicas.",
    text: "El marco comunicativo debe ser repetible: voz propia, guardias computables, descanso real y derechos."
  },
  mir: {
    kicker: "Caso demostrativo",
    title: "MIR: no es sueldo, son guardias",
    lead: "El bloque MIR vive en su portal especializado.",
    text: "Aquí queda el resumen y el enlace al análisis completo para no contaminar la arquitectura general."
  }
};

function App() {
  const pageId = document.getElementById("root")?.dataset.page ?? "home";
  const copy = pageCopy[pageId] ?? pageCopy.home;

  return (
    <main>
      <Header current={pageId} />
      <Hero copy={copy} pageId={pageId} />
      {pageId === "home" && <HomePage />}
      {pageId === "reivindicaciones" && <ReivindicacionesPage />}
      {pageId === "anteproyecto" && <AnteproyectoPage />}
      {pageId === "noticias" && <NoticiasPage />}
      {pageId === "novedades" && <NovedadesPage />}
      {pageId === "fuentes" && <FuentesPage />}
      {pageId === "argumentario" && <ArgumentarioPage />}
      {pageId === "mir" && <MirPage />}
      <Footer />
    </main>
  );
}

function Header({ current }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className={open ? "site-header open" : "site-header"}>
      <a className="brand" href="index.html" onClick={() => setOpen(false)}>
        <Stethoscope size={21} />
        <span>Estatuto Médico Propio</span>
      </a>
      <button className="menu-button" type="button" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen((value) => !value)}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      <nav id="site-nav" aria-label="Navegación principal">
        {pages.map((page) => (
          <a className={current === page.id ? "active" : ""} href={page.path} key={page.id} onClick={() => setOpen(false)}>
            {page.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero({ copy, pageId }) {
  const isHome = pageId === "home";
  return (
    <section className={isHome ? "hero home-hero" : "hero page-hero"}>
      <div>
        <span className="kicker">{copy.kicker}</span>
        <h1>{copy.title}</h1>
        <p className="lead">{copy.lead}</p>
        <p className="hero-copy">{copy.text}</p>
        {isHome && (
          <div className="hero-actions">
            <a className="button primary" href="reivindicaciones.html">Ver programa <ArrowRight size={18} /></a>
            <a className="button urgent" href="anteproyecto.html">Desmontar anteproyecto <Scale size={18} /></a>
            <a className="button ghost" href="novedades.html">Últimas novedades <CalendarDays size={18} /></a>
            <a className="button ghost song-link" href={strikeSongUrl} target="_blank" rel="noreferrer">Canción huelga médica <Music2 size={18} /></a>
          </div>
        )}
      </div>
      {isHome && (
        <aside className="hero-panel">
          <HeroMetric label="Objetivo" value="Estatuto propio" />
          <HeroMetric label="Condición" value="Mesa propia" />
          <HeroMetric label="Línea roja" value="Guardias computables" />
          <HeroMetric label="Derecho" value="Descanso real" />
        </aside>
      )}
    </section>
  );
}

function HomePage() {
  return (
    <>
      <SectionIntro
        kicker="Directorio central"
        title="Cada cosa en su sitio."
        text="La portada no intenta contarlo todo. Dirige a la página adecuada y deja claro el marco de la reivindicación."
      />
      <section className="directory-grid">
        {homeCards.map((card) => {
          const page = pages.find((item) => item.id === card.id);
          return <DirectoryCard card={card} href={page?.path ?? "#"} key={card.id} />;
        })}
      </section>
      <section className="band">
        <div>
          <span className="kicker">Idea central</span>
          <h2>No estamos contra otros colectivos. Queremos voz propia.</h2>
          <p>
            El Estatuto Marco afecta a todo el personal estatutario, pero las condiciones de médicos y facultativos
            no pueden quedar diluidas: guardias, jornada, descansos, conciliación, responsabilidad clínica,
            formación, clasificación, jubilación y derechos laborales.
          </p>
        </div>
        <div className="quick-list">
          {quickArguments.slice(0, 4).map((argument) => <p key={argument}>{argument}</p>)}
        </div>
      </section>
    </>
  );
}

function ReivindicacionesPage() {
  return (
    <PageLayout navItems={demands.map((demand) => ({ id: demand.id, label: demand.title }))}>
      <section className="stack">
        {demands.map((demand, index) => (
          <Accordion
            id={demand.id}
            title={demand.title}
            eyebrow={`${index + 1}. ${demand.category}`}
            summary={demand.short}
            defaultOpen={index === 0}
            key={demand.id}
          >
            <p>{demand.body}</p>
            <SourceBadges ids={demand.sources} />
          </Accordion>
        ))}
      </section>
    </PageLayout>
  );
}

function AnteproyectoPage() {
  const navItems = claims.map((claim) => ({ id: claim.id, label: claim.title }));
  return (
    <PageLayout navItems={navItems}>
      <section className="stack">
        {claims.map((claim, index) => (
          <Accordion
            id={claim.id}
            title={claim.title}
            eyebrow="Punto del anteproyecto"
            summary={claim.claim}
            status={claim.status}
            defaultOpen={index === 0}
            key={claim.id}
          >
            <DefinitionGrid
              rows={[
                ["Qué se afirma", claim.claim],
                ["Qué ocurre realmente", claim.reality],
                ["Por qué importa", claim.why],
                ["Qué reclamamos", claim.demand]
              ]}
            />
            <TagList items={claim.refs} />
            <SourceBadges ids={claim.sources} />
          </Accordion>
        ))}
      </section>
    </PageLayout>
  );
}

function NoticiasPage() {
  return (
    <PageLayout navItems={news.map((item) => ({ id: item.id, label: item.outlet }))}>
      <section className="stack">
        {news.map((item, index) => (
          <Accordion
            id={item.id}
            title={item.title}
            eyebrow={`${item.outlet} · ${formatDate(item.date)}`}
            summary={item.claim}
            defaultOpen={index === 0}
            key={item.id}
          >
            <DefinitionGrid
              rows={[
                ["Qué se afirma", item.claim],
                ["Respuesta", item.response],
                ["La clave", item.key]
              ]}
            />
            <SourceBadges ids={item.sources} />
          </Accordion>
        ))}
      </section>
    </PageLayout>
  );
}

function NovedadesPage() {
  const grouped = useMemo(() => updates, []);
  return (
    <PageLayout navItems={grouped.map((item) => ({ id: slug(item.title), label: item.type }))}>
      <section className="timeline">
        {grouped.map((item) => (
          <article id={slug(item.title)} className="update-card" key={`${item.date}-${item.title}`}>
            <span>{formatDate(item.date)} · {item.type}</span>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </article>
        ))}
      </section>
    </PageLayout>
  );
}

function FuentesPage() {
  return (
    <PageLayout navItems={[{ id: "descargas", label: "Descargas" }, ...sourceGroups.map((group) => ({ id: slug(group.title), label: group.title }))]}>
      <section className="download-grid" id="descargas">
        {downloads.map((download) => (
          <a className="download-card" href={download.href} download key={download.href}>
            <Download size={20} />
            <span>{download.label}</span>
          </a>
        ))}
      </section>
      <section className="stack">
        {sourceGroups.map((group, index) => (
          <Accordion
            id={slug(group.title)}
            title={group.title}
            eyebrow="Grupo de fuentes"
            summary={`${group.ids.length} referencias verificables`}
            defaultOpen={index === 0}
            key={group.title}
          >
            <div className="source-list">
              {group.ids.map((id) => <SourceLink id={id} key={id} />)}
            </div>
          </Accordion>
        ))}
      </section>
    </PageLayout>
  );
}

function ArgumentarioPage() {
  return (
    <PageLayout navItems={[{ id: "frases", label: "Frases" }, { id: "uso", label: "Cómo usarlo" }]}>
      <section className="argument-grid" id="frases">
        {quickArguments.map((argument) => (
          <article key={argument}>
            <ClipboardList size={18} />
            <p>{argument}</p>
          </article>
        ))}
      </section>
      <section className="band soft" id="uso">
        <div>
          <span className="kicker">Uso recomendado</span>
          <h2>Una respuesta útil cabe en cuatro pasos.</h2>
        </div>
        <DefinitionGrid
          rows={[
            ["Qué dicen", "Identifica la afirmación concreta sin caricaturizarla."],
            ["Qué oculta", "Explica la condición médica específica que queda fuera."],
            ["Por qué no basta", "Separa mejora general de garantía real."],
            ["Qué reclamamos", "Cierra con una demanda médica verificable."]
          ]}
        />
      </section>
    </PageLayout>
  );
}

function MirPage() {
  const mirLinks = [
    {
      title: "Análisis MIR completo",
      text: "Calculadora, CCAA, escenarios y desglose de sueldo ordinario frente a guardias.",
      href: mirPortalUrl,
      cta: "Abrir portal MIR",
      icon: <ExternalLink size={18} />
    },
    {
      title: "Infografía HTML",
      text: "Pieza visual para explicar por qué una tabla con guardias no equivale a sueldo ordinario.",
      href: mirInfografiaUrl,
      cta: "Abrir infografía",
      icon: <FileText size={18} />
    }
  ];

  return (
    <PageLayout navItems={[{ id: "resumen-mir", label: "Resumen" }, { id: "material-mir", label: "Material recuperado" }]}>
      <section className="mir-summary" id="resumen-mir">
        <article>
          <span>Mensaje</span>
          <h2>Una tabla con guardias no es una tabla de sueldo ordinario.</h2>
          <p>
            El caso MIR sirve como prueba de método: para valorar una nómina hay que separar sueldo base,
            guardias, noches, festivos, horas reales y salario por hora.
          </p>
        </article>
        <article>
          <span>Por qué enlazamos</span>
          <h2>El análisis completo ya existe y debe seguir vivo.</h2>
          <p>
            Este portal centraliza la reivindicación del Estatuto propio. El detalle MIR queda en su web
            especializada para no convertir la portada general en una web de sueldos de residentes.
          </p>
        </article>
      </section>
      <section className="mir-links" id="material-mir">
        {mirLinks.map((link) => (
          <article className="resource-card" key={link.href}>
            <span className="kicker">MIR</span>
            <h2>{link.title}</h2>
            <p>{link.text}</p>
            <a className="button primary" href={link.href} target="_blank" rel="noreferrer">
              {link.cta} {link.icon}
            </a>
          </article>
        ))}
      </section>
      <section className="external-panel">
        <div>
          <span className="kicker">Portal especializado</span>
          <h2>MIR: no es sueldo, son guardias</h2>
          <p>El contenido MIR completo sigue en su web original, pero sus materiales principales quedan ahora enlazados desde este portal.</p>
        </div>
        <a className="button primary" href={mirPortalUrl} target="_blank" rel="noreferrer">
          Abrir análisis MIR <ExternalLink size={18} />
        </a>
      </section>
    </PageLayout>
  );
}

function PageLayout({ navItems, children }) {
  return (
    <div className="page-layout">
      <aside className="side-index">
        <details>
          <summary>Índice</summary>
          <nav>{navItems.map((item) => <a href={`#${item.id}`} key={item.id}>{item.label}</a>)}</nav>
        </details>
        <nav className="desktop-index">{navItems.map((item) => <a href={`#${item.id}`} key={item.id}>{item.label}</a>)}</nav>
      </aside>
      <div className="page-content">{children}</div>
    </div>
  );
}

function SectionIntro({ kicker, title, text }) {
  return (
    <section className="section-intro">
      <span className="kicker">{kicker}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </section>
  );
}

function DirectoryCard({ card, href }) {
  const icons = {
    reivindicaciones: <ShieldCheck />,
    anteproyecto: <Scale />,
    noticias: <Newspaper />,
    novedades: <CalendarDays />,
    fuentes: <Library />,
    argumentario: <ClipboardList />,
    mir: <FileText />
  };
  return (
    <a className="directory-card" href={href}>
      <i>{icons[card.id] ?? <FileText />}</i>
      <h2>{card.title}</h2>
      <p>{card.text}</p>
      <strong>{card.cta} <ArrowRight size={16} /></strong>
    </a>
  );
}

function Accordion({ id, title, eyebrow, summary, children, defaultOpen = false, status }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <article className={open ? "accordion open" : "accordion"} id={id}>
      <button type="button" aria-expanded={open} aria-controls={`${id}-content`} onClick={() => setOpen((value) => !value)}>
        <span>{eyebrow}</span>
        <strong>{title}</strong>
        {summary && <small>{summary}</small>}
        {status && <StatusBadge status={status} />}
        <ChevronDown className="chevron" size={20} />
      </button>
      <div className="accordion-content" id={`${id}-content`} hidden={!open}>
        {children}
      </div>
    </article>
  );
}

function DefinitionGrid({ rows }) {
  return (
    <dl className="definition-grid">
      {rows.map(([term, description]) => (
        <div key={term}>
          <dt>{term}</dt>
          <dd>{description}</dd>
        </div>
      ))}
    </dl>
  );
}

function SourceBadges({ ids }) {
  return (
    <div className="source-badges">
      {ids.map((id) => {
        const source = sourceRegistry[id];
        if (!source) return null;
        return <a href={source.url} target="_blank" rel="noreferrer" key={id}>{source.institution}<ExternalLink size={13} /></a>;
      })}
    </div>
  );
}

function SourceLink({ id }) {
  const source = sourceRegistry[id];
  if (!source) return null;
  return (
    <a className="source-link" href={source.url} target="_blank" rel="noreferrer">
      <span>
        <strong>{source.title}</strong>
        <small>{source.institution} · {source.type} · {source.year}</small>
      </span>
      <ExternalLink size={16} />
    </a>
  );
}

function TagList({ items }) {
  return <div className="tag-list">{items.map((item) => <small key={item}>{item}</small>)}</div>;
}

function StatusBadge({ status }) {
  const labels = {
    mantiene: "mantiene",
    ambiguo: "ambiguo",
    riesgo: "riesgo",
    "mejora-insuficiente": "mejora insuficiente",
    depende: "depende"
  };
  return <em className={`status status-${status}`}>{labels[status] ?? status}</em>;
}

function HeroMetric({ label, value }) {
  return (
    <div className="hero-metric">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <strong>Estatuto Médico Propio</strong>
      <span>Datos, fuentes, novedades y argumentos para negociar con voz propia.</span>
    </footer>
  );
}

function formatDate(date) {
  return new Intl.DateTimeFormat("es-ES", { dateStyle: "medium" }).format(new Date(date));
}

function slug(value) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

createRoot(document.getElementById("root")).render(<App />);
