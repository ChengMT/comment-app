import React , {Component} from 'react';
import PropTypes from 'prop-types';

class Comment extends Component{
    static PropTypes = {
        comment:PropTypes.object
    }
    
    render(){
        return(
            <div className='comment'>
                <div className='comment-user'>
                    <span>{this.props.comment.username} </span>：
                </div>
                    <p>{this.props.comment.content}</p>
            </div>
        );
    }
}

export default Comment; 