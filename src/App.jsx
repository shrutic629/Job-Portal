import "./App.css";
import Header from "./components/Header/Header";
import QuoteBox from "./components/QuoteBox/QuoteBox";
import JobFilters from "./components/JobFilters/JobFilters";
import JobListing from "./components/JobListing/JobListing";
import { SearchContextProvider } from "./contexts/SearchContext";

function App() {
  return (
    <>
      <Header />
      <QuoteBox />
      <SearchContextProvider>
        <JobFilters />
        <JobListing />
      </SearchContextProvider>
    </>
  );
}

export default App;
