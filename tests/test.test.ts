import { expect, it } from 'vitest'
import { example } from '../lib/example'

it('test', () => {
  const result = example(2)
  expect(result).toEqual(4)
})
