import { Carousel } from 'react-responsive-carousel';

const CarouselItem = (props) => {
  return (
    <div className="slideContainer">
      <div>
        <div className="mainContainer">
          <div className="mainText">{props.mainText}</div>
          <div className="mainTextLine" />
        </div>
        <div className="subText">{props.subText}</div>
      </div>
      <style jsx>{`
        .slideContainer {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          width: 100%;
          height: 100vh;
          background: ${props.backgroundColor};

          transition: background-color 0.3s ease;
        }

        .mainContainer {
          padding-top: 14px;
          margin-bottom: 20px;
          display: inline-block;
        }

        .mainText {
          font-size: 40px;
          font-family: Anisette;
          letter-spacing: 2px;
          color: #fff;
        }

        .mainTextLine {
          background: #fff;
          width: 100%;
          height: 8px;

          animation: 1s ease rollFromLeft;
          animation-delay: 0.4s;
          animation-fill-mode: both;
          transform-origin: left;
        }

        .subText {
          font-size: 12px;
          font-family: Brandon;
          letter-spacing: 2px;
          color: #fff;
          text-transform: uppercase;
          display: none;
        }

        @media screen and (min-width: 40em) {
          .mainText {
            font-size: 100px;
          }

          .mainTextLine {
            height: 18px;
          }

          .subText {
            display: block;
          }
        }

        @keyframes rollFromLeft {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(100%);
          }
        }

        @keyframes rollToLeft {
          0% {
            transform: scaleX(100%);
          }
          100% {
            transform: scaleX(0);
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0%;
          }
          100% {
            opacity: 100%;
          }
        }

        @keyframes fadeOut {
          0% {
            opacity: 100%;
          }
          100% {
            opacity: 0%;
          }
        }
      `}</style>
    </div>
  );
}

export default class ProjectsCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.backgroundColors = ['#5454ff', '#ffba42', '#ff636b', '#00143b'];

    this.state = {
      currentSlide: 3,
      backgroundColor: this.backgroundColors[0]
    };

    setTimeout(() => this.setState({ currentSlide: 0 }), 3300);
  }

  next = () => {
    this.setState((state) => ({
      currentSlide: state.currentSlide + 1,
      backgroundColor: this.backgroundColors[state.currentSlide + 1]
    }));
  };

  prev = () => {
    this.setState((state) => ({
      currentSlide: state.currentSlide - 1,
      backgroundColor: this.backgroundColors[state.currentSlide - 1]
    }));
  };

  updateCurrentSlide = (index) => {
    const { currentSlide } = this.state;

    if (currentSlide !== index) {
      this.setState({
        currentSlide: index,
        backgroundColor: this.backgroundColors[index]
      });
      console.log("Animating slide: " + index);
    }
  };

  render() {
    return (
      <div className="carouselContainer">
        <Carousel
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          dynamicHeight={true}
          emulateTouch={true}
          useKeyboardArrows={true}
          swipeScrollTolerance={2}
          selectedItem={this.state.currentSlide}
          onChange={this.updateCurrentSlide}
        >
          <CarouselItem 
            mainText="vote" 
            subText="Opinion-based question generator"
            backgroundColor={this.state.backgroundColor} />
          <CarouselItem 
            mainText="BookwoRM" 
            subText="Local book-sharing app" 
            backgroundColor={this.state.backgroundColor} />

          <CarouselItem  
            mainText="Lyricvis" 
            subText="Song suggestion and lyrics fetching app" 
            backgroundColor={this.state.backgroundColor} />

          <CarouselItem 
            mainText="roVer" 
            subText="Surveillance Car based on Raspberry Pi" 
            backgroundColor={this.state.backgroundColor} />

        </Carousel>

        <style jsx>{`
          .carouselContainer {
            position: fixed;
            top: 0;
            left: 0;

            padding: 0;
            margin: 0;

            width: 100%;
            height: 100%;
          }
        `}</style>
      </div>
    );
  }
}