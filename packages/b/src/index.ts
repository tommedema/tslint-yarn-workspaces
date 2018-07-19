import camelCase from 'camelcase'

export const someDependedFn = (str: string): string => {
  const camelStr = camelCase(str, { pascalCase: true })

  return camelStr
}
