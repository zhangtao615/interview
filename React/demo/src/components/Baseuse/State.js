import React from 'react'


class State extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.increase = this.increase.bind(this)
  }

  render() {
    return (
      <div>
        <p>{ this.state.count }</p>
        <button onClick={ this.increase }>增加</button>
      </div>
    )
  }
  increase() {
    // this.setState({
    //   count: this.state.count + 1
    // }, () => {
    //   console.log('count:', this.state.count)
    // })

    // setTimeout(() => {
    //   this.setState({
    //     count: this.state.count + 1
    //   })

    //   console.log('同步跟新count:', this.state.count)
    // }, 1000)

    // this.setState({
    //   count: this.state.count + 1
    // })
    // this.setState({
    //   count: this.state.count + 1
    // })
    // this.setState({
    //   count: this.state.count + 1
    // })

    this.setState((pre, props) => {
      return {
        count: pre.count + 1,
      }
    })
    this.setState((pre, props) => {
      return {
        count: pre.count + 1,
      }
    })
    this.setState((pre, props) => {
      return {
        count: pre.count + 1,
      }
    })
  }
  componentDidMount() {
    // document.body.addEventListener('click', () => {
    //   this.setState({
    //     count: this.state.count + 1
    //   })
    //   console.log('自定义事件中的count', this.state.count)
    // })
  }
}

export default State