import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIssues, getTargetIssue } from '../Reducer/issues';

const Main = () => {
  const dispatch = useDispatch();
  const issues = useSelector((state) => state.issue);
  console.log(issues);
  const [per_page, setPer_page] = useState(10);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState('created');

  useEffect(() => {
    dispatch(
      getIssues({
        per_page,
        page,
        sort,
      })
    );
  }, []);

  return (
    <div>
      <>:)</>
    </div>
  );
};

export default Main;
