function OutraLista ({itens}){
    return(
        <>
            <h3> listas de livros </h3>
            {itens.length > 0 ? (
                itens.map((item, index) =>( 
                <p key={index}>{item}</p>
            ))) : (
                <p>Nã há ites na lista</p>
            )}
            
        </>
    )
}

export default OutraLista