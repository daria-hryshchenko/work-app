'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Job {
  id: number
  title: string
  company: string
  location: string
  category: string
}

export default function JobList() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [filter, setFilter] = useState({ category: '', location: '' })

  useEffect(() => {
    // In a real app, you'd fetch this data from an API
    const mockJobs: Job[] = [
      { id: 1, title: 'Software Engineer', company: 'Tech Co', location: 'New York', category: 'IT' },
      { id: 2, title: 'Marketing Manager', company: 'Ad Agency', location: 'Los Angeles', category: 'Marketing' },
      { id: 3, title: 'Sales Representative', company: 'Sales Corp', location: 'Chicago', category: 'Sales' },
    ]
    setJobs(mockJobs)
  }, [])

  const filteredJobs = jobs.filter(job => 
    (filter.category === '' || job.category === filter.category) &&
    (filter.location === '' || job.location === filter.location)
  )

  return (
    <div>
      <div className="mb-4">
        <select 
          className="mr-2 p-2 border rounded"
          value={filter.category}
          onChange={(e) => setFilter({...filter, category: e.target.value})}
        >
          <option value="">All Categories</option>
          <option value="IT">IT</option>
          <option value="Marketing">Marketing</option>
          <option value="Sales">Sales</option>
        </select>
        <select 
          className="p-2 border rounded"
          value={filter.location}
          onChange={(e) => setFilter({...filter, location: e.target.value})}
        >
          <option value="">All Locations</option>
          <option value="New York">New York</option>
          <option value="Los Angeles">Los Angeles</option>
          <option value="Chicago">Chicago</option>
        </select>
      </div>
      <ul>
        {filteredJobs.map(job => (
          <li key={job.id} className="mb-4 p-4 border rounded">
            <h2 className="text-xl font-bold">{job.title}</h2>
            <p>{job.company} - {job.location}</p>
            <p>Category: {job.category}</p>
            <Link href={`/jobs/${job.id}`} className="text-blue-500 hover:underline">
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}