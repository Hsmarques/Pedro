import React, { useState, useEffect } from 'react'
import Image from './Image'

import './InstagramFeed.css'

const useInstagram = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch('/.netlify/functions/instagram')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data)
      })
  }, [])
  return posts
}

export const Instagram = () => {
  const gramz = useInstagram()

  const renderLoadingItems = () => (
    <div className="InstagramFeed">
      {[...Array(8)].map((x, index) => (
        <div
          className="InstagramFeed--EmptyPost"
          data-display="Loading"
          key={`EmptyPost-${index}`}
        />
      ))}
    </div>
  )
  if (!gramz.length) {
    return renderLoadingItems()
  }
  return (
    <div className="InstagramFeed">
      {gramz.map((post) => (
        <Post
          key={post.id}
          src={post.thumbnail}
          url={post.url}
          caption={post.caption}
        />
      ))}
    </div>
  )
}

const Post = ({ src, url }) => (
  <a
    className="InstagramFeed--EmptyPost InstagramFeed--EmptyPost-loaded"
    href={url}
    rel="noopener noreferrer"
    target="_blank"
    aria-label="Instagram Post Link"
  >
    <Image background src={src} lazy alt="instagram image" />
  </a>
)
