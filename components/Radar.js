class Radar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      radarSize: '0vw',
      rotation: 0
    }
  }

  componentWillMount() {
    this.reveal = setTimeout(() => this.setState({
      radarSize: '37vw' 
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
            width: ${this.props.hide ? 0 : this.state.radarSize}; 
            height: ${this.props.hide ? 0 : this.state.radarSize};
            border-radius: 50%;
            background: #fbede0;
            transition: all 0.3s ease;
          }

          .sweep {
            border-radius: 50%;
            width: 100%; height: 100%;
            transform-origin: 50% 50%;
            background: conic-gradient(#ffbe4b67, #ffbe4b);
            transform: rotate(${this.state.rotation + 'deg'});
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