export interface IInfiniteScroll {
  Subscribe(currentLimit: number, maxLimit: number, maxCountSetter: (count: number) => void): void;
  Unsubscribe(): void;
}

export class InfiniteScroll implements IInfiniteScroll {
  private static instance: IInfiniteScroll | null = null;
  public static get Instance(): IInfiniteScroll { return this.instance || (this.instance = new InfiniteScroll()); }
  public static Destroy(): void { this.instance = null; }

  private constructor() { }

  public Subscribe(currentLimit: number, maxLimit: number, maxCountSetter: (count: number) => void): void {
    const initialLimit = currentLimit;

    window.onscroll = () => {
      const body = document.body;
      const html = document.documentElement;
      const height = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight);
      const scrolledToBottom = height - window.pageYOffset < 1500;

      if (scrolledToBottom && maxLimit > currentLimit) {
        currentLimit += initialLimit;
        maxCountSetter(currentLimit);
      }
    };
  }

  public Unsubscribe(): void {
    window.onscroll = () => { };
  }
}
