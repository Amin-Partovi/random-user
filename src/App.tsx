import { PageLayout } from "components/layouts";
import { useFetchRandomUser } from "hooks";

function App() {
  const { refetch, data, isLoading } = useFetchRandomUser();
  return <PageLayout>watch me</PageLayout>;
}

export default App;
