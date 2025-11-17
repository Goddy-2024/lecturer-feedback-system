import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { GraduationCap, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const metrics = [
  { id: "clarity", label: "Clarity" },
  { id: "engagement", label: "Engagement" },
  { id: "preparedness", label: "Preparedness" },
  { id: "explanation", label: "Explanation" },
];

const StudentFeedback = () => {
  const [ratings, setRatings] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (Object.keys(ratings).length < metrics.length) {
      toast.error("Please rate all metrics");
      return;
    }

    // Mock submission
    setSubmitted(true);
    toast.success("Feedback submitted successfully!");
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-success/5 via-background to-primary/5 p-4">
        <Card className="w-full max-w-md text-center">
          <CardHeader className="space-y-4">
            <div className="mx-auto w-16 h-16 bg-success rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-success-foreground" />
            </div>
            <div>
              <CardTitle className="text-2xl">Thank You!</CardTitle>
              <CardDescription className="text-base mt-2">
                Your feedback has been submitted anonymously and will help improve the quality of teaching.
              </CardDescription>
            </div>
          </CardHeader>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
            <GraduationCap className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Lecturer Feedback Form</h1>
          <p className="text-muted-foreground">Your responses are completely anonymous</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>CSC 101 - Introduction to Computer Science</CardTitle>
            <CardDescription>Dr. Kamau</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              <p className="text-sm text-muted-foreground">
                Rate the lecturer on a scale of 1–5 (1 = Poor, 5 = Excellent)
              </p>

              {metrics.map((metric) => (
                <div key={metric.id} className="space-y-3">
                  <Label className="text-base font-semibold">{metric.label}</Label>
                  <RadioGroup
                    value={ratings[metric.id]}
                    onValueChange={(value) =>
                      setRatings((prev) => ({ ...prev, [metric.id]: value }))
                    }
                  >
                    <div className="flex justify-between gap-2">
                      {[1, 2, 3, 4, 5].map((value) => (
                        <div
                          key={value}
                          className="flex flex-col items-center flex-1"
                        >
                          <RadioGroupItem
                            value={value.toString()}
                            id={`${metric.id}-${value}`}
                            className="mb-2"
                          />
                          <Label
                            htmlFor={`${metric.id}-${value}`}
                            className="text-sm cursor-pointer"
                          >
                            {value}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              ))}

              <Button type="submit" size="lg" className="w-full">
                Submit Feedback
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentFeedback;
