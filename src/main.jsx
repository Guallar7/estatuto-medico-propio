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
  strikeSchedule,
  updates
} from "./data";
import "./styles.css";

const pageCopy = {
  home: {
    kicker: "Portal médico-facultativo",
    title: "Estatuto Médico Propio",
    lead: "Reglas específicas para responsabilidades específicas.",
    text:
      "Datos, fuentes y explicaciones para entender por qué médicos y facultativos reclaman una regulación propia."
  },
  reivindicaciones: {
    kicker: "Programa",
    title: "Qué reclamamos",
    lead: "El programa resume exigencias. La prueba jurídica está en el anteproyecto.",
    text: "Una lista breve para compartir sin duplicar el análisis técnico."
  },
  anteproyecto: {
    kicker: "Análisis verificable",
    title: "Anteproyecto de Estatuto Marco",
    lead: "Qué mejora formalmente y qué sigue sin garantía real.",
    text: "Estado jurídico actual, mejoras formales, límites materiales, enmiendas y fuentes."
  },
  noticias: {
    kicker: "Actualidad",
    title: "Noticias y declaraciones",
    lead: "Contexto y fuentes para seguir el debate público.",
    text: "Cada ficha resume qué se ha dicho, cómo leerlo y dónde comprobarlo."
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
    text: "Fuentes oficiales, normativa, posición profesional, prensa, sindicatos y materiales descargables."
  },
  claves: {
    kicker: "Para médicos y ciudadanía",
    title: "Claves",
    lead: "Preguntas frecuentes para médicos, pacientes y ciudadanía.",
    text: "Material público, pero suficientemente técnico para que médicos y facultativos puedan explicar la reivindicación con precisión."
  },
  mir: {
    kicker: "Caso demostrativo",
    title: "MIR: no es sueldo, son guardias",
    lead: "El análisis MIR completo vive en su portal especializado.",
    text: "Aquí queda el resumen y el enlace al análisis completo para no contaminar la arquitectura general."
  }
};

const newsToneMeta = {
  favorable: {
    label: "Favorable",
    description: "El hecho publicado refuerza una parte de la reivindicación médica o confirma la falta de consenso profesional."
  },
  avance: {
    label: "Avance parcial",
    description: "Hay un paso positivo, pero no sustituye la mesa médica propia ni garantiza por sí solo la ejecución material."
  },
  mixto: {
    label: "Mixto",
    description: "Contiene mejoras reales, pero también límites o ausencias relevantes para médicos y facultativos."
  },
  contexto: {
    label: "Contexto",
    description: "Sirve para ubicar el estado jurídico o temporal de la reforma; no es una victoria ni una derrota."
  },
  incompleto: {
    label: "Dato incompleto",
    description: "El mensaje omite horas reales, condiciones de aplicación o la diferencia entre mejora formal y garantía efectiva."
  },
  adverso: {
    label: "Relato adverso",
    description: "Presenta el acuerdo o el anteproyecto como suficiente y exige una respuesta factual bien referenciada."
  }
};

