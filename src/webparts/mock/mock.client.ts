import { ISPList } from '../helloAngular/app/models/demo.model';

export default class MockHttpClient {
    private static _items: ISPList[] = [{ title: 'Test', name: 'Some Name' },];
    public static get(restUrl: string, options?: any): Promise<ISPList[]> {
      return new Promise<ISPList[]>((resolve) => {
            resolve(MockHttpClient._items);
        });
    }
}
