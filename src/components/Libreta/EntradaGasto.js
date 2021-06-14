import { useState } from 'react';
import shortid from 'shortid';

const EntradaGasto = ({ categorias, onSubmit, estadoCompartido }) => {
    const [errores, setErrores] = useState({});
    const [gasto, setGasto] = useState({ id: shortid.generate(), categoria: "", descripcion: "", valor: 0.0 });
    if (!categorias) {
        categorias = [];
    }
    if (estadoCompartido) {
        estadoCompartido.registrar('InputGasto', 'gasto', gasto, setGasto);
    }
    const localOnSubmit = (e) => {
        e.preventDefault();
        let error = false;
        const categoria = e.target.elements["categoria"];
        if (categoria === "") {
            errores.inputCategoria = "La categoria no puede estar vacia";
            error = true;
        }
        const importe = e.target.elements["importe"];
        if (importe < 0.00) {
            errores.inputImporte = "El importe no puede ser negativo";
            error = true;
        }
        const descripcion = e.target.elements["descripcion"];
        if (descripcion === "") {
            errores.inputDescripcion = "La descripcion no puede estar vacia";
            error = true;
        }
        if (!error && onSubmit) {
            onSubmit(e);
        }
        e.target.reset();
    }
    const localOnReset = (e) => {
        setErrores({});
    }
    return (
        <form id='InputGasto' onSubmit={localOnSubmit} onReset={localOnReset}>
            <div className="input-group">
                <label htmlFor='InputCategoria'>Categoria</label>
                <select id='InputCategoria' name="categoria" className={errores.hasOwnProperty('inputCategoria') ?? 'error'}>
                    <option value="">...</option>
                    {
                        categorias.map((categoria) => {
                            return <option key={shortid.generate()} value={categoria}>{categoria}</option>
                        })
                    }
                </select>
            </div>
            <div className="input-group">
                <label htmlFor='InputDescripcion'>Descripci&oacute;n</label>
                <input id='InputDescripcion' type="text" name="descripcion" className={errores.hasOwnProperty('inputDescripcion') ?? 'error'} />
            </div>
            <div className="input-group">
                <label htmlFor='InputImporte' >Importe</label>
                <input id='InputImporte' type="number" name="importe" defaultValue={0.00} step={0.01} className={errores.hasOwnProperty('inputImporte') ?? 'error'} />
            </div>
            <div className="input-group">
                <input type="submit" value="Guardar" />
                <input type="reset" value="Limpiar" />
            </div>
        </form>
    );
}


export default EntradaGasto;