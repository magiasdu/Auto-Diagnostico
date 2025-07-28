import { DiagnosisKey, ResultContentType } from './types';
import { SECURE_URLS } from './config/urls';

interface AppContent {
  welcome: {
    title: string;
    description: string;
    buttonText: string;
  };
  results: Record<DiagnosisKey, ResultContentType>;
}

export const content: AppContent = {
  welcome: {
    title: "Un espejo para tu alma.",
    description: "Este no es un examen. Es un espejo. Lee cada opción y elige la que haga que tu cuerpo y tu alma digan 'sí, ese soy yo ahora mismo'.<br><strong>Confía en tu primera reacción.</strong>",
    buttonText: "Comenzar"
  },
  results: {
    // TERRITORIO 1
    [DiagnosisKey.TORRE_CAIDA]: {
      titulo: "Tu Diagnóstico: Viajero en la Torre Caída",
      descripcion: "Lo que estás viviendo tiene un nombre: la <strong>Noche Oscura del Alma</strong>. Es el momento más crudo y valiente del viaje, cuando el mundo que conocías se derrumba. Sentirse perdido, solo y abrumado no es una señal de que estés roto; es la prueba de que estás soltando un mundo que ya era demasiado pequeño para ti.<br><br>No estás solo en este exilio. Tu única tarea ahora es sobrevivir, respirar y sentir. Cada lágrima es una limpieza. Cada momento de caos precede a la claridad. Este es el primer paso hacia una libertad que aún no puedes imaginar.",
      ctaTexto: "Necesitas Primeros Auxilios, no Filosofía. Descarga tu Kit.",
      ctaLink: SECURE_URLS.TORRE_CAIDA
    },
    // TERRITORIO 2a
    [DiagnosisKey.LABORATORIO_ERUDITO]: {
      titulo: "Tu Diagnóstico: El Laboratorio del Erudito Apasionado",
      descripcion: "Tu alma está en una fase de <strong>búsqueda y consumo ferviente</strong>. Has cubierto un terreno increíble, devorando libros, cursos y sabiduría para construir una nueva y sólida base. Este hambre de conocimiento es una señal de tu compromiso y es un logro inmenso. ¡Celébralo!<br><br>Sin embargo, puede que ya sientas que el vaso se está llenando. El siguiente paso no es aprender más, sino encontrar un lugar seguro donde empezar a <strong>practicar y encarnar todo lo que sabes</strong>. Es hora de pasar de la biblioteca a la forja.",
      ctaTexto: "Convierte tu Saber en Poder Vivido. Únete al Challenge.",
      ctaLink: SECURE_URLS.LABORATORIO_ERUDITO
    },
    // TERRITORIO 2b
    [DiagnosisKey.LABORATORIO_REY_PACIENTE]: {
      titulo: "Tu Diagnóstico: El Laboratorio del Rey Paciente",
      descripcion: "Estás en una etapa conocida como <strong>'parálisis por análisis'</strong>. Posees una sabiduría inmensa, tienes el mapa y las herramientas, pero te has quedado admirando el paisaje desde la ventana del laboratorio. El conocimiento sin acción se convierte en una jaula dorada, y la frase 'necesito sanar un poco más' es el mantra del estancamiento.<br><br>Sabemos que te sientes frustrado, esperando el momento 'perfecto'. Ese momento es una ilusión. El verdadero poder que anhelas está justo al otro lado del primer paso, por imperfecto que sea.",
      ctaTexto: "La Sanación sin Acción es un Hobby. Rompe la Parálisis Ahora.",
      ctaLink: SECURE_URLS.LABORATORIO_REY_PACIENTE
    },
    // TERRITORIO 2 Híbrido
    [DiagnosisKey.TRANSICION_LABORATORIO]: {
      titulo: "Tu Diagnóstico: En el Umbral del Laboratorio a la Forja",
      descripcion: "Estás en el punto de inflexión más poderoso: el puente entre el saber y el hacer. Has sido tanto el erudito que acumula, como el rey que duda. Reconocer esta dualidad es la clave para integrarla. Ya no eres el que solo aprende, ni el que solo se paraliza. Eres el que está <strong>a punto de actuar con sabiduría</strong>.<br><br>La parálisis está cediendo y la biblioteca de tu alma está ansiosa por manifestar sus tesoros en el mundo real. Estás listo para dejar de planificar la vida y empezar a vivirla.",
      ctaTexto: "Estás Listo. Cruza el Puente a la Acción con Apoyo.",
      ctaLink: SECURE_URLS.TRANSICION_LABORATORIO
    },
    // TERRITORIO 3
    [DiagnosisKey.FORJA_REY]: {
      titulo: "Tu Diagnóstico: La Forja del Rey Creador",
      descripcion: "Bienvenido al fuego de la creación. Estás en la etapa del <strong>'salto de fe'</strong>. Ves el trono, sabes que es tuyo y estás dando los pasos, pero cada avance se siente como una batalla contra tu propio autosabotaje. Este miedo intenso no es una señal de debilidad; es la resistencia final de tu antiguo yo, el Guardián del Trono Roto.<br><br>Cada vez que eliges la acción a pesar del miedo, estás forjando la corona que estás destinado a llevar. La confianza no viene antes del salto, se construye en la caída. Estás más cerca de lo que crees.",
      ctaTexto: "No Necesitas más Mapas, Necesitas un Empuje. Reclama tu Trono.",
      ctaLink: SECURE_URLS.FORJA_REY
    },
    // TERRITORIO 4
    [DiagnosisKey.PARAISO_TERRENAL]: {
      titulo: "Tu Diagnóstico: Arquitecto del Paraíso Terrenal",
      descripcion: "Has llegado a un lugar de paz e integración que muchos solo anhelan. Has aprendido a encarnar tu sabiduría, convirtiendo tu mundo interior en un jardín floreciente. Ya no luchas contra la vida, <strong>bailas con ella en co-creación consciente</strong>.<br><br>Tu viaje ahora no es sobre sanar, sino sobre expandir. La pregunta ya no es '¿cómo arreglo esto?', sino '¿qué tan bueno puede llegar a ser?'. El paraíso no es un destino final, es un nuevo punto de partida. Es hora de encontrar a otros exploradores.",
      ctaTexto: "La Sanación Terminó. La Aventura Comienza. Explora.",
      ctaLink: SECURE_URLS.PARAISO_TERRENAL
    }
  }
};
