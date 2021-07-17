import { NavLink } from 'react-router-dom';

function Breadcrumbs({ paths }) {

    const links = paths.map((path, index) => {
        if (path.link) {
            return (
                <li className="breadcrumb-item" key={index}>
                    <NavLink to={path.link}>
                        {path.title}
                    </NavLink>
                </li>
            )
        }
        return (
            <li className="breadcrumb-item active" key={index}>
                {path.title}
            </li>
        )
    });

    return (
        <nav aria-label="breadcrumb ">
            <ol className="breadcrumb mt-3 text-muted fw-lighter">
                {links}
            </ol>
        </nav>
    )
}

export default Breadcrumbs;