import React from 'react'

import { Item } from './index'

const data = {
  id: 'QJKEa9n3yN8',
  rect: {
    width: 2048,
    height: 3089
  },
  alt: 'white and gray high rise buildings near body of water during daytime',
  color: '#4073a6',
  urls: {
    raw: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?ixid=MnwyMDE0NjF8MHwxfHNlYXJjaHw4fHxkdWJhaXxlbnwwfHx8fDE2NjA2NDY0NTA&ixlib=rb-1.2.1',
    full: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwyMDE0NjF8MHwxfHNlYXJjaHw4fHxkdWJhaXxlbnwwfHx8fDE2NjA2NDY0NTA&ixlib=rb-1.2.1&q=80',
    regular: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDE0NjF8MHwxfHNlYXJjaHw4fHxkdWJhaXxlbnwwfHx8fDE2NjA2NDY0NTA&ixlib=rb-1.2.1&q=80&w=1080',
    small: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDE0NjF8MHwxfHNlYXJjaHw4fHxkdWJhaXxlbnwwfHx8fDE2NjA2NDY0NTA&ixlib=rb-1.2.1&q=80&w=400',
    thumb: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDE0NjF8MHwxfHNlYXJjaHw4fHxkdWJhaXxlbnwwfHx8fDE2NjA2NDY0NTA&ixlib=rb-1.2.1&q=80&w=200',
    small_s3: 'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1580674684081-7617fbf3d745'
  },
  links: {
    self: 'https://api.unsplash.com/photos/QJKEa9n3yN8',
    html: 'https://unsplash.com/photos/QJKEa9n3yN8',
    download: 'https://unsplash.com/photos/QJKEa9n3yN8/download?ixid=MnwyMDE0NjF8MHwxfHNlYXJjaHw4fHxkdWJhaXxlbnwwfHx8fDE2NjA2NDY0NTA',
    download_location: 'https://api.unsplash.com/photos/QJKEa9n3yN8/download?ixid=MnwyMDE0NjF8MHwxfHNlYXJjaHw4fHxkdWJhaXxlbnwwfHx8fDE2NjA2NDY0NTA'
  }
}

export default {
  title: 'PhotoGallery/Item',
  component: Item,
  decorators: [
    (Story) => (
      <div style={{ width: '400px', height: '600px', overflow: 'hidden' }}>
        <Story />
      </div>
    )
  ]
}

export const Default = {
  render: (args) => <Item {...args} />,
  args: {
    ...data,
    defaultWidth: 400
  }
}

// (max-width: 767px) 100vw, (max-width: 417px) min(100%, 385px), (max-height: 756px) min(100%, 385px), (min-aspect-ratio: 2048/3089) calc((calc(100vh - 175px)) * 0.662998), calc(100vw - 32px)
