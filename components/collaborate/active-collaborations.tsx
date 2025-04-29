"use client";

import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  CalendarDays, 
  MessageSquare, 
  FileCheck, 
  Clock, 
  AlertTriangle,
  CheckCircle2
} from "lucide-react";

// Mock active collaborations data
const activeCollaborations = [
  {
    id: 1,
    projectName: "Crypto Exchange Launch",
    description: "Creating educational content about the new exchange features",
    startDate: "April 5, 2025",
    endDate: "May 10, 2025",
    status: "In Progress",
    progress: 65,
    tasks: [
      { id: 1, name: "Introductory video", completed: true },
      { id: 2, name: "Platform walkthrough", completed: true },
      { id: 3, name: "Trading features guide", completed: false },
      { id: 4, name: "Advanced tools overview", completed: false }
    ],
    milestones: 2,
    totalMilestones: 4,
    unreadMessages: 3
  },
  {
    id: 2,
    projectName: "NFT Marketplace Review",
    description: "Comprehensive review of the new NFT marketplace",
    startDate: "March 20, 2025",
    endDate: "April 25, 2025",
    status: "At Risk",
    progress: 40,
    tasks: [
      { id: 1, name: "Platform overview", completed: true },
      { id: 2, name: "User experience analysis", completed: true },
      { id: 3, name: "Fee structure comparison", completed: false },
      { id: 4, name: "Final recommendation video", completed: false }
    ],
    milestones: 2,
    totalMilestones: 4,
    unreadMessages: 0
  }
];

export function ActiveCollaborations() {
  return (
    <div className="space-y-6 py-6">
      {activeCollaborations.length > 0 ? (
        <div className="grid gap-6">
          {activeCollaborations.map((collab) => (
            <Card key={collab.id}>
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <CardTitle>{collab.projectName}</CardTitle>
                  <Badge 
                    variant={collab.status === "At Risk" ? "destructive" : "outline"}
                    className={
                      collab.status === "At Risk" 
                        ? "bg-red-900/20 text-red-400"
                        : "bg-blue-900/20 text-blue-400"
                    }
                  >
                    {collab.status}
                  </Badge>
                </div>
                <CardDescription className="mt-1.5">
                  {collab.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-2 space-y-4">
                <div className="flex flex-col sm:flex-row justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">
                      {collab.startDate} - {collab.endDate}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <FileCheck className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{collab.milestones}/{collab.totalMilestones} milestones</span>
                    </div>
                    
                    {collab.unreadMessages > 0 && (
                      <div className="flex items-center gap-1">
                        <MessageSquare className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{collab.unreadMessages} new messages</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Progress</span>
                    <span className="text-sm font-medium">{collab.progress}%</span>
                  </div>
                  <Progress value={collab.progress} className="h-2" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h4 className="text-sm font-medium">Upcoming Tasks</h4>
                    <Button variant="ghost" size="sm" className="h-7 text-xs gap-1">
                      <Clock className="h-3 w-3" />
                      View Timeline
                    </Button>
                  </div>
                  
                  <div className="space-y-2">
                    {collab.tasks.map((task) => (
                      <div key={task.id} className="flex items-start gap-2 text-sm">
                        {task.completed ? (
                          <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                        ) : (
                          <div className="h-4 w-4 rounded-full border border-muted-foreground/50 mt-0.5"></div>
                        )}
                        <span className={task.completed ? "text-muted-foreground line-through" : ""}>
                          {task.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {collab.status === "At Risk" && (
                  <div className="flex gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                    <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-medium text-red-400">Action Required</h4>
                      <p className="text-xs text-muted-foreground">
                        This collaboration is at risk due to delayed deliverables. Please check messages
                        and update your progress.
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1 sm:flex-none">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Messages
                </Button>
                <Button variant="outline" size="sm" className="flex-1 sm:flex-none">
                  <FileCheck className="mr-2 h-4 w-4" />
                  Submit Work
                </Button>
                <Button size="sm" className="flex-1 sm:flex-none">
                  Manage
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">You have no active collaborations</p>
          <Button className="mt-4">Browse Opportunities</Button>
        </div>
      )}
    </div>
  );
}