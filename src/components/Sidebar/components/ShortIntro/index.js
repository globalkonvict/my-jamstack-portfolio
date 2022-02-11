import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { FaStackOverflow, FaTwitter, FaLinkedin, FaGithubSquare, FaInstagramSquare } from 'react-icons/fa';
import { useSiteSettings } from '@utils';

import './index.sass';

const BioHome = () => {
  const { social, authorName, aboutAuthor } = useSiteSettings();
  const { avatar } = useStaticQuery(graphql`
    query HomeBioQuery {
      avatar: file(absolutePath: { regex: "/cap_profile_img.jpg/" }) {
        childImageSharp {
          gatsbyImageData(quality: 20, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  `);

  return (
    <div className='card has-text-centered author-card'>
      <header className='card-header author-title'>
        <p className='card-header-title is-centered is-size-5'>Author</p>
      </header>
      <div className='card-image has-padding-20'>
        <GatsbyImage image={getImage(avatar)} objectFit={'cover'} className='author-image' />
      </div>
      <div className='card-content'>
        <div className='content'>
          <h4 className='is-size-6 '>{authorName}</h4>
          <p className='is-size-6 '>{aboutAuthor}</p>
        </div>
      </div>
      <footer className='card-footer'>
        <a href={social.twitter} target='_blank' className='card-footer-item' rel='noopener noreferrer'>
          <span className='icon'>
            <FaTwitter />
          </span>
        </a>
        <a href={social.stackoverflow} target='_blank' className='card-footer-item' rel='noopener noreferrer'>
          <span className='icon'>
            <FaStackOverflow />
          </span>
        </a>
        <a href={social.linkedin} target='_blank' className='card-footer-item' rel='noopener noreferrer'>
          <span className='icon'>
            <FaLinkedin />
          </span>
        </a>
        <a href={social.github} target='_blank' className='card-footer-item' rel='noopener noreferrer'>
          <span className='icon'>
            <FaGithubSquare />
          </span>
        </a>
        <a href={social.instagram} target='_blank' className='card-footer-item' rel='noopener noreferrer'>
          <span className='icon'>
            <FaInstagramSquare />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default BioHome;
