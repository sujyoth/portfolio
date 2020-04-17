const Splash = (props) => {
  return (
    <div className="splash">

      <div className="container">

        <div className="logoContainer">
          {/* TODO */}
        </div>

        <div className="splashTextContainer">
          <div id="animatedText1" className="splashText">
            HEY, I'M SUJYOTH!
          </div>
          <div id="animatedLine1" className="splashTextLine" />
        </div>

        <div className="splashTextContainer">
          <div id="animatedText2" className="splashText">
            I AM A SOFTWARE DEV
          </div>
          <div id="animatedLine2" className="splashTextLine" />
        </div>

        <div className="splashTextContainer">
          <div id="animatedText3" className="splashText">
            AND NLP ENTHUSIAST.
          </div>
          <div id="animatedLine3" className="splashTextLine" />
        </div>

      </div>

      <style jsx>{`
        @font-face {
          font-family: 'Brandon';
          src: url('/fonts/Brandon-Black.otf');
        }

        @font-face {
          font-family: 'Anisette';
          src: url('/fonts/Anisette-Black.ttf');
        }



        .splash {
          position: fixed;
          padding: 0;
          margin: 0;

          display: flex;
          justify-content: center;
          align-items: center;  

          top: 0;
          left: 0;
          z-index: 3000;

          width: 100%;
          height: 100%;         
          background: #00143b;

          animation: 0.3s linear fadeOut;
          animation-delay: 3.0s;
          animation-fill-mode: both;
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
          font-size: 20px;
          font-family: Brandon;
          font-weight: 400;
          letter-spacing: 2px;
          color: #fff;
          padding: 10px;

          text-align: center;
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;

          animation: 0.3s ease slideUp;
          animation-fill-mode: both;
        }

        #animatedText1 {
          animation-delay: 0.2s;
        }

        #animatedText2 {
          animation-delay: 0.6s;
        }

        #animatedText3 {
          animation-delay: 1.0s;
        }

        .splashTextLine {
          background: #ff99ee;
          width: 100%;
          height: 4px;

          animation: 0.5s rollFromLeft;
          animation-fill-mode: backwards;
          transform-origin: left;
        }

        #animatedLine2 {
          animation-delay: 0.4s;
        }

        #animatedLine3 {
          animation-delay: 0.8s;
        }

        .splashTextContainer {
          display: flex;
          flex-direction: column;

          align-items: left;
        }

        @keyframes rollFromLeft {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(100%);
          }
        }

        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(40%);
          }
          100% {
            opacity: 100%;
            transform: translateY(0);
          }
        }

        @keyframes fadeOut {
          0% {
            opacity: 100%;
          }
          100% {
            opacity: 0%;
            visibility: hidden;
            display: none;
          }
        }

        @media screen and (min-width: 40em) {
          .splashTextLine {
            height: 10px;
          }

          .splashText {
            font-size: 37px;
          }
        }

        @media screen and (min-width: 52em) {
          .splashText {
            font-size: 50px;
          }
        }
      `}</style>
    </div>
  );
}

export default Splash;
