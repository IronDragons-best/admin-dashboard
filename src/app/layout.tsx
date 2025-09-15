import { ApolloProvider } from '@apollo/client/react';
import client from '../../lib/apolloClient';
import './globals.css';

export const metadata = {
  title: 'Admin Dashboard',
  description: 'Admin Panel',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ApolloProvider client={client}>{children}</ApolloProvider>
      </body>
    </html>
  );
}
