import metadataParser from 'markdown-yaml-metadata-parser'
import dayjs from 'dayjs'
import { Octokit } from 'octokit'
import { decode } from 'js-base64'
import { auth } from '@/server/utils/octokit-helper'
import { REPO_OWNER, REPO_NAME } from '@/config/links'

const octokit = new Octokit(auth)

export default defineEventHandler(async (event: any | Event) => {
  const post = await octokit.request(`GET /repos/{owner}/{repo}/contents/posts/${event.context.params.slug}.md`, {
    owner: REPO_OWNER,
    repo: REPO_NAME,
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
    datetime: dayjs(data.metadata.datetime),
    tags: data.metadata.tags,
    content: data.content
  }
})
