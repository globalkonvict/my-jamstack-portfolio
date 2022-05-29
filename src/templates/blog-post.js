import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import { HTMLContent } from '@components/Content'
import BlogPostTemplate from '@templates/BlogPostTemplate'

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={
        <Helmet titleTemplate='%s | Blog'>
          <title>{`${post.frontmatter.title}`}</title>
          <meta name='description' content={`${post.frontmatter.description}`} />
        </Helmet>
      }
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
      date={post.frontmatter.date}
    />
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY hh:mm A")
        title
        description
        tags
      }
    }
  }
`
