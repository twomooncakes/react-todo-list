import { useState, useEffect } from 'react';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import SinglePost from './SingePost';
function PostsPage() {
  const [postsArr, setPostsArr] = useState([]);

  useEffect(() => {
    // console.log('PostsPage useEffect');
    getPosts();
  }, []);

  async function getPosts() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await resp.json();
    // console.log(data.slice(0, 15));
    setPostsArr(data.slice(0, 15));
  }

  let match = useRouteMatch();
  // console.log(match);

  return (
    <div className='posts'>
      <h2>Posts</h2>

      <div className='inner'>
        <Switch>
          <Route path={`${match.path}/:postId`}>
            <SinglePost title='main post' body='some text' />
          </Route>
          <Route path={match.path}>
            <ul className='list-group'>
              {postsArr.length === 0 && <p>Loading.... </p>}
              {postsArr.map((post) => (
                <li key={post.id}>
                  <Link to={`${match.url}/${post.id}`}>
                    <h3>{post.title}</h3>
                  </Link>
                </li>
              ))}
            </ul>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default PostsPage;
