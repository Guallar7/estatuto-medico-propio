export const baseUrl = "https://guallar7.github.io/estatuto-medico-propio/";
export const mirPortalUrl = "https://guallar7.github.io/mir-estatuto-realidad/";

export const pages = [
  { id: "home", label: "Inicio", path: "index.html" },
  { id: "reivindicaciones", label: "Programa", path: "reivindicaciones.html" },
  { id: "anteproyecto", label: "Anteproyecto", path: "anteproyecto.html" },
  { id: "noticias", label: "Noticias", path: "noticias.html" },
  { id: "novedades", label: "Novedades", path: "novedades.html" },
  { id: "fuentes", label: "Fuentes", path: "fuentes.html" },
  { id: "argumentario", label: "Argumentario", path: "argumentario.html" },
  { id: "mir", label: "MIR", path: "mir.html" }
];

export const homeCards = [
  {
    id: "reivindicaciones",
    title: "Qué reclamamos",
    text: "Estatuto propio, mesa médica propia, guardias computables, descanso real, conciliación y jubilación.",
    cta: "Ver programa"
  },
  {
    id: "anteproyecto",
    title: "Anteproyecto desmontado",
    text: "Qué se anuncia, qué queda sin garantizar, qué riesgo deja abierto y qué reclamamos.",
    cta: "Ver matriz"
  },
  {
    id: "noticias",
    title: "Noticias y declaraciones",
    text: "Respuestas breves a titulares, comunicados sindicales y mensajes institucionales.",
    cta: "Ver respuestas"
  },
  {
    id: "novedades",
    title: "Novedades",
    text: "Registro de actualizaciones, fuentes incorporadas, noticias respondidas y cambios del portal.",
    cta: "Ver cambios"
  },
  {
    id: "fuentes",
    title: "Fuentes y evidencia",
    text: "Biblioteca verificable: anteproyecto, BOE, comunicados, prensa, tablas y material local.",
    cta: "Ver fuentes"
  },
  {
    id: "argumentario",
    title: "Argumentario rápido",
    text: "Frases y respuestas reutilizables para redes, asambleas, prensa y conversaciones públicas.",
    cta: "Ver frases"
  }
];

export const demands = [
  {
    id: "estatuto-propio",
    title: "Estatuto Médico y Facultativo propio",
    short: "No para decidir por otros colectivos, sino para que nadie decida por nosotros.",
    body:
      "La profesión médica necesita un marco propio para negociar jornada, guardias, responsabilidad clínica, formación prolongada, conciliación, clasificación, jubilación y derechos laborales.",
    category: "Representación",
    sources: ["cesm-huelga", "metges-preacuerdo"]
  },
  {
    id: "mesa-propia",
    title: "Mesa médica propia",
    short: "Las condiciones específicas deben negociarse con representación médica real.",
    body:
      "Un marco general puede ordenar derechos comunes, pero no puede sustituir una negociación específica sobre guardias, riesgo médico-legal, penosidad y formación sanitaria especializada.",
    category: "Negociación",
    sources: ["cesm-huelga", "elpais-acuerdo"]
  },
  {
    id: "guardias",
    title: "Guardias voluntarias, extraordinarias y computables",
    short: "Toda hora por encima de la jornada ordinaria debe reconocerse como trabajo efectivo.",
    body:
      "Las guardias no pueden funcionar como salario encubierto ni como mecanismo permanente para sostener plantillas insuficientes.",
    category: "Jornada",
    sources: ["anteproyecto", "cesm-reivindicaciones"]
  },
  {
    id: "descanso",
    title: "Descanso real",
    short: "El descanso postguardia debe estar protegido y no depender de presiones organizativas.",
    body:
      "El descanso protege al profesional y al paciente. No debe recuperarse de forma encubierta mediante agendas, sesiones o presión informal.",
    category: "Salud laboral",
    sources: ["anteproyecto", "foro-medico"]
  },
  {
    id: "conciliacion",
    title: "Conciliación",
    short: "La vida familiar y personal no puede quedar subordinada a déficits estructurales.",
    body:
      "Conciliar exige planificación real de jornada, límites efectivos, plantillas suficientes y voluntariedad real de la actividad extraordinaria.",
    category: "Derechos",
    sources: ["anteproyecto", "moncloa-acuerdo"]
  },
  {
    id: "clasificacion",
    title: "Clasificación acorde a formación y responsabilidad",
    short: "La formación prolongada y la responsabilidad clínica deben tener reconocimiento real.",
    body:
      "La clasificación debe reflejar especialización, toma de decisiones clínicas, responsabilidad directa y riesgo médico-legal, con efectos laborales y retributivos.",
    category: "Reconocimiento",
    sources: ["anteproyecto", "cesm-reivindicaciones"]
  },
  {
    id: "jubilacion",
    title: "Jubilación por penosidad",
    short: "No basta con estudiar coeficientes reductores.",
    body:
      "Las guardias, noches, festivos, fatiga, presión asistencial y responsabilidad clínica tienen un impacto acumulado que debe reconocerse.",
    category: "Jubilación",
    sources: ["anteproyecto", "cesm-reivindicaciones"]
  },
  {
    id: "retribucion",
    title: "Retribución transparente",
    short: "Separar siempre sueldo ordinario, guardias, complementos, horas reales y salario por hora.",
    body:
      "Una nómina con noches, festivos y jornadas extendidas no puede presentarse como sueldo ordinario sin explicar las horas que hay detrás.",
    category: "Retribuciones",
    sources: ["simeg-mir", "mir-portal"]
  }
];

