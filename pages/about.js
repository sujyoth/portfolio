import Layout from "../components/MyLayout";
import Eye from "../components/Eye";

export default function About() {
  return (
    <Layout>
      <div className="aboutContainer">
        <div className="eyeContainer">
          <Eye />
        </div>
        <h1 style={{color: '#5454FF'}}>This is the about page</h1>
      </div>
      <style jsx>{`
        .aboutContainer {
          position: fixed;
          padding: 0;
          margin: 0;

          display: flex;
          justify-content: center;
          align-items: center;  

          top: 0;
          left: 0;
          z-index: 1500;

          width: 100%;
          height: 100%;         
          background: #00143b;
        }

        .eyeContainer {
          position: fixed;
          top: 40px;
          width: 200px;
          height: 200px;
        }
      `}</style>
    </Layout>
  );
}