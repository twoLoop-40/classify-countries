export function makeSame<T>(isSame: (arg1: T, arg2: T) => boolean) {
  return (item1: T, item2: T) => isSame(item1, item2);
}

export type CompareProc<T> = ReturnType<typeof makeSame<T>>
