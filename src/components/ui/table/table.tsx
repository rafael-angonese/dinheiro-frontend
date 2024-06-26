import { forwardRef, HTMLAttributes } from 'react'

import { tv } from 'tailwind-variants'

export const tableVariants = tv({
  slots: {
    wrapper: 'relative w-full overflow-auto',
    base: 'w-full caption-bottom text-sm',
  },
})

export const Table = forwardRef<
  HTMLTableElement,
  HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => {
  const { base, wrapper } = tableVariants()

  return (
    <div className={wrapper()}>
      <table ref={ref} className={base({ className })} {...props} />
    </div>
  )
})

Table.displayName = 'Table'
