"use client";
import { Avatar } from "@nextui-org/react";
import { DgSvg } from "./DgSvg";
import { Message } from "ai/react";
import { useMessageData } from "../context/MessageMetadata";
import { useAudioStore } from "../context/AudioStore";
import { voiceMap } from "../context/Deepgram";
import Image from "next/image";

export const AgentAvatar = ({
  message,
  className = "",
}: {
  message: Message;
  className?: string;
}) => {
  const { audioStore } = useAudioStore();
  const { messageData } = useMessageData();

  const foundAudio = audioStore.findLast((item) => item.id === message.id);
  const foundData = messageData.findLast((item) => item.id === message.id);

  if (foundAudio?.model) {
    return <Avatar src={voiceMap(foundAudio?.model).avatar} />;
  }

  if (foundData?.ttsModel) {
    return <Avatar src={voiceMap(foundData?.ttsModel).avatar} />;
  }

  return (
    <Avatar src={`https://s3.ap-south-1.amazonaws.com/andai-typebot-upload-bucket/public/workspaces/cm14w720s0008fqejq8982lqn/typebots/cm427nrax000r67atb4k66k0f/hostAvatar?v=1732854789928`} />
  );
};
