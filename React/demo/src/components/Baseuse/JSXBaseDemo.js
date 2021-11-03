import React from 'react'

export default class  JSXBaseDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      flag: true,
      name: 'Tom',
      age: 20,
      list: [
        {
          id: 1,
          value: 'a'
        },
        {
          id: 2,
          value: 'b'
        },
        {
          id: 3,
          value: 'c'
        }
      ],
    }
  }
  render() {
    
    return (
      <div>
        <p>{ this.state.flag ? 'yes' : 'no' }</p>
        <p>{this.state.name}</p>

        <p>
          <p>循环</p>
          <ul>
            {
              this.state.list.map(item => {
                return <li key={item.id}>{ item.value }</li>
              })
            }
          </ul>f
        </p>
      </div>
    )
  }
}

