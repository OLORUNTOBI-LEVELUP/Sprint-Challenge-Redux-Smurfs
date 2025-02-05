import axios from "axios";

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCH_SMURFS_START = "FETCH_SMURFS_START"
export const FETCH_SMURFS_SUCCESSFUL = "FETCH_SMURFS_SUCCESSFUL"
export const FETCH_SMURFS_FAIL = "FETCH_SMURFS_FAIL"


export const ADD_SMURF_START = "ADD_SMURF_START"
export const ADD_SMURF_SUCCESSFUL = "ADD_SMURF_SUCCESSFUL"
export const ADD_SMURF_END = "ADD_SMURF_SUCCESSFUL"

export const DELETE_SMURF_START = "DELETE_SMURF_START"
export const DELETE_SMURF_SUCCESSFUL = "DELETE_SMURF_SUCCESSFUL"
export const DELETE_SMURF_END = "DELETE_SMURF_END"

export const UPDATE_SMURF_START = "MODIFY_SMURF_START"
export const UPDATE_SMURF_SUCCESSFUL = "DELETE_SMURF_SUCCESSFUL"
export const UPDATE_SMURF_END = "MODIFY_SMURF_END"

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS_START })
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      dispatch({ type: FETCH_SMURFS_SUCCESSFUL, payload: res.data })
    })
    .catch(err => dispatch({ type: FETCH_SMURFS_FAIL, payload: err }))
}

export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADD_SMURF_START })
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(res => {
      dispatch({ type: ADD_SMURF_SUCCESSFUL, payload: res.data })
    })
  dispatch({ type: ADD_SMURF_END })
}

export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETE_SMURF_START })
  axios.delete(`http://localhost:3333/smurfs/${id}`).then(res => {
    dispatch({ type: DELETE_SMURF_SUCCESSFUL, payload: res.data })
  })

  dispatch({ type: DELETE_SMURF_END })
}

export const updateSmurf = id => dispatch => {
  dispatch({ type: UPDATE_SMURF_START })
  axios.delete(`http://localhost:3333/smurfs/${id}`).then(res => {
    dispatch({ type: UPDATE_SMURF_SUCCESSFUL, payload: res.data })
  })

  dispatch({ type: UPDATE_SMURF_END })
}