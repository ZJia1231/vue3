export default async function request(url, method = 'GET', data = {}) {
  let originUrl = '';
  if (window.location.hostname === 'localhost') {
    originUrl = 'http://localhost:8888';
  }
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, `${originUrl}${url}`);
    xhr.send(JSON.stringify(data));
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        try {
          resolve(JSON.parse(xhr.response));
        } catch (error) {
          reject(error)
        }
      }
      else if (xhr.readyState === 4 && xhr.status >= 400) {
        reject(xhr.response);
      }
    }
  })
}