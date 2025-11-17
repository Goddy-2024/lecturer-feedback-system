import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Plus, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";

const mockDepartments = [
  { id: 1, name: "Computer Science", lecturers: 12, courses: 28 },
  { id: 2, name: "Mathematics", lecturers: 8, courses: 15 },
  { id: 3, name: "Business", lecturers: 10, courses: 22 },
  { id: 4, name: "Engineering", lecturers: 15, courses: 35 },
  { id: 5, name: "Medicine", lecturers: 20, courses: 42 },
];

const ManageDepartments = () => {
  const navigate = useNavigate();
  const [departments, setDepartments] = useState(mockDepartments);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDepartments = departments.filter((dept) =>
    dept.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id: number, name: string) => {
    if (confirm(`Are you sure you want to delete ${name}?`)) {
      setDepartments(departments.filter((d) => d.id !== id));
      toast.success("Department deleted successfully");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" onClick={() => navigate("/admin/dashboard")}>
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <h1 className="text-2xl font-bold text-foreground">Manage Departments</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-6">
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <Input
            placeholder="Search departments..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
          />
          <Button onClick={() => toast.info("Add department form coming soon!")}>
            <Plus className="w-4 h-4 mr-2" />
            Add Department
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Departments ({filteredDepartments.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-semibold">Department Name</th>
                    <th className="text-center p-3 font-semibold">Lecturers</th>
                    <th className="text-center p-3 font-semibold">Courses</th>
                    <th className="text-center p-3 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredDepartments.map((dept) => (
                    <tr key={dept.id} className="border-b hover:bg-muted/50 transition-colors">
                      <td className="p-3 font-medium">{dept.name}</td>
                      <td className="text-center p-3">{dept.lecturers}</td>
                      <td className="text-center p-3">{dept.courses}</td>
                      <td className="p-3">
                        <div className="flex justify-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => toast.info("Edit functionality coming soon!")}
                          >
                            <Pencil className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDelete(dept.id, dept.name)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ManageDepartments;
