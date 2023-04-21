import React, { useState, useRef } from "react";

export type ContentState = "empty" | "loading";

type ContentContext = {
  content: ContentState;
  setContent: React.Dispatch<React.SetStateAction<ContentState>>;
  LoaderText: React.MutableRefObject<string | undefined>;
};

export const ContentContext = React.createContext<ContentContext>({
  content: "empty",
  setContent: () => undefined,
  LoaderText: {
    current: undefined,
  },
});

function ContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<ContentState>("empty");
  const LoaderText = useRef("Loading...");
  return <ContentContext.Provider value={{ content, setContent, LoaderText }}>{children}</ContentContext.Provider>;
}

export default ContentProvider;
