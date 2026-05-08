import { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  AlertTriangle,
  ArrowDown,
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
    title: "Por qué no nos vale el anteproyecto",
    lead: "Mejoras parciales no sustituyen un estatuto propio facultativo.",
    text: "Artículos, trampas y garantías ausentes: guardias, descanso, jubilación y negociación real."
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
    kicker: "FAQ secundaria",
    title: "Preguntas frecuentes",
    lead: "Respuestas breves para situar la reivindicación.",
    text: "Esta página queda como apoyo: el contenido principal está en Programa, Anteproyecto y Noticias."
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
    description: "El hecho publicado apoya de forma clara una parte de la reivindicación médica."
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
    description: "Presenta el acuerdo o el anteproyecto como suficiente; la ficha lo contrasta con el texto y las fuentes disponibles."
  }
};

const newsToneOrder = ["favorable", "avance", "mixto", "contexto", "incompleto", "adverso"];

const claimStatusMeta = {
  mantiene: {
    label: "Sin cambio estructural",
    description: "Mantiene el cauce general o no crea una garantía médica propia."
  },
  ambiguo: {
    label: "Ambiguo",
    description: "Puede mejorar, pero depende de excepciones, desarrollo o aplicación autonómica."
  },
  riesgo: {
    label: "Riesgo",
    description: "Puede dejar abierta sobrecarga real aunque la redacción parezca ordenar el problema."
  },
  "mejora-insuficiente": {
    label: "Mejora insuficiente",
    description: "Reconoce avances formales que necesitan garantías materiales para ser efectivos."
  },
  depende: {
    label: "Depende",
    description: "Abre una vía futura, pero no asegura resultado, calendario ni financiación."
  }
};

const sourceFilters = [
  { id: "all", label: "Todo", test: () => true },
  { id: "normativa", label: "Normativa", test: (source) => source.type.includes("Normativa") || source.type.includes("Doctrina") },
  { id: "oficial", label: "Oficial", test: (source) => source.type === "Oficial" || source.institution.includes("Xunta") },
  { id: "medica", label: "Médica", test: (source) => source.type.includes("médic") || source.type === "Profesional" || source.type === "Propuesta médica" },
  { id: "prensa", label: "Prensa", test: (source) => source.type === "Prensa" },
  { id: "mir", label: "MIR", test: (source) => source.institution.includes("MIR") || source.type.includes("Proyecto") || source.type.includes("Visual") || source.type.includes("Informe") }
];

