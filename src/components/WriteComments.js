import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addComment} from '../action/index'

class Write extends Component{
  constructor(props){
    super(props);

    this.state = {
      author: "",
      comment: ""
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.author)
    console.log(this.state.comment)

    const commentObject = {
      id: "",
      author: this.state.author,
      comment: this.state.comment
    }
    this.props.addComment(this.props.movieid,commentObject)
  }

  changeAuthor = (e) => {
    this.setState({author: e.target.value })
  }

  changeComment = (e) => {
    this.setState({comment: e.target.value})
  }


  render(){
    return(
      <form onSubmit={this.handleSubmit} className="write-comment" action="">
      <p className="info-comment">Write a comment.</p>
        <input onChange={this.changeAuthor} className="author-input" type="text" placeholder="Enter your name here"/>
        <textarea onChange={this.changeComment} className="comment-input" name="" id="" placeholder="Write a comment"></textarea>
        <input className="submit-comment" type="submit"/>
      </form>
    )
  }
}

const WriteComments = connect(null,{addComment})(Write)
export default WriteComments