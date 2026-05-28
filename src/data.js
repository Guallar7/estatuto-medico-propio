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
  { id: "mir", label: "MIR", path: "mir.html" }
];

export const homeCards = [
  {
    id: "reivindicaciones",
    title: "Qué reclamamos",
    text: "Estatuto propio, mesa médica propia, condiciones negociadas por médicos, descanso real, conciliación y jubilación.",
    cta: "Ver programa"
  },
  {
    id: "anteproyecto",
    title: "Análisis del anteproyecto",
    text: "Qué cambia, qué mejora, qué queda condicionado y qué garantías faltan.",
    cta: "Ver análisis"
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
    short: "Un marco específico para responsabilidades y condiciones específicas.",
    body:
      "Exigimos un marco propio o, como mínimo transitorio, un cauce médico vinculante para negociar las condiciones singulares de la profesión.",
    category: "Representación",
    sources: ["ley-55", "anteproyecto", "cesm-estatuto-propio", "cgcom-regulacion-especifica"]
  },
  {
    id: "mesa-propia",
    title: "Mesa médica propia",
    short: "Las condiciones específicas las tenemos que negociar nosotros.",
    body:
      "Foros consultivos y mesas técnicas pueden ayudar, pero no sustituyen una mesa médica con capacidad negociadora real sobre nuestras condiciones de trabajo.",
    category: "Negociación",
    sources: ["anteproyecto", "sanidad-foro-marzo", "cesm-respuesta-foro", "elpais-acuerdo"]
  },
  {
    id: "guardias",
    title: "Guardias decididas en negociación médica",
    short: "El régimen de guardias no puede cerrarse sin quienes las hacen.",
    body:
      "La prioridad es que la profesión médica negocie directamente si debe haber guardias, en qué condiciones, con qué límites, descansos, retribución y garantías. Puede que el resultado sea exigir su cómputo pleno; puede que sea reducirlas drásticamente o no hacer guardias estructurales.",
    category: "Jornada",
    sources: ["ley-55", "anteproyecto", "directiva-tiempo", "cesm-reivindicaciones"]
  },
  {
    id: "computo-penosidad",
    title: "Cómputo real y coeficientes correctores",
    short: "Si se hacen guardias, su tiempo y penosidad deben quedar reconocidos.",
    body:
      "Esta es una exigencia técnica subordinada a la negociación propia: si finalmente hay guardias, deberán computar de forma íntegra y reconocer su penosidad. No pedimos copiar el régimen de otros cuerpos; señalamos que la Administración ya reconoce en servicios esenciales jornadas especiales, coeficientes correctores y jubilación adaptada al desgaste.",
    category: "Penosidad",
    sources: [
      "anteproyecto",
      "rd-bomberos-jubilacion",
      "acuerdo-bomberos-cm",
      "acuerdo-bomberos-madrid",
      "rd-policia-local-jubilacion"
    ]
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
      "La penosidad acumulada de guardias, noches, festivos y presión asistencial requiere calendario, indicadores, cotización y reconocimiento efectivo. Un informe futuro no compensa años de desgaste ya soportados.",
    category: "Jubilación",
    sources: ["anteproyecto", "rd-402", "rd-bomberos-jubilacion", "rd-policia-local-jubilacion", "cesm-reivindicaciones"]
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
    title: "Sin mesa médica propia",
    status: "mantiene",
    claim: "El texto conserva la negociación en el Ámbito general y no crea una mesa médica o facultativa con capacidad propia.",
    current: "La Ley 55/2003 ya articula la negociación estatal a través del Ámbito de Negociación y de las mesas sectoriales, no mediante una mesa médica propia.",
    change: "Los artículos 22 y 23 mantienen el Foro Marco y el Ámbito de Negociación con las organizaciones sindicales representadas en ese foro. El Foro Profesional solo emite informe cuando se le consulte.",
    formal: "Hay canales de diálogo e información, pero no un ámbito negociador médico.",
    reality: "La reivindicación central queda fuera: no decidimos directamente nuestras condiciones singulares. Guardias, descansos, penosidad, clasificación y retribución siguen mezcladas en un marco común donde otros negocian también por nosotros.",
    why: "Si la profesión que hace guardias de 17 o 24 horas no tiene una mesa propia, cualquier mejora queda sometida a equilibrios generales y a la interpretación posterior de cada servicio de salud.",
    amendment: "Estatuto propio facultativo y mesa médica con capacidad negociadora real sobre jornada, guardias, descansos, penosidad, jubilación, compatibilidad y retribución.",
    refs: ["Arts. 22-23 APL", "Art. 47 Ley 44/2003", "CESM 06/03/2026"],
    evidence: [
      {
        article: "Art. 23 APL",
        page: "p. 17",
        quote: "organizaciones sindicales representadas en el Foro Marco",
        note: "El interlocutor no es una mesa médica propia, sino el mismo ámbito general."
      },
      {
        article: "Art. 22.4 APL",
        page: "p. 17",
        quote: "solicitará informe al Foro Profesional",
        note: "Pedir informe no equivale a negociar ni a vincular el resultado."
      }
    ],
    sources: ["ley-55", "anteproyecto", "ley-44", "cesm-respuesta-foro"]
  },
  {
    id: "guardia-estructural",
    title: "La guardia sigue siendo estructura",
    status: "riesgo",
    claim: "El anteproyecto presenta la guardia como complemento de la actividad ordinaria.",
    current: "La continuidad asistencial se sostiene hoy con guardias médicas que cubren noches, festivos y fines de semana como pieza ordinaria del sistema.",
    change: "Los artículos 93 a 95 describen un modelo específico para personal médico y facultativo del grupo 8 basado en combinar jornada ordinaria y jornada de guardia.",
    formal: "Distinguir actividad ordinaria, atención continuada y urgencia puede ordenar conceptos.",
    reality: "El texto no rompe la dependencia estructural de la guardia. La define como horario adicional, pero la integra en la programación funcional del centro y deja su organización en la dirección.",
    why: "Una actividad que se programa todos los meses, cubre déficits de plantilla y condiciona salario, descanso y vida familiar no es una excepción: es parte del modelo laboral médico.",
    amendment: "El régimen de guardias debe negociarse en una mesa médica propia: primero decidir si deben existir guardias estructurales y, si las hay, fijar voluntariedad, límites, descansos, retribución, cómputo y garantías.",
    refs: ["Arts. 93-95 APL", "Art. 48 Ley 55/2003", "Directiva 2003/88/CE"],
    evidence: [
      {
        article: "Art. 93 APL",
        page: "p. 68",
        quote: "requiere complementar la actividad ordinaria",
        note: "La necesidad se formula como parte del modelo, no como excepción a corregir."
      },
      {
        article: "Art. 95.1 APL",
        page: "p. 68",
        quote: "horario adicional al establecido como ordinario",
        note: "Reconoce que la guardia es tiempo añadido, pero no le da plena protección material."
      }
    ],
    sources: ["ley-55", "anteproyecto", "directiva-tiempo", "cesm-reivindicaciones"]
  },
  {
    id: "guardias-17-24",
    title: "17 horas de regla, 24 de excepción fácil",
    status: "riesgo",
    claim: "Se anuncia el fin de las guardias de 24 horas como regla general.",
    current: "En muchos servicios, la jornada médica real se organiza con tardes, noches, fines de semana y festivos que otros colectivos no asumen en las mismas condiciones.",
    change: "El artículo 96 limita la guardia laborable a 17 horas, pero permite hasta 24 horas en puestos de difícil cobertura, fines de semana y festivos si se invocan razones organizativas o asistenciales.",
    formal: "Reducir la regla general de 24 a 17 horas parece una mejora.",
    reality: "La excepción cubre precisamente los escenarios donde las guardias pesan más: fines de semana, festivos y puestos con falta de médicos. La coletilla organizativa puede convertir la excepción en práctica normal.",
    why: "Si el sistema no corrige plantillas y solo renombra la prolongación como excepción autorizable, la carga vuelve al mismo sitio: al médico que sostiene la continuidad asistencial.",
    amendment: "Prohibir guardias de 24 horas salvo emergencia real y acotada, con registro público, compensación reforzada y revisión independiente. Los fines de semana y festivos no pueden ser una excepción automática.",
    refs: ["Art. 96 APL", "Art. 84 APL", "Directiva 2003/88/CE"],
    evidence: [
      {
        article: "Art. 96.1 APL",
        page: "p. 69",
        quote: "hasta 24 horas continuadas",
        note: "La guardia de 24 horas no desaparece; se desplaza a supuestos previsibles."
      },
      {
        article: "Art. 96.1 APL",
        page: "p. 69",
        quote: "razones organizativas o asistenciales",
        note: "Esa fórmula es demasiado abierta para un límite de salud laboral."
      }
    ],
    sources: ["anteproyecto", "directiva-tiempo", "boe-guardias-tjue", "cesm-reivindicaciones"]
  },
  {
    id: "opt-out-hora-complementaria",
    title: "La hora complementaria es un opt-out",
    status: "riesgo",
    claim: "El exceso de jornada sería voluntario y limitado.",
    current: "La Ley 55/2003 ya permite superar límites por jornada especial con consentimiento y hasta 150 horas anuales adicionales.",
    change: "El artículo 97 reproduce la lógica del consentimiento individual para superar la duración máxima conjunta cuando el centro alegue atención continuada y razones organizativas o asistenciales.",
    formal: "La norma dice que negarse no puede perjudicar el desarrollo profesional o formativo.",
    reality: "La voluntariedad individual en un servicio infradotado es débil. Además, el texto aclara que cobrar menos por hacer menos horas adicionales no se considera perjuicio.",
    why: "Si el sistema necesita esas horas para funcionar, el profesional queda presionado por salario, equipo, listas de espera y cultura de servicio. Eso no es negociación colectiva real.",
    amendment: "Eliminar el opt-out individual como solución estructural. Cualquier exceso debe negociarse en una mesa médica, con límites duros, registro externo y retribución no inferior a la hora ordinaria ponderada.",
    refs: ["Art. 97 APL", "Art. 49 Ley 55/2003", "Art. 22 Directiva 2003/88/CE"],
    evidence: [
      {
        article: "Art. 97.1 APL",
        page: "p. 69",
        quote: "libre y voluntariamente",
        note: "La voluntariedad se plantea de forma individual, no como garantía colectiva."
      },
      {
        article: "Art. 97.3 APL",
        page: "p. 70",
        quote: "menor nivel retributivo",
        note: "El texto admite que no aceptar exceso reduzca ingresos sin considerarlo perjuicio."
      }
    ],
    sources: ["anteproyecto", "ley-55", "directiva-tiempo"]
  },
  {
    id: "coletillas-servicio",
    title: "Las coletillas de servicio abren la puerta",
    status: "riesgo",
    claim: "Las excepciones dependen de razones organizativas, asistenciales o de gestión.",
    current: "En la práctica, las plantillas insuficientes convierten las necesidades asistenciales en argumento permanente.",
    change: "El anteproyecto usa fórmulas abiertas para autorizar más duración diaria, guardias de 24 horas, exceso semanal, retribución de exceso y suspensión temporal de descansos.",
    formal: "Exigir motivación, informes y consentimiento puede parecer garantista.",
    reality: "Cuando la falta de médicos es estructural, la excepción se activa todos los meses. La coletilla no protege al profesional si el centro puede justificar casi todo por continuidad asistencial.",
    why: "La sanidad siempre tiene necesidades asistenciales. Precisamente por eso hacen falta límites duros negociados por quienes soportan esas condiciones.",
    amendment: "Definir por ley qué es una excepción real, prohibir su uso por déficit estructural y publicar datos de activación por centro, servicio y categoría.",
    refs: ["Arts. 82, 91, 96 y 97 APL"],
    evidence: [
      {
        article: "Art. 82.4 APL",
        page: "p. 63",
        quote: "razones organizativas o asistenciales",
        note: "La misma fórmula permite ampliar la jornada diaria."
      },
      {
        article: "Art. 91.3 APL",
        page: "p. 66",
        quote: "recursos humanos disponibles",
        note: "La falta de personal puede acabar justificando suspender descansos."
      }
    ],
    sources: ["anteproyecto", "directiva-tiempo"]
  },
  {
    id: "descanso-postguardia",
    title: "El descanso no computa como trabajo",
    status: "mejora-insuficiente",
    claim: "La libranza postguardia queda protegida.",
    current: "El descanso tras una guardia ha dependido a menudo de organización local, presión asistencial y sustituciones insuficientes.",
    change: "El artículo 99 impide exigir jornada ordinaria inmediatamente posterior a una guardia y considera ese periodo como jornada realizada a efectos de no programarlo.",
    formal: "Es una mejora parcial: protege la libranza posterior frente a la exigencia directa de volver a trabajar.",
    reality: "El mismo artículo afirma que esos periodos no computan como tiempo efectivo de trabajo. La fatiga generada por una guardia existe, pero el sistema no la reconoce plenamente como tiempo trabajado.",
    why: "Para jubilación, penosidad, carrera, cotización, salud laboral y estadística real de horas, la diferencia importa. Pero el cómputo no debe tapar la prioridad política: que las condiciones de guardia se negocien por quienes las soportan.",
    amendment: "Como garantía mínima si existen guardias, computar la guardia y sus descansos obligados como consecuencia laboral protegida: sin deuda horaria, sin recuperación indirecta y con reflejo en penosidad, jubilación y registro de horas reales.",
    refs: ["Art. 99 APL", "Art. 90 APL", "Directiva 2003/88/CE"],
    evidence: [
      {
        article: "Art. 99.1 APL",
        page: "p. 71",
        quote: "no se computen como tiempo efectivo",
        note: "La norma protege la libranza, pero no reconoce plenamente el tiempo laboral que la causa."
      },
      {
        article: "Art. 90.2 APL",
        page: "p. 66",
        quote: "ni podrán ser tomados en consideración",
        note: "Los descansos se sacan del cómputo de jornada ordinaria."
      }
    ],
    sources: ["anteproyecto", "directiva-tiempo", "boe-guardias-tjue", "acuerdo-bomberos-madrid"]
  },
  {
    id: "promedios-y-excepciones",
    title: "Promedios, compensaciones y suspensiones",
    status: "riesgo",
    claim: "La jornada máxima queda limitada a 45 horas semanales de promedio.",
    current: "El marco vigente transpone mínimos europeos y trabaja con promedios y descansos compensatorios.",
    change: "El artículo 84 baja el promedio general a 45 horas cuatrimestrales, pero los artículos 87 a 91 conservan descansos alternativos, reducción de descansos y suspensión temporal por necesidades asistenciales excepcionales.",
    formal: "Reducir el promedio de 48 a 45 horas es una mejora formal.",
    reality: "La vida laboral se sufre en turnos concretos, no en promedios. Una semana con guardia, festivo y consulta cargada puede ser insegura aunque cuatro meses después cuadre el promedio.",
    why: "El lenguaje de compensación posterior no evita la fatiga en el momento clínico. En medicina, el riesgo no espera a que cierre el cuatrimestre.",
    amendment: "Fijar límites por semana natural, número mensual de guardias, noches y fines de semana, con descanso inmediato no compensable a largo plazo.",
    refs: ["Arts. 84, 87-91 APL", "Arts. 3, 5 y 6 Directiva 2003/88/CE"],
    evidence: [
      {
        article: "Art. 84 APL",
        page: "p. 63",
        quote: "promedio en cómputo cuatrimestral",
        note: "El promedio diluye semanas de sobrecarga real."
      },
      {
        article: "Art. 91.3 APL",
        page: "p. 66",
        quote: "suspensión temporal",
        note: "La excepción permite apartar jornadas y descansos cuando falten recursos."
      }
    ],
    sources: ["anteproyecto", "ley-55", "directiva-tiempo"]
  },
  {
    id: "transitoria-cinco-anos",
    title: "Cinco años para adaptar guardias",
    status: "riesgo",
    claim: "Las medidas de jornada podrían aplicarse progresivamente.",
    current: "Los servicios de salud ya arrastran déficits de plantilla y organización que explican muchas guardias estructurales.",
    change: "La disposición transitoria octava concede cinco años a los servicios de salud para hacer cambios organizativos y de cobertura que permitan aplicar el nuevo Título VII.",
    formal: "Reconoce que sin reorganización no hay mejora real.",
    reality: "Cinco años es demasiado tiempo para una condición que se presenta como avance. Además, se prevén sistemas de trabajo adicional voluntario para evitar merma retributiva, lo que puede perpetuar más horas en vez de crear plantilla.",
    why: "Si la salida a la pérdida de ingresos por reducir guardias es más trabajo adicional, no se cambia el modelo: se maquilla.",
    amendment: "Calendario máximo de un año para límites de guardias, plan financiado de plantilla y prohibición de sustituir derechos por bolsas de trabajo adicional.",
    refs: ["DT 8 APL", "Arts. 95-99 APL"],
    evidence: [
      {
        article: "DT 8 APL",
        page: "p. 94",
        quote: "en un plazo de 5 años",
        note: "La mejora de jornada queda diferida a una adaptación larga."
      },
      {
        article: "DT 8.2 APL",
        page: "p. 95",
        quote: "trabajo adicional voluntario",
        note: "La compensación de ingresos puede volver a descansar en más horas."
      }
    ],
    sources: ["anteproyecto", "cesm-reivindicaciones"]
  },
  {
    id: "localizacion",
    title: "La localización queda abierta",
    status: "ambiguo",
    claim: "La localización se regula para evitar riesgos.",
    current: "La disponibilidad localizada puede restringir descanso y vida personal aunque no siempre se active presencialmente.",
    change: "El artículo 84 excluye la localización del máximo de 45 horas salvo activación efectiva, y el artículo 100 deja a los servicios de salud definir cuándo se asimila a guardia y sus límites.",
    formal: "Reconoce que la localización puede afectar a salud y seguridad.",
    reality: "La carga de disponibilidad puede quedar infravalorada si solo computa el acto activado. La norma remite a comunidades y mesas sectoriales, no a un estándar médico estatal mínimo.",
    why: "Estar localizable limita descanso, desplazamientos y vida familiar. Si no se mide, no existe para el sistema.",
    amendment: "Definir límites estatales de localización, descanso posterior, compensación y cómputo parcial cuando la restricción de disponibilidad sea intensa.",
    refs: ["Art. 84 APL", "Art. 100 APL", "Directiva 2003/88/CE"],
    evidence: [
      {
        article: "Art. 84 APL",
        page: "p. 64",
        quote: "No serán tomados en consideración",
        note: "La localización queda fuera del máximo salvo activación efectiva."
      },
      {
        article: "Art. 100.2 APL",
        page: "p. 71",
        quote: "mesas sectoriales",
        note: "Los límites se desplazan a negociación autonómica general."
      }
    ],
    sources: ["anteproyecto", "directiva-tiempo", "boe-guardias-tjue"]
  },
  {
    id: "clasificacion-mecu",
    title: "Clasificación sin dinero garantizado",
    status: "mejora-insuficiente",
    claim: "La nueva clasificación MECU reconoce mejor la formación médica.",
    current: "La formación médica especializada y la responsabilidad clínica no tienen traducción homogénea suficiente en salario, carrera, penosidad y representación.",
    change: "El artículo 6 sitúa categorías con nivel 8 MECU o nivel 7 con especialidad en grupo 8, pero la disposición transitoria sexta condiciona los efectos retributivos a un futuro sistema y a presupuestos.",
    formal: "Hay reconocimiento nominal de cualificación.",
    reality: "La mejora queda diferida y sin garantía presupuestaria. El texto incluso dice que mientras no se desarrolle el sistema no puede suponer incremento de gasto público.",
    why: "Reconocer formación en una tabla sin salario, carrera, penosidad ni mesa propia es reconocimiento simbólico, no mejora material.",
    amendment: "Vincular la clasificación a efectos estatales mínimos desde la entrada en vigor: retribución básica, complemento de responsabilidad clínica, carrera y penosidad.",
    refs: ["Art. 6 APL", "DT 5-6 APL", "EBEP art. 76"],
    evidence: [
      {
        article: "Art. 6 APL",
        page: "p. 8",
        quote: "Grupo 8",
        note: "El encaje existe, pero por sí solo no cambia condiciones."
      },
      {
        article: "DT 6.4 APL",
        page: "p. 94",
        quote: "no puede suponer incremento de gasto público",
        note: "Sin financiación, la clasificación puede quedarse en etiqueta."
      }
    ],
    sources: ["anteproyecto", "sanidad-foro-marzo", "cesm-estatuto-propio"]
  },
  {
    id: "mir-formacion",
    title: "MIR: límites con excepciones",
    status: "mejora-insuficiente",
    claim: "El anteproyecto introduce mejoras para residentes.",
    current: "El Real Decreto 1146/2006 permite hasta siete guardias al mes y el salario MIR sigue dependiendo de guardias y diferencias autonómicas.",
    change: "La disposición adicional vigesimosegunda limita con carácter general a 80 horas mensuales y cuatro módulos de guardia física, pero admite excepciones y remite a una actualización reglamentaria posterior.",
    formal: "Bajar de siete guardias a cuatro módulos físicos generales puede ser positivo.",
    reality: "No fija salario ordinario digno, no elimina dependencia económica de guardias y mantiene una salida excepcional. La reforma real del régimen MIR queda para otro reglamento.",
    why: "El residente no debe financiar su sueldo con fatiga ni cubrir déficits estructurales bajo apariencia formativa.",
    amendment: "Actualizar el RD 1146/2006 con salario ordinario homogéneo, guardias formativas no estructurales, supervisión real, registro horario y límites no excepcionables salvo emergencia declarada.",
    refs: ["DA 22 APL", "RD 1146/2006", "80 h/mes", "4 módulos"],
    evidence: [
      {
        article: "DA 22.3 APL",
        page: "p. 90",
        quote: "80 horas mensuales",
        note: "El límite mejora el marco actual, pero sigue siendo una carga muy alta."
      },
      {
        article: "DA 22.5 APL",
        page: "p. 90",
        quote: "en el plazo máximo de un año",
        note: "La regulación MIR importante se pospone a una norma futura."
      }
    ],
    sources: ["anteproyecto", "rd-1146", "simeg-mir", "mir-portal"]
  },
  {
    id: "jubilacion-penosidad",
    title: "Jubilación: informes, no derecho",
    status: "depende",
    claim: "El texto abre la vía de coeficientes reductores.",
    current: "No existe reconocimiento general inmediato de jubilación anticipada médica por penosidad en el Estatuto Marco vigente.",
    change: "La disposición adicional decimosexta prevé informes técnicos y remite al procedimiento general del Real Decreto 402/2025; la disposición final quinta añade informe del Ministerio de Sanidad cuando se solicite para personal estatutario.",
    formal: "Menciona expresamente guardias, turnos y desgaste profesional.",
    reality: "No reconoce coeficientes, no fija calendario, no obliga a iniciar procedimiento para médicos y no garantiza financiación. Mientras otros cuerpos ya tienen coeficientes reductores o cómputos especiales, la penosidad médica queda en una fase de estudio.",
    why: "Si la Administración acepta que ciertos servicios esenciales necesitan reglas especiales, no puede llamar complementaria una guardia médica estructural y borrar su coste del cómputo real.",
    amendment: "Reconocer por ley la obligación de iniciar expediente médico-facultativo con calendario, indicadores de guardias/noches/festivos y financiación de cotización adicional. Si no hay Estatuto Médico Propio, habrá que reclamar formalmente un régimen equivalente de cómputo, coeficientes correctores y jubilación por penosidad.",
    refs: ["DA 16 APL", "DF 5 APL", "RD 402/2025", "RD 383/2008", "LGSS art. 206"],
    evidence: [
      {
        article: "DA 16.1 APL",
        page: "p. 88",
        quote: "corresponde al sistema de la Seguridad Social",
        note: "El Estatuto no reconoce directamente coeficientes reductores."
      },
      {
        article: "DA 16.2 APL",
        page: "p. 89",
        quote: "informes técnicos",
        note: "El texto abre una fase de estudio, no un derecho exigible."
      },
      {
        article: "RD 383/2008, art. 2",
        page: "BOE",
        quote: "coeficiente reductor del 0,20",
        note: "La Administración ya reconoce coeficientes de jubilación para colectivos públicos con penosidad acreditada.",
        sourceId: "rd-bomberos-jubilacion"
      },
      {
        article: "Acuerdo Bomberos Ayuntamiento de Madrid, art. 8",
        page: "p. 5",
        quote: "coeficiente progresivo de nocturnidad de 1,283",
        note: "El precedente útil es el principio: las jornadas prolongadas y nocturnas pueden tener cómputo corrector.",
        sourceId: "acuerdo-bomberos-madrid"
      }
    ],
    sources: ["anteproyecto", "rd-402", "rd-bomberos-jubilacion", "acuerdo-bomberos-madrid", "rd-policia-local-jubilacion", "cesm-reivindicaciones"]
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
    evidence: [
      {
        article: "Art. 35.1 APL",
        page: "p. 29",
        quote: "no podrá compatibilizar",
        note: "La restricción se proyecta sobre cargos intermedios sin resolver compensación homogénea."
      },
      {
        article: "DT 7 APL",
        page: "p. 94",
        quote: "dedicación exclusiva",
        note: "La continuidad de compatibilidades queda condicionada por el nuevo régimen."
      }
    ],
    sources: ["ley-53", "anteproyecto", "cesm-cv-lineas"]
  },
  {
    id: "conciliacion",
    title: "Conciliación sin plantilla",
    status: "mejora-insuficiente",
    claim: "El texto reconoce conciliación y planificación de jornada.",
    current: "La vida personal queda tensionada por guardias, cambios, noches, festivos y déficit estructural de cobertura.",
    change: "Los artículos 80 y 81 exigen programación, registro y medidas de flexibilización, pero la organización concreta queda en servicios de salud y mesas sectoriales.",
    formal: "Programar con antelación y registrar tiempo de trabajo es positivo.",
    reality: "Sin plantilla suficiente, límites duros y mesa médica, la conciliación se queda por debajo de guardias, incidencias, cambios y necesidades asistenciales.",
    why: "Un calendario no concilia si las excepciones se normalizan y si la cobertura vuelve a depender de disponibilidad individual permanente.",
    amendment: "Calendarios vinculantes, registro público de cambios forzosos, cobertura obligatoria de ausencias y derecho efectivo a rechazar prolongaciones no pactadas.",
    refs: ["Arts. 80-82 APL", "Art. 91 APL"],
    evidence: [
      {
        article: "Art. 80.1 APL",
        page: "p. 61",
        quote: "antelación suficiente",
        note: "La previsión es útil, pero no resuelve cambios por déficit de cobertura."
      },
      {
        article: "Art. 82.2 APL",
        page: "p. 62",
        quote: "distribuirse de manera irregular",
        note: "La irregularidad anual permite desplazar carga a periodos concretos."
      }
    ],
    sources: ["anteproyecto", "directiva-tiempo", "sanidad-planificacion-medicos"]
  },
  {
    id: "europa-tiempo-trabajo",
    title: "Europa es suelo, no techo",
    status: "mantiene",
    claim: "El texto se apoya en mínimos europeos de tiempo de trabajo.",
    current: "La Directiva 2003/88/CE fija descanso diario, descanso semanal, pausas y máximo semanal medio de 48 horas incluidas horas extraordinarias.",
    change: "El anteproyecto baja formalmente a 45 horas de promedio, pero mantiene guardias estructurales, opt-out individual, descansos alternativos y excepciones organizativas.",
    formal: "Europa proporciona un suelo de protección común.",
    reality: "Cumplir mínimos europeos no justifica mantener un modelo penoso. España puede aprobar reglas más protectoras y específicas para quienes hacen guardias médicas.",
    why: "La pregunta no es si el anteproyecto cabe en Europa, sino si protege de verdad a quienes soportan las condiciones más duras del sistema.",
    amendment: "Estatuto propio con límites superiores al mínimo europeo y mesa médica para decidir el modelo de guardias: voluntariedad, duración, descanso efectivo, cómputo si procede y prohibición de usar opt-out para cubrir plantilla.",
    refs: ["Directiva 2003/88/CE", "Arts. 3, 5, 6 y 22", "TJUE guardias"],
    evidence: [
      {
        article: "Directiva 2003/88/CE",
        page: "arts. 3, 5 y 6",
        quote: "48 horas, incluidas las horas extraordinarias",
        note: "Es un límite medio europeo, no una obligación de exprimirlo."
      },
      {
        article: "Art. 84 APL",
        page: "p. 63",
        quote: "45 horas semanales",
        note: "Bajar el promedio no elimina la penosidad de guardias concretas."
      }
    ],
    sources: ["directiva-tiempo", "boe-guardias-tjue", "ley-55"]
  }
];

