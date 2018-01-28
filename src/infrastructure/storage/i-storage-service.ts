

export interface IStorage {
    setValues(key: string, value: any);
    getValues(key: string): any;
}