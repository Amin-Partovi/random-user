import { Button } from "components/elements";
import { PageLayout } from "components/layouts";
import { useFetchRandomUser } from "hooks";

function App() {
  const { refetch, data, isLoading } = useFetchRandomUser();
  return (
    <PageLayout>
      <Button> watch me</Button>
    </PageLayout>
  );
}

export default App;
