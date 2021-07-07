import React, { useState } from 'react'
import { Input } from 'antd'

const Search = ({ handleNameSearchProps }) => {
  const [nameSearch, setNameSearch] = useState('')

  const onNameChange = e => {
    setNameSearch(e.target.value)
    handleNameSearchProps(e.target.value)
  }

  return (
    <Input
      style={{ marginBottom: 10 }}
      className='search-input'
      type='text'
      placeholder='Search Channels'
      value={nameSearch}
      onChange={onNameChange}
      name='name'
    />
  )
}

export default Search
