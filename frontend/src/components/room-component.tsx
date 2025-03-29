"use client";

import {
  LiveKitRoom,
  RoomAudioRenderer,
  StartAudio,
} from "@livekit/components-react";

import { Chat } from "@/components/chat";
import { useConnection } from "@/hooks/use-connection";
import { AgentProvider } from "@/hooks/use-agent";

export function RoomComponent() {
  const { shouldConnect, wsUrl, token } = useConnection();
  return (
    <LiveKitRoom
      serverUrl={wsUrl}
      token={token}
      connect={shouldConnect}
      audio={true}
      className="flex flex-col px-4 flex-grow overflow-hidden"
      options={{
        publishDefaults: {
          stopMicTrackOnMute: true,
        },
      }}
    >
      <AgentProvider>
        <div className="">
          <Chat />
        </div>
        <RoomAudioRenderer />
        <StartAudio label="Click to allow audio playback" />
      </AgentProvider>
    </LiveKitRoom>
  );
}