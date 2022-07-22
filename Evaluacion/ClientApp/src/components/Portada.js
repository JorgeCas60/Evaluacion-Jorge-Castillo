import React, { useState, useEffect } from 'react'
import imagen from '../assets/images/imagen.png'

const Portada = () => {
    return (
        <>
            <div className="row">
                <div className="col-6">
                    <div className="card h-100">
                        <img src={imagen} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Mi Equipo - Colo Colo</h5>
                            <p className="card-text">Una imagen de mi equipo favorito.</p>
                        </div>
                    </div>
                </div>

                <div className="col-6 text-center">
                    <h1>Jorge Castillo</h1>
                    <p>
                        Soy una persona proactiva y dinámica, acostumbrado a solucionar problemas e imprevistos de
                        manera autónoma, sin necesidad de una supervisión permanente. Tengo una gran capacidad de
                        coordinación, que me permite simultanear de forma satisfactoria diferentes tareas, dando
                        respuesta tanto a las necesidades de los profesionales de la empresa como a las demandas de los
                        clientes.

                    </p>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-12">
                    <h1>Habilidades</h1>
                    <ul className="list-group">
                        <li className="list-group-item">Trabajar con anticipación.</li>
                        <li className="list-group-item">Priorizar el trabajo.</li>
                        <li className="list-group-item">Trabajar en equipo.</li>
                    </ul>
                </div>
            </div>
        </>    
    )
}

export default Portada