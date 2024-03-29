/* Examples
  maskCellPhone(99933333333)   => (99) 9 3333-3333
*/
import isPresent from '../is-present'

const maskCellPhone = (value?: string): string => {
  let masked = ''
  if (value && isPresent(value)) {
    masked = value.toString()
    masked = masked.replace(/\D/g, '')
    masked = masked.replace(/^(\d)/, '($1')
    masked = masked.replace(/(.{3})(\d)/, '$1) $2')
    if (masked.length > 6) {
      masked = masked.replace(/(.{5})(\d)/, '$1$2 ')
    }
    if (masked.length === 12) {
      masked = masked.replace(/(.{1})$/, '-$1')
    } else if (masked.length === 13) {
      masked = masked.replace(/(.{2})$/, '-$1')
    } else if (masked.length === 14) {
      masked = masked.replace(/(.{3})$/, '-$1')
    } else if (masked.length === 15) {
      masked = masked.replace(/(.{4})$/, '-$1')
    } else if (masked.length === 16) {
      masked = masked.replace(/(.{5})$/, '-$1')
    }
    masked = masked.replace(/(-\d{4})\d+?$/, '$1')
  }

  return masked
}

export default maskCellPhone
