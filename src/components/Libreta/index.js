import shortid from "shortid";
import EntradaGasto from "./EntradaGasto";
import ListaGasto from "./ListaGasto";
import Totalizador from "./Totalizador";

const CATEGORIAS = [
    "Hogar",
    "Educación",
    "Misceláneos",
    "Salud"
]

const Libreta = () => {
    const estadoCompartido = {
        registrar: (componente, estado, lector, escritor) => {
            if (!estadoCompartido.hasOwnProperty(componente)) {
                estadoCompartido[componente] = {};
            }
            estadoCompartido[componente][estado] = [lector, escritor];
        },
        getEstado: (componente, estado) => {
            if (!estadoCompartido.hasOwnProperty(componente)) {
                return null;
            } else {
                return estadoCompartido[componente][estado];
            }
        }
    }
    const onGastoSubmit = (e) => {
        const form = e.target;
        const gasto = {
            id: shortid.generate(),
            categoria: form.elements["categoria"].value,
            descripcion: form.elements["descripcion"].value,
            importe: form.elements["importe"].value * 1
        }
        console.log(gasto);
        const [gastos, setGastos] = estadoCompartido.getEstado('listaGastos', 'gastos');
        const [total, setTotal] = estadoCompartido.getEstado('totalizador', 'total');
        setGastos([...gastos, gasto]);
        setTotal(total + gasto.importe);
    }
    return (
        <>
            <EntradaGasto categorias={CATEGORIAS} estadoCompartido={estadoCompartido} onSubmit={onGastoSubmit} />
            <ListaGasto estadoCompartido={estadoCompartido} />
            <Totalizador estadoCompartido={estadoCompartido} />
        </>
    )
}

export default Libreta;