export const claims = [
  {
    id: "ambito-propio",
    title: "Ámbito propio de negociación",
    status: "mantiene",
    claim: "El Estatuto Marco sirve como marco común para todos los profesionales del SNS.",
    reality: "No crea una mesa médica propia ni un ámbito específico de decisión médica y facultativa.",
    why: "Sin ámbito propio, la especificidad médica queda diluida en una negociación general.",
    demand: "Ámbito propio de negociación médica y facultativa.",
    refs: ["Acuerdo del Ámbito de Negociación", "Rechazo de sindicatos médicos"],
    sources: ["cesm-huelga", "metges-preacuerdo", "elpais-acuerdo"]
  },
  {
    id: "guardias-17-24",
    title: "Guardias de 17/24 horas",
    status: "ambiguo",
    claim: "El texto limita y ordena las guardias.",
    reality: "Mantiene guardias de 17 horas y excepciones de hasta 24 horas con consentimiento.",
    why: "Regular una sobrecarga no equivale a eliminarla si sigue sosteniendo la cobertura ordinaria.",
    demand: "Voluntariedad real, plantilla suficiente, retribución justa y cómputo pleno.",
    refs: ["Art. 95", "Art. 96", "Art. 97"],
    sources: ["anteproyecto", "aragondigital-guardias"]
  },
  {
    id: "jornada-promedios",
    title: "Jornada máxima y promedios",
    status: "riesgo",
    claim: "La jornada máxima semanal queda regulada.",
    reality: "El promedio puede ocultar semanas de sobrecarga intensa, fatiga acumulada y actividad prolongada.",
    why: "La seguridad clínica depende de turnos concretos, no solo de promedios administrativos.",
    demand: "Límites por turno y semana real, además de cómputos medios.",
    refs: ["Art. 84", "Art. 97", "Art. 98"],
    sources: ["anteproyecto", "heraldo-claves"]
  },
  {
    id: "descanso-postguardia",
    title: "Descanso postguardia",
    status: "mejora-insuficiente",
    claim: "Los descansos quedan protegidos.",
    reality: "El descanso formal puede perder efectividad si depende de organización, sustituciones o presión informal.",
    why: "El descanso postguardia es seguridad clínica, no una concesión individual.",
    demand: "Descanso efectivo, computable y sin recuperación encubierta.",
    refs: ["Arts. 89-91", "Art. 99"],
    sources: ["anteproyecto", "foro-medico"]
  },
  {
    id: "mir-formacion",
    title: "MIR y formación sanitaria especializada",
    status: "mejora-insuficiente",
    claim: "El anteproyecto introduce límites y mejoras para residentes.",
    reality: "No resuelve la dependencia salarial de guardias, la desigualdad autonómica ni el tiempo formativo añadido.",
    why: "El residente es trabajador y profesional en formación, no mano de obra estructural barata.",
    demand: "Salario ordinario suficiente, supervisión real y tiempo formativo protegido.",
    refs: ["DA 22", "Máximo 80 h/mes"],
    sources: ["anteproyecto", "simeg-mir", "mir-portal"]
  },
  {
    id: "jubilacion-penosidad",
    title: "Jubilación y penosidad",
    status: "depende",
    claim: "El texto abre la vía de coeficientes reductores.",
    reality: "Abrir una vía futura no equivale a reconocer ya la penosidad acumulada.",
    why: "Guardias, noches, festivos y presión asistencial se acumulan durante décadas.",
    demand: "Coeficientes reductores y jubilación flexible con reconocimiento efectivo.",
    refs: ["DA 16", "DA 17"],
    sources: ["anteproyecto", "cesm-reivindicaciones"]
  },
  {
    id: "incompatibilidades",
    title: "Incompatibilidades y exclusividad",
    status: "ambiguo",
    claim: "La dedicación exclusiva ordena el sistema.",
    reality: "Sin compensación adecuada puede convertirse en una restricción añadida.",
    why: "Toda exclusividad debe estar justificada, ser homogénea y retribuirse de forma proporcionada.",
    demand: "Régimen claro, no discriminatorio y compensado.",
    refs: ["Arts. 34-35", "DT 7"],
    sources: ["anteproyecto", "cesm-cv-lineas"]
  },
  {
    id: "conciliacion",
    title: "Conciliación",
    status: "mejora-insuficiente",
    claim: "El texto reconoce avances en conciliación.",
    reality: "No hay conciliación real si guardias, noches, festivos y déficit de plantilla siguen como obligación estructural.",
    why: "La vida familiar y personal no puede quedar subordinada a una organización que normaliza la excepción.",
    demand: "Planificación de jornada, descansos protegidos, voluntariedad efectiva y plantillas suficientes.",
    refs: ["Art. 81", "Art. 95.3", "Art. 54"],
    sources: ["anteproyecto", "moncloa-acuerdo"]
  }
];

