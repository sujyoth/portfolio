import Header from './Header';

const Layout = props => (
  <div className="layout" >
    <Header isDark={props.isDark} />
    {props.children}
  </div>
);

export default Layout;