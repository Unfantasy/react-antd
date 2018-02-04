import ajax from './ajax';

function wrapper(method, url, options, getInst) {
  return new Promise((resolve, reject) => {
    const request = ajax[method.toLowerCase()](url, options).then((res, pointer) => {
      resolve(res, pointer);
    }, (err, pointer) => {
      reject(err, pointer);
    });
    if (typeof getInst === 'function') {
      getInst(request);
    }
  });
}

export default {
  get: wrapper.bind(null, 'GET'),
  post: wrapper.bind(null, 'POST'),
  delete: wrapper.bind(null, 'DELETE'),
  put: wrapper.bind(null, 'PUT'),
  setDomain: ajax.setDomain,
  onError: ajax.onError,
  onSuccess: ajax.onSuccess,
  enableFormat: ajax.enableFormat,
  setOptions: ajax.setOptions,
};
