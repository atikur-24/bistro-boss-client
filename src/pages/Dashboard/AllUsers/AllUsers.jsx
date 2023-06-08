import { useQuery } from "@tanstack/react-query";
import DynamicTitle from "../../../components/DynamicTitle/DynamicTitle";
import SectionTitle from "../../../components/SectionTitle";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  const handleMakeAdmin = user => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
        method: 'PATCH'
    })
      .then(res => res.json())
      .then(data => {
        if(data.modifiedCount > 0) {
            refetch();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is an admin`,
                showConfirmButton: false,
                timer: 1500
              })
        }
      })
  }

  const handleDelete = id => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:5000/users/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0) {
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        'User has been deleted.',
                        'success'
                      )
                }
            })
          
        }
      })
}

  return (
    <div className="w-full mt-10">
      <DynamicTitle>All Users</DynamicTitle>
      <div className="w-full">
        <SectionTitle heading={"manage all users"} subHeading={"How many??"} />
      </div>
      <div className="my-5">
        <h3 className="text-3xl font-bold">Total Users: {users.length}</h3>
      </div>
      <div className="overflow-x-auto ">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Roll</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user._id}>
                <td>{idx + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                    {
                        user?.role === 'admin' ? <span className="bg-[#D1A054] rounded-md p-1">Admin</span> :
                        <button onClick={ () => handleMakeAdmin(user)} className="btn bg-[#D1A054] btn-warning text-[18px] text-white"> <FaUserShield /> </button>
                    }
                </td>
                <td>
                    <button onClick={ () => handleDelete(user._id)} className="btn bg-[#B91C1C] btn-error text-white"> <FaTrashAlt /> </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
