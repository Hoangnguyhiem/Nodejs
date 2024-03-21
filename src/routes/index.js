import moviesRouter from "./movies.js"
import categoriesRouter from "./categories.js"


export default function router(app) {
    app.get("/" , (req, res) => {
        res.send("Home")
    })
    app.use("/movies", moviesRouter)
    app.use("/categories", categoriesRouter)
}