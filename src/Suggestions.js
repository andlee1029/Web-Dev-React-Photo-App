import React from 'react'
import {getHeaders} from './utils';
import Suggestion from './Suggestion.js';

class Suggestions extends React.Component{
  constructor(props){
    super(props);
    this.state = {suggestions:[]};
    this.getSuggestions();
  }

  getSuggestions () {
    fetch("/api/suggestions", {
      method: "GET",
      headers: getHeaders()
    })
    .then(response => response.json())
    .then(data=> {
      console.log(data);
      this.setState({
        suggestions: data
      })
    });
  }

  render () {
    return (
      <div className="suggestions">
          <p className="suggestion-text">Suggestions for you</p>
          <div>
              {
                this.state.suggestions.map(suggestion => {
                  return <Suggestion model={suggestion} key={suggestion.id}/>;
                })
              }
          </div>
      </div>
    )
  }
}

export default Suggestions;
