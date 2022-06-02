import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useRouter } from 'next/router';
import Other, { IPagination }  from '../entities/Other';
import { obtainOthers } from '../redux/actions/other';
import useEffectOnce from './useEffectOnce';

const initialPagination = {
  count: 0,
  perPage: 10,
  currentPage: 1,
  totalPages: 0,
};

const useOthers = () => {
  // const router = useRouter();
  const [ search, setSearch ] = useState<string>('');
  const [ paginates, setPaginates ] = useState<IPagination>(initialPagination);
  const [ loading, setLoading ] = useState<boolean>(false);
  const dispatch = useDispatch();
  // const [ , setDidMount] = useState<boolean>(false);
  const { other: { others, deleteOk } }: any = useSelector((state) => state);

  const filtered = useMemo(() => others ? others.results.filter((other: Other) => search !== '' ? other.firstName.includes(search) : true ) : [], [others, search]);

  const fetchContacts = async (perPage = 10, page = 1, _sort = null, field = null, search = null) => {
    setLoading(true);
    await dispatch<any | unknown>(obtainOthers(perPage, page, _sort, field, search));
    setLoading(false);
  };


  const handleChangePage = async (event: React.ChangeEvent<unknown>, page: number) => {
    setLoading(true);
    await dispatch<any | unknown>(obtainOthers(10, page, null, null, null));
    setPaginates((prevPagination: IPagination) => ({ ...prevPagination, currentPage: page }));
    setLoading(false);
  };

  const onChangeQuery = (value: string) => {
    setSearch(value);
  };

  // do this:
  useEffectOnce( ()=> {
    fetchContacts();
    return () => console.log('my effect is destroying');
  });

  return [ others, loading, handleChangePage, paginates, deleteOk, filtered, onChangeQuery, search ];
};

export default useOthers;