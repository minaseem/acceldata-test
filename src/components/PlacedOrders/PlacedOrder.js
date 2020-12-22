import { Component } from 'react'


export class Item extends Component {
  render() {
    const { item } = this.props;
    return (
      <div>
        <h1>{item.name}</h1>
        <input placeholder='Enter Quantity' onKeyUp={this.props.onChange}/>
      </div>
    )
  }
}
