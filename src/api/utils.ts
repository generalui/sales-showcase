export const awaitAll = (funcArgs: Array<any>, asyncFunc: (data: any) => Promise<any>): any => {
  const promises: Promise<unknown>[] = []
  funcArgs.forEach((arg) => {
    promises.push(asyncFunc(arg))
  })

  return Promise.all(promises)
}
