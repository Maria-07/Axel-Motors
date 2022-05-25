import React from "react";
import { toast } from "react-toastify";

const DeleteToolConfirm = ({ refetch, setDltTool, dltTool }) => {
  console.log(dltTool);
  const { _id, name } = dltTool;

  const deleteTool = (id) => {
    fetch(`http://localhost:5000/tools/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success(`Tools : ${name} successfully Deleted`);
          refetch();
          setDltTool(null);
        }
      });
  };
  return (
    <div>
      <div>
        {/* <!-- Put this part before </body> tag --> */}
        <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
          <div class="modal-box">
            <h3 class="font-medium text-lg text-primary pb-10">
              Are you sure you want to delete {name} ?
            </h3>

            <div class="modal-action">
              <button
                onClick={() => deleteTool(_id)}
                class="btn btn-outline btn-danger"
              >
                DELETE
              </button>
              <label for="delete-confirm-modal" class=" btn button  btn-danger">
                Cancel
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteToolConfirm;
