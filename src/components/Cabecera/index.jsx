import styled from "styled-components"
import CampoTexto from "../CampoTexto"

const HeaderEstilizado = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 60px 0;
    img{
        width: 212px;
    }
`

const Cabecera = ({filtro, setFiltro}) =>{
    return <>
        <HeaderEstilizado>
            <img src="img/logo.png" alt="Logo de Space App"/>
            <CampoTexto filtro = {filtro}
                setFiltro={setFiltro}
            />
        </HeaderEstilizado>
    </>
}

export default Cabecera