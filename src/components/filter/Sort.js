import React, { useState } from 'react'
import { Select, Button, Drawer, Dropdown, Menu } from 'antd'
import { FilterFilled } from '@ant-design/icons'

const Sorter = ({
  handleSortProps,
  allCategoriesProps,
  allLanguagesProps,
  handleRefineProps
}) => {
  const [isVisible, setIsVisible] = useState(false)

  // toggle between 4 sort states
  const handleChange = value => {
    handleSortProps(value)
  }

  const showDrawer = () => {
    setIsVisible(true)
  }

  const closeDrawer = () => {
    setIsVisible(false)
  }

  const handleRefine = ({ key }) => {
    closeDrawer()
    handleRefineProps(key)
  }

  const categoryMenu = (
    <Menu onClick={handleRefine}>
      {allCategoriesProps.map(category => (
        <Menu.Item key={category}>{category}</Menu.Item>
      ))}
    </Menu>
  )

  const languageMenu = (
    <Menu onClick={handleRefine}>
      {allLanguagesProps.map(language => (
        <Menu.Item key={language}>{language}</Menu.Item>
      ))}
    </Menu>
  )

  const hdMenu = (
    <Menu onClick={handleRefine}>
      <Menu.Item key='true'>HD Channels</Menu.Item>
      <Menu.Item key='false'>Non HD Channels</Menu.Item>
    </Menu>
  )

  const clearRefine = () => {
    closeDrawer()
    handleRefineProps(null)
  }

  return (
    <div className='search-div'>
      <Button
        className='refine-button'
        onClick={showDrawer}
        icon={<FilterFilled />}
      >
        Refine
      </Button>

      <Drawer title='Refine' visible={isVisible} onClose={closeDrawer}>
        {/* Category drop-down */}
        <Dropdown overlay={categoryMenu} trigger={['click']}>
          <div style={{ cursor: 'pointer', marginBottom: 20 }}>
            By Categories
          </div>
        </Dropdown>
        <Dropdown overlay={languageMenu} trigger={['click']}>
          <div style={{ cursor: 'pointer', marginBottom: 20 }}>
            By Languages
          </div>
        </Dropdown>
        <Dropdown overlay={hdMenu} trigger={['click']}>
          <div style={{ cursor: 'pointer', marginBottom: 20 }}>
            By Resolution
          </div>
        </Dropdown>

        <Button
          onClick={clearRefine}
          style={{
            position: 'absolute',
            background: 'rgb(230, 0, 125)',
            bottom: 20,
            width: 200,
            borderRadius: 15,
            color: 'white',
            fontWeight: 700
          }}
        >
          Reset
        </Button>
      </Drawer>

      <Select
        className='sort-select'
        // style={{ width: '13em' }}
        placeholder='Sort channels'
        onChange={handleChange}
      >
        <Select.Option key='1' value='name-asc'>
          Name (Ascending)
        </Select.Option>
        <Select.Option key='2' value='name-dsc'>
          Name (Descending)
        </Select.Option>
        <Select.Option key='3' value='number-asc'>
          Number (Ascending)
        </Select.Option>
        <Select.Option key='4' value='number-dsc'>
          Number (Descending)
        </Select.Option>
      </Select>
    </div>
  )
}

export default Sorter
