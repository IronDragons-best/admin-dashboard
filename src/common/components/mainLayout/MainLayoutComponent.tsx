'use client';

import { PropsWithChildren } from 'react';
import '@irondragons/ui-lib-inctagram/dist/style.css';
import '@/src/styles/index.scss';
import { Header } from '@/widgets/header';
import { Sidebar } from '@/widgets/sidebar';
import s from './mainLayout.module.scss';

export const MainLayoutComponent = ({ children }: PropsWithChildren) => {
  const isUserAuthorized = true;

  return (
    <div className={s.rootLayout}>
      <Header isAuth={isUserAuthorized} localization={'eng'} />
      <div className={s.display}>
        {isUserAuthorized && <Sidebar />}
        <div className={s.mainWrapper} data-isuserauthorized={isUserAuthorized}>
          {children}
        </div>
      </div>
    </div>
  );
};
