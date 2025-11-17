import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Download, FileText } from "lucide-react";
import { toast } from "sonner";

const mockResults = {
  courseName: "CSC 101 - Introduction to Computer Science",
  totalResponses: 68,
  overallAverage: 4.2,
  metrics: [
    { name: "Clarity", score: 4.3, percentage: 86 },
    { name: "Engagement", score: 4.0, percentage: 80 },
    { name: "Preparedness", score: 4.2, percentage: 84 },
    { name: "Explanation", score: 4.1, percentage: 82 },
  ],
};

const ViewResults = () => {
  const navigate = useNavigate();
  const { courseId } = useParams();

  const handleExport = (type: "pdf" | "excel") => {
    toast.success(`Exporting as ${type.toUpperCase()}...`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" onClick={() => navigate("/lecturer/dashboard")}>
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <h1 className="text-2xl font-bold text-foreground">Feedback Results</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>{mockResults.courseName}</CardTitle>
            <CardDescription>Detailed feedback analysis</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-primary/5 rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">Total Responses</p>
                <p className="text-4xl font-bold text-primary">{mockResults.totalResponses}</p>
              </div>
              <div className="p-6 bg-success/5 rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">Overall Average</p>
                <p className="text-4xl font-bold text-success">
                  {mockResults.overallAverage.toFixed(1)}/5.0
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Scores Breakdown</CardTitle>
            <CardDescription>Average rating per metric</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {mockResults.metrics.map((metric) => (
              <div key={metric.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{metric.name}</span>
                  <span className="text-lg font-bold text-primary">
                    {metric.score.toFixed(1)}
                  </span>
                </div>
                <Progress value={metric.percentage} className="h-3" />
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="flex gap-4">
          <Button onClick={() => handleExport("pdf")} className="flex-1">
            <FileText className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
          <Button onClick={() => handleExport("excel")} variant="outline" className="flex-1">
            <Download className="w-4 h-4 mr-2" />
            Download Excel
          </Button>
        </div>
      </main>
    </div>
  );
};

export default ViewResults;
