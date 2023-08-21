import React, { Component } from 'react'
import Member from './Member'

export default class MemberList extends Component {
  render() {
    return (
      <div>
        <h2> MemberList</h2>
        <Member name="Nguyễn Trung Hiếu" age='21'></Member>
        <Member name="Nguyễn Trung Hiếu1" age='215'></Member>
        <Member name="Nguyễn Trung Hiếu2" age='2196'></Member>
        <Member name="Nguyễn Trung Hiếu3" age='2136'></Member>
      </div>
    )
  }
}
