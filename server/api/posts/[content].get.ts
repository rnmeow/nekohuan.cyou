import parser from 'markdown-yaml-metadata-parser'
import dayjs from 'dayjs'
import { decode } from 'js-base64'
import { COMMIT_HASH } from '@/config/source'
import { REPO_NAME, REPO_OWNER } from '@/config/links'

export default defineEventHandler(async (event) => {
  const posts: {
    key: number,
    slug: string,
    title: string,
    datetime: dayjs.Dayjs,
    description: string,
    tags: string,
    content: string | null
  }[] = []
  let count = 0
  for (
    const i of await fetch(
      `https://rawcdn.githack.com/${REPO_OWNER}/${REPO_NAME}/${COMMIT_HASH}/posts.json`
    ).then(res => res.json())
  ) {
    const post = parser(decode(i.content))
    posts.push({
      key: count++,
      slug: i.slug,
      title: post.metadata.title,
      datetime: dayjs(post.metadata.datetime) as dayjs.Dayjs,
      description: post.metadata.description,
      tags: post.metadata.tags,
      content: event.context.params.content === 'yes' ? post.content : null
    })
  }
  return posts.sort((a, b) => !dayjs(a.datetime).isAfter(b.datetime) ? 1 : -1)
})
