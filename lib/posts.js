export async function getAllPosts(){
    const posts = postsGenerator()
    const response = {
      data: {
        posts: {
          nodes: posts
        }
      }
    }
    return response

}

export async function getPostByUri(uri){
    const posts = postsGenerator()
    const post = posts.filter(post => post.uri === `/${uri}`)[0]
    const response = {
      data: {
        post
      }
    }
    return response
}