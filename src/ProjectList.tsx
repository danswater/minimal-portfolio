import * as React from 'react';
import './App.css';

interface IProps {};
interface IState {};

class ProjectList extends React.PureComponent<IProps, IState> {
  render() {
    return (
      <div className="contribute">
        <div className="wrap">
          <h1>Featured Projects</h1>
          <ul id="team">
            <li><a title="Ring Rob Concierge is Robinsons Unit Owners’ online service site where a comprehensive menu of services is made available to answer your every need with just a click away." href="#"><img className="avatar hoverZoomLink" src="https://avatars3.githubusercontent.com/u/1398304?v=4&amp;s=280&amp;d=https://secure.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=280" /></a></li>
            <li><a title="HERO Foundation was organized by the late President Corazon C. Aquino in collaboration with her former administration’s Defense Secretary General Renato De Villa in 1988. As there was a growing and continuing requirement to help the families of fallen soldiers" href="#"><img className="avatar hoverZoomLink" src="https://avatars1.githubusercontent.com/u/1473618?v=4&amp;s=280&amp;d=https://secure.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=280" /></a></li>
            <li><a title="PD 360 is an online library of educational professional development video programs broken into segments. The segments are topical based with classroom examples featuring various educational experts. PD 360 has increased student achievement in schools in North America." href="#"><img className="avatar hoverZoomLink" src="https://avatars0.githubusercontent.com/u/545779?v=4&amp;s=280&amp;d=https://secure.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=280" /></a></li>
            <li><a title="Observation 360 provides suggested on-demand video training based on results from teacher evaluations. Using Observation 360, an administrator selects the template to be used for the observation, which includes a set of questions. During class, the administrator would observe and input comments for each question." href="#"><img className="avatar hoverZoomLink" src="https://avatars3.githubusercontent.com/u/468369?v=4&amp;s=280&amp;d=https://secure.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=280" /></a></li>
            <li><a title="A wrapper for chingyawhao/materialize-clockpicker based on linagora/angular-clockpicker" href="#"><img className="avatar hoverZoomLink" src="https://avatars1.githubusercontent.com/u/663378?v=4&amp;s=280&amp;d=https://secure.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=280" /></a></li>
            <li><a title="Time Management and Billing Web Application using AngularJS Framework." href="#"><img className="avatar hoverZoomLink" src="https://avatars2.githubusercontent.com/u/2124984?v=4&amp;s=280&amp;d=https://secure.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=280" /></a></li>
            <li><a title="Project Greasy - Real time calendar event scheduling management." href="#"><img className="avatar hoverZoomLink" src="https://avatars2.githubusercontent.com/u/7249823?v=4&amp;s=280&amp;d=https://secure.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=280" /></a></li>
            <li><a title="The Knowledgeable -Bildungsportal PAIGE (Platform for Advanced Interactive Global Education) is at the heart of our educational program. It helps us to make the education process as transparent as possible and promotes the educational partnership between parents, educators and children." href="#"><img className="avatar hoverZoomLink" src="https://avatars0.githubusercontent.com/u/1784526?v=4&amp;s=280&amp;d=https://secure.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=280" /></a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ProjectList;
