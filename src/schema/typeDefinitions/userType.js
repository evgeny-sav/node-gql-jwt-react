const UserType = `
  type User {
    id: String!
    name: String
    username: String
    email: String
    phone: String
    website: String
    createdAt: String
    updatedAt: String
    messages: [Message]
  }
`;

export default UserType;
