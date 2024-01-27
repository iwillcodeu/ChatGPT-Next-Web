export type Updater<T> = (updater: (value: T) => void) => Promise<void>;
