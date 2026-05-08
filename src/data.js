export const baseUrl = "https://guallar7.github.io/estatuto-medico-propio/";
export const mirPortalUrl = "https://guallar7.github.io/mir-estatuto-realidad/";
export const mirInfografiaUrl = "https://guallar7.github.io/mir-estatuto-realidad/infografia.html";
export const strikeSongUrl = "https://www.youtube.com/shorts/AfkLTBqXR50";

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
  },
  {
    id: "mir",
    title: "Caso MIR",
    text: "Calculadora, infografía y análisis completo de sueldo ordinario, guardias y horas reales.",
    cta: "Ver caso MIR"
  }
];

export const strikeSchedule = [
  {
    id: "febrero-2026",
    month: "Feb",
    label: "16-20 febrero",
    start: "2026-02-16",
    end: "2026-02-20",
    days: 5,
    kind: "Primer tramo",
    note: "Inicio de la huelga nacional por un estatuto médico y facultativo propio.",
    sources: ["cesm-manifestacion-febrero", "cesm-movilizaciones"]
  },
  {
    id: "marzo-2026",
    month: "Mar",
    label: "16-20 marzo",
    start: "2026-03-16",
    end: "2026-03-20",
    days: 5,
    kind: "Segundo tramo",
    note: "CESM mantuvo el calendario tras el acuerdo Sanidad-Foro Médico.",
    sources: ["cesm-movilizaciones"]
  },
  {
    id: "abril-2026",
    month: "Abr",
    label: "27-30 abril",
    start: "2026-04-27",
    end: "2026-04-30",
    days: 4,
    kind: "Tercer tramo",
    note: "Semana de huelga nacional previa a las convocatorias de mayo y junio.",
    sources: ["cesm-abril-negociacion", "cesm-movilizaciones"]
  },
  {
    id: "mayo-2026",
    month: "May",
    label: "18-22 mayo",
    start: "2026-05-18",
    end: "2026-05-22",
    days: 5,
    kind: "Próxima convocatoria",
    note: "Primer tramo pendiente a fecha 8 de mayo de 2026.",
    sources: ["cesm-movilizaciones", "cesm-clm-calendario"]
  },
  {
    id: "junio-2026",
    month: "Jun",
    label: "15-19 junio",
    start: "2026-06-15",
    end: "2026-06-19",
    days: 5,
    kind: "Convocatoria prevista",
    note: "Último tramo nacional anunciado hasta junio de 2026.",
    sources: ["cesm-movilizaciones", "cesm-clm-calendario"]
  }
];

