import metadataParser from 'markdown-yaml-metadata-parser'
import dayjs from 'dayjs'
import { decode } from 'js-base64'
import { headers } from '@/server/utils/http-helper'
import { GH_API_URL } from '@/config/links'

export default defineEventHandler(async () => {
  const posts: {
    key: number,
    slug: string,
    title: string,
    datetime: object,
    description: string,
    tags: string,
    content: string
  }[] = []
  let count = 0
  for (const item of (await fetch(`${GH_API_URL}/contents/posts`, headers).then(res => res.json()))) {
    const post = metadataParser(decode((await fetch(item.url, headers).then(res => res.json())).content))
    posts.push({
      key: count++,
      slug: item.name.replace('.md', ''),
      title: post.metadata.title,
      datetime: dayjs(post.metadata.datetime),
      description: post.metadata.description,
      tags: post.metadata.tags,
      content: post.content
    })
  }
  return posts
})
