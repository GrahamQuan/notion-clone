import type { ReactNode, FC } from 'react'

type Props = {
  children: ReactNode
}

const AuthLayout: FC<Props> = ({ children }) => {
  return <div className="h-full bg-rose-300">{children}</div>
}

export default AuthLayout
