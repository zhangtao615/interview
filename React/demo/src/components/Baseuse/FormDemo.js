import React from "react"

class FormDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: ''
    }
  }
  
  render() {
    return (
      <div>
        <p> inputValue: { this.state.inputValue } </p>
        <label>input: </label><input value={ this.state.inputValue } onChange={ this.handleInputValueChange }></input>
      </div>
    )
  }
  handleInputValueChange = (event) => {
    this.setState({ 
      inputValue: event.target.value 
    })
  }
}

export default FormDemo