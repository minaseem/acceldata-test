import { Component } from 'react'
import './PlacedOrder.css'
import { burgerItems } from "../../data/data";
import getOrderValue from "../../utils/getOrderValue";


export class PlacedOrder extends Component {
  render() {
    const { order } = this.props;
    const items = Object.entries(order).map(([id, quantity]) => {
      const item = burgerItems.find(x => x.id === +id)
      return {
        name: item.name,
        quantity
      }
    })
    
    return (
      <div className='order'>
        {
          items.map((item, index) => (
            <div key={index}>
              <span>{item.name}: {item.quantity}</span>
            </div>
          ))
        }
        <div>
          <b>Order value:</b> {getOrderValue(order)}
        </div>
      </div>
    )
  }
}
