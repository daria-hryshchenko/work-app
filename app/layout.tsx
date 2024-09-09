import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Job Search Website',
  description: 'Find your dream job or perfect candidate',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-blue-600 text-white p-4">
          <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">JobSearch</h1>
            <ul className="flex space-x-4">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/jobs" className="hover:underline">Jobs</a></li>
              <li><a href="/employer" className="hover:underline">Employers</a></li>
              <li><a href="/jobseeker" className="hover:underline">Job Seekers</a></li>
            </ul>
          </nav>
        </header>
        <main className="container mx-auto mt-8 px-4">
          {children}
        </main>
        <footer className="bg-gray-200 mt-12 py-6">
          <div className="container mx-auto text-center">
            <p>&copy; 2023 JobSearch. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}