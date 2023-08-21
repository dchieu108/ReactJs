import React from 'react'

function FuncCompDemo(props) {
  return (
    <div>
        <h2>Function Component</h2>
        <div className='alert alert-secondary'>
            <h3> Truy cập đến các thuộc tính function components</h3>
            <p> Xin chào, {props.name}</p>
            <p>Địa chỉ: {props.address}</p>
        </div>
    </div>
  )
}

export default FuncCompDemo