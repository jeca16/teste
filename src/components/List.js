import Item from "./Item"


function list (){
    return (
        <>
            <h1> Minha Lista</h1>
            <ul>
                <Item livro = 'corte de espinhos e rosas'/>
                <Item livro = 'corte de chamas e furia'/>
                <Item livro = 'corte de asas e ruinas'/>
                <Item livro = 'corte de gelo e estrelas'/>
                <Item livro = 'corte de chamas prateadas'/>
            </ul>
        </>
    )
}

export default list