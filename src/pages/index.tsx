import Image from "next/image";
import { Inter } from "next/font/google";
import { useSession } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data }: any = useSession();
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
      <h1>Welcome! {data?.user?.fullname}</h1>
      {data?.user?.image && (
        <Image src={data?.user?.image} alt="" width={100} height={100} />
      )}
    </main>
  );
}
