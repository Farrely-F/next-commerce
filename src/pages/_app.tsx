import Navbar from "@/components/fragments/Navbar";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

const disableNabar = ["auth", "admin"];

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const { pathname } = useRouter();

  return (
    <>
      <SessionProvider session={session}>
        {!disableNabar.includes(pathname.split("/")[1]) && <Navbar />}
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
