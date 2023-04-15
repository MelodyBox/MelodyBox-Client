import React, { useState, useRef } from "react";
import type { SearchResult } from "../API";

export type ContentState = "empty" | "loading" | "results";

type ContentContext = {
  content: ContentState;
  setContent: React.Dispatch<React.SetStateAction<ContentState>>;
  LoaderText: React.MutableRefObject<string | undefined>;
  searchResult: SearchResult;
  setSearchResult: React.Dispatch<React.SetStateAction<SearchResult>>;
};

export const ContentContext = React.createContext<ContentContext>({
  content: "empty",
  setContent: () => undefined,
  LoaderText: {
    current: undefined,
  },
  searchResult: [],
  setSearchResult: () => undefined,
});

function ContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<ContentState>("empty");
  const LoaderText = useRef("Loading...");
  const [searchResult, setSearchResult] = useState<SearchResult>([]);
  return (
    <ContentContext.Provider value={{ content, setContent, LoaderText, searchResult, setSearchResult }}>
      {children}
    </ContentContext.Provider>
  );
}

export default ContentProvider;
