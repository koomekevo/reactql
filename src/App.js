import "./App.css";
import { useQuery, gql } from "@apollo/client";

const FILM_QUERY = gql`
  {
    launchesPast(limit: 10) {
      id
      mission_name
    }
  }
`;

function App() {
  const { data, loading, error } = useQuery(FILM_QUERY);
  if (loading) return "loading...";
  if (error) return <pre>error.message</pre>;

  return (
    <div className="App">
      <h1>SpaceX Launches</h1>
      <ul>
        {data.launchesPast.map((launch) => (
          <li key={launch.id}>{launch.mission_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
