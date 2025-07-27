
export enum DiagnosisKey {
  TORRE_CAIDA = 'Torre Caída',
  LABORATORIO_ERUDITO = 'Laboratorio del Erudito',
  LABORATORIO_REY_PACIENTE = 'Laboratorio del Rey Paciente',
  TRANSICION_LABORATORIO = 'En Transición del Laboratorio del Erudito al del Rey Paciente',
  FORJA_REY = 'Forja del Rey',
  PARAISO_TERRENAL = 'Paraíso Terrenal'
}

export type Tag = 'erudito' | 'paciente';

export interface OptionType {
  texto: string;
  puntos: number;
  tag?: Tag;
}

export interface QuestionType {
  pregunta: string;
  opciones: OptionType[];
}

export interface ResultContentType {
  titulo: string;
  descripcion: string;
  ctaTexto: string;
  ctaLink: string;
}
