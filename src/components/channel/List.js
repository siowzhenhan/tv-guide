import React, { useState } from 'react'

import ChannelCard from './Card'
import Search from '../filter/Search'

const ChannelList = ({ data, handleNameSearchProps }) => {
  const [nameSearch, setNameSearch] = useState('')

  const onNameChange = e => {
    setNameSearch(e.target.value)
    handleNameSearchProps(e.target.value)
  }

  return (
    <>
      <Search handleNameSearchProps={handleNameSearchProps} />

      <div className='wrapper-grid'>
        {data.map(d => (
          <ChannelCard key={d.id} data={d} />
        ))}
      </div>
    </>
  )
}

export default ChannelList
