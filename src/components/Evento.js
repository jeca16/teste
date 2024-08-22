function Evento ({frase}){

function meuEvento (){
    alert (`${frase}`)
    // console.log();
}

    return (
        <div>
            <p>Clique aqui </p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Evento