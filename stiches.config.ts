// stitches.config.ts
import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      gray400: 'gainsboro',
      gray500: 'lightgray',
    yellow100:"#e4a95114",
      yellow900: "#E4A951"
    },

  },
  media: {
    bp1: '(min-width: 480px)',
  },
  utils: {
    marginX: (value:any) => ({ marginLeft: value, marginRight: value }),
  },
});