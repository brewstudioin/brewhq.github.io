import React from "react";
import { Share2, MoreHorizontal, Star, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";

export function PageHeader() {
  return (
    <div className="border-b border-border bg-background sticky top-0 z-10">
      {/* Breadcrumb */}
      <div className="flex items-center px-6 py-2 text-sm text-muted-foreground">
        <span className="hover:text-foreground cursor-pointer">Team Workspace</span>
        <span className="mx-2">/</span>
        <span className="text-foreground">Cut Development Time</span>
      </div>
      
      {/* Page actions */}
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">⚡</span>
            <div className="flex items-center space-x-2">
              <span className="text-muted-foreground text-sm">Last edited by</span>
              <div className="flex items-center space-x-1">
                <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white">T</span>
                </div>
                <span className="text-sm">Team</span>
              </div>
              <span className="text-muted-foreground text-sm">2 minutes ago</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm">
            <MessageSquare className="w-4 h-4 mr-1" />
            Comments
          </Button>
          <Button variant="ghost" size="sm">
            <Star className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Share2 className="w-4 h-4 mr-1" />
            Share
          </Button>
          <Button variant="ghost" size="sm">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}