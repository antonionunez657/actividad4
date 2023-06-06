import Page from './page'
import { UserInterface } from '@/Interfaces/user'
const CardServicios: React.FC<UserInterface>=({titulo, descripcion, icono}) => {
    return (
        <Page
            titulo = {titulo}
            descripcion = {descripcion}
            icono = {icono}
        ></Page>
    )
}
export default CardServicios
