import Layout from '../components/MyLayout';
import ProjectsCarousel from '../components/ProjectsCarousel';
import Splash from '../components/Splash';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSplashVisible: true };
  }

  removeSplash = () => {
    this.setState({ isSplashVisible: false });
  }

  render() {
    if (this.state.isSplashVisible) {
      setTimeout(this.removeSplash, 3300);
    }

    return (
      <div>
        <div className="homeContainer" >
          {this.state.isSplashVisible && <Splash />}
          <Layout>
            <ProjectsCarousel />
          </Layout>
        </div>
      </div>
    );
  }
}

export default Index;