
import { useState } from 'react';
import './App.css';
import UserProfile from './components/UserProfile';
import EditProfile from './components/EditProfile';

function App() {

  const [viewMode, setViewMode] = useState(true);
  
  let user = {
    name: "Pradip",
    email: "p@gmail.com",
    bio: "MERN Stack developer"
  }

  return (
    <div className="App">
      <button onClick={() => {setViewMode(!viewMode)}}>{viewMode ? "Edit Mode" : "View Mode"}</button>
      {
        viewMode ? <UserProfile user={user}/> : <EditProfile user={user}/>
      }
    </div>
  );
}

export default App;
