import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  return (
    <article className="post">
      <Link to={`/posts/${post.id}`}>
        <h2 className='post__title'>{post.title}</h2>
      </Link>
      <p className="post__date">{post.datetime}</p>
      <p className="post__body">
        {post.body.length <= 25 ? post.body : `${post.body.slice(0, 25)}...`}
      </p>
    </article>
  );
};

export default Post;
