import React from "react";
import { toast } from "react-toastify";
import SetTool from "../../Hooks/SetTool";

const DeleteConfirmationModal = ({ dltOrder, setDltOrder, refetch }) => {
  const { tools_id, email } = dltOrder;
  const [toolData] = SetTool(tools_id);
  console.log(dltOrder);
  const deleteDoctor = (email) => {
    fetch(`https://gentle-mesa-53568.herokuapp.com/orders/${email}`, {
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
        <input
          type="checkbox"
          id="delete-confirm-modal"
          className="modal-toggle"
        />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-medium text-lg text-primary pb-10">
              Are you sure you want to delete {toolData.name} ?
            </h3>

            <div className="modal-action">
              <button
                onClick={() => deleteDoctor(email)}
                className="btn btn-outline btn-danger"
              >
                DELETE
              </button>
              <label
                for="delete-confirm-modal"
                className=" btn button  btn-danger"
              >
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
