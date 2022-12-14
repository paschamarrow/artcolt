import { createGlobalStyle } from "styled-components";

//VERIFYING COMMIT
export default createGlobalStyle`
  :root {
    --color-dark-taupe: #9F8C76;
    --color-fuchsia: #FF00FF;
    --color-pale-skyblue: #D0D2FF;
    --color-desert-sand: #E3C4A6;
    --color-purple-bluemix: #5C60B2;
    --color-white-creme: #ffffff;
    --color-charcoal-paintcard: #36454f;
    --color-classic-internetblue: #0000ff;
    --font-heading: "Arial Black", Helvetica, sans-serif;
    --font-body: 'Tahoma', Arial, Helvetica, sans-serif;
    --padding-page: 24px;
  }

  /* http://meyerweb.com/eric/tools/css/reset/
      v2.0 | 20110126
      License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      box-sizing: border-box;
      font-size: 100%;
      vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
      display: block;
  }
  body {
      line-height: 1;
  }
  ol, ul {
      list-style: none;
  }
  blockquote, q {
      quotes: none;
  }
  /* Improve media defaults */

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
  blockquote:before, blockquote:after,
  q:before, q:after {
      content: '';
      content: none;
  }

  /* Avoid text overflows */

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
/*

  h1,
h2,
h3,
label,
button {
  color: #fff;
  font-family: var(--font-heading);
  font-size: 32px;
  text-align: center;
}
p,
a,
li,
blockquote,
input {
  font-family: var(--font-body);
}

  input {
    font-size: 24px;
    height: 42px;
    border: 2px solid var(--color-orange);
    border-radius: 4px;
    padding: 0 12px;
  }
`;
