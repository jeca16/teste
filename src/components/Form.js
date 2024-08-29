import { useState } from "react"


function Form (){

function cadastrarUsuario (e){
    e.preventDefault()
    alert(`Hello ${name} darling`)
    console.log(`O usuario ${name} foi cadastrado com a senha: ${password}`);
}

const [name, setName] = useState()
const [password, setPassword] = useState()

    return(
        <div>
            <h1>meu cadastro: </h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
<<<<<<< HEAD
                    <label htmlFor="name"></label>
                    <input type="text" id="name" placeholder="seu nome"></input>
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input type="password" placeholder="sua senha"></input>
=======
                    <label htmlFor="name"> nome:</label>
                    <input type="text" id="name" name = 'name' placeholder="seu nome" onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="password">senha: </label>
                    <input type="password" id = 'password' name = 'password' placeholder="sua senha" onChange={(e) => setPassword(e.target.value)}></input>
>>>>>>> 2ec9fde000014d944ea480900e031397acdf39ba
                </div>
                <div>
                    <input type="submit" placeholder="cadastrar"></input>
                </div>
            </form>
        </div>
    )
}

export default Form