import React from 'react'
import PageComponent from '../components/PageComponent'
import ToolGrid from './ToolGrid'

const subMenu = [
{ title: 'Meta Generator', },
{ title: 'Page Rewriter', }
]

const grid = [
  {
    image: 'https://via.placeholder.com/300x200',
    title: 'Meta Tag & Title Generator',
    url: '/tools/meta-generator',
    description:
      'This generator will create a page title and a meta desription based on a URL or specific keywords.',
  },
  {
    image: 'https://via.placeholder.com/300x200',
    title: 'Sample Item 2',
    url: '/tools/sample-item-2',
    description:
      'This is a brief description of the second sample item. Include relevant details about the item here.',
  },

];
export default function Tools() {
  return (
    <PageComponent title={'Tools'}>
        <ToolGrid items={grid} />
    </PageComponent>
  )
}
