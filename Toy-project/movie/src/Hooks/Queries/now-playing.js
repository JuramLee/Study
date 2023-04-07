import { useQuery } from '@tanstack/react-query';
import MovieApi from 'Apis/movieApi';
import { queryConfig } from './@config';

export const useNowPlaying = nowPlayingLst => {
	const { data: nowPlaying, isLoading } = useQuery(
		['NOW_PLAYING'],
		() => MovieApi.getNowPlaying(nowPlayingLst),
		queryConfig,
	);
	return { nowPlaying, isLoading };
};
