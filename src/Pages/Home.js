import React from 'react';
// import homeProfileImg from '../home-imgs/home-profile-img.JPG';
import homeProfileImg from '../home-imgs/me.jpg';
import { Link } from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import './Home.css';
import './Home-Media.css';
// import { ImageGroup } from 'semantic-ui-react';


function Home() {
  return (
      <div className="App">
      <div className='container'>
        <body className='app-body'>
          <div className='body-left'>
            <div className='home-img-align'>
              <div className='home-img'>
                <img src={homeProfileImg} alt='Loveleen Bassi' className='my-img' />
              </div>
            </div>
          </div>
          <div className='body-right'>
            <div className='right-body-align'>
              <div className='home-text'>
                <p ><span className='home-1'>Hello </span></p>
                <p className='home-text-align'><span className='home-2'>A Bit About Me</span></p>
                <p className='home-text-aligns'>
                  <span className='home-3'>
                  I recently graduated from UC Santa Cruz with a BS in Computer Science. I'm passionate about using technology to solve problems and create innovative solutions. Some of my key interests in the field include web development, data analytics, and human-computer interaction. 
                  {/* In my free time, I enjoy exploring new programming languages and frameworks, as well as React.js, , and [Hobby 3].  */}
                  {/* <br/>Thanks for visiting my website, and feel free to get in touch if you'd like to learn more! */}
                  </span>
                </p>
              </div>
              <div className='home-buttons-align'>
                <Link to="/ResumePage">
                    <button className='home-buttons' id='yellow-btn'>Resume</button>
                </Link>
                {/* <ResumePage /> */}
                <Link to='/ProjectPage'>
                    <button className='home-buttons' id='red-btn'>Projects</button>
                </Link>
                <Link to='/ContactPage'>
                    <button className='home-buttons' id='blue-btn'>Contact</button>
                </Link>
              </div>
            </div>
          </div>
        </body>
      </div>

      
    </div>
  );
}

export default Home;