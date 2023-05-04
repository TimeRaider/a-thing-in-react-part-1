import { useRef } from 'react';
import type { Data } from './types';

import styles from './Content.styles';

type Props = {
  data: Data;
  openIds: Data[number]['id'][];
  onRowClick: (id: Data[number]['id']) => unknown;
};

export function Content({ data, openIds, onRowClick }: Props) {
  const refRenderCount = useRef(0);

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
              onClick={() => onRowClick(item.id)}
            >
              {item.title}
            </a>
            {openIds.includes(item.id) && <p>{item.description}</p>}
          </li>
        ))}
      </ul>
    </>
  );
}
