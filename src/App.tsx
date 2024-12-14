import React from 'react'
import GlobalStyle, { Container } from './styles'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import { Provider } from 'react-redux'
import { store } from './store'
import Cart from './components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Container>
          <Routes />
        </Container>
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
