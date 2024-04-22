import create, { SetState } from 'zustand';
interface State {
  value: boolean;
}

// Define the type of actions that can modify the state
interface Actions extends State {
  setValue: (newValue: boolean) => void;
}

const useBooleanStore = create<Actions>((set: SetState<State>) => ({
  value: false,
  setValue: (newValue: boolean) => set({ value: newValue }),
}));


export default useBooleanStore;