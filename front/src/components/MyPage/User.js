import React, { useState, useEffect } from "react";
import UserProfileEdit from "./UserProfileEdit";
import UserProfile from "./UserProfile";
import * as Api from "../../apis/api";

function User({ userId, isEditable }) {
  /** useState 훅을 통해 isEditing 상태를 생성함. */
  const [isEditing, setIsEditing] = useState(false);
  /** useState 훅을 통해 user 상태를 생성함.*/
  const [user, setUser] = useState(null);

  useEffect(() => {
    Api.getData("user", userId).then((res) => setUser(res.data));
  }, [userId]);

  useEffect(() => {
    console.log(user);
  }, [isEditing, user]);

  return (
    <div>
      {isEditing ? (
        <UserProfileEdit
          user={user}
          setIsEditing={setIsEditing}
          setUser={setUser}
        />
      ) : (
        <UserProfile
          user={user}
          setIsEditing={setIsEditing}
          isEditable={isEditable}
        />
      )}
    </div>
  );
}

export default User;
