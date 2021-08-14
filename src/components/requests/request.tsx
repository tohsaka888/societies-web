const baseUrl = `http://localhost:9000`;

export const pushRequest = async (api: String, pushedData: any) => {
  try {
    const res = await fetch(`${baseUrl}${api}`, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(pushedData),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
