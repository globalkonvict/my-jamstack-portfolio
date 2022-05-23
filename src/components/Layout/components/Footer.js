import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { FaStackOverflow, FaTwitter, FaLinkedin, FaGithubSquare, FaInstagramSquare, FaLinkedinIn } from 'react-icons/fa';
import useSiteSettings from '@utils/SiteSettings';

const Footer = () => {
  const { social } = useSiteSettings();

  return (
    <footer className='footer has-background-black has-text-white-ter'>
      <div className='content has-text-centered'>
        <img className='image footer-logo' src='/static/c247bbf9c07bc87275067ff22fbb5a43/GK_LOGO.png' alt='Logo' />
        <p className='is-size-1 is-size-3-mobile footer-logo'>GlobalKonvict</p>
      </div>
      <div className='content has-text-centered has-background-black has-text-white-ter'>
        <div className='container has-background-black has-text-white-ter'>
          <div style={{ maxWidth: '100vw' }} className='columns'>
            <div className='column is-4'>
              <section className='menu'>
                <ul className='menu-list'>
                  <li>
                    <Link to='/' className='navbar-item'>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className='navbar-item' to='/about'>
                      About
                    </Link>
                  </li>
                  <li>
                    <a className='navbar-item' href='/admin/' target='_blank' rel='noopener noreferrer'>
                      Admin
                    </a>
                  </li>
                </ul>
              </section>
            </div>
            <div className='column is-4'>
              <section>
                <ul className='menu-list'>
                  <li>
                    <Link className='navbar-item' to='/blog'>
                      Latest Articles
                    </Link>
                  </li>
                  <li>
                    <Link className='navbar-item' to='/contact'>
                      Contact
                    </Link>
                  </li>
                </ul>
              </section>
            </div>
            <div className='column is-4 social'>
              {social.github && (
                <a title='github' href={social.github} target='_blank'>
                  <span className='icon'>
                    <FaGithubSquare />
                  </span>
                </a>
              )}
              {social.stackoverflow && (
                <a title='stackoverflow' href={social.stackoverflow} target='_blank'>
                  <span className='icon'>
                    <FaStackOverflow />
                  </span>
                </a>
              )}
              {social.linkedin && (
                <a title='linkedin' href={social.linkedin} target='_blank'>
                  <span className='icon'>
                    <FaLinkedinIn />
                  </span>
                </a>
              )}
              {social.twitter && (
                <a title='twitter' href={social.twitter} target='_blank'>
                  <span className='icon'>
                    <FaTwitter />
                  </span>
                </a>
              )}
              {social.instagram && (
                <a title='instagram' href={social.instagram} target='_blank'>
                  <span className='icon'>
                    <FaInstagramSquare />
                  </span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
