import create, { SetState } from 'zustand';
interface State {
    toggle: boolean;
}

// Define the type of actions that can modify the state
interface Actions extends State {
    setToggle: (newValue: boolean) => void;
}

const useTogglePlaylisytStore = create<Actions>((set: SetState<State>) => ({
    toggle: false,
    setToggle: (newValue: boolean) => set({ toggle: newValue }),
}));


export default useTogglePlaylisytStore;