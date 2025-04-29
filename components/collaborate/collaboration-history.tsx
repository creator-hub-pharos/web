"use client";

import Image from "next/image";
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
import { Separator } from "@/components/ui/separator";
import { Star, ExternalLink, Copy, Calendar, CheckCircle2 } from "lucide-react";

// Mock collaboration history data
const collaborationHistory = [
  {
    id: 1,
    projectName: "DeFi Protocol Educational Series",
    projectLogo: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Created a series of educational videos explaining the protocol features",
    completionDate: "February 15, 2025",
    status: "Completed",
    nftId: "0x71C...8FE3",
    rating: 5,
    feedback: "Excellent work! The content was clear, engaging, and helped our users understand our complex features.",
    categories: ["Education", "DeFi", "Content"]
  },
  {
    id: 2,
    projectName: "GameFi Launch Promotion",
    projectLogo: "https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Promotional campaign for new blockchain gaming platform",
    completionDate: "January 8, 2025",
    status: "Completed",
    nftId: "0x82A...9DC1",
    rating: 4,
    feedback: "Great promotional work that drove significant traffic to our platform. Would collaborate again!",
    categories: ["Gaming", "Promotion", "Social Media"]
  }
];

export function CollaborationHistory() {
  return (
    <div className="space-y-6 py-6">
      {collaborationHistory.length > 0 ? (
        <div className="grid gap-6">
          {collaborationHistory.map((collab) => (
            <Card key={collab.id}>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden">
                    <Image
                      src={collab.projectLogo}
                      alt={collab.projectName}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-base">{collab.projectName}</CardTitle>
                    <div className="flex items-center gap-2 mt-0.5">
                      <Badge variant="outline" className="bg-green-900/20 text-green-400 text-xs">
                        {collab.status}
                      </Badge>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {collab.completionDate}
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pb-2 space-y-4">
                <p className="text-sm">{collab.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {collab.categories.map((category) => (
                    <Badge key={category} variant="secondary" className="bg-purple-900/20">
                      {category}
                    </Badge>
                  ))}
                </div>
                
                <div className="bg-muted/50 rounded-lg p-3">
                  <div className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-purple-600/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-3.5 w-3.5 text-purple-400" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-medium">Collaboration NFT</h4>
                      <div className="flex items-center gap-2">
                        <code className="bg-muted px-1 py-0.5 rounded text-xs">{collab.nftId}</code>
                        <Button variant="ghost" size="icon" className="h-6 w-6">
                          <Copy className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Client Feedback</h4>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < collab.rating ? "fill-yellow-500 text-yellow-500" : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <blockquote className="text-sm italic text-muted-foreground">
                    "{collab.feedback}"
                  </blockquote>
                </div>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" className="gap-1">
                  View NFT
                  <ExternalLink className="h-3.5 w-3.5" />
                </Button>
                <Button variant="outline" size="sm">Add to Portfolio</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">You have no completed collaborations yet</p>
          <Button className="mt-4">Browse Opportunities</Button>
        </div>
      )}
    </div>
  );
}