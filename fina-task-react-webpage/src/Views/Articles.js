import Breadcrumbs from '../Components/Breadcrumbs';
import { NavLink } from 'react-router-dom';
import articles from '../Data/Articles';

function Articles() {
    const bredcrumbPaths = [
        { link: '/', title: 'Home' },
        { title: 'Articles' },
    ];

    const formatedArticles = articles.map((article, index) => {
        return (
            <div className="row">
                <div className="col">
                    {article.image}
                </div>
                <div className="col">
                    {article.title}
                </div>
            </div>
        )
    })

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumbs paths={bredcrumbPaths} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h4>Articles</h4>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item"><NavLink className="page-link" to="/">Previous</NavLink></li>
                            <li className="page-item"><NavLink className="page-link" to="/">1</NavLink></li>
                            <li className="page-item"><NavLink className="page-link" to="/">2</NavLink></li>
                            <li className="page-item"><NavLink className="page-link" to="/">3</NavLink></li>
                            <li className="page-item"><NavLink className="page-link" to="/">Next</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Articles;
