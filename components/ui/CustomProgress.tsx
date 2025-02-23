"use client";

import * as React from "react";
import { cn } from "@/lib/utils"; // Assuming you have a utility for class names

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number; // Value between 0 and 100
}

const CustomProgress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ value, className, ...props }, ref) => {
    // Ensure the value is between 0 and 100
    const progressValue = Math.min(100, Math.max(0, value || 0));

    return (
      <div
        ref={ref}
        className={cn(
          "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
          className
        )}
        {...props}
      >
        <div
          className="h-full w-full flex-1 bg-primary transition-all"
          style={{ transform: `translateX(-${100 - progressValue}%)` }}
        />
      </div>
    );
  }
);

CustomProgress.displayName = "CustomProgress";

export { CustomProgress };