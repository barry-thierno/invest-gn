export type ClientConfig<T> = {
  data?: T;
  token?: string;
} & RequestInit;

export default async function client<T>(
  endpoint: string,
  { data, token, headers: customHeaders, ...customConfig }: ClientConfig<T> = {}
) {
  const config: RequestInit = {
    method: data ? "POST" : "GET",
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": data ? "application/json" : "",
      ...customHeaders,
    },
    ...customConfig,
  };

  // return window.fetch(`${apiURL}/${endpoint}`, config).then(async response => {
  return window.fetch(`${endpoint}`, config).then(async (response) => {
    if (response.status === 401) {
      // queryCache.clear()
      // await auth.logout()
      // refresh the page for them
      // window.location.assign(window.location)
      return Promise.reject({ message: "Please re-authenticate." });
    }
    const data: T = await response.json();
    if (response.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
}
