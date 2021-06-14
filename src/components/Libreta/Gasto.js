const Gasto = ({ categoria, descripcion, importe }) => {
    return (
        <>
            <span>{categoria}</span>&nbsp;
            <span>{descripcion}</span>&nbsp;
            <span>${importe.toFixed(2)}</span>
        </>
    )
}

export default Gasto;