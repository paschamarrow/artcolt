import React from 'react'
import DisplayProps from './DisplayProps';

const Feed = ({feed}) => {
  return (
    <div>{feed.map(post => <DisplayProps post={post} />)}</div>
  )
}

export default Feed