'use client'
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  router.push("https://x.com/intent/user?screen_name=TheMohsinAkram");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>One moment please...</div>
    </main>
  );
}
