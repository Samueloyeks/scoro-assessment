export interface Status {
    color: string;
    is_default: number;
    modified_date: string;
    module: string;
    status_id: string;
    status_name: string;
  };

  export interface BaseData {
    loading: boolean,
    statuses: Status[],
    test: string,
  }