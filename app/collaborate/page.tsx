"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CollaborationOpportunities } from "@/components/collaborate/collaboration-opportunities";
import { ActiveCollaborations } from "@/components/collaborate/active-collaborations";
import { CollaborationHistory } from "@/components/collaborate/collaboration-history";

export default function CollaboratePage() {
  const [activeTab, setActiveTab] = useState("opportunities");
  
  return (
    <div className="container py-12 justify-self-center">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Creator <span className="text-purple-400">Collaborations</span>
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Find projects to collaborate with, manage active partnerships, and view your collaboration history.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Collaboration Hub</CardTitle>
            <CardDescription>
              Connect with projects, establish partnerships, and build your reputation through verified collaborations.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
              </TabsList>
              <TabsContent value="opportunities">
                <CollaborationOpportunities />
              </TabsContent>
              <TabsContent value="active">
                <ActiveCollaborations />
              </TabsContent>
              <TabsContent value="history">
                <CollaborationHistory />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}