import { Carousel } from 'react-responsive-carousel';

export default class ProjectsCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.backgroundColors = ['#5454ff', '#ffba42', '#ff636b', '#00143b'];

    this.state = {
      currentSlide: 3,
      backgroundColor: this.backgroundColors[0]
    };

    setTimeout(() => this.setState({currentSlide: 0}), 3300);
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
          <div className="slideContainer">
            <div className="mainText">VOTE</div>
          </div>
          <div className="slideContainer">
            <div className="mainText">BOOKWORM</div>
          </div>
          <div className="slideContainer">
            <div className="mainText">LYRICVIS</div>
          </div>
          <div className="slideContainer">
            <div className="mainText">ROVER</div>
          </div>
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

          .slideContainer {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            width: 100%;
            height: 100vh;
            background: ${this.state.backgroundColor};

            animation: 1.0s colorChange;
            animation-fill-mode: forwards;
            transform-origin: left;
          }

          .mainText {
            font-size: 40px;
            font-family: Brandon;
            font-weight: 700;
            letter-spacing: 2px;
            color: #fff;
          }

          @media screen and (min-width: 40em) {
            .mainText {
              font-size: 100px;
            }
          }

          @keyframes colorChange {
            100% {
              background: ${this.state.backgroundColor};
            }
          }
        `}</style>
      </div>
    );
  }
}