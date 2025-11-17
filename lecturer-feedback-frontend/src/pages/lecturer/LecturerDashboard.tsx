import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, TrendingUp, LogOut, Eye } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const mockCourses = [
  { id: 1, name: "CSC 101 - Introduction to Computer Science", feedbackForms: 4, avgScore: 4.2 },
  { id: 2, name: "MAT 201 - Calculus II", feedbackForms: 2, avgScore: 4.0 },
  { id: 3, name: "CSC 205 - Data Structures", feedbackForms: 3, avgScore: 4.5 },
];

const trendData = [
  { semester: "Sem 1", score: 4.0 },
  { semester: "Sem 2", score: 4.3 },
  { semester: "Sem 3", score: 4.2 },
  { semester: "Sem 4", score: 4.4 },
];

const LecturerDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    localStorage.removeItem("userEmail");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-foreground">Lecturer Dashboard</h1>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-8">
        <div>
          <Button onClick={() => navigate("/lecturer/create-feedback")} size="lg">
            <Plus className="w-4 h-4 mr-2" />
            Create New Feedback Form
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>My Courses</CardTitle>
            <CardDescription>Overview of your courses and feedback forms</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-semibold">Course Name</th>
                    <th className="text-center p-3 font-semibold">Feedback Forms</th>
                    <th className="text-center p-3 font-semibold">Avg Score</th>
                    <th className="text-center p-3 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockCourses.map((course) => (
                    <tr key={course.id} className="border-b hover:bg-muted/50 transition-colors">
                      <td className="p-3">{course.name}</td>
                      <td className="text-center p-3">{course.feedbackForms}</td>
                      <td className="text-center p-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-success/10 text-success">
                          {course.avgScore.toFixed(1)}
                        </span>
                      </td>
                      <td className="text-center p-3">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => navigate(`/lecturer/results/${course.id}`)}
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

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Performance Trend
            </CardTitle>
            <CardDescription>Your average feedback scores over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis 
                  dataKey="semester" 
                  className="text-sm"
                />
                <YAxis 
                  domain={[0, 5]} 
                  className="text-sm"
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '0.5rem'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="score" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={3}
                  dot={{ fill: 'hsl(var(--primary))', r: 6 }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default LecturerDashboard;
