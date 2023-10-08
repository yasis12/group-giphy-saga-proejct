const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
// router.get('/', (req, res) => {
//   let queryText = `SELECT * FROM "favorite"`;
//   pool.query(queryText).then((result) => {
//     res.send(result.rows);
//   }).catch((error) => {
//     console.log(error);
//     res.sendStatus(500);
//   });
// });

router.get('/', (req, res) => {
  let queryText = `
    SELECT "favorite"."id", "favorite"."gif-id", "favorite"."gif-url", "category"."name" as "category_name"
    FROM "favorite"
    LEFT JOIN "category" ON "favorite"."category_id" = "category"."id";
  `;
  pool.query(queryText).then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log(error);
    res.sendStatus(500);
  });
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
  console.log('/category PUT route');
  console.log('category TO POST: ', req.body);
    // add category to gif
    let queryText = `UPDATE "favorite" SET "category_id" = $1 WHERE "gif-id" = $2`;
    pool.query(queryText, [req.body.value, req.params.favId])
    .then(results => {
      res.sendStatus(200);
  }).catch(error => {
      console.log(error);
      res.sendStatus(500);
  });
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
