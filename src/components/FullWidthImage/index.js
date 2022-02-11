import PropTypes from 'prop-types';
import Typical from 'react-typical';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import './index.sass';

export default function FullWidthImage({ authorData }) {
  const { introduction, image, typingText, about, background } = authorData;
  return (
    <section className='hero-section'>
      <div className='hero-container'>
        <GatsbyImage image={getImage(background)} objectFit={'cover'} className='background-img' alt='' formats={['auto', 'webp', 'avif']} />
        <div className='container'>
          <div className=' columns is-vcentered is-centered hero-columns'>
            <div className='column is-one-third-widescreen is-12-mobile author-image'>
              <GatsbyImage
                image={getImage(image)}
                objectFit={'cover'}
                className='profile-img'
                formats={['auto', 'webp', 'avif']}
                id='profile-img-id'
                imgClassName='profile-img-class'
              />
            </div>
            <div className='column is-12-mobile hero-text-container'>
              {(introduction || image) && (
                <div className='hero-description'>
                  {introduction && (
                    <h1 className='has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen heading-main'>{introduction}</h1>
                  )}
                  {typingText && (
                    <span className='has-text-weight-bold is-size-5-mobile is-size-3-tablet heading-main'>
                      <Typical
                        steps={typingText
                          .map(item => {
                            return [item.iAm, item.delay];
                          })
                          .flat()}
                        loop={Infinity}
                        wrapper='p'
                      />
                    </span>
                  )}
                  <p
                    className='about-me is-size-6-mobile is-size-4-tablet has-text-weight-light'
                    dangerouslySetInnerHTML={{
                      __html: about.replaceAll('[', '<span class="highlight has-text-weight-bold">').replaceAll(']', '</span>'),
                    }}
                  ></p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

FullWidthImage.propTypes = {
  authorData: PropTypes.object,
};
