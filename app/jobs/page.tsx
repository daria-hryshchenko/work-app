import JobList from './JobList'
import JobSearch from './JobSearch'

export default function JobsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Job Listings</h1>
      <JobSearch />
      <JobList />
    </div>
  )
}