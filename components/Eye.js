class Eye extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      eyePosX: 175,
      eyePosY: 180,
      eyeOutline: "M 0 200 Q 200 180 350 200 Q 200 180 0 200 Z" // initially closed
    }

    // for first open
    setTimeout(() => {
      this.setState({eyeOutline: "M 0 200 Q 200 0 350 200 Q 150 300 0 200 Z"})
    }, 1000 + Math.random() * 1500);

    // for eye movement
    setInterval(() => {
      this.setState({
        eyePosX: this.getRandX(),
        eyePosY: this.getRandY()
      });
    }, 1000 + Math.random() * 4000);

    // for blinking
    setInterval(() => {
      this.setState({
        eyeOutline: "M 0 200 Q 200 180 350 200 Q 200 180 0 200 Z" 
      });

      setTimeout(() => this.setState({
        eyeOutline: "M 0 200 Q 200 0 350 200 Q 150 300 0 200 Z"
      }), 1300)
    }, 7000 + Math.random() * 4000);
  }

  getRandX = () => {
    const minX = 140;
    const maxX = 205;
    return (minX + Math.random() * (maxX - minX));
  }

  getRandY = () => {
    const minY = 140;
    const maxY = 205;
    return (minY + Math.random() * (maxY - minY));
  }

  render() {
    return (
      <svg viewBox="0 0 350 250">
        <defs>
          <clipPath id="eye">
            <path d={this.state.eyeOutline} />
          </clipPath>
        </defs>
        <g id="eyeBall">
          <rect width="3500" height="250" fill="#ffccf7" />
          <circle cx={this.state.eyePosX} cy={this.state.eyePosY} r="75" fill="#5454ff" />
        </g>
        <style jsx>{`
          svg path {
            transition: 1s;
          }

          svg:hover path {
            d: path("M0,200 Q200,180,350,200 Q200,180,0,200 Z");
          }

          svg circle {
            transition: 3s;
          }

          #eyeBall {
            clip-path: url(#eye);
          }
        `}</style>
      </svg>
    );
  }
}

export default Eye;