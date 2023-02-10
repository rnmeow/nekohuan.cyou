export const HEADER_LINKS: { key: number, href: string, text: string }[] = [
  {
    key: 0,
    href: '/blog',
    text: '網誌'
  },
  {
    key: 1,
    href: '/guestbook',
    text: '留言板'
  },
  {
    key: 2,
    href: '/friends',
    text: '友情連結'
  }
]

export const SOCIAL_LINKS: { key: number, icon: string, href: string }[] = [
  {
    key: 0,
    icon: 'github',
    href: 'https://github.com/kuohuanhuan'
  },
  {
    key: 1,
    icon: 'bitbucket',
    href: 'https://bitbucket.org/kuohuanhuan'
  },
  {
    key: 2,
    icon: 'whatsapp',
    href: 'https://wa.me/qr/U6MQGCSJZICZH1'
  },
  {
    key: 3,
    icon: 'telegram',
    href: 'https://telegram.me/kuohuanhuan'
  },
  {
    key: 4,
    icon: 'stack-overflow',
    href: 'https://stackoverflow.com/users/19172539'
  }
]

export const GH_API_URL = 'https://api.github.com/repos/kuohuanhuan/blog'

export const RSS_FEED_URL = 'https://blog-rss-production.up.railway.app/atom.xml'
