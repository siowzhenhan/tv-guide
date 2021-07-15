import React, { useState, useEffect } from 'react'
import { Breadcrumb, Tabs } from 'antd'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import moment from 'moment'
import { v4 as uuidv4 } from 'uuid'

// API (details)
// https://contenthub-api.eco.astro.com.my/channel/CHANNEL_ID.json

const { TabPane } = Tabs

const ChannelDetails = () => {
  const [details, setDetails] = useState([])

  let { slug } = useParams()

  const fetchDetails = id => {
    return axios
      .get(`https://contenthub-api.eco.astro.com.my/channel/${id}.json`)
      .then(res => {
        console.log(res.data.response)
        setDetails(res.data.response)
      })
      .catch(err => console.error(err))
  }

  useEffect(() => {
    fetchDetails(slug)
  }, [])

  let allSchedules = []

  for (let key in details.schedule) {
    allSchedules.push(details.schedule[key])
  }

  // converts string duration to minutes (number)
  const toMinutes = string => {
    const split = string.split(':')
    const sum = Number(split[0]) * 60 + Number(split[1]) + Number(split[2]) / 60
    return sum
  }

  const currentTime = new Date()

  const isOnNow = obj => {
    const formattedDateTime = new Date(obj.datetime.replace(' ', 'T'))
    const diff = currentTime - formattedDateTime
    if (
      diff / 60000 < toMinutes(obj.duration) &&
      formattedDateTime < currentTime
    ) {
      return true
    }
    return false
  }

  const allFilter = allSchedules.map(arr => {
    const filter = arr.filter(obj => {
      const formattedDateTime = new Date(obj.datetime.replace(' ', 'T'))
      const diff = currentTime - formattedDateTime
      return diff / 60000 < toMinutes(obj.duration)
    })
    return filter
  })

  return (
    <div className='container'>
      <h1>Channel Details Page</h1>
      <Breadcrumb style={{ marginBottom: 30 }}>
        <Breadcrumb.Item href={process.env.PUBLIC_URL}>Content</Breadcrumb.Item>
        <Breadcrumb.Item>{details.title}</Breadcrumb.Item>
      </Breadcrumb>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          marginBottom: 20
        }}
      >
        {/* Image section (data.imageUrl) */}
        <div style={{ marginRight: 20 }}>
          <img width='60' src={details.imageUrl} alt={''} />
        </div>
        <div style={{ width: '100%' }}>
          {/* Channel number (data.stbNumber) */}
          <div>CH{details.stbNumber}</div>
          {/* Channel name (data.title) */}
          <div
            style={{
              width: '100%',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              fontWeight: 'bold'
            }}
          >
            {details.title}
          </div>
        </div>
      </div>

      {/* Descriptions */}
      <p>{details.description}</p>

      {/* Tabs */}
      <Tabs>
        {allFilter.map(schedule => (
          <TabPane
            tab={
              schedule.length > 0
                ? moment(new Date()).format('dddd') ===
                  moment(schedule[0].datetime).format('dddd')
                  ? 'TODAY'
                  : moment(schedule[0].datetime).format('dddd')
                : 'N/A'
            }
            key={schedule.length > 0 ? schedule[0].datetime : uuidv4()}
          >
            <ul className='spaced'>
              {schedule.map(s => (
                <li key={s.eventId}>
                  <span>
                    {isOnNow(s) ? (
                      <strong>On Now</strong>
                    ) : (
                      moment(s.datetime).format('hh:mm A')
                    )}
                  </span>
                  <div
                    style={{
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}
                  >
                    {isOnNow(s) ? <strong>{s.title}</strong> : s.title}
                  </div>
                </li>
              ))}
            </ul>
          </TabPane>
        ))}
      </Tabs>
    </div>
  )
}

export default ChannelDetails
