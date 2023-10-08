const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  res.sendStatus(200);
});

// add a new favorite
router.post('/', (req, res) => {
  console.log('/favorite POST route');
  console.log('GIF TO POST: ', req.body);
    // add the new gif to favorites
    let queryText = `INSERT INTO "favorite" ( "gif-id", "gif-url")
                      VALUES ($1, $2)`;
    pool.query(queryText, [req.body.gifId, req.body.gifUrl ])
    .then(results => {
      res.sendStatus(201);
  }).catch(error => {
      console.log(error);
      res.sendStatus(500);
  });
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
 res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
