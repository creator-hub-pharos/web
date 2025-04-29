"use client";

import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Search, Sliders, RotateCcw } from "lucide-react";

// Dummy categories for filtering
const categories = [
  { id: "tech", label: "Technology" },
  { id: "crypto", label: "Cryptocurrency" },
  { id: "art", label: "Art & Design" },
  { id: "gaming", label: "Gaming" },
  { id: "education", label: "Education" },
  { id: "finance", label: "Finance" },
  { id: "entertainment", label: "Entertainment" },
  { id: "lifestyle", label: "Lifestyle" },
];

export function CreatorsFilters() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [scoreRange, setScoreRange] = useState([0]);
  const [verifiedOnly, setVerifiedOnly] = useState(false);

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategories([]);
    setScoreRange([0]);
    setVerifiedOnly(false);
  };

  return (
    <Card className="h-fit sticky top-20">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-medium">Filters</CardTitle>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={resetFilters}
            className="h-8 px-2 text-xs"
          >
            <RotateCcw className="mr-2 h-3 w-3" />
            Reset
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="search">Search Creators</Label>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              id="search"
              placeholder="Name or handle..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-4">
          <Label>Categories</Label>
          <div className="grid grid-cols-1 gap-3">
            {categories.map((category) => (
              <div key={category.id} className="flex items-center space-x-2">
                <Checkbox 
                  id={`category-${category.id}`}
                  checked={selectedCategories.includes(category.id)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedCategories([...selectedCategories, category.id]);
                    } else {
                      setSelectedCategories(
                        selectedCategories.filter((id) => id !== category.id)
                      );
                    }
                  }}
                />
                <label
                  htmlFor={`category-${category.id}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {category.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between">
            <Label htmlFor="score">Minimum Score</Label>
            <span className="text-sm text-muted-foreground">{scoreRange[0]}</span>
          </div>
          <Slider
            id="score"
            min={0}
            max={100}
            step={1}
            value={scoreRange}
            onValueChange={setScoreRange}
          />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox 
            id="verified" 
            checked={verifiedOnly}
            onCheckedChange={(checked) => setVerifiedOnly(!!checked)} 
          />
          <label
            htmlFor="verified"
            className="text-sm font-medium leading-none"
          >
            Verified creators only
          </label>
        </div>

        <Button className="w-full mt-4">
          <Sliders className="mr-2 h-4 w-4" />
          Apply Filters
        </Button>
      </CardContent>
    </Card>
  );
}