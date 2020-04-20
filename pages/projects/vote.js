import Layout from '../../components/MyLayout';

const Vote = (props) => {
  return (
    <Layout isDark={true} >
      <div className="article">
        <div className="mainTextContainer">
          <div className="mainText">vote</div>
          <span className="mainTextUnderline"></span>
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

      .mainTextContainer {
        margin-bottom: 100px;
        padding-top: 14px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        overflow: hidden;
      }

      .mainText {
        font-family: Anisette;
        font-size: 40px;

        color: #5454ff;
      }

      .mainTextUnderline {
        height: 8px;
        width: 100%;

        background: #5454ff;
      }

      @media screen and (min-width: 40em) {
        .mainText {
          font-size: 100px;
        }

        .mainTextUnderline {
          height: 18px;
        }
      }
      `}</style>
    </Layout>
  );
} 

export default Vote;