import Sidebar from "@/components/fragments/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="p-16 w-full">{children}</main>
    </div>
  );
}
