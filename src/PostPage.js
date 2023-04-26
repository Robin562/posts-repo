import { useStoreActions, useStoreState } from "easy-peasy";
import { Link, useParams } from "react-router-dom";

const PostPage = ({ navigate, posts, setPosts }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  const handleDelete = async (id) => {
    const newList = posts.filter((post) => post.id !== id);
    setPosts(newList);
    navigate("/");
  };

  return (
    <article className="posts">
      {post ? (
        <>
          <h2>{post.title}</h2>
          <p>{post.datetime}</p>
          <p>{post.body}</p>
          <Link to={`/edit/${id}`}>
            <button className="edit-btn">Edit Button</button>
          </Link>
          <button className="delete-btn" onClick={() => handleDelete(post.id)}>
            Delete Post
          </button>
        </>
      ) : (
        <>
          <h2>No posts Found</h2>
          <Link to="/">
            <p style={{ textDecoration: "underline" }}>Visit our home page</p>
          </Link>
        </>
      )}
    </article>
  );
};

export default PostPage;
