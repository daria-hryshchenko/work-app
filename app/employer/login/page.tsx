'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function EmployerLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you'd validate the credentials here
    console.log('Employer login:', email, password)
    router.push('/employer')
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Employer Login</h1>
      <form onSubmit={handleLogin} className="max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="block w-full p-2 mb-2 border rounded"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="block w-full p-2 mb-4 border rounded"
        />
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Login
        </button>
      </form>
    </div>
  )
}