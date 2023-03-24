//import indexRoutes from "./routes/index.rutes";

import './database';
import express from 'express';
import { create } from 'express-handlebars';




const app = express();
/*const hbs = create({
    extname: '.hbs',
    layoutsDir: path.join(app.get("views"), "layouts"),
    defaultLayout:'main'
});*/

// Register `hbs.engine` with the Express app.
//app.engine(".hbs", hbs.engine);
//app.set("view engine", ".hbs");
//app.engine('handlebars', hbs.engine);
//app.set('view engine', 'handlebars');
//app.set('views', './views');
  ///public

//app.use(express.static(path.join(__dirname,"public")));
//
//app.use(morgan('dev'));
//app.use(express.urlencoded({extended:false}));
app.get( '/',(req , res)=>{


    res.send("hello")
});

//export default app;
  
//routs
//app.use(indexRoutes);
app.listen(3000);

console.log("server port",3000);