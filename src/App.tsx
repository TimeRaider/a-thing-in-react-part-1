import { useCallback, useMemo, useState, MouseEvent } from 'react';
import { Content } from './Content';
import { data } from './data';

function App() {
  const [ids, setIds] = useState<typeof data[number]['id'][]>([]);
  const [search, setSearch] = useState('');

  const dataFiltered = useMemo(
    () =>
      data.filter((item) =>
        item.title
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase().trim())
      ),
    [search]
  );

  const toggleId = useCallback(
    (id: string) =>
      setIds((ids) =>
        ids.includes(id) ? ids.filter((i) => i !== id) : [...ids, id]
      ),
    []
  );

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => {
            const { value } = e.target;
            if (value) {
              setIds(data.map((item) => item.id));
            } else {
              setIds([]);
            }
            setSearch(value);
          }}
        />
      </div>
      <Content data={dataFiltered} openIds={ids} onRowClick={toggleId} />
    </>
  );
}

export default App;
