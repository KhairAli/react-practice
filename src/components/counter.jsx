import React, { Component } from "react";

class Counter extends Component {

  render() {
    return (
      <div>
        <span className='badge badge-primary m-2'>{this.props.counter.value}</span>
        <button
          className='btn btn-secondary btn-sm'
          onClick={()=> this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>
        <button
          className='btn btn-danger btn-sm m-2'
          onClick={()=> this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
