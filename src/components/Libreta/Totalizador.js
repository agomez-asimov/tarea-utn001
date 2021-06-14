import { useState } from 'react';


const Totalizador = ({ estadoCompartido }) => {
    const [total, setTotal] = useState(0)
    if (estadoCompartido) {
        estadoCompartido.registrar('totalizador', 'total', total, setTotal)
    }
    return (
        <>
            <span>Total</span>&nbsp;
            <span>${total}</span>
        </>
    );
}

export default Totalizador;