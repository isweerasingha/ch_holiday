import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Destination",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return <section> {children} </section>;
}
