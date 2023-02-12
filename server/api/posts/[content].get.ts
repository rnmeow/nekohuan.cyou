import metadataParser from 'markdown-yaml-metadata-parser'
import dayjs from 'dayjs'
import { Octokit } from 'octokit'
import { auth } from '@/server/utils/octokit-helper'
import { REPO_OWNER, REPO_NAME } from '@/config/links'

const octokit = new Octokit(auth)

export default defineEventHandler(async (event) => {
  const posts: {
    key: number,
    slug: string,
    title: string,
    datetime: object,
    description: string,
    tags: string,
    content: string | null
  }[] = []
  let count = 0
  for (const item of await octokit.request('GET /repos/{owner}/{repo}/contents/posts', {
      owner: REPO_OWNER,
      repo: REPO_NAME,
      headers: {
        "Content-Type": "application/json",
        "X-GitHub-API-Version": "2022-11-28"
      }
    }).then(res => res.data)
  ) {
    const post = metadataParser((await fetch(item.download_url, {
      headers: {
        "Content-Type": "text/plain",
        "X-GitHub-API-Version": "2022-11-28",
        "Authorization": `token ${useRuntimeConfig().GH_PAT}`,
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 13_2) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.3 Safari/605.1.15"
      }
    }).then(res => res.text())))
    posts.push({
      key: count++,
      slug: item.name.replace('.md', ''),
      title: post.metadata.title,
      datetime: dayjs(post.metadata.datetime),
      description: post.metadata.description,
      tags: post.metadata.tags,
      content: event.context.params.content === 'yes' ? post.content : null
    })
  }
  return posts
})
