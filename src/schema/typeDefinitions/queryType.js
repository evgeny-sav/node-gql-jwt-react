const QueryType = `
  type Query {
    users: [User]
    user(id: String!): User
    messages: [Message]
    message(id: String!): Message
  }
`;

export default QueryType;
