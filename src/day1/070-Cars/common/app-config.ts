// We know we can register an object with a Value Provider. 
// But what do we use for the token? 
// We don't have a class to serve as a token. There is no Config class.
// we cannot use an interface as a token: its just a design-time artifact. 

export interface Config {
  apiEndpoint: string,
  title: string
}

export const CONFIG:Config = {
  apiEndpoint: 'api.monsters.com',
  title: 'mister DI'
};