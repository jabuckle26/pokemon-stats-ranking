import './styles/app.scss';
import { Banner } from './components/Banner';
import { Descriptor } from './components/Descriptor';
import { QueryOptions } from './components/QueryOptions';
import { ResultsDisplay } from './components/ResultsDisplay';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <>
    <GlobalProvider>
        <Banner/>
        <Descriptor/>
        <QueryOptions/>
        <ResultsDisplay/>
      </GlobalProvider>
    </>
  );
}

export default App;
