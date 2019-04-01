import * as React from 'react';
import Typist from 'react-typist';
import './App.css';
import Configs from './configurations.json';
import GithubCorner from './GithubCorner';

interface Link {
  name: string;
  icon: string;
  url: string;
}

interface BgStyle {
  background?: string;
  backgroundSize?: string;
}

interface IProps {};
interface IState {
  darkBackgroundModes: Array<string>;
  lightBackgroundModes: Array<string>;
  backgroundType: string;
  appClass: string;
  devIntro: string;
  devDesc: string;
  backgroundMode: string;
  backgroundIndex: number;
  bgStyle: BgStyle;
  links: Array<Link>;
};

class App extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      darkBackgroundModes: [
        'day',
        'terminal',
        'torquoise',
        'alizarin',
        'amythyst',
        'carrot',
        'peterriver'
      ],
      lightBackgroundModes: [
        'night',
        'lightred',
        'lightpurple',
        'lightgreen',
        'lightblue',
        'lightyellow'
      ],
      backgroundType: Configs.backgroundType || 'plain',
      appClass: Configs.plainBackgroundMode || 'daylight',
      devIntro: Configs.devIntro || 'Lorem Ipsum',
      devDesc:
        Configs.devDesc ||
        'Aute veniam ut deserunt cillum irure pariatur Lorem dolore anim nostrud quis veniam elit culpa.',
      backgroundMode: 'default',
      backgroundIndex: 0,
      bgStyle: {},
      links: Configs.links
    };
  }

  componentWillMount = () => {
    if (this.checkIfPlainTypeEnabled()) {
      return true;
    } else if (this.checkIfGradientTypeEnabled()) {
      this.setState({
        appClass: 'gradient',
        bgStyle: this.prepareGradientStyleSheets()
      });
    } else if (this.checkIfImageTypeEnabled()) {
      this.setState({
        appClass: 'full-bg-image',
        bgStyle: this.prepareBackgroundImageStyle()
      });
    }
  };

  checkIfNightModeEnabled = () => {
    return (
      this.state.backgroundType === 'plain' &&
      this.state.appClass === 'nightlight'
    );
  };

  checkIfDayModeEnabled = () => {
    return (
      this.state.backgroundType === 'plain' &&
      this.state.appClass === 'daylight'
    );
  };

  checkIfGradientTypeEnabled = () => {
    return this.state.backgroundType === 'gradient';
  };

  checkIfPlainTypeEnabled = () => {
    return this.state.backgroundType === 'plain';
  };

  checkIfImageTypeEnabled = () => {
    return this.state.backgroundType === 'image';
  };

  prepareGradientStyleSheets = () => {
    if (Configs.gradientColors) {
      return {
        background: 'linear-gradient(-45deg, ' + Configs.gradientColors + ')',
        backgroundSize: '400% 400%'
      };
    } else {
      return {
        background:
          'linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB)',
        backgroundSize: '400% 400%'
      };
    }
  };

  prepareBackgroundImageStyle = () => {
    if (Configs.backgroundImageUrl) {
      return {
        background:
          'url("' +
          Configs.backgroundImageUrl +
          '") no-repeat center center fixed',
        backgroundSize: 'cover'
      };
    } else {
      return {
        background:
          'url("/images/sample-background.jpg") no-repeat center center fixed',
        backgroundSize: 'cover'
      };
    }
  };

  getDefaultModeBasedOnBackgroundType = () => {
    if (this.checkIfNightModeEnabled()) {
      return this.state.lightBackgroundModes[0];
    } else if (this.checkIfDayModeEnabled()) {
      return this.state.darkBackgroundModes[0];
    } else {
      return this.state.lightBackgroundModes[0];
    }
  };

  changeThemeMode = () => {
    if (this.checkIfNightModeEnabled()) {
      this.setState({
        appClass: 'daylight',
        backgroundIndex: 0,
        backgroundMode: this.state.darkBackgroundModes[0]
      });
    } else if (this.checkIfDayModeEnabled()) {
      this.setState({
        appClass: 'nightlight',
        backgroundIndex: 0,
        backgroundMode: this.state.lightBackgroundModes[0]
      });
    }
  };

  changeBackgroundBasedonMode = () => {
    if (
      this.checkIfNightModeEnabled() &&
      this.state.backgroundIndex < this.state.lightBackgroundModes.length - 1
    ) {
      this.setState({
        backgroundIndex: this.state.backgroundIndex + 1,
        backgroundMode: this.state.lightBackgroundModes[
          this.state.backgroundIndex + 1
        ]
      });
    } else if (
      this.checkIfDayModeEnabled() &&
      this.state.backgroundIndex < this.state.darkBackgroundModes.length - 1
    ) {
      this.setState({
        backgroundIndex: this.state.backgroundIndex + 1,
        backgroundMode: this.state.darkBackgroundModes[
          this.state.backgroundIndex + 1
        ]
      });
    } else {
      this.setState({
        backgroundIndex: 0,
        backgroundMode: this.getDefaultModeBasedOnBackgroundType()
      });
    }
  };

  render() {
    return (
      <div className={this.state.appClass} style={this.state.bgStyle}>
        <GithubCorner />
        <div className="change-mode" onClick={this.changeThemeMode} />
        <div
          className={this.state.backgroundMode}
          onClick={this.changeBackgroundBasedonMode}>
          <main className="App-main">
            <h1 className="intro"> {this.state.devIntro} </h1>
            <div className="tagline">
              <Typist> {this.state.devDesc} </Typist>
            </div>
            <div className="icons-social">
              <div>
                {this.state.links.map((link, index) => (
                  <a key={index} target="_blank" rel="noopener noreferrer" href={link.url}>
                    <i className={`fab ${link.icon}`} />
                  </a>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
