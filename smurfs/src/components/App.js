import React, { Component } from 'react';
import './App.css';
import Smurf from "./Smurf"
import SmurfForm from "./SmurfForm";
import { fetchSmurfs, addSmurf } from "../actions/index"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  componentDidMount = () => {
    this.props.fetchSmurfs();
  }
  render() {
    const { smurfs, fetchingSmurfs, addSmurf } = this.props
    if (fetchingSmurfs) {
      return <div>Loading Smurfs...</div>
    }
    return (
      <div className="App">
       <SmurfForm addSmurf={addSmurf} />
        {smurfs &&
          smurfs.length > 0 &&
          smurfs.map(smurf => (
            <Smurf
              smurf={smurf}
              key={smurf.name}
            />
          ))}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurfs,
  }
}

const matchDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchSmurfs,
      addSmurf
    },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(App)

