import Layout from '../../components/MyLayout';

const Vote = (props) => {
  return (
    <Layout isDark={true} >
      <div className="article">
        <div className="header">
          <div className="main">
            <div className="mainText">vote</div>
            <div className="mainUnderline"></div>
          </div>
        </div>
      </div>
      <style jsx>{`
      .article {
        height: 100%;
        overflow-y: auto;
        box-sizing: border-box;

        padding-top: 160px;
        margin: 0;
        background: #fff;
      }

      .header {
        margin-bottom: 100px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        overflow: hidden;
      }

      .main {
        display: flex;
        flex-direction: column; 
        padding-top: 14px;

        height: 64px;
      }

      .mainText {
        font-family: Anisette;
        font-size: 40px;

        color: #5454ff;
      }

      .mainUnderline {
        height: 8px;
        width: 100%;

        background: #5454ff;
      }

      @media screen and (min-width: 40em) {
        .main {
          height: 140px;
        }

        .mainText {
          font-size: 100px;
        }

        .mainUnderline {
          height: 18px;
        }
      }
      `}</style>
    </Layout>
  );
}

export default Vote;