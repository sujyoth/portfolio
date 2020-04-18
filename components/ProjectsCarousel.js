import { Carousel } from 'react-responsive-carousel';

const Indicator = (props) => (
  <div 
    className={`${props.isSelected ? 'isSelected' : 'indicator'}`}
    onClick={props.onClick}>
    <style jsx>{`
      .indicator {
        background: #fff;
        border-radius: 50%;

        width: 8px;
        height: 8px;

        margin-left: 10px;
        margin-right: 10px;

        transition: transform 250ms ease 0s;
        z-index: 2500;
      }

      .indicator:hover {
        transform: scale(2.25);
      }

      .isSelected {
        background: #fff;
        border-radius: 50%;

        width: 17px;
        height: 17px;

        margin-left: 10px;
        margin-right: 10px;

        transition:  none;
        z-index: 2500;

      }
    `}</style>
  </div>
)

const IndicatorBar = (props) => {
  const renderIndicator = (i) => (
    <Indicator isSelected={props.selected === i ? true : false} onClick={() => props.clickHandler(i)}/>
  )

  return (
    <div className="indicatorContainer">
      {renderIndicator(0)}
      {renderIndicator(1)}
      {renderIndicator(2)}
      {renderIndicator(3)}
      <style jsx>{`
        .indicatorContainer {
          position: absolute;
          bottom: 10px;

          width: 100%;
          height: 80px;

          display: flex;
          justify-content: center;
          align-items: center;
        }

        @media screen and (min-width: 52em) {
          .indicatorContainer {
            height: 110px;
          }
        }
      `}</style>
    </div>
  );
}

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
          width: ${props.lineWidthPercentage}%;
          height: 8px;
          
          transition: width 1s ease;
          transition-delay: 0.5s;
          transform-origin: left;
        }

        .subText {
          font-size: 12px;
          font-family: Brandon;
          letter-spacing: 2px;
          color: #fff;
          text-transform: uppercase;
          display: none;

          opacity: ${props.subTextOpacity};

          transition: opacity 1s ease;
          transition-delay: 0.7s;
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
      backgroundColor: this.backgroundColors[0],
      lineWidthPercentages: Array(4).fill(0),
      subtextOpacities: Array(4).fill(0)
    };

    setTimeout(() => {
      this.setState({ currentSlide: 0 });
      this.updateCurrentSlide(0, true);
    }, 3300);
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

  updateCurrentSlide = (index, isInitial) => {
    console.log("gxg", index);
    const { currentSlide } = this.state;

    if (currentSlide !== index) {
      const lineWidthPercentages = this.state.lineWidthPercentages.slice();
      const subtextOpacities = this.state.subtextOpacities.slice();

      // currentSlide is actually the previous slide now
      // index is actually the current slide now
      lineWidthPercentages[currentSlide] = 0;
      lineWidthPercentages[index] = 100;

      subtextOpacities[currentSlide] = 0;
      subtextOpacities[index]=1;

      this.setState({
        currentSlide: index,
        backgroundColor: this.backgroundColors[index],
        lineWidthPercentages: lineWidthPercentages,
        subtextOpacities: subtextOpacities
      });
      console.log("Animating slide: " + index);
    } else if (isInitial) {
      // This is only performed just after loading
      const lineWidthPercentages = this.state.lineWidthPercentages.slice();
      const subtextOpacities = this.state.subtextOpacities.slice();

      lineWidthPercentages[index] = 100;
      subtextOpacities[index] = 1;

      this.setState({
        lineWidthPercentages: lineWidthPercentages,
        subtextOpacities: subtextOpacities
      });
    }
  };

  render() {
    return (
      <div className="carouselContainer" onClick={(e) => e.stopPropagation()}>
        <Carousel
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          dynamicHeight={true}
          emulateTouch={true}
          useKeyboardArrows={true}
          swipeScrollTolerance={2}
          showIndicators={false}
          selectedItem={this.state.currentSlide}
          onChange={this.updateCurrentSlide} >

          <CarouselItem 
            mainText="vote" 
            subText="Opinion-based question generator"
            backgroundColor={this.state.backgroundColor}
            lineWidthPercentage={this.state.lineWidthPercentages[0]}
            subTextOpacity={this.state.subtextOpacities[0]} />

          <CarouselItem 
            mainText="BookwoRM" 
            subText="Local book-sharing app" 
            backgroundColor={this.state.backgroundColor} 
            lineWidthPercentage={this.state.lineWidthPercentages[1]}
            subTextOpacity={this.state.subtextOpacities[1]} />

          <CarouselItem  
            mainText="Lyricvis" 
            subText="Song suggestion and lyrics fetching app" 
            backgroundColor={this.state.backgroundColor} 
            lineWidthPercentage={this.state.lineWidthPercentages[2]}
            subTextOpacity={this.state.subtextOpacities[2]} />

          <CarouselItem 
            mainText="roVer" 
            subText="Surveillance Car based on Raspberry Pi" 
            backgroundColor={this.state.backgroundColor} 
            lineWidthPercentage={this.state.lineWidthPercentages[3]}
            subTextOpacity={this.state.subtextOpacities[3]} />

        </Carousel>

        <IndicatorBar 
          selected={this.state.currentSlide} 
          clickHandler={this.updateCurrentSlide} />

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