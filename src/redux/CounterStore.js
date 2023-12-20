import { makeAutoObservable } from "mobx";

class CounterStore {
  count = 0;

  get total() {
    return this.count + 1;
  }

  constructor() {
    makeAutoObservable(this);
  }

  inc = () => {
    this.count += 1;
  };

  dec = () => {
    if (this.count > 0) {
      this.count -= 1;
    }
  };

  reset = () => {
    this.count = 0;
  };
}

export default new CounterStore();