export const news = [
  {
    id: "nuevo-borrador-consejo-ministros-mayo-2026",
    tone: "mixto",
    outlet: "Gaceta Médica / Redacción Médica",
    date: "2026-05-27",
    title: "Un nuevo borrador del Estatuto Marco acelera hacia Consejo de Ministros",
    claim:
      "La prensa sanitaria informa de que Sanidad ha movido un texto perfilado del Estatuto Marco hacia el circuito previo al Consejo de Ministros. Redacción Médica difunde un PDF de 106 páginas con ajustes materiales: más control de la temporalidad, compensación por abuso, umbral de carga horaria excesiva, guardias de más de cinco módulos físicos mensuales, protección retributiva en exenciones de guardia y estudios de penosidad, turnos y desgaste profesional.",
    response:
      "El texto incorpora cambios laborales relevantes, pero no resuelve la reivindicación médica central. Mantiene el Ámbito de Negociación general, no crea mesa médica propia y conserva guardias de hasta 24 horas en difícil cobertura, fines de semana y festivos. La jubilación por penosidad sigue sin reconocimiento directo: se remite a informes técnicos y al procedimiento reglamentario, y desaparece la modificación expresa del RD 402/2025 que figuraba en el borrador previo.",
    key: "Hay movimiento normativo y ajustes materiales, pero no hay estatuto médico propio ni garantía directa sobre guardias, penosidad y negociación médica.",
    sources: [
      "gaceta-medica-borrador-consejo-ministros",
      "redaccion-medica-texto-perfilado",
      "redaccion-medica-pdf-mayo-2026",
      "sanidad-nuevo-estatuto-marco",
      "anteproyecto"
    ]
  },
  {
    id: "galicia-avances-huelga-autonomica",
    tone: "avance",
    outlet: "Asociación MIR España / O'MEGA / MUD",
    date: "2026-05-08",
    title: "Galicia documenta acuerdos tras la movilización médica autonómica",
    claim:
      "Asociación MIR España, O'MEGA y MUD resumen acuerdos conseguidos en Galicia: normativa específica para el colectivo, comisión de seguimiento trimestral, 35 horas de jornada ordinaria, equiparación de la jornada complementaria, guardias voluntarias en cinco años, libranza de la guardia de viernes, subida de CPV al 40%, mejoras MIR y revisión de jubilación, autoconcertada y complementos salariales.",
    response:
      "Es justo felicitar a quienes han sostenido la movilización y han arrancado compromisos concretos. A la vez, debe leerse como un paso importante, no como el final: harán falta texto formal, calendario, financiación, seguimiento trimestral real y vigilancia de que la voluntariedad de las guardias no quede diluida por necesidades del servicio.",
    key: "La movilización puede abrir acuerdos autonómicos; ahora la clave es convertir cada punto en garantía verificable.",
    sources: [
      "acordos-galicia-pdf",
      "galiciaconfidencial-omega-fin-folga",
      "xunta-voluntariedad-pac",
      "dog-galicia-voluntariedad-pac",
      "galiciapress-omega-convenio",
      "europapress-galicia-primaria-acuerdo",
      "xunta-huelga-ap-marzo",
      "dog-galicia-huelga-abril"
    ]
  },
  {
    id: "diario-altoaragon-defienden",
    tone: "adverso",
    outlet: "Diario del Alto Aragón",
    date: "2026-05-06",
    title: "UGT, CSIF, CCOO y Satse defienden el nuevo Estatuto Marco",
    claim:
      "Los sindicatos firmantes presentan el anteproyecto como un acuerdo amplio: más de 117 mejoras, 'casi el 90%' de demandas cubiertas y avances para todas las categorías.",
    response:
      "Un acuerdo general no equivale a consenso médico. La cuestión central es si el texto reconoce ámbito propio y garantías efectivas para condiciones específicamente médicas.",
    key: "Reconocer condiciones específicas no impide mejoras comunes para el conjunto del SNS.",
    sources: ["diario-altoaragon", "cesm-huelga"]
  },
  {
    id: "aragondigital-guardias",
    tone: "incompleto",
    outlet: "Aragón Digital",
    date: "2026-05-06",
    title: "Nadie está obligado a realizar guardias de 24 horas",
    claim:
      "Los sindicatos firmantes responden a la huelga médica defendiendo que las guardias de 24 horas no serían obligatorias y que las de 17 horas tendrían descansos protegidos.",
    response:
      "El problema no termina en la guardia de 24 horas. Una guardia de 17 horas también es sobrecarga si sigue siendo pieza estructural del sistema.",
    key: "Regular la excepción no basta si la excepción sigue sosteniendo la plantilla que falta.",
    sources: ["aragondigital-guardias", "anteproyecto"]
  },
  {
    id: "heraldo-claves",
    tone: "mixto",
    outlet: "Heraldo de Aragón",
    date: "2026-01-26",
    title: "Las claves del Estatuto Marco firmado por Sanidad y sindicatos",
    claim:
      "La noticia resume el acuerdo de Sanidad y sindicatos: jornada media de 45 horas, guardias reguladas, descansos, conciliación, clasificación profesional y vía para estudiar jubilación.",
    response:
      "Que existan mejoras generales no resuelve si quedan garantizadas para quienes asumen guardias, responsabilidad clínica directa y riesgo médico-legal.",
    key: "La reivindicación médica busca una negociación adecuada a responsabilidades específicas.",
    sources: ["heraldo-claves", "elpais-acuerdo", "cesm-huelga"]
  },
  {
    id: "acuerdo-sin-sindicatos-medicos",
    tone: "mixto",
    outlet: "El País",
    date: "2026-01-26",
    title: "Sanidad firma un acuerdo sin el apoyo de los sindicatos médicos",
    claim:
      "Sanidad pacta con sindicatos del Ámbito de Negociación, pero los sindicatos médicos no lo respaldan y mantienen la reclamación de estatuto o mesa propia.",
    response:
      "El dato relevante es precisamente la ausencia de apoyo médico. Si los sindicatos médicos y facultativos mantienen oposición, no puede venderse como consenso profesional completo.",
    key: "Acuerdo sindical general no significa acuerdo médico.",
    sources: ["elpais-acuerdo", "cesm-huelga", "metges-preacuerdo"]
  },
  {
    id: "acuerdo-foro-profesion-marzo",
    tone: "incompleto",
    outlet: "Ministerio de Sanidad",
    date: "2026-03-05",
    title: "Sanidad presenta un acuerdo con el Foro de la Profesión Médica",
    claim:
      "El Foro reúne a CGCOM/OMC, CESM, FACME, decanos y estudiantes de Medicina, pero no es el Comité de Huelga. La nota ministerial habla de diálogo y medidas futuras; el Comité respondió que el Foro es consultivo y no puede negociar la suspensión de las movilizaciones.",
    response:
      "No debe presentarse como avance de la huelga. Sirve para entender la posición del Ministerio, pero la interlocución que reclama el movimiento es directa con el Comité de Huelga y con capacidad negociadora real.",
    key: "Foro profesional no equivale a Comité de Huelga ni a mesa médica propia.",
    sources: ["sanidad-foro-marzo", "cgcom-foro-profesion", "cesm-respuesta-foro", "ley-44"]
  },
  {
    id: "plan-anual-normativo-2026",
    tone: "contexto",
    outlet: "La Moncloa",
    date: "2026-05-05",
    title: "El Plan Anual Normativo 2026 mantiene la Ley del Estatuto Marco como iniciativa prevista",
    claim:
      "El Gobierno incluye la reforma del Estatuto Marco en su planificación normativa de 2026, lo que confirma que sigue pendiente de tramitación completa.",
    response:
      "Esto confirma que, a 8 de mayo de 2026, la Ley 55/2003 sigue vigente y el texto de enero continúa pendiente de tramitación normativa completa.",
    key: "No es ley vigente: es una reforma en tramitación o prevista.",
    sources: ["plan-normativo-2026", "ley-55", "anteproyecto"]
  },
  {
    id: "tercera-semana-huelga",
    tone: "favorable",
    outlet: "El País",
    date: "2026-04-27",
    title: "Comienza la tercera semana de huelga médica sin acercamientos con Sanidad",
    claim:
      "La cobertura describe una tercera semana de huelga sin acercamientos: el conflicto continúa pese a acuerdos previos y se centra en representación y mesa propia.",
    response:
      "La continuidad del conflicto prueba que el acuerdo general no ha resuelto la cuestión de representación ni las garantías materiales que reclaman médicos y facultativos.",
    key: "El conflicto no es solo de redacción: es de legitimidad negociadora y ejecución real.",
    sources: ["elpais-huelga-abril", "cesm-huelga", "sanidad-foro-marzo"]
  },
  {
    id: "csif-tabla-mir",
    tone: "incompleto",
    outlet: "CSIF / material difundido",
    date: "2026-04-01",
    title: "Tablas de sueldos MIR con guardias",
    claim:
      "Las tablas difundidas presentan netos mensuales MIR sumando guardias, noches o festivos, lo que puede hacer parecer alto un salario que depende de muchas más horas.",
    response:
      "Una tabla con guardias no es una tabla de sueldo ordinario. Para llegar a esas cifras se suman noches, festivos y jornadas extendidas.",
    key: "La comparación honesta separa sueldo base, guardias, horas reales y salario por hora.",
    sources: ["simeg-mir", "mir-portal"]
  }
];

