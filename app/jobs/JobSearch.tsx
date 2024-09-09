'use client'

import { useState } from 'react'

export default function JobSearch() {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you'd use this search term to filter jobs
    console.log('Searching for:', searchTerm)
  }

  return (
    <form onSubmit={handleSearch} className="mb-6">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for jobs..."
        className="p-2 border rounded mr-2"
      />
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Search
      </button>
    </form>
  )
}