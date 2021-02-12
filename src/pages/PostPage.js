import { useParams } from 'react-router-dom';
import { postData } from '../utils/postData';
import { Page404 } from './404page';

export const PostPage = () => {
  const { path } = useParams();
  const post = postData.find((post) => post.path === path);

  return post ? (
    <>
      <h1>{post.title}</h1>
      {post.content.map((paragraphText, i) => (
        <p key={i}>{paragraphText}</p>
      ))}
    </>
  ) : (
    <Page404 />
  );
};
