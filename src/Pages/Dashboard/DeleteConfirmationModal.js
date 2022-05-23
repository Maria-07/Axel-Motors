import React from "react";
import { toast } from "react-toastify";
import SetTool from "../../Hooks/SetTool";

const DeleteConfirmationModal = ({ dltOrder, setDltOrder, refetch }) => {
  const { name, tools_id, email } = dltOrder;
  const [toolData] = SetTool(tools_id);
  console.log(dltOrder);
  const deleteDoctor = (email) => {
    fetch(`http://localhost:5000/orders/${email}`, {
      method: "DELETE",
      //   headers: {
      //     authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      //   },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success(`Tools : ${toolData.name} successfully Deleted`);
          refetch();
          setDltOrder(null);
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
              Are you sure you want to delete {toolData.name} ?
            </h3>

            <div class="modal-action">
              <button
                onClick={() => deleteDoctor(email)}
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

export default DeleteConfirmationModal;
