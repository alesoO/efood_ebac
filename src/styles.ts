import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  fontColor: '#E66767',
  backgroundColor: '#FFF8F2',
  white: '#fff',
  backgroundFooter: '#FFEBD9',
  inputTextColor: '#4B4B4B'
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding:0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${colors.backgroundColor};
    color: ${colors.fontColor};
  }
`
export default GlobalStyle

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`
