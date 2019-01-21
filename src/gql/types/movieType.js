const MovieType = `
  type Movie {
    id: Int!
    title: String
    overview: String
    poster_path: String
    release_date: String
    adult: Boolean
    vote_average: Float
    vote_count: Int
    video: Boolean
    popularity: Float
    genre_ids: [Int]
    original_language: String
    character: String
    original_title: String
    backdrop_path: String
    credit_id: String
  }
`;

export default MovieType;
