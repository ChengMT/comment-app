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
        this.hanleMouseOut=this.hanleMouseOut.bind(this);
        this.hanleMouseOver = this.hanleMouseOver.bind(this);
        this.hanleDelet =this.hanleDelet.bind(this);
        this._getProcessedContent =this._getProcessedContent.bind(this);
    }
    componentWillMount () {
        this._timer = setInterval(
          this._updateTimeString,
          5000
        )
    }

    componentDidMount(){
        this.hanleMouseOut();
    }

    componentWillUnmount(){
        clearInterval(this._timer);
    }


    componentWillMount(){
        this._updateTimeString();
    }

    hanleMouseOut(){
        this.butt.style.visibility="hidden";
    }

    hanleMouseOver(){
        this.butt.style.visibility="visible";
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

    hanleDelet(){
        if(this.props.hanleDeletChange){
            this.props.hanleDeletChange(this.props.index);
        }
    }

    _getProcessedContent(content){
        return content
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")
        .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
    }

    render(){
        return(
            <div className='comment' onMouseOut={this.hanleMouseOut} onMouseOver={this.hanleMouseOver}>
                <div className='comment-user'>
                    <span className="user">{this.props.comment.username} </span>：
                    <span className="content" dangerouslySetInnerHTML={{ __html: this._getProcessedContent(this.props.comment.content)}} />

                </div>
                
                <div >
                    {this.state.timeString}
                    <button className='comment-createdtime' ref={(button)=> this.butt = button} onClick={this.hanleDelet}>删除</button>
                </div>
            </div>
        );
    }
}

export default Comment; 