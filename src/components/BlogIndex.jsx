import './BlogIndex.less'

const BlogIndex = ({date,title,desc,url}) => {
  return (
    <div className="list-container">
      <div className="date">{date}</div>
      <a href={url} className="title">{title}</a>
      <div className="desc">{desc}</div>
    </div>
  )
}

export default BlogIndex