import { useParams } from "react-router-dom";
import Breadcrumbs from '../Components/Breadcrumbs';

function About() {
    const bredcrumbPaths = [
        { link: '/', title: 'Home' },
        { link: '/categories', title: 'Categories' },
        // { link: `/categories/${category.id}`, title: category.title },
        // { title: product.title },
    ]
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumbs paths={bredcrumbPaths} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h4>About Us</h4>
                </div>
            </div>
        </div>
    );
}

export default About;
