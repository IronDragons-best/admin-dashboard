'use client';

import s from './sidebar.module.scss';
import { MenuItem } from './MenuItem';
import { useState } from 'react';
import { UniversalIcon } from '@irondragons/ui-lib-inctagram';
import { PATH } from '@/shared/constants/path';

type SidebarItemConfig = {
  text: string;
  iconName: string;
  href: string;
  onClick?: () => void;
};
export const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const menuItems: SidebarItemConfig[] = [
    { text: 'User list', iconName: 'person', href: '#' },
    { text: 'Statistics', iconName: 'trending-up-outline', href: '#' },
    { text: 'Payments list', iconName: 'credit-card-outline', href: PATH.payments },
    { text: 'Posts list', iconName: 'image-outline', href: '#' },
  ];

  const handleMenuClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className={s.sidebar}>
      <ul className={s.sidebar_menu}>
        {menuItems.map((item, index) => {
          const handleItemClick = () => handleMenuClick(index);
          return (
            <MenuItem
              key={item.text}
              text={item.text}
              icon={<UniversalIcon name={item.iconName} />}
              href={item.href}
              isActive={activeIndex === index}
              onClick={handleItemClick}
            />
          );
        })}
      </ul>
    </div>
  );
};
