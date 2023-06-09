import { useCallback, useState, useRef, MouseEvent } from 'react';
import type { Data } from './types';

import styles from './Content.styles';

type Props = {
  data: Data;
};

export function Content({ data }: Props) {
  const refRenderCount = useRef(0);
  const [ids, setIds] = useState<Props['data'][number]['id'][]>([]);

  const toggleId = useCallback(
    (id: string) =>
      setIds((ids) =>
        ids.includes(id) ? ids.filter((i) => i !== id) : [...ids, id]
      ),
    []
  );

  const onClick = useCallback((e: MouseEvent) => {
    e.preventDefault();
    toggleId(e.target?.dataset.id);
  }, []);

  return (
    <>
      <p>
        render count: <strong>{++refRenderCount.current}</strong>
      </p>
      <ul style={styles.ul}>
        {data.map((item) => (
          <li key={item.id} style={styles.item}>
            <a
              style={styles.title}
              href="#"
              data-id={item.id}
              onClick={onClick}
            >
              {item.title}
            </a>
            {ids.includes(item.id) && <p>{item.description}</p>}
          </li>
        ))}
      </ul>
    </>
  );
}
