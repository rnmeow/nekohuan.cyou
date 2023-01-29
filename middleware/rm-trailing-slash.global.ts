'use strict'

export default function ({ path, query, hash }: { path: string, query: any, hash: string }) {
  if (path === '/' || !path.endsWith('/')) return

  return navigateTo(
    { path: path.replace(/\/+$/, '') || '/', query, hash },
    { redirectCode: 308 }
  )
}
