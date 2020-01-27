const data = (data) => ({ err: null, data});

const error = (err, data, code) => ({ err, data: data ? data : null, code: code });

const response = (res, type, result, message = '', code) => {
  let status = true;
  let data = result.data;
  if(type === 'fail'){
    status = false;
    data = result.data;
    message = result.err.message || message;
    code = code
  }
  res.status(code).send(
    {
      success: status,
      data,
      message,
      code
    });
};

module.exports = {
  data,
  error,
  response
};
