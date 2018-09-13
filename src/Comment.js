import React , {Component} from 'react';
import PropTypes from 'prop-types';

class Comment extends Component{
    static propTypes =  {
        comment:PropTypes.object.isRequired
    }
    
    constructor(props){
        super(props);
        this.state={
            timeString:''
        }
    }

    componentWillMount(){
        this._updateTimeString();
    }

    _updateTimeString (){
        const comment = this.props.comment;
        const duration = (Date.now() - comment.createdTime)/1000;
        const a =2;
        this.setState({
            timeString: duration > 60
            ? `${Math.round(duration / 60)} 分钟前`
            : `${Math.round(Math.max(duration, 1))} 秒前`
        })
    }


    render(){
        return(
            <div className='comment'>
                <div className='comment-user'>
                    <span className="user">{this.props.comment.username} </span>：
                    <span className="content">{this.props.comment.content}</span>
                </div>
                
                <span className='comment-createdtime'>
                    {this.state.timeString}
                </span>
            </div>
        );
    }
}

export default Comment; 