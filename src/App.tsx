import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import { Content } from './Content';
import { data } from './data';

function App() {
  const [search, setSearch] = useState('');

  const dataFiltered = useMemo(
    () =>
      data.filter((item) => item.title.toLocaleLowerCase().includes(search)),
    [search]
  );

  const onSearch = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      setSearch(e.target.value.toLocaleLowerCase().trim()),
    []
  );

  return (
    <>
      <div>
        <input type="text" placeholder="Search" onChange={onSearch} />
      </div>
      <Content data={dataFiltered} isOpen={Boolean(search.length)} />
    </>
  );
}

export default App;
