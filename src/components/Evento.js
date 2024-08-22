import Button from "./Button"

function Evento ({frase}){

function meuEvento (){
    alert (`${frase}`)
    // console.log();
}

function segundoEvento(){
    console.log('ativando o segundo evento');
}

    return (
        <div>
            <p>Clique aqui </p>
            <Button event = {meuEvento} text = " primeiro evento"/>
            <Button event = {segundoEvento} text = " segundo evento"/>

        </div>
    )
}

export default Evento