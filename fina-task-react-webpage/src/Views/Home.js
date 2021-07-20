import '../Assets/CSS/Carousel.css';
import { NavLink } from 'react-router-dom';
import articles from '../Data/Articles';

function Home() {
    const mostRecentArticles = articles.filter((article) => {
        return article.id <= 3;
    });

    const articleCards = mostRecentArticles.map((article, index) => {
        return (
            <div className="col" key={index}>
                <div className="card mb-3" style={{ backgroundColor: 'ivory' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={article.image} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h6 className="card-title">
                                    <NavLink to={'/articles/' + article.slug}>
                                        {article.title}
                                    </NavLink>
                                </h6>
                                <p className="card-text">{article.shortText}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    });

    return (
        <div className="container-fluid">
            <div className="row" style={{ backgroundColor: 'darkorange' }}>
                <div className="col-3 text-center mt-5">
                    <div className="row">
                        <div className="col">
                            <h4>Greg Dunn Neuro Art</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>Through Jan 2nd, 2021</p>
                        </div>
                    </div>
                </div>
                <div className="col-9 p-0">
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://www.gregadunn.com/wp-content/uploads/2012/05/Drosophila-Brain.jpg" className="d-block w-100" alt="Drosophila Brain" />
                            </div>
                            <div className="carousel-item">
                                <img src="https://www.gregadunn.com/wp-content/uploads/2014/11/Cortical-Columns-medium-no-watermark.jpg" className="d-block w-100" alt="Cortical Columns" />
                            </div>
                            <div className="carousel-item">
                                <img src="https://www.gregadunn.com/wp-content/uploads/2018/09/Neurogenesis-I-final.jpg" className="d-block w-100" alt="Neurogenesis I" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="row pt-4 ps-3" style={{ backgroundColor: 'lightgrey' }}>
                <div className="col">
                    <h4>Most recent articles</h4>
                </div>
            </div>
            <div className="row p-3 pb-5" style={{ backgroundColor: 'lightgrey' }}>
                {articleCards}
            </div>
        </div>
    );
}

export default Home;
