import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css";
import { AuthProvider } from './context/auth.context.jsx';
import { StoryProvider } from './context/story.context.jsx';


createRoot(document.getElementById('root')).render(


    <AuthProvider>
      <StoryProvider>
        <App />
      </StoryProvider>
    </AuthProvider>

  
)
