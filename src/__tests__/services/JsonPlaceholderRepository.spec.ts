import { jsonPlaceHolderBaseUrl } from '../../constants';
import { IPost } from '../../domain/IPost';
import { IJsonPlaceholderRepository, JsonPlaceholderRepository, ContentType } from '../../services/module';
import { stubPosts } from '../StubData';

describe('JsonPlaceholderRepository', () => {
  let fetchCalledWith: string | null = null;
  const mockFetch = (uri: string) => {
    fetchCalledWith = uri;
    return new Promise<any>((resolve) => resolve({json: () => stubPosts}));
  };
  let classUnderTest: IJsonPlaceholderRepository;

  it('should construct', () => {
    classUnderTest = JsonPlaceholderRepository.Instance(() => new Promise<any>((resolve) => resolve));
    expect(classUnderTest).toBeDefined();
  });

  it('should get all using a request uri for all posts', async () => {
    JsonPlaceholderRepository.Destroy();
    classUnderTest = JsonPlaceholderRepository.Instance(mockFetch);

    await classUnderTest.GetAll<IPost>(ContentType.Posts);

    expect(fetchCalledWith).toEqual(`${jsonPlaceHolderBaseUrl}/${ContentType.Posts}`);
  });

  it('should get using a request uri for one post', async () => {
    JsonPlaceholderRepository.Destroy();
    classUnderTest = JsonPlaceholderRepository.Instance(mockFetch);

    await classUnderTest.Get<IPost>(ContentType.Posts, '1');

    expect(fetchCalledWith).toEqual(`${jsonPlaceHolderBaseUrl}/${ContentType.Posts}/1`);
  });

  it('should get child content using a request uri for related content', async () => {
    JsonPlaceholderRepository.Destroy();
    classUnderTest = JsonPlaceholderRepository.Instance(mockFetch);

    await classUnderTest.GetChildContent<IPost>(ContentType.Posts, '1', ContentType.Comments);

    expect(fetchCalledWith).toEqual(`${jsonPlaceHolderBaseUrl}/${ContentType.Posts}/1/${ContentType.Comments}`);
  });
});
