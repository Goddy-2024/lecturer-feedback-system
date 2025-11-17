import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Download, FileText, Eye } from "lucide-react";
import { toast } from "sonner";

const mockFeedback = [
  { id: 1, course: "CSC101", lecturer: "Dr. Kamau", avgScore: 4.2, responses: 68 },
  { id: 2, course: "MAT201", lecturer: "Prof. Otiende", avgScore: 3.9, responses: 52 },
  { id: 3, course: "CSC205", lecturer: "Ms. Achieng", avgScore: 4.5, responses: 45 },
  { id: 4, course: "BUS301", lecturer: "Dr. Njeri", avgScore: 4.0, responses: 61 },
];

const ViewAllFeedback = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFeedback = mockFeedback.filter(
    (item) =>
      item.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.lecturer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleExport = (type: "pdf" | "excel") => {
    toast.success(`Exporting all feedback as ${type.toUpperCase()}...`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" onClick={() => navigate("/admin/dashboard")}>
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <h1 className="text-2xl font-bold text-foreground">All Feedback Responses</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-6">
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <Input
            placeholder="Search by course or lecturer..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
          />
          <div className="flex gap-2">
            <Button onClick={() => handleExport("excel")} variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export Excel
            </Button>
            <Button onClick={() => handleExport("pdf")}>
              <FileText className="w-4 h-4 mr-2" />
              Export PDF
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Feedback Summary ({filteredFeedback.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-semibold">Course</th>
                    <th className="text-left p-3 font-semibold">Lecturer</th>
                    <th className="text-center p-3 font-semibold">Avg Score</th>
                    <th className="text-center p-3 font-semibold">Responses</th>
                    <th className="text-center p-3 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredFeedback.map((item) => (
                    <tr key={item.id} className="border-b hover:bg-muted/50 transition-colors">
                      <td className="p-3 font-medium">{item.course}</td>
                      <td className="p-3">{item.lecturer}</td>
                      <td className="text-center p-3">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium ${
                          item.avgScore >= 4.0 
                            ? 'bg-success/10 text-success' 
                            : 'bg-chart-4/10 text-chart-4'
                        }`}>
                          {item.avgScore.toFixed(1)}
                        </span>
                      </td>
                      <td className="text-center p-3">{item.responses}</td>
                      <td className="text-center p-3">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => toast.info("Detailed view coming soon!")}
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          View
                        </Button>
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

export default ViewAllFeedback;
