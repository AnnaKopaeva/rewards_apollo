export interface ErrorEntity {
  message?: string;
  errors?: {
    [key: string]: string[];
  };
}
