const express = require("express");
const {
  handleCreateNewUser,
  handleGetAllUsers,
  handleGetUsersById,
  handleUpdateUserById,
  handleDeleteUserById,
} = require("../controllers/user");

const router = express.Router();

router.get("/", handleGetAllUsers);
router.post("/",handleCreateNewUser);
//we can also write like this
// router.route("/").get(handleGetAllUsers).post(handleCreateNewUser)

router
  .route("/:id")
  .get(handleGetUsersById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById);



module.exports = router;
