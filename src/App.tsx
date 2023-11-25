import { useFetchRandomUser } from "hooks";

function App() {
  const { refetch, data, isLoading } = useFetchRandomUser();
  return <div className="App"></div>;
}

export default App;
