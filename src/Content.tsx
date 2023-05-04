import { useCallback, useState, useRef, MouseEvent } from 'react';
import type { Data } from './types';

import styles from './Content.styles';

type Props = {
  data: Data;
  isOpen: boolean;
};

export function Content({ data, isOpen }: Props) {
  const refRenderCount = useRef(0);
  const [_, rerender] = useState(0);
  const forceRerender = useCallback(() => rerender(Math.random()), []);

  const refData = useRef<Props['data']>();
  const refIds = useRef<Props['data'][number]['id'][]>();

  if (refData.current !== data) {
    refIds.current = [];
    refData.current = data;
  }

  const toggleId = useCallback((id: string) => {
    if (refIds.current?.includes(id)) {
      refIds.current = refIds.current.filter((i) => i !== id);
    } else {
      refIds.current?.push(id);
    }
    forceRerender();
  }, []);

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
        {data.map((item) => {
          const isInIds = refIds.current?.includes(item.id);
          const isShown = isOpen ? !isInIds : isInIds;

          return (
            <li key={item.id} style={styles.item}>
              <a
                style={styles.title}
                href="#"
                data-id={item.id}
                onClick={onClick}
              >
                {item.title}
              </a>
              {isShown && <p>{item.description}</p>}
            </li>
          );
        })}
      </ul>
    </>
  );
}
