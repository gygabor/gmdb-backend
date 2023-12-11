const queries = {
  save: 'INSERT INTO movie_searches (query, page, results, time) VALUES ($1, $2, $3, $4)',
}

export default queries
