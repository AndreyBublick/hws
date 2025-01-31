const CHANGE_LOADING = 'CHANGE_LOADING'

const initState = {
    isLoading: false,
}




type InitState = typeof initState;

export const loadingReducer = (state = initState, action: LoadingActionType): InitState => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix

        case CHANGE_LOADING:{
            return {...state, isLoading: action.isLoading}
        }

        default:
            return state
    }
}

type LoadingActionType = ReturnType<typeof loadingAC>;

export const loadingAC = (isLoading: boolean) => ({
    type: CHANGE_LOADING,
    isLoading,
} as const);
