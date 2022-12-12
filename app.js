import express from 'express';
import { faker } from '@faker-js/faker';

const app = express();

function generateRandomData() {
  let data = "# HELP score3 Tag Score of user # TYPE score3 gauge <br />"

  const length = faker.datatype.number({ min: 10, max: 100})

  for (let i = 1; i < length; ++i) {
    const tempData = `score${faker.datatype.number({ max: 10 })}{topicid="${faker.random.alpha(5)}",userid="${faker.random.alpha(6)}"} ${faker.datatype.number({max: 10})} <br />`;
    data += tempData;
  }

  return data;
}

app.get('/', function (req, res) {
 const button = "<button> <a href='/metrices'> Go to metrices  </a></button>"
  res.send(button);
})

app.get('/metrices', function (req, res) {
  const tempGeneratedData = generateRandomData();
  res.send(tempGeneratedData);
})

app.listen(8000, () =>
  console.log('Example app listening on port 3000!'),
);