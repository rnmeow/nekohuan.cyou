export function email(address: string, returnHtml: boolean) {
  if (returnHtml) return `mailto:${address}`
  else return address.split('@').join(' at ').split('.').join(' dot ')
}
