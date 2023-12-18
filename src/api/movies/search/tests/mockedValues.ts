export const mockedMovie = {
  id: 1,
  title: 'test',
  poster_path: '/path',
  overview: 'overview',
  release_date: '2021-01-01',
  vote_average: 3.5,
  vote_count: 100,
  backdrop_path: '/path/backdrop',
  genre_ids: [1, 2, 3],
  original_language: 'en',
  original_title: 'test',
  popularity: 100,
  video: false,
  adult: false,
}

export const responseTmdb = {
  page: 1,
  results: [mockedMovie],
  total_pages: 1,
  total_results: 1,
}

export const noResponseTmdb = {
  page: 1,
  results: [],
  total_pages: 1,
  total_results: 0,
}

export const responseApi = {
  ...responseTmdb,
  source: 'tmdb',
}

export const responseDb = {
  ...responseTmdb,
  source: 'cache',
}
