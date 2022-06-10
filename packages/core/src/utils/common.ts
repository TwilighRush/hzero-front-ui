export function filterNullOrUndefined(data: Record<string, any> = {}) {
  const result: any = {};
  Object.keys(data).forEach((key) => {
    if (data[key] !== null && data[key] !== undefined) {
      result[key] = data[key];
    }
  });
  return result;
}
