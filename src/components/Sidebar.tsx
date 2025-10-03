import React from "react";
import { ChevronRight, Plus, Search, Settings, FileText, Users, Calendar, Archive } from "lucide-react";
import { Input } from "./ui/input";

export function Sidebar() {
  return (
    <div className="w-64 bg-sidebar border-r border-sidebar-border h-screen flex flex-col">
      {/* User section */}
      <div className="p-3 border-b border-sidebar-border">
        <div className="flex items-center space-x-2 p-2 rounded hover:bg-sidebar-accent cursor-pointer">
          <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded flex items-center justify-center">
            <span className="text-xs text-white font-medium">T</span>
          </div>
          <span className="flex-1 text-sm font-medium text-sidebar-foreground">Team Workspace</span>
          <ChevronRight className="w-3 h-3 text-sidebar-foreground/60" />
        </div>
      </div>

      {/* Search */}
      <div className="p-3 border-b border-sidebar-border">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-sidebar-foreground/40" />
          <Input 
            placeholder="Search..." 
            className="pl-8 bg-sidebar-accent border-0 text-sm h-8"
          />
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 p-3 space-y-1">
        <div className="space-y-1">
          <div className="flex items-center justify-between px-2 py-1">
            <span className="text-xs font-medium text-sidebar-foreground/60 uppercase tracking-wide">Workspace</span>
            <Plus className="w-3 h-3 text-sidebar-foreground/40 cursor-pointer hover:text-sidebar-foreground" />
          </div>
          
          <button className="w-full flex items-center space-x-2 px-2 py-1.5 rounded text-sm text-sidebar-foreground hover:bg-sidebar-accent">
            <FileText className="w-4 h-4" />
            <span>Development Guide</span>
          </button>
          
          <button className="w-full flex items-center space-x-2 px-2 py-1.5 rounded text-sm text-sidebar-foreground hover:bg-sidebar-accent">
            <Users className="w-4 h-4" />
            <span>Team Velocity</span>
          </button>
          
          <button className="w-full flex items-center space-x-2 px-2 py-1.5 rounded text-sm text-sidebar-foreground hover:bg-sidebar-accent">
            <Calendar className="w-4 h-4" />
            <span>Sprint Planning</span>
          </button>
        </div>

        <div className="pt-4 space-y-1">
          <div className="flex items-center justify-between px-2 py-1">
            <span className="text-xs font-medium text-sidebar-foreground/60 uppercase tracking-wide">Pages</span>
            <Plus className="w-3 h-3 text-sidebar-foreground/40 cursor-pointer hover:text-sidebar-foreground" />
          </div>
          
          <button className="w-full flex items-center space-x-2 px-2 py-1.5 rounded text-sm text-sidebar-foreground bg-sidebar-accent">
            <span className="text-base">⚡</span>
            <span>Cut Development Time</span>
          </button>
          
          <button className="w-full flex items-center space-x-2 px-2 py-1.5 rounded text-sm text-sidebar-foreground hover:bg-sidebar-accent">
            <span className="text-base">📋</span>
            <span>Requirements Template</span>
          </button>
          
          <button className="w-full flex items-center space-x-2 px-2 py-1.5 rounded text-sm text-sidebar-foreground hover:bg-sidebar-accent">
            <span className="text-base">🚀</span>
            <span>Implementation Plans</span>
          </button>
        </div>
      </div>

      {/* Bottom section */}
      <div className="p-3 border-t border-sidebar-border">
        <button className="w-full flex items-center space-x-2 px-2 py-1.5 rounded text-sm text-sidebar-foreground hover:bg-sidebar-accent">
          <Settings className="w-4 h-4" />
          <span>Settings</span>
        </button>
        <button className="w-full flex items-center space-x-2 px-2 py-1.5 rounded text-sm text-sidebar-foreground hover:bg-sidebar-accent">
          <Archive className="w-4 h-4" />
          <span>Trash</span>
        </button>
      </div>
    </div>
  );
}