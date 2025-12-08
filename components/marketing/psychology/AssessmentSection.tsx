"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Brain, HeartPulse, Activity } from "lucide-react";

interface AssessmentCard {
  icon: React.ReactNode;
  name: string;
  description: string;
  type: string;
  questions: number;
}

const AssessmentSection = () => {
  const assessments: AssessmentCard[] = [
    {
      icon: <HeartPulse className="h-6 w-6 text-red-500" />,
      name: "PHQ-9",
      description: "Patient Health Questionnaire-9 untuk screening depresi",
      type: "Depresi",
      questions: 9,
    },
    {
      icon: <Activity className="h-6 w-6 text-orange-500" />,
      name: "GAD-7",
      description: "Generalized Anxiety Disorder-7 untuk screening kecemasan",
      type: "Kecemasan",
      questions: 7,
    },
    {
      icon: <Brain className="h-6 w-6 text-purple-500" />,
      name: "Mini-Mental State Exam",
      description: "Screening kognitif dan fungsi mental untuk demensia",
      type: "Kognitif",
      questions: 11,
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
      name: "MDQ",
      description: "Mood Disorder Questionnaire untuk gangguan mood",
      type: "Gangguan Mood",
      questions: 15,
    },
  ];

  return (
    <section id="assessment" className="py-24 sm:py-32 bg-gradient-to-b from-background to-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-muted-foreground">
            Assessment Terintegrasi
          </h2>
          <p className="head-text-md text-balance text-foreground mt-2">
            20+ Tes Psikologi Standar
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Scoring otomatis, interpretasi statistik, dan tracking longitudinal
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 sm:mt-20 sm:gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {assessments.map((assessment, index) => (
            <Card key={index} className="border-border">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="flex-shrink-0">
                  {assessment.icon}
                </div>
                <div>
                  <CardTitle className="font-heading text-lg text-foreground">
                    {assessment.name}
                  </CardTitle>
                  <CardDescription>
                    {assessment.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="bg-secondary px-2 py-1 rounded text-xs font-medium">
                    {assessment.type}
                  </div>
                  <span>•</span>
                  <span>{assessment.questions} pertanyaan</span>
                </div>
                <div className="pt-2 border-t flex items-center gap-2 text-sm text-primary">
                  <CheckCircle className="h-4 w-4" />
                  <span>Scoring otomatis & interpretasi</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-2xl text-center">
          <p className="text-muted-foreground">
            Dan masih banyak lagi: Beck Depression Inventory, PTSD Checklist,
            WHO-5 Wellbeing Index, Insomnia Severity Index, dan tes psikologi klinis lainnya.
          </p>
        </div>
      </div>
    </section>
  );
};

export { AssessmentSection };
