import classNames from 'classnames';
import { useState } from 'react';
import MarkdownContent from '../Content';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import './index.sass';

function Skills({ skills = [], title, subtitle, extra = '' }) {
  const [tabs, setTabs] = useState('all');

  const onTabChange = tab => {
    setTabs(tab);
  };

  return (
    <section className='section section__skills'>
      <div className='container'>
        <div className='columns'>
          <div className='column is-12'>
            <div className='skills'>
              <div className='skills__heading'>
                <h2 className='title is-size-3 has-text-weight-bold is-bold-light has-text-centered'>{title}</h2>
                <p className='has-text-weight-light is-size-5 has-text-centered'>{subtitle} </p>
                <div className='tabs is-fullwidth'>
                  <ul>
                    <li
                      role='presentation'
                      className={classNames({ 'is-active': tabs === 'all' }, 'tabs__item')}
                      onClick={() => onTabChange('all')}
                      onKeyDown={() => onTabChange('all')}
                    >
                      All
                    </li>
                    <li
                      role='presentation'
                      className={classNames({ 'is-active has-text-weight-bold': tabs === 'language' }, 'tabs__item')}
                      onClick={() => onTabChange('language')}
                      onKeyDown={() => onTabChange('language')}
                    >
                      Languages
                    </li>
                    <li
                      role='presentation'
                      className={classNames({ 'is-active': tabs === 'framework' }, 'tabs__item')}
                      onClick={() => onTabChange('framework')}
                      onKeyDown={() => onTabChange('framework')}
                    >
                      Frameworks
                    </li>
                    <li
                      role='presentation'
                      className={classNames({ 'is-active': tabs === 'tools' }, 'tabs__item')}
                      onClick={() => onTabChange('tools')}
                      onKeyDown={() => onTabChange('tools')}
                    >
                      Tools
                    </li>
                  </ul>
                </div>
              </div>
              <div className='skills__content columns is-multiline is-mobile is-centered'>
                {skills.map(icon => {
                  return tabs === 'all' || icon.type === tabs ? (
                    <div
                      className='column is-centered is-2-tablet is-4-mobile has-text-centered has-tooltip-arrow has-tooltip-bottom has-tooltip-primary '
                      key={icon.classNames}
                      data-tooltip={icon.skillName}
                    >
                      {icon?.image ? (
                        <GatsbyImage image={getImage(icon?.image)} objectFit='contain' className='skills__icons' formats={['auto', 'webp', 'avif']} />
                      ) : (
                        <i className={`${icon.classNames} skills__icons`} />
                      )}
                    </div>
                  ) : null;
                })}
              </div>
              <p className='has-text-weight-light is-size-6 has-text-centered is-underlined'>Hovering on skill icon will show skill name.</p>
              {extra ? (
                <div className='skills__footer'>
                  <MarkdownContent content={extra ?? null} />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
