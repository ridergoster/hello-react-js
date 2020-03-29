import React from 'react'

export default class Title extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }

    this.updateState = this.updateState.bind(this)
  }

  componentDidMount() {
    this.setState({
      count: 3
    })
  }

  updateState() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    const style = {
      color: this.props.color,
      backgroundColor: this.props.bgColor || 'blue',
      padding: '20px',
    }

    return (
      <div>
        <h1 style={style}>{this.props.text + ' ' + this.state.count}</h1>
        <button onClick={this.updateState}>add one</button>
      </div>
    )
  }
}
