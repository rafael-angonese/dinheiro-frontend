import { useEffect } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useQuery } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import { queryKeys } from '@/constants/react-query-keys'
import { getBankAccountById } from '@/repositories/bank-accounts/get-bank-account-by-id'

import { formValidation } from './form-config/form-validation'
import { FormValues } from './form-config/form-values'
import { initialFormState } from './form-config/initial-form-state'

export const useEditBankAccount = () => {
  const { id } = useParams()

  const { data } = useQuery({
    queryKey: [queryKeys.bankAccounts, id],
    queryFn: () => getBankAccountById(id!),
  })

  const methods = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: initialFormState,
    resolver: zodResolver(formValidation),
  })

  const { reset } = methods

  useEffect(() => {
    reset({
      name: data?.data.data.name,
      balance: data?.data.data.balance,
    })
  }, [data, reset])

  return {
    methods,
  }
}
