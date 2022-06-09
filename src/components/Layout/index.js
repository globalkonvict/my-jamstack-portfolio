import Modal from 'react-modal';
import { withPrefix } from 'gatsby';
import { Helmet } from 'react-helmet';
import Footer from '@layout/components/Footer';
import Navbar from '@layout/components/Navbar';
import CustomScrollBar from '@components/CustomScrollBar';
import useSiteMetadata from '@utils/useSiteMetadata';
import 'synthwave-vscode/synthwave84.css';
import './index.sass';

// Mount Modal
Modal.setAppElement('#___gatsby');
const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div className='layout'>
      <CustomScrollBar>
        <Helmet>
          <html lang='en' />
          <title>{title}</title>
          <meta name='description' content={description} />
          <link rel='apple-touch-icon' sizes='180x180' href={`${withPrefix('/')}img/GK_Favicon_apple_touch_icon.png`} />
          <link rel='icon' type='image/png' href={`${withPrefix('/')}img/GK_Favicon_32x32.png`} sizes='32x32' />
          <link rel='icon' type='image/png' href={`${withPrefix('/')}img/GK_Favicon_16x16.png`} sizes='16x16' />
          <link rel='mask-icon' href={`${withPrefix('/')}img/GK_safari-pinned-tab.svg`} color='#0A81FF' />
          <meta name='theme-color' content='#fff' />
          <meta property='og:title' content={title} />
          <meta property='og:url' content='/' />
          <meta property='og:image' content={`${withPrefix('/')}img/GK_LOGO.png`} />
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        </Helmet>
        <Navbar />
        <>{children}</>
        <Footer />
      </CustomScrollBar>
    </div>
  );
};

export default TemplateWrapper;
