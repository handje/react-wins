import { TMedia } from "@customTypes/media";
import { MediaContainer } from "@styles/Media.style";
import MediaItem from "./MediaItem";
import PaginationButtons from "./PaginationButtons";

const MediaList = ({ mediaList }: { mediaList: TMedia[] }) => {
  return (
    <>
      <MediaContainer>
        <ul>
          {mediaList?.map((media) => (
            <li key={media.artcSeq}>
              <MediaItem media={media} />
            </li>
          ))}
        </ul>
      </MediaContainer>
      <PaginationButtons />
    </>
  );
};
export default MediaList;
