import { useCallback, useMemo, useState, ChangeEvent } from 'react';
import { Content } from './Content';
import { data } from './data';

function App() {
  const [ids, setIds] = useState<typeof data[number]['id'][]>([]);
  const [search, setSearch] = useState('');

  const dataFiltered = useMemo(
    () =>
      data.filter((item) => item.title.toLocaleLowerCase().includes(search)),
    [search]
  );

  const toggleId = useCallback(
    (id: string) =>
      setIds((ids) =>
        ids.includes(id) ? ids.filter((i) => i !== id) : [...ids, id]
      ),
    []
  );

  const onSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLocaleLowerCase().trim();
    if (value) {
      setIds(data.map((item) => item.id));
    } else {
      setIds([]);
    }
    setSearch(value);
  }, []);

  return (
    <>
      <div>
        <input type="text" placeholder="Search" onChange={onSearch} />
      </div>
      <Content data={dataFiltered} openIds={ids} onRowClick={toggleId} />
    </>
  );
}

export default App;
