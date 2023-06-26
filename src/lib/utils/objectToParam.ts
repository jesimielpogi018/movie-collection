export function objectToUrlParams(obj: any) {
  const params = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const encodedKey = encodeURIComponent(key);
      const encodedValue = encodeURIComponent(obj[key]);
      params.push(`${encodedKey}=${encodedValue}`);
    }
  }

  return params.join("&");
}
