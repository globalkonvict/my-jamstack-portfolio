import ReactMarkdown from 'react-markdown';

export const HTMLContent = ({ content, className }) => <div className={className} dangerouslySetInnerHTML={{ __html: content }} />;

export const MarkdownContent = ({ content }) => <ReactMarkdown>{content}</ReactMarkdown>;

const Content = ({ content, className }) => <div className={className}>{content}</div>;

export default Content;
