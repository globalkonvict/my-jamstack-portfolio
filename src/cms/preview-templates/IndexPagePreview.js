import IndexPage from '../../templates/IndexPageTemplate'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPage.Template
        skills={data.skills || {}}
        authorData={{ ...data.authorData, image: getAsset(data.authorData.image) } || {}}
        projects={data.projects || {}}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

export default IndexPagePreview
