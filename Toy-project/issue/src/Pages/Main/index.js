import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getIssues, getTargetIssue } from '../../Reducer/issues';

import Post from './Components/post';
import FilterOption from './Components/filter';
import Pagination from './Components/pagination';

const Main = () => {
  const { issues } = useSelector((state) => state.issue);
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
    // setPer_page(searchParams.get('per_page'));
    // setSort(searchParams.get('sort'));
    // setPage(searchParams.get('page'));
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

  const onClickPage = (pageNum) => {
    setPage(pageNum);
    setSearchParams({
      per_page,
      page: pageNum,
      sort,
    });
  };

  const onClickPrevious = (pageNum) => {
    const paramOffset = parseInt(searchParams.get('page'));
    setPage(paramOffset);
    setSearchParams({
      per_page,
      page: pageNum,
      sort,
    });
  };

  const onClickNext = (pageNum) => {
    setPage(pageNum);
    setSearchParams({
      per_page,
      page: pageNum,
      sort,
    });
  };

  const onClickLast = (last) => {
    setPage(last);
    setSearchParams({
      per_page,
      page: last,
      sort,
    });
  };

  const onClickFirst = (first) => {
    setPage(first);
    setSearchParams({
      per_page,
      page: first,
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
      <Pagination
        page={page}
        setPage={setPage}
        per_page={per_page}
        sort={sort}
        onClickPage={onClickPage}
        onClickPrevious={onClickPrevious}
        onClickNext={onClickNext}
        onClickLast={onClickLast}
        onClickFirst={onClickFirst}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
    </div>
  );
};

export default Main;
