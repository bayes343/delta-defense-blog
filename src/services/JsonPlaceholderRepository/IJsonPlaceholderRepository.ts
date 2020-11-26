import { ContentType } from './ContentType';

export interface IJsonPlaceholderRepository {
  GetAll<T>(contentType: ContentType): Promise<Array<T>>;
  Get<T>(contentType: ContentType, id: string): Promise<T>;
}
