import { Link } from '@/components/link/link'
import { Button } from '@/components/ui/button/button'
import { Heading } from '@/components/ui/heading/heading'
import { IconButton } from '@/components/ui/icon-button/icon-button'
import { LinearProgress } from '@/components/ui/linear-progress/linear-progress'
import { Table } from '@/components/ui/table/table'
import { getBankAccounts } from '@/repositories/bank-accounts/get-bank-accounts'
import { useAccountStore } from '@/store/use-account-store'
import formatCurrency from '@/utils/format-currency'
import isBlank from '@/utils/is-blank'
import { useQuery } from '@tanstack/react-query'
import { Pencil, Trash } from 'lucide-react'
import React from 'react'

export const ListBankAccountsPage: React.FC = () => {
  const { account } = useAccountStore()

  const { data, isPending } = useQuery({
    queryKey: ['bank-accounts', { accountId: account!.id }],
    queryFn: () =>
      getBankAccounts({
        accountId: account!.id,
      }),
  })

  return (
    <>
      <div>
        <div className="flex justify-between mb-12">
          <Heading as="h1">Contas Bancarias</Heading>

          <Button color="success" asChild>
            <Link to="/bank-accounts/new">Nova Conta</Link>
          </Button>
        </div>

        {isPending && <LinearProgress indeterminate size="xs" />}

        <div className="rounded-md border">
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.Head>Nome</Table.Head>
                <Table.Head>Saldo</Table.Head>
                <Table.Head>Ações</Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Empty isEmpty={isBlank(data?.data?.data)} />
              {data?.data?.data.map((bankAccount) => (
                <Table.Row key={bankAccount.id}>
                  <Table.Cell className="font-medium">
                    {bankAccount.name}
                  </Table.Cell>
                  <Table.Cell>{formatCurrency(bankAccount.balance)}</Table.Cell>
                  <Table.Cell className="flex gap-4">
                    <IconButton hoverTitle="Editar" asChild>
                      <Link to={`/bank-accounts/edit/${bankAccount.id}`}>
                        <Pencil className="text-warning" size={18} />
                      </Link>
                    </IconButton>
                    <IconButton hoverTitle="Excluir">
                      <Trash className="text-error" size={18} />
                    </IconButton>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </div>

        {isPending && <LinearProgress indeterminate size="xs" />}
      </div>
    </>
  )
}