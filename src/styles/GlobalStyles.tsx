import { Global, css } from '@emotion/react';

const globalStyles = css`

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=DM+Sans:wght@400;500;700&family=Merriweather&display=swap');

  * {
  box-sizing: border-box;
  }

  body,
  html {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
`
function GlobalStyles() {
  return <Global styles={globalStyles} />
}

export default GlobalStyles;