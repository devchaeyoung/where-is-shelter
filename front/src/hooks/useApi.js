import { useEffect, useState } from 'react';

const useApi = (fetcher, dependencies = '') => {

  // 백엔드로부터 받아온 데이터가 탑재되는 상태값입니다
  const [data, setData] = useState(null);
  
  // 백엔드로부터 데이터를 받아오고 있는지를 체크하는 상태값입니다.
  const [isFetching, setIsFetching] = useState();

  // 백엔드로부터 데이터를 받아오다가 오류가 발생했는지를 체크하는 상태값입니다.
  const [error, setError] = useState();
  
  useEffect(() => {

    setIsFetching(true);
    setError(false);
    
    try{   
      const data = fetcher();
      setData(data);

    } catch (err) {
      setError(error);
    }

    setIsFetching(false);
  }, [dependencies])

  return {
    data,
    isFetching,
    error
  }
}

export default useApi;