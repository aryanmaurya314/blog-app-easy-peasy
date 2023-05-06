import './style.scss';
import NavLink from './NavLink';
import { useState, useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('Home');
  const posts = useStoreState((state) => state.posts);
  const search = useStoreState((state) => state.search);
  const setSearch = useStoreActions((actions) => actions.setSearch);
  const setSearchResults = useStoreActions(
    (actions) => actions.setSearchResults
  );

  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.body.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResults(filteredResults);
  }, [posts, search, setSearchResults]);

  return (
    <nav className="nav">
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <input
          id="search"
          className="searchForm__input"
          type="text"
          placeholder="Search Posts"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <label htmlFor="search" className="searchForm__label">
          Search Posts
        </label>
      </form>
      <ul className="navItem">
        <NavLink
          to="/"
          navText="Home"
          activeNav={activeNav}
          setActiveNav={setActiveNav}
        />
        <NavLink
          to="/posts"
          navText="Post"
          activeNav={activeNav}
          setActiveNav={setActiveNav}
        />
        <NavLink
          to="/about"
          navText="About"
          activeNav={activeNav}
          setActiveNav={setActiveNav}
        />
      </ul>
    </nav>
  );
};

export default Navbar;
