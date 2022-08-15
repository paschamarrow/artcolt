import React, { useContext } from "react";
import styled from "styled-components";
import CreatePost from "../Components/CreatePost";
import SideBar from "../Components/SideBar";
import { UserContext } from "../Context/UserContext";
import { FeedContext } from "../Context/FeedContext";
import FeedProvider from "../Context/FeedContext";
import Feed from "../Components/Feed";
import ProfileSummaryBox from "../Components/ProfileSummaryBox";

const Profile = () => {
  const {} = useContext(UserContext);
  const { feed } = useContext(FeedContext);

  const Context = useContext(FeedContext);
  console.log("context", Context);
  // useEffect(() => {
  //   fetch("/api/get-users")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       getUsers(data.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  console.log("feed", feed);
  return (
   
      <ProfilePageWrapper>
        <SideBar />
        <p> All Current User Posts</p>
<ProfileSummaryBox /> <p>Profile Summary</p>
        <CreatePost /> 
        {!!feed && <Feed feed={feed} />}
      </ProfilePageWrapper>
   
  );
};

const ProfilePageWrapper = styled.div`
 
  display: flex;
  flex-direction: row;

  width: 1400;
`;

export default Profile;
