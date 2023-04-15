import { useState } from "react";
import type { SearchResult, SongItem, ArtistItem } from "../../API";
import { useEffectOnce } from "usehooks-ts";
import styles from "./Main.module.less";

function Song({ song }: { song: SongItem }) {
  const [imgSrc, setImgSrc] = useState("");

  async function fetchImage(url: string) {
    const reponse = await fetch(url);
    const image = await reponse.blob();
    setImgSrc(URL.createObjectURL(image));
  }

  useEffectOnce(() => {
    fetchImage(song.thumbnail);
  });

  return (
    <div className={styles.songitem}>
      <div className={styles.songitem__cover}>
        <img src={imgSrc} alt={`Thumbnail of '${song.title}'`} />
        <span className={styles.songitem__duration}>{song.duration}</span>
      </div>
      <div className={styles.songitem__song}>
        <span className={styles.songitem__title}>{song.title}</span>
        <span className={styles.songitem__info}>{song.artists}</span>
      </div>
    </div>
  );
}

function Artist({ artist }: { artist: ArtistItem }) {
  console.log(artist);
  return <div></div>;
}

type ResultsProps = {
  results: SearchResult;
};

function Results({ results }: ResultsProps) {
  console.log(results);
  //   results = results.slice(0, 1);
  return (
    <>
      {results.map((item) =>
        "browseId" in item ? <Artist key={item.browseId} artist={item} /> : <Song key={item.videoId} song={item} />
      )}
    </>
  );
}

export default Results;
