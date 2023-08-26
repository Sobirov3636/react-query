import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import SuperHeroes from "./components/SuperHeroes.page";
import RQSuperHeroes from "./components/RQSuperHeroes.page";
import Home from "./components/Home.page";
import { QueryClient, QueryClientProvider } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/super-heroes'>Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path='/super-heroes' element={<SuperHeroes />} />

            <Route path='/rq-super-heroes' element={<RQSuperHeroes />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;
