import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import LecturerDashboard from "./pages/lecturer/LecturerDashboard";
import CreateFeedback from "./pages/lecturer/CreateFeedback";
import ViewResults from "./pages/lecturer/ViewResults";
import StudentFeedback from "./pages/StudentFeedback";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageLecturers from "./pages/admin/ManageLecturers";
import ManageCourses from "./pages/admin/ManageCourses";
import ManageDepartments from "./pages/admin/ManageDepartments";
import ViewAllFeedback from "./pages/admin/ViewAllFeedback";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/lecturer/dashboard" element={<LecturerDashboard />} />
          <Route path="/lecturer/create-feedback" element={<CreateFeedback />} />
          <Route path="/lecturer/results/:courseId" element={<ViewResults />} />
          <Route path="/feedback/:formId" element={<StudentFeedback />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/lecturers" element={<ManageLecturers />} />
          <Route path="/admin/courses" element={<ManageCourses />} />
          <Route path="/admin/departments" element={<ManageDepartments />} />
          <Route path="/admin/feedback" element={<ViewAllFeedback />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
