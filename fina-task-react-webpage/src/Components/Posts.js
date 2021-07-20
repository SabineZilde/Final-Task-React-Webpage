import { NavLink } from 'react-router-dom';
import '../App.css';

function Posts({ posts, loading }) {

    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <ul className="list-group mb-4 mt-3">
            {posts.map((post) => {
                return posts.indexOf(post) % 2 === 0 ? (<li key={post.id} className="bkg-gradient-orange" >
                    <div className="row">
                        <div className="col-3">
                            <NavLink to={'/articles/' + post.slug}>
                                <img src={post.images.forArticles} alt="..." className="img-fluid" />
                            </NavLink>
                        </div>
                        <div className="col m-3 mt-4 pt-1">
                            <NavLink to={'/articles/' + post.slug}>
                                <h5>{post.title}</h5>
                            </NavLink>
                            <p>{post.middleText}</p>
                        </div>
                    </div>
                </li>)
                    :
                    (<li key={post.id} className="bkg-gradient-blue">
                        <div className="row">
                            <div className="col m-3 mt-4 ps-5 pt-1">
                                <NavLink to={'/articles/' + post.slug}>
                                    <h5>{post.title}</h5>
                                </NavLink>
                                <p>{post.middleText}</p>
                            </div>
                            <div className="col-3">
                                <NavLink to={'/articles/' + post.slug}>
                                    <img src={post.images.forArticles} alt="..." className="img-fluid" />
                                </NavLink>
                            </div>
                        </div>
                    </li>)
            }
            )
            }
        </ul>
    )
}

export default Posts;