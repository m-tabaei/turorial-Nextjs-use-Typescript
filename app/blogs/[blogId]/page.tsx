type blogDetailsProps = {
    params:{blogId: String}
}
function BlogDetails(props:blogDetailsProps ) {
  return (
    <div>BlogDetails - {props.params.blogId}</div>
  )
}

export default BlogDetails