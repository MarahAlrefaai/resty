import react from 'react'

import reactDom from 'react-dom/client'

import App from './app'
const root=reactDom.createRoot(document.getElementById('root'));
root.render(
  <react.StrictMode>
<App  /> 
  </react.StrictMode>
)