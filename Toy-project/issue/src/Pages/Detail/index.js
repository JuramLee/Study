import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { issues } = useSelector((state) => state.issue);
  const { id } = useParams();
  const idx = issues.findIndex((item) => item.id == id);
  const post = issues[idx];
  console.log('포스트', post);

  return (
    <div className='w-full p-28'>
      <div className='border border-fuchsia-600 p-28'>
        <div>
          <span>{post.state}</span>
        </div>
      </div>
    </div>
  );
};

export default Detail;
