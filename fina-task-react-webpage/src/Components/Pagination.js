import { NavLink } from "react-router-dom";

function Pagination({ postsPerPage, totalPosts, paginate }) {
    const pageNumbers = [];
    
    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    };

    return (
        <nav className="pagination mb-4 d-flex justify-content-center">
            {pageNumbers.map(number => (
                <li key={number} className="page-item">
                    <NavLink onClick={() => paginate(number)} to="/articles" className="page-link">
                        {number}
                    </NavLink>
                </li>
            ))}
        </nav>
    )
}

export default Pagination;