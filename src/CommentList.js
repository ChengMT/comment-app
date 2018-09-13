import React , {Component} from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

class CommentList extends Component{
    static propTypes =  {
        comments:PropTypes.array
    }

    render(){
        return(
            <div>
                {this.props.comments.map((comment,i)=><Comment key={i} comment={comment}/>)}
                
            </div>
        );
    }
}

export default CommentList; 