import { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';

const Address = () => {
  const [address, setAddress] = useState(''); // 우편번호
  const [addressDetail, setAddressDetail] = useState(''); // 주소

  const [isOpenPost, setIsOpenPost] = useState(false); // 모달창

  const onChangeOpenPost = () => {
    setIsOpenPost(!isOpenPost);
  };

  const onCompletePost = (data) => {
    console.log(data);
    let fullAddr = data.address;
    let extraAddr = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddr += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddr +=
          extraAddr !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddr += extraAddr !== '' ? ` (${extraAddr})` : '';
    } // 전체 주소 반환

    setAddress(data.zonecode);
    setAddressDetail(fullAddr);
    setIsOpenPost(false);
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
    <>
      <button onClick={onChangeOpenPost}>change!</button>
      {isOpenPost ? (
        <DaumPostcode
          style={postCodeStyle}
          autoClose
          onComplete={onCompletePost}
        />
      ) : null}
      {/* <input type='text' value={address}></input>
      <input type='text' value={addressDetail}></input> */}
      <div>{address}</div>
      <div>{addressDetail}</div>
    </>
  );
};
export default Address;
