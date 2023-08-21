import React, { Component } from 'react'
import FuncCompDemo from './componnents/FuncCompDemo'
import ClassCompDemo from './componnents/ClassCompDemo'
import Member from './componnents/Member'
import MemberList from './componnents/MemberList'
import MemberInfor from './componnents/MemberInfor'
import CompState from './componnents/CompState'

export default class App extends Component {
  render() {
    //Tạo đối tượng 
    var member = {
      path: 'images/avatar.jpg',
      name: "Nguyễn Văn A",
      age: 123
    }
    return (
      <div className='container my-5 border'>
        <h1 className='text-center'>Demo Function / Class Component; props,state</h1>
        <hr></hr>
        {/* sử dụng function Component */}
        <FuncCompDemo></FuncCompDemo>
        <FuncCompDemo name="Đinh Hiếu" address="Bạch Mai, Hà Nội"></FuncCompDemo>
        <hr></hr>
        <FuncCompDemo name="Đinh Hiếu" address="Bạch Mai, Hà Nội" company="Devmaster"></FuncCompDemo>


        {/* Sử dụng ClassComponts */}
        <ClassCompDemo></ClassCompDemo>
        <ClassCompDemo name="Đinh Hiếu" age="21" company="Trại Găng"></ClassCompDemo>
        <hr></hr>

        <Member name='Hiếu' age="200"></Member>
        <MemberList></MemberList>
        <hr></hr>
        {/* Sử dụng MemberInfor với props là info = Member */}
        <MemberInfor infor={member}></MemberInfor>
        <hr></hr>
        <CompState></CompState>
      </div>
    )
  }
}
