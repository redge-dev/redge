type ApiHandler = (...args: any[]) => any | Promise<any>;

const createApiFactory = () => {
  const handlers: Record<string, ApiHandler> = {};
  function factory(arg: { request: Request }) {
    switch (arg.request.method) {
      case "POST":
        return handlers.post?.(arg);
    }
  }
  factory.post = (fn: ApiHandler) => {
    handlers.post = fn;
    return factory;
  };

  return () => factory;
};

export const createApi = createApiFactory();
