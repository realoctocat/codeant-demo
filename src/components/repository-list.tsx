"use client";

import { motion } from "framer-motion";
import { Search, RefreshCcw, Plus, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const repositories = [
  {
    name: "design-system",
    language: "React",
    size: "7320 KB",
    visibility: "Public",
    updatedAt: "1 day ago",
  },
  {
    name: "codeant-ci-app",
    language: "JavaScript",
    size: "5871 KB",
    visibility: "Private",
    updatedAt: "2 days ago",
  },
  {
    name: "analytics-dashboard",
    language: "Python",
    size: "4521 KB",
    visibility: "Private",
    updatedAt: "5 days ago",
  },
  {
    name: "mobile-app",
    language: "Swift",
    size: "3096 KB",
    visibility: "Public",
    updatedAt: "3 days ago",
  },
  {
    name: "e-commerce-platform",
    language: "Java",
    size: "6210 KB",
    visibility: "Private",
    updatedAt: "6 days ago",
  },
  {
    name: "blog-website",
    language: "HTML/CSS",
    size: "1876 KB",
    visibility: "Public",
    updatedAt: "4 days ago",
  },
  {
    name: "social-network",
    language: "PHP",
    size: "5432 KB",
    visibility: "Private",
    updatedAt: "7 days ago",
  },
];

export function RepositoryList() {
  const [repos, setRepos] = useState(repositories);

  function addRepository() {
    const newRepo = {
      name: "new-repo",
      language: "React",
      size: "7878 KB",
      visibility: "Public",
      updatedAt: "Now",
    };
    setRepos([newRepo, ...repos]);
  }

  return (
    <div className="px-2 py-6 md:p-6">
      <div className="flex flex-col space-y-4 border rounded-xl">
        <div className="flex flex-wrap gap-6 items-center justify-between p-4 md:p-6">
          <div>
            <h1 className="text-2xl font-bold">Repositories</h1>
            <p className="text-sm text-muted-foreground">
              33 total repositories
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              className="shadow"
              onClick={() => {
                window.location.reload();
              }}
            >
              <RefreshCcw className="size-4 mr-2" />
              Refresh All
            </Button>
            <Button onClick={addRepository}>
              <Plus className="mr-2 size-4" />
              Add Repository
            </Button>
          </div>
        </div>

        <div className="relative px-4 md:px-6">
          <Search className="absolute left-9 top-3 size-4 text-muted-foreground" />
          <Input placeholder="Search Repositories" className="pl-10 max-w-sm" />
        </div>

        <motion.div
          className="rounded-md overflow-hidden "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {repos.map((repo, index) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="rounded-none hover:bg-muted/70 hover:cursor-pointer transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-10">
                    <span className="text-lg font-medium">{repo.name}</span>
                    <Badge>{repo.visibility}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-4 md:p-6">
                  <div className="flex items-center space-x-6 md:space-x-10 text-sm text-foreground/80">
                    <div className="flex items-center">
                      {repo.language}
                      <div className="ml-2 size-2 rounded-full bg-blue-500 hover:animate-pulse" />
                    </div>
                    <div className="flex items-center">
                      <Database className="mr-1 size-3" />
                      {repo.size}
                    </div>
                    <div>Updated {repo.updatedAt}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
