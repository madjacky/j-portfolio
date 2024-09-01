'use client'

import { useState } from 'react'
import { PostMetadata } from '@/lib/posts'
import Posts from '@/components/posts'

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button'
import { Cross1Icon } from '@radix-ui/react-icons'

export default function PostsWithSearch({ posts }: { posts: PostMetadata[] }) {
  const [query, setQuery] = useState('');
  const filtered = posts.filter(post => 
    post.title?.toLowerCase().includes(query.toLowerCase())
  )
  const isFiltered = query.length > 0;
  function resetFilter() {
    setQuery('');
  }
  return (
    <div>
      <div className='mb-12 flex items-center gap-3'>
        <Input className='h-9 w-full sm:w-1/2' type='search' value={query} placeholder='Search post ...' onChange={e => setQuery(e.target.value)} />
        {isFiltered && (
          <Button className='h-8 px-2 lg:px-3' size='sm' variant='secondary' onClick={resetFilter}>
            reset
            <Cross1Icon className='ml-2 h-4 w-4' />
          </Button>
        )}
      </div>
      <Posts posts={filtered} />
    </div>
  )
}