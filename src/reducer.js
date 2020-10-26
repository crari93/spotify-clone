export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  /*token:
    "BQAZ4003ClAOXDUnPrdDwtLgcm-8NEnG3F29LapkLP8mBoomN4…MYLhgu-w_Azlf0ELplHnfmgIkA3yAF5HUgli9iqlyc1c4pHiM",*/
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    default:
      return {
        state,
      };
  }
};

export default reducer;
