import React from 'react'

import { LogOut, Menu } from 'lucide-react'

import { Logo } from '@/components/logo/logo'
import { ThemeToggle } from '@/components/theme/theme-toggle'
import { Button } from '@/components/ui/button/button'
import { IconButton } from '@/components/ui/icon-button/icon-button'
import { Tooltip } from '@/components/ui/tooltip/tooltip'
import { useAuthStore } from '@/store/use-auth-store'
import { useSidebarStore } from '@/store/use-sidebar'

const Header: React.FC = () => {
  const { logout, user } = useAuthStore()
  const { isOpen, setIsOpen } = useSidebarStore()

  const userName = user?.name || ''

  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Logo className="hidden sm:block" />

        <span className="hidden sm:block">{userName}</span>

        <div className="sm:hidden items-center flex gap-2">
          <IconButton hoverTitle="Menu" onClick={() => setIsOpen(!isOpen)}>
            <Menu />
          </IconButton>

          <span>{userName}</span>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <Button
            onClick={() => {
              logout()
            }}
            size="icon"
            variant="ghost"
          >
            <Tooltip title="Sair">
              <LogOut className="h-5 w-5" />
            </Tooltip>
          </Button>

          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}

export default Header
