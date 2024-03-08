import './BlogIndex.less'

const BlogIndex = ({date,title,desc,url,minutesRead}) => {
  return (
    <div className="list-container">
      <div className="date">{date} &nbsp;{minutesRead}</div>
      <a href={url} className="title">{title}</a>
      <div className="desc">{desc}</div>
      <div className="read-time"></div>
    </div>
  )
}

export default BlogIndex