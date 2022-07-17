import React from 'react';
import TextareaAutosize from '@mui/base/TextareaAutosize';
// import { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router';

function Confirm(props) {
    // const navigate = useNavigate();
  
  return (
    <div>
      <h5>{props.name} {props.year} {props.id} {props.plan}</h5>
      <div className='container text'>
                <h5 style={{ textAlign: "left" }}>Reason for action</h5>
            </div>
            <div className='container textarea' style={{ textAlign: "left" }}>

                <TextareaAutosize
                    // maxRows={6}
                    aria-label="maximum height"
                    placeholder=""
                    defaultValue="Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut 
                    aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit 
                    in voluptate velit esse cillum dolore 
                    eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat 
                    non proident, sunt in culpa qui officia 
                    deserunt mollit anim id est laborum"
                    style={{ width: 600, height: 200 }}
                />
            </div>
    </div>
  )
}

export default Confirm