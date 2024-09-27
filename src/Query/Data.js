export const BlogQuery = `query MyQuery {
  newBlogs {
    created
    description
    id
    image {
      url
    }
    title
    mainBlog
  }
}`;