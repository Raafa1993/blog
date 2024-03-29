import Sidebar from '../components/sections/Sidebar';
import StyledJsxRegistry from '../registry';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StyledJsxRegistry>
        <Sidebar />
        {children}
      </StyledJsxRegistry>
    </>
  );
}
