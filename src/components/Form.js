function Form (){

function cadastrarUsuario (e){
    e.preventDefault()
    alert('Hello feyre darling')
}

    return(
        <div>
            <h1>meu cadastro: </h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="seu nome"></input>
                </div>
                <div>
                    <input type="submit" placeholder="cadastrar"></input>
                </div>
            </form>
        </div>
    )
}

export default Form