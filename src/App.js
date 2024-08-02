import { useEffect, useState } from "react";
import Portfolio from "./Portfolio";
import PreLoadingPage from "./Pages/PreLoadingPage";
import { CSSTransition } from "react-transition-group";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [portfolioData, setPortfolioData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      //Checks Local Storage for Data
      const storedData = localStorage.getItem("portfolioData");

      if (storedData) {
        // If data exists in localStorage, use it
        setPortfolioData(JSON.parse(storedData));
        setIsLoading(false);
      } else {
        // Otherwise, fetch data from API or source
        try {
          // Simulate fetching data (replace with actual API call)
          const fakeFetch = () => {
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve({ /* your portfolio data */ });
              }, 5000);
            });
          };

          const result = await fakeFetch();

          // Store data in localStorage
          localStorage.setItem("portfolioData", JSON.stringify(result));

          setPortfolioData(result);
          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
          setIsLoading(false);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <CSSTransition
        in={!isLoading}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
        <Portfolio data={portfolioData} />
      </CSSTransition>
      {isLoading && <PreLoadingPage />}
    <Analytics/>
    <SpeedInsights/>
    </>

  );
}

export default App;
