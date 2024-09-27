export const SingleQuery = `query MyQuery($ArticleId: ID!) {
  newBlog(where: {id: $ArticleId}) {
    created
    description
    title
    mainBlog
    image {
      url
    }
  }
}`;