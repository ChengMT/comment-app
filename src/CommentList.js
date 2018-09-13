import React , {Component} from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

class CommentList extends Component{
    static propTypes =  {
        comments:PropTypes.array
    }

    constructor(props){
        super(props);
        this.deleteComments=this.deleteComments.bind(this);

    }

    deleteComments(){
        if(this.props.handleDelete){
            this.props.handleDelete(this.props.index);
        }
    }

    render(){
        return(
            <div>
                {this.props.comments.map((comment,i)=>
                <Comment 
                key={i} 
                comment={comment} 
                hanleDeletChange={this.deleteComments}
                index={i}/>
                )}
                
            </div>
        );
    }
}

export default CommentList; 