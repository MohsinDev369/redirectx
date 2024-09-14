import { redirect } from "next/navigation";

export default function Home() {
  redirect(`https://x.com/intent/user?screen_name=TheMohsinAkram`);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Redirecting to x...</div>
    </main>
  );
}
