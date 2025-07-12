import { useLocation } from 'react-router'
import TeacherCard from './teachers/components/TeacherCard'

function Meeting() {
  const { state } = useLocation()
  let content
  if (state?.teachers)
    content = (
      <div>
        {state.teachers.map((teacher) => (
          <TeacherCard teacher={teacher} />
        ))}
      </div>
    )
  else content = <h2>No teachers</h2>
  return (
    <>
      <div>Meeting </div>
      {content}
    </>
  )
}

export default Meeting
