import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm/UserForm';
import Header from './components/Header/Header';
import { ThemeProvider } from './components/context/themeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="App ">
        <Header />
        <UserForm />
      </div>
    </ThemeProvider>
  );
}

export default App;
