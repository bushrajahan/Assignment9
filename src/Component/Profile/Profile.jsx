import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../assets/AuthProvider/AuthProvider';
const Profile = () => {

const {user,LogOut} = useContext(AuthContext)
 const {displayName,email} = user;
 const handleClick = () =>{
  LogOut();
}
  return (
    <div>
     <div className="dropdown lg:dropdown-end md:dropdown-bottom">
  <label tabIndex={0} className="btn m-1">{displayName}</label>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box ">
    <li><a>{email}</a></li>
    <li><btn onClick={handleClick}>Logout</btn></li>
  </ul>
</div>
    </div>
  );
};

export default Profile;