
function Noticia(){
    const noticia = {
        titulo : "Curso React 2022",
        descripcion : "Demostracion de desestructuracion de objetos"
    }

    const { titulo, descripcion} = noticia

    return (
        <div className="mi-curso">
            <h1 className='mi-titulo'>Mi noticia: {titulo}</h1>
        </div>
    )
}

export default Noticia