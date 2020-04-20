import Link from 'next/link';

const Header = (props) => (
  <div className="header">
    <div className="nav">
      <Link href="/">
        <a id="elem1" >
          <span className="nameFull">SUJYOTH KARKERA</span>
          <span className="nameShort">SUJYOTH K.</span>
        </a>
      </Link>
      <Link href="/about">
        <a id="elem2">ABOUT</a>
      </Link>
    </div>
    <style jsx>{`
      @font-face {
        font-family: 'Brandon';
        src: url('/fonts/Brandon-Black.otf');
      }

      @font-face {
        font-family: 'Anisette';
        src: url('/fonts/Anisette-Black.ttf');
      }

      .header {
        position: fixed;

        top: 0;
        left: 0;
        z-index: 2000;

        margin-top: 20px;
        width: 100%;
      }

      .nav {
        padding-left: 38px;
        padding-right: 38px;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }

      #elem1 {
        margin-right: 20px;
      }

      #elem2 {
        margin-left: 20px;
      }

      .nameFull {
        display: none;
      }

      .nameShort {
        display: block;
      }

      @media screen and (min-width: 40em) {
        .header {
          margin-top: 40px;
        }
 
        .nameFull {
          display: block;
        }

        .nameShort {
          display: none;
        }
      }

      @media screen and (min-width: 64em) {
        .nav {
          padding-left: 90px;
          padding-right: 90px;
        }
      }

      a {
        font-family: Brandon;
        font-size: 11px;
        position: relative;
        color: ${props.isDark ? '#000' : '#fff'};
        text-decoration: none;
        letter-spacing: 2px;

        padding-top: 20px;
        padding-bottom: 20px;
      }

      a:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        bottom: 17px;
        left: 0;
        background-color: ${props.isDark ? '#000' : '#fff'};
        visibility: hidden;
        transform-origin: left;
        transform: scaleX(0);
        transition: all 0.2s ease;
      }

      a:hover:before {
        visibility: visible;
        transform: scaleX(1);
      }
    `}</style>
  </div>
);

export default Header;