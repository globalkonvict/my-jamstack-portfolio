import Card from '../Card';
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
            <div className='projects__content columns is-multiline'>
              {projects.map(project => {
                return (
                  <div className='column is-4 is-12-mobile' key={project.title}>
                    <Card title={project.title} image={project.image} description={project.description} links={project.links} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
