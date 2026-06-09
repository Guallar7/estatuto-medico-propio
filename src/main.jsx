import { useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  AlertTriangle,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BookOpen,
  CalendarDays,
  ChevronDown,
  ClipboardList,
  Copy,
  Check,
  Download,
  ExternalLink,
  FileText,
  HelpCircle,
  Library,
  Mail,
  Menu,
  Music2,
  Newspaper,
  Play,
  Printer,
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
  },
  aportaciones: {
    kicker: "Audiencia pública",
    title: "Aportaciones APL",
    lead: "Envía tus alegaciones al APL del Estatuto Marco.",
    text: "Rellena el formulario con tus datos para generar tu escrito de oposición oficial y enviarlo a Sanidad de forma guiada (Plazo: antes del 26 de junio de 2026)."
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
        {pageId === "aportaciones" && <AportacionesPage />}
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
          <span>{isHome ? "Explorar contenidos" : pageId === "aportaciones" ? "Bajar al envío" : "Bajar al análisis"}</span>
          <ArrowDown size={17} />
        </a>
        {isHome && (
          <div className="hero-actions">
            <a className="button primary" href="reivindicaciones.html">Ver programa <ArrowRight size={18} /></a>
            <a className="button urgent" href="aportaciones.html">Aportaciones APL <Mail size={18} /></a>
            <a className="button primary" href="anteproyecto.html">Analizar anteproyecto <Scale size={18} /></a>
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
              titleMeta={claimArticleLabel(claim)}
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
        <HeroMetric label="Línea roja" value="Negociar condiciones" />
        <HeroMetric label="Derecho" value="Descanso real" />
      </div>
      <a className="strike-source" href={sourceRegistry[selected.sources[0]]?.url} target="_blank" rel="noreferrer">
        Fuente: {sourceRegistry[selected.sources[0]]?.institution ?? "calendario sindical"} <ExternalLink size={13} />
      </a>
    </aside>
  );
}

const getSpanishDateInfo = () => {
  const date = new Date();
  const day = date.getDate();
  const months = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
  ];
  const month = months[date.getMonth()];
  return { day, month };
};

// DEPRECATION NOTICE: This component (AportacionesPage) and the associated
// APLEmailGenerator are scheduled to be deprecated/removed after June 26, 2026.
function AportacionesPage() {
  return (
    <div className="aportaciones-page-container">
      <div className="aportaciones-card-wrapper">
        <APLEmailGenerator />
      </div>
    </div>
  );
}

