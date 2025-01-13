"use client";

import React, { createContext, useContext, useState } from "react";

// Define your context type
type HindiContextType = {
  isHindi: boolean;
  setIsHindi: React.Dispatch<React.SetStateAction<boolean>>;
};

// Create the context
export const HindiContext = createContext<HindiContextType | null>(null);

// Create the provider
export const HindiProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isHindi, setIsHindi] = useState<boolean>(false);

  return (
    <HindiContext.Provider value={{ isHindi, setIsHindi }}>
      {children}
    </HindiContext.Provider>
  );
};
export function useHindi() {
  const context = useContext(HindiContext);
  if (!context) {
    throw new Error("useHindi must be used within HindiProvider");
  }
  return context;
}
