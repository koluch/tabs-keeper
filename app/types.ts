export interface IWindow {
  id: number,
  focused: boolean,
  tabs: ITab[],
}

export interface ITab {
    id: number,
    // index: number,
    // windowId: number,
    // highlighted: boolean,
    active: boolean,
    pinned: boolean,
    windowId: number,
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
    url: string,
    title: string,
    favIconUrl: string | null,
}
