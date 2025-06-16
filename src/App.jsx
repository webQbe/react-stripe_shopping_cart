import NavBar from './components/Navbar'
import { Container } from 'react-bootstrap'   // Import Bootstrap-styled Container
import 'bootstrap/dist/css/bootstrap.min.css' // Import Bootstrap’s core CSS
import './App.css'

function App() {

  return (
    <Container> {/* Centers wrapped content & adds horizontal padding */}

      <NavBar></NavBar> {/* Render NavBar at the top */}

    </Container>
  )
}

export default App
