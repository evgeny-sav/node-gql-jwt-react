const PersonsType = `
  type Persons {
    id: Int!
    popularity: Float
    profile_path: String
    name: String
    known_for: [Movie]
    adult: Boolean
  }
`;

export default PersonsType;
