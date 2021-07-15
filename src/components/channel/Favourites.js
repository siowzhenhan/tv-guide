import React, { useEffect, useState } from 'react'

import ChannelCard from './Card'

const FavouriteChannels = ({ dataProps: data, toggle, onLikeProps }) => {
  const [filtered, setFiltered] = useState([])

  const filterData = () => {
    const local = JSON.parse(localStorage.getItem('favouriteChannels'))
    const filter = data.filter(d => local.includes(d.id))
    setFiltered(filter)
  }

  useEffect(() => {
    if (data) {
      filterData()
    }
  }, [data])

  useEffect(() => {
    filterData()
  }, [toggle])

  return (
    <div className='favourites-outer-container'>
      <h3 style={{ display: filtered.length ? null : 'none' }}>
        Favourite Channels
      </h3>
      <div className='favourites-container'>
        {filtered.map(d => (
          <ChannelCard key={d.id} data={d} onLikeProps={onLikeProps} />
        ))}
      </div>
    </div>
  )
}

export default FavouriteChannels
