"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSidebar } from "@/components/ui/sidebar";

export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string;
  }[];
}) {
  const { isMobile } = useSidebar();
  const [activeTeam, setActiveTeam] = React.useState(teams[0]);

  return (
    <Select
      value={activeTeam.name}
      onValueChange={(value) => {
        const team = teams.find((t) => t.name === value);
        if (team) setActiveTeam(team);
      }}
    >
      <SelectTrigger className="w-full gap-2 overflow-hidden">
        <div className="flex items-center gap-2">
          <SelectValue placeholder="Select team" />
        </div>
      </SelectTrigger>
      <SelectContent
        position={isMobile ? "popper" : "item-aligned"}
        side={isMobile ? "bottom" : "right"}
        className="overflow-hidden"
      >
        {teams.map((team) => (
          <SelectItem
            key={team.name}
            value={team.name}
            className="flex items-center gap-2"
          >
            <span>{team.name}</span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
