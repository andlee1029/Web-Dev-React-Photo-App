import React from 'react';
import {getHeaders} from './utils';

class FollowButton extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      following: false,
      following_id: null
    }
    this.toggleFollow = this.toggleFollow.bind(this);
    this.follow = this.follow.bind(this);
    this.unfollow = this.unfollow.bind(this);
  }

  toggleFollow (ev) {
    if (this.state.following){
      this.unfollow();
    }
    else{
      this.follow();
    }
  }

  follow () {
    const postData = {
      "user_id": this.props.user_id
    };

    fetch("/api/following", {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(postData)
    })
    .then(response => response.json())
    .then(data =>{
      console.log("followed");
      this.setState({
        following: true,
        following_id: data.id
      })
    });

  }

  unfollow () {
    fetch('/api/following/' + this.state.following_id, {
      method: "DELETE",
      headers: getHeaders()
    })
    .then(response => response.json())
    .then(data => {
      console.log("unfollowed");
      this.setState({
        following: false
      })
    })
  }

  render (){
    return (
      <button role="switch"
              onClick={this.toggleFollow}>
              <p>{this.state.following ? "unfollow" : "follow"}</p>
      </button>
    )
  }


}


export default FollowButton;
