import { mysqlTable, text, varchar } from 'drizzle-orm/mysql-core'
import { nanoid } from 'nanoid'

export const examplesModel = mysqlTable('examples', {
  id: varchar({ length: 12 }).primaryKey().$defaultFn(() => nanoid(12)),
  example: text(),
})
