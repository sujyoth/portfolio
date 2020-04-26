class Radar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRadarVisible: false,
      rotation: Math.random() * 360
    }
  }

  componentWillMount() {
    this.reveal = setTimeout(() => this.setState({
      isRadarVisible: true
    }), 400);

    this.rotate = setInterval(() => this.setState({
      rotation: (this.state.rotation + 1) % 360
    }), 25);
  }

  componentWillUnmount() {
    clearTimeout(this.reveal);
    clearInterval(this.rotate);
  }


  render() {
    return (
      <div className='radar'>
        <div className='sweep' />
        <style jsx>{`
          .radar {
            margin: auto;
            width: ${this.props.hide ? '0vw' : (this.state.isRadarVisible ? '70vw' : '0vw')}; 
            height: ${this.props.hide ? '0vw' : (this.state.isRadarVisible ? '70vw' : '0vw')}; 
            opacity: ${this.props.hide ? 0 : (this.state.isRadarVisible ? 1 : 0)};
            border-radius: 50%;
            background: #fbede0;
            transition: all 0.6s ease;
          }

          .sweep {
            border-radius: 50%;
            width: 100%; height: 100%;
            transform-origin: 50% 50%;
            background: conic-gradient(#ffbe4b67, #ffbe4b);
            transform: rotate(${this.state.rotation + 'deg'});
          }

          @media screen and (min-width: 40em){
            .radar {
              width: ${this.props.hide ? '0vw' : (this.state.isRadarVisible ? '38vw' : '0vw')}; 
              height: ${this.props.hide ? '0vw' : (this.state.isRadarVisible ? '38vw' : '0vw')};
            }
          }

          @keyframes sweep {
            to { transform: rotate(360deg); } 
          }
        `}</style>
      </div>
    );
  }
}

export default Radar;