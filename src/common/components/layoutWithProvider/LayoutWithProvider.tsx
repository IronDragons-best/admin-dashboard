'use client';

import { Provider } from 'react-redux';
import { store } from '@/src/app/provider/store';
import { ComponentType, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  component: ComponentType<{ children: ReactNode }>;
};

export const LayoutWithProvider = ({ children, component: Component }: Props) => {
  return (
    <Provider store={store}>
      <Component>{children}</Component>
    </Provider>
  );
};
