import Layout from "../components/MyLayout";

export default function About() {
  return (
    <Layout>
      <div className="aboutContainer">
        <h1 style={{color: "white"}}>This is the about page</h1>
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
          background: #89143b;
        }
      `}</style>
    </Layout>
  );
}