export default function formatParams(params: Record<string, any>) {
    const filtered = Object.keys(params)
      .filter((key) => !!params[key])
      .reduce((obj: Record<string, any>, key) => {
        obj[key] = params[key];
        return obj;
      }, {});
  
    return filtered;
  }
  