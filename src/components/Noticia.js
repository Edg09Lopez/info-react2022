
function Noticia(props){
    const noticia = {
        titulo : "Curso React 2022",
        descripcion : "Demostracion de desestructuracion de objetos"
    }

    const { titulo, descripcion} = props

    return (
        <div className="mi-curso">
            <h1 className='mi-titulo'>Mi noticia: {titulo} - {descripcion}</h1>
        </div>
    )
}

export default Noticia