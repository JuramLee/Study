import styled from 'styled-components';
import Menu from './Components/Menu/menu';
import MovieApi from '../../Apis/movieApi';
import { useInfiniteQuery } from '@tanstack/react-query';
import MovieCard from './Components/Card/card';
import Post from './Components/Post/post';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import SkeletonCard from './Components/Card/skeleton';

const Main = () => {
  const [ref, inView] = useInView();
  const fake = new Array(20).fill(0);

  const res = useInfiniteQuery(
    ['infiniteNowPlaying'],
    ({ pageParam = 1 }) => MovieApi.getNowPlaying(pageParam),
    {
      getNextPageParam: (returned) => {
        return returned.data.page + 1;
      },
    }
  );

  useEffect(() => {
    if (!inView) return;
    console.log('refetch');
    res.fetchNextPage();
  }, [inView]);
  
  const { data, isFetchingNextPage } = res;
  console.log({ res });

  return (
    <S.Wrapper>
      <Post />
      <S.Content>
        <Menu />
        <S.MovieSection>
          {data &&
            data.pages.map((page) => {
              return (
                page &&
                page.data.results.map((movie, idx) => (
                  <MovieCard movie={movie} key={idx} />
                ))
              );
            })}

          {isFetchingNextPage && fake.map(() => <SkeletonCard />)}
          <div ref={ref}></div>
        </S.MovieSection>
      </S.Content>
    </S.Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const MovieSection = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 50px;
  border: 1px solid pink;
`;

const S = {
  Wrapper,

  Content,
  MovieSection,
};
