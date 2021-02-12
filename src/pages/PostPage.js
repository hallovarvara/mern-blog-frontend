import { useParams } from 'react-router-dom';
import { postData } from '../utils/postData';

export const PostPage = () => {
  const { path } = useParams();
  const { title, content } = postData.find((post) => post.path === path);

  return (
    <>
      <h1>{title}</h1>
      {content.map((paragraphText, i) => (
        <p key={i}>{paragraphText}</p>
      ))}
    </>
  );
};
