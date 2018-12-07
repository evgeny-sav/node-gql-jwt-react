const QueryType = `
  type Query {
    users: [User]
    user(id: String!): User
    messages: [Message]
    message(id: String!): Message
    movies(query: String!): [Movie]
    movie(id: Int!): Movie
  }
`;

export default QueryType;
