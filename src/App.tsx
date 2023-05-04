import { useMemo, useState, useRef, useCallback, ChangeEvent } from 'react';
import { Content } from './Content';
import { data } from './data';

function App() {
  const [search, setSearch] = useState('');

  const dataFiltered = useMemo(
    () =>
      data.filter((item) => item.title.toLocaleLowerCase().includes(search)),
    [search]
  );

  const refContent =
    useRef<{ openAll: () => unknown; closeAll: () => unknown }>(null);

  const onSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLocaleLowerCase().trim();
    if (value) {
      refContent.current?.openAll();
    } else {
      refContent.current?.closeAll();
    }
    setSearch(value);
  }, []);

  return (
    <>
      <div>
        <input type="text" placeholder="Search" onChange={onSearch} />
      </div>
      <Content data={dataFiltered} ref={refContent} />
    </>
  );
}

export default App;
