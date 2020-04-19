class Eye extends React.Component {
  constructor(props) {
    super(props);

    this.openOutline = "M 0 300 Q 400 0 700 300 Q 250 400 0 300 Z";
    this.closedOutline = "M 0 300 Q 400 150 700 300 Q 400 150 0 300 Z";

    this.state = {
      eyePosX: 350,
      eyePosY: 300,
      eyeOutline: this.closedOutline, // initially closed
    }
  }

  componentDidMount() {
    // for first open
    this.firstOpener = setTimeout(() => this.setState({
      eyeOutline: this.openOutline // open eyes
    }), 1000 + Math.random() * 1500);

    // for eye movement
    this.mover = setInterval(() => this.setState({
      eyePosX: this.getRandX(),
      eyePosY: this.getRandY()
    }), 3000 + Math.random() * 4000);

    // for blinking
    this.blinker = setInterval(() => {
      if (!this.state.keepClosed) {
        this.setState({
          eyeOutline: this.closedOutline // close eyes
        });

        setTimeout(() => this.setState({
          eyeOutline: this.openOutline // open eyes
        }), 600);
      }
    }, 7000 + Math.random() * 4000);
  }


componentWillUnmount() {
  clearTimeout(this.firstOpener);
  clearInterval(this.mover);
  clearInterval(this.blinker);

  this.setState({ eyeOutline: this.closedOutline }); // close eyes
}

getRandX = () => {
  const minX = 200;
  const maxX = 500;
  return (minX + Math.random() * (maxX - minX));
}

getRandY = () => {
  const minY = 250;
  const maxY = 350;
  return (minY + Math.random() * (maxY - minY));
}

render() {
  return (
    <svg viewBox="0 140 700 230">
      <defs>
        <clipPath id="eye">
          <path d={this.props.keepClosed ? this.closedOutline : this.state.eyeOutline} />
        </clipPath>
      </defs>
      <g id="eyeBall">
        <rect width="700" height="400" fill="#ffccf7" />
        <circle cx={this.state.eyePosX} cy={this.state.eyePosY} r="110" fill="#5454ff" />
      </g>
      <style jsx>{`
          svg path {
            transition: 0.3s;
          }

          svg:hover path {
            d: path("M0,300 Q400,150,700,300 Q400,150,0,300 Z");
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