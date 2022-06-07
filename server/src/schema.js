const { gql } = require("apollo-server");

const typeDefs = gql`
  # Schema definitions go here
  type Query {
    "Get tracks array for homepage grid"
    tracksForHome: [Track!]!
  }
  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    "Track title, required"
    title: String!
    "Track author, required"
    author: Author!
    "Track thumbnail, URL to the image, optional"
    thumbnail: String
    "Track length"
    length: Int
    "Modules count"
    modulesCount: Int
    "The track's complete description, can be in Markdown format"
    description: String
    "The number of times a track has been viewed"
    numberOfViews: Int
    "Track's modules"
    modules: [Module!]!
  }
  "Author of a complete Track or a Module"
  type Author {
    id: ID!
    "Author name, required"
    name: String!
    "Photo URL"
    photo: String
  }
  "A Module is a single unit of teaching. Multiple Modules compose a Track"
  type Module {
    id: ID!
    "The Module's title"
    title: String!
    "The Module's length in minutes"
    length: Int
  }
`;
module.exports = typeDefs;
