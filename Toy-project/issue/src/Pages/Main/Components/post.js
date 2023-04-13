import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';

const Post = ({ issue }) => {
  return (
    <div className='w-full px-24 mb-7'>
      <div className='border border-solid border-slate-400 w-9/12 my-3.5 p-6 mx-auto cursor-pointer hover:border-fuchsia-600 hover:border-2'>
        <div className='flex justify-between'>
          <span className='underline italic'>{issue.user.login}</span>
          <span className='font-bold bg-amber-100 px-1.5'>{issue.state}</span>
        </div>
        <div className='font-bold text-lg line-clamp-1 py-2'>{issue.title}</div>
        <div className='line-clamp-5 text-slate-600 text-sm'>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {issue.body}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default Post;
