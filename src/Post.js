import React from 'react';
import LikeButton from './LikeButton';
import BookmarkButton from './BookmarkButton';
import AddComment from './AddComment'
import {getHeaders} from './utils';

class Post extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            post: this.props.model
        }

        this.requeryPost = this.requeryPost.bind(this);
    }

    requeryPost() {
        fetch(`/api/posts/${this.state.post.id}`, {
                headers: getHeaders()
            })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    post: data
                });
            });
    }

    render () {
        const post = this.state.post;
        const comments = this.state.post.comments;
        const first = comments.length > 0 ? comments[0].text : "";
        const firstuser = comments.length >0 ? comments[0].user.username : "";
        const more = comments.length >1 ? ("View all " + comments.length + " comments"): "";
        console.log("comments");
        console.log(comments)
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
                        <LikeButton
                            postId={post.id}
                            likeId={post.current_user_like_id}
                            requeryPost={this.requeryPost} />
                        <BookmarkButton
                          postId={post.id}
                          bookmarkId={post.current_user_bookmark_id}
                          requeryPost={this.requeryPost} />

                        Additional data / controls go here...
                    </div>
                    <p>{ post.caption }</p>
                </div>
                <p><a>{more}</a></p>
                <h5>{firstuser}</h5>
                <p>{first}</p>
                <AddComment
                  post_id={post.id}
                  requeryPost={this.requeryPost}/>
            </section>
        );
    }
}

export default Post;
