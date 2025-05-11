import ClientLayout from './ClientLayout';

export const metadata = {
  title: 'SAVITHA Fashion',
  description: 'Your premier destination for fashion and style',
  icons: {
    icon: '/Savitha Modern.png',
    shortcut: '/Savitha Modern.png',
    apple: '/Savitha Modern.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Savitha Modern.png" />
        <link rel="shortcut icon" href="/Savitha Modern.png" />
        <link rel="apple-touch-icon" href="/Savitha Modern.png" />
      </head>
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
} 