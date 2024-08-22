import Item from "./Item"


function list (){
    return (
        <>
            <h1> Minha Lista</h1>
            <ul>
                <Item livro = 'corte de espinhos e rosas' paginas = {434}/>
                <Item livro = 'corte de nevoa e furia' paginas = {658}/>
                <Item livro = 'corte de asas e ruinas' paginas = {682}/>
                <Item livro = 'corte de gelo e estrelas' paginas = {230}/>
                <Item livro = 'corte de chamas prateadas' paginas = {713}/>
                <Item/>
            </ul>
        </>
    )
}

export default list