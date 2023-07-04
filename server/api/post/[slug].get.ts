import metadataParser from 'markdown-yaml-metadata-parser'
import dayjs from 'dayjs'
import { REPO_OWNER, REPO_NAME } from '@/config/links'
import { COMMIT_HASH } from '@/config/source'

export default defineEventHandler(async (event) => {
  const post = await fetch(
    `https://rawcdn.githack.com/${REPO_OWNER}/${REPO_NAME}/${COMMIT_HASH}/posts/${event.context.params!.slug}.md`
  ).then(res => res.text())
  const data: {
    metadata: {
      title: string,
      datetime: string,
      description: string,
      tags: string
    },
    content: string
  } = metadataParser(post)
  return {
    slug: event.context.params!.slug,
    title: data.metadata.title,
    datetime: dayjs(data.metadata.datetime) as dayjs.Dayjs,
    tags: data.metadata.tags,
    description: data.metadata.description,
    content: data.content
  }
})
