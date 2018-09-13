import React , {Component} from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

class CommentApp extends Component{
    constructor(props){
        super(props);
        this.state={
            comments:[]
        }
        this.handleSubmitComment=this.handleSubmitComment.bind(this);
    }

    componentWillMount () {
        this._loadComments()
    }

    
      _loadComments () {
        let comments = localStorage.getItem('comments');
        if (comments) {
          this.setState({comments:JSON.parse(comments)});
        }
      }
    
      _saveComments (comments) {
        localStorage.setItem('comments', JSON.stringify(comments))
      }

    handleSubmitComment(commet){
        if (!commet){
            return
        };
        if (!commet.username) {
            return alert('请输入用户名')
        };
        if (!commet.content) {
            return alert('请输入评论内容')
        };
        this.state.comments.push(commet);
        
        this.setState({comments:this.state.comments});
        this._saveComments(this.state.comments);
        console.log(localStorage.getItem('comments'));
        
    }

    render(){
        return(
            <div className='wrapper'>
                <CommentInput onSubmit={this.handleSubmitComment}/>
                <CommentList comments={this.state.comments}/>
            </div>
        );
    }
}

export default CommentApp;