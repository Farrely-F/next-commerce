import AdminLayout from "@/components/layouts/Admin";
import Table from "@/components/ui/Tables";

export default function AdminUsersPage() {
  return (
    <AdminLayout>
      <h1 className="font-bold text-2xl mb-4 border-b pb-4">
        Users Admin Page
      </h1>
      <Table />
    </AdminLayout>
  );
}
