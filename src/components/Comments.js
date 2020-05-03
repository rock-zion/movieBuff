import React,{useEffect} from 'react'
import {getComments} from '../action/index'
import {connect} from 'react-redux'
import WriteComments from './WriteComments'

const Reviews = (props) => {

  const {movieid,comments} = props
  useEffect(() => {
    props.getComments(movieid)
    //eslint-disable-next-line
  },[movieid])
  console.log('this is comments from Comment',comments)

  return (
    <div className="reviews-mother">
    <div className="">
      <h4 className="big-label">Reviews</h4>
      {comments && comments.map((el,index) => {
        return (
        <div key={index} className="comment-container">
          <p className="comment-author light">{el.comment_author}</p>
          <p className="comment-body regular">{el.comment_body}</p>
        </div>
        )
      })}
    </div>
    <div>
      <WriteComments movieid={movieid} />
    </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    comments: state.getComments.comments
  }
}

const Comments = connect(mapStateToProps,{getComments})(Reviews)
export default Comments
