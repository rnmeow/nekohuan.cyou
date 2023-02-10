import metadataParser from 'markdown-yaml-metadata-parser'
import dayjs from 'dayjs'
import { GH_API_URL } from '@/config/links'
import { headers } from '@/server/utils/http-helper'

export default defineEventHandler(async () => {
  const posts = await fetch(`${GH_API_URL}/contents/posts`, headers).then(res => res.json())
  const postsList = []
  let count = 0
  for (const i of posts) {
    const post = await fetch(i.download_url, headers).then(res => res.text())
    const data = metadataParser(post)
    postsList.push({
      key: ++count,
      slug: i.name.replace('.md', ''),
      title: data.metadata.title,
      datetime: dayjs(data.metadata.datetime),
      description: data.metadata.description,
      tags: data.metadata.tags,
      content: data.content
    })
  }
  return postsList
})
