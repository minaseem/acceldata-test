import { Component } from 'react'
import { burgerItems } from '../data/data'
import { Item } from "./Item/Item";

export class PlaceOrder extends Component {
  
  state = { formData: {} }
  placeOrder = () => {
    this.props.onPlaceOrder(this.state.formData)
    this.setState({
      formData: {}
    })
  }
  
  onChange = (id, value) => {
    const { formData } = this.state
    formData[id] = value
    this.setState({
      formData
    })
  }
  
  render() {
    const { formData } = this.state
    return (
      <div>
        <div>
          Please fill the details below to place and order:
        </div>
        {
          burgerItems.map(x => {
            return <Item quantity={formData[x.id]} item={x} onChange={(value) => this.onChange(x.id, value)}/>
          })
        }
        <button onClick={this.placeOrder}>Place Order</button>
      </div>
    )
  }
}
