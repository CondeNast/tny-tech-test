class LastRequestSingleton {
  type: "search" | "latest";
  date: string;
  query: string;
  pageSize: number;
  page: number;
  category: string;

  constructor() {
    this.type = "latest";
    this.date = "";
    this.query = "";
    this.pageSize = 20;
    this.page = 1;
    this.category = "general";
  }
}

const LastRequest = new LastRequestSingleton();

export default LastRequest;
