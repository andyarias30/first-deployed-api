//import the data base
import db from './connectDb.js'

const coll = db.collection('coffees') //create a variable for db
//create a function
export function addCoffee(req, res) {
    const newCoffee = req.body // add new  coffee request to body
    coll.add(newCoffee)// go to db and send coffee(promise)
        .then(() => res.status(201).send({ message: "Success" })) // if successful,respond
        .catch(err => res.status(500).send({ message: err.message }))
}

export function getAllCoffee(req, res) {
    coll.get()
        .then(collection => {
            const coffees = collection.docs.map(doc => ({ id: doc.id, ...doc.data() }))
            res.send(coffees)
        })
        .catch(err => res.status(500).send({ message: err.message }))
}
