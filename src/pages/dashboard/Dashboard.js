import { useCollection } from '../../hooks/useCollection'
import ProjectList from '../../components/ProjectList'

// styles
import './Dashboard.css'

export default function Dashboard() {
  const { documents , error} = useCollection('posts')

  return (
    <div>
      <h2 className='page-title'>Dashboard</h2>
      {error && <p className='error'>{error}</p>}
      {documents && <ProjectList projects={documents} />}
    </div>
  )
}
