import styled, {css, createGlobalStyle} from 'styled-components'

export {css, styled}; // huh?

export const theme = {
    colors: {
        "themePrimary": "#00FF41",
        "themeLighterAlt": "#f5fff7",
        "themeLight": "#b3ffc6",
        "themeTertiary": "#66ff8c",
        "themeSecondary": "#1fff57",
        "themeDarkAlt": "#00e639",
        "themeDark": "#00c230",
        "themeDarker": "#008f24",
        "neutralDarkerAlt": "#0c0208",
        "neutralDarker": "#0c0208",
        "neutralDark": "#0c0207",
        "neutralQuaternaryAlt": "#0b0207",
        "neutralQuaternary": "#0a0206",
        "neutralTertiaryAlt": "#0a0106",
        "neutralTertiary": "#c8c8c8",
        "neutralSecondary": "#d0d0d0",
        "neutralPrimaryAlt": "#dadada",
        "neutralPrimary": "#ffffff",
        "neutralWhite": "#f4f4f4",
        "backgroundWhite": "#f8f8f8",
        "background": "#0D0208", // background
        "redSalsa": "#fd3a4a",
        "iceberg":"#71a6d2",
        "pistachio": "#93c572",
        "cetaceanBlue":"#001440"
    },
};

// border box: to exclude padding from the weight/height dimensions of a div.
const reset = () => `
html {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: ${theme.colors.backgroundWhite};

}

*, *::before, *::after {
  box-sizing: inherit;
}

body {
    font-family: Sk-Modernist-Regular,monospace;
    letter-spacing: -0.030em;
    font-size: 1em;
    line-height: 1.15em;
    -webkit-font-smoothing: antialiased;

}

::selection {
  background-color: ${theme.colors.themeLight};
}

a.anchor, a.anchor:hover, a.anchor:link {
  background: none !important;
}

p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

}
`;

export const GlobalStyle = createGlobalStyle`
${reset()}
`;