export const updates = [
  {
    date: "2026-05-28",
    type: "Noticias",
    title: "Nuevo borrador del Estatuto Marco en circuito previo al Consejo de Ministros",
    body:
      "Se incorpora una ficha de actualidad sobre el texto difundido el 27 de mayo de 2026: avanza la tramitación y aparecen ajustes en temporalidad, guardias, carga horaria, exenciones y jubilación, pero se mantiene la ausencia de mesa médica propia y el reconocimiento directo de penosidad queda pendiente."
  },
  {
    date: "2026-05-08",
    type: "Noticias",
    title: "Avance autonómico en Galicia incorporado",
    body:
      "Se añade una ficha sobre los acuerdos documentados por Asociación MIR España, O'MEGA y MUD en Galicia, clasificada como avance parcial: una buena noticia que merece reconocimiento, con seguimiento pendiente para convertir cada compromiso en garantía verificable."
  },
  {
    date: "2026-05-08",
    type: "Contenido",
    title: "FAQ pública y lectura visual de noticias",
    body:
      "Se mantiene una FAQ pública y se añaden etiquetas de color en Noticias para distinguir avances, contexto, relatos adversos y datos incompletos."
  },
  {
    date: "2026-05-08",
    type: "Verificación",
    title: "Auditoría de realidad y fuentes reforzadas",
    body:
      "Se incorpora el contraste con la revisión externa: Ley 55/2003 vigente, anteproyecto de enero de 2026 como propuesta, acuerdo de marzo con el Foro, marco europeo, RD 402/2025 y análisis técnico de mejoras formales e insuficiencias materiales."
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
      "Se separa la reivindicación general del proyecto MIR original. El contenido MIR queda enlazado como caso demostrativo especializado."
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
      "Se agrupan fuentes oficiales, posición médica, sindicatos firmantes, prensa y contenido MIR."
  },
  {
    date: "2026-05-07",
    type: "MIR",
    title: "El contenido MIR queda enlazado, no duplicado",
    body:
      "La web general mantiene una página resumen y deriva el análisis completo al portal MIR original para conservar foco editorial."
  },
  {
    date: "2026-05-07",
    type: "SEO",
    title: "Páginas reales para compartir e indexar",
    body:
      "Se crean rutas HTML independientes para anteproyecto, reivindicaciones, noticias, novedades, fuentes y MIR."
  }
];

