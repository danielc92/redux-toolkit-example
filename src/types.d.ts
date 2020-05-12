interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }
  interface ITodos {
    loading: boolean;
    results: ITodo[];
    error: string | null;
  }
  