import { Carousel } from 'react-responsive-carousel';
import Eye from "../components/Eye";
import Radar from "../components/Radar";
import Link from "next/link"

const Indicator = (props) => (
  <div className={"indicator " + (props.isSelected && 'selected')} onClick={props.onClick}>
    <div className='inner' />
    <style jsx>{`
        .indicator {
          cursor: pointer;
          padding: 30px 10px;
          margin: 0px 5px;

          width: 8px;
          height: 8px;

          will-change: transform;
          transition: transform 250ms ease 0s;
        }

        .indicator:hover .inner, .selected .inner{
          transition: transform 250ms ease 0s;
          transform: scale(2.25);
        }

        .inner {
          background: #fff;
          border-radius: 50%;

          height:100%;
          width: 100%;

          z-index: 2500;
        }
    `}</style>
  </div>
)

const IndicatorBar = (props) => {
  const renderIndicator = (i) => (
    <Indicator isSelected={props.selected === i ? true : false} onClick={() => props.clickHandler(i)} />
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

const CarouselItem = (props) => (
  <div className="slideContainer">
    {props.isSelected && <div className="sheetContainer">
      <Link href={props.href}>
        <a>
          <div className="sheet">
            {props.sheet}
          </div>
        </a>
      </Link>
    </div>}
    <Link href={props.href}>
      <a>
        <div className="contentContainer">
          <div className="mainContainer">
            <div className="mainText">{props.mainText}</div>
            <div className="mainTextLine" />
          </div>
          <div className="subText">{props.subText}</div>
        </div>
      </a>
    </Link>
    <style jsx>{`
      a {
        text-decoration: none;
      }
      
      .slideContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        position: relative
        width: 100%;
        height: 100vh;
        background: ${props.backgroundColor};

        transition: background-color 0.3s ease;
      }

      .contentContainer {
        cursor: pointer;

        position: relative;
        display: block;
      }

      .mainContainer {
        position: relative;
        padding-top: 14px;
        margin-bottom: 20px;
        display: inline-block;
        z-index: 400;
      }

      .sheet {
        cursor: pointer;
        width: 70vw;
      }

      .sheetContainer {
        width: 60vw;
        height: 60vw;

        position: fixed;
        z-index: 70;
        margin: auto;

        display:flex;
        align-items: center;
        justify-content: center;
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
        transition-delay: 0.3s;
        transform-origin: left;
      }

      .subText {
        font-size: 12px;
        font-family: Brandon;
        letter-spacing: 2px;
        color: #fff;
        text-transform: uppercase;

        display: none;
        
        position: relative;
        z-index: 400;

        opacity: ${props.subTextOpacity};

        transition: opacity 1s ease;
        transition-delay: 0.5s;
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

        .sheet {
          width: 55vw;
        }
      }
    `}</style>
  </div>
);

export default class ProjectsCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.backgroundColors = ['#5454ff', '#ffba42', '#ff636b', '#00143b'];

    this.state = {
      currentSlide: 3,
      backgroundColor: this.backgroundColors[0],
      lineWidthPercentages: Array(4).fill(0),
      subTextOpacities: Array(4).fill(0),
      sheetVisibilities: Array(4).fill(false)
    };

    // this if for the scroll animation after splash screen fades out
    setTimeout(() => {
      this.setState({ currentSlide: 0 });
      this.updateCurrentSlide(0, true);
    }, 100);
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

  // this function is called when the slide is to be changed
  updateCurrentSlide = (nextSlide, isInitial) => {
    const { currentSlide } = this.state;

    if (currentSlide !== nextSlide) {
      const lineWidthPercentages = this.state.lineWidthPercentages.slice();
      const subTextOpacities = this.state.subTextOpacities.slice();
      const sheetVisibilities = this.state.sheetVisibilities.slice();

      // currentSlide is the index of the currently visible slide
      // nextSlide is the index of the slide to which the focus will be moved

      // this part is for animating away the currentSlide
      console.log("Animating-Away slide: " + currentSlide);

      lineWidthPercentages[currentSlide] = 0;
      subTextOpacities[currentSlide] = 0;

      this.setState({
        lineWidthPercentages: lineWidthPercentages,
        subTextOpacities: subTextOpacities,
        sheetVisibilities: sheetVisibilities
      });

      // The animating away of the current sheet is delayed for visual purposes
      setTimeout(() => {
        sheetVisibilities[currentSlide] = false;

        this.setState({
          sheetVisibilities: sheetVisibilities
        });
      }, 1000);

      // this part is for animating in the nextSlide

      setTimeout(() => {
        console.log("Animating-In slide: " + nextSlide);

        sheetVisibilities[nextSlide] = true;

        this.setState({
          currentSlide: nextSlide,
          backgroundColor: this.backgroundColors[nextSlide],
          sheetVisibilities: sheetVisibilities
        });
      }, 1500);

      setTimeout(() => {
        lineWidthPercentages[nextSlide] = 100;
        subTextOpacities[nextSlide] = 1;

        this.setState({
          lineWidthPercentages: lineWidthPercentages,
          subTextOpacities: subTextOpacities,
        });
      }, 2000);


    } else if (isInitial === true) {
      console.log("Animating-In initial slide: " + nextSlide);
      // This is only performed just after loading (for the scroll animation after splash screen)
      const lineWidthPercentages = this.state.lineWidthPercentages.slice();
      const subTextOpacities = this.state.subTextOpacities.slice();
      const sheetVisibilities = this.state.sheetVisibilities.slice();

      lineWidthPercentages[nextSlide] = 100;
      subTextOpacities[nextSlide] = 1;
      sheetVisibilities[nextSlide] = true;

      this.setState({
        lineWidthPercentages: lineWidthPercentages,
        subTextOpacities: subTextOpacities,
        sheetVisibilities: sheetVisibilities
      });
    }
  };

  render() {
    return (
      <div className="carouselContainer" onClick={(e) => e.stopPropagation()}>
        <Carousel
          showArrows={false}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          swipeable={false}
          infiniteLoop={true}
          selectedItem={this.state.currentSlide}
          onChange={this.updateCurrentSlide} >

          <CarouselItem
            mainText="vote"
            subText="Opinion-based question generator"
            href="/projects/vote"
            backgroundColor={this.state.backgroundColor}
            lineWidthPercentage={this.state.lineWidthPercentages[0]}
            subTextOpacity={this.state.subTextOpacities[0]}
            isSelected={this.state.currentSlide === 0 ? true : false} />

          <CarouselItem
            mainText="BookwoRM"
            subText="Local book-sharing app"
            href="/projects/bookworm"
            sheet={<Radar hide={!this.state.sheetVisibilities[1]} />}
            backgroundColor={this.state.backgroundColor}
            lineWidthPercentage={this.state.lineWidthPercentages[1]}
            subTextOpacity={this.state.subTextOpacities[1]}
            isSelected={this.state.currentSlide === 1 ? true : false} />

          <CarouselItem
            mainText="Lyricvis"
            subText="Song suggestion and lyrics fetching app"
            href="/projects/lyricvis"
            backgroundColor={this.state.backgroundColor}
            lineWidthPercentage={this.state.lineWidthPercentages[2]}
            subTextOpacity={this.state.subTextOpacities[2]}
            isSelected={this.state.currentSlide === 2 ? true : false} />

          <CarouselItem
            mainText="roVer"
            subText="Surveillance Car based on Raspberry Pi"
            href="/projects/rover"
            sheet={<Eye keepClosed={!this.state.sheetVisibilities[3]} />}
            backgroundColor={this.state.backgroundColor}
            lineWidthPercentage={this.state.lineWidthPercentages[3]}
            subTextOpacity={this.state.subTextOpacities[3]}
            isSelected={this.state.currentSlide === 3 ? true : false} />

        </Carousel>

        <IndicatorBar
          selected={this.state.currentSlide}
          clickHandler={this.updateCurrentSlide} />

        <style jsx>{`
          .carouselContainer {
            position: absolute;
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