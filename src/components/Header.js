import React from 'react'

function Header(props) {
  return (
    <>
    <div className='header'>
      <h5>{props.name}</h5>
      <h6>Year: <b>{props.year}</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Exchange Policy ID: <b>{props.id}</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Plan name: <b>{props.plan}</b></h6>
    </div>
    <div className='enrollees'>
    <label><h5>Enrollees (4)</h5></label>
    <select value="Enrollees">
        <option value=""></option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
    </select>
</div>
</>
  )
}

export default Header