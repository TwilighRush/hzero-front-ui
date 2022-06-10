export class EventBus {
  events: Record<any, Function[]> = {};

  on(evt: any, handler: Function) {
    if (!this.events[evt]) {
      this.events[evt] = [];
    }
    this.events[evt].push(handler);
  }

  off(evt: any, handler: Function) {
    if (this.events[evt]) {
      this.events[evt] = this.events[evt].filter(h => h !== handler);
    }
  }

  emit(evt: any, ...args: any[]) {
    if (this.events[evt]) {
      this.events[evt].forEach(handle => handle(...args));
    }
  }
}

export const pageEvents = new EventBus();
