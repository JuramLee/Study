import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';

const Post = ({ issue }) => {
  return (
    <div className='w-full px-24 '>
      <div className='border border-solid border-slate-400 w-9/12 my-3.5 p-6 mx-auto'>
        <div>{issue.state}</div>
        <div className='line-clamp-5'>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {issue.body}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default Post;
