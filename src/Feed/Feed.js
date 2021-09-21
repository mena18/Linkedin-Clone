import React, { useEffect, useState } from "react";

import "./Feed.scss";
import InputOption from "./inputOption";
import Post from "./Post";
import SkeletonFeed from "./SkeletonFeed";
import FlipMove from "react-flip-move";

// icons
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import firebase from "firebase";
import { db } from "../app/firebase";
function Feed() {
  // TODO work with react-flip-move
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(false);
  const displayPosts = posts.map((post) => {
    return (
      <Post
        key={post.id}
        id={post.id}
        name={post.name}
        description={post.description}
        message={post.message}
        photo={post.photo}
      />
    );
  });

  useEffect(() => {
    setLoader(true);
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((post) => ({
            id: post.id,
            ...post.data(),
          }))
        );
        setLoader(false);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message) {
      setError(true);
      return;
    }

    db.collection("posts").add({
      name: "Mina naeem",
      description: "description",
      message: message,
      photo: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setMessage("");
  };

  return (
    <>
      <div className="feed">
        <div className="feed__inputContainer">
          <div className={`feed__input ${error && "error"}`}>
            <CreateIcon />
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  setError(false);
                }}
              />
              <button type="submit">Send</button>
            </form>
          </div>

          <div className="feed__inputOptions">
            <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
            <InputOption
              Icon={SubscriptionsIcon}
              title="Video"
              color="#7FC15E"
            />
            <InputOption Icon={EventNoteIcon} title="Event" color="#E7A33E" />
            <InputOption
              Icon={CalendarViewDayIcon}
              title="Write article"
              color="#F5987E"
            />
          </div>
        </div>
        {loader === true ? (
          <SkeletonFeed />
        ) : (
          <FlipMove>{displayPosts}</FlipMove>
        )}
      </div>
    </>
  );
}

export default Feed;
