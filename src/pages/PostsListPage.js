import { Link } from 'react-router-dom';
import { articlesData } from '../utils/articles.data';

export const PostsListPage = () => {
  return (
    <>
      <h1>Articles list</h1>
      {articlesData.map(({ path, title, content }) => (
        <article key={path} className="article-list-item">
          <Link to={`/blog/${path}`}>
            <h2>{title}</h2>
          </Link>
          <p>{content[0]}</p>
        </article>
      ))}
    </>
  );
};
