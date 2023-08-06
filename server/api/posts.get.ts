import dayjs from 'dayjs'
import { decode } from 'js-base64'
import { COMMIT_HASH } from '@/config/source'

export default defineEventHandler(async () => {
  const posts: {
    key: number,
    slug: string,
    title: string,
    datetime: string,
    description: string,
    tags: string[]
  }[] = []
  for (
    const i of await fetch(
      `https://rawcdn.githack.com/rnmeow/blog/${COMMIT_HASH}/list.json`
    ).then(res => res.json())
  ) {
    posts.push({
      key: i.length - 1,
      slug: i.slug,
      title: i.title,
      datetime: i.datetime,
      description: decode(i.description),
      tags: i.tags
    })
  }
  return posts.sort((a, b) => !dayjs(a.datetime).isAfter(dayjs(b.datetime)) ? 1 : -1)
})
