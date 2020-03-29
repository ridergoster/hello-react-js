import React from 'react'

import Title from './components/Title'

export default class App extends React.Component {

  render() {
    return (
      <Title
        text="Hello, World!"
        bgColor="red"
        color="green"
      />
    )
  }
}
