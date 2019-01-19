export type IDate = number;

export interface ISession {
  windows: IWindow[];
}

export interface ISavedSessionHeader {
  id: number;
  date: IDate;
  windowsCount: number;
  tabsCount: number;
}

export interface ISavedSession extends ISession {
  header: ISavedSessionHeader;
}

export interface IWindow {
  id: number;
  focused: boolean;
  tabs: ITab[];
}

export interface INewTab {
  // index: number,
  // windowId: number,
  // highlighted: boolean,
  active: boolean;
  pinned: boolean;
  // status: "complete",
  // hidden: boolean,
  // discarded: boolean,
  // incognito: boolean,
  // width: number,
  // height: number,
  // lastAccessed: number,
  // audible: boolean,
  // mutedInfo: {
  //     muted: boolean
  // },
  // isArticle: boolean,
  // isInReaderMode: boolean,
  // sharingState: {
  //     camera: boolean,
  //     microphone: boolean
  // },
  url: string;
  title: string | null;
  favIconUrl: string | null;
}

export interface ITab extends INewTab {
  id: number;
  windowId: number;
}