function APLEmailGenerator() {
  const { day: defaultDay, month: defaultMonth } = useMemo(() => getSpanishDateInfo(), []);
  const [formData, setFormData] = useState({
    nombre: "",
    dni: "",
    especialidad: "",
    centro: "",
    ciudad: "",
    dia: String(defaultDay),
    mes: defaultMonth
  });

  const [step, setStep] = useState("form"); // "form" or "result"
  const [errors, setErrors] = useState({});
  const [copiedSubject, setCopiedSubject] = useState(false);
  const [copiedBody, setCopiedBody] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const iframeWrapperRef = useRef(null);

  // Close modal on Escape key
  useEffect(() => {
    if (!showDemoModal) return;
    const onKey = (e) => { if (e.key === "Escape") setShowDemoModal(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showDemoModal]);

  // Scale iframe to fill wrapper without scrolling
  useEffect(() => {
    if (!showDemoModal) return;
    const DEMO_W = 1200;
    const DEMO_H = 900;
    let ro;
    const setup = () => {
      const el = iframeWrapperRef.current;
      if (!el) return;
      const update = () => {
        const scaleX = el.offsetWidth / DEMO_W;
        const scaleY = el.offsetHeight / DEMO_H;
        const scale = Math.min(scaleX, scaleY);
        const iframe = el.querySelector(".demo-modal-iframe");
        if (!iframe) return;
        iframe.style.transform = `scale(${scale})`;
        iframe.style.marginLeft = `${(el.offsetWidth - DEMO_W * scale) / 2}px`;
        iframe.style.marginTop  = `${(el.offsetHeight - DEMO_H * scale) / 2}px`;
      };
      update();
      ro = new ResizeObserver(update);
      ro.observe(el);
    };
    // Small delay so the ref is attached after React commits the DOM
    const t = setTimeout(setup, 30);
    return () => { clearTimeout(t); ro?.disconnect(); };
  }, [showDemoModal]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = "El nombre es obligatorio";
    if (!formData.dni.trim()) newErrors.dni = "El DNI es obligatorio";
    if (!formData.especialidad.trim()) newErrors.especialidad = "La especialidad es obligatoria";
    if (!formData.centro.trim()) newErrors.centro = "El centro de salud o hospital es obligatorio";
    if (!formData.ciudad.trim()) newErrors.ciudad = "La ciudad es obligatoria";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleGenerate = (e) => {
    e.preventDefault();
    if (validate()) {
      setStep("result");
    }
  };

  const generatedSubject = `DG/08/26 APORTACIONES + ${formData.nombre.toUpperCase()}`;
  
  const generatedBody = useMemo(() => {
    if (step !== "result") return "";
    return `D./Dña. ${formData.nombre}, con DNI ${formData.dni}, facultativo especialista en ${formData.especialidad} con ejercicio profesional en ${formData.centro}, por medio del presente escrito

EXPONE:
Primero. El anteproyecto de ley de Estatuto Marco ha sido aprobado en Consejo de Ministros el pasado 2 de junio, pasando al trámite de audiencia e información pública, durante el cual pueden enviar aportaciones ciudadanos titulares de derechos e intereses legítimos afectados por un proyecto normativo ya redactado, directamente o a través de las organizaciones o asociaciones que los representen, antes de su futura remisión a las Cortes Generales.
Segundo. Que, tras un análisis detallado del texto y de las implicaciones que este anteproyecto de Ley tiene para la profesión médica y nuestro sistema sanitario, deseo manifestar mi profundo desacuerdo y firme oposición al enfoque y contenido de dicha reforma, por considerar que perpetúa la pérdida de especificidad del colectivo médico y no resuelve los problemas estructurales que arrastra la sanidad pública.
Por lo expuesto, SOLICITO:
La retirada inmediata del borrador del Estatuto Marco tramitado en el Consejo de ministros del 2 de julio, para abrir una mesa de negociación específica destinada a la redacción y aprobación de un Estatuto Propio del Médico. Un texto normativo singular que regule nuestras condiciones laborales, retributivas, formativas y de jubilación de acuerdo con la naturaleza única de nuestra profesión, en el que se recojan, como mínimo, las siguientes propuestas: 
Ámbito propio de negociación del médico: es necesario un sistema de negociación específico del médico y facultativos basado en:
•\tElecciones a Juntas de Personal específicas de los profesionales médicos y facultativos.
•\tCreación de Mesas Sectoriales específicas de los profesionales médicos y facultativos.
•\tÁmbito de negociación nacional del médico y facultativo que recoja los resultados de las elecciones expuestas anteriormente.
Nuevo sistema de clasificación profesional: nuevo sistema de clasificación basado en la mayor formación del médico y facultativo (MECES 3), la especialización y la responsabilidad de su categoría profesional.
Grupo 9: Categorías para las que el requisito de acceso sea un Nivel 7 del MECU con título de Especialista en Ciencias de la Salud: médicos y farmacéuticos especialistas, otros graduados de nivel 7 especialistas.
Grupo 8: Categorías para las que el requisito de acceso sea un Nivel 7 del MECU sin título de Especialista en Ciencias de la Salud: médicos, farmacéuticos, odontólogos, veterinarios…
Grupo 7: Categorías para las que el requisito de acceso sea un Nivel 6 del MECU con título de Especialista en Ciencias de la Salud: enfermeras especialistas, titulados post Bolonia MECES II con especialidad.
Grupo 6: Categorías para las que el requisito de acceso sea un Nivel 6 del MECU sin título de Especialista en Ciencias de la Salud: enfermería, pfisioterapia, logopedia…
Grupo 5: Categorías para las que el requisito de acceso sea un Nivel 5 del MECU pertenecientes a la familia profesional de sanidad: Técnicos de FP Grado Superior sanitario.
Creación de un Nivel A1 Plus específico para los médicos, y facultativos, y una clasificación acorde con el nivel de formación and de responsabilidad de nuestro colectivo, acompañada de la retribución correspondiente  
Cambios en la Jornada Laboral: debe desaparecer la obligación de realizar horas de trabajo por encima de la jornada ordinaria.
•\tJornada ordinaria de 35 horas semanales de 8 a 15 horas. NO a la ampliación del horario de jornada ordinaria de 7 a 22 horas
•\tLas horas que superan esta jornada ordinaria se consideran exceso de jornada, se paga como horas extraordinarias y computa para jubilación.
•\tDescansos relacionados con las jornadas de guardia y computables como jornada.
•\tRegulación de las guardias localizadas.
Sistema de jubilación flexible y voluntaria entre los 60 y los 70 años: 
•\tReconocimiento y cómputo de las horas de guardia para la jubilación.
•\tJubilación anticipada: reconocimiento de la penosidad de realizar jornadas de trabajo superiores a la jornada ordinaria, que permita la jubilación anticipada sin penalizaciones. 
•\tJubilación parcial para el personal estatutario.
•\tConsideración de la profesión médica y facultativa como profesión de riesgo.
Régimen de incompatibilidades igual que el resto de empleados públicos.
Esto es un breve resumen de la propuesta de Estatuto Propio de CESM y SMA, cuyo enlace adjunto a continuación:
http://www.cesm.org/wp-content/uploads/2026/06/ESTATUTO-PROPIO-DE-LA-PROFESION-MEDICA-Y-FACULTATIVA.pdf 
y que apoyo como texto de base para la negociación de un Estatuto que responda a las necesidades de los profesionales médicos y facultativos y del sistema sanitario en su conjunto.
Con la firme convicción de que defender la dignidad del médico es la única vía para garantizar la seguridad y la salud de nuestros pacientes.

En ${formData.ciudad}, a ${formData.dia} de ${formData.mes} de 2026.
Firmado:


Fdo: ${formData.nombre}
${formData.dni}`;
  }, [step, formData]);

  const generatedHtmlBody = useMemo(() => {
    if (step !== "result") return "";
    const logoBaseUrl = window.location.origin.includes("localhost") || window.location.origin.includes("127.0.0.1")
      ? "https://guallar7.github.io/estatuto-medico-propio"
      : `${window.location.origin}${window.location.pathname.replace(/\/[^/]*$/, "")}`;
    return `<div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333333; max-width: 650px; margin: 0 auto; padding: 20px;">
  <!-- Header with Logos -->
  <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #0F2C59; padding-bottom: 15px; margin-bottom: 25px; gap: 15px;">
    <img src="${logoBaseUrl}/CESM.png" alt="CESM" style="height: 50px; max-width: 140px; object-fit: contain;" />
    <div style="font-size: 13px; font-weight: bold; color: #0F2C59; text-align: center; flex: 1; line-height: 1.3;">APORTACIONES AL ANTEPROYECTO DE LEY<br>DEL ESTATUTO MARCO</div>
    <img src="${logoBaseUrl}/SMA.png" alt="SMA" style="height: 50px; max-width: 140px; object-fit: contain;" />
  </div>

  <!-- Body -->
  <p><strong>D./Dña. ${formData.nombre}</strong>, con DNI <strong>${formData.dni}</strong>, facultativo especialista en <strong>${formData.especialidad}</strong> con ejercicio profesional en <strong>${formData.centro}</strong>, por medio del presente escrito</p>
  
  <p style="margin-top: 20px; font-size: 16px; letter-spacing: 0.5px; margin-bottom: 10px;"><strong>EXPONE:</strong></p>
  
  <p style="margin-left: 15px; margin-bottom: 10px; text-align: justify;"><strong>Primero.</strong> El anteproyecto de ley de Estatuto Marco ha sido aprobado en Consejo de Ministros el pasado 2 de junio, pasando al trámite de audiencia e información pública, durante el cual pueden enviar aportaciones ciudadanos titulares de derechos e intereses legítimos afectados por un proyecto normativo ya redactado, directamente o a través de las organizaciones o asociaciones que los representen, antes de su futura remisión a las Cortes Generales.</p>
  
  <p style="margin-left: 15px; margin-bottom: 20px; text-align: justify;"><strong>Segundo.</strong> Que, tras un análisis detallado del texto y de las implicaciones que este anteproyecto de Ley tiene para la profesión médica y nuestro sistema sanitario, deseo manifestar mi profundo desacuerdo y firme oposición al enfoque y contenido de dicha reforma, por considerar que perpetúa la pérdida de especificidad del colectivo médico y no resuelve los problemas estructurales que arrastra la sanidad pública.</p>
  
  <p style="margin-top: 20px; font-size: 16px; letter-spacing: 0.5px; margin-bottom: 10px;"><strong>Por lo expuesto, SOLICITO:</strong></p>
  
  <p style="margin-bottom: 15px; text-align: justify;">La retirada inmediata del borrador del Estatuto Marco tramitado en el Consejo de ministros del 2 de julio, para abrir una mesa de negociación específica destinada a la redacción y aprobación de un <strong>Estatuto Propio del Médico</strong>. Un texto normativo singular que regule nuestras condiciones laborales, retributivas, formativas y de jubilación de acuerdo con la naturaleza única de nuestra profesión, en el que se recojan, como mínimo, las siguientes propuestas:</p>
  
  <div style="margin-left: 15px;">
    <p style="margin-bottom: 5px;"><strong>Ámbito propio de negociación del médico:</strong> es necesario un sistema de negociación específico del médico y facultativos basado en:</p>
    <ul style="margin-top: 0; margin-bottom: 15px; padding-left: 20px;">
      <li>Elecciones a Juntas de Personal específicas de los profesionales médicos y facultativos.</li>
      <li>Creación de Mesas Sectoriales específicas de los profesionales médicos y facultativos.</li>
      <li>Ámbito de negociación nacional del médico y facultativo que recoja los resultados de las elecciones expuestas anteriormente.</li>
    </ul>

    <p style="margin-bottom: 5px;"><strong>Nuevo sistema de clasificación profesional:</strong> nuevo sistema de clasificación basado en la mayor formación del médico y facultativo (MECES 3), la especialización y la responsabilidad de su categoría profesional.</p>
    <ul style="margin-top: 0; margin-bottom: 15px; padding-left: 20px; list-style-type: none;">
      <li style="margin-bottom: 5px;"><strong>Grupo 9:</strong> Categorías para las que el requisito de acceso sea un Nivel 7 del MECU con título de Especialista en Ciencias de la Salud: médicos y farmacéuticos especialistas, otros graduados de nivel 7 especialistas.</li>
      <li style="margin-bottom: 5px;"><strong>Grupo 8:</strong> Categorías para las que el requisito de acceso sea un Nivel 7 del MECU sin título de Especialista en Ciencias de la Salud: médicos, farmacéuticos, odontólogos, veterinarios…</li>
      <li style="margin-bottom: 5px;"><strong>Grupo 7:</strong> Categorías para las que el requisito de acceso sea un Nivel 6 del MECU con título de Especialista en Ciencias de la Salud: enfermeras especialistas, titulados post Bolonia MECES II con especialidad.</li>
      <li style="margin-bottom: 5px;"><strong>Grupo 6:</strong> Categorías para las que el requisito de acceso sea un Nivel 6 del MECU sin título de Especialista en Ciencias de la Salud: enfermería, fisioterapia, logopedia…</li>
      <li style="margin-bottom: 5px;"><strong>Grupo 5:</strong> Categorías para las que el requisito de acceso sea un Nivel 5 del MECU pertenecientes a la familia profesional de sanidad: Técnicos de FP Grado Superior sanitario.</li>
    </ul>

    <p style="margin-bottom: 15px; text-align: justify;">Creación de un <strong>Nivel A1 Plus</strong> específico para los médicos, y facultativos, y una clasificación acorde con el nivel de formación y de responsabilidad de nuestro colectivo, acompañada de la retribución correspondiente.</p>

    <p style="margin-bottom: 5px;"><strong>Cambios en la Jornada Laboral:</strong> debe desaparecer la obligación de realizar horas de trabajo por encima de la jornada ordinaria.</p>
    <ul style="margin-top: 0; margin-bottom: 15px; padding-left: 20px;">
      <li>Jornada ordinaria de 35 horas semanales de 8 a 15 horas. <strong>NO</strong> a la ampliación del horario de jornada ordinaria de 7 a 22 horas.</li>
      <li>Las horas que superan esta jornada ordinaria se consideran exceso de jornada, se paga como horas extraordinarias y computa para jubilación.</li>
      <li>Descansos relacionados con las jornadas de guardia y computables como jornada.</li>
      <li>Regulación de las guardias localizadas.</li>
    </ul>

    <p style="margin-bottom: 5px;"><strong>Sistema de jubilación flexible y voluntaria entre los 60 y los 70 años:</strong></p>
    <ul style="margin-top: 0; margin-bottom: 15px; padding-left: 20px;">
      <li>Reconocimiento y cómputo de las horas de guardia para la jubilación.</li>
      <li>Jubilación anticipada: reconocimiento de la penosidad de realizar jornadas de trabajo superiores a la jornada ordinaria, que permita la jubilación anticipada sin penalizaciones.</li>
      <li>Jubilación parcial para el personal estatutario.</li>
      <li>Consideración de la profesión médica y facultativa como profesión de riesgo.</li>
    </ul>

    <p style="margin-bottom: 15px;"><strong>Régimen de incompatibilidades</strong> igual que el resto de empleados públicos.</p>
  </div>
  
  <p style="text-align: justify;">Esto es un breve resumen de la propuesta de Estatuto Propio de CESM y SMA, cuyo enlace adjunto a continuación: <a href="http://www.cesm.org/wp-content/uploads/2026/06/ESTATUTO-PROPIO-DE-LA-PROFESION-MEDICA-Y-FACULTATIVA.pdf">http://www.cesm.org/wp-content/uploads/2026/06/ESTATUTO-PROPIO-DE-LA-PROFESION-MEDICA-Y-FACULTATIVA.pdf</a> y que apoyo como texto de base para la negociación de un Estatuto que responda a las necesidades de los profesionales médicos y facultativos y del sistema sanitario en su conjunto.</p>
  
  <p style="text-align: justify;">Con la firme convicción de que defender la dignidad del médico es la única vía para garantizar la seguridad y la salud de nuestros pacientes.</p>
  
  <p style="margin-top: 30px;">En <strong>${formData.ciudad}</strong>, a <strong>${formData.dia}</strong> de <strong>${formData.mes}</strong> de 2026.</p>
  
  <p style="margin-top: 40px; margin-bottom: 0;">Firmado:</p>
  <p style="margin-top: 20px; margin-bottom: 0;">Fdo: <strong>${formData.nombre}</strong></p>
  <p style="margin-top: 5px; margin-bottom: 0;">DNI/NIE: <strong>${formData.dni}</strong></p>
</div>`;
  }, [step, formData]);

  const handleCopySubject = async () => {
    try {
      await navigator.clipboard.writeText(generatedSubject);
      setCopiedSubject(true);
      setTimeout(() => setCopiedSubject(false), 2000);
    } catch (err) {
      console.error("Error al copiar el asunto", err);
    }
  };

  const handleCopyBody = async () => {
    try {
      const plainTextBlob = new Blob([generatedBody], { type: "text/plain" });
      const htmlTextBlob = new Blob([generatedHtmlBody], { type: "text/html" });
      const clipboardItem = new ClipboardItem({
        "text/plain": plainTextBlob,
        "text/html": htmlTextBlob
      });
      await navigator.clipboard.write([clipboardItem]);
      setCopiedBody(true);
      setTimeout(() => setCopiedBody(false), 2000);
    } catch (err) {
      console.error("Error al copiar texto enriquecido, reintentando plano:", err);
      try {
        await navigator.clipboard.writeText(generatedBody);
        setCopiedBody(true);
        setTimeout(() => setCopiedBody(false), 2000);
      } catch (fallbackErr) {
        console.error("Error al copiar texto plano:", fallbackErr);
      }
    }
  };

  const handlePrint = () => {
    const printWindow = window.open("", "_blank", "width=850,height=900");
    if (!printWindow) {
      alert("Por favor, permite las ventanas emergentes en tu navegador para generar/imprimir el PDF.");
      return;
    }
    const logoBaseUrl = window.location.origin.includes("localhost") || window.location.origin.includes("127.0.0.1")
      ? "https://guallar7.github.io/estatuto-medico-propio"
      : `${window.location.origin}${window.location.pathname.replace(/\/[^/]*$/, "")}`;
    printWindow.document.write(`<!DOCTYPE html>
      <html>
        <head>
          <title>Aportaciones APL Estatuto Marco</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.5; color: #333; padding: 40px; margin: 0; font-size: 14px; }
            .header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #0F2C59; padding-bottom: 15px; margin-bottom: 25px; gap: 15px; }
            .logo { height: 60px; max-width: 180px; object-fit: contain; }
            .header-title { font-size: 14px; font-weight: bold; color: #0F2C59; text-align: center; line-height: 1.35; flex: 1; }
            p { margin: 0 0 15px 0; text-align: justify; }
            .section-title { font-weight: bold; font-size: 15px; margin-top: 25px; margin-bottom: 10px; color: #0F2C59; }
            .proposals-list { margin-left: 15px; }
            ul { margin: 0 0 15px 0; padding-left: 20px; }
            li { margin-bottom: 6px; text-align: justify; }
            .unstyled-list { list-style-type: none; padding-left: 0; }
            .unstyled-list li { margin-bottom: 6px; }
            .signature { margin-top: 40px; page-break-inside: avoid; }
            @media print {
              body { padding: 0; }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <img class="logo" src="${logoBaseUrl}/CESM.png" />
            <div class="header-title">APORTACIONES AL ANTEPROYECTO DE LEY<br>DEL ESTATUTO MARCO</div>
            <img class="logo" src="${logoBaseUrl}/SMA.png" />
          </div>
          
          <p><strong>D./Dña. ${formData.nombre}</strong>, con DNI <strong>${formData.dni}</strong>, facultativo especialista en <strong>${formData.especialidad}</strong> con ejercicio profesional en <strong>${formData.centro}</strong>, por medio del presente escrito</p>
          
          <div class="section-title">EXPONE:</div>
          <p><strong>Primero.</strong> El anteproyecto de ley de Estatuto Marco ha sido aprobado en Consejo de Ministros el pasado 2 de junio, pasando al trámite de audiencia e información pública, durante el cual pueden enviar aportaciones ciudadanos titulares de derechos e intereses legítimos afectados por un proyecto normativo ya redactado, directamente o a través de las organizaciones o asociaciones que los representen, antes de su futura remisión a las Cortes Generales.</p>
          <p><strong>Segundo.</strong> Que, tras un análisis detallado del texto y de las implicaciones que este anteproyecto de Ley tiene para la profesión médica y nuestro sistema sanitario, deseo manifestar mi profundo desacuerdo y firme oposición al enfoque y contenido de dicha reforma, por considerar que perpetúa la pérdida de especificidad del colectivo médico y no resuelve los problemas estructurales que arrastra la sanidad pública.</p>
          
          <div class="section-title">SOLICITO:</div>
          <p>La retirada inmediata del borrador del Estatuto Marco tramitado en el Consejo de ministros del 2 de julio, para abrir una mesa de negociación específica destinada a la redacción y aprobación de un <strong>Estatuto Propio del Médico</strong>. Un texto normativo singular que regule nuestras condiciones laborales, retributivas, formativas y de jubilación de acuerdo con la naturaleza única de nuestra profesión, en el que se recojan, como mínimo, las siguientes propuestas:</p>
          
          <div class="proposals-list">
            <p><strong>Ámbito propio de negociación del médico:</strong> es necesario un sistema de negociación específico del médico y facultativos basado en:</p>
            <ul>
              <li>Elecciones a Juntas de Personal específicas de los profesionales médicos y facultativos.</li>
              <li>Creación de Mesas Sectoriales específicas de los profesionales médicos y facultativos.</li>
              <li>Ámbito de negociación nacional del médico y facultativo que recoja los resultados de las elecciones expuestas anteriormente.</li>
            </ul>

            <p><strong>Nuevo sistema de clasificación profesional:</strong> nuevo sistema de clasificación basado en la mayor formación del médico y facultativo (MECES 3), la especialización y la responsabilidad de su categoría profesional.</p>
            <ul class="unstyled-list">
              <li><strong>Grupo 9:</strong> Categorías para las que el requisito de acceso sea un Nivel 7 del MECU con título de Especialista en Ciencias de la Salud: médicos y farmacéuticos especialistas, otros graduados de nivel 7 especialistas.</li>
              <li><strong>Grupo 8:</strong> Categorías para las que el requisito de acceso sea un Nivel 7 del MECU sin título de Especialista en Ciencias de la Salud: médicos, farmacéuticos, odontólogos, veterinarios…</li>
              <li><strong>Grupo 7:</strong> Categorías para las que el requisito de acceso sea un Nivel 6 del MECU con título de Especialista en Ciencias de la Salud: enfermeras especialistas, titulados post Bolonia MECES II con especialidad.</li>
              <li><strong>Grupo 6:</strong> Categorías para las que el requisito de acceso sea un Nivel 6 del MECU sin título de Especialista en Ciencias de la Salud: enfermería, fisioterapia, logopedia…</li>
              <li><strong>Grupo 5:</strong> Categorías para las que el requisito de acceso sea un Nivel 5 del MECU pertenecientes a la familia profesional de sanidad: Técnicos de FP Grado Superior sanitario.</li>
            </ul>

            <p>Creación de un <strong>Nivel A1 Plus</strong> específico para los médicos, y facultativos, y una clasificación acorde con el nivel de formación y de responsabilidad de nuestro colectivo, acompañada de la retribución correspondiente.</p>

            <p><strong>Cambios en la Jornada Laboral:</strong> debe desaparecer la obligación de realizar horas de trabajo por encima de la jornada ordinaria.</p>
            <ul>
              <li>Jornada ordinaria de 35 horas semanales de 8 a 15 horas. <strong>NO</strong> a la ampliación del horario de jornada ordinaria de 7 a 22 horas.</li>
              <li>Las horas que superan esta jornada ordinaria se consideran exceso de jornada, se paga como horas extraordinarias y computa para jubilación.</li>
              <li>Descansos relacionados con las jornadas de guardia y computables como jornada.</li>
              <li>Regulación de las guardias localizadas.</li>
            </ul>

            <p><strong>Sistema de jubilación flexible y voluntaria entre los 60 y los 70 años:</strong></p>
            <ul>
              <li>Reconocimiento y cómputo de las horas de guardia para la jubilación.</li>
              <li>Jubilación anticipada: reconocimiento de la penosidad de realizar jornadas de trabajo superiores a la jornada ordinaria, que permita la jubilación anticipada sin penalizaciones.</li>
              <li>Jubilación parcial para el personal estatutario.</li>
              <li>Consideración de la profesión médica y facultativa como profesión de riesgo.</li>
            </ul>

            <p><strong>Régimen de incompatibilidades:</strong> igual que el resto de empleados públicos.</p>
          </div>
          
          <p>Esto es un breve resumen de la propuesta de Estatuto Propio de CESM y SMA, cuyo enlace adjunto a continuación: <a href="http://www.cesm.org/wp-content/uploads/2026/06/ESTATUTO-PROPIO-DE-LA-PROFESION-MEDICA-Y-FACULTATIVA.pdf">http://www.cesm.org/wp-content/uploads/2026/06/ESTATUTO-PROPIO-DE-LA-PROFESION-MEDICA-Y-FACULTATIVA.pdf</a> y que apoyo como texto de base para la negociación de un Estatuto que responda a las necesidades de los profesionales médicos y facultativos y del sistema sanitario en su conjunto.</p>
          <p>Con la firme convicción de que defender la dignidad del médico es la única vía para garantizar la seguridad y la salud de nuestros pacientes.</p>
          
          <div class="signature">
            <p>En <strong>${formData.ciudad}</strong>, a <strong>${formData.dia}</strong> de <strong>${formData.mes}</strong> de 2026.</p>
            <p style="margin-top: 25px;">Firmado:</p>
            <p style="margin-top: 10px; margin-bottom: 0;">Fdo: <strong>${formData.nombre}</strong></p>
            <p style="margin-top: 3px; margin-bottom: 0;">DNI/NIE: <strong>${formData.dni}</strong></p>
          </div>

          <script>
            window.onload = function() {
              window.print();
            }
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  const mailtoUrl = `mailto:informacionpublica.aplestatutomarco@sanidad.gob.es?subject=${encodeURIComponent(generatedSubject)}`;

  if (step === "result") {
    return (
      <>
        <div className="apl-result-container">
          <div className="apl-result-header">
            <span>Escrito generado</span>
            <strong>Aportaciones listas</strong>
            <small>Sigue estos pasos para completar el envío antes del 26 de junio de 2026:</small>
            <button
              type="button"
              className="help-demo-btn"
              onClick={() => setShowDemoModal(true)}
              title="Ver tutorial animado"
            >
              <HelpCircle size={13} />
              Ayuda
            </button>
          </div>

          <div className="apl-steps-guide">
            <div className="apl-guide-step">
              <span className="step-badge">1</span>
              <p>Haz clic en <strong>"Copiar Cuerpo"</strong>. Se copiará en texto enriquecido (manteniendo negritas y logotipos al pegarlo en Gmail u Outlook).</p>
            </div>
            <div className="apl-guide-step">
              <span className="step-badge">2</span>
              <p>Haz clic en <strong>"Guardar en PDF"</strong> (selecciona la opción "Guardar como PDF" en el menú que se abrirá) para descargar el escrito oficial listo para adjuntar.</p>
            </div>
            <div className="apl-guide-step">
              <span className="step-badge">3</span>
              <p>Haz clic en <strong>"Abrir Correo"</strong> para iniciar el envío y pega el cuerpo del mensaje en el mail.</p>
            </div>
          </div>

          <div className="apl-result-preview-box">
            <div className="preview-label">Vista previa del escrito oficial:</div>
            <div className="document-sheet">
              <div className="document-sheet-header">
                <img src="CESM.png" alt="CESM" className="doc-logo" />
                <div className="doc-header-title">
                  APORTACIONES AL ANTEPROYECTO DE LEY<br />DEL ESTATUTO MARCO
                </div>
                <img src="SMA.png" alt="SMA" className="doc-logo" />
              </div>
              
              <div className="document-sheet-body">
                <p><strong>D./Dña. {formData.nombre}</strong>, con DNI <strong>{formData.dni}</strong>, facultativo especialista en <strong>{formData.especialidad}</strong> con ejercicio profesional en <strong>{formData.centro}</strong>, por medio del presente escrito</p>
                
                <div className="doc-section-title">EXPONE:</div>
                <p><strong>Primero.</strong> El anteproyecto de ley de Estatuto Marco ha sido aprobado en Consejo de Ministros el pasado 2 de junio, pasando al trámite de audiencia e información pública, durante el cual pueden enviar aportaciones ciudadanos titulares de derechos e intereses legítimos afectados por un proyecto normativo ya redactado, directamente o a través de las organizaciones o asociaciones que los representen, antes de su futura remisión a las Cortes Generales.</p>
                <p><strong>Segundo.</strong> Que, tras un análisis detallado del texto y de las implicaciones que este anteproyecto de Ley tiene para la profesión médica y nuestro sistema sanitario, deseo manifestar mi profundo desacuerdo y firme oposición al enfoque y contenido de dicha reforma, por considerar que perpetúa la pérdida de especificidad del colectivo médico y no resuelve los problemas estructurales que arrastra la sanidad pública.</p>
                
                <div className="doc-section-title">SOLICITO:</div>
                <p>La retirada inmediata del borrador del Estatuto Marco tramitado en el Consejo de ministros del 2 de julio, para abrir una mesa de negociación específica destinada a la redacción y aprobación de un <strong>Estatuto Propio del Médico</strong>. Un texto normativo singular que regule nuestras condiciones laborales, retributivas, formativas y de jubilación de acuerdo con la naturaleza única de nuestra profesión, en el que se recojan, como mínimo, las siguientes propuestas:</p>
                
                <div className="doc-proposals">
                  <p><strong>Ámbito propio de negociación del médico:</strong> es necesario un sistema de negociación específico del médico y facultativos basado en:</p>
                  <ul>
                    <li>Elecciones a Juntas de Personal específicas de los profesionales médicos y facultativos.</li>
                    <li>Creación de Mesas Sectoriales específicas de los profesionales médicos y facultativos.</li>
                    <li>Ámbito de negociación nacional del médico y facultativo que recoja los resultados de las elecciones expuestas anteriormente.</li>
                  </ul>

                  <p><strong>Nuevo sistema de clasificación profesional:</strong> nuevo sistema de clasificación basado en la mayor formación del médico y facultativo (MECES 3), la especialización y la responsabilidad de su categoría profesional.</p>
                  <ul className="unstyled-list">
                    <li><strong>Grupo 9:</strong> Categorías para las que el requisito de acceso sea un Nivel 7 del MECU con título de Especialista en Ciencias de la Salud: médicos y farmacéuticos especialistas, otros graduados de nivel 7 especialistas.</li>
                    <li><strong>Grupo 8:</strong> Categorías para las que el requisito de acceso sea un Nivel 7 del MECU sin título de Especialista en Ciencias de la Salud: médicos, farmacéuticos, odontólogos, veterinarios…</li>
                    <li><strong>Grupo 7:</strong> Categorías para las que el requisito de acceso sea un Nivel 6 del MECU con título de Especialista en Ciencias de la Salud: enfermeras especialistas, titulados post Bolonia MECES II con especialidad.</li>
                    <li><strong>Grupo 6:</strong> Categorías para las que el requisito de acceso sea un Nivel 6 del MECU sin título de Especialista en Ciencias de la Salud: enfermería, fisioterapia, logopedia…</li>
                    <li><strong>Grupo 5:</strong> Categorías para las que el requisito de acceso sea un Nivel 5 del MECU pertenecientes a la familia profesional de sanidad: Técnicos de FP Grado Superior sanitario.</li>
                  </ul>

                  <p>Creación de un <strong>Nivel A1 Plus</strong> específico para los médicos, y facultativos, y una clasificación acorde con el nivel de formación y de responsabilidad de nuestro colectivo, acompañada de la retribución correspondiente.</p>

                  <p><strong>Cambios en la Jornada Laboral:</strong> debe desaparecer la obligación de realizar horas de trabajo por encima de la jornada ordinaria.</p>
                  <ul>
                    <li>Jornada ordinaria de 35 horas semanales de 8 a 15 horas. <strong>NO</strong> a la ampliación del horario de jornada ordinaria de 7 a 22 horas.</li>
                    <li>Las horas que superan esta jornada ordinaria se consideran exceso de jornada, se paga como horas extraordinarias y computa para jubilación.</li>
                    <li>Descansos relacionados con las jornadas de guardia y computables como jornada.</li>
                    <li>Regulación de las guardias localizadas.</li>
                  </ul>

                  <p><strong>Sistema de jubilación flexible y voluntaria entre los 60 y los 70 años:</strong></p>
                  <ul>
                    <li>Reconocimiento y cómputo de las horas de guardia para la jubilación.</li>
                    <li>Jubilación anticipada: reconocimiento de la penosidad de realizar jornadas de trabajo superiores a la jornada ordinaria, que permita la jubilación anticipada sin penalizaciones.</li>
                    <li>Jubilación parcial para el personal estatutario.</li>
                    <li>Consideración de la profesión médica y facultativa como profesión de riesgo.</li>
                  </ul>

                  <p><strong>Régimen de incompatibilidades:</strong> igual que el resto de empleados públicos.</p>
                </div>

                <p>Esto es un breve resumen de la propuesta de Estatuto Propio de CESM y SMA, cuyo enlace adjunto a continuación: <a href="http://www.cesm.org/wp-content/uploads/2026/06/ESTATUTO-PROPIO-DE-LA-PROFESION-MEDICA-Y-FACULTATIVA.pdf" target="_blank" rel="noreferrer">http://www.cesm.org/wp-content/uploads/2026/06/ESTATUTO-PROPIO-DE-LA-PROFESION-MEDICA-Y-FACULTATIVA.pdf</a> y que apoyo como texto de base para la negociación de un Estatuto que responda a las necesidades de los profesionales médicos y facultativos y del sistema sanitario en su conjunto.</p>
                <p>Con la firme convicción de que defender la dignidad del médico es la única vía para garantizar la seguridad y la salud de nuestros pacientes.</p>

                <p className="doc-date">En <strong>{formData.ciudad}</strong>, a <strong>{formData.dia}</strong> de <strong>{formData.mes}</strong> de 2026.</p>
                <p style={{ marginTop: "25px" }}>Firmado:</p>
                <p style={{ margin: "5px 0 0 0" }}>Fdo: <strong>{formData.nombre}</strong></p>
                <p style={{ margin: "5px 0 0 0" }}>DNI/NIE: <strong>{formData.dni}</strong></p>
              </div>
            </div>
          </div>

          <div className="apl-actions-row flex-row-three">
            <button className="widget-btn primary-btn" onClick={handleCopyBody} type="button">
              {copiedBody ? <Check size={16} /> : <Copy size={16} />}
              {copiedBody ? "¡Copiado!" : "Copiar Cuerpo"}
            </button>
            <button className="widget-btn print-btn" onClick={handlePrint} type="button">
              <Printer size={16} />
              <span>Guardar en PDF</span>
            </button>
            <a className="widget-btn action-btn" href={mailtoUrl} target="_blank" rel="noreferrer">
              <Mail size={16} />
              <span>Abrir Correo</span>
            </a>
          </div>

          <div className="apl-meta-info">
            <span>Destinatario:</span>
            <code>informacionpublica.aplestatutomarco@sanidad.gob.es</code>
          </div>
          <div className="apl-meta-info">
            <span>Asunto:</span>
            <code className="clickable-code" onClick={handleCopySubject} title="Haz clic para copiar">
              {generatedSubject} {copiedSubject ? " (¡Copiado!)" : " 📋"}
            </code>
          </div>

          <button className="back-link-btn" onClick={() => setStep("form")} type="button">
            <ArrowLeft size={14} /> Volver a editar datos
          </button>
        </div>

        {showDemoModal && (
          <div className="demo-modal-backdrop" onClick={() => setShowDemoModal(false)}>
            <div className="demo-modal-card" onClick={(e) => e.stopPropagation()}>
              <div className="demo-modal-header">
                <h3>▶ Tutorial animado</h3>
                <button className="demo-modal-close-btn" type="button" onClick={() => setShowDemoModal(false)}>
                  <X size={18} />
                </button>
              </div>
              <div className="demo-modal-body">
                <div className="demo-modal-iframe-wrapper" ref={iframeWrapperRef}>
                  <iframe
                    src="demo-animada.html"
                    title="Demostración interactiva de alegaciones APL"
                    className="demo-modal-iframe"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <>
      <form className="apl-form" onSubmit={handleGenerate}>
        <div className="apl-form-header">
          <span>Aportaciones al anteproyecto</span>
          <strong>Generar Escrito</strong>
          <small>El anteproyecto está en plazo de alegaciones públicas. Completa tus datos para generar tu escrito oficial.</small>
          <button
            type="button"
            className="help-demo-btn"
            onClick={() => setShowDemoModal(true)}
            title="Ver tutorial animado"
          >
            <HelpCircle size={13} />
            Ayuda
          </button>
        </div>

        <div className="form-group-grid">
          <div className="input-wrapper">
            <label htmlFor="nombre">Nombre y Apellidos *</label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              placeholder="Dr. José García Pérez"
              value={formData.nombre}
              onChange={handleChange}
              className={errors.nombre ? "error" : ""}
            />
            {errors.nombre && <span className="error-text">{errors.nombre}</span>}
          </div>

          <div className="input-wrapper">
            <label htmlFor="dni">DNI / NIE *</label>
            <input
              id="dni"
              name="dni"
              type="text"
              placeholder="12345678A"
              value={formData.dni}
              onChange={handleChange}
              className={errors.dni ? "error" : ""}
            />
            {errors.dni && <span className="error-text">{errors.dni}</span>}
          </div>

          <div className="input-wrapper">
            <label htmlFor="especialidad">Especialidad médica *</label>
            <input
              id="especialidad"
              name="especialidad"
              type="text"
              placeholder="Pediatría / Medicina Familiar..."
              value={formData.especialidad}
              onChange={handleChange}
              className={errors.especialidad ? "error" : ""}
            />
            {errors.especialidad && <span className="error-text">{errors.especialidad}</span>}
          </div>

          <div className="input-wrapper">
            <label htmlFor="centro">Hospital o Centro de Salud *</label>
            <input
              id="centro"
              name="centro"
              type="text"
              placeholder="Hospital Clínico Universitario"
              value={formData.centro}
              onChange={handleChange}
              className={errors.centro ? "error" : ""}
            />
            {errors.centro && <span className="error-text">{errors.centro}</span>}
          </div>

          <div className="input-wrapper-row">
            <div className="input-wrapper half">
              <label htmlFor="ciudad">Ciudad *</label>
              <input
                id="ciudad"
                name="ciudad"
                type="text"
                placeholder="Madrid"
                value={formData.ciudad}
                onChange={handleChange}
                className={errors.ciudad ? "error" : ""}
              />
              {errors.ciudad && <span className="error-text">{errors.ciudad}</span>}
            </div>

            <div className="input-wrapper quarter">
              <label htmlFor="dia">Día</label>
              <input
                id="dia"
                name="dia"
                type="number"
                min="1"
                max="31"
                value={formData.dia}
                onChange={handleChange}
              />
            </div>

            <div className="input-wrapper quarter">
              <label htmlFor="mes">Mes</label>
              <input
                id="mes"
                name="mes"
                type="text"
                value={formData.mes}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <button className="widget-btn primary-btn submit-btn" type="submit">
          Generar Escrito <ArrowRight size={16} />
        </button>

        <span className="deadline-notice">Plazo de presentación: antes del 26 de junio de 2026</span>
      </form>

      {showDemoModal && (
        <div className="demo-modal-backdrop" onClick={() => setShowDemoModal(false)}>
          <div className="demo-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="demo-modal-header">
              <h3>▶ Tutorial animado</h3>
              <button className="demo-modal-close-btn" type="button" onClick={() => setShowDemoModal(false)}>
                <X size={18} />
              </button>
            </div>
            <div className="demo-modal-body">
              <div className="demo-modal-iframe-wrapper" ref={iframeWrapperRef}>
                <iframe
                  src="demo-animada.html"
                  title="Demostración interactiva de alegaciones APL"
                  className="demo-modal-iframe"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
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
  const activeIndex = Math.max(0, navItems.findIndex((item) => item.id === activeId));
  const activeItem = navItems[activeIndex] ?? navItems[0];
  const previousItem = activeIndex > 0 ? navItems[activeIndex - 1] : null;
  const nextItem = activeIndex >= 0 && activeIndex < navItems.length - 1 ? navItems[activeIndex + 1] : null;

  const openAccordionTarget = (id) => {
    const target = document.getElementById(id);
    if (!(target instanceof HTMLDetailsElement) || !target.classList.contains("accordion")) return false;

    target.open = true;
    target.querySelector("summary")?.focus({ preventScroll: true });
    return true;
  };

  const goToSection = (id) => {
    const target = document.getElementById(id);
    if (!target) return;

    openAccordionTarget(id);
    window.history.pushState(null, "", `#${id}`);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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

  useEffect(() => {
    const openHashTarget = () => {
      const id = window.location.hash.slice(1);
      if (!id) return;
      openAccordionTarget(decodeURIComponent(id));
    };

    openHashTarget();
    window.addEventListener("hashchange", openHashTarget);
    return () => window.removeEventListener("hashchange", openHashTarget);
  }, [navItems]);

  const handleIndexClick = (event, id) => {
    if (openAccordionTarget(id)) {
      event.currentTarget.blur();
    }
  };

  const handleMobileStep = (id) => {
    if (!id) return;
    goToSection(id);
  };

  const renderIndexLinks = () =>
    navItems.map((item) => (
      <a className={activeId === item.id ? "active" : ""} href={`#${item.id}`} onClick={(event) => handleIndexClick(event, item.id)} key={item.id}>
        {item.label}
      </a>
    ));

  return (
    <div className="page-layout">
      <nav className="mobile-section-bar" aria-label="Navegación de secciones">
        <button type="button" disabled={!previousItem} aria-label={previousItem ? `Ir a ${previousItem.label}` : "No hay sección anterior"} onClick={() => handleMobileStep(previousItem?.id)}>
          <ArrowLeft size={17} />
        </button>
        <span>{activeItem?.label ?? "Sección"}</span>
        <button type="button" disabled={!nextItem} aria-label={nextItem ? `Ir a ${nextItem.label}` : "No hay sección siguiente"} onClick={() => handleMobileStep(nextItem?.id)}>
          <ArrowRight size={17} />
        </button>
      </nav>
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

function Accordion({ id, title, titleMeta, eyebrow, summary, children, defaultOpen = false, status, tone, meta = [], nextItem = null }) {
  const [copied, setCopied] = useState(false);

  const handleNextClick = (event) => {
    if (!nextItem) return;
    event.preventDefault();

    const current = document.getElementById(id);
    const next = document.getElementById(nextItem.id);
    if (!(next instanceof HTMLDetailsElement)) return;

    if (current instanceof HTMLDetailsElement) current.open = false;
    next.open = true;
    window.history.pushState(null, "", `#${nextItem.id}`);
    next.scrollIntoView({ behavior: "smooth", block: "start" });
    next.querySelector("summary")?.focus({ preventScroll: true });
  };

  const handleCopyLink = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      const field = document.createElement("textarea");
      field.value = url;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      document.execCommand("copy");
      document.body.removeChild(field);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    }
  };

  return (
    <details className="accordion" id={id} open={defaultOpen}>
      <summary className={status || tone ? "has-state-chip" : undefined} tabIndex={0}>
        <span>{eyebrow}</span>
        <strong>
          {titleMeta && <em className="accordion-title-meta">{titleMeta}</em>}
          {title}
        </strong>
        {summary && <small>{summary}</small>}
        {meta.length > 0 && (
          <em className="accordion-meta">
            {meta.map((item) => <b key={item}>{item}</b>)}
          </em>
        )}
        {status && <StatusBadge status={status} />}
        {tone && <NewsToneBadge tone={tone} />}
        <button className={copied ? "copy-link copied" : "copy-link"} type="button" aria-label={copied ? "Enlace copiado" : `Copiar enlace a ${title}`} title={copied ? "Copiado" : "Copiar enlace"} onClick={handleCopyLink}>
          {copied ? <Check size={15} /> : <Copy size={15} />}
        </button>
        <ChevronDown className="chevron" size={20} />
      </summary>
      <div className="accordion-content" id={`${id}-content`}>
        {children}
        {nextItem && (
          <a className="accordion-next" href={`#${nextItem.id}`} onClick={handleNextClick}>
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

const claimArticleLabel = (claim) => {
  const references = [...(claim.refs ?? []), ...(claim.evidence ?? []).map((item) => item.article)];
  const labels = references.map(extractAplReferenceLabel).filter(Boolean);
  const uniqueLabels = [...new Set(labels)];
  if (!uniqueLabels.length) return null;

  const [first, second] = uniqueLabels;
  const shouldPairProvisions =
    second &&
    (/^D[ATF]\b/i.test(first) || /^D[ATF]\b/i.test(second)) &&
    first.length + second.length <= 18;

  return shouldPairProvisions ? `${first} / ${second}` : first;
};

const extractAplReferenceLabel = (value = "") => {
  if (!value || /\b(?:Directiva|Ley|RD|EBEP|Acuerdo|TJUE|CESM|BOE)\b/i.test(value)) return null;

  const text = value.replace(/\bAPL\b.*$/i, "").trim();
  const provision = text.match(/\b(D[ATF])\s*(\d+(?:\.\d+)?(?:\s*[-–]\s*\d+(?:\.\d+)?)?)/i);
  if (provision) return normalizeAplReference(`${provision[1].toUpperCase()} ${provision[2]}`);

  const article = text.match(/\b(Arts?\.?)\s*([\d][\d\s.,y-]*)/i);
  if (!article) return null;

  const prefix = article[1].toLowerCase().startsWith("arts") ? "Arts." : "Art.";
  return normalizeAplReference(`${prefix} ${article[2].trim()}`);
};

const normalizeAplReference = (value) =>
  value
    .replace(/\b(Art\.?|Arts\.?)\s+(\d+)\.\d+/gi, "$1 $2")
    .replace(/\b(DA|DT|DF)\s+(\d+)\.\d+/gi, "$1 $2")
    .replace(/\s+/g, " ")
    .trim();

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
              <ChevronDown className="evidence-chevron" size={16} />
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
