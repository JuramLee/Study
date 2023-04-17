// import { useState } from 'react';

const FilterOption = ({ onClickOption, onClickCount }) => {
  return (
    <>
      <select onClick={(e) => onClickOption(e.target.value)}>
        <option value={'created'}>생성순</option>
        <option value={'updated'}>업데이트순</option>
        <option value={'comments'}>댓글순</option>
      </select>
      <select onClick={(e) => onClickCount(e.target.value)}>
        <option value={10}>10개씩</option>
        <option value={20}>20개씩</option>
        <option value={50}>50개씩</option>
      </select>
    </>
  );
};

export default FilterOption;
