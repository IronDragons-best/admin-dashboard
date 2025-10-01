import s from '../PaymentsList.module.scss';

type Props = {
  src?: string;
  userName: string;
};

export const UserRow = ({ userName }: Props) => (
  <div className={s.userRow}>
    <span>{userName}</span>
  </div>
);
