const PostDetails = ({ post }) => {
    return (
        <div className="post-details">
            <p class="h4">Title: {post.title}</p>
            <p class="h5">Author: {post.author}</p>
            <p class="lead">
                {post.body}
            </p>
            <p>{post.createdAt}</p>
        </div >
    )
}

export default PostDetails;