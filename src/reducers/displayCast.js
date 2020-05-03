import {GET_CAST} from '../constants/type'

const initialState = {
  displayCast: []
}

export const displayCast = (state = initialState, action) => {
    
  switch(action.type){
    case GET_CAST:
      return Object.assign({},state,{
        displayCast: action.payload
      })

    default:
      return state
  }
}

export default displayCast