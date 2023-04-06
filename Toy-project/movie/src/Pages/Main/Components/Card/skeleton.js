// npm i @mui/material @emotion/react @emotion/styled @mui/styled-engine-sc
import Skeleton from '@mui/material/Skeleton';

const SkeletonCard = () => {
  return (
    <>
      <Skeleton
        sx={{
          width: 200,
          height: 330,
          borderRadius: '5px',
          bgcolor: 'grey.500',
          marginRight: '10px',
          marginLeft: '10px',
          my: '10px',
        }}
        variant='rectangular'
        animation='wave'
      />
    </>
  );
};

export default SkeletonCard;
