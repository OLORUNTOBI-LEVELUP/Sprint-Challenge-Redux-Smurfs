import React, { Component } from "react"

class SmurfForm extends Component {
  nameRef = React.createRef()
  ageRef = React.createRef()
  heightRef = React.createRef()

  smurfCreator = e => {
    e.preventDefault()
    const newSmurf = {
      name: this.nameRef.current.value,
      age: this.ageRef.current.value,
      height: this.heightRef.current.value
    }
    if(newSmurf.name && newSmurf.age && newSmurf.height){
        this.props.addSmurf(newSmurf)
        this.nameRef.current.value = ""
        this.ageRef.current.value = ""
        this.heightRef.current.value = ""
    }else {
        this.setState({
          error:
            "Ya gone did smurfed! Name/Age/Height are all required to create a smurf in the smurf DB."
        })
      }
  
  }

  render() {
    return (
      <form>
        <input type="text" ref={this.nameRef} placeholder="Name" required />
        <input type="number" ref={this.ageRef} placeholder="Age" required />
        <input type="text" ref={this.heightRef} placeholder="Height" required />
        <button onClick={e => this.smurfCreator(e)}>Add</button>
      </form>
    )
  }
}

export default SmurfForm