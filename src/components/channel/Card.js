import React from 'react'
import { Card } from 'antd'
import moment from 'moment'
import { useHistory } from 'react-router-dom'

const ChannelCard = ({ data }) => {
  const history = useHistory()

  const Header = () => {
    return (
      <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
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

  // converts string duration to minutes (number)
  const toMinutes = string => {
    const split = string.split(':')
    const sum = Number(split[0]) * 60 + Number(split[1]) + Number(split[2]) / 60
    return sum
  }

  const currentTime = new Date()

  const filter = data.currentSchedule.filter(obj => {
    const diff = currentTime - new Date(obj.datetime)
    return diff / 60000 < toMinutes(obj.duration)
  })

  const handleOnClick = () => {
    console.log('Clicked', data.id)
    history.push(`details/${data.id}`)
  }

  return (
    <Card
      onClick={handleOnClick}
      title={<Header />}
      className='channel-card'
      headStyle={{ fontSize: '1em', textAlign: 'left' }}
    >
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
              {filter[0] ? filter[0].title : 'No Information Available'}
            </strong>
          </div>
        </li>
        <li>
          <span>
            {filter[1] ? moment(filter[1].datetime).format('hh:mm A') : 'N/A'}
          </span>
          <div
            style={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          >
            {filter[1] ? filter[1].title : 'No Information Available'}
          </div>
        </li>
        <li>
          <span>
            {filter[2] ? moment(filter[2].datetime).format('hh:mm A') : 'N/A'}
          </span>
          <div
            style={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          >
            {filter[2] ? filter[2].title : 'No Information Available'}
          </div>
        </li>
      </ul>
    </Card>
  )
}

export default ChannelCard
