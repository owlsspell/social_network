import React from "react";
import Paginator from "../../common/Paginator/Paginator";
import User from "./User";

let Users = ({currentPage,onPageChanged, totalUserCount,pageSize, inputPage ,sendPageChanged,users, ...props}) => {
  return (
    <div>
      {/* <button onClick={this.getUsers}>Get Users</button> */}
      
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUserCount={totalUserCount} pageSize={pageSize} inputPage={inputPage} sendPageChanged={sendPageChanged}/>
        
      {users.map((u) => (
        <User key= {u.id} user={u} followingInProgres={props.followingInProgres} follow={props.follow} unfollow={props.unfollow}/>
      ))}
    </div>
  );
};

export default Users;
