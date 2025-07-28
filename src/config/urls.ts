export const SECURE_URLS = {
  TORRE_CAIDA: 'https://forms.gle/4c8Aa1xkjcwq9thp9',
  LABORATORIO_ERUDITO: 'https://forms.gle/D2McN5R38x1h7cAp7',
  LABORATORIO_REY_PACIENTE: 'https://forms.gle/D2McN5R38x1h7cAp7',
  TRANSICION_LABORATORIO: 'https://forms.gle/D2McN5R38x1h7cAp7',
  FORJA_REY: 'https://form.typeform.com/to/EsF4Gi2g',
  PARAISO_TERRENAL: '#link-a-la-aplicacion-premium'
} as const;

export const validateUrl = (url: string): boolean => {
  return Object.values(SECURE_URLS).includes(url as any);
};