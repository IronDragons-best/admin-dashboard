type PropsAmount = {
  amount: number;
  currency: string;
};

export const AmountRow = ({ amount, currency }: PropsAmount) => <>{`${amount} ${currency}`}</>;
