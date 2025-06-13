import './App.css';
import { Header } from './components';
function App() {

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZWE1ZjlkMDg2ZjYyOThiN2E1YjExMTMwMjg5OWI1ZSIsIm5iZiI6MTc0OTgyNTgzOS4zNjMwMDAyLCJzdWIiOiI2ODRjMzkyZmQyNDgzOWU4NGUzZmRlYzYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.cNJ0bY8tRL0GFs2XHcerNJGLoIRasHfQiFGPtYQjW5E'
    }
  };

  fetch('https://api.themoviedb.org/3/configuration', options)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));

  return (
    <div>
      <Header />
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
