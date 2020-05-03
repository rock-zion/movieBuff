import {  GET_COMMENTS,ADD_TO_COMMENTS} from '../constants/type'

const initialState = {
  comments: []
}

const getComments = (state = initialState, action) => {
  if(action.type === GET_COMMENTS){
    return Object.assign({},state,{
      comments: action.payload
    })
  }else if(action.type === ADD_TO_COMMENTS){
    
  }else{
    return state
  }
}

export default getComments