import '../app/styles/style.css'
import type { Metadata } from 'next'
import { Inter} from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AnguloApp | Gerenciador de Campeonatos',
  description: 'Gerenciador de campeonatos',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
