import './style.scss';
import Feed from './Feed';
import { useStoreState } from 'easy-peasy';

const Home = ({ fetchError, isLoading }) => {
  const searchResults = useStoreState((state) => state.searchResults);

  return (
    <main>
      {isLoading && <p>Loading posts...</p>}
      {!isLoading && fetchError && (
        <p
          style={{ color: 'var(--color-warning-dark)' }}
        >{`Error: ${fetchError}`}</p>
      )}
      {!isLoading &&
        !fetchError &&
        (searchResults.length ? (
          <Feed posts={searchResults} />
        ) : (
          <p style={{ marginTop: '2rem' }}>No posts to Display.</p>
        ))}
    </main>
  );
};

export default Home;
