import React from 'react';
// import { ReactDOM } from 'react-dom';
// import homeProfileImg from './home-imgs/home-profile-img.JPG';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
// import { Switch } from 'react-router';
// import './App.css';
// import { ImageGroup } from 'semantic-ui-react';
import './NavBar.css';
import './NavBar-Media.css';
import './Footer.css';
import './Footer-Media.css';

import Home from './Pages/Home';
import ResumePage from './Pages/ResumePage';
import ProjectPage from './Pages/ProjectPage';
import ContactPage from './Pages/ContactPage';
import NewPage from './NewPage';

import LinkedInIcon from './Footer-Imgs/linkedin.png';
import GitHubIcon from './Footer-Imgs/github.png';


function App() {
  return (
    <Router>
    <nav className="navigation-bar">
            <div className='left-nav'>
              <div className='tiny-circle'></div>
              <span className='myName'><Link to="/">Loveleen Bassi</Link></span>
              <span className='myJob'> Developer</span>
              
            </div>
            <div className='right-nav'>
              <span className='nav-links'><Link to="/ResumePage">Resume</Link></span>
              <span className='nav-links'><Link to='/ProjectPage'>Projects</Link></span>
              <span className='nav-links'><Link to='/ContactPage'>Contact</Link></span>
            </div>
          </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new-page" element={<NewPage />} />
      <Route path='/ResumePage' element={<ResumePage />} />
      <Route path="/ProjectPage" element={<ProjectPage />} />
      <Route path='/ContactPage' element={<ContactPage />} /> 
      <Route />
    </Routes>
    <footer className='footer-container'>
      <table className='footer-table'>
        <tbody className='tableBody'>
          <tr className='first-row'>
            <td className='col-one'><span style={{fontWeight:'bold', fontSize: '18px'}}>Phone</span><br/>510-701-7248</td>
            <td className='col-two'><span style={{fontWeight:'bold', fontSize: '18px'}}>Email</span><br/>loveleen6assi@gmail.com</td>
            <td className='col-three'><span style={{fontWeight:'bold', fontSize: '18px'}}>Follow Me</span><br/>
              {/* <span className='footer-icons'> */}
                <a href="https://www.linkedin.com/in/loveleenbassi/">
                  <img src={LinkedInIcon} className='footer-icons' style={{paddingRight: '10px'}} alt='LinkedIn Icon' />
                </a>
                <a href="https://github.com/loveleeeeen">
                  <img src={GitHubIcon} className='footer-icons' alt='GitHub Icon' />
                </a>
              {/* </span> */}
            </td>
              
            <td className='col-four'>&copy; 2023 By Loveleen Bassi <br/>Coded by Loveleen Bassi</td>
          </tr>

        </tbody>
      </table>
    </footer>
  </Router>
  );

}

export default App;
