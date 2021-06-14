const Gasto = ({ categoria, descripcion, importe }) => {
    return (
        <>
            <span>{categoria}</span>&nbsp;
            <span>{descripcion}</span>&nbsp;
            <span>${importe}</span>
        </>
    )
}

export default Gasto;