import React, { useState, useEffect } from 'react'
import '../App.css'
import axios from 'axios'

import ChannelList from '../components/channel/List'

// api
// https://contenthub-api.eco.astro.com.my/channel/all.json
// https://contenthub-api.eco.astro.com.my/channel/CHANNEL_ID.json

const Home = () => {
  const [data, setData] = useState([])
  const [filtered, setFiltered] = useState([])

  const fetchChannels = () => {
    return axios
      .get('https://contenthub-api.eco.astro.com.my/channel/all.json')
      .then(res => {
        console.log(res.data.response)
        setData(res.data.response)
      })
      .catch(err => console.error(err))
  }

  useEffect(() => {
    fetchChannels()
    setFiltered(data)
  }, [])

  const handleNameSearch = text => {
    const filter = data.filter(d => {
      const filterByName = d.title.toLowerCase().includes(text.toLowerCase())
      const filterByNumber = d.stbNumber
        .toLowerCase()
        .includes(text.toLowerCase())

      return filterByName || filterByNumber
    })
    setFiltered(filter)
  }

  return (
    <div className='container'>
      <h1>Channel List</h1>

      <ChannelList
        handleNameSearchProps={handleNameSearch}
        data={filtered.length ? filtered : data}
      />
    </div>
  )
}

export default Home
