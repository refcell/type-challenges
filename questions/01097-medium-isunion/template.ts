type IsUnion<T, U = T> = T extends U ? [U] extends [T] ? false : true : never
