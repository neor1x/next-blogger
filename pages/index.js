import Header from '../components/header';
import withMui from '../shared/withMUI';
import 'isomorphic-fetch';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Link from 'next/link';

const Index = ({ posts }) => (
  <div>
    <style jsx>
      {`
        .post-link {
          text-decoration: none;
          color: #fff;
          font-size: 18px;
        }
      `}
    </style>
    <Header />
    {posts.map(post => (
      <Card key={post.id}>
        <CardHeader title={post.title} />
        <CardText>
          <Link prefetch href={`/post?id=${post.id}`} as={`/blog/${post.id}`}>
            <RaisedButton fullWidth={true} primary>
              <a className="post-link">Click to view post!</a>
            </RaisedButton>
          </Link>
        </CardText>
      </Card>
    ))}
  </div>
);

Index.getInitialProps = async () => {
  const response = await fetch(
    `${process.env.BLOGGER_URL}?key=${process.env.API_KEY}`
  );
  const data = await response.json();
  return {
    posts: data.items
  };
};

export default withMui(Index);
