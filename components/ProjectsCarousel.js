import { Carousel } from 'react-responsive-carousel';

export default class ProjectsCarousel extends React.Component {
  current = -1;
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
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            if (isSelected) {
              console.log("Clicked slide: " + index);
              if (this.current !== index) {
                this.props.onSlideChange(index);
              }
              this.current = index;
            }
          }}
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
            <div className="mainText">SURVEILLANCE CAR</div>
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

            background: #158;
          }

          .slideContainer {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            width: 100%;
            height: 100vh;
            background: #106;
          }

          .mainText {
            font-size: 70px;
            font-family: Verdana;
            color: #fff;
            align-self: center;
          }
        `}</style>
      </div>
    );
  }
}