import './style.scss';
import { format } from 'date-fns';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { useNavigate } from 'react-router-dom';

const NewPost = () => {
  const postTitle = useStoreState((state) => state.postTitle);
  const postBody = useStoreState((state) => state.postBody);
  const posts = useStoreState((state) => state.posts);

  const setPostTitle = useStoreActions((actions) => actions.setPostTitle);
  const setPostBody = useStoreActions((actions) => actions.setPostBody);

  const savePost = useStoreActions((actions) => actions.savePost);
  const navigate = useNavigate('/');

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[0].id + 1 : 1;
    const newPost = {
      id,
      datetime: format(new Date(), 'MMMM dd, yyyy pp'),
      title: postTitle,
      body: postBody,
    };
    savePost(newPost);
    navigate('/');
  };

  return (
    <main>
      <h2 className="post__title">Add New Post</h2>
      <form className="newPost__form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="title"
          required
          className="newPost__input"
          placeholder="Add title"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <label htmlFor="title" className="newPost__label newPost__label--title">
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
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />
        <label htmlFor="body" className="newPost__label newPost__label--body">
          Add body
        </label>
        <button type="submit" className="btn btn--submit">
          Submit
        </button>
      </form>
    </main>
  );
};

export default NewPost;
