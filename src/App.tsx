import { useMemo, useState } from 'react';
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

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <Content data={dataFiltered} />
    </>
  );
}

export default App;
