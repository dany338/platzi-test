import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { obtainOther } from '../redux/actions/other';
import useEffectOnce from './useEffectOnce';

const useOther = (id: string) => {
  const dispatch = useDispatch();
  const [ loading, setLoading ] = useState<boolean>(false);
  const { contact: { contact } }: any = useSelector((state) => state);
  const fetchContact = async () => {
    setLoading(true);
    await dispatch<any>(obtainOther(id));
    setLoading(false);
  };

  useEffectOnce(() => {
    fetchContact();
    return () => console.log('my effect is destroying');
  });

  return [ contact, loading ];
};

export default useOther;