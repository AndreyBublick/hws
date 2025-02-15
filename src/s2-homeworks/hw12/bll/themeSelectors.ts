import type {AppStoreType} from "../../hw10/bll/store";

export const getThemeId = (state:AppStoreType):number => state.theme.themeId;

