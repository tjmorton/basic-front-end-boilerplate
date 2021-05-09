import { v4 as uuid } from 'uuid';

// This was just a test to check my import / export syntax worked
//  remove me...

class App {
  #uuid: string;

  constructor() {
    this.#uuid = uuid();
  }

  printUuid(): void {
    console.log(this.#uuid);
  }
}

export default App;
