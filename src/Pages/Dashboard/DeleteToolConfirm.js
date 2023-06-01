import React from "react";
import { toast } from "react-toastify";

const DeleteToolConfirm = ({ refetch, setDltTool, dltTool }) => {
  console.log(dltTool);
  const { _id, name } = dltTool;
  console.log(_id);

  const deleteTool = (id) => {
    fetch(`localhost:5000/tools/${id}`, {
      method: "DELETE",
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
        <input
          type="checkbox"
          id="delete-confirm-modal"
          className="modal-toggle"
        />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-medium text-lg text-primary pb-10">
              Are you sure you want to delete {name} ?
            </h3>

            <div className="modal-action">
              <button
                onClick={() => deleteTool(_id)}
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

export default DeleteToolConfirm;
