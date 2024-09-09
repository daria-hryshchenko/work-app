'use client'

import { useState } from 'react'

interface Job {
  id: number
  title: string
  description: string
  requirements: string
  salary: string
}

export default function EmployerDashboard() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [newJob, setNewJob] = useState({ title: '', description: '', requirements: '', salary: '' })

  const handleCreateJob = (e: React.FormEvent) => {
    e.preventDefault()
    const job = { ...newJob, id: Date.now() }
    setJobs([...jobs, job])
    setNewJob({ title: '', description: '', requirements: '', salary: '' })
  }

  const handleDeleteJob = (id: number) => {
    setJobs(jobs.filter(job => job.id !== id))
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Create New Job</h2>
      <form onSubmit={handleCreateJob} className="mb-8">
        <input
          type="text"
          value={newJob.title}
          onChange={(e) => setNewJob({...newJob, title: e.target.value})}
          placeholder="Job Title"
          className="block w-full p-2 mb-2 border rounded"
        />
        <textarea
          value={newJob.description}
          onChange={(e) => setNewJob({...newJob, description: e.target.value})}
          placeholder="Job Description"
          className="block w-full p-2 mb-2 border rounded"
        />
        <textarea
          value={newJob.requirements}
          onChange={(e) => setNewJob({...newJob, requirements: e.target.value})}
          placeholder="Job Requirements"
          className="block w-full p-2 mb-2 border rounded"
        />
        <input
          type="text"
          value={newJob.salary}
          onChange={(e) => setNewJob({...newJob, salary: e.target.value})}
          placeholder="Salary"
          className="block w-full p-2 mb-2 border rounded"
        />
        <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Create Job
        </button>
      </form>

      <h2 className="text-2xl font-bold mb-4">Your Job Postings</h2>
      <ul>
        {jobs.map(job => (
          <li key={job.id} className="mb-4 p-4 border rounded">
            <h3 className="text-xl font-bold">{job.title}</h3>
            <p>{job.description}</p>
            <p>Requirements: {job.requirements}</p>
            <p>Salary: {job.salary}</p>
            <button 
              onClick={() => handleDeleteJob(job.id)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mt-2"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}