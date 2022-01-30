import React from 'react';
import PropTypes from 'prop-types';
import IndexPage from '../../templates/index-page';

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <IndexPage.Template
        skills={data.skills || {}}
        authorData={{ ...data.authorData, image: getAsset(data.authorData.image) } || {}}
        projects={data.projects || {}}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default IndexPagePreview;
