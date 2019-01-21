const QueryType = `
  type Query {
    users: [User]
    user(id: String!): User
    messages: [Message]
    message(id: String!): Message
    movies(query: String!): [Movie]
    movie(id: Int!): Movie
    persons(query: String!): [Persons]
    person(id: Int!): Person
  }
`;

export default QueryType;
