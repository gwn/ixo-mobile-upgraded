// TODO add axios, wrapper and interface

export default class RasaAPI {
  constructor() {}

  sendMessage = ( message ) => {
    return fetch(
      'https://bf-ixo-world.development.agents.botfront.cloud/webhooks/rest/webhook',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sender: 'test_mobile',
          message: message,
        }),
      },
    ).then(async (resp) => resp.json()).then((res)=>res);
  };
}
