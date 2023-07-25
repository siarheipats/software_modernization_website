const NewPost = ({ post }) => {
    return (
        <div className="post-details">
            <h3>Your Post Was Successfully Added.</h3>
            <p class="h4">Title: {post.title}</p>
            <p class="h5">Author: {post.author}</p>
            <p class="lead">
                {post.body}
            </p>
            <p>{post.createdAt}</p>
            <button>Edit</button>
            <button>Delete</button>
        </div >
    )
}

export default NewPost;