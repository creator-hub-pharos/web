"use client";

import { useState } from "react";
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
import { Input } from "@/components/ui/input";
import { Search, Filter, Calendar, DollarSign, Users, Clock } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Mock collaboration opportunities
const opportunities = [
  {
    id: 1,
    projectName: "DeFi Protocol Launch",
    description: "Seeking crypto educators to create content explaining our new DeFi protocol features.",
    categories: ["Crypto", "DeFi", "Education"],
    budget: "$500-1500",
    duration: "2-4 weeks",
    applicants: 12,
    deadline: "May 15, 2025",
    requirements: [
      "Minimum 10K followers across socials",
      "Experience explaining DeFi concepts",
      "At least 3 previous collaborations"
    ]
  },
  {
    id: 2,
    projectName: "NFT Collection Promotion",
    description: "Looking for creators to help promote our upcoming generative art NFT collection.",
    categories: ["NFTs", "Art", "Promotion"],
    budget: "$300-800",
    duration: "1-2 weeks",
    applicants: 23,
    deadline: "April 28, 2025",
    requirements: [
      "Strong presence in NFT community",
      "Experience with art NFTs",
      "Creative promotional ideas"
    ]
  },
  {
    id: 3,
    projectName: "Gaming Metaverse Testing",
    description: "Beta testers needed for our new blockchain gaming metaverse. Create content about your experience.",
    categories: ["Gaming", "Metaverse", "Review"],
    budget: "$400-1000",
    duration: "3-4 weeks",
    applicants: 18,
    deadline: "May 10, 2025",
    requirements: [
      "Gaming content creator",
      "Experience with blockchain games",
      "Detailed review capabilities"
    ]
  },
  {
    id: 4,
    projectName: "Web3 Educational Series",
    description: "Partner with us to create educational content about Web3 for beginners.",
    categories: ["Education", "Web3", "Content"],
    budget: "$1000-2500",
    duration: "8-12 weeks",
    applicants: 8,
    deadline: "June 5, 2025",
    requirements: [
      "Strong educational content background",
      "Simplified explanation skills",
      "Consistent posting schedule"
    ]
  }
];

export function CollaborationOpportunities() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOpportunity, setSelectedOpportunity] = useState<any>(null);
  
  const filteredOpportunities = opportunities.filter(opp => 
    opp.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    opp.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    opp.categories.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-6 py-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search opportunities..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid gap-4">
        {filteredOpportunities.map((opportunity) => (
          <Card key={opportunity.id} className="hover:border-purple-500/30 transition-colors">
            <CardHeader className="pb-2">
              <div className="flex justify-between">
                <CardTitle>{opportunity.projectName}</CardTitle>
                <Badge variant="outline" className="bg-green-900/20 text-green-400 hover:bg-green-900/30">
                  Active
                </Badge>
              </div>
              <CardDescription className="mt-1.5">
                {opportunity.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="flex flex-wrap gap-2 mb-4">
                {opportunity.categories.map((category) => (
                  <Badge key={category} variant="secondary" className="bg-purple-900/20">
                    {category}
                  </Badge>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{opportunity.budget}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{opportunity.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Deadline: {opportunity.deadline}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Users className="h-4 w-4" />
                <span>{opportunity.applicants} applicants</span>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    size="sm" 
                    onClick={() => setSelectedOpportunity(opportunity)}
                  >
                    View Details
                  </Button>
                </DialogTrigger>
                {selectedOpportunity && (
                  <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                      <DialogTitle>{selectedOpportunity.projectName}</DialogTitle>
                      <DialogDescription>
                        {selectedOpportunity.description}
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {selectedOpportunity.categories.map((category: string) => (
                        <Badge key={category} variant="secondary" className="bg-purple-900/20">
                          {category}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Budget</p>
                        <p className="text-sm">{selectedOpportunity.budget}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Duration</p>
                        <p className="text-sm">{selectedOpportunity.duration}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Deadline</p>
                        <p className="text-sm">{selectedOpportunity.deadline}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Applicants</p>
                        <p className="text-sm">{selectedOpportunity.applicants}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Requirements</p>
                      <ul className="space-y-1 text-sm">
                        {selectedOpportunity.requirements.map((req: string, index: number) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="h-5 w-5 rounded-full bg-purple-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                              <div className="h-2.5 w-2.5 rounded-full bg-purple-500"></div>
                            </div>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <DialogFooter className="mt-6">
                      <Button variant="outline">Save for Later</Button>
                      <Button>Apply Now</Button>
                    </DialogFooter>
                  </DialogContent>
                )}
              </Dialog>
            </CardFooter>
          </Card>
        ))}

        {filteredOpportunities.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No collaboration opportunities found</p>
          </div>
        )}
      </div>
    </div>
  );
}