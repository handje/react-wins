export type NavEventType = {
  $isShowNav: boolean;
};

export type NavDescType = {
  id: number;
  desc: string;
};

export type NavPathType = {
  id: number;
  path: string;
};

export type NavTabType = {
  id: number;
  tab: string;
};

export type NavType = {
  id: number;
  title: string;
  desc: NavDescType[] | string;
  path: NavPathType[];
  tab?: NavTabType[];
};

export type TabType = {
  tab: string;
};

export interface ILayoutInfo {
  title: string;
  desc: string;
  tabs?: { name: string; path: string }[];
}
