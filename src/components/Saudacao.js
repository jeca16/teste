function Saudacao ({nome}){

    function gerarSaudacao(algumNome){
        return`hello ${algumNome} darling`
    }

    return(
        <>
            {nome && <p> {gerarSaudacao(nome)}</p>}
        </>
    )
}

export default Saudacao