export const quickArguments = [
  {
    id: "para-que",
    question: "¿Para qué sirve un estatuto médico y facultativo propio?",
    answer:
      "Para negociar reglas específicas sobre guardias, descanso, responsabilidad clínica, formación, penosidad y conciliación sin impedir derechos comunes para el resto del SNS.",
    sources: ["ley-55", "cesm-estatuto-propio", "cgcom-regulacion-especifica"]
  },
  {
    id: "mejoras-insuficientes",
    question: "¿El anteproyecto no mejora nada?",
    answer:
      "Sí introduce mejoras formales. La crítica es que muchas quedan condicionadas a plantillas, comunidades autónomas, excepciones y desarrollos posteriores.",
    sources: ["anteproyecto", "ministerio-faq", "moncloa-acuerdo"]
  },
  {
    id: "guardias-pacientes",
    question: "¿Por qué las guardias son también un asunto de pacientes?",
    answer:
      "Porque la fatiga y la falta de descanso afectan a la seguridad clínica. El descanso postguardia protege al profesional y al paciente.",
    sources: ["anteproyecto", "directiva-tiempo", "foro-medico"]
  },
  {
    id: "mesa-propia",
    question: "¿Por qué no basta con foros o mesas técnicas?",
    answer:
      "Pueden ser útiles, pero no sustituyen una negociación con capacidad real sobre condiciones médicas singulares.",
    sources: ["sanidad-foro-marzo", "cesm-respuesta-foro", "ley-44"]
  },
  {
    id: "europa",
    question: "¿Europa obliga a mantener este modelo de guardias?",
    answer:
      "No. La normativa europea fija mínimos de protección. España puede aprobar reglas más protectoras.",
    sources: ["directiva-tiempo", "boe-guardias-tjue"]
  },
  {
    id: "salarios",
    question: "¿Por qué insistir en separar sueldo ordinario y guardias?",
    answer:
      "Porque una nómina con noches, festivos y jornadas extendidas no describe el salario ordinario ni el coste real por hora.",
    sources: ["simeg-mir", "mir-portal"]
  },
  {
    id: "huelga",
    question: "¿Por qué sigue la huelga si hay acuerdos y avances?",
    answer:
      "Porque los acuerdos generales no han cerrado la reivindicación médica principal: ámbito propio de negociación y garantías materiales para guardias, descanso, clasificación y penosidad.",
    sources: ["elpais-huelga-abril", "cesm-movilizaciones", "sanidad-foro-marzo"]
  }
];

