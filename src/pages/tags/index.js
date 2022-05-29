import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title }
    }
  }
}) => (
  <section className='section'>
    <Helmet title={`Tags | ${title}`} />
    <div className='container content'>
      <div className='columns'>
        <div className='column is-10 is-offset-1' style={{ marginBottom: '6rem' }}>
          <h1 className='title is-size-2 is-bold-light'>Tags</h1>
          <div className='field is-grouped is-grouped-multiline'>
            {group.map(tag => (
              <div class='control'>
                <div class='tags has-addons'>
                  <Link className='tag is-primary is-large' key={tag.fieldValue} to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                    {tag.fieldValue}
                  </Link>
                  <span class='tag is-warning is-large'>{tag.totalCount}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
