import React from 'react'

class EvenDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Tom',
      list: [
        {
          id: 1, 
          title: '标题1'
        },
        {
          id: 2, 
          title: '标题2'
        },
        {
          id: 3, 
          title: '标题3'
        }
      ],
    }
    // 改变this指向
    this.handleClick = this.handleClick.bind(this)
  }
  render() {
    return (
      <div>
        <div>普通方式定义</div>
        <p onClick={this.handleClick}>{ this.state.name }</p>
        ----------------------分割线----------------------
        <div>静态方法定义</div>
        <p onClick={this.staticHandleClick}>{ this.state.name }</p>
        <div>获取Event</div>
        <button onClick={this.getEvent}>获取Event</button>
      </div>
      
    )
  }
  handleClick() { // this默认为undefined
    this.setState({ 
      name: this.state.name === 'Tom' ? 'Jerry' : 'Tom'
    })
  }
  // 静态方法定义，this指向当前实例，不需要使用bind
  staticHandleClick = () => {
    this.setState({
      name: this.state.name === 'Tom' ? 'Jerry' : 'Tom'
    })
  }
  getEvent(event) {
    event.preventDefault()
    event.stopPropagation()
    // console.log('target', event.target) // 当前元素 button
    // console.log('current target', event.currentTarget) // 当前元素 button

    // event是React封装的，可以看做是 __proto__.constructor 是 SyntheticBaseEvent 组合事件
    // console.log('event', event) // SyntheticBaseEvent

    // 获取原生event
    console.log('nativeEvent', event.nativeEvent)
  }
}

export default EvenDemo