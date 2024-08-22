import PropTypes from 'prop-types'


function Item ({livro, paginas}){
    return(
        <>
        <li>{livro} - {paginas}</li>
        <p>Sarah J. Maas</p>
        </>
    )
}

Item.propTypes = {
    livro: PropTypes.string.isRequired,
    paginas: PropTypes.number.isRequired,
}

Item.defaultProps = {
    livro: 'faltou o titulo',
    paginas: 0,
}

export default Item