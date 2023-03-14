// Write your JS code here

import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {id, topic, imageUrl, avatarUrl, author, title} = blogItemDetails

  return (
    <Link className="blog-item-link " to={`/blogs/${id}`}>
      <div className="item-container">
        <img className="item-image" src={imageUrl} alt={`item${id}`} />
        <div className="item-info">
          <p className="item-topic">{topic}</p>
          <h1 className="item-title">{title}</h1>
          <div className="author-info">
            <img className="avatar" src={avatarUrl} alt={`avatar${id}`} />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
