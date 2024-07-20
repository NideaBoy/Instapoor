declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined;
      API_URL: string;
      // add more environment variables and their types here
    }
  }
}