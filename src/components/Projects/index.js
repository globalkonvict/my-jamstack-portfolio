import Card from '../Card';
import CustomScrollBar from '@components/CustomScrollBar';
import './index.sass';

function Projects({ title, subtitle, projects = [] }) {
  return (
    <section className='section section__projects'>
      <div className='columns'>
        <div className='column is-10 is-offset-1'>
          <div className='projects'>
            <div className='projects__heading'>
              <h2 className='title is-size-3 has-text-weight-bold is-bold-light has-text-centered'>{title || 'projects'}</h2>
              <p className='has-text-weight-light is-size-5 has-text-centered'>{subtitle || 'Some of the projects I have worked on'}</p>
            </div>
            <CustomScrollBar orientation='horizontal'>
              <div className='projects__content columns is-mobile'>
                {projects.map(project => {
                  return (
                    <div className='column is-12-mobile is-4-tablet ' key={project.title}>
                      <Card title={project.title} image={project.image} description={project.description} links={project.links} />
                    </div>
                  );
                })}
              </div>
            </CustomScrollBar>
            <p className='has-text-weight-light is-size-6 has-text-centered is-underlined mt-5'>Scroll horizontally to see all projects.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
