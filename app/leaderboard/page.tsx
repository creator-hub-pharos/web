"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LeaderboardTable } from "@/components/leaderboard/leaderboard-table";
import { LeaderboardFeatured } from "@/components/leaderboard/leaderboard-featured";
import { LeaderboardCards } from "@/components/leaderboard/leaderboard-cards";
import { LeaderboardStats } from "@/components/leaderboard/leaderboard-stats";

export default function LeaderboardPage() {
  const [activeTab, setActiveTab] = useState("overall");
  const [viewType, setViewType] = useState("table");
  const [timeRange, setTimeRange] = useState("all");
  
  return (
    <div className="container py-12 justify-center justify-self-center">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Creator <span className="text-purple-400">Leaderboard</span>
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Discover top creators ranked by social credit score across different categories.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <LeaderboardFeatured />
          
          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <CardTitle>Creator Rankings</CardTitle>
                  <CardDescription>
                    Explore the top creators by category and metrics
                  </CardDescription>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Select value={timeRange} onValueChange={setTimeRange}>
                    <SelectTrigger className="w-[130px]">
                      <SelectValue placeholder="Time Range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Time</SelectItem>
                      <SelectItem value="month">This Month</SelectItem>
                      <SelectItem value="week">This Week</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <div className="flex rounded-md border">
                    <Button
                      variant={viewType === "table" ? "secondary" : "ghost"}
                      size="sm"
                      onClick={() => setViewType("table")}
                      className="rounded-r-none"
                    >
                      Table
                    </Button>
                    <Button
                      variant={viewType === "cards" ? "secondary" : "ghost"}
                      size="sm"
                      onClick={() => setViewType("cards")}
                      className="rounded-l-none"
                    >
                      Cards
                    </Button>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="w-full justify-start mb-4 overflow-auto">
                  <TabsTrigger value="overall">Overall</TabsTrigger>
                  <TabsTrigger value="tech">Technology</TabsTrigger>
                  <TabsTrigger value="crypto">Crypto</TabsTrigger>
                  <TabsTrigger value="art">Art & Design</TabsTrigger>
                  <TabsTrigger value="gaming">Gaming</TabsTrigger>
                  <TabsTrigger value="education">Education</TabsTrigger>
                </TabsList>
                
                <LeaderboardStats timeRange={timeRange} category={activeTab} />
                
                {["overall", "tech", "crypto", "art", "gaming", "education"].map((tab) => (
                  <TabsContent key={tab} value={tab} className="pt-4">
                    {viewType === "table" ? (
                      <LeaderboardTable timeRange={timeRange} category={tab} />
                    ) : (
                      <LeaderboardCards timeRange={timeRange} category={tab} />
                    )}
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}