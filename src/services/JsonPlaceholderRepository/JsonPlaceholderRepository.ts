import { ContentType } from './ContentType';
import { IJsonPlaceholderRepository } from './IJsonPlaceholderRepository';

export const jsonPlaceHolderBaseUrl = 'https://jsonplaceholder.typicode.com';

export type Fetch = (input: RequestInfo, init?: RequestInit) => Promise<Response>;

export class JsonPlaceholderRepository implements IJsonPlaceholderRepository {
  private static instance: IJsonPlaceholderRepository | null = null;
  public static Instance(fetchRef: Fetch = globalThis.fetch.bind(globalThis)): IJsonPlaceholderRepository {
    return this.instance || (this.instance = new JsonPlaceholderRepository(fetchRef));
  }
  public static Destroy(): void { this.instance = null; }

  private constructor(private fetchRef: Fetch) { }

  public async GetAll<T>(contentType: ContentType): Promise<Array<T>> {
    const response = await this.fetchRef(`${jsonPlaceHolderBaseUrl}/${contentType}`);
    return await response.json();
  }

  public async Get<T>(contentType: ContentType, id: string): Promise<T> {
    const response = await this.fetchRef(`${jsonPlaceHolderBaseUrl}/${contentType}/${id}`);
    return await response.json();
  }

  public async GetChildContent<T>(parentType: ContentType, parentId: string, childType: ContentType): Promise<T[]> {
    const response = await this.fetchRef(`${jsonPlaceHolderBaseUrl}/${parentType}/${parentId}/${childType}`);
    return await response.json();
  }
}
