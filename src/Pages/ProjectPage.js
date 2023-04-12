import React from 'react';
import './ProjectPage.css';
import './Project-Media.css';

import NeuroTechIcon from'../Project-Imgs/NeuroTech-Icon.png';
import CaptionsIcon from '../Project-Imgs/Captions-Icon.png';
import NityaIcon from '../Project-Imgs/Nitya-Icon.png';

function ProjectPage() {
  return (
    <div className="Project-App">
      <div className='Project-Container'>
        <div className='Project-Align'>
          <table className='Project-Table'>
            <p className="Project-Title">Projects</p>
            <tbody>
              <tr>
              <td className='proj-left'><span className='proj-name'>Boolepathy</span><br/>
                  <span className='proj-info'>
                  This project involved creating a silent speech interface that utilizes machine learning and subvocal recognition to enable synthetic telepathy. I constructed a webpage that effectively displays participants' nonverbal responses via headset, and calculates the accuracy of their answers. I also collaborated with the UI/UX team to ensure a seamless user experience. The project required me to self-teach HTML, CSS, basic JavaScript, and basic React within a month of the project start date. The team and I's hard work paid off, as we placed 1st in the US at NeuroTechX's Annual Student Competition and 5th place globally, outperforming prestigious universities such as UCLA, UCSD, and UIUC in the first year of competing.
                  
                  </span>
                  {/* https://www.youtube.com/watch?v=bh11Pg4uLxQ&list=PL7yYIG1eq9bRWBbc8xcwoRwLu1Dyc7qP0&index=10&ab_channel=RohanPandey */}
                </td>
                <td className='proj-right'>
                  <div className='proj-img'>
                    <img src={NeuroTechIcon} alt="UCSC NeuroTechX Icon" className='icon-imgs' style={{width: '100%', height: '100%', transform: 'scale(1,1.1)'}} />
                  </div>
                </td>
              </tr>
              <div className='empty-row' />
              <tr>
                <td className='proj-left'><span className='proj-name'>Nithya Ayurveda</span><br/><br/>
                  <span className='proj-info'>
                  This project involved developing a professional webpage for an Ayurvedic business based in the Bay Area. The project required translating client and UI requirements into a functional webpage. This project also required collaboration with the Back End Developer to ensure proper handling of data, such as booking and payment information.
                  </span>
                </td>
                <td className='proj-right'>
                  <div className='proj-img'>
                    <img src={NityaIcon} alt="Nitya Ayurveda Icom" className='icon-imgs' />
                  </div>
                </td>
              </tr>
              <div className='empty-row' />
              <tr>
                <td className='proj-left'><span className='proj-name'>Captions</span><br/><br/>
                  <span className='proj-info'>
                  This project is a multiplayer web game designed to connect friends and promote local artists' work. I worked on incorporating Ably's API to ensure real-time synchronized content delivery for an optimal player experience. Additionally, I collaborated with a UI designer to create visually compelling game maps and levels. Through these efforts, my team and I hope to provide an entertaining and engaging gaming experience that also showcases the talents of local artists.
                  </span>
                </td>
                <td className='proj-right'>
                  <div className='proj-img'>
                    <img src={CaptionsIcon} alt="Captions Icon" className='icon-imgs' />
                  </div></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;