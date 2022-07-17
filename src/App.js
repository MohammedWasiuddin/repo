import logo from './logo.svg';
import './App.css';
import './index.css';
// import AppMenu from './waste/AppMenu';
import EnrollmentDetails from './components/EnrollmentDetails.js';
//import Enrollees from './components/waste/Enrollees';
import TableList from './components/TableList';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes, Switch, Link, NavLink } from 'react-router-dom';
import ReinstatementLink from './waste/ReinstatementLink';
import EnrollmentDetailsLink from './waste/EnrollmentDetailsLink';
import Confirm from './components/Confirm';

function App() {
  return (
    <div>
   
      <Router>
        <NavLink to={'/enrollmentdetailslink'} element={<EnrollmentDetails />}>←Enrollment Details</NavLink>
        {/* <NavLink to={'/reinstatementlink'}>ReinstatementLink</NavLink> */}
        <Routes>
          <Route exact path="/reinstatementlink" element={<ReinstatementLink />} />
          <Route exact path="/enrollmentdetailslink" element={<EnrollmentDetailsLink />} />
        </Routes>
      </Router>
      

      <div className="App">
        <hr style={{ height: "3px" }}></hr>
      <Header
        name="Resend Latest 834 Transaction"
        year="2023"
        id="228057"
        plan="Anthem Blue Cross Silver 87 HMO"
      />
      <hr style={{ height: "3px" }}></hr>
      <p>
        This is the latest 834 transaction information that you will be resending.
      </p>
      <TableList />
      <EnrollmentDetails />
      &nbsp;
      {/* <Confirm
        name="Confirm - Resend Latest 834 Transaction"
        year="2023"
        id="228057"
        plan="Anthem Blue Cross Silver 87 HMO"
      />

        <ReinstatementLink /> */}
      </div>

    </div>
  );
}

export default App;
