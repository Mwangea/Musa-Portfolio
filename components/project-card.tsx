"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  slug?: string;
}

export function ProjectCard({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  slug,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden group flex flex-col">
      <div className="relative aspect-video overflow-hidden">
        {slug ? (
          <Link href={`/projects/${slug}`} className="block">
            <Image
              src={`/${image}`}
              alt={title}
              fill
              className="object-cover transform group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Link>
        ) : (
          <Image
            src={`/${image}`}
            alt={title}
            fill
            className="object-cover transform group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </div>
      <CardHeader>
        {slug ? (
          <Link href={`/projects/${slug}`}>
            <CardTitle className="hover:text-primary transition-colors">
              {title}
            </CardTitle>
          </Link>
        ) : (
          <CardTitle>{title}</CardTitle>
        )}
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
          {technologies.length > 4 && (
            <Badge variant="secondary">+{technologies.length - 4}</Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="gap-2 flex-wrap">
        {slug && (
          <Button asChild size="sm" variant="default">
            <Link href={`/projects/${slug}`}>
              Details <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </Button>
        )}
        {githubUrl && githubUrl !== "#" && (
          <Button variant="outline" size="sm" asChild>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} source code on GitHub`}
            >
              <Github className="mr-2 h-4 w-4" />
              Code
            </a>
          </Button>
        )}
        {liveUrl && liveUrl !== "#" && (
          <Button size="sm" variant={slug ? "outline" : "default"} asChild>
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} live demo`}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Live
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
