import { Link } from 'react-router-dom';

const Missing = () => {
  return (
    <main>
      <h2 className="post__title">Page not Found</h2>
      <p>Well, that's disappointing</p>
      <p style={{ textDecoration: 'underline', marginTop: '2rem' }}>
        <Link to="/">Visit Our Homepage</Link>
      </p>
    </main>
  );
};

export default Missing;
