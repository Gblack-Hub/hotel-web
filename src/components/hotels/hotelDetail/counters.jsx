import React, { Component } from 'react';

class Counters extends Component {
  
    render() { 
       
        return (
            <div>
                <button onClick= {() =>this.props.onDecrement(this.props.item)}
                disabled= {this.props.product.quantity===1}
                    className="btn m-0 btn-secondary btn-sm">-</button>
                <span className='badge m-2 badge-primary'>{this.props.product.quantity}</span>
                <button onClick= {() => this.props.onIncrement(this.props.item)}
                    className="btn btn-secondary btn-sm">+</button>
            </div>
          );
    }
}
 
export default Counters;