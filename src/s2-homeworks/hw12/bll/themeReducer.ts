
const SET_THEME_ID = 'SET_THEME_ID';

const initState = {
    themeId: 1,
}
type InitialState = typeof initState;

export const themeReducer = (state:InitialState = initState, action: Action): InitialState => { // fix any
    switch (action.type) {
        case SET_THEME_ID:{

            return {...state,themeId: action.id}
        }
        // дописать

        default:
            return state
    }
}

export const changeThemeId = (id: number) => ({ type: SET_THEME_ID, id } as const);

type Action=ReturnType<typeof  changeThemeId>;
// fix any