export const news = [
  {
    id: "diario-altoaragon-defienden",
    outlet: "Diario del Alto Aragón",
    date: "2026-05-06",
    title: "UGT, CSIF, CCOO y Satse defienden el nuevo Estatuto Marco",
    claim: "El texto aborda casi el 90% de las reivindicaciones y contiene más de 117 mejoras.",
    response:
      "Un acuerdo general no equivale a consenso médico. La cuestión central es si el texto reconoce ámbito propio y garantías efectivas para condiciones específicamente médicas.",
    key: "No bloqueamos mejoras para nadie; exigimos que no se bloquee la negociación médica.",
    sources: ["diario-altoaragon", "cesm-huelga"]
  },
  {
    id: "aragondigital-guardias",
    outlet: "Aragón Digital",
    date: "2026-05-06",
    title: "Nadie está obligado a realizar guardias de 24 horas",
    claim: "Las guardias de 24 horas serían voluntarias y las de 17 horas tendrían descanso.",
    response:
      "El problema no termina en la guardia de 24 horas. Una guardia de 17 horas también es sobrecarga si sigue siendo pieza estructural del sistema.",
    key: "Regular la excepción no basta si la excepción sigue sosteniendo la plantilla que falta.",
    sources: ["aragondigital-guardias", "anteproyecto"]
  },
  {
    id: "heraldo-claves",
    outlet: "Heraldo de Aragón",
    date: "2026-01-26",
    title: "Las claves del Estatuto Marco firmado por Sanidad y sindicatos",
    claim: "El acuerdo incluye mejoras en guardias, conciliación, jornada, clasificación y jubilación.",
    response:
      "Que existan mejoras generales no resuelve si quedan garantizadas para quienes asumen guardias, responsabilidad clínica directa y riesgo médico-legal.",
    key: "La reivindicación médica no es bloquear; es negociar con voz propia.",
    sources: ["heraldo-claves", "elpais-acuerdo", "cesm-huelga"]
  },
  {
    id: "acuerdo-sin-sindicatos-medicos",
    outlet: "El País",
    date: "2026-01-26",
    title: "Sanidad firma un acuerdo sin el apoyo de los sindicatos médicos",
    claim: "El Ministerio alcanza un acuerdo con sindicatos del Ámbito de Negociación para renovar el Estatuto Marco.",
    response:
      "El dato relevante es precisamente la ausencia de apoyo médico. Si los sindicatos médicos y facultativos mantienen oposición, no puede venderse como consenso profesional completo.",
    key: "Acuerdo sindical general no significa acuerdo médico.",
    sources: ["elpais-acuerdo", "cesm-huelga", "metges-preacuerdo"]
  },
  {
    id: "csif-tabla-mir",
    outlet: "CSIF / material difundido",
    date: "2026-04-01",
    title: "Tablas de sueldos MIR con guardias",
    claim: "Las cifras netas mensuales con guardias muestran retribuciones MIR elevadas.",
    response:
      "Una tabla con guardias no es una tabla de sueldo ordinario. Para llegar a esas cifras se suman noches, festivos y jornadas extendidas.",
    key: "La comparación honesta separa sueldo base, guardias, horas reales y salario por hora.",
    sources: ["simeg-mir", "mir-portal"]
  }
];

