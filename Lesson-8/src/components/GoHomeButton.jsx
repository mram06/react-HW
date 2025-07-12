import { useNavigate } from 'react-router'
import frontRoutes from '../routes/frontRoutes'
function GoHomeButton() {
  const navigate = useNavigate()
  function goHome() {
    navigate(frontRoutes.navigate.home)
  }
  return <button onClick={goHome}>Go home</button>
}

export default GoHomeButton
