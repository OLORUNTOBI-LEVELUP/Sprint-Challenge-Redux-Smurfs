import * as types from "../actions"

/*
  Be sure to import in all of the action types from `../actions`
*/


 //Your initial/default state for this project could *Although does not have to* look a lot like this
 export const initialState ={
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_SMURFS_START:
      return {
        ...state,
        fetchingSmurfs: true
      }
    case types.FETCH_SMURFS_SUCCESSFUL:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false
      }
    case types.FETCH_SMURFS_FAIL:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      }
      case types.ADD_SMURF_START:
      return {
        ...state,
        addingSmurf: true
      }
    case types.ADD_SMURF_SUCCESSFUL: {
      return {
        ...state,
        smurfs: action.payload
      }
    }
    case types.ADD_SMURF_END:
      return {
        ...state,
        addingSmurf: false
      }
      case types.DELETE_SMURF_START:
      return {
        ...state,
        deletingSmurf: true
      }
    case types.DELETE_SMURF_SUCCESSFUL: {
      return {
        ...state,
        smurfs: action.payload
      }
    }
    case types.DELETE_SMURF_END:
      return {
        ...state,
        deletingSmurf: false
      }
      case types.UPDATE_SMURF_START:
      return {
        ...state,
        updatingSmurf: true
      }
    case types.UPDATE_SMURF_SUCCESSFUL: {
      return {
        ...state,
        smurfs: action.payload
      }
    }
    case types.UPDATE_SMURF_END:
      return {
        ...state,
        updatingSmurf: false
      }
    default:
      return state
  }
}