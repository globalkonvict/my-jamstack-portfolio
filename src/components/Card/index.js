import { useState } from 'react'
import Modal from 'react-modal'
import classNames from 'classnames'
import { FaTimes } from 'react-icons/fa'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import { CgMoreVerticalO } from 'react-icons/cg'
import { MarkdownContent } from '@components/Content'

import './index.sass'

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '90%',
    width: '600px',
    boxShadow: '0 0 30px rgb(0 0 0 / 30%)',
    border: 0,
    borderRadius: '10px',
    padding: 0
  }
}

function Card ({ title, description, image, links }) {
  const [modalIsOpen, setIsOpen] = useState(false)

  const renderLinks = (offset = false) => (
    <div className={classNames('column is-11', { 'is-offset-1': offset })}>
      <div className='tags-container columns is-multiline is-mobile'>
        {links.map(link => {
          return (
            <a
              className='tag is-medium is-size-7-mobile is-size-6-tablet tech-tag is-primary'
              href={link.url}
              key={link.text}
              target='_blank'
              rel='noreferrer'
            >
              {link.text}
            </a>
          )
        })}
      </div>
    </div>
  )
  return (
    <div className='card project-card'>
      <Modal isOpen={modalIsOpen} style={modalStyles} onRequestClose={() => setIsOpen(false)}>
        <div className='box p-4'>
          <div className='columns is-mobile'>
            <div className='column is-10'>
              <h3 className='title is-3 '>{title}</h3>
            </div>
            <div className='column is-2'>
              <span className='icon is-large close-icon-modal'>
                <FaTimes onClick={() => setIsOpen(false)} />
              </span>
            </div>
          </div>
          <hr className='project-modal-heading-separator' />
          <MarkdownContent content={description} />
          <hr className='mb-3' />
          {links && renderLinks()}
        </div>
      </Modal>
      <GatsbyImage
        image={getImage(image)}
        objectFit='cover'
        alt={title}
        formats={['auto', 'webp', 'avif']}
        className={classNames('project-card__image')}
      />
      <div role='presentation' className='project-card__content'>
        <div className='columns is-multiline is-mobile'>
          <div className='column is-11 is-offset-1'>
            <p className='is-size-3-tablet is-size-4-mobile is-bold project-card__title'>{title}</p>
          </div>
          {links && renderLinks(true)}
          <div className='column is-11 is-offset-1'>
            <button className='button is-normal is-rounded is-danger more-btn is-responsive' onClick={() => setIsOpen(true)}>
              <span className='icon is-small'>
                <CgMoreVerticalO className='project-card__btn' />
              </span>
              <span className='is-size-6' data-tooltip='See more details'>
                More
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
