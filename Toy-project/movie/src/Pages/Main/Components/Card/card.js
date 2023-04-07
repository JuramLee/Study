import React from 'react';
import styled from 'styled-components';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w1280/';

function MovieCard({ movie }) {
  return (
    <S.Wrapper>
      <S.Container>
        <S.MoviePoster
          src={
            movie.poster_path
              ? IMG_BASE_URL + movie.poster_path
              : '/Assets/backdrop.png'
          }
        />
        <S.MovieInfo>
          <div>
            <S.MovieTitle>{movie.title}</S.MovieTitle>
            <S.Rating>⭐{movie.vote_average}</S.Rating>
          </div>
          <S.OverviewText>{movie.overview}</S.OverviewText>
        </S.MovieInfo>
      </S.Container>
    </S.Wrapper>
  );
}

export default MovieCard;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
`;

const Container = styled.div`
  cursor: pointer;
  width: 200px;
  height: 330px;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;

  :hover {
    & > img {
      height: 0%;
    }
  }
`;

const MoviePoster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

const MovieInfo = styled.div`
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: black;
  color: white;

  & div {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }
`;

const MovieTitle = styled.h3`
  font-size: 20px;
  font-weight: bolder;
  margin-bottom: 15px;
`;

const Rating = styled.span`
  background-color: #f44336;
  color: #fff;
  width: 50px;
  text-align: center;
  padding: 5px;
  border-radius: 5px;
  font-size: 13px;
  font-weight: bold;
`;

const OverviewText = styled.span`
  font-size: 15px;
  font-weight: lighter;
  line-height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 10px;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;

const S = {
  Wrapper,
  Container,
  MoviePoster,
  MovieInfo,
  MovieTitle,
  Rating,
  OverviewText,
};
