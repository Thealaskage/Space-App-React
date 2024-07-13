import Titulo from "../Titulo"
import Tags from "./Tags"
import Populares from "./Populares"
import styled from "styled-components"
import Imagen from "./Imagen"

const GaleriaContainer = styled.div`
display: flex;
gap: 24px;

`
const SeccionFluida = styled.section`
flex-grow: 1;
`
const ImagenesContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`

const Galeria = ({fotos=[], alSeleccionarFoto, alAlternarFavorito, setTag}) => {
    return (
        <>
        <Tags setTag={setTag}/>
        <GaleriaContainer>
            <SeccionFluida>
                <Titulo>Navegue por la galería</Titulo>
                <ImagenesContainer>
                    {fotos.map(foto => <Imagen
                        alSolicitarZoom={alSeleccionarFoto}
                        key={foto.id}
                        foto={foto}
                        alAlternarFavorito={alAlternarFavorito} />)
                    }
                </ImagenesContainer>
            </SeccionFluida>
            <Populares />
        </GaleriaContainer>
    </>
    )
}

export default Galeria