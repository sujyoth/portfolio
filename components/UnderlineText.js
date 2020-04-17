const UnderlineText = props => (
  <div className="textContainer">
    <Link>
      <a>{props.text}</a>
    </Link>
    <style jsx>{`
      a {
        font-family: Verdana;
        font-size: 12px;
        position: relative;
        color: #fff;
        text-decoration: none;
      }

      a:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        bottom: 0;
        left: 0;
        background-color: #fff;
        visibility: hidden;
        transform-origin: left;
        transform: scaleX(0);
        transition: all 0.3s ease-in-out 0s;
      }

      a:hover:before {
        visibility: visible;
        transform: scaleX(1);
      }
    `}</style>
  </div>
);

export default UnderlineText;