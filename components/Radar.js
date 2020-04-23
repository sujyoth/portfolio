class Radar extends React.Component {
  componentWillMount() {
    setTimeout(() => {
      
    })
  }

  render() {
    return (
      <div className='radar'>
        <div className='sweep' />
        <style jsx>{`
          .radar {
            top: 0;
            left: 0;
            width: 40vw; height: 40vw;
            border-radius: 50%;
            background: #fbede0;
            transition: all 1s;
          }

          .sweep {
            border-radius: 50%;
            width: 100%; height: 100%;
            transform-origin: 50% 50%;
            background: conic-gradient(#fbede000, #ffbe4b);
            animation: sweep 9s infinite linear;
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