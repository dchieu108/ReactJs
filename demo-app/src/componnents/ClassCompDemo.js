import React, { Component } from 'react'

export default class ClassCompDemo extends Component {
  render() {
    return (
      <div>
        <h2>Class Components Demo</h2>
        <div className='alert alert-succcess'>
            <h3>Sử dụng các thuộc tính từ đối tượng props của class components</h3>
            <p> Welcome to tôi là: {this.props.name}</p>
            <p> Tuổi: {this.props.age}</p>
            <p> Company: {this.props.company}</p>
        </div>
      </div>
    )
  }
}
