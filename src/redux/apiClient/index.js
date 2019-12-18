// @flow

import axios from "axios";

// get default language

const language = (() => {
  if (typeof window === "undefined") {
    return "en-US";
  }
  if (navigator.languages && navigator.languages.length) {
    return navigator.language[0];
  }

  return navigator.language || (navigator: any).userLanguage;
})();

const errorMessages = `* If you haven't create '.env' file, than create it.
  * Add REACT_APP_API_BASE in it where your base api should be like: 'http://myapi.com/'`;

export const create = () => {
  const API_BASE = process.env.REACT_APP_API_BASE;
  if (!API_BASE) throw new ReferenceError("API NOT PROVIDED:" + errorMessages);

  return axios.create({
    baseURL: API_BASE,
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": language
    },
    validateStatus: status => status >= 200 && status < 400
  });
};
