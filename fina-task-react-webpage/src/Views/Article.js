import Breadcrumbs from '../Components/Breadcrumbs';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Article() {
    const { articleSlug } = useParams();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [largeImage, setLargeImage] = useState();

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('http://localhost:8082/tasks');
            setPosts(res.data);
            setLoading(false);
        }

        fetchPosts();
    }, []);

    const filteredPage = posts.filter((post) => {
        return articleSlug === post.slug
    });

    const bredcrumbTitle = filteredPage.map((property) => {
        return property.title
    })

    const bredcrumbPaths = [
        { link: '/', title: 'Home' },
        { link: '/articles', title: 'Articles' },
        { title: bredcrumbTitle },

    ];

    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <div className="container-fluid" style={{ backgroundColor: 'lightgrey' }}>
            <div className="row mx-5">
                <div className="col">
                    <Breadcrumbs paths={bredcrumbPaths} />
                </div>
            </div>
            <div className="row mx-5">
                <div className="col">
                    <h4>Article</h4>
                </div>
            </div>

            {filteredPage.map((element) => {
                return (
                    <div className="row mx-5">
                        <div className="col-4 mb-5">
                            <img src={element.images.forArticles} className="img-fluid" alt="..." />
                            <div className="row px-1">
                                {element.images.forGallery.map((image) => {
                                    return (
                                        <div className="col-4 mt-3 px-2">
                                            <img src={image} className="img-fluid" alt="..." />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="col mb-5">
                            <h4>{element.title}</h4>
                            <p>{element.longText}</p>
                        </div>
                    </div>

                )
            })}
        </div>
    )
}

export default Article;