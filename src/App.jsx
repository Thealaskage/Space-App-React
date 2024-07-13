import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Cabecera from "./components/Cabecera"
import BarraLateral from "./components/BarraLateral"
import Banner from "./components/Banner"
import banner from "./assets/banner.png"
import Galeria from "./components/Galeria"
import fotos from "./fotos.json"
import { useState, useEffect } from "react"
import ModalZoom from "./components/ModalZoom"
import Pie from "./components/Pie"

const FondoGradiente = styled.div`
background: linear-gradient(175deg, #041833 4.16%, #04244F 48%,
#154580 96.76%);
width: 100%;
min-height: 100vh;
box-sizing: border-box;
`

const AppContainer = styled.div`
width: 100%;
max-width: 100%;
margin: 0 auto;
`

const MainContainer = styled.main`
display: flex;
gap: 24px;
`

const ContenidoGaleria = styled.section`
display: flex;
flex-direction: column;
flex-grow: 1;
`
const App = () =>  {
const [fotosGaleria, setFotosGaleria] = useState(fotos)
const [filtro, setFiltro] = useState('')
const [tag, setTag] = useState(0)
const [fotoSeleccionada,setFotoSeleccionada]= useState(null)

useEffect(() => {
  const fotosFiltradas = fotos.filter(foto => {
    const filtroPorTag = !tag || foto.tagId === tag;
    const filtroPorTitulo = !filtro || foto.titulo.toLowerCase().includes(filtro.toLowerCase())
    return filtroPorTag && filtroPorTitulo
  })
  setFotosGaleria(fotosFiltradas)
}, [filtro, tag])

const alAlternarFavorito = (foto) => {
if(foto.id === fotoSeleccionada?.id){
  setFotoSeleccionada({
    ...fotoSeleccionada,
    favorita: !fotoSeleccionada.favorita
  })
}
  setFotosGaleria(fotosGaleria.map( fotoGaleria => {
    return{
      ...fotoGaleria,
      favorita: fotoGaleria.id === foto.id ? !fotoGaleria.favorita : fotoGaleria.favorita
    }
  }))
}
  return (
    <>
      <FondoGradiente>
        <GlobalStyles/>
        <AppContainer>
        <Cabecera
          filtro= {filtro}
          setFlitro={setFiltro}
          />
          <MainContainer>
            <BarraLateral/>
            <ContenidoGaleria>
              <Banner texto="La galería más completa de fotos del espacio"
              backgroundImage={banner} />
              <Galeria alSeleccionarFoto={foto=>setFotoSeleccionada(foto)} 
              fotos={fotosGaleria}
              alAlternarFavorito={alAlternarFavorito}
              setTag={setTag}/>
            </ContenidoGaleria>
          </MainContainer>
        </AppContainer>
        <ModalZoom foto={fotoSeleccionada} 
        alCerrar={() => setFotoSeleccionada(null)}
        alAlternarFavorito={alAlternarFavorito}/>
        <Pie/>
      </FondoGradiente>
    </>
  )
}

export default App
