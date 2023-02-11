import metadataParser from 'markdown-yaml-metadata-parser'
import dayjs from 'dayjs'
import { decode } from 'js-base64'
import { headers } from '@/server/utils/http-helper'
import { GH_API_URL } from '@/config/links'

// Ref: https://github.com/unjs/h3/blob/main/src/event/event.ts
export default defineEventHandler(async (event: { context: any }) => {
  const post = await fetch(`${GH_API_URL}/contents/posts/${event.context.params.slug}.md`, headers).then(res => res.json())
  const data: {
    metadata: {
      title: string,
      datetime: string,
      description: string,
      tags: string
    },
    content: string
  } = metadataParser(decode(post.content))
  return {
    slug: post.name.replace('.md', ''),
    title: data.metadata.title,
    datetime: dayjs(data.metadata.datetime).format('YYYY-MM-DD HH:mm'),
    tags: data.metadata.tags,
    content: data.content
  }
})
