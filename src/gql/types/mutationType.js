const MutationType = `
  type Mutation {
    addUser(
      name: String
      username: String
      email: String
      phone: String
      website: String
    ): User

    deleteUser(
      id: String!
    ): User

    editUser(
      id: String!
      name: String
      username: String
      email: String
      phone: String
      website: String
    ): User

    addMessage(
      userId: String
      body: String
    ): Message
  }
`;
export default MutationType;