export const updates = [
  {
    date: "2026-05-07",
    type: "Arquitectura",
    title: "Nace el portal independiente Estatuto Médico Propio",
    body:
      "Se separa la reivindicación general del proyecto MIR original. El bloque MIR queda enlazado como caso demostrativo especializado."
  },
  {
    date: "2026-05-07",
    type: "Contenido",
    title: "Matriz inicial del anteproyecto",
    body:
      "Se incorporan los primeros ejes: ámbito propio, guardias, jornada, descanso, MIR, jubilación, incompatibilidades y conciliación."
  },
  {
    date: "2026-05-07",
    type: "Noticias",
    title: "Primeras respuestas a titulares y comunicados",
    body:
      "Se añaden fichas para responder a la defensa sindical del texto y a los mensajes sobre guardias de 24 horas."
  },
  {
    date: "2026-05-07",
    type: "Evidencia",
    title: "Registro inicial de fuentes",
    body:
      "Se agrupan fuentes oficiales, posición médica, sindicatos firmantes, prensa y bloque MIR."
  },
  {
    date: "2026-05-07",
    type: "MIR",
    title: "El bloque MIR queda enlazado, no duplicado",
    body:
      "La web general mantiene una página resumen y deriva el análisis completo al portal MIR original para conservar foco editorial."
  },
  {
    date: "2026-05-07",
    type: "SEO",
    title: "Páginas reales para compartir e indexar",
    body:
      "Se crean rutas HTML independientes para anteproyecto, reivindicaciones, noticias, novedades, fuentes, argumentario y MIR."
  }
];

export const quickArguments = [
  "No pedimos decidir por nadie. Pedimos que nadie decida por nosotros.",
  "Un acuerdo general no equivale a consenso médico.",
  "Una guardia regulada sigue siendo sobrecarga si continúa sosteniendo la plantilla que falta.",
  "Una nómina con guardias, noches y festivos no es sueldo ordinario.",
  "La conciliación no existe si la excepción organizativa se vuelve permanente.",
  "El descanso postguardia no es un privilegio: es seguridad clínica.",
  "Un Estatuto Médico propio no es corporativismo: es negociación específica para responsabilidades específicas.",
  "Hablar de salario sin hablar de horas es ocultar medio debate."
];

