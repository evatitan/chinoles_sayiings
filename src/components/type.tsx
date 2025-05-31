export type Level = {
  id: number;
  name: string;
  value: number;
};

export type Saying = {
  id: string;
  title: string;
  means: string;
  example: string;
  level: number;
  showLevel: boolean;
  showSearch: boolean;
  showExample: boolean;
};
