import React, { useState, useEffect } from 'react'

const mensajesPorDefecto = [
    { nombre: "Pepe Lota", mensaje: "Todo bien", like: true, saludo: false },
    { nombre: "Tulio Triviño", mensaje: "Aquí les envío un saludo", like: false, saludo: false }
]
    
const EnvioMensaje = () => {

    const [usuarios, setUsuarios] = useState(mensajesPorDefecto)
    const [nombre, setNombre] = useState("")
    const [mensaje, setMensaje] = useState("")
    const [like, setLike] = useState(false)
    const [saludo, setSaludo] = useState(false)

    useEffect(() => {
        let mensajeCopia = [...usuarios]
        const nuevoMensaje = {
            nombre: "Pataña Triviño",
            mensaje: "Olis",
            like: true,
            saludo: true
        }
        mensajeCopia.push(nuevoMensaje)
        setUsuarios(mensajeCopia)
    }, [])

    const handleNombre = (evento) => {
        setNombre(evento.target.value)
    }

    const handleMensaje = (evento) => {
        setMensaje(evento.target.value)
    }

    const handleLike = (evento) => {
        setLike(!like)
    }

    const handleSaludo = (evento) => {
        setSaludo(!saludo)
    }

    const handleEnviarMensaje = (evento) => {
        const nuevoMensaje = {
            nombre: nombre,
            mensaje: mensaje,
            like: like,
            saludo: saludo
        }
        let mensajeCopia = [...usuarios]
        mensajeCopia.push(nuevoMensaje)
        setUsuarios(mensajeCopia)
    }

    return (
        <>
            <h1>Enviar mensaje</h1>

            <div className="row mt-2">
                <div className="col-6">
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        className="form-control"
                        type="text"
                        onChange={handleNombre}
                        value={nombre}
                        name="nombre"
                        id="nombre"
                    />
                </div>
            </div>

            <div className="row mt-2">
                <div className="col-6">
                    <label htmlFor="nombre">Mensaje</label>
                    <textarea 
                        className="form-control"
                        type="text"
                        onChange={handleMensaje}
                        value={mensaje}
                        name="mensaje"
                        id="mensaje"
                        rows="3"
                    />
                </div>
            </div>

            <div className="row mt-2">
                <div className="col-4">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            checked={like}
                            onChange={handleLike}
                            name="like"
                            id="like" />
                        <label
                            className="form-check-label"
                            htmlFor="like">
                            Dar Like 👍​
                        </label> 
                    </div>
                </div>

                <div className="col-4">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            checked={saludo}
                            onChange={handleSaludo}
                            name="saludo"
                            id="saludo" />
                        <label
                            className="form-check-label"
                            htmlFor="saludo">
                            Enviar Saludo 👋​
                        </label>
                    </div>
                </div>
            </div>

            <div className="row mt-2">
                <div className="col-12 justify-content-start mt-3">
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={handleEnviarMensaje}
                    >
                        Enviar
                    </button>
                </div>
            </div>

            <hr />

            <div className="row mt-5">
                <h1>Mensajes Recibidos</h1>
                <div className="col-12 mt-2">
                    <table className="table table-stripped">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Reacciones</th>
                                <th>Mensaje</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map((usuario) => {
                                return (
                                    <tr>
                                        <td>{usuario.nombre}</td>
                                        <td>
                                            {usuario.like && '👍​'}
                                            {usuario.saludo && '👋​'}
                                            {!usuario.like && !usuario.saludo && '<Ninguno>'}
                                        </td>
                                        <td>{usuario.mensaje}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>    
    )
}

export default EnvioMensaje