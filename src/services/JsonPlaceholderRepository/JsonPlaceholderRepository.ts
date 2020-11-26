import { ContentType } from './ContentType';
import { IJsonPlaceholderRepository } from './IJsonPlaceholderRepository';

const baseUrl = 'https://jsonplaceholder.typicode.com';

export class JsonPlaceholderRepository implements IJsonPlaceholderRepository {
  private static instance: IJsonPlaceholderRepository | null = null;
  public static get Instance(): IJsonPlaceholderRepository {
    return this.instance || (this.instance = new JsonPlaceholderRepository());
  }
  public static Destroy(): void { this.instance = null; }

  private constructor() { }

  public async GetAll<T>(contentType: ContentType): Promise<Array<T>> {
    const response = await fetch(`${baseUrl}/${contentType}`);
    return await response.json();
  }

  public async Get<T>(contentType: ContentType, id: string): Promise<T> {
    const response = await fetch(`${baseUrl}/${contentType}/${id}`);
    return await response.json();
  }
}
