import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

import { ENDPOINTS } from "consts";
import { RandomUserData, RandomUserRootData } from "types";
import { Request } from "utils";

const useFetchRandomUser = (): {
  data: RandomUserData | undefined;
  refetch: () => void;
  isLoading: boolean;
} => {
  const [data, setData] = useState<RandomUserData>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function fetchRandomUser() {
    setIsLoading(true);
    Request({ endpoint: ENDPOINTS.RANDOM_USER })
      .then((res: AxiosResponse<RandomUserRootData>) => {
        setData(res.data.results[0]);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    fetchRandomUser();
  }, []);

  return { data, refetch: fetchRandomUser, isLoading };
};

export default useFetchRandomUser;
