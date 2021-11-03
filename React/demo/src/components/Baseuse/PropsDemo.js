import React from 'react'


class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
}
class PropsDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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
  }
  render() {
    return (
      this.state.list.map(item => {
        return (
          <p key={ item.id }>{ item.title }</p>
        )
      })
    )
  }
}

export default PropsDemo