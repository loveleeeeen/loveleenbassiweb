import React from 'react';
// import { Link } from 'react-router-dom';

import './ResumePage.css';

function ResumePage() {
  return (
    <div className="Resume-App">
      <div className='Resume-container'>
        
      <div className="table-container">
        
      <table className="table">
        <p className="table-title">Resume</p>

        <tbody>
          <tr className='add-border'>
            <td className='first-col'>Work Experience </td>
            <tr className='sec-col'>
              <td className='dates'>2022-Present</td>
              <td className='info'><span className='position'>Associate Developer</span> |<br/><span className='comp-name'>Infosys</span><br/>
                <ul>
                  <li>Certifications: Infosys Certified Spark Associate, Infosys Certified Software Programmer</li>
                  <li>Skills: Big Data, Python, Spark, RDBMS, Java</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className='dates'>2021-2022</td>
              <td className='info'><span className='position'>Technical Support Specialist</span> |<br/><span className='comp-name'>Resnet</span><br/>
              <ul>
                <li>Troubleshoot networking, software, and computer-related issues on various networks for 9,500+ UCSC students and faculty</li>
                <li>Monitor and manage anti-virus systems</li>
                <li>Softwares Utilized: Cisco DNA Center, SafeConnect, ServiceNow, Mobile Eye, Grouper</li>
              </ul>
              </td>
            </tr>
            <tr>
              <td className='dates'>2021-2021</td>
              <td className='info'><span className='position'>Front End Web Developer Intern</span> | <br/><span className='comp-name'>Infinte Options, LLC</span><br/>
                <ul>
                  <li>Projects: Captions, NithyaAyurveda, IOWeb</li>
                </ul>
              </td>
            </tr>
            <br/>
          </tr>
          <br/>
          <tr className='add-border'>
            <td className='first-col'>Education</td>
            <tr className='sec-col'>
              <td className='dates'>2018-2022</td>
              <td className='info'><span className='position'>University of California, Santa Cruz | <br/>Bachelor of Science in Computer Science<br/></span>
              <ul>
                <li>Relevant Coursework</li>
                <ul>
                  <li>Principles of Computer Science Design</li>
                  <li>Computer Architecture</li>
                  <li>Comparative Programming Languages</li>
                  <li>Computational Models</li>
                  <li>Data Structures and Analysis</li>
                  <li>Introduction to Computer Graphics</li>
                </ul>
              </ul>
              </td>
            </tr>
            <br/>
          </tr>
          <br/>


          <tr>
            <td className='first-col'>Skills & Expertise</td>
            <tr>
            <td className='dates'></td>
              <td className='info'><span className='position'>Programming Technologies</span>
                <ul>
                <li>Java, React, HTML, CSS, C, C++, JavaScript</li>
                </ul>
              </td>
              
            </tr>
            <tr>
            <td className='dates'></td>
              <td className='info'><span className='position'>Programming Skills</span>
                <ul>
                  <li>Java, React, HTML, CSS, C, C++, JavaScript</li>
                  <li>Algorithms, Object-Oriented Programming</li>
                </ul>
              </td>
            
            </tr>
            <tr>
            <td className='dates'></td>
              <td className='info'><span className='position'>Operating Systems</span>
                <ul>
                <li>UNIX, Linux</li>
                </ul>
              </td>
              
            </tr>
          </tr>
          
        </tbody>
      </table>
    </div>

        {/* <body className='app-body'>
          
          <div className='body-left'>
            
          </div>
          <div className='body-right'>
            
          </div>
        </body> */}
      </div>
    </div>
  );
}

export default ResumePage;
