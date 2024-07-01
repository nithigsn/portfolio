import { useEffect, useState } from "react";
import Portfolio from "./Portfolio";
import PreLoadingPage from "./Pages/PreLoadingPage";
import { CSSTransition } from "react-transition-group";


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    };
    fakeDataFetch();
  }, []);

  return (
    <div className="App">
      <CSSTransition
        in={!isLoading}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
        <Portfolio />
      </CSSTransition>
      {isLoading && <PreLoadingPage />}
    </div>
  );
}

export default App;
