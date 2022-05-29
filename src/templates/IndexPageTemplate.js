import Skills from '@components/Skills'
import Projects from '@components/Projects'
import LatestStories from '@components/LatestStories'
import FullWidthImage from '@components/FullWidthImage'

/**
 * @description This is index page template, partially separated from main layout. This allows using partial templates for CMS Previews.
 * @param {Object} param0 Props used to display page data
 * @returns JSX.Element
 */
const IndexPageTemplate = ({ authorData, skills, projects }) => {
  return (
    <>
      <FullWidthImage authorData={authorData} />
      <Skills skills={skills.list} title={skills.title} subtitle={skills.subtitle} extra={skills.extra} />
      <Projects title={projects.title} projects={projects.list} subtitle={projects.subtitle} />
      <LatestStories />
    </>
  )
}

export default IndexPageTemplate
