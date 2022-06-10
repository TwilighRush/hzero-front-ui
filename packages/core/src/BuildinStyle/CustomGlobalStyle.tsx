import React, { FC, useEffect, useMemo, useState } from 'react';
import GlobalStyle from '../components/GlobalStyle';
import { getStore } from '../utils/store/helper';

const CustomGlobalStyle: FC<any> = () => {
  const store = useMemo(() => getStore(), []);
  const [styles, setStyles] = useState<any[]>([]);
  useEffect(() => {
    const unsubscribe = store.subscribe((state) => {
      setStyles([...(state.customStyles || [])]);
    });
    return () => unsubscribe();
  }, [store]);
  return <GlobalStyle id="hzero-ued-custom-global-style" css={styles} />;
};

export default CustomGlobalStyle;
