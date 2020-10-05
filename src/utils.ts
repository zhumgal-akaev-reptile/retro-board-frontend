export const groupBy = <T extends Array<any> = any>(array: T, key): { [key: string]: T } => {
  return array.reduce((rv, x) => {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};
