import './App.css';
import img from './icon.png'
import Popup from './Popup';

import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <QueryClientProvider client={queryClient}>
           <Popup/>
        </QueryClientProvider>
       <p></p>
      </header>
    </div>
  );
}

export default App;
