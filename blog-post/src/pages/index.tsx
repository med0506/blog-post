// import Navbar from "components/Navbar";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-800 h-screen text-center p-4">
      <h1 className="text-4xl text-indigo-600 tex-bold">
        {" "}
        This is a Blog post{" "}
      </h1>
    </div>
  );
};

export default Home;

/* 
  post:
    title,
    content,
    topic,
    createdAt,
    updatedAt,
    userId,
    user,
    comments,
    likes,
    likesCount,
    commentsCount,
    isLiked,
    isCommented,
    isOwner,
*/
