import Page from "./pageServicios"
import { UserInterface } from "./user"

const CardTest: React.FC<UserInterface>=({titulo, descripcion, icono}) => {
    return (
        <Page
            titulo = {titulo}
            descripcion = {descripcion}
            icono = {icono}
        ></Page>
    )
}


export default CardTest