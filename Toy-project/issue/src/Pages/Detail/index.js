import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';

const Detail = () => {
  const { issues } = useSelector((state) => state.issue);
  const { id } = useParams();
  const idx = issues.findIndex((item) => item.id == id);
  const post = issues[idx];
  console.log('포스트', post);

  return (
    <div className='w-full p-24 font-mono'>
      <div className='border border-fuchsia-600 p-24'>
        <div className='flex justify-between mb-7'>
          <span className='text-2xl font-bold bg-amber-100 px-1.5'>
            {post.state}
          </span>
          <span className='text-2xl italic'>{post.user.login}</span>
        </div>
        <div className='flex justify-between text-slate-600'>
          <span>{post.created_at}</span>
          <span>{post.updated_at}</span>
        </div>
        <div className='text-3xl underline mb-12'>{post.title}</div>
        <div>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default Detail;
