
export const initialState: IState = {
    counter: 0,
    loggedIn: false
};


export interface IState {
    counter: number;
    loggedIn: boolean;
}