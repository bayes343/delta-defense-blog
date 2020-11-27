export interface IInfiniteScroll {
  Subscribe(currentLimit: number, maxLimit: number, maxCountSetter: (count: number) => void): void;
  Unsubscribe(): void;
}

type CountSetter = (count: number) => void;

export class InfiniteScroll implements IInfiniteScroll {
  private static instance: IInfiniteScroll | null = null;
  public static Instance(windowRef = globalThis.window, documentRef = globalThis.document): IInfiniteScroll {
    return this.instance || (this.instance = new InfiniteScroll(windowRef, documentRef));
  }
  public static Destroy(): void { this.instance = null; }

  private currentLimit = 0;
  private maxLimit = 0;
  private maxCountSetter: CountSetter | null = null;

  private constructor(
    private windowRef: Window,
    private documentRef: Document
  ) { }

  public Subscribe(currentLimit: number, maxLimit: number, maxCountSetter: CountSetter): void {
    this.currentLimit = currentLimit;
    this.maxLimit = maxLimit;
    this.maxCountSetter = maxCountSetter;

    this.windowRef.onscroll = () => this.onScroll();
  }

  public Unsubscribe(): void {
    this.windowRef.onscroll = null;
  }

  private onScroll = (): any => {
    const initialLimit = this.currentLimit;

    const body = this.documentRef.body;
    const html = this.documentRef.documentElement;
    const height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight);
    const scrolledToBottom = height - this.windowRef.pageYOffset < 1500;

    if (scrolledToBottom && this.maxLimit > this.currentLimit) {
      this.currentLimit += initialLimit;
      this.maxCountSetter(this.currentLimit);
    }
  }
}
