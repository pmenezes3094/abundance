import express from "express"
import mysql from "mysql"
import cors from "cors"
import multer from "multer"
import Parser from 'rss-parser';

const app = express()
const parser = new Parser();
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"pa"
})

app.use('/uploads', express.static('uploads'));

app.use(express.json());
app.use(cors());

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function(req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  }
});

const upload = multer({storage})

app.post('/upload', upload.single('file'), (req, res) => {
  const imagePath = req.file.path;
  const dataTag = req.body.data_tag;
  const dataType = req.body.data_type;

  const q = "INSERT INTO data (`data_content`, `data_tag`, `data_type`) VALUES (?, ?, ?)";
  const values = [
      imagePath,
      dataTag,
      dataType
  ];

  db.query(q, values, (err, data) => {
      if (err) {
          console.error("Error saving image path to database:", err);
          return res.status(500).json({ error: "Failed to save image path to database" });
      } else {
          console.log("Image path saved to database successfully.");
          return res.status(200).json({ success: true });
      }
  });
});

app.get("/",(req, res)=>{
    res.json("hello this is the backend!")
})

app.get("/dashboard", (req,res)=>{
    const q = "select * from data"
    db.query(q,(err,data)=>{
       if(err) res.json(err)
       else return res.json (data)
    })
});

app.get("/search", (req,res)=>{
  const searchTerm = req.query.q; // Get the search term from query parameter
  const q = "SELECT * FROM data WHERE data_content LIKE ? OR data_tag LIKE ?";
  const values = [`%${searchTerm}%`, `%${searchTerm}%`]; // Using placeholders to prevent SQL injection

  db.query(q, values, (err, data) => {
    if(err) res.json(err);
    else return res.json(data);
  });
});

app.post("/dashboard", (req, res) => {
  const q = "INSERT INTO data(`data_content`, `data_tag`, `data_type`) VALUES (?)";

  const values = [
    req.body.data_content,
    req.body.data_tag,
    req.body.data_type,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});


app.delete("/dashboard/:id", (req, res) => {
  const data_id = req.params.id;
  const q = " DELETE FROM data WHERE data_id = ? ";

  db.query(q, [data_id], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.put("/dashboard/:id", (req, res) => {
  const data_id = req.params.id;
  const q = "UPDATE data SET `data_content`= ?, `data_tag`= ? WHERE data_id = ?";

  const values = [
    req.body.data_content,
    req.body.data_tag,
  ];

  db.query(q, [...values,data_id], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});


app.get("/rss", (req, res) => {
  const q = "SELECT data_content FROM data WHERE data_type = 'rss'";
  db.query(q, (err, data) => {
      if (err) {
          console.error("Error selecting RSS data from database:", err);
          res.status(500).json({ error: "Error selecting RSS data from database" });
      } else {
          const rssUrls = data.map(item => item.data_content);
          console.log("RSS URLs:", rssUrls);
          Promise.all(rssUrls.map(url => parseRSS(url)))
              .then(results => {
                  const allItems = results.flat();
                  res.send(allItems);
                  console.log("All RSS feeds fetched and sent successfully.");
              })
              .catch(error => {
                  console.error("Error fetching or sending RSS feeds:", error);
                  res.status(500).json({ error: "Error fetching or sending RSS feeds" });
              });
      }
  });
});

const parseRSS = async (url) => {
  try {
      const feed = await parser.parseURL(url);
      return feed.items;
  } catch (error) {
      console.error("Error parsing or fetching RSS feed:", error);
      throw error;
  }
};




app.listen(8800, ()=>{
    console.log("Connected to backend.")
})
