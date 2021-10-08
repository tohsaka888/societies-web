// const baseUrl = `http://localhost:9000`;
const baseUrl = `http://81.68.113.218:9000`
const wsServer = `ws://localhost:9001`

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

export const getWebsocketMessage = () => {
  const websocket = new WebSocket(wsServer);
  websocket.onopen = function (event) {
    websocket.onmessage = function (event) {
      console.log(event)
    }
  }
}

export const sendWebsocketRequest = (message: string) => {
  const websocket = new WebSocket(wsServer);
  console.log(message)
  websocket.onopen = function (event) {
    websocket.send(message)
  }
  websocket.onmessage = function (event) {
    console.log(event.data)
  }
}
