import React from 'react';

class UncontrolledDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Tom',
      flag: true,
    }
    this.nameInputRef = React.createRef()
  }

  render() {
    return <div>
      {/* 使用defaultValue 而不是 value， 使用ref */}
      <input defaultValue={this.state.name} ref={this.nameInputRef}></input>
      { /* state 并不会随着改变 */ }
      <span>state.name: { this.state.name }</span>
      <br />
      <button onClick={this.alertName}>alert name</button>
    </div>
  }

  alertName = () => {
    const elem = this.nameInputRef.current

    alert(elem.value)
  }
}

export default UncontrolledDemo