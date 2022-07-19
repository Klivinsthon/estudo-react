import { Fragment, useState } from "react"

export default function Form() {
    const [name, setName] = useState("")

    function adicionarNome(e) {
        setName(e.currentTarget.value)
        document.getElementById("result").value = name
    }

    return (
        <Fragment>
            <form>
                <label htmlFor="name">Nome:</label>
                <input type="text" id="name" name="name" onChange={adicionarNome} onBlur={adicionarNome} />
                <span>Resultado:</span>
                <input type="text" id="result" name="result" disabled />
            </form>
        </Fragment>
    )
}