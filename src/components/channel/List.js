import React, { useState, useEffect } from 'react'

import ChannelCard from './Card'
import Search from '../filter/Search'
import Sort from '../filter/Sort'
import FavouriteChannels from './Favourites'

const ChannelList = ({
  data,
  handleNameSearchProps,
  allCategoriesProps,
  allLanguagesProps,
  handleRefineProps
}) => {
  const [stateData, setStateData] = useState([])
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    setStateData(data)
  }, [data])

  useEffect(() => {
    setToggle(!toggle)
  }, [])

  const handleSort = string => {
    if (string === 'name-asc') {
      const sorted = data.sort((a, b) => {
        return a.title.toLowerCase().localeCompare(b.title.toLowerCase())
      })
      setStateData([...data])
      setStateData([...sorted])
    } else if (string === 'name-dsc') {
      const sorted = data.sort((a, b) => {
        return a.title.toLowerCase().localeCompare(b.title.toLowerCase())
          ? -1
          : 1
      })
      setStateData([...data])
      setStateData([...sorted])
    } else if (string === 'number-asc') {
      const sorted = data.sort((a, b) => a.stbNumber - b.stbNumber)
      setStateData([...data])
      setStateData([...sorted])
    } else if (string === 'number-dsc') {
      const sorted = data.sort((a, b) => b.stbNumber - a.stbNumber)
      setStateData([...data])
      setStateData([...sorted])
    }
  }

  // check if favouriteChannels exists in local storage
  // if null, initiate with empty array
  if (localStorage.getItem('favouriteChannels') === null) {
    const arr = []
    localStorage.setItem('favouriteChannels', JSON.stringify(arr))
  }

  const onLike = id => {
    setToggle(!toggle)
    // retrieve array from localStorage (string)
    // JSON.parse(stringArray) => array
    // check if array has element already
    // if no, push it as new element
    // if yes, remove it
    // JSON.stringify() the array
    // setItem to spliced array
    let currentStorage = JSON.parse(localStorage.getItem('favouriteChannels'))
    if (currentStorage.indexOf(id) === -1) {
      currentStorage.push(id)
      localStorage.setItem('favouriteChannels', JSON.stringify(currentStorage))
    } else {
      const filtered = currentStorage.filter(element => element !== id)
      localStorage.setItem('favouriteChannels', JSON.stringify(filtered))
    }
  }

  return (
    <>
      <div className='search-div'>
        <Search handleNameSearchProps={handleNameSearchProps} />
      </div>
      <Sort
        handleRefineProps={handleRefineProps}
        handleSortProps={handleSort}
        allCategoriesProps={allCategoriesProps}
        allLanguagesProps={allLanguagesProps}
      />

      <FavouriteChannels
        dataProps={data}
        toggle={toggle}
        onLikeProps={onLike}
      />

      <div className='wrapper-grid'>
        {stateData.map(d => (
          <ChannelCard key={d.id} data={d} onLikeProps={onLike} />
        ))}
      </div>
    </>
  )
}

export default ChannelList
