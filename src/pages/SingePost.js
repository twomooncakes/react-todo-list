import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function SinglePost({ title, body }) {
  // console.log(useParams());
  const { postId } = useParams();

  const [onePostData, setOnePostData] = useState({
    title: 'Loading',
    body: 'Loading',
  });

  useEffect(() => {
    getSinglePost();
  }, [postId]);

  async function getSinglePost() {
    const resp = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const data = await resp.json();
    console.log('getSinglePost', data);
    setOnePostData(data);
  }

  return (
    <article>
      <h3>{onePostData.title}</h3>
      <p className='lead'>{onePostData.body}</p>
      <Link to='/posts'>Go back</Link>
    </article>
  );
}

export default SinglePost;
