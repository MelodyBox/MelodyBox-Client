// ==============[ API Response Types ]==============
type SuccessRes<T> = {
  success: true;
  data: T;
};

type ErrorRes = {
  success: false;
  error: string;
};

export type ApiResponse<T> = SuccessRes<T> | ErrorRes;
// ==================================================

// =================[ Search Types ]=================
export type SearchQuery = {
  q: string;
  filter?: "songs" | "videos" | "artists";
};
export type SongItem = {
  videoId: string;
  title: string;
  duration: string;
  artists: (string | undefined)[];
  thumbnail: string;
};
export type ArtistItem = {
  browseId: string;
  artist: string;
  thumbnail: string;
};
export type SearchResult = (SongItem | ArtistItem)[];
// ==================================================

// ==================[ Info Types ]==================
export type InfoQuery = {
  songID: string;
};

export type InfoResult = {
  videoId: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  thumbnail: string;
};
// ==================================================

// =================[ Lyrics Types ]=================
type LyricsProvider = "youtube" | "genius";

export type LyricsQuery = {
  songID: string;
  provider: LyricsProvider;
};

export type LyricsResult = {
  [Provider in LyricsProvider]: {
    lyrics: string;
    source: Provider;
  };
}[LyricsProvider];
// ==================================================

// ================[ Download Types ]================
export type DownloadQuery = LyricsQuery;
// ==================================================

const SERVER: string = import.meta.env.VITE_SERVER;

export async function searchSong(options: SearchQuery) {
  const url = new URL("/search", SERVER);
  const params = new URLSearchParams(options);
  url.search = params.toString();
  const response = await fetch(url.href);
  const data: ApiResponse<SearchResult> = await response.json();
  return data;
}
