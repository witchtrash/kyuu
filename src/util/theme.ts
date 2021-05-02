const palette = {
  // https://coolors.co/ffadad-ffd6a5-fdffb6-caffbf-9bf6ff-a0c4ff-bdb2ff-ffc6ff-fffffc-110213
  lightPink: {
    name: 'Light Pink',
    hex: '#ffadad',
    rgb: [255, 173, 173],
    cmyk: [0, 32, 32, 0],
    hsb: [0, 32, 100],
    hsl: [0, 100, 84],
    lab: [79, 30, 12],
  },
  champagne: {
    name: 'Deep Champagne',
    hex: '#ffd6a5',
    rgb: [255, 214, 165],
    cmyk: [0, 16, 35, 0],
    hsb: [33, 35, 100],
    hsl: [33, 100, 82],
    lab: [88, 8, 30],
  },
  lemon: {
    name: 'Lemon Yellow Crayola',
    hex: '#fdffb6',
    rgb: [253, 255, 182],
    cmyk: [1, 0, 29, 0],
    hsb: [62, 29, 100],
    hsl: [62, 100, 86],
    lab: [98, -12, 35],
  },
  tea: {
    name: 'Tea Green',
    hex: '#caffbf',
    rgb: [202, 255, 191],
    cmyk: [21, 0, 25, 0],
    hsb: [110, 25, 100],
    hsl: [110, 100, 87],
    lab: [95, -28, 25],
  },
  celeste: {
    name: 'Celeste',
    hex: '#9bf6ff',
    rgb: [155, 246, 255],
    cmyk: [39, 4, 0, 0],
    hsb: [185, 39, 100],
    hsl: [185, 100, 80],
    lab: [92, -25, -13],
  },
  babyBlue: {
    name: 'Baby Blue Eyes',
    hex: '#a0c4ff',
    rgb: [160, 196, 255],
    cmyk: [37, 23, 0, 0],
    hsb: [217, 37, 100],
    hsl: [217, 100, 81],
    lab: [79, 2, -33],
  },
  blurple: {
    name: 'Maximum Blue Purple',
    hex: '#bdb2ff',
    rgb: [189, 178, 255],
    cmyk: [26, 30, 0, 0],
    hsb: [249, 30, 100],
    hsl: [249, 100, 85],
    lab: [76, 20, -37],
  },
  mauve: {
    name: 'Mauve',
    hex: '#ffc6ff',
    rgb: [255, 198, 255],
    cmyk: [0, 22, 0, 0],
    hsb: [300, 22, 100],
    hsl: [300, 100, 89],
    lab: [86, 30, -20],
  },
  powder: {
    name: 'Baby Powder',
    hex: '#fffffc',
    rgb: [255, 255, 252],
    cmyk: [0, 0, 1, 0],
    hsb: [60, 1, 100],
    hsl: [60, 100, 99],
    lab: [100, -1, 1],
  },
  xiketic: {
    name: 'Xiketic',
    hex: '#110213',
    rgb: [17, 2, 19],
    cmyk: [11, 89, 0, 93],
    hsb: [293, 89, 7],
    hsl: [293, 81, 4],
    lab: [2, 7, -6],
  },
};

type Color = keyof typeof palette;

const rgba = (color: Color, alpha?: number): string => {
  const rgb = palette[color].rgb;

  return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha ?? 1})`;
};

const pastel = (): string => {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 90%, 90%)`;
};

const hue = (color: Color, amount: number): string => {
  const hsl = palette[color].hsl;
  const h = Math.max(0, Math.min(hsl[0] + amount, 360));

  return `hsl(${h}, ${hsl[1]}%, ${hsl[2]}%)`;
};

const saturation = (color: Color, amount: number): string => {
  const hsl = palette[color].hsl;
  const s = Math.max(0, Math.min(hsl[1] + amount, 100));

  return `hsl(${hsl[0]}, ${s}%, ${hsl[2]}%)`;
};

const luminescence = (color: Color, amount: number): string => {
  const hsl = palette[color].hsl;
  const l = Math.max(0, Math.min(hsl[2] + amount, 100));

  return `hsl(${hsl[0]}, ${hsl[1]}%, ${l}%)`;
};

export const theme = {
  palette,
  fn: {
    rgba,
    pastel,
    hue,
    saturation,
    luminescence,
  },
};

export type Theme = typeof theme;
