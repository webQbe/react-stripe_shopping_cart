import NavBar from './components/Navbar'
import { Container } from 'react-bootstrap'   // Import Bootstrap-styled Container
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cancel from './pages/Cancel'
import Store from './pages/Store'
import Success from './pages/Success'
import 'bootstrap/dist/css/bootstrap.min.css' // Import Bootstrap’s core CSS
import './App.css'

function App() {

  return (
    <Container> {/* Centers wrapped content & adds horizontal padding */}

      <NavBar></NavBar> {/* Render NavBar at the top */}

      <BrowserRouter> {/* Wrap the app with a router provider */}
        <Routes>      {/* container for defining multiple routes */}
          {/* Define URL paths & what React component to show */}
          <Route index element={ <Store /> } />            {/* Home page (the store front) */}
          <Route path="success" element={ <Success /> } /> {/* After successful Stripe payment */}
          <Route path="cancel" element={ <Cancel /> } />   {/* After Stripe payment is cancelled */}
          {/* The index prop is shorthand for path="/" */}
        </Routes>
      </BrowserRouter>

    </Container>
  )
}

export default App