export const sourceRegistry = {
  anteproyecto: {
    title: "Propuesta de Anteproyecto de Ley del Estatuto Marco",
    institution: "Ministerio de Sanidad",
    type: "Oficial",
    year: "2026",
    url: "https://www.sanidad.gob.es/areas/profesionesSanitarias/docs/APL_personal_estatutario_08_01_2026.pdf"
  },
  "ley-55": {
    title: "Ley 55/2003, Estatuto Marco vigente",
    institution: "BOE",
    type: "Normativa",
    year: "2003",
    url: "https://www.boe.es/buscar/act.php?id=BOE-A-2003-23101"
  },
  "ministerio-faq": {
    title: "Preguntas frecuentes sobre el Estatuto Marco",
    institution: "Ministerio de Sanidad",
    type: "Oficial",
    year: "2026",
    url: "https://www.sanidad.gob.es/areas/profesionesSanitarias/PregFrecEstatutoMarco.htm"
  },
  "moncloa-acuerdo": {
    title: "Sanidad y sindicatos alcanzan un acuerdo para un nuevo Estatuto Marco",
    institution: "La Moncloa",
    type: "Oficial",
    year: "2026",
    url: "https://www.lamoncloa.gob.es/serviciosdeprensa/notasprensa/sanidad14/Paginas/2026/260126-garcia-acuerdo-estatuto-marco.aspx"
  },
  "satse-acuerdo": {
    title: "Acuerdo de inicio de tramitación del Estatuto Marco",
    institution: "SATSE",
    type: "Sindical",
    year: "2026",
    url: "https://www.satse.es/notas-prensa/-/v/85301/acuerdo-inicio-tramitacion-estatuto-marco"
  },
  "cesm-huelga": {
    title: "Convocatoria de huelga por un Estatuto Médico y Facultativo",
    institution: "CESM",
    type: "Sindical médico",
    year: "2026",
    url: "https://www.cesm.org/2026/01/22/el-comite-de-huelga-convoca-un-paro-indefinido-a-partir-del-proximo-16-de-febrero-para-conseguir-un-estatuto-medico-y-facultativo/"
  },
  "cesm-reivindicaciones": {
    title: "Reivindicaciones del Comité de Huelga ante el Ministerio",
    institution: "CESM",
    type: "Sindical médico",
    year: "2025",
    url: "https://www.cesm.org/2025/06/09/estas-son-las-reivindicaciones-del-comite-de-huelga-ante-el-ministerio-de-sanidad/"
  },
  "cesm-cv-lineas": {
    title: "Líneas rojas del borrador de Estatuto Marco",
    institution: "CESM-CV",
    type: "Sindical médico",
    year: "2026",
    url: "https://www.cesm-cv.org/reclasificacion-profesional-jornada-laboral-y-regimen-de-incompatibilidades-lineas-rojas-del-borrador-de-estatuto-marco/"
  },
  "metges-preacuerdo": {
    title: "El preacuerdo no suspende la huelga de facultativos",
    institution: "Metges de Catalunya",
    type: "Sindical médico",
    year: "2026",
    url: "https://metgesdecatalunya.cat/es/actualidad/noticias/el-preacuerdo-entre-sanidad-y-los-sindicatos-del-ambito-de-negociacion-para-renovar-el-estatuto-marco-no-suspende-la-huelga-de-facultativos"
  },
  "foro-medico": {
    title: "El Foro de la Profesión Médica defiende sus reivindicaciones",
    institution: "Médicos y Pacientes",
    type: "Profesional",
    year: "2025",
    url: "https://www.medicosypacientes.com/articulo/el-foro-de-la-profesion-medica-defiende-las-reivindicaciones-que-han-llevado-a-la-huelga-del-13-de-junio/"
  },
  "elpais-acuerdo": {
    title: "Sanidad firma acuerdo sin apoyo de sindicatos médicos",
    institution: "El País",
    type: "Prensa",
    year: "2026",
    url: "https://elpais.com/sociedad/2026-01-26/sanidad-firma-un-acuerdo-para-el-nuevo-estatuto-marco-sin-el-apoyo-de-los-sindicatos-medicos.html"
  },
  "heraldo-claves": {
    title: "Claves del Estatuto Marco firmado por Sanidad y sindicatos",
    institution: "Heraldo de Aragón",
    type: "Prensa",
    year: "2026",
    url: "https://www.heraldo.es/noticias/nacional/2026/01/26/las-claves-del-estatuto-marco-firmado-por-sanidad-y-los-sindicatos-de-la-negociacion-1888780.html"
  },
  "diario-altoaragon": {
    title: "UGT, CSIF, CCOO y Satse defienden el nuevo Estatuto Marco",
    institution: "Diario del Alto Aragón",
    type: "Prensa",
    year: "2026",
    url: "https://www.diariodelaltoaragon.es/noticias/huesca/2026/05/06/ugt-csif-ccoo-satse-defienden-nuevo-estatuto-marco-2018142.html"
  },
  "aragondigital-guardias": {
    title: "Los sindicatos salen en defensa del Estatuto Marco de Sanidad",
    institution: "Aragón Digital",
    type: "Prensa",
    year: "2026",
    url: "https://www.aragondigital.es/articulo/sanidad/sindicatos-salen-defensa-estatuto-marco-sanidad-nadie-obligado-realizar-guardias-24-horas/20260506142208982080.html"
  },
  "simeg-mir": {
    title: "Retribuciones MIR 2026",
    institution: "SIMEG",
    type: "Informe técnico",
    year: "2026",
    url: "https://simeg.org/wp/wp-content/uploads/2026/04/Retribuciones-MIR-2026.pdf"
  },
  "mir-portal": {
    title: "MIR: no es sueldo, son guardias",
    institution: "Portal MIR original",
    type: "Proyecto enlazado",
    year: "2026",
    url: mirPortalUrl
  }
};

export const sourceGroups = [
  { title: "Normativa y documentos oficiales", ids: ["anteproyecto", "ley-55", "ministerio-faq", "moncloa-acuerdo"] },
  { title: "Posición médica y facultativa", ids: ["cesm-huelga", "cesm-reivindicaciones", "cesm-cv-lineas", "metges-preacuerdo", "foro-medico"] },
  { title: "Sindicatos firmantes y prensa", ids: ["satse-acuerdo", "elpais-acuerdo", "heraldo-claves", "diario-altoaragon", "aragondigital-guardias"] },
  { title: "Bloque MIR enlazado", ids: ["simeg-mir", "mir-portal"] }
];

export const downloads = [
  { label: "Argumentario rápido", href: "downloads/argumentario_estatuto_medico.md" },
  { label: "Resumen de reivindicaciones", href: "downloads/reivindicaciones_estatuto_medico.md" },
  { label: "Respuesta a titulares", href: "downloads/respuesta_titulares_estatuto_marco.md" }
];
