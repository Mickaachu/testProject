import { extendTheme } from '@chakra-ui/react'

const customTheme = extendTheme({
  // DON'T change the breakpoints.
  breakpoints : {
    sm: '360px',
    md: '768px',
    lg: '1024px',
    d: '1280px',
    wide: '1600px',
    hd: '1900px',
  },

  // you can add more colors here
  colors: {
    primary: '#3DCD58',
    gray: '#F2F2F2',
    link: '#5081FF'
  },


  // dont touch anything below this line
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Georgia, serif",
    mono: "Menlo, monospace",
  },
  space: {
    gutter: '20px',
    gridcol: '108px',
    gridmargin: '202px',
    px: '1px',
    spacer: '40px',
    desktop: {
      spacer: '75px'
    },
  },
  sizes: {
    gutter: '20px',
    gridcol: '108px',
    gridmargin: '202px',
    px: '1px',
    spacer: '40px',
    desktop: {
      spacer: '75px'
    },
    max: 'max-content',
    min: 'min-content',
    full: '100%',
    half: '50%',
    container: {
      desktop: '1516px',
    },
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
})

export default customTheme
