import { signInWithGoogle } from '../../firebase'
import Button from '@mui/material/Button'

const Login = () => {
  return (
    <div className="dashboard">
      <Button
        variant="contained"
        size="large"
        onClick={signInWithGoogle}
        style={{ color: '#ffd700', padding: '20px', fontSize: '15px' }}
      >
        Sign In with Google
      </Button>
    </div>
  )
}

export default Login
