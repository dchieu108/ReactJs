import React, { Component } from 'react'
import Avatar from './Avatar'

export default class MemberInfor extends Component {
  render() {
    return (
      <div>
        <h2>MemberInfor</h2>
        <Avatar link={this.props.infor.path}></Avatar>
        <div className='alert alert-primary'></div>
        <p> Tên: {this.props.infor.name}</p>
        <p> Tuổi: {this.props.infor.age}</p>
      </div>
    )
  }
}