export const sourceRegistry = {
  anteproyecto: {
    title: "Propuesta de Anteproyecto de Ley del Estatuto Marco (versión 04/12/2025)",
    institution: "Ministerio de Sanidad",
    type: "Oficial",
    year: "2025",
    url: "Propuesta-de-Anteproyecto-de-Ley-del-Estatuto-Marco-del-personal-estatutario-de-los-servicios-de-salud.pdf"
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
  "rd-bomberos-jubilacion": {
    title: "Real Decreto 383/2008, coeficiente reductor de jubilación para bomberos",
    institution: "BOE",
    type: "Normativa comparada",
    year: "2008",
    url: "https://www.boe.es/buscar/act.php?id=BOE-A-2008-5987"
  },
  "rd-policia-local-jubilacion": {
    title: "Real Decreto 1449/2018, coeficiente reductor de jubilación para policías locales",
    institution: "BOE",
    type: "Normativa comparada",
    year: "2018",
    url: "https://www.boe.es/buscar/act.php?id=BOE-A-2018-17135"
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
  "sanidad-nuevo-estatuto-marco": {
    title: "Nuevo Estatuto Marco: anteproyecto publicado por Sanidad",
    institution: "Ministerio de Sanidad",
    type: "Oficial",
    year: "2026",
    url: "https://www.sanidad.gob.es/areas/profesionesSanitarias/nuevoEstatutoMarco.htm"
  },
  "gaceta-medica-borrador-consejo-ministros": {
    title: "El Estatuto Marco acelera: un nuevo borrador avanza hacia el Consejo de Ministros",
    institution: "Gaceta Médica",
    type: "Prensa",
    year: "2026",
    url: "https://gacetamedica.com/profesion/estatuto-marco-texto-borrador-consejo-ministros/"
  },
  "redaccion-medica-texto-perfilado": {
    title: "Así está el redactado del Estatuto Marco de Sanidad que perfila el Gobierno",
    institution: "Redacción Médica",
    type: "Prensa",
    year: "2026",
    url: "https://www.redaccionmedica.com/secciones/ministerio-sanidad/asi-esta-el-redactado-del-estatuto-marco-de-sanidad-que-perfila-el-gobierno-9258"
  },
  "redaccion-medica-pdf-mayo-2026": {
    title: "Texto perfilado del Anteproyecto de Ley del Estatuto Marco difundido en mayo de 2026",
    institution: "Redacción Médica",
    type: "Documento difundido por prensa",
    year: "2026",
    url: `${baseUrl}Anteproyecto-Estatuto-Marco-mayo-2026-Redaccion-Medica.pdf`
  },
  "sanidad-foro-marzo": {
    title: "Sanidad y el Foro de la Profesión Médica alcanzan un acuerdo para mantener el diálogo",
    institution: "Ministerio de Sanidad",
    type: "Oficial",
    year: "2026",
    url: "https://www.sanidad.gob.es/gabinete/notasPrensa.do?id=6864&metodo=detalle"
  },
  "cgcom-foro-profesion": {
    title: "Foro de la Profesión Médica: composición y fines",
    institution: "CGCOM",
    type: "Profesional",
    year: "2026",
    url: "https://www.cgcom.es/foro-de-la-profesion-medica/quienes-somos"
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
  "acuerdo-bomberos-madrid": {
    title: "Acuerdo sectorial del Cuerpo de Bomberos del Ayuntamiento de Madrid",
    institution: "Ayuntamiento de Madrid",
    type: "Acuerdo sectorial",
    year: "2018",
    url: "https://sede.madrid.es/UnidadWeb/UGNormativas/Normativa/2018/ficheros/Anm_2018_37_Personal_Bomberos_%202018_2021_Operativa.pdf"
  },
  "acuerdo-bomberos-cm": {
    title: "Acuerdo del Cuerpo de Bomberos de la Comunidad de Madrid 2021-2025",
    institution: "Comunidad de Madrid",
    type: "Acuerdo sectorial",
    year: "2021",
    url: "https://www.comunidad.madrid/transparencia/sites/default/files/open-data/downloads/acuerdo_cuerpo_de_bomberos_comunidad_de_madrid_2021-2025.pdf"
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
  "instagram-avances-galicia": {
    title: "Avances anunciados tras movilización médica en Galicia",
    institution: "Asociación MIR España / O'MEGA / MUD",
    type: "Comunicado en redes",
    year: "2026",
    url: "https://www.instagram.com/p/DYER1TIClRB/?img_index=4&igsh=MTFnMTF6dHJ2M3Zmcw=="
  },
  "acordos-galicia-pdf": {
    title: "Acordos: que conseguimos?",
    institution: "Asociación MIR España / O'MEGA / MUD",
    type: "Documento",
    year: "2026",
    url: `${baseUrl}acordos.pdf`
  },
  "galiciaconfidencial-omega-fin-folga": {
    title: "Sanidade e O'Mega pactan o fin da folga de médicos tras acadar un acordo para a primaria",
    institution: "Galicia Confidencial / Europa Press",
    type: "Prensa",
    year: "2026",
    url: "https://www.galiciaconfidencial.com/noticia/5821201-sanidade-e-omega-pactan-fin-da-folga-medicos-acadar-acordo-primaria"
  },
  "xunta-voluntariedad-pac": {
    title: "Mesa Sectorial aprueba la voluntariedad incentivada para guardias en PAC",
    institution: "Xunta de Galicia",
    type: "Oficial",
    year: "2026",
    url: "https://www.xunta.gal/es/notas-de-prensa/-/nova/022961/mesa-sectorial-sanidade-aprueba-procedimiento-voluntariedad-incentivada-para"
  },
  "dog-galicia-voluntariedad-pac": {
    title: "DOG: acuerdo sobre incentivación y opciones de jornada complementaria voluntaria en PAC",
    institution: "DOG / Xunta de Galicia",
    type: "Oficial",
    year: "2026",
    url: "https://www.xunta.gal/dog/Publicados/2026/20260427/AnuncioC3K1-220426-5_es.html"
  },
  "galiciapress-omega-convenio": {
    title: "O'Mega exige a la Xunta un convenio propio y detalla reivindicaciones autonómicas",
    institution: "Galicia Press / Europa Press",
    type: "Prensa",
    year: "2026",
    url: "https://www.galiciapress.es/articulo/sanidad/2026-04-14/5843663-omega-vuelve-sumar-huelga-nacional-estatuto-marco-exige-xunta-convenio-propio"
  },
  "europapress-galicia-primaria-acuerdo": {
    title: "Mesa Sectorial avala acuerdo de Primaria y concreta 35 horas, CPV y voluntariedad",
    institution: "Europa Press",
    type: "Prensa",
    year: "2025",
    url: "https://www.europapress.es/galicia/noticia-mesa-sectorial-sanidad-avala-acuerdo-primaria-pactado-desconvocar-huelga-negocia-voluntariedad-20251205171216.html"
  },
  "xunta-huelga-ap-marzo": {
    title: "Seguimiento de la huelga de facultativos de Atención Primaria y posición de Sanidade",
    institution: "Xunta de Galicia",
    type: "Oficial",
    year: "2026",
    url: "https://www.xunta.gal/es/notas-de-prensa/-/nova/021962/seguimiento-turno-manana-huelga-facultativos-atencion-primaria-alcanza-5-56-sanidad"
  },
  "dog-galicia-huelga-abril": {
    title: "Servicios mínimos para la huelga médica y facultativa en Galicia de abril de 2026",
    institution: "DOG / Xunta de Galicia",
    type: "Oficial",
    year: "2026",
    url: "https://www.xunta.gal/dog/Publicados/2026/20260424/AnuncioC3K1-220426-0004_es.html"
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
    ids: [
      "ley-55",
      "ley-44",
      "ley-53",
      "rd-1146",
      "rd-402",
      "rd-bomberos-jubilacion",
      "rd-policia-local-jubilacion",
      "directiva-tiempo",
      "boe-guardias-tjue"
    ]
  },
  {
    title: "Anteproyecto y posición oficial",
    ids: [
      "anteproyecto",
      "ministerio-faq",
      "moncloa-acuerdo",
      "plan-normativo-2026",
      "sanidad-nuevo-estatuto-marco",
      "redaccion-medica-pdf-mayo-2026",
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
      "cgcom-regulacion-especifica",
      "instagram-avances-galicia"
    ]
  },
  {
    title: "Sindicatos firmantes, prensa y Galicia",
    ids: [
      "satse-acuerdo",
      "elpais-acuerdo",
      "elpais-huelga-abril",
      "gaceta-medica-borrador-consejo-ministros",
      "redaccion-medica-texto-perfilado",
      "heraldo-claves",
      "diario-altoaragon",
      "aragondigital-guardias",
      "acordos-galicia-pdf",
      "galiciapress-omega-convenio",
      "europapress-galicia-primaria-acuerdo",
      "xunta-huelga-ap-marzo",
      "dog-galicia-huelga-abril"
    ]
  },
  {
    title: "Comparadores de servicios esenciales",
    ids: ["acuerdo-bomberos-madrid", "acuerdo-bomberos-cm"]
  },
  { title: "Bloque MIR enlazado", ids: ["simeg-mir", "mir-portal", "mir-infografia"] }
];

export const downloads = [
  { label: "Resumen de reivindicaciones", href: "downloads/reivindicaciones_estatuto_medico.md" },
  { label: "Respuesta a titulares", href: "downloads/respuesta_titulares_estatuto_marco.md" }
];
