import React,{useEffect} from 'react'
import {getComments} from '../action/index'
import {connect} from 'react-redux'
import ShowMore from 'react-show-more'

const Reviews = (props) => {
  const {movieid,comments} = props
  useEffect(() => {
    props.getComments(movieid)
    //eslint-disable-next-line
  },[movieid])

  return (
    <div className="reviews-mother">
    <div className="">
      <h4 className="big-label">Reviews</h4>
      {comments && comments.map((el,index) => {
        return (
        <div key={index} className="comment-container">
          <p className="comment-author light"><span>Reviewed by - </span>{el.author}</p>
          <ShowMore style={{color:"White"}} lines={5} more="Read More" less="Close" anchorClass='comment-body regular'>
            {el.content}
          </ShowMore>
        </div>
        )
      })}
    </div>
    <div>
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
