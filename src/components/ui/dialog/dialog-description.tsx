import React from 'react'

import { Description } from '@radix-ui/react-dialog'
import { cnBase } from 'tailwind-variants'

export const DialogDescription = React.forwardRef<
  React.ElementRef<typeof Description>,
  React.ComponentPropsWithoutRef<typeof Description>
>(({ className, ...props }, ref) => (
  <Description
    ref={ref}
    className={cnBase('text-sm text-slate-500 dark:text-slate-400', className)}
    {...props}
  />
))
DialogDescription.displayName = Description.displayName
