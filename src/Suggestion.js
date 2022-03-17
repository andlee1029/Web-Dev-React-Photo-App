import React from 'react';
import FollowButton from './FollowButton.js'

class Suggestion extends React.Component{
  constructor(props){
    super(props);
  }

  render () {
    const suggestion = this.props.model;
    return (
      <div>
        <img src={suggestion.thumb_url}/>
        <p>{suggestion.username}</p>
        <p>Suggested For You</p>
        <FollowButton user_id={suggestion.id}/>
      </div>

    );
  }
}



export default Suggestion;
