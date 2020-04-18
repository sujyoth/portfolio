const Eye = (props) => {
  return (
        <svg viewBox="0 0 350 250">
          <defs>
            <clipPath id="eye">
              <path
                d="
             M 0 200 
             Q 200 0 350 200 
             Q 150 300 0 200 Z
            "
              />
            </clipPath>
          </defs>
          <g id="eyeBall">
            <rect width="3500" height="250" fill="#ffccf7" />
            <circle cx="175" cy="180" r="60" fill="#5454ff" />
          </g>
          <style jsx>{`
          svg path {
            transition: 1s;
          }

          svg:hover path {
            d: path("M0,200 Q200,180,350,200 Q200,180,0,200 Z");
          }

          #eyeBall {
            clip-path: url(#eye);
          }
        `}</style>
        </svg>
        
  );
}

export default Eye;