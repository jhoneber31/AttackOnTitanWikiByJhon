
export const Pagination = ({number, increment, decrement}) => {

  return (
    <ul className="pagination justify-content-center mt-4">
        <li className="page-item">
          <span 
            role="button"
            aria-hidden="true" 
            className={`page-link ${number === 1 ? "disabled" : ''}`}
            onClick={decrement}
          >&laquo;</span>
        </li>
        <li className="page-item page-link">{number}</li>
        <li className="page-item">
          <span 
            role="button"
            aria-hidden="true"
            className={`page-link ${number === 11 ? "disabled" : ''}`}
            onClick={increment}
          >&raquo;</span>
        </li>
    </ul>
  )
}
