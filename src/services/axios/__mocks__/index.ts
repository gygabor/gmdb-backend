const client = {
  get: jest.fn((url) => {
    if (url.includes('movies/search')) {
      return Promise.resolve({
        data: { page: 1, results: [], total_pages: 1, total_results: 0 },
      })
    }
  }),
}

export default {
  client,
}
