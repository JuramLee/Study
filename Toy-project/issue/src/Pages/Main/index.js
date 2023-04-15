import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getIssues, getTargetIssue } from '../../Reducer/issues';

import Post from './Components/post';

const Main = () => {
  const { issues } = useSelector((state) => state.issue);
  console.log(issues);
  const [per_page, setPer_page] = useState(10);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState('created');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(
      getIssues({
        per_page,
        page,
        sort,
      })
    );
  }, []);

  const onClickPost = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className='py-8'>
      {issues &&
        issues.map((issue, idx) => (
          <Post issue={issue} key={idx} onClickPost={onClickPost} />
          // <></>
        ))}
    </div>
  );
};

export default Main;
