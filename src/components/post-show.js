import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostShow extends Component{

    componentDidMount(){
        this.props.fetchPost();
    }

    render(){
        return(
            <div>
                Post Show!
            </div>
        );

    }
}

export default connect(null, {fetchPost})(PostShow);