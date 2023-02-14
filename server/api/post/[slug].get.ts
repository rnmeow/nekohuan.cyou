import metadataParser from 'markdown-yaml-metadata-parser'
import dayjs from 'dayjs'
import { Octokit } from 'octokit'
import { decode } from 'js-base64'
import { REPO_OWNER, REPO_NAME } from '@/config/links'

export default defineEventHandler(async (event) => {
  const post = await new Octokit(useRuntimeConfig().GH_PAT).request(
    `GET /repos/${REPO_OWNER}/${REPO_NAME}/contents/posts/${event.context.params.slug}.md`, {
    headers: {
      "Content-Type": "application/json",
      "X-GitHub-API-Version": "2022-11-28"
    }
  }).then(res => res.data)
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
    datetime: dayjs(data.metadata.datetime) as dayjs.Dayjs,
    tags: data.metadata.tags,
    description: data.metadata.description,
    content: data.content
  }
})
