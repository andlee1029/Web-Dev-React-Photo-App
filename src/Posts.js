import React from 'react'
import {getHeaders} from './utils.js';
import Post from './Post.js'


class Posts extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      posts: []
    }
    this.getPosts();
  }

  getPosts () {
    fetch('/api/posts', {
      headers: getHeaders()
    })
    .then(response => response.json())
    .then(data => {
      this.setState({
        posts: data
      })
    })
  }

  render () {
    return (
      <div id="posts">
          {
            this.state.posts.map(post => {
              return <Post model={post} key={post.id}/>;
            })
          }
      </div>
    );
  }
}

export default Posts;
