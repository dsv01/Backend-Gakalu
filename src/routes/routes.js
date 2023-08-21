//Importações para as routers
const { Router } = require("express");
const router = Router();

//Importações das controllers
const UserController = require("../controllers/UserController");
const GameController = require("../controllers/GameController");
const StoreController = require("../controllers/StoreController");

//Definição de endpoints de User
router.post("/User", UserController.create);
router.get("/User/:id", UserController.show); 
router.get("/User", UserController.index); 
router.get("/addRelationGame/:id", UserController.addRelationGame);
router.get("/removeRelationGame/:id", UserController.removeRelationGame);
router.get("/addRelationStore/:id", UserController.addRelationStore);
router.get("/removeRelationStore/:id", UserController.removeRelationStore);
router.put("/User/:id", UserController.update);
router.delete("/User/:id", UserController.destroy);

//Definição de endpoints de Game
router.post("/Game", GameController.create);
router.get("/Game/:id", GameController.show); 
router.get("/Game", GameController.index); 
router.put("/Game/:id", GameController.update);
router.delete("/Game/:id", GameController.destroy);

//Definição de endpoints de Store
router.post("/Store", StoreController.create);
router.get("/Store/:id", StoreController.show); 
router.get("/Store", StoreController.index); 
router.put("/Store/:id", StoreController.update);
router.delete("/Store/:id", StoreController.destroy);

module.exports = router;