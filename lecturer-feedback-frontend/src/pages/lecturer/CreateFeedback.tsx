import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Copy, Mail, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const metrics = [
  { id: "clarity", label: "Clarity" },
  { id: "engagement", label: "Engagement" },
  { id: "preparedness", label: "Preparedness" },
  { id: "explanation", label: "Explanation" },
];

const courses = [
  { id: "1", name: "CSC 101 - Introduction to Computer Science" },
  { id: "2", name: "MAT 201 - Calculus II" },
  { id: "3", name: "CSC 205 - Data Structures" },
];

const CreateFeedback = () => {
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedMetrics, setSelectedMetrics] = useState<string[]>(metrics.map(m => m.id));
  const [formGenerated, setFormGenerated] = useState(false);
  const [formLink, setFormLink] = useState("");

  const handleGenerateForm = () => {
    if (!selectedCourse) {
      toast.error("Please select a course");
      return;
    }
    
    // Generate mock form link
    const mockLink = `${window.location.origin}/feedback/${Math.random().toString(36).substring(7)}`;
    setFormLink(mockLink);
    setFormGenerated(true);
    toast.success("Feedback form generated successfully!");
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(formLink);
    toast.success("Link copied to clipboard!");
  };

  const toggleMetric = (metricId: string) => {
    setSelectedMetrics(prev =>
      prev.includes(metricId)
        ? prev.filter(id => id !== metricId)
        : [...prev, metricId]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" onClick={() => navigate("/lecturer/dashboard")}>
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <h1 className="text-2xl font-bold text-foreground">Create Feedback Form</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-2xl">
        {!formGenerated ? (
          <Card>
            <CardHeader>
              <CardTitle>New Feedback Form</CardTitle>
              <CardDescription>Select a course and metrics for student feedback</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="course">Select Course</Label>
                <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                  <SelectTrigger id="course">
                    <SelectValue placeholder="Choose a course" />
                  </SelectTrigger>
                  <SelectContent>
                    {courses.map((course) => (
                      <SelectItem key={course.id} value={course.id}>
                        {course.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label>Select Metrics</Label>
                <div className="space-y-2">
                  {metrics.map((metric) => (
                    <div key={metric.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={metric.id}
                        checked={selectedMetrics.includes(metric.id)}
                        onCheckedChange={() => toggleMetric(metric.id)}
                      />
                      <Label
                        htmlFor={metric.id}
                        className="font-normal cursor-pointer"
                      >
                        {metric.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Button onClick={handleGenerateForm} className="w-full" size="lg">
                Generate Form Link
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 text-success">
                <CheckCircle className="w-6 h-6" />
                <CardTitle>Feedback Form Created!</CardTitle>
              </div>
              <CardDescription>Share this link with your students</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-muted rounded-lg break-all font-mono text-sm">
                {formLink}
              </div>

              <div className="flex gap-2">
                <Button onClick={handleCopyLink} className="flex-1">
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Link
                </Button>
                <Button variant="outline" className="flex-1">
                  <Mail className="w-4 h-4 mr-2" />
                  Send via Email
                </Button>
              </div>

              <Button 
                variant="outline" 
                onClick={() => {
                  setFormGenerated(false);
                  setSelectedCourse("");
                }}
                className="w-full"
              >
                Create Another Form
              </Button>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};

export default CreateFeedback;
