import { Axios } from './@core';

const MovieApi = {
  getNowPlaying(params) {
    return Axios.get('/now_playing', {
      params: {
        page: params,
      },
    });
  },
};

export default MovieApi;
