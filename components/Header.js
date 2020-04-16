import Link from 'next/link';

const Header = () => (
  <div className="header">
    <div className="nav">
      <Link href="/">
        <a id="elem1" className="headerElement">
          <span className="nameFull">SUJYOTH KARKERA</span>
          <span className="nameShort">SUJYOTH K.</span>
        </a>
      </Link>
      <Link href="/about">
        <a id="elem2" className="headerElement">ABOUT</a>
      </Link>
    </div>
    <style jsx>{`
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

      .headerElement {
        font-family: verdana;
        font-weight: 1000;
        font-size: 12px;

        color: #fff;

        padding-top: 20px;
        padding-bottom: 20px;
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

        .nav {
          padding-left: 90px;
          padding-right: 90px;
        }
      }
    `}</style>
  </div>
);

export default Header;