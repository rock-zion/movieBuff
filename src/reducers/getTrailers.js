import {GET_TRAILERS} from '../constants/type'

const initialState = {
  trailers: []
}

const getTrailers = (state = initialState, action) => {
  if(action.type === GET_TRAILERS){
    return Object.assign({},state,{
      trailers: action.payload
    })
  }else{
    return state
  }
}

export default getTrailers