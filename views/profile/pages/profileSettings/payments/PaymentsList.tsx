'use client';

import { Checkbox, Input, Pagination, UniversalIcon } from '@irondragons/ui-lib-inctagram';
import { useState } from 'react';
import s from './PaymentsList.module.scss';
import { UserRow } from './components/UserRow';
import { AmountRow } from './components/AmountRow';

type Payment = {
  userName: string;
  avatar?: React.ReactNode;
  amount: number;
  currency: string;
  createdAt: string;
  subscription: string;
  paymentMethod: string;
};

export const PaymentsList = () => {
  const [perPage, setPerPage] = useState(8);
  const paymentsData: Payment[] = [
    {
      avatar: <UniversalIcon name="avatar1" className={s.userAvatar} />,
      userName: 'John Doe',
      amount: 50,
      currency: '$',
      createdAt: '17.09.2025',
      subscription: '1 day',
      paymentMethod: 'Stripe',
    },
    {
      avatar: <UniversalIcon name="avatar2" className={s.userAvatar} />,
      userName: 'Jane Smith',
      amount: 30,
      currency: '$',
      createdAt: '17.09.2026',
      subscription: '7 days',
      paymentMethod: 'PayPal',
    },
    {
      avatar: <UniversalIcon name="avatar3" className={s.userAvatar} />,
      userName: 'Alice Smith',
      amount: 70,
      currency: '$',
      createdAt: '17.09.2025',
      subscription: '7 days',
      paymentMethod: 'Stripe',
    },
    {
      avatar: <UniversalIcon name="avatar1" className={s.userAvatar} />,
      userName: 'Bob Smith',
      amount: 40,
      currency: '$',
      createdAt: '17.09.2025',
      subscription: '7 days',
      paymentMethod: 'Stripe',
    },
    {
      avatar: <UniversalIcon name="avatar2" className={s.userAvatar} />,
      userName: 'Charlie Smith ',
      amount: 90,
      currency: '$',
      createdAt: '17.09.2025',
      subscription: '7 days',
      paymentMethod: 'PayPal',
    },
    {
      avatar: <UniversalIcon name="avatar3" className={s.userAvatar} />,
      userName: 'Diana Smith',
      amount: 25,
      currency: '$',
      createdAt: '17.09.2025',
      subscription: '7 days',
      paymentMethod: 'Stripe',
    },
  ];

  return (
    <div className={s.container}>
      <div className={s.update}>
        <Checkbox idProp={'Auto-update'} checked={true} label={'Autoupdate'} />
      </div>
      <div className={s.search}>
        <Input fullWidth inputType="search" placeholder="Search" />
      </div>
      <table className={s.table}>
        <thead>
          <tr>
            <th className={s.colFullName}>
              <div className={s.headerCell}>
                Full Name
                <div className={s.sortIcons}>
                  <UniversalIcon name="polygon2" className={s.sortIcon} />
                  <UniversalIcon name="polygon3" className={s.sortIcon} />
                </div>
              </div>
            </th>
            <th className={s.colSecond}>
              <div className={s.headerCell}>
                Date added
                <div className={s.sortIcons}>
                  <UniversalIcon name="polygon2" className={s.sortIcon} />
                  <UniversalIcon name="polygon3" className={s.sortIcon} />
                </div>
              </div>
            </th>
            <th className={s.colAmount}>
              <div className={s.headerCell}>
                Amount, $
                <div className={s.sortIcons}>
                  <UniversalIcon name="polygon2" className={s.sortIcon} />
                  <UniversalIcon name="polygon3" className={s.sortIcon} />
                </div>
              </div>
            </th>
            <th className={s.colType}>Subscription</th>
            <th className={s.colPaymentMethod}>
              <div className={s.headerCell}>
                Payment Method
                <div className={s.sortIcons}>
                  <UniversalIcon name="polygon2" className={s.sortIcon} />
                  <UniversalIcon name="polygon3" className={s.sortIcon} />
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {paymentsData.map((row, idx) => (
            <tr key={idx}>
              <td className={s.colFullName}>
                <div className={s.userRow}>
                  <div className={s.avatarWrapper}>{row.avatar}</div>
                  <UserRow userName={row.userName} />
                </div>
              </td>
              <td className={s.colSecond}>{row.createdAt}</td>
              <td className={s.colAmount}>
                <AmountRow amount={row.amount} currency={row.currency} />
              </td>
              <td className={s.colType}>{row.subscription}</td>
              <td className={s.colPaymentMethod}>{row.paymentMethod}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={s.pagination}>
        <Pagination
          count={55}
          page={1}
          perPageOptions={[5, 8, 12, 100]}
          perPage={perPage}
          onPerPageChange={setPerPage}
        />
      </div>
    </div>
  );
};
