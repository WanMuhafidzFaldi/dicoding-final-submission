const wrap = require('../config/wrapping');


const uploadFileAzure = async (req, res) => {
  const { file } = req;
  console.log(file);

  const sendResponse = async (result) => {
    /* eslint no-unused-expressions: [2, { allowTernary: true }] */
    (result.err) ? wrap.response(res, 'fail', result, 'Fail search customer account', 500)
      : wrap.response(res, 'success', result, 'Success get list of Customer Account', 200);
  };
  sendResponse("");
};

module.exports = {
  uploadFileAzure
}