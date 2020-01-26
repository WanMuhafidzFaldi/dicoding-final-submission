const data = (data) => ({ err: null, data});

const error = (err, data) => ({ err, data: data ? data : null });

const response = (res, type, result, message = '', code = 200) => {
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
