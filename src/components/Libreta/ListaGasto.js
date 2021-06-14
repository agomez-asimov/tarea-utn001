import { useState } from 'react';
import Gasto from './Gasto';

const ListaGasto = ({ valores, estadoCompartido }) => {
    const [gastos, setGastos] = useState(valores || []);
    if (estadoCompartido) {
        estadoCompartido.registrar('listaGastos', 'gastos', gastos, setGastos);
    }
    return (
        <ul id="ListGasto">
            {
                gastos.map(({ id, categoria, descripcion, importe }) => {
                    return (
                        <li key={id} id={id}>
                            <Gasto categoria={categoria} descripcion={descripcion} importe={importe} />
                        </li>
                    )
                })
            }
        </ul>
    );
}

export default ListaGasto;