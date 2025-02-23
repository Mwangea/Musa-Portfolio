"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

export function SkillCard({
  name,
  level,
  description,
}: {
  name: string;
  level: number;
  description: string;
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setProgress(level);
    }, 300);
  }, [level]);

  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <Progress value={progress} className="mb-2" />
      <p className="text-sm text-muted-foreground">{description}</p>
    </Card>
  );
}