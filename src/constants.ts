import { QuestionType } from './types';

export const QUIZ_DATA: QuestionType[] = [
  {
    pregunta: "El viaje del despertar se siente diferente para cada alma. Si tuvieras que describir tu estado interno actual con una sola metáfora, ¿cuál sería?",
    opciones: [
      { texto: "Un terremoto que derrumbó todo lo que conocía. Estoy entre los escombros, en un caos y una soledad que a veces me abruma.", puntos: 1 },
      { texto: "Un laboratorio lleno de libros y mapas. Tengo mucha información y entiendo la teoría, pero siento que llevo tiempo dando vueltas en el mismo sitio, sin construir nada real.", puntos: 2 },
      { texto: "La antesala de una coronación. Veo el trono y sé que es mío, pero un miedo profundo o una fuerza invisible me impide dar el paso final para reclamarlo.", puntos: 3 },
      { texto: "Un jardín que empieza a florecer después de un largo invierno. He integrado el pasado y ahora miro el horizonte con paz, asombro y curiosidad por ver qué más puede crecer.", puntos: 4 }
    ]
  },
  {
    pregunta: "El despertar a menudo redefine nuestras relaciones. ¿Cómo describirías tu conexión con la gente y el mundo que te rodeaba (amigos, familia, trabajo)?",
    opciones: [
      { texto: "Siento una desconexión total. Las conversaciones me parecen superficiales y me he quedado muy solo/a. Parece que ya nadie me entiende y duele no encajar.", puntos: 1 },
      { texto: "Ya no resueno con la mayoría, pero en lugar de dolor, siento frustración o cansancio. Me encuentro analizando sus patrones y los míos, pero me aíslo para proteger mi energía.", puntos: 2 },
      { texto: "Me siento atrapado/a entre dos mundos. Parte de mí sabe que debe soltar relaciones o situaciones que me limitan, pero el miedo a las consecuencias o a herir a otros me mantiene en una jaula.", puntos: 3 },
      { texto: "Acepto a cada persona en su propio proceso. Ya no necesito que me entiendan. Me relaciono desde la plenitud y la autenticidad, creando nuevos vínculos alineados y soltando los antiguos con amor.", puntos: 4 }
    ]
  },
  {
    pregunta: "Cada etapa del camino tiene su propio 'dragón' que custodiar. ¿Cuál sientes que es tu mayor desafío interno en este momento?",
    opciones: [
      { texto: "Un torbellino de emociones inmanejable. La ansiedad, la tristeza y la sensación de estar perdido son tan intensas que mi único objetivo es sobrevivir al día a día.", puntos: 1 },
      { texto: "La sensación de que nunca es suficiente. Devoro información (libros, cursos), pero a veces me siento abrumado/a por la cantidad y no sé cómo organizarla toda.", puntos: 2, tag: 'erudito' },
      { texto: "La parálisis por análisis. Siento que ya tengo el conocimiento, pero me he estancado. La frase 'necesito sanar un poco más' es una excusa para no actuar.", puntos: 2, tag: 'paciente' },
      { texto: "El autosabotaje consciente. Sé exactamente lo que tengo que hacer, pero justo en el momento clave, una parte de mí tira del freno de mano.", puntos: 3 },
      { texto: "La complacencia o el miedo a la expansión. He alcanzado un nivel de paz, pero a veces me pregunto si esto es todo, o me da vértigo pensar en qué tan buena puede llegar a ser la vida.", puntos: 4 }
    ]
  },
  {
    pregunta: "El 'hacer' se transforma durante el despertar. ¿Cuál de estas frases describe mejor tu relación actual con la acción y el cambio?",
    opciones: [
      { texto: "¿Acción? Apenas puedo sostenerme en pie. No tengo energía ni claridad para pensar en cambiar nada, solo intento que el vacío no me consuma.", puntos: 1 },
      { texto: "Mi 'acción' principal es el trabajo interno. Medito, escribo, estudio... Estoy enfocado/a en mi proceso de aprendizaje y sanación hacia adentro.", puntos: 2, tag: 'erudito' },
      { texto: "Paso más tiempo planificando que haciendo. Siento que el puente entre mi mundo interno y el externo está roto; sé lo que quiero, pero no lo materializo.", puntos: 2, tag: 'paciente' },
      { texto: "La acción es una guerra civil interna. Cada paso hacia adelante es una lucha intensa contra mi propio miedo. Avanzo un paso y retrocedo dos.", puntos: 3 },
      { texto: "Actúo desde el entusiasmo y la intuición, sin apego al resultado. La acción es una expresión natural de quién soy, un juego de co-creación con la vida.", puntos: 4 }
    ]
  },
  {
    pregunta: "En este punto de tu viaje, ¿qué es lo que más anhelas o buscas?",
    opciones: [
      { texto: "Alivio y un refugio seguro. Solo quiero que el dolor pare y encontrar a alguien que me diga que no estoy loco/a y que hay una salida.", puntos: 1 },
      { texto: "La pieza que falta. Busco esa herramienta o conocimiento final que 'lo arregle todo' y me permita empezar a vivir.", puntos: 2 },
      { texto: "El coraje y la evidencia. Anhelo la certeza para dar el salto y construir la vida que visualizo.", puntos: 3 },
      { texto: "Exploración y asombro. Busco expandir los límites de la alegría y la paz. Quiero descubrir qué más es posible.", puntos: 4 }
    ]
  }
];
