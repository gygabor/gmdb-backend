interface Queries {
  insertMovies: string
  getMovies: string
  updateCount: string
}

const queries: Queries = {
  insertMovies:
    'INSERT INTO movie_searches (query, page, response, time) VALUES ($1, $2, $3, $4)',
  getMovies: `SELECT id, response FROM movie_searches WHERE query = $1 AND page = $2 AND time > NOW() - INTERVAL '2 minutes'`,
  updateCount:
    'UPDATE movie_searches SET request_count = request_count + 1 WHERE id = $1',
}

export default queries
