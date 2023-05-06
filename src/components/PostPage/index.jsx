import './style.scss';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useStoreState, useStoreActions } from 'easy-peasy';

const PostPage = () => {
  const { id } = useParams();
  const getPostById = useStoreState((state) => state.getPostById);
  const deletePost = useStoreActions((actions) => actions.deletePost);
  const post = getPostById(id);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    deletePost(id);
    navigate('/');
  };

  return (
    <main>
      <article className="post">
        {post && (
          <>
            <h2 className="post__title">{post.title}</h2>
            <p className="post__date">{post.datetime}</p>
            <p className="post__body">{post.body}</p>
            <Link to={`/posts/edit/${post.id}`}>
              <button
                className="btn btn--edit"
                style={{ marginRight: '1.5rem' }}
              >
                Edit Post
              </button>
            </Link>
            <button
              className="btn btn--delete"
              onClick={() => handleDelete(post.id)}
            >
              Delete Post
            </button>
          </>
        )}
        {!post && (
          <>
            <h2 className="post__title">Post not Found</h2>
            <p>Well, that's disappointing</p>
            <p style={{ textDecoration: 'underline', marginTop: '2rem' }}>
              <Link to="/">Visit Our Homepage</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
};

export default PostPage;