const newsToneOrder = ["favorable", "avance", "mixto", "contexto", "incompleto", "adverso"];

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
      {pageId === "claves" && <ClavesPage />}
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
        <span>{open ? "Cerrar" : "Menú"}</span>
      </button>
      <nav id="site-nav" aria-label="Navegación principal">
        <p className="mobile-nav-title">Entender, actuar y verificar</p>
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
            <a className="button urgent" href="anteproyecto.html">Analizar anteproyecto <Scale size={18} /></a>
            <a className="button ghost" href="novedades.html">Últimas novedades <CalendarDays size={18} /></a>
            <a className="button ghost song-link" href={strikeSongUrl} target="_blank" rel="noreferrer">Canción huelga médica <Music2 size={18} /></a>
          </div>
        )}
      </div>
      {isHome && (
        <HeroStrikeCalendar />
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
          <h2>No estamos contra otros colectivos. Queremos voz propia y garantías reales.</h2>
          <p>
            El Estatuto Marco afecta a todo el personal estatutario. La cuestión es cómo reconocer condiciones comunes
            sin ignorar guardias, responsabilidad clínica directa, penosidad acumulada, formación prolongada y riesgo médico-legal.
          </p>
        </div>
        <div className="quick-list">
          {quickArguments.slice(0, 4).map((item) => <p key={item.id}>{item.question}</p>)}
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
  const navItems = [
    { id: "enfoque", label: "Enfoque" },
    ...claims.map((claim) => ({ id: claim.id, label: claim.title }))
  ];
  return (
    <PageLayout navItems={navItems}>
      <RealityOverview />
      <section className="stack">
        {claims.map((claim, index) => {
          const rows = [
            ["Qué se afirma", claim.claim],
            claim.current && ["Situación vigente", claim.current],
            claim.change && ["Cambio del anteproyecto", claim.change],
            claim.formal && ["Mejora formal", claim.formal],
            ["Qué ocurre realmente", claim.reality],
            ["Por qué importa", claim.why],
            claim.amendment && ["Enmienda concreta", claim.amendment]
          ].filter(Boolean);

          return (
            <Accordion
              id={claim.id}
              title={claim.title}
              eyebrow="Punto del anteproyecto"
              summary={claim.claim}
              status={claim.status}
              defaultOpen={index === 0}
              key={claim.id}
            >
              <DefinitionGrid rows={rows} />
              <TagList items={claim.refs} />
              <SourceBadges ids={claim.sources} />
            </Accordion>
          );
        })}
      </section>
    </PageLayout>
  );
}

function HeroStrikeCalendar() {
  const today = new Date();
  const firstUpcoming = strikeSchedule.find((item) => new Date(`${item.end}T23:59:59`) >= today) ?? strikeSchedule.at(-1);
  const [selectedId, setSelectedId] = useState(firstUpcoming?.id ?? strikeSchedule[0]?.id);
  const selected = strikeSchedule.find((item) => item.id === selectedId) ?? firstUpcoming ?? strikeSchedule[0];
  const selectedIndex = Math.max(0, strikeSchedule.findIndex((item) => item.id === selected.id));
  const progress = strikeSchedule.length > 1 ? (selectedIndex / (strikeSchedule.length - 1)) * 88 : 0;
  const status = getStrikeStatus(selected, today);

  return (
    <aside className="hero-strike-card" aria-label="Calendario de huelgas médicas 2026">
      <div className="strike-card-header">
        <span>Calendario verificado</span>
        <strong>Huelga médica 2026</strong>
        <small>Convocatorias nacionales anunciadas hasta junio.</small>
      </div>
      <div className="strike-rail" style={{ "--progress": `${progress}%` }}>
        {strikeSchedule.map((item) => {
          const itemStatus = getStrikeStatus(item, today);
          return (
            <button
              className={`strike-stop ${selected.id === item.id ? "active" : ""} ${itemStatus}`}
              type="button"
              onClick={() => setSelectedId(item.id)}
              key={item.id}
            >
              <span>{item.month}</span>
              <i>{item.days}d</i>
            </button>
          );
        })}
      </div>
      <div className="strike-detail">
        <div>
          <span className={`strike-status ${status}`}>{strikeStatusLabel(status)}</span>
          <h2>{selected.label}</h2>
          <p>{selected.note}</p>
        </div>
        <div className="strike-meta">
          <span>{selected.kind}</span>
          <strong>{selected.days} días</strong>
        </div>
      </div>
      <div className="strike-mini-grid">
        <HeroMetric label="Objetivo" value="Estatuto propio" />
        <HeroMetric label="Condición" value="Mesa propia" />
        <HeroMetric label="Línea roja" value="Guardias computables" />
        <HeroMetric label="Derecho" value="Descanso real" />
      </div>
      <a className="strike-source" href={sourceRegistry[selected.sources[0]]?.url} target="_blank" rel="noreferrer">
        Fuente: {sourceRegistry[selected.sources[0]]?.institution ?? "calendario sindical"} <ExternalLink size={13} />
      </a>
    </aside>
  );
}

function NoticiasPage() {
  return (
    <PageLayout navItems={news.map((item) => ({ id: item.id, label: item.outlet }))}>
      <NewsLegend />
      <section className="stack">
        {news.map((item, index) => (
          <Accordion
            id={item.id}
            title={item.title}
            eyebrow={`${item.outlet} · ${formatDate(item.date)}`}
            summary={item.claim}
            tone={item.tone}
            defaultOpen={index === 0}
            key={item.id}
          >
            <DefinitionGrid
              rows={[
                ["Lectura rápida", newsToneMeta[item.tone]?.description ?? "Noticia pendiente de clasificación editorial."],
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

function NewsLegend() {
  return (
    <section className="news-legend" aria-label="Leyenda de lectura de noticias">
      <div>
        <span className="kicker">Leyenda</span>
        <h2>Código de etiquetas.</h2>
        <p>Cada noticia se clasifica para saber de un vistazo cómo leerla.</p>
      </div>
      <div className="tone-list">
        {newsToneOrder.map((tone) => (
          <div className="tone-item" key={tone}>
            <NewsToneBadge tone={tone} />
            <p>{newsToneMeta[tone].description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function RealityOverview() {
  return (
    <section className="reality-summary" id="enfoque">
      <article>
        <span className="kicker">Cómo leer esta página</span>
        <h2>Reconocer mejoras formales refuerza la crítica.</h2>
        <p>
          La Ley 55/2003 sigue vigente y el texto de enero de 2026 es un anteproyecto. Este análisis no repite el programa:
          contrasta qué cambia, qué mejora y qué queda sin garantía material.
        </p>
      </article>
      <article>
        <span className="kicker">Criterio editorial</span>
        <h2>Menos volumen, más precisión.</h2>
        <p>
          Cada apartado responde a una pregunta técnica. Para una explicación general, consulta Claves; para la lista de exigencias,
          consulta Programa.
        </p>
      </article>
    </section>
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

function ClavesPage() {
  const navItems = [
    { id: "enfoque-claves", label: "Enfoque" },
    ...quickArguments.map((item) => ({ id: item.id, label: item.question }))
  ];

  return (
    <PageLayout navItems={navItems}>
      <section className="reality-summary claves-summary" id="enfoque-claves">
        <article>
          <span className="kicker">Doble audiencia</span>
          <h2>Explicar al público sin rebajar el nivel profesional.</h2>
          <p>
            La página está escrita para ser pública, pero la lectura principal sigue siendo médica: entender el
            anteproyecto, hablar con compañeros y defender la movilización con datos comprobables.
          </p>
        </article>
        <article>
          <span className="kicker">Método</span>
          <h2>Primero hechos, luego posición.</h2>
          <p>
            Cada clave separa la explicación general de la aplicación profesional. Así se evita el tono de
            manual interno sin perder utilidad para quienes tienen que sostener la reivindicación en el hospital.
          </p>
        </article>
      </section>
      <section className="argument-grid" id="claves">
        {quickArguments.map((item) => (
          <article id={item.id} key={item.id}>
            <ClipboardList size={18} />
            <div>
              <h2>{item.question}</h2>
              <p>{item.answer}</p>
              {item.professional && (
                <div className="professional-note">
                  <strong>Para médicos</strong>
                  <p>{item.professional}</p>
                </div>
              )}
              <SourceBadges ids={item.sources} />
            </div>
          </article>
        ))}
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
    claves: <ClipboardList />,
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

function Accordion({ id, title, eyebrow, summary, children, defaultOpen = false, status, tone }) {
  return (
    <details className="accordion" id={id} open={defaultOpen}>
      <summary>
        <span>{eyebrow}</span>
        <strong>{title}</strong>
        {summary && <small>{summary}</small>}
        {status && <StatusBadge status={status} />}
        {tone && <NewsToneBadge tone={tone} />}
        <ChevronDown className="chevron" size={20} />
      </summary>
      <div className="accordion-content" id={`${id}-content`}>
        {children}
      </div>
    </details>
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

function NewsToneBadge({ tone }) {
  const meta = newsToneMeta[tone];
  if (!meta) return null;
  return (
    <em className={`news-tone news-tone-${tone}`} title={meta.description}>
      {toneIcon(tone)}
      {meta.label}
    </em>
  );
}

function toneIcon(tone) {
  if (tone === "favorable" || tone === "avance") return <BadgeCheck size={14} />;
  if (tone === "adverso" || tone === "incompleto") return <AlertTriangle size={14} />;
  return <BookOpen size={14} />;
}

function HeroMetric({ label, value }) {
  return (
    <div className="hero-metric">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function getStrikeStatus(item, now = new Date()) {
  const start = new Date(`${item.start}T00:00:00`);
  const end = new Date(`${item.end}T23:59:59`);
  if (now < start) return "upcoming";
  if (now > end) return "past";
  return "active";
}

function strikeStatusLabel(status) {
  const labels = {
    active: "en curso",
    past: "realizada",
    upcoming: "próxima"
  };
  return labels[status] ?? status;
}

function Footer() {
  return (
    <footer>
      <strong>Estatuto Médico Propio</strong>
      <span>Datos, fuentes y contexto para entender una reivindicación médica y facultativa propia.</span>
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