function App() {
  const pageId = document.getElementById("root")?.dataset.page ?? "home";
  const copy = pageCopy[pageId] ?? pageCopy.home;

  return (
    <main>
      <ScrollProgress />
      <Header current={pageId} />
      <Hero copy={copy} pageId={pageId} />
      <div id="contenido-principal" tabIndex="-1">
        {pageId === "home" && <HomePage />}
        {pageId === "reivindicaciones" && <ReivindicacionesPage />}
        {pageId === "anteproyecto" && <AnteproyectoPage />}
        {pageId === "noticias" && <NoticiasPage />}
        {pageId === "novedades" && <NovedadesPage />}
        {pageId === "fuentes" && <FuentesPage />}
        {pageId === "claves" && <ClavesPage />}
        {pageId === "mir" && <MirPage />}
      </div>
      <Footer />
    </main>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <i style={{ transform: `scaleX(${progress})` }} />
    </div>
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
        <a className="scroll-discovery" href="#contenido-principal" aria-label="Ir al contenido principal">
          <span>{isHome ? "Explorar contenidos" : "Bajar al análisis"}</span>
          <ArrowDown size={17} />
        </a>
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
  const navItems = [
    { id: "mapa-reivindicaciones", label: "Mapa visual" },
    ...demands.map((demand) => ({ id: demand.id, label: demand.title }))
  ];

  return (
    <PageLayout navItems={navItems}>
      <DemandVisualMap />
      <section className="stack">
        {demands.map((demand, index) => (
          <Accordion
            id={demand.id}
            title={demand.title}
            eyebrow={`${index + 1}. ${demand.category}`}
            summary={demand.short}
            meta={[`${demand.sources.length} fuentes`]}
            nextItem={demands[index + 1] ? { id: demands[index + 1].id, label: demands[index + 1].title } : null}
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
    { id: "resumen-garantias", label: "Resumen visual" },
    ...claims.map((claim) => ({ id: claim.id, label: claim.title }))
  ];
  return (
    <PageLayout navItems={navItems}>
      <ClaimStatusOverview />
      <section className="stack">
        {claims.map((claim, index) => {
          const rows = [
            ["Qué se afirma", claim.claim],
            claim.current && ["Situación vigente", claim.current],
            claim.change && ["Cambio del anteproyecto", claim.change],
            claim.formal && ["Mejora formal", claim.formal],
            ["Qué ocurre realmente", claim.reality],
            ["Por qué importa", claim.why],
            claim.amendment && ["Qué exigimos", claim.amendment]
          ].filter(Boolean);

          return (
            <Accordion
              id={claim.id}
              title={claim.title}
              eyebrow="Punto del anteproyecto"
              summary={claim.claim}
              status={claim.status}
              meta={[
                claim.evidence?.length ? `${claim.evidence.length} textos citados` : "sin cita literal",
                `${claim.sources.length} fuentes`
              ]}
              nextItem={claims[index + 1] ? { id: claims[index + 1].id, label: claims[index + 1].title } : null}
              defaultOpen={index === 0}
              key={claim.id}
            >
              <DefinitionGrid rows={rows} />
              <ClaimReferences evidence={claim.evidence} refs={claim.refs} sources={claim.sources} />
            </Accordion>
          );
        })}
      </section>
    </PageLayout>
  );
}

function DemandVisualMap() {
  const items = [
    {
      title: "Voz propia",
      text: "Una mesa donde se decida lo médico.",
      icon: <ShieldCheck size={22} />,
      links: [
        { id: "estatuto-propio", label: "Estatuto propio" },
        { id: "mesa-propia", label: "Mesa propia" }
      ]
    },
    {
      title: "Tiempo",
      text: "Guardias, descanso y vida fuera del hospital.",
      icon: <CalendarDays size={22} />,
      links: [
        { id: "guardias", label: "Guardias" },
        { id: "descanso", label: "Descanso" },
        { id: "conciliacion", label: "Conciliación" }
      ]
    },
    {
      title: "Reconocimiento",
      text: "Formación, responsabilidad y penosidad.",
      icon: <Scale size={22} />,
      links: [
        { id: "clasificacion", label: "Clasificación" },
        { id: "computo-penosidad", label: "Cómputo real" },
        { id: "jubilacion", label: "Jubilación" }
      ]
    },
    {
      title: "Retribución",
      text: "Sueldo claro. Guardias claras. Horas claras.",
      icon: <BadgeCheck size={22} />,
      links: [{ id: "retribucion", label: "Retribución" }]
    }
  ];

  return (
    <section className="visual-panel demand-snapshot" id="mapa-reivindicaciones">
      <div className="snapshot-head">
        <span className="kicker">Programa en un vistazo</span>
        <strong>{demands.length} reivindicaciones</strong>
      </div>
      <div className="snapshot-grid">
        {items.map((item) => (
          <article className="snapshot-card" key={item.title}>
            <i>{item.icon}</i>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
            <div className="snapshot-links">
              {item.links.map((link) => {
                const demand = demands.find((demandItem) => demandItem.id === link.id);
                return demand ? (
                  <a href={`#${link.id}`} key={link.id}>
                    {link.label}
                  </a>
                ) : null;
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ClaimStatusOverview() {
  const statusItems = Object.entries(claimStatusMeta).map(([status, meta]) => {
    const count = claims.filter((claim) => claim.status === status).length;
    return { status, ...meta, count };
  });
  const total = claims.length;
  const maxCount = Math.max(...statusItems.map((item) => item.count), 1);

  return (
    <section className="visual-panel claim-overview" id="resumen-garantias">
      <div className="visual-panel-intro">
        <span className="kicker">Resumen visual</span>
        <h2>El anteproyecto regula problemas que debería resolver.</h2>
        <p>
          Hay avances parciales, pero el patrón se repite: excepciones amplias, negociación generalista y garantías diferidas.
        </p>
      </div>
      <div className="claim-chart" aria-label={`Resumen de ${total} puntos analizados del anteproyecto`}>
        {statusItems.map((item) => (
          <article className={`claim-bar status-card-${item.status}`} key={item.status}>
            <div className="claim-bar-head">
              <span>{item.label}</span>
              <strong>{item.count}</strong>
            </div>
            <div className="bar-track" aria-hidden="true">
              <i style={{ "--bar": `${(item.count / maxCount) * 100}%` }} />
            </div>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
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
            meta={[`${item.sources.length} fuentes`, newsToneMeta[item.tone]?.label].filter(Boolean)}
            nextItem={news[index + 1] ? { id: news[index + 1].id, label: news[index + 1].outlet } : null}
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
  const [selectedFilter, setSelectedFilter] = useState("all");
  const filteredSourceGroups = useMemo(() => {
    const filter = sourceFilters.find((item) => item.id === selectedFilter) ?? sourceFilters[0];
    return sourceGroups
      .map((group) => ({
        ...group,
        ids: group.ids.filter((id) => {
          const source = sourceRegistry[id];
          return source ? filter.test(source) : false;
        })
      }))
      .filter((group) => group.ids.length > 0);
  }, [selectedFilter]);

  const filterCounts = useMemo(
    () =>
      sourceFilters.reduce((counts, filter) => {
        counts[filter.id] = sourceGroups.reduce(
          (total, group) => total + group.ids.filter((id) => sourceRegistry[id] && filter.test(sourceRegistry[id])).length,
          0
        );
        return counts;
      }, {}),
    []
  );

  return (
    <PageLayout navItems={[{ id: "descargas", label: "Descargas" }, ...filteredSourceGroups.map((group) => ({ id: slug(group.title), label: group.title }))]}>
      <section className="download-grid" id="descargas">
        {downloads.map((download) => (
          <a className="download-card" href={download.href} download key={download.href}>
            <Download size={20} />
            <span>{download.label}</span>
          </a>
        ))}
      </section>
      <SourceFilters selected={selectedFilter} counts={filterCounts} onSelect={setSelectedFilter} />
      <section className="stack">
        {filteredSourceGroups.map((group, index) => (
          <Accordion
            id={slug(group.title)}
            title={group.title}
            eyebrow="Grupo de fuentes"
            summary={`${group.ids.length} referencias verificables`}
            meta={[`${group.ids.length} referencias`]}
            nextItem={filteredSourceGroups[index + 1] ? { id: slug(filteredSourceGroups[index + 1].title), label: filteredSourceGroups[index + 1].title } : null}
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
    ...quickArguments.map((item) => ({ id: item.id, label: item.question }))
  ];

  return (
    <PageLayout navItems={navItems}>
      <section className="argument-grid" id="claves">
        {quickArguments.map((item) => (
          <article id={item.id} key={item.id}>
            <ClipboardList size={18} />
            <div>
              <h2>{item.question}</h2>
              <p>{item.answer}</p>
              <SourceBadges ids={item.sources} />
            </div>
          </article>
        ))}
      </section>
    </PageLayout>
  );
}

function SourceFilters({ selected, counts, onSelect }) {
  return (
    <section className="source-filters" aria-label="Filtrar fuentes">
      <div>
        <span className="kicker">Filtro rápido</span>
        <h2>Ver fuentes por tipo.</h2>
      </div>
      <div className="filter-tabs" role="group" aria-label="Tipos de fuente">
        {sourceFilters.map((filter) => (
          <button
            className={selected === filter.id ? "active" : ""}
            type="button"
            aria-pressed={selected === filter.id}
            onClick={() => onSelect(filter.id)}
            key={filter.id}
          >
            <span>{filter.label}</span>
            <b>{counts[filter.id] ?? 0}</b>
          </button>
        ))}
      </div>
    </section>
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
  const [activeId, setActiveId] = useState(navItems[0]?.id);

  useEffect(() => {
    const sectionElements = navItems.map((item) => document.getElementById(item.id)).filter(Boolean);
    if (!sectionElements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-18% 0px -62% 0px", threshold: [0.1, 0.35, 0.6] }
    );

    sectionElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [navItems]);

  const renderIndexLinks = () =>
    navItems.map((item) => (
      <a className={activeId === item.id ? "active" : ""} href={`#${item.id}`} key={item.id}>
        {item.label}
      </a>
    ));

  return (
    <div className="page-layout">
      <aside className="side-index">
        <details>
          <summary>Índice</summary>
          <nav>{renderIndexLinks()}</nav>
        </details>
        <nav className="desktop-index">{renderIndexLinks()}</nav>
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

function Accordion({ id, title, eyebrow, summary, children, defaultOpen = false, status, tone, meta = [], nextItem = null }) {
  return (
    <details className="accordion" id={id} open={defaultOpen}>
      <summary>
        <span>{eyebrow}</span>
        <strong>{title}</strong>
        {summary && <small>{summary}</small>}
        {meta.length > 0 && (
          <em className="accordion-meta">
            {meta.map((item) => <b key={item}>{item}</b>)}
          </em>
        )}
        {status && <StatusBadge status={status} />}
        {tone && <NewsToneBadge tone={tone} />}
        <ChevronDown className="chevron" size={20} />
      </summary>
      <div className="accordion-content" id={`${id}-content`}>
        {children}
        {nextItem && (
          <a className="accordion-next" href={`#${nextItem.id}`}>
            <span>Siguiente</span>
            <strong>{nextItem.label}</strong>
            <ArrowRight size={16} />
          </a>
        )}
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

const evidenceSourceId = (item) => {
  if (item.sourceId) return item.sourceId;
  if (item.article?.includes("Directiva 2003/88/CE")) return "directiva-tiempo";
  return "anteproyecto";
};

const aplArticleNumber = (value) => {
  const match = value?.match(/\b(?:Art\.?|Arts\.?|DA|DT|DF)\s*(\d+)/i);
  return match ? Number(match[1]) : null;
};

const aplRange = (value) => {
  const range = value?.match(/\bArts?\.?\s*(\d+)\s*-\s*(\d+)\s+APL/i);
  if (!range) return null;
  return [Number(range[1]), Number(range[2])];
};

const isReferenceCoveredByEvidence = (ref, evidence) => {
  const citedArticles = evidence
    .filter((item) => evidenceSourceId(item) === "anteproyecto")
    .map((item) => aplArticleNumber(item.article))
    .filter(Boolean);

  if (!citedArticles.length) return false;

  const refArticle = aplArticleNumber(ref);
  if (/\bArt\.?\s*\d+/i.test(ref) && ref.includes("APL") && citedArticles.includes(refArticle)) {
    return true;
  }

  const range = aplRange(ref);
  if (!range) return false;

  const coveredInRange = citedArticles.filter((article) => article >= range[0] && article <= range[1]);
  return coveredInRange.length >= 2;
};

function ClaimReferences({ evidence = [], refs = [], sources = [] }) {
  const evidenceSources = [...new Set(evidence.map(evidenceSourceId).filter(Boolean))];
  const contextualRefs = refs.filter((ref) => !isReferenceCoveredByEvidence(ref, evidence));
  const contextualSources = sources.filter((id) => !evidenceSources.includes(id));

  return (
    <>
      {evidence.length > 0 && <EvidenceList items={evidence} />}
      {contextualRefs.length > 0 && <TagList items={contextualRefs} label="Contexto relacionado" />}
      <SourceBadges ids={contextualSources} label={evidence.length ? "Fuentes de contexto" : undefined} />
    </>
  );
}

function EvidenceList({ items }) {
  return (
    <div className="evidence-list">
      <h3>Texto real citado</h3>
      {items.map((item) => {
        const source = sourceRegistry[evidenceSourceId(item)];
        return (
          <details className="evidence-item" key={`${item.article}-${item.quote}`}>
            <summary>
              <span>{item.article}</span>
              <strong>{item.page}</strong>
            </summary>
            <blockquote>{item.quote}</blockquote>
            <p>
              <span>{item.note}</span>
              {source && (
                <a href={source.url} target="_blank" rel="noreferrer">
                  {source.institution}<ExternalLink size={13} />
                </a>
              )}
            </p>
          </details>
        );
      })}
    </div>
  );
}

function SourceBadges({ ids, label }) {
  const sourceIds = ids.filter((id) => sourceRegistry[id]);
  if (!sourceIds.length) return null;
  return (
    <div className="reference-group">
      {label && <span>{label}</span>}
      <div className="source-badges">
      {sourceIds.map((id) => {
        const source = sourceRegistry[id];
        return <a href={source.url} target="_blank" rel="noreferrer" key={id}>{source.institution}<ExternalLink size={13} /></a>;
      })}
      </div>
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

function TagList({ items, label }) {
  if (!items.length) return null;
  return (
    <div className="reference-group">
      {label && <span>{label}</span>}
      <div className="tag-list">{items.map((item) => <small key={item}>{item}</small>)}</div>
    </div>
  );
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
