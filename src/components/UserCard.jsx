import React from 'react'
const UserCard = ({user})=> {
    const {_id, firstName, lastName, gender, age, photoUrl, skills, about} = user;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={user.photoUrl}
      alt="Profile Photo" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{user.firstName+" "+ user.lastName}</h2>
    {age && gender && <p>{age + ", "+ gender} </p>}
    <p>{user.about}</p>
    <div className="card-actions justify-center my-4">
      <button className="btn btn-primary">Interested</button>
      <button className="btn btn-secondary">Ignore</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default UserCard
