"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type LeaderboardStatsProps = {
  timeRange: string;
  category: string;
};

export function LeaderboardStats({ timeRange, category }: LeaderboardStatsProps) {
  // Example data for stats section
  const categoryData = [
    { name: "Technology", count: 215, growth: 15 },
    { name: "Crypto", count: 187, growth: 22 },
    { name: "Art & Design", count: 143, growth: 12 },
    { name: "Gaming", count: 128, growth: 18 },
    { name: "Education", count: 97, growth: 9 },
    { name: "Other", count: 176, growth: 14 },
  ];
  
  // Sample growth data for chart
  const growthData = [
    { month: "Jan", creators: 842, score: 76 },
    { month: "Feb", creators: 866, score: 77 },
    { month: "Mar", creators: 895, score: 78 },
    { month: "Apr", creators: 925, score: 79 },
    { month: "May", creators: 946, score: 81 },
  ];
  
  return (
    <div className="mb-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Total Creators</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">946</div>
          <p className="text-xs text-muted-foreground">
            <span className="text-green-400">+12.4%</span> from last month
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Average Score</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">81</div>
          <p className="text-xs text-muted-foreground">
            <span className="text-green-400">+2.5%</span> from last month
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">New Creators</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">64</div>
          <p className="text-xs text-muted-foreground">
            <span className="text-green-400">+24.8%</span> from last month
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Collaborations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">283</div>
          <p className="text-xs text-muted-foreground">
            <span className="text-green-400">+18.3%</span> from last month
          </p>
        </CardContent>
      </Card>
      
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Growth Trends</CardTitle>
          <CardDescription>
            Creator growth and average score over time
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={growthData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="month" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="rounded-lg border bg-background p-2 shadow-sm">
                          <div className="text-sm font-bold">{label}</div>
                          <div className="text-xs">
                            <span className="text-[hsl(var(--chart-1))]">Creators: </span>
                            {payload[0].value}
                          </div>
                          <div className="text-xs">
                            <span className="text-[hsl(var(--chart-2))]">Avg Score: </span>
                            {payload[1].value}
                          </div>
                        </div>
                      )
                    }
                    return null
                  }}
                />
                <Bar dataKey="creators" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} />
                <Bar dataKey="score" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Category Distribution</CardTitle>
          <CardDescription>
            Creators by primary category focus
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {categoryData.map((item) => (
              <div className="flex items-center" key={item.name}>
                <div className="w-[30%] text-sm font-medium">{item.name}</div>
                <div className="flex w-[50%] items-center gap-2">
                  <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full bg-primary"
                      style={{ width: `${(item.count / categoryData[0].count) * 100}%` }}
                    />
                  </div>
                  <span className="w-9 text-sm tabular-nums text-muted-foreground">
                    {item.count}
                  </span>
                </div>
                <div className="w-[20%] text-right text-sm text-muted-foreground">
                  +{item.growth}%
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}