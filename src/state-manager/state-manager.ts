type Listener<T> = (state: T) => void;
type Unsubscribe = () => void;

class StateManager<T extends object> {
  private state: T;
  private listeners: Listener<T>[] = [];

  constructor(initialState: T) {
    this.state = initialState;
  }

  public getState(): T {
    return this.state;
  }

  public setState(updater: Partial<T> | ((prevState: T) => Partial<T>)): void {
    const newPartialState = typeof updater === 'function' ? updater(this.state) : updater;
    this.state = { ...this.state, ...newPartialState };
    this.notifyListeners();
  }

  public subscribe(listener: Listener<T>): Unsubscribe {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private notifyListeners(): void {
    for (const listener of this.listeners) {
      listener(this.state);
    }
  }
}

export default StateManager;