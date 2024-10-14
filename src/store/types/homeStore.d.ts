import { IssueType, RecentGamesType, TeamRankingType } from "@customTypes/home";

export type HomeStoreType = {
  data: { current: RecentGamesType | null; prev?: RecentGamesType | null; next?: RecentGamesType | null } | null;
  issue: IssueType[] | null;
  ktWizTeamRank: TeamRankingType | null;
  isLoading: boolean;
  isError: boolean;
  fetchRecentGames: () => void;
  fetchTeamRanking: () => void;
  fetchHotIssue: (count) => void;
};
