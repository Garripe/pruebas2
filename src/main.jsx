
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MainLayout from './Layout/MainLayout.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <MainLayout>
    <App />
  </MainLayout>
)
