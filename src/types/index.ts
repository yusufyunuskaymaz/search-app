export type IUser = {
  id: number;
  nameSurname: string;
  company: string;
  email: string;
  phone?: string;
  website: string;
  country: string;
  city: string;
  date: number;
};

export type SearchInputProps = {
  setSearchInput(val:string):void;
  searchInput?:string;
  results?: any[];
  setToLocalStorage?():void
  isResultPage?:boolean
  searchResults?():void
}
export type ResultsSearchInputProps = {
  results?: any[];
  setToLocalStorage?():void
  isResultPage?:boolean
  searchResults?():void
}

export type SearchResultProps = {
  results: any[];
  setSearchInput(val: string): void;
  setToLocalStorage():void

};

export type ButtonProps = {
  text:string;
  handleClick?:()=>void
  type: "submit" | "button"
  disabled?:boolean
}

export type ITitleProps = {
  text:string;
} 