import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/cv">CV</Link>
      </nav>
    </header>
  );
}
