function OutraLista ({itens}){
    return(
        <>
            <h3> listas de livros </h3>
            { 
                itens.map((item, index) =>( 
                    <p key={index}>{item}</p>
                ))}
            
        </>

    )
}

export default OutraLista