import { useState } from "react";
import { useMutation } from "@apollo/client";
import { GET_COLLEGE } from "../queries/collegeQueries";
import { UPDATE_COLLEGE } from "../mutations/collegeMutations";

export default function EditCollegeForm({ college }) {
  const [ title, setTitle] = useState(college.title);
  const [name, setName] = useState(college.name);
  const [description, setDescription] = useState(college.description);
  const [status, setStatus] = useState(() => {
    switch (college.status) {
      case "Not Started":
        return "new";
      case "In Progress":
        return "progress";
      case "Completed":
        return "completed";
      default:
        throw new Error(`Unknown status: ${college.status}`);
    }
  });

  const [updateCollege] = useMutation(UPDATE_COLLEGE, {
    variables: { id: college.id,title, name, description, status},
    refetchQueries: [{ query: GET_COLLEGE, variables: { id: college.id } }],
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title ||!name || !description|| !status) {
      return alert("Please fill out all fields");
    }

    updateCollege(title,name, description, status);
  };

  return (
    <div className="mt-5">
      <h3>Update College Details</h3>
      <form onSubmit={onSubmit}>
      <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Status</label>
          <select
            id="status"
            className="form-select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="new">Not Started</option>
            <option value="progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
