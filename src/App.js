import './App.css';
import ChatScreen from './components/chatScreen.tsx';
import Contacts from './components/contacts.tsx';

function App() {
  return (
    <>
    <div className='flex flex-row'>
      <Contacts />
      <ChatScreen/>
    </div>
    </>
  );
}

export default App;
