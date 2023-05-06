import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { useStoreActions, useStoreState } from 'easy-peasy';

const EditPost = () => {
  const { id } = useParams();
  const editPost = useStoreActions((actions) => actions.editPost);
  const getPostById = useStoreState((state) => state.getPostById);
  const post = getPostById(id);
  const editTitle = useStoreState((state) => state.editTitle);
  const editBody = useStoreState((state) => state.editBody);
  const setEditTitle = useStoreActions((actions) => actions.setEditTitle);
  const setEditBody = useStoreActions((actions) => actions.setEditBody);

  const navigate = useNavigate();

  const handleEdit = (id) => {
    const updatedPost = {
      id,
      datetime: format(new Date(), 'MMMM dd, yyyy pp'),
      title: editTitle,
      body: editBody,
    };
    editPost(updatedPost);
    navigate(`/posts/${id}`);
  };

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);

  return (
    <main>
      {post && (
        <>
          <h2 className="post__title">Edit Post</h2>
          <form className="newPost__form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              id="title"
              required
              className="newPost__input"
              placeholder="Add title"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <label
              htmlFor="title"
              className="newPost__label newPost__label--title"
            >
              Add title
            </label>
            <textarea
              type="text"
              rows="15"
              cols="70"
              id="body"
              required
              className="newPost__input"
              placeholder="Add body"
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
            />
            <label
              htmlFor="body"
              className="newPost__label newPost__label--body"
            >
              Add body
            </label>

            <button
              type="button"
              className="btn btn--submit"
              onClick={() => handleEdit(post.id)}
            >
              Submit
            </button>
          </form>
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
    </main>
  );
};

export default EditPost;
