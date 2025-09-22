import './globals.css';
import ApolloWrapper from '@/src/app/ApolloWrapper';
import { MainLayoutComponent } from '@/src/common/components/mainLayout';
import { LayoutWithProvider } from '@/src/common/components/layoutWithProvider';

export const metadata = {
  title: 'Admin Dashboard',
  description: 'Admin Panel',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LayoutWithProvider component={MainLayoutComponent}>
          <ApolloWrapper>{children}</ApolloWrapper>
        </LayoutWithProvider>
      </body>
    </html>
  );
}
