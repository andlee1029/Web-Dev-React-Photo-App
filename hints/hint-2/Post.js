import React from 'react';
import LikeButton from './LikeButton.js'

class Post extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            post: this.props.model
        }
    }

    render () {
        const post = this.state.post;
        if (!post) {
            return (
                <div></div>
            );
        }
        return (
            <section className="card">
                <div className="header">
                    <h3>{ post.user.username }</h3>
                    <i className="fa fa-dots"></i>
                </div>

                <img
                    src={ post.image_url }
                    alt={'Image posted by ' +  post.user.username }
                    width="300"
                    height="300" />

                <div className="info">
                    <div>
                        <LikeButton/>
                    </div>
                    <p>{ post.caption }</p>
                </div>
            </section>
        );
    }
}

export default Post;
