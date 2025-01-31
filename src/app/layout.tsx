import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

export default function RootLayout(props) {
  return (
      <html lang="en">
      <body>
      +        <AppRouterCacheProvider>
        {props.children}
        +        </AppRouterCacheProvider>
      </body>
      </html>
  );
}