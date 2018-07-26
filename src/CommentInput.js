import React , {Component} from 'react';
import PropTypes from 'prop-types';

class CommentInput extends Component{
    static propType = {
        onSubmit: PropTypes.function
    }

    constructor(){
        super();
        this.state={
            username:"",
            content:""
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUsernameBlur = this.handleUsernameBlur.bind(this);
        this._saveUsername = this._saveUsername.bind(this);
        this._loadUsername = this._loadUsername.bind(this);
    }



    componentDidMount(){
        this.textarea.focus()
    }

    handleUsernameChange(event){
        this.setState({
            username: event.target.value,
        });
    }

    handleContentChange(event){
        this.setState({
            content: event.target.value
        });
    }

    handleSubmit(){
        if (this.props.onSubmit) {
            const { username, content } = this.state
            this.props.onSubmit({username, content})
          }
        
    }

    _saveUsername(username){
        localStorage.setItem('username',username)
    }

    handleUsernameBlur(event){
        this._saveUsername(event.target.value);
    }

    componentWillMount(){
        this._loadUsername()
    }

    _loadUsername(){
        const username = localStorage.getItem('username');
        if(username){
            this.setState({username})
        }
    }


    render(){
        return(
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='commenty-field-name'>用户名：</span>
                    <div className='commenty-field-input'>
                        <input value={this.state.username} onBlur={this.handleUsernameBlur} onChange={this.handleUsernameChange}/>
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='commenty-field-name'>评论内容：</span>
                    <div className='commenty-field-input'>
                        <textarea ref={(textarea) => this.textarea = textarea} value={this.state.content} onChange={this.handleContentChange}/>
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.handleSubmit}>发布</button>
                </div>
            </div>
        );
    }

}

export default CommentInput;