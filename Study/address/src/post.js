// import DaumPostcode from 'react-daum-postcode';

// const Post = ({ setAddress, setAddressDetail, setIsOpenPost }) => {
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
//     <DaumPostcode style={postCodeStyle} autoClose onComplete={onCompletePost} />
//   );
// };

// export default Post;

import React, { useEffect, useState } from 'react';
import DaumPostcode from 'react-daum-postcode';

const Post = (props) => {
  const complete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    console.log(data);
    console.log(fullAddress);
    console.log(data.zonecode);

    props.setCompany({
      ...props.company,
      address: fullAddress,
    });
  };

  const postCodeStyle = {
    display: 'block',
    position: 'relative',
    top: '0%',
    width: '400px',
    height: '400px',
    padding: '7px',
  };

  return (
    <div>
      <DaumPostcode style={postCodeStyle} autoClose onComplete={complete} />
    </div>
  );
};

export default Post;
