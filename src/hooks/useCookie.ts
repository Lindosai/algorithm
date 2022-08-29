import { useEffect, useState } from "react";

function setCookie(cname: string, cvalue: string, exdays: number){
  const d: Date = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  const expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + '; ' + expires;
}

function getCookie(cname: string){
  const name = cname + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    const c = ca[i].trim();
    if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
  }
  return '';
}

const useCookie = function () {
  const [cookie, setCookie] = useState(document.cookie);
  useEffect(() => {

  }, [cookie]);
  return [cookie, setCookie];
};

export default useCookie;
