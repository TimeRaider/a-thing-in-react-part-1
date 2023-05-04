import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import { Content } from './Content';
import { data } from './data';

function App() {
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

  const onSearch = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value),
    []
  );

  return (
    <>
      <div>
        <input type="text" placeholder="Search" onChange={onSearch} />
      </div>
      <Content data={dataFiltered} />
    </>
  );
}

export default App;
