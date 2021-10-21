let vdom = {
  tag: 'div',
  props: {
    className: 'div1',
    id: 'container'
  },
  children: [
    {
      tag: 'p',
      text: 'vdom',
      children: []
    },
    {
      tag: 'ul',
      props: {
        style: "font-size: 20px"
      },
      children: [
        {
          tag: 'li',
          text: 'a',
          children: []
        }
      ]
    }
  ]
}