export const demands = [
  {
    id: "estatuto-propio",
    title: "Estatuto Médico y Facultativo propio",
    short: "No para decidir por otros colectivos, sino para que nadie decida por nosotros.",
    body:
      "Exigimos un marco propio o, como mínimo transitorio, un cauce médico vinculante para negociar las condiciones singulares de la profesión.",
    category: "Representación",
    sources: ["ley-55", "anteproyecto", "cesm-estatuto-propio", "cgcom-regulacion-especifica"]
  },
  {
    id: "mesa-propia",
    title: "Mesa médica propia",
    short: "Las condiciones específicas deben negociarse con representación médica real.",
    body:
      "Foros consultivos y mesas técnicas pueden ayudar, pero no sustituyen una mesa médica con capacidad negociadora real.",
    category: "Negociación",
    sources: ["anteproyecto", "sanidad-foro-marzo", "cesm-respuesta-foro", "elpais-acuerdo"]
  },
  {
    id: "guardias",
    title: "Guardias voluntarias, extraordinarias y computables",
    short: "Toda hora por encima de la jornada ordinaria debe reconocerse como trabajo efectivo.",
    body:
      "Las guardias deben ser actividad extraordinaria, voluntaria, retribuida de forma justa y computable para descanso, carrera, cotización y jubilación.",
    category: "Jornada",
    sources: ["ley-55", "anteproyecto", "directiva-tiempo", "cesm-reivindicaciones"]
  },
  {
    id: "descanso",
    title: "Descanso real",
    short: "El descanso postguardia debe estar protegido y no depender de presiones organizativas.",
    body:
      "El descanso postguardia debe ser efectivo y no recuperable de forma encubierta mediante agendas, sesiones o presión informal.",
    category: "Salud laboral",
    sources: ["anteproyecto", "directiva-tiempo", "foro-medico"]
  },
  {
    id: "conciliacion",
    title: "Conciliación",
    short: "La vida familiar y personal no puede quedar subordinada a déficits estructurales.",
    body:
      "La conciliación exige planificación, límites efectivos y que los déficits de plantilla no se trasladen a disponibilidad individual permanente.",
    category: "Derechos",
    sources: ["anteproyecto", "ministerio-faq", "moncloa-acuerdo", "sanidad-planificacion-medicos"]
  },
  {
    id: "clasificacion",
    title: "Clasificación acorde a formación y responsabilidad",
    short: "La formación prolongada y la responsabilidad clínica deben tener reconocimiento real.",
    body:
      "La diferenciación formal por formación y especialización debe traducirse en salario, carrera, penosidad, jornada y representación.",
    category: "Reconocimiento",
    sources: ["anteproyecto", "sanidad-foro-marzo", "cesm-estatuto-propio"]
  },
  {
    id: "jubilacion",
    title: "Jubilación por penosidad",
    short: "No basta con estudiar coeficientes reductores.",
    body:
      "La penosidad acumulada de guardias, noches, festivos y presión asistencial requiere calendario, indicadores y reconocimiento efectivo.",
    category: "Jubilación",
    sources: ["anteproyecto", "rd-402", "cesm-reivindicaciones"]
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
    current: "La Ley 55/2003 ya articula la negociación estatal a través del Ámbito de Negociación y de las mesas sectoriales, no mediante una mesa médica propia.",
    change: "El anteproyecto mantiene el Foro Marco y el Ámbito de Negociación como cauces principales. El acuerdo de marzo de 2026 promete reforzar participación profesional y mesas técnicas, pero dentro del marco vigente.",
    formal: "Reconoce la necesidad de canales específicos de participación profesional, especialmente a través del Foro Profesional previsto en la LOPS.",
    reality: "No crea una mesa médica propia con capacidad negociadora autónoma ni un estatuto facultativo separado.",
    why: "Sin ámbito propio, guardias, penosidad, clasificación, compatibilidad y responsabilidad clínica quedan negociadas en un marco generalista.",
    amendment: "Crear una mesa médica y facultativa estatal con participación de las organizaciones profesionales representativas y traslado obligatorio a las mesas autonómicas.",
    refs: ["Ley 55/2003", "Arts. 22-23 APL", "Nota Sanidad 05/03/2026"],
    sources: ["ley-55", "anteproyecto", "sanidad-foro-marzo", "cesm-respuesta-foro"]
  },
  {
    id: "guardias-17-24",
    title: "Guardias de 17/24 horas",
    status: "ambiguo",
    claim: "El texto limita y ordena las guardias.",
    current: "La Ley 55/2003 permite jornada complementaria y máximos conjuntos de 48 horas semanales de promedio semestral, con jornadas de hasta 24 horas en determinados supuestos.",
    change: "El anteproyecto fija 45 horas semanales de promedio, guardia de 17 horas como regla general y hasta 24 horas en supuestos excepcionales con consentimiento e informe preventivo.",
    formal: "Es una mejora frente al marco de 2003 porque reduce el máximo medio y condiciona la guardia de 24 horas.",
    reality: "La guardia sigue dentro de la arquitectura ordinaria de cobertura. Además, la disposición transitoria octava da hasta cinco años a los servicios de salud para adaptarse.",
    why: "Regular una sobrecarga no equivale a eliminarla si sigue sosteniendo la cobertura ordinaria o si la voluntariedad depende de plantillas insuficientes.",
    amendment: "Definir toda guardia por encima de la jornada ordinaria como exceso voluntario, computable a todos los efectos y no retribuible por debajo de la hora ordinaria.",
    refs: ["Arts. 95-97 APL", "DT 8 APL", "Art. 48 Ley 55/2003"],
    sources: ["ley-55", "anteproyecto", "aragondigital-guardias", "directiva-tiempo"]
  },
  {
    id: "jornada-promedios",
    title: "Jornada máxima y promedios",
    status: "riesgo",
    claim: "La jornada máxima semanal queda regulada.",
    current: "El régimen vigente trabaja con promedios amplios: 48 horas semanales de trabajo efectivo de promedio semestral para jornada ordinaria y complementaria.",
    change: "El anteproyecto baja a 45 horas de promedio y acorta el periodo de referencia, pero conserva el uso de medias y admite excesos regulados.",
    formal: "La reducción de 48 a 45 horas es real y debe reconocerse.",
    reality: "El promedio puede ocultar semanas de sobrecarga intensa, fatiga acumulada y actividad prolongada si no se fijan límites por turno, semana real y número de guardias.",
    why: "La seguridad clínica depende de turnos concretos, no solo de promedios administrativos que se compensan meses después.",
    amendment: "Añadir límites máximos por semana natural, por número mensual de guardias y por encadenamiento de jornada ordinaria y guardia.",
    refs: ["Art. 84 APL", "Arts. 97-98 APL", "Directiva 2003/88/CE"],
    sources: ["anteproyecto", "heraldo-claves", "directiva-tiempo"]
  },
  {
    id: "descanso-postguardia",
    title: "Descanso postguardia",
    status: "mejora-insuficiente",
    claim: "Los descansos quedan protegidos.",
    current: "La Ley 55/2003 reconoce descansos mínimos y compensatorios, pero el sistema real ha normalizado excepciones organizativas.",
    change: "El anteproyecto regula la imposibilidad de exigir jornada ordinaria inmediatamente posterior a la guardia y, en ciertos casos, también la anterior.",
    formal: "La libranza posterior y la ausencia de deuda horaria son avances relevantes si se aplican de forma estricta.",
    reality: "El descanso formal puede perder efectividad si depende de organización, sustituciones o presión informal para recuperar agendas, sesiones o actividad diferida.",
    why: "El descanso postguardia es seguridad clínica, no una concesión individual. Una norma sin sustituciones suficientes desplaza el coste a pacientes y compañeros.",
    amendment: "Prohibir expresamente cualquier recuperación directa o indirecta del descanso postguardia y obligar a registrar incidencias de incumplimiento.",
    refs: ["Arts. 89-91 APL", "Art. 99 APL", "Directiva 2003/88/CE"],
    sources: ["anteproyecto", "foro-medico", "directiva-tiempo"]
  },
  {
    id: "clasificacion-mecu",
    title: "Clasificación MECU/MECES",
    status: "mejora-insuficiente",
    claim: "La nueva clasificación reconoce mejor la cualificación sanitaria.",
    current: "La Ley 55/2003 arrastra una clasificación ligada a grupos estatutarios tradicionales y no traduce de forma suficiente la formación médica especializada.",
    change: "El anteproyecto incorpora niveles MECU/MECES y sitúa categorías con nivel 8 o nivel 7 con especialidad en un grupo superior.",
    formal: "La diferenciación formal existe y conviene no negarla: el texto de enero de 2026 ya no puede describirse como una equiparación simple con cualquier graduado.",
    reality: "La mejora queda diferida si no se traduce automáticamente en salario, carrera, penosidad, jornada, responsabilidad y representación.",
    why: "Una clasificación sin efectos materiales permite al Ministerio defender reconocimiento formal mientras las condiciones reales siguen igual.",
    amendment: "Vincular la nueva clasificación a efectos mínimos estatales: carrera, complemento de responsabilidad clínica, penosidad y equivalencia retributiva homogénea.",
    refs: ["Arts. 6-7 APL", "DA 7 APL", "DT 6 APL"],
    sources: ["anteproyecto", "sanidad-foro-marzo", "cesm-estatuto-propio"]
  },
  {
    id: "mir-formacion",
    title: "MIR y formación sanitaria especializada",
    status: "mejora-insuficiente",
    claim: "El anteproyecto introduce límites y mejoras para residentes.",
    current: "Los residentes se rigen por el Real Decreto 1146/2006 y una relación laboral especial con fuerte dependencia de guardias y diferencias autonómicas.",
    change: "El anteproyecto aplica límites de guardia al personal en formación, fija un máximo general de 80 horas mensuales y mandata actualizar la regulación de residencia.",
    formal: "Es un avance real respecto del régimen heredado.",
    reality: "No resuelve por sí mismo la dependencia salarial de guardias, la desigualdad autonómica ni la tensión entre trabajo asistencial y tiempo formativo protegido.",
    why: "El residente es trabajador y profesional en formación, no mano de obra estructural barata para cubrir déficits.",
    amendment: "Actualizar el RD 1146/2006 con salario ordinario mínimo homogéneo, guardias no estructurales, supervisión verificable y registro de horas reales.",
    refs: ["DA 22 APL", "RD 1146/2006", "Máximo 80 h/mes"],
    sources: ["anteproyecto", "rd-1146", "simeg-mir", "mir-portal"]
  },
  {
    id: "jubilacion-penosidad",
    title: "Jubilación y penosidad",
    status: "depende",
    claim: "El texto abre la vía de coeficientes reductores.",
    current: "No existe reconocimiento general inmediato de jubilación anticipada médica por penosidad en el Estatuto Marco vigente.",
    change: "El anteproyecto remite a informes técnicos y al procedimiento del Real Decreto 402/2025 para posibles coeficientes reductores.",
    formal: "Abrir el expediente de estudio es un avance frente al silencio normativo.",
    reality: "Abrir una vía futura no equivale a reconocer ya la penosidad acumulada ni garantiza resultado favorable, plazo cerrado o compensación suficiente.",
    why: "Guardias, noches, festivos y presión asistencial se acumulan durante décadas; si el procedimiento se eterniza, el derecho no llega.",
    amendment: "Fijar calendario, indicadores, obligación de solicitud y financiación de la cotización adicional si se acredita penosidad.",
    refs: ["DA 16 APL", "DA 17 APL", "RD 402/2025"],
    sources: ["anteproyecto", "rd-402", "cesm-reivindicaciones"]
  },
  {
    id: "incompatibilidades",
    title: "Incompatibilidades y exclusividad",
    status: "ambiguo",
    claim: "La dedicación exclusiva ordena el sistema.",
    current: "La Ley 53/1984 fija el régimen general de incompatibilidades y la Ley 55/2003 permite modular la renuncia al complemento específico para licenciados sanitarios.",
    change: "El anteproyecto mantiene el régimen general, pero endurece determinados puestos directivos o intermedios con dedicación exclusiva o restricciones adicionales.",
    formal: "Ordenar conflictos de interés puede ser legítimo si protege el servicio público y se aplica con criterios objetivos.",
    reality: "Sin compensación adecuada, homogeneidad nacional y reglas transparentes puede convertirse en una restricción añadida que empeora captación y retención.",
    why: "Toda exclusividad debe estar justificada, ser homogénea y retribuirse de forma proporcionada. Si no, funciona como penalización laboral.",
    amendment: "Crear un régimen estatal de compatibilidad médica con incompatibilidades tasadas, compensación obligatoria y revisión autonómica transparente.",
    refs: ["Ley 53/1984", "Arts. 34-35 APL", "DT 7 APL"],
    sources: ["ley-53", "anteproyecto", "cesm-cv-lineas"]
  },
  {
    id: "conciliacion",
    title: "Conciliación",
    status: "mejora-insuficiente",
    claim: "El texto reconoce avances en conciliación.",
    current: "El marco vigente contiene derechos generales, pero la organización sanitaria ha usado guardias y disponibilidad como solución estructural.",
    change: "El anteproyecto incorpora medidas de conciliación, información de jornada y planes de igualdad, pero deja la organización concreta en manos de servicios de salud.",
    formal: "Reconocer la conciliación como derecho y ordenar la planificación de jornada es positivo.",
    reality: "No hay conciliación real si guardias, noches, festivos y déficit de plantilla siguen como obligación estructural o si las excepciones se normalizan.",
    why: "La vida familiar y personal no puede quedar subordinada a una organización que convierte la excepción en regla.",
    amendment: "Obligar a publicar calendarios, registrar cambios forzosos, justificar excepciones y activar cobertura cuando se vulneren descansos o conciliación.",
    refs: ["Art. 81 APL", "Art. 95.3 APL", "Art. 54 APL"],
    sources: ["anteproyecto", "moncloa-acuerdo", "sanidad-planificacion-medicos"]
  },
  {
    id: "europa-tiempo-trabajo",
    title: "Europa y tiempo de trabajo",
    status: "mantiene",
    claim: "La regulación española debe respetar el marco europeo.",
    current: "La Directiva 2003/88/CE fija mínimos de salud laboral: descanso diario, descanso semanal, pausas y máximo semanal medio.",
    change: "El anteproyecto intenta situarse por debajo de 48 horas medias, pero no agota la capacidad del legislador español de aprobar un régimen más protector.",
    formal: "Europa proporciona un suelo de protección común.",
    reality: "El Derecho europeo no obliga a mantener guardias estructurales de 17 o 24 horas. Permite normas nacionales más protectoras y exige computar correctamente el tiempo de trabajo.",
    why: "El obstáculo principal no es europeo, sino político, organizativo y presupuestario.",
    amendment: "Incorporar en el estatuto médico límites más protectores que la Directiva, con cómputo pleno de presencia y descanso efectivo.",
    refs: ["Directiva 2003/88/CE", "TJUE guardias", "Art. 31 Carta UE"],
    sources: ["directiva-tiempo", "boe-guardias-tjue", "ley-55"]
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
    id: "acuerdo-foro-profesion-marzo",
    outlet: "Ministerio de Sanidad",
    date: "2026-03-05",
    title: "Sanidad y el Foro de la Profesión Médica anuncian un acuerdo para mantener el diálogo",
    claim: "El acuerdo reforzará participación profesional, clasificación, penosidad y estudio de jubilación anticipada.",
    response:
      "Es un hecho relevante y debe incorporarse, pero no sustituye la reivindicación central: mesas técnicas y Foro Profesional no equivalen a una mesa médica negociadora ni a un estatuto propio.",
    key: "Participación consultiva o técnica no es negociación médica autónoma.",
    sources: ["sanidad-foro-marzo", "cesm-respuesta-foro", "ley-44"]
  },
  {
    id: "plan-anual-normativo-2026",
    outlet: "La Moncloa",
    date: "2026-05-05",
    title: "El Plan Anual Normativo 2026 mantiene la Ley del Estatuto Marco como iniciativa prevista",
    claim: "La reforma forma parte de las iniciativas normativas previstas por el Gobierno para 2026.",
    response:
      "Esto confirma que, a 8 de mayo de 2026, la Ley 55/2003 sigue vigente y el texto de enero continúa pendiente de tramitación normativa completa.",
    key: "No es ley vigente: es una reforma en tramitación o prevista.",
    sources: ["plan-normativo-2026", "ley-55", "anteproyecto"]
  },
  {
    id: "tercera-semana-huelga",
    outlet: "El País",
    date: "2026-04-27",
    title: "Comienza la tercera semana de huelga médica sin acercamientos con Sanidad",
    claim: "La huelga sigue pese a pactos previos y el debate se concentra en la mesa propia.",
    response:
      "La continuidad del conflicto prueba que el acuerdo general no ha resuelto la cuestión de representación ni las garantías materiales que reclaman médicos y facultativos.",
    key: "El conflicto no es solo de redacción: es de legitimidad negociadora y ejecución real.",
    sources: ["elpais-huelga-abril", "cesm-huelga", "sanidad-foro-marzo"]
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
    date: "2026-05-08",
    type: "Verificación",
    title: "Auditoría de realidad y fuentes reforzadas",
    body:
      "Se incorpora el contraste con la revisión externa: Ley 55/2003 vigente, anteproyecto de enero de 2026 como propuesta, acuerdo de marzo con el Foro, marco europeo, RD 402/2025 y matriz técnica con mejoras formales e insuficiencias materiales."
  },
  {
    date: "2026-05-08",
    type: "Contenido",
    title: "Diagnóstico Realidad 2026 integrado en Anteproyecto",
    body:
      "Se integra una lectura verificable del estado jurídico, los puntos de conflicto y las propuestas editoriales dentro de la ruta Anteproyecto para evitar páginas redundantes."
  },
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
  "La reforma mejora formalmente algunas cosas, pero no garantiza su aplicación real.",
  "Mesas técnicas y foros consultivos no sustituyen una mesa médica negociadora.",
  "Una guardia regulada sigue siendo sobrecarga si continúa sosteniendo la plantilla que falta.",
  "El descanso postguardia no es un privilegio: es seguridad clínica.",
  "Una nómina con guardias, noches y festivos no es sueldo ordinario.",
  "Europa fija mínimos de protección; España puede aprobar reglas más protectoras."
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
  "ley-44": {
    title: "Ley 44/2003, ordenación de las profesiones sanitarias",
    institution: "BOE",
    type: "Normativa",
    year: "2003",
    url: "https://www.boe.es/buscar/act.php?id=BOE-A-2003-21340"
  },
  "ley-53": {
    title: "Ley 53/1984, incompatibilidades del personal al servicio de las Administraciones Públicas",
    institution: "BOE",
    type: "Normativa",
    year: "1984",
    url: "https://www.boe.es/buscar/act.php?id=BOE-A-1985-151"
  },
  "rd-1146": {
    title: "Real Decreto 1146/2006, relación laboral especial de residencia",
    institution: "BOE",
    type: "Normativa",
    year: "2006",
    url: "https://www.boe.es/buscar/act.php?id=BOE-A-2006-17498"
  },
  "rd-402": {
    title: "Real Decreto 402/2025, coeficientes reductores de jubilación",
    institution: "BOE",
    type: "Normativa",
    year: "2025",
    url: "https://www.boe.es/buscar/act.php?id=BOE-A-2025-10488"
  },
  "directiva-tiempo": {
    title: "Directiva 2003/88/CE sobre ordenación del tiempo de trabajo",
    institution: "EUR-Lex",
    type: "Normativa UE",
    year: "2003",
    url: "https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32003L0088"
  },
  "boe-guardias-tjue": {
    title: "Guardias, tiempo de trabajo y doctrina TJUE sobre Directiva 2003/88/CE",
    institution: "BOE Biblioteca Jurídica",
    type: "Doctrina jurídica",
    year: "2022",
    url: "https://www.boe.es/biblioteca_juridica/anuarios_derecho/articulo.php?id=ANU-L-2022-00000001863"
  },
  "ministerio-faq": {
    title: "Preguntas frecuentes sobre el Estatuto Marco",
    institution: "Ministerio de Sanidad",
    type: "Oficial",
    year: "2026",
    url: "https://www.sanidad.gob.es/areas/profesionesSanitarias/docs/Estatuto_Marco_Preguntas_Frecuentes.pdf"
  },
  "moncloa-acuerdo": {
    title: "Sanidad y sindicatos alcanzan un acuerdo para un nuevo Estatuto Marco",
    institution: "La Moncloa",
    type: "Oficial",
    year: "2026",
    url: "https://www.lamoncloa.gob.es/serviciosdeprensa/notasprensa/sanidad14/Paginas/2026/260126-garcia-acuerdo-estatuto-marco.aspx"
  },
  "plan-normativo-2026": {
    title: "Plan Anual Normativo 2026",
    institution: "La Moncloa",
    type: "Oficial",
    year: "2026",
    url: "https://www.lamoncloa.gob.es/consejodeministros/resumenes/Documents/2026/050526-plan-anual-normativo-2026.pdf"
  },
  "sanidad-foro-marzo": {
    title: "Sanidad y el Foro de la Profesión Médica alcanzan un acuerdo para mantener el diálogo",
    institution: "Ministerio de Sanidad",
    type: "Oficial",
    year: "2026",
    url: "https://www.sanidad.gob.es/gabinete/notasPrensa.do?id=6864&metodo=detalle"
  },
  "sanidad-rechazo-estatuto-propio": {
    title: "Sanidad lamenta que CESM-SMA se levante de la mesa y descarta estatuto específico por categoría",
    institution: "Ministerio de Sanidad",
    type: "Oficial",
    year: "2025",
    url: "https://www.sanidad.gob.es/gabinete/notasPrensa.do?id=6819"
  },
  "sanidad-planificacion-medicos": {
    title: "Estudios para la planificación de profesionales sanitarios",
    institution: "Ministerio de Sanidad",
    type: "Oficial",
    year: "2026",
    url: "https://www.sanidad.gob.es/areas/profesionesSanitarias/profesiones/necesidadEspecialistas/home.htm"
  },
  "sanidad-mejora-formacion": {
    title: "Mejora de la formación en Medicina",
    institution: "Ministerio de Sanidad",
    type: "Oficial",
    year: "2026",
    url: "https://www.sanidad.gob.es/areas/profesionesSanitarias/mejoraFormacion/home.htm"
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
  "cesm-movilizaciones": {
    title: "CESM mantiene todas las movilizaciones convocadas contra el borrador de Estatuto Marco",
    institution: "CESM",
    type: "Sindical médico",
    year: "2026",
    url: "https://www.cesm.org/2026/03/05/cesm-mantiene-todas-las-movilizaciones-convocadas-contra-el-borrador-de-estatuto-marco-del-ministerio-de-sanidad/"
  },
  "cesm-manifestacion-febrero": {
    title: "Miles de médicos y facultativos reclaman en Madrid un estatuto propio",
    institution: "CESM",
    type: "Sindical médico",
    year: "2026",
    url: "https://www.cesm.org/2026/02/14/miles-de-medicos-y-facultativos-reclaman-en-madrid-un-estatuto-propio-como-previa-a-la-semana-de-huelga-nacional/"
  },
  "cesm-abril-negociacion": {
    title: "El Comité de Huelga denuncia que el ministerio entorpece la negociación",
    institution: "CESM",
    type: "Sindical médico",
    year: "2026",
    url: "https://www.cesm.org/2026/04/08/el-comite-de-huelga-denuncia-que-el-ministerio-entorpece-la-negociacion-para-esconder-su-incapacidad-para-llegar-a-acuerdos-que-atiendan-las-reivindicaciones-del-colectivo/"
  },
  "cesm-clm-calendario": {
    title: "Huelga médica facultativa 2026: calendario nacional",
    institution: "CESM Castilla-La Mancha",
    type: "Sindical médico",
    year: "2026",
    url: "https://sindicatomedicoclm.es/huelga-medica-facultativa-castilla-la-mancha-huelga-nacional-2026/"
  },
  "cesm-reivindicaciones": {
    title: "Reivindicaciones del Comité de Huelga ante el Ministerio",
    institution: "CESM",
    type: "Sindical médico",
    year: "2025",
    url: "https://www.cesm.org/2025/06/09/estas-son-las-reivindicaciones-del-comite-de-huelga-ante-el-ministerio-de-sanidad/"
  },
  "cesm-estatuto-propio": {
    title: "Estatuto propio de la profesión médica y facultativa",
    institution: "CESM / SMA",
    type: "Propuesta médica",
    year: "2025",
    url: "https://www.cesm.org/wp-content/uploads/2025/09/ESTATUTO-PROPIO-DE-LA-PROFESION-MEDICA-Y-FACULTATIVA.pdf"
  },
  "cesm-respuesta-foro": {
    title: "El Comité de Huelga recuerda al ministerio que debe iniciar con ellos la negociación",
    institution: "CESM",
    type: "Sindical médico",
    year: "2026",
    url: "https://www.cesm.org/2026/03/06/el-comite-de-huelga-recuerda-al-ministerio-que-debe-iniciar-con-ellos-la-negociacion-que-pretendia-establecer-con-el-foro-de-la-profesion/"
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
  "cgcom-regulacion-especifica": {
    title: "La profesión médica necesita una regulación específica",
    institution: "CGCOM",
    type: "Profesional",
    year: "2025",
    url: "https://www.cgcom.es/noticias/dr-tomas-cobo-la-profesion-medica-necesita-una-regulacion-especifica-que-se-adapte-sus"
  },
  "elpais-acuerdo": {
    title: "Sanidad firma acuerdo sin apoyo de sindicatos médicos",
    institution: "El País",
    type: "Prensa",
    year: "2026",
    url: "https://elpais.com/sociedad/2026-01-26/sanidad-firma-un-acuerdo-para-el-nuevo-estatuto-marco-sin-el-apoyo-de-los-sindicatos-medicos.html"
  },
  "elpais-huelga-abril": {
    title: "Comienza la tercera semana de huelga de médicos sin acercamientos con Sanidad",
    institution: "El País",
    type: "Prensa",
    year: "2026",
    url: "https://elpais.com/sociedad/2026-04-27/comienza-la-tercera-semana-de-huelga-de-medicos-sin-acercamientos-con-sanidad.html"
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
  },
  "mir-infografia": {
    title: "Infografía HTML: cartel frente a realidad MIR",
    institution: "Portal MIR original",
    type: "Visual interactivo",
    year: "2026",
    url: mirInfografiaUrl
  }
};

export const sourceGroups = [
  {
    title: "Normativa vigente y europea",
    ids: ["ley-55", "ley-44", "ley-53", "rd-1146", "rd-402", "directiva-tiempo", "boe-guardias-tjue"]
  },
  {
    title: "Anteproyecto y posición oficial",
    ids: [
      "anteproyecto",
      "ministerio-faq",
      "moncloa-acuerdo",
      "plan-normativo-2026",
      "sanidad-foro-marzo",
      "sanidad-rechazo-estatuto-propio",
      "sanidad-planificacion-medicos",
      "sanidad-mejora-formacion"
    ]
  },
  {
    title: "Posición médica y facultativa",
    ids: [
      "cesm-huelga",
      "cesm-movilizaciones",
      "cesm-manifestacion-febrero",
      "cesm-abril-negociacion",
      "cesm-clm-calendario",
      "cesm-reivindicaciones",
      "cesm-estatuto-propio",
      "cesm-respuesta-foro",
      "cesm-cv-lineas",
      "metges-preacuerdo",
      "foro-medico",
      "cgcom-regulacion-especifica"
    ]
  },
  {
    title: "Sindicatos firmantes y prensa",
    ids: [
      "satse-acuerdo",
      "elpais-acuerdo",
      "elpais-huelga-abril",
      "heraldo-claves",
      "diario-altoaragon",
      "aragondigital-guardias"
    ]
  },
  { title: "Bloque MIR enlazado", ids: ["simeg-mir", "mir-portal", "mir-infografia"] }
];

export const downloads = [
  { label: "Argumentario rápido", href: "downloads/argumentario_estatuto_medico.md" },
  { label: "Resumen de reivindicaciones", href: "downloads/reivindicaciones_estatuto_medico.md" },
  { label: "Respuesta a titulares", href: "downloads/respuesta_titulares_estatuto_marco.md" }
];
