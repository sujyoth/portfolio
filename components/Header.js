import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/api/randomQuote">
      <a style={linkStyle}>Random Quote</a>
    </Link>
    <Link href="/tictactoe">
      <a style={linkStyle}>Tic-Tac-Toe</a>
    </Link>
  </div>
);

export default Header;