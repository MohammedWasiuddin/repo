import React, { useState } from 'react';
// import {Table, FloatingLabel} from 'reactstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Table } from 'reactstrap';
import Button from 'react-bootstrap/Button';
// import {TextareaAutosize} from 'react-boostrap';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Header from './Header';
import Confirm from './Confirm';
// import { useNavigate } from 'react-router';

function EnrollmentDetails() {
    // const [screen, setScreen] = useState('');
    // const navigate = useNavigate();
    const handleChange = () => {
    alert('im clicked');
    // setScreen('bbb');
    }
    return (
        <div>
            <div className='container text'>
                <h5 style={{ textAlign: "left" }}>Reason for action</h5>
            </div>
            <div className='container textarea' style={{ textAlign: "left" }}>

                <TextareaAutosize
                    // maxRows={6}
                    aria-label="maximum height"
                    placeholder=""
                    defaultValue=""
                    style={{ width: 600, height: 200 }}
                />
            </div>
            &nbsp;


            <div className='container'>
                <Button className='cancel'
                    variant="outline-primary"
                    size="lg">Cancel</Button>
                <Button className='continue'
                    variant="secondary"
                    size="lg"
                    // onClick={()=>{
                    //     navigate("/confirm");
                    // }}
                    onClick={() => handleChange(<Confirm/>)}
                    >Continue</Button>
            </div>


        </div >
    )
}

{/* <button type="button" className="btn btn-primary pull-left">Pull Left Button</button>
&nbsp;&nbsp;&nbsp;
<button type="button" className="btn btn-primary pull-right">Pull Right Button</button> */}

export default EnrollmentDetails;



{/* <div className='container cancel' style={{ textAlign: "left" }}>
                <Button className='cancel' variant="outline-primary pull-left" size="lg">Cancel</Button>
            </div>
            <div className='container cancel' style={{ textAlign: "right" }}>
                <Button className='continue' variant="secondary" size="lg" style={{ align: "right" }}>Continue</Button>
            </div> */}