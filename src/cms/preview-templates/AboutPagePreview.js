import AboutPageTemplate from '../../templates/AboutPageTemplate';

const AboutPagePreview = ({ entry, widgetFor }) => <AboutPageTemplate title={entry.getIn(['data', 'title'])} content={widgetFor('body')} />;

export default AboutPagePreview;
