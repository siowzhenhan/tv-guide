import React, { useState, useEffect } from 'react'
import { Card } from 'antd'
import moment from 'moment'
import { useHistory } from 'react-router-dom'
import { HeartOutlined, HeartFilled } from '@ant-design/icons'

const ChannelCard = ({ data, onLikeProps }) => {
  const history = useHistory()
  const [filtered, setFiltered] = useState([])
  const [isFavourite, setIsFavourite] = useState(false)

  // converts string duration to minutes (number)
  const toMinutes = string => {
    const split = string.split(':')
    const sum = Number(split[0]) * 60 + Number(split[1]) + Number(split[2]) / 60
    return sum
  }

  const currentTime = new Date()

  // filter single data's schedule array when received (each mounted)
  useEffect(() => {
    const filter = data.currentSchedule.filter(obj => {
      const formattedDateTime = new Date(obj.datetime.replace(' ', 'T'))
      const diff = currentTime - formattedDateTime
      return diff / 60000 < toMinutes(obj.duration)
    })
    setFiltered(filter)
  }, [])

  const Header = () => {
    return (
      <div style={{ display: 'flex', alignItems: 'center', width: '245px' }}>
        {/* Image section (data.imageUrl) */}
        <div style={{ marginRight: 20 }}>
          <img
            width='60'
            src={data.imageUrl ? data.imageUrl : data.backupImage}
            alt={data.title}
          />
        </div>
        <div style={{ width: '100%' }}>
          {/* Channel number (data.stbNumber) */}
          <div>CH{data.stbNumber}</div>
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
            {data.title}
          </div>
        </div>
      </div>
    )
  }

  const handleOnClick = () => {
    history.push(`details/${data.id}`)
  }

  const onLike = id => {
    setIsFavourite(!isFavourite)
    onLikeProps(id)
  }

  return (
    <Card
      hoverable
      onClick={handleOnClick}
      title={<Header />}
      className='channel-card'
      headStyle={{ fontSize: '1em', textAlign: 'left' }}
    >
      <div
        onClick={e => {
          e.stopPropagation()
          onLike(data.id)
        }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 30,
          height: 30,
          position: 'absolute',
          right: 10,
          top: 10,
          zIndex: 1000
        }}
      >
        {JSON.parse(localStorage.getItem('favouriteChannels')).includes(
          data.id
        ) ? (
          <HeartFilled style={{ color: 'rgb(230, 0, 125)' }} />
        ) : (
          <HeartOutlined />
        )}
      </div>
      <ul>
        <li>
          <span style={{ fontWeight: 'bold' }}>On Now</span>
          <div
            style={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          >
            <strong>
              {filtered[0] ? filtered[0].title : 'No Information Available'}
            </strong>
          </div>
        </li>
        <li>
          <span>
            {filtered[1]
              ? moment(filtered[1].datetime).format('hh:mm A')
              : 'N/A'}
          </span>
          <div
            style={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          >
            {filtered[1] ? filtered[1].title : 'No Information Available'}
          </div>
        </li>
        <li>
          <span>
            {filtered[2]
              ? moment(filtered[2].datetime).format('hh:mm A')
              : 'N/A'}
          </span>
          <div
            style={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          >
            {filtered[2] ? filtered[2].title : 'No Information Available'}
          </div>
        </li>
      </ul>
    </Card>
  )
}

export default ChannelCard
