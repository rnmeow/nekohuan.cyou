import metadataParser from 'markdown-yaml-metadata-parser'
import dayjs from 'dayjs'
import { COMMIT_HASH } from '@/config/source'

export default defineEventHandler(async (event) => {
  const post = await fetch(
    `https://rawcdn.githack.com/rnmeow/blog/${COMMIT_HASH}/posts/${event.context.params!.slug}.md`
  ).then(res => res.text())

  const res = metadataParser(post)

  return {
    slug: event.context.params!.slug!,
    title: res.metadata.title,
    datetime: dayjs(res.metadata.datetime) as dayjs.Dayjs,
    tags: res.metadata.tags,
    description: res.metadata.description,
    content: res.content
  }
})
