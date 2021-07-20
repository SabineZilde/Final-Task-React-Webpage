import Breadcrumbs from '../Components/Breadcrumbs';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { SRLWrapper } from "simple-react-lightbox";

function Article() {
    const { articleSlug } = useParams();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

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

    const imageArray = filteredPage.map((i) => {
        return i.images.forGallery[0]
    })

    const [largeImage, setLargeImage] = useState(imageArray[0]);

    console.log(imageArray[0])

    const images = filteredPage.map((i) => {
        return i.images.forGallery.map((j, index) => {
            return (
                <div className="col-4 mt-3 px-2" key={index}>
                    <a href={j}>
                        <img src={j} className="img-fluid" alt="..." onMouseOver={() => setLargeImage(j)} />
                    </a>
                </div>
            )
        })
    });

    const paragraph = filteredPage.map((property) => {
        return property.longText
    });

    const bredcrumbTitle = filteredPage.map((property) => {
        return property.title
    });

    const bredcrumbPaths = [
        { link: '/', title: 'Home' },
        { link: '/articles', title: 'Articles' },
        { title: bredcrumbTitle },

    ];

    if (loading) {
        return <h2>Loading...</h2>
    };

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

            <div className="row mx-5">

                <div className="col-4 mb-5">
                    <img src={largeImage} className="img-fluid" alt=" Loading..." />
                    <SRLWrapper>
                        <div className="row px-1">
                            {images}
                        </div>
                    </SRLWrapper>
                </div>

                <div className="col mb-5">
                    <h4>{bredcrumbTitle}</h4>
                    <p>{paragraph}</p>
                    <p>{paragraph}</p>
                </div>
            </div>


            {/* {filteredPage.map((element) => {
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
            })} */}
        </div>
    )
}

export default Article;