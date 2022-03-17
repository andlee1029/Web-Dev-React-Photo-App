import React from 'react';
import {getHeaders} from './utils';

class BookmarkButton extends React.Component {

    constructor(props) {
        super(props);
        this.toggleBookmark = this.toggleBookmark.bind(this);
        this.bookmark = this.bookmark.bind(this);
        this.unbookmark = this.unbookmark.bind(this);
    }

    toggleBookmark(ev) {
        if (this.props.bookmarkId) {
            console.log('remove bookmark');
            this.unbookmark();
        } else {
            console.log('bookmark')
            this.bookmark();
        }
    }

    bookmark() {
        const postId = this.props.postId;
        const postData = {
          "post_id" : postId
        }
        fetch('/api/bookmarks/',{
          method: "POST",
          headers: getHeaders(),
          body: JSON.stringify(postData)
        })
        .then(response => response.json())
        .then(data => {
          this.props.requeryPost();
        })
    }

    unbookmark() {
        const postId = this.props.postId;
        const bookmarkId = this.props.bookmarkId;
        console.log(bookmarkId)
        fetch('/api/bookmarks/' + bookmarkId ,{
          method: "DELETE",
          headers: getHeaders()
        })
        .then(response => response.json())
        .then(data => {
          this.props.requeryPost();
        })
    }

    render () {
        const bookmarkId = this.props.bookmarkId;
        return (
            <button role="switch"
                className="bookamrk"
                aria-label="Bookmark Button"
                aria-checked={bookmarkId ? true : false}
                onClick={this.toggleBookmark}>
                <i className={bookmarkId ? 'fas fa-bookmark' : 'far fa-bookmark'}></i>
            </button>
        )
    }
}

export default BookmarkButton;
