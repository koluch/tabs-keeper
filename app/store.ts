// import createStore from "redux-zero";
// import { ISavedSessionHeader, IWindow } from "./types";
// import { UITab } from "./components/Header";
// // import { Provider, connect } from "redux-zero/preact";
//
// interface IState {
//   activeUITab: UITab;
//   windows: IWindow[];
//   savedSessionHeaders: ISavedSessionHeader[];
//   onSwitchUITab: (uiTab: UITab) => void;
//   onClickSaveCurrent: () => void;
//   search: string;
// }
//
// const initialState: IState = {
//   search: "",
//   activeUITab: UITab,
//   windows: IWindow[],
//   savedSessionHeaders: ISavedSessionHeader[],
//   onSwitchUITab: (uiTab: UITab) => void,
//   onClickSaveCurrent: () => void,
// };
//
// const store = createStore(initialState);
//
// const actions = store => ({
//   setSearch: (state, text) => ({ search: text })
// });
//
// export default store;
