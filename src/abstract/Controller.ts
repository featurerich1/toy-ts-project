export default abstract class Controller<T> {
    public abstract index(): Partial<T>[]
    public abstract create(...args: any[]): boolean;
    public abstract show(a: any): any;
    public abstract update(a: any): any;
}