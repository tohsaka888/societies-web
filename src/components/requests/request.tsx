const baseUrl = `http://tohsaka888.xyz:4001`;

export const pushRequest = async (api: String, pushedData: any) => {
  try {
    const res = await fetch(`${baseUrl}${api}`, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(pushedData),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      credentials: "include", // 携带cookie跨域
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
