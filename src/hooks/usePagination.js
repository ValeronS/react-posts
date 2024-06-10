import { useMemo } from 'react'

export const usePagination = (totalPages) => {
  return useMemo(() => {
    const pageArray = []
    for (let i = 1; i <= totalPages; i++) {
      pageArray.push(i)
    }
    return pageArray
  }, [totalPages])
}
