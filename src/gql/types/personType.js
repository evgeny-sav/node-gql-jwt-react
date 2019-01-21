const PersonType = `
  type Crew {
    id: Int
    department: String
    original_language: String
    original_title: String
    job: String
    overview: String
    genre_ids: [Int]
    video: Boolean
    credit_id: String
    release_date: String
    popularity: Float
    vote_average: Float
    vote_count: Int
    title: String
    adult: Boolean
    backdrop_path: String
    poster_path: String
  }
  
  type MovieCredits {
    cast: [Movie]
    crew: [Crew]
  }

  type Person {
    birthday: String
    known_for_department: String
    deathday: String
    id: Int
    name: String
    movie_credits: MovieCredits 
    also_known_as: [String]
    gender: Int
    biography: String
    popularity: Float
    place_of_birth: String
    profile_path: String
    adult: Boolean
    imdb_id: String
    homepage: String
  }
`;

export default PersonType;

//
// {
//   "vote_average": 7.7,
//   "vote_count": 11355,
//   "id": 22,
//   "video": false,
//   "media_type": "movie",
//   "title": "Pirates of the Caribbean: The Curse of the Black Pearl",
//   "popularity": 48.398,
//   "poster_path": "/tkt9xR1kNX5R9rCebASKck44si2.jpg",
//   "original_language": "en",
//   "original_title": "Pirates of the Caribbean: The Curse of the Black Pearl",
//   "genre_ids": [
//   12,
//   14,
//   28
// ],
//   "backdrop_path": "/8AUQ7YlJJA9C8kWk8P4YNHIcFDE.jpg",
//   "adult": false,
//   "overview": "Jack Sparrow, a freewheeling 19th-century pirate, quarrels with a rival pirate bent on pillaging Port Royal. When the governor's daughter is kidnapped, Sparrow decides to help the girl's love save her.",
//   "release_date": "2003-07-09"
// },
