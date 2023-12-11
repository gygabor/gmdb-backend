interface Movie {
  id: number
  title: string
  overview: string
  release_date: string
  vote_average: number
  vote_count: number
  poster_path: string
  backdrop_path: string
  genre_ids: number[]
  original_language: string
  original_title: string
  popularity: number
  video: boolean
  adult: boolean
}

export interface Response {
  page: number
  results: Movie[]
  total_results: number
  total_pages: number
}
