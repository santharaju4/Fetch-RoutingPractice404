// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {blogList: [], isLoading: true}

  componentDidMount() {
    this.getBlogListData()
  }

  getBlogListData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    console.log(data)
    const updateData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))

    console.log(updateData)
    this.setState({blogList: updateData, isLoading: false})
  }

  renderBlogListItem = () => {
    const {blogList} = this.state

    return (
      <ul className="blogs-list">
        {blogList.map(eachBlog => (
          <BlogItem key={eachBlog.id} blogItemDetails={eachBlog} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="blog-list-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.renderBlogListItem()
        )}
      </div>
    )
  }
}

export default BlogList
