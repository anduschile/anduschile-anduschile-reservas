import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Dolores from './components/Dolores'
import Incluye from './components/Incluye'
import Precio from './components/Precio'
import Referencia from './components/Referencia'
import Formulario from './components/Formulario'

function App() {
    return (
        <>
            <Navbar />

            <main id="top">
                <Hero />
                <Dolores />
                <Incluye />
                <Precio />
                <Referencia />
                <Formulario />
            </main>
        </>
    )
}

export default App
