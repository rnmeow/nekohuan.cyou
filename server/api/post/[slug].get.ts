import { matter } from 'wasm-frontmatter'
import dayjs from 'dayjs'
import { COMMIT_HASH } from '@/config/source'

export default defineEventHandler(async (event) => {
  const post = await fetch(
    `https://rawcdn.githack.com/rnmeow/blog/${COMMIT_HASH}/posts/${event.context.params!.slug}.md`
  ).then(res => res.text())

  const res: {
    data: {
      title: string,
      datetime: string,
      description: string,
      tags: string
    },
    content: string
  } = matter(post, {})

  return {
    slug: event.context.params!.slug,
    title: res.data.title,
    datetime: dayjs(res.data.datetime) as dayjs.Dayjs,
    tags: res.data.tags,
    description: res.data.description,
    content: res.content
  }
})
