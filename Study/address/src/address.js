// import { useState } from 'react';
// import DaumPostcode from 'react-daum-postcode';

import { useState } from 'react';
import Post from './post';

// const Address = () => {
//   const [address, setAddress] = useState(''); // 우편번호
//   const [addressDetail, setAddressDetail] = useState(''); // 주소

//   const [isOpenPost, setIsOpenPost] = useState(false); // 모달창

//   console.log(isOpenPost);
//   const onChangeOpenPost = () => {
//     console.log(1);
//     setIsOpenPost(!isOpenPost);
//   };
//   console.log(2);
//   const onCompletePost = (data) => {
//     console.log(data);
//     let fullAddr = data.address;
//     let extraAddr = '';

//     if (data.addressType === 'R') {
//       if (data.bname !== '') {
//         extraAddr += data.bname;
//       }
//       if (data.buildingName !== '') {
//         extraAddr +=
//           extraAddr !== '' ? `, ${data.buildingName}` : data.buildingName;
//       }
//       fullAddr += extraAddr !== '' ? ` (${extraAddr})` : '';
//     } // 전체 주소 반환

//     setAddress(data.zonecode);
//     setAddressDetail(fullAddr);
//     setIsOpenPost(false);
//   };

//   const postCodeStyle = {
//     display: 'block',
//     position: 'relative',
//     top: '0%',
//     width: '400px',
//     height: '400px',
//     padding: '7px',
//   };

//   return (
//     <>
//       <button onClick={onChangeOpenPost}>change!</button>
//       {isOpenPost && (
//         <DaumPostcode
//           style={postCodeStyle}
//           autoClose
//           onComplete={onCompletePost}
//         />
//       )}
//       {/* <input type='text' value={address}></input>
//       <input type='text' value={addressDetail}></input> */}
//       <div>{address}</div>
//       <div>{addressDetail}</div>
//     </>
//   );
// };
// export default Address;

const Address = () => {
  const [enroll_company, setEnroll_company] = useState({
    address: '',
  });

  const [popup, setPopup] = useState(false);

  const handleInput = (e) => {
    setEnroll_company({
      ...enroll_company,
      [e.target.name]: e.target.value,
    });
  };

  const handleComplete = (data) => {
    setPopup(!popup);
  };

  return (
    <div className='address_search'>
      address
      <input
        className='user_enroll_text'
        placeholder='주소'
        type='text'
        required={true}
        name='address'
        onChange={handleInput}
        value={enroll_company.address}
      />
      <button onClick={handleComplete}>우편번호 찾기</button>
      {popup && (
        <Post company={enroll_company} setCompany={setEnroll_company}></Post>
      )}
    </div>
  );
};

export default Address;
