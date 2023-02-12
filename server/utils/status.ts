import { BIRTHDAY, STATUS_LIST } from '@/config/personal-data'

function calc(birthday: string): string {
  const newDate: number = new Date() as unknown as number
  return ((newDate - Date.parse(birthday)) / (24 * 60 * 60 * 1000 * 365)).toFixed(2)
}
const arr: string[] = [
  `${calc(BIRTHDAY)} y/o • Student • Jr. Front-end Coder`
]
STATUS_LIST.forEach(i => {
  arr.push(i)
})

export const status: string[] = arr
