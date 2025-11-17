import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Plus, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";

const mockLecturers = [
  { id: 1, name: "Dr. Kamau", email: "kamau@uni.ac.ke", department: "Computer Science" },
  { id: 2, name: "Ms. Achieng", email: "achieng@uni.ac.ke", department: "Computer Science" },
  { id: 3, name: "Prof. Otiende", email: "otiende@uni.ac.ke", department: "Mathematics" },
  { id: 4, name: "Dr. Njeri", email: "njeri@uni.ac.ke", department: "Business" },
];

const ManageLecturers = () => {
  const navigate = useNavigate();
  const [lecturers, setLecturers] = useState(mockLecturers);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredLecturers = lecturers.filter(
    (lecturer) =>
      lecturer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lecturer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id: number, name: string) => {
    if (confirm(`Are you sure you want to delete ${name}?`)) {
      setLecturers(lecturers.filter((l) => l.id !== id));
      toast.success("Lecturer deleted successfully");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" onClick={() => navigate("/admin/dashboard")}>
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <h1 className="text-2xl font-bold text-foreground">Manage Lecturers</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-6">
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <Input
            placeholder="Search lecturers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
          />
          <Button onClick={() => toast.info("Add lecturer form coming soon!")}>
            <Plus className="w-4 h-4 mr-2" />
            Add Lecturer
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Lecturers ({filteredLecturers.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-semibold">Name</th>
                    <th className="text-left p-3 font-semibold">Email</th>
                    <th className="text-left p-3 font-semibold">Department</th>
                    <th className="text-center p-3 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLecturers.map((lecturer) => (
                    <tr key={lecturer.id} className="border-b hover:bg-muted/50 transition-colors">
                      <td className="p-3 font-medium">{lecturer.name}</td>
                      <td className="p-3 text-muted-foreground">{lecturer.email}</td>
                      <td className="p-3">{lecturer.department}</td>
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
                            onClick={() => handleDelete(lecturer.id, lecturer.name)}
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

export default ManageLecturers;
