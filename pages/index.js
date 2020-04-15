import Layout from '../components/MyLayout';
import Link from 'next/link';

const Splash = (props) => {
  return (
    <div className="splash">

      <div className="container">

        <div className="logoContainer">
        {/* TODO */}
        </div>

        <div className="splashTextContainer">
          <div className="splashText">
            HEY, I'M SUJYOTH!
          </div>
          <div className="splashTextLine" />
        </div>

        <div className="splashTextContainer">
          <div className="splashText">
            I AM A SOFTWARE DEV
          </div>
          <div className="splashTextLine" />
        </div>

        <div className="splashTextContainer">
          <div className="splashText">
            AND NLP ENTHUSIAST.
          </div>
          <div className="splashTextLine" />
        </div>

      </div>

      <style jsx>{`
        .splash {
          position: fixed;
          padding: 0;
          margin: 0;

          display: flex;
          justify-content: center;
          align-items: center;  

          top: 0;
          left: 0;

          width: 100%;
          height: 100%;         
          background: #00143b;
        }

        .container {
          position: fixed;
          padding: 0;
          margin: 0;

          display: flex;
          flex-direction: column;
          width: 60%;
          justify-content: center;
          align-items: center;   
        }

        .splashText {
          font-size: 3.5vw;
          font-family: impact;
          color: #fff;

          padding: 10px;

          text-align: center;
          display: inline-block;

          overflow: hidden;
          white-space: nowrap;
        }

        .splashTextLine {
          background: #ff99ee;
          width: 100%;
          height: 1vh;
        }

        .splashTextContainer {
          display: flex;
          flex-direction: column;
          
          justify-content: center;
          align-items: center;   
        }
      `}</style>
    </div>
  );
}

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSplashVisible: true };
  }

  removeSplash = () => {
    //this.setState({ isSplashVisible: false });
  }

  render() {
    var display;
    if (this.state.isSplashVisible) {
      setTimeout(this.removeSplash, 5000);
      display = <Splash />;
    } else {
      display = <div>Helooooooooooooo</div>;
    }

    return (display);
  }
}

export default Index;