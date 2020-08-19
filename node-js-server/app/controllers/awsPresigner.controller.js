const presigner = require('../middlewares/awsPresigner');

exports.put = (req, res) => {
     // Both Key and ContentType are defined in the client side.
  // Key refers to the remote name of the file.
  // ContentType refers to the MIME content type, in this case image/jpeg
  const { Key, ContentType } =  req.query;
  console.log('Key' + Key + 'ContentType' + ContentType);
  presigner.generatePutUrl(Key, ContentType).then(putURL => {
    res.send({putURL});
  })
  .catch(err => {
    res.send(err);
  });
}

exports.get = (req, res) => {
     // Both Key and ContentType are defined in the client side.
  // Key refers to the remote name of the file.
  const { Key } = req.query;
  presigner.generateGetUrl(Key)
    .then(getURL => {      
      res.send(getURL);
    })
    .catch(err => {
      res.send(err);
    });
}