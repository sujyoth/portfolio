import Layout from '../../components/MyLayout'
import fetch from 'isomorphic-unfetch';
import Markdown from 'react-markdown';

const Post = props => (
  <Layout>
    <div className='markdown'>
    <Markdown
          source={`
### ${props.show.name}

![Batman Image](${props.show.image.medium})

${props.show.summary.replace(/<[/]?[pb]>/g, '')}
      `}
        />
    </div>
    <style jsx global>
      {`
        .markdown {
          font-family: 'Arial';
        }

        .markdown a {
          text-decoration: none;
          color: blue;
        }

        .markdown a:hover {
          opacity: 0.6;
        }

        .markdown h3 {
          margin: 0;
          padding: 0;
          text-transform: uppercase;
        }

        .markdown img:hover {
          opacity: 0.6;
        }
      `}
    </style>
  </Layout>
);

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default Post;