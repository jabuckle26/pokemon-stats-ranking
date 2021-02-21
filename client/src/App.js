import './styles/app.scss';
import { Banner } from './components/Banner';
import { Descriptor } from './components/Descriptor';
import { QueryInterface } from './components/QueryInterface';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <>
        <Banner/>
        <Descriptor/>
        <GlobalProvider>
          <QueryInterface/>
        </GlobalProvider>
    </>
  );
}

export default App;
