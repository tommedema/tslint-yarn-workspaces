// tslint:disable:no-console

import { someDependedFn } from 'b'

export const someDependingFn = (): void => {
  const someNr = someDependedFn('pascal-case-me')
  console.log(someNr)
}
