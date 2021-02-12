import { Link } from 'react-router-dom';
import { postData } from '../utils/postData';

export const PostsListPage = () => {
  return (
    <div className="App">
      <h1>Articles list</h1>
      {postData.map(({ path, title, content }) => (
        <article key={path} className="article-list-item">
          <Link to={`/blog/${path}`}>
            <h2>{title}</h2>
          </Link>
          <p>{content[0]}</p>
        </article>
      ))}
    </div>
  );
};
