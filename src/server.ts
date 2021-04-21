import express from "express";


const app = express();


app.get("/", (req, res)=>{
   return res.json({
        message: "ola NLW 05!",

});
});

app.post("/users", (req, res) =>{
        return res.json({
            message: "Raafel Rufino",
           
        });
});

app.listen(3333,()=>
console.log("server is running on port 3333")
);
