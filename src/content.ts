import { DiagnosisKey, ResultContentType } from './types';

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
    description: "Este no es un examen. Es un espejo. Lee cada opción y elige la que haga que tu corazón y tus entrañas digan 'sí, ese soy yo ahora mismo'.<br><strong>Confía en tu primera reacción.</strong>",
    buttonText: "Comenzar"
  },
  results: {
    [DiagnosisKey.TORRE_CAIDA]: {
      titulo: "Tu Diagnóstico: Viajero en la Torre Caída",
      descripcion: "Estás en el momento más crudo y valiente del viaje: el derrumbe de lo viejo. Sentirse perdido, solo y abrumado es una señal de que estás soltando un mundo que ya no te servía. <strong>No estás roto, estás renaciendo entre los escombros.</strong><br>Tu única tarea ahora es sobrevivir, respirar y saber que no estás solo. Cada sentimiento es válido. Este es el primer paso hacia una libertad que aún no puedes imaginar.",
      ctaTexto: "Descarga tu Kit de Primeros Auxilios",
      ctaLink: "#torre-caida-link"
    },
    [DiagnosisKey.LABORATORIO_ERUDITO]: {
      titulo: "Tu Diagnóstico: El Laboratorio del Erudito",
      descripcion: "Has cubierto un terreno increíble. Tu alma ha estado devorando conocimiento para construir una nueva y sólida base. Has acumulado mapas, herramientas y sabiduría. ¡Eso es un logro inmenso!<br>Ahora, el siguiente paso no es aprender más, sino encontrar un lugar seguro para empezar a <strong>practicar y encarnar todo lo que sabes</strong>. Es hora de convertir el conocimiento en poder vivido.",
      ctaTexto: "Convierte tu Saber en Poder",
      ctaLink: "#laboratorio-erudito-link"
    },
    [DiagnosisKey.LABORATORIO_REY_PACIENTE]: {
      titulo: "Tu Diagnóstico: El Laboratorio del Rey Paciente",
      descripcion: "Posees una sabiduría inmensa. Tienes el mapa, las herramientas y la brújula, pero te has quedado admirando el paisaje desde la ventana del laboratorio. El conocimiento sin acción se convierte en una <strong>jaula dorada</strong>.<br>Sabemos que te sientes estancado, esperando el momento perfecto. Ese momento es una ilusión. El verdadero poder está en el primer paso, por imperfecto que sea.",
      ctaTexto: "Rompe la Parálisis Ahora",
      ctaLink: "#laboratorio-rey-paciente-link"
    },
    [DiagnosisKey.TRANSICION_LABORATORIO]: {
      titulo: "Tu Diagnóstico: En Transición del Laboratorio",
      descripcion: "Estás en el umbral más excitante: el puente entre el saber y el hacer. Has sido tanto el erudito que acumula conocimiento como el rey que duda en actuar. Reconocer esta dualidad es la clave para integrarla.<br>Estás listo para dejar de planificar la vida y <strong>empezar a vivirla</strong>. La parálisis está cediendo y la sabiduría que has acumulado está ansiosa por manifestarse en el mundo real.",
      ctaTexto: "Cruza el Puente a la Acción",
      ctaLink: "#transicion-laboratorio-link"
    },
    [DiagnosisKey.FORJA_REY]: {
      titulo: "Tu Diagnóstico: La Forja del Rey",
      descripcion: "Estás en el fuego de la creación. Ves el trono, sabes que es tuyo y estás dando los pasos para reclamarlo, pero cada paso es una batalla. Este autosabotaje y miedo no son señales de debilidad, sino la <strong>resistencia final de tu antiguo yo</strong>.<br>Cada vez que eliges la acción a pesar del miedo, estás forjando la corona que estás destinado a llevar. Estás más cerca de lo que crees.",
      ctaTexto: "Reclama tu Trono",
      ctaLink: "#forja-rey-link"
    },
    [DiagnosisKey.PARAISO_TERRENAL]: {
      titulo: "Tu Diagnóstico: El Paraíso Terrenal",
      descripcion: "Has llegado a un lugar de paz e integración que muchos solo sueñan. Has convertido tu mundo interior en un jardín floreciente y ahora actúas desde la plenitud y la gracia. <strong>Ya no luchas contra la vida, bailas con ella.</strong><br>Tu viaje ahora no es sobre sanar, sino sobre expandir. ¿Qué nuevos niveles de alegría, creación y asombro puedes descubrir? El paraíso no es un destino final, es un punto de partida.",
      ctaTexto: "Explora Nuevos Horizontes",
      ctaLink: "#paraiso-terrenal-link"
    }
  }
};
