import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import { fetchPost, deletePost } from '../actions';

class PostShow extends Component{

    componentDidMount(){
        const Id = this.props.match.params.id;
        this.props.fetchPost(Id);
    }

    onDeleteClick(){
        const Id = this.props.match.params.id;
        this.props.deletePost(Id, () => {
            this.props.history.push('/');
        });
    }

    render(){
        const {post} = this.props;
        if(post == null || post == undefined || !post)
        {
            return <div>Loading...</div>
        }

        return(
            <div>
                <Link className="btn btn-primary" to="/">Back To Index</Link>
                <button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick.bind(this)}>
                    Delete Post
                </button>
                <h3>{post.title}</h3>
                <h6>Category : {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );

    }
}

function mapStateToProps({posts}, ownProps){
    return {
        post: posts[ownProps.match.params.id]
    };
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostShow);