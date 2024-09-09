'use client'

import { useState } from 'react'

interface Application {
  id: number
  jobTitle: string
  company: string
  status: string
}

export default function JobSeekerDashboard() {
  const [resume, setResume] = useState('')
  const [applications, setApplications] = useState<Application[]>([])

  const handleResumeUpload = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setResume(e.target.value)
  }

  const handleApply = () => {
    // In a real app, you'd send this application to an API
    const newApplication = {
      id: Date.now(),
      jobTitle: 'Software Engineer',
      company: 'Tech Co',
      status: 'Applied'
    }
    setApplications([...applications, newApplication])
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Resume</h2>
      <textarea
        value={resume}
        onChange={handleResumeUpload}
        placeholder="Paste your resume here..."
        className="block w-full p-2 mb-4 border rounded h-40"
      />

      <h2 className="text-2xl font-bold mb-4">Apply for a Job</h2>
      <button 
        onClick={handleApply}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Apply for Software Engineer at Tech Co
      </button>

      <h2 className="text-2xl font-bold mb-4">Your Applications</h2>
      <ul>
        {applications.map(app => (
          <li key={app.id} className="mb-2 p-2 border rounded">
            <h3 className="font-bold">{app.jobTitle}</h3>
            <p>{app.company}</p>
            <p>Status: {app.status}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}