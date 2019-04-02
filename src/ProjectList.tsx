import * as React from 'react';
import './App.css';
import Ringrob from './images/rr.png';
import Hero from './images/hf.png';
import Edivate from './images/ed.png';
import Observation from './images/ob.png';
import Github from './images/gh-120px.png';
import Triton from './images/tt.png';
import Greasy from './images/gr.png';
import Paige from './images/pg.png';

interface IProps {};
interface IState {};

class ProjectList extends React.PureComponent<IProps, IState> {
  render() {
    return (
      <div className="contribute">
        <div className="wrap">
          <h1>Featured Projects</h1>
          <ul id="team">
            <li><a title="(Early version) Ring Rob Concierge is Robinsons Unit Owners’ online service site where a comprehensive menu of services is made available to answer your every need with just a click away." href="http://ringrobconcierge.com"><img className="avatar hoverZoomLink" src={Ringrob} /></a></li>
            <li><a title="(Early version) HERO Foundation was organized by the late President Corazon C. Aquino in collaboration with her former administration’s Defense Secretary General Renato De Villa in 1988. As there was a growing and continuing requirement to help the families of fallen soldiers" href="http://herofoundation.com.ph/"><img className="avatar hoverZoomLink" src={Hero} /></a></li>
            <li><a title="PD 360 is an online library of educational professional development video programs broken into segments. The segments are topical based with classroom examples featuring various educational experts. PD 360 has increased student achievement in schools in North America." href="https://www.pd360.com/"><img className="avatar hoverZoomLink" src={Edivate} /></a></li>
            <li><a title="Observation 360 provides suggested on-demand video training based on results from teacher evaluations. Using Observation 360, an administrator selects the template to be used for the observation, which includes a set of questions. During class, the administrator would observe and input comments for each question." href="#"><img className="avatar hoverZoomLink" src={Observation} /></a></li>
            <li><a title="A wrapper for chingyawhao/materialize-clockpicker based on linagora/angular-clockpicker" href="https://github.com/danswater/triton-materialize-clockpicker"><img className="avatar hoverZoomLink" src={Github} /></a></li>
            <li><a title="Time Management and Billing Web Application using AngularJS Framework." href="https://orka.ltcsteeldetailers.com/login"><img className="avatar hoverZoomLink" src={Triton} /></a></li>
            <li><a title="Project Greasy - Real time calendar event scheduling management." href="http://greasy.tritontek.com.ph/login"><img className="avatar hoverZoomLink" src={Greasy} /></a></li>
            <li><a title="The Knowledgeable -Bildungsportal PAIGE (Platform for Advanced Interactive Global Education) is at the heart of our educational program. It helps us to make the education process as transparent as possible and promotes the educational partnership between parents, educators and children." href="https://learnwithpaige.com/login"><img className="avatar hoverZoomLink" src={Paige} /></a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ProjectList;
