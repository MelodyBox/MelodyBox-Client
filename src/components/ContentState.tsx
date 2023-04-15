import React, { useState } from "react";

export type ContentState = "empty" | "loading";

type ContentContext = {
  content: ContentState;
  setContent: React.Dispatch<React.SetStateAction<ContentState>>;
};

export const ContentContext = React.createContext<ContentContext>({
  content: "empty",
  setContent: () => undefined,
});

function ContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<ContentState>("empty");
  return <ContentContext.Provider value={{ content, setContent }}>{children}</ContentContext.Provider>;
}

export default ContentProvider;
