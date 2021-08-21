import { useState, useEffect } from 'react';

export default function useContainerSize(containerRef) {
  const [containerSize, setContainerSize] = useState({
    width: 0,
    height: 0,
  });

  const [times, setTimes] = useState(0);

  useEffect(() => {
    const updateContainerSize = () => {
      if (containerRef?.current !== null) {
        setContainerSize({
          width: containerRef?.current.offsetWidth,
          height: containerRef?.current.offsetHeight,
        });
      }
    };

    if (containerRef?.current && times < 1) {
      updateContainerSize();
      setTimes(times + 1);
    }
  }, [containerRef, times]);

  return containerSize;
}
