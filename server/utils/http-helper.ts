export const headers = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `token ${useRuntimeConfig().GH_PAT}`,
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 13_2) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.3 Safari/605.1.15' // Safari 16.3 UA, access denied without this.
  }
}
