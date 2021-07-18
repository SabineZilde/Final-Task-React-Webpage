function Posts({ posts, loading }) {

    if (loading) {
        return <h2>Loading...</h2>
    }
    // const image = posts.map((post) => {
    //     return `https://` + post.image
    // })


    return (
        <ul className="list-group mb-4">
            {posts.map(post => (
                <li key={post.id} className="list-group-item"> 
                    <div className="row">
                        <div className="col-2">
                            <img src={post.image} alt="..." className="img-fluid"/>
                        </div>
                        <div className="col">
                            <h5>{post.title}</h5>
                            <p>{post.middleText}</p>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default Posts;