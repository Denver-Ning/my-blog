import './BlogIndex.less'

const BlogIndex = ({date,title,desc,url}) => {
  return (
    <div class="list-container">
      <div class="date">{date}</div>
      <a href={url} class="title">{title}</a>
      <div class="desc">{desc}</div>
    </div>
  )
}

export default BlogIndex