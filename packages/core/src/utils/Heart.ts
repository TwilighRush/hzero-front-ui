export class Heart {
  private tasks: Function[];
  private prev: any;
  private current: any;
  private timeout: any;

  constructor() {
    this.tasks = [];
    this.beat();
  }

  public addTask(fn: Function) {
    this.tasks.push(fn);
  }

  public removeTask(fn: Function) {
    this.tasks = this.tasks.filter((t) => t !== fn);
  }

  private beat() {
    this.timeout = setTimeout(() => {
      if (this.prev !== this.current) {
        this.tasks.forEach((t) => t(this.current));
        this.prev = this.current;
      }
    }, 150);
  }

  public update(data: any) {
    this.current = data;
    clearTimeout(this.timeout);
    this.beat();
  }
}
