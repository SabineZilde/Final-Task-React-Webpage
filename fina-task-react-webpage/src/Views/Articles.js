import Breadcrumbs from '../Components/Breadcrumbs';
import { NavLink } from 'react-router-dom';
import articles from '../Data/Articles';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Posts from '../Components/Posts';
import Pagination from '../Components/Pagination';

function Articles() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);

useEffect(() => {
    const fetchPosts = async () => {
        setLoading(true);
        const res = await axios.get('http://localhost:8081/tasks');
        setPosts(res.data);
        setLoading(false);
    }

    fetchPosts();
}, []);

// Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

// Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
                    <Posts posts={currentPosts} loading={loading} />
                    <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
                </div>
            </div>
        </div>
    );
}

export default Articles;
