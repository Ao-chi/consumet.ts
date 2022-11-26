import {
  GogoCDN,
  StreamSB,
  VidCloud,
  MixDrop,
  Kwik,
  RapidCloud,
  StreamTape,
  VizCloud,
  Filemoon,
  Vrv,
  BilibiliExtractor,
  AsianLoad,
} from '../extractors';
import {
  USER_AGENT,
  splitAuthor,
  floorID,
  formatTitle,
  genElement,
  capitalizeFirstLetter,
  range,
  getDays,
  days,
  isJson,
  convertDuration,
  substringAfter,
  substringBefore,
  compareTwoStrings,
} from './utils';
import {
  anilistSearchQuery,
  anilistMediaDetailQuery,
  kitsuSearchQuery,
  anilistTrendingQuery,
  anilistPopularQuery,
  anilistAiringScheduleQuery,
  anilistGenresQuery,
  anilistAdvancedQuery,
  anilistSiteStatisticsQuery,
  anilistCharacterQuery,
} from './queries';
import { parsePostInfo } from './getComics';

export {
  USER_AGENT,
  GogoCDN,
  StreamSB,
  splitAuthor,
  floorID,
  formatTitle,
  parsePostInfo,
  genElement,
  capitalizeFirstLetter,
  VidCloud,
  MixDrop,
  Kwik,
  anilistSearchQuery,
  anilistMediaDetailQuery,
  kitsuSearchQuery,
  range,
  RapidCloud,
  StreamTape,
  VizCloud,
  anilistTrendingQuery,
  anilistPopularQuery,
  anilistAiringScheduleQuery,
  anilistGenresQuery,
  anilistAdvancedQuery,
  anilistSiteStatisticsQuery,
  Filemoon,
  anilistCharacterQuery,
  getDays,
  days,
  Vrv,
  isJson,
  convertDuration,
  BilibiliExtractor,
  AsianLoad,
  substringAfter,
  substringBefore,
  compareTwoStrings,
};
