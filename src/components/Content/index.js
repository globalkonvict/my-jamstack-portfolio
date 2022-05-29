import ReactMarkdown from 'react-markdown'
import './index.sass'

export const HTMLContent = ({ content, className }) => <div className={className} dangerouslySetInnerHTML={{ __html: content }} />

export const MarkdownContent = ({ content }) => <ReactMarkdown className='markdown-renderer'>{content}</ReactMarkdown>

const Content = ({ content, className }) => <div className={className}>{content}</div>

export default Content
