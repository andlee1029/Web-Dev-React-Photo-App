import React from 'react';
import {getHeaders} from './utils';


class AddComment extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      current : "",
    };
    this.addComment = this.addComment.bind(this);
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue (event) {
    this.setState({
      current : event.target.value
    });
  }

  addComment (ev) {
    ev.preventDefault();
    const postData = {
      "post_id": this.props.post_id,
      "text": this.state.current
    };
    fetch("/api/comments", {
      method:"POST",
      headers:getHeaders(),
      body:JSON.stringify(postData)
    })
    .then(response => response.json())
    .then(data =>{
      console.log(data)
      this.setState({
        current:""
      });
      this.props.requeryPost();
    })

  }

  render () {
    return (
      <form onSubmit={this.addComment}>
        <input type="text" placeholder="Add a comment..." value={this.state.current} onChange={this.changeValue}/>
        <button type="submit" aria-checked="false" aria-label="commentButton">
          <p>Post</p>
        </button>
      </form>
    )
  }
}



export default AddComment;
