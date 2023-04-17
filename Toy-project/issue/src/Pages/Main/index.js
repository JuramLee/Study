import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getIssues, getTargetIssue } from '../../Reducer/issues';

import Post from './Components/post';
import FilterOption from './Components/filter';

const Main = () => {
  const { issues } = useSelector((state) => state.issue);
  console.log(issues);
  const [per_page, setPer_page] = useState(10);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState('created');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(
      getIssues({
        per_page,
        page,
        sort,
      })
    );
  }, []);

  useEffect(() => {
    if (!searchParams.get('per_page')) return;
    dispatch(
      getIssues({
        per_page: searchParams.get('per_page'),
        page: searchParams.get('page'),
        sort: searchParams.get('sort'),
      })
    );
  }, [searchParams]);

  const onClickPost = (id) => {
    navigate(`/detail/${id}`);
  };

  const onClickOption = (option) => {
    setSort(option);
    setSearchParams({
      per_page,
      page,
      sort: option,
    });
  };

  const onClickCount = (count) => {
    setPer_page(count);
    setSearchParams({
      per_page: count,
      page,
      sort,
    });
  };

  return (
    <div className='py-8'>
      <FilterOption onClickOption={onClickOption} onClickCount={onClickCount} />
      {issues &&
        issues.map((issue, idx) => (
          <Post issue={issue} key={idx} onClickPost={onClickPost} />
        ))}
    </div>
  );
};

export default Main;
