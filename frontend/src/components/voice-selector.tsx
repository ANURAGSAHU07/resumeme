"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { voices } from "@/data/voices";

export function VoiceSelector({ value, onChange }) {
  return (
    <HoverCard openDelay={200}>
      <HoverCardTrigger asChild>
        <div className="flex flex-row items-center space-y-0 justify-between px-1">
          <label className="text-sm">Voice</label>
          <Select onValueChange={onChange} value={value} aria-label="Voice">
            <SelectTrigger>
              <SelectValue placeholder="Choose voice" />
            </SelectTrigger>
            <SelectContent>
              {voices.map((voice) => (
                <SelectItem key={`select-item-voice-${voice.id}`} value={voice.id}>
                  {voice.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </HoverCardTrigger>
      <HoverCardContent align="start" className="w-[260px] text-sm" side="bottom">
        Choose the base voice for the model. Changes require a reconnect.
      </HoverCardContent>
    </HoverCard>
  );
}
