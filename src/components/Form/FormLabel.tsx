import { useFormField } from '@/components/Form/useFormField'
import { Label, LabelProps } from '@/components/Label/Label'
import React from 'react'

export const FormLabel = React.forwardRef<
  React.ElementRef<typeof Label>,
  LabelProps
>(({ ...props }, ref) => {
  const { error, formItemId } = useFormField()

  return <Label ref={ref} isInvalid={!!error} htmlFor={formItemId} {...props} />
})
FormLabel.displayName = 'FormLabel'
