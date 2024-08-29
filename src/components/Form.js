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
                    <label htmlFor="name"></label>
                    <input type="text" id="name" placeholder="seu nome"></input>
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input type="password" placeholder="sua senha"></input>
                </div>
                <div>
                    <input type="submit" placeholder="cadastrar"></input>
                </div>
            </form>
        </div>
    )
}

export default Form