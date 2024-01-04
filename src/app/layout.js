import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { Inter } from "next/font/google";
import "./globals.css";
import { theme } from "./theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ch Holiday / Home",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta http="true" equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        
        <MantineProvider theme={theme}> {children} </MantineProvider>
      </body>
    </html>
  );
}
