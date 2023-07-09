import { useSelector } from 'react-redux';

import type { RootState } from '../store/store';

type Data = any;

type GetData = {
  [key: string]: (id: string) => Data;
};

const useGetDataById = () => {
  const salesLeadsState = useSelector((state: RootState) => state.salesLeads);

  const getDataById: GetData = {
    salesLead: (id: string) => {
      const { salesLeads } = salesLeadsState;
      if (!salesLeads) return null;
      const [salesLead] = salesLeads.filter((item) => item.id === id);
      return salesLead;
    },
  };

  return getDataById;
};

export default useGetDataById;
