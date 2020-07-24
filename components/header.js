import AppBar from 'material-ui/AppBar';

const Header = ({ title = 'Next.js Blogger' }) => (
  <AppBar title={title} showMenuIconButton={false} />
);

export default Header;
