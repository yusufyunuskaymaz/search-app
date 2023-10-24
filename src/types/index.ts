export type IUser = {
  id: number;
  nameSurname: string;
  company: string;
  email: string;
  phone: string;
  website: string;
  country: string;
  city: string;
  date: number;
};

export type SearchInputProps = {
  setSearchInput(val:string):void;
  searchInput?:string;
  results?: any[]
}

export type SearchResultProps = {
  results: any[];
  setSearchInput(val: string): void;
};

export type ButtonProps = {
  text:string;
  handleClick?:()=>void
}

export type ITitleProps = {
  text:string;
} 