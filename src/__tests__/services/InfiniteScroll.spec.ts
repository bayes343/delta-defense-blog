import { Mock } from 'tsmockit';
import { IInfiniteScroll, InfiniteScroll } from '../../services/module';

describe('InfiniteScroll', () => {
  const mockWindow = new Mock<Window & typeof globalThis>();
  const mockDocument = new Mock<Document>();

  const currentLimit = 10, maxLimit = 100;
  const setter = (count: number) => null;

  let classUnderTest: IInfiniteScroll;

  beforeEach(() => {
    classUnderTest = InfiniteScroll.Instance(mockWindow.Object, mockDocument.Object);
  });

  afterEach(() => {
    InfiniteScroll.Destroy();
  });

  it('should construct', () => {
    expect(classUnderTest).toBeDefined();
  });

  it('should construct with default values after being destroyed', () => {
    InfiniteScroll.Destroy();
    classUnderTest = InfiniteScroll.Instance();
    expect(classUnderTest).toBeDefined();
  });

  it('should subscribe to scroll events without error', () => {
    classUnderTest.Subscribe(currentLimit, maxLimit, setter);
  });

  it('should unsubscribe to scroll events without error', () => {
    classUnderTest.Unsubscribe();
  });

  it('should handle scrolling when limits need to be updated', () => {
    mockDocument.Setup(d => d.body, { scrollHeight: 1500, offsetHeight: 1500 });
    mockDocument.Setup(d => d.documentElement, { clientHeight: 1500, scrollHeight: 1500, offsetHeight: 1500 });
    mockWindow.Setup(w => w.pageYOffset, 1500);
    InfiniteScroll.Destroy();
    classUnderTest = InfiniteScroll.Instance(mockWindow.Object, mockDocument.Object);
    classUnderTest.Subscribe(currentLimit, maxLimit, setter);

    classUnderTest['onScroll']();

    expect(classUnderTest['currentLimit']).toEqual(currentLimit * 2);
  });

  it('should handle scrolling when limits do not need to be updated', () => {
    mockDocument.Setup(d => d.body, { scrollHeight: 1500, offsetHeight: 1500 });
    mockDocument.Setup(d => d.documentElement, { clientHeight: 1500, scrollHeight: 1500, offsetHeight: 1500 });
    mockWindow.Setup(w => w.pageYOffset, 0);
    InfiniteScroll.Destroy();
    classUnderTest = InfiniteScroll.Instance(mockWindow.Object, mockDocument.Object);
    classUnderTest.Subscribe(currentLimit, maxLimit, setter);

    classUnderTest['onScroll']();

    expect(classUnderTest['currentLimit']).toEqual(currentLimit);
  });
});
