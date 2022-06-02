export interface IOther {
  id: string | null;
  firstName: string ;
}

export interface IOtherCreate {
  name: string;
}

export interface IPagination {
  count: number;
  perPage: number;
  currentPage: number;
  totalPages: number;
}

class Other implements IOther {
  id: string | null;
  firstName: string;

  constructor(other: IOther) {
    this.id = other.id;
    this.firstName = other.firstName;
  }
}

export interface IOtherResults {
  count: number;
  perPage: number;
  currentPage: number;
  totalPages: number;
  results: Other[];
}

export default Other;