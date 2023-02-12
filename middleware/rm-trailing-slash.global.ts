export default function ({ path, query, hash }: {
  path: string,
  query?: {
    page: number,
    sort: string
  },
  hash: string
}) {
  if (path === '/' || !path.endsWith('/')) return

  return navigateTo(
    { path: path.replace(/\/+$/, '') || '/', query, hash },
    { redirectCode: 308 }
  )
}
