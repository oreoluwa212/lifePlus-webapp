// CommunityForumPage.js
import React, { useState, useEffect } from "react";
import SideBar from "../../components/web-App/SideBar";
import PostModal from "../../components/web-App/PostModal";
import Modal from "react-modal";
import { PiMagnifyingGlassFill, PiPlusBold } from "react-icons/pi";
import { TiArrowBack } from "react-icons/ti";
import { BiSolidBookmarkAltPlus } from "react-icons/bi";
import Header from "../../components/web-App/Header";
import { FaThumbsUp } from "react-icons/fa";
import { get, post } from "../../helpers/axios.helper";
import { DateTime } from "luxon";

const CommunityForumPage = () => {
  const loggedInUser = JSON.parse(localStorage.getItem("user"));
  const [isOpen, setIsOpen] = useState(false);
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [commentStates, setCommentStates] = useState([]);
  const [comment, setComment] = useState(null);
  const [discussions, setAllDiscussions] = useState([]);
  const [isPostingComment, setIsPostingComment] = useState(false);

  const handlePostSubmission = () => {
    // Perform any necessary actions on post submission
    getAllDiscussions();
  };

  const postComment = async (discussionID, userID) => {
    try {
      setIsPostingComment(true);
      let data = {
        discussion_id: discussionID,
        commented_by: userID,
        comment_to_add: comment,
      };
      await post("/create-comment", data);
      setShowCommentModal(false);
      setIsPostingComment(false);
      setComment(null);
    } catch (err) {
      console.log(err);
    }
  };

  const toggleCommentModal = (index, state) => {
    const updatedCommentStates = [...commentStates];
    updatedCommentStates[index] = state;
    setCommentStates(updatedCommentStates);
  };

  const calculateTimeDifference = (postDate) => {
    const currentDate = DateTime.now();
    const diff = currentDate.diff(DateTime.fromISO(postDate));

    if (diff.as("days") > 1) {
      return `${Math.floor(diff.as("days"))} days ago`;
    } else if (diff.as("hours") > 1) {
      return `${Math.floor(diff.as("hours"))} hours ago`;
    } else if (diff.as("minutes") > 1) {
      return `${Math.floor(diff.as("minutes"))} minutes ago`;
    } else {
      return "just now";
    }
  };

  const getAllDiscussions = async () => {
    try {
      let data = await get("/all-discussion");
      console.log(data);
      setAllDiscussions(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    Modal.setAppElement("#root");
    getAllDiscussions();
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex flex-row h-screen w-full">
      <SideBar isOpen={isOpen} />
      <div className="lgss:w-4/5 w-full lgss:overflow-auto">
        <div className="lgss:w-full lgss:h-full lgss:flex-1 lgss:overflow lgss:px-[4%] flex flex-col ">
          <div className="flex w-full">
            <div className="flex justify-between lgss:w-[20%] lgss:gap-7 lgss:items-center ">
              <div className=" text-[34px] text-gold font-semibold px-4 lgss:px-0 hidden lgss:flex">
                <h1>Forum</h1>
              </div>
            </div>
            <div className="w-[75%]">
              {loggedInUser && (
                <Header
                  setIsOpen={setIsOpen}
                  isOpen={isOpen}
                  currentUser={loggedInUser}
                />
              )}
            </div>
          </div>

          <div className="flex flex-col gap-9 mt-4 lgss:mt-10 px-[5%] mds:px-0">
            <button
              onClick={openModal}
              className="bg-[#F3E4E4] w-[40%] lgss:w-[14%] h-[50px] border-red border-[2px] rounded-[16px] text-red font-semibold text-[18px] lgss:text-[20px] shadow-lg shadow-red/30 flex justify-between items-center px-4"
            >
              <span>
                <PiPlusBold />{" "}
              </span>{" "}
              Make a Post
            </button>
            {discussions &&
              discussions.map((discussion, index) => {
                return (
                  <div
                    key={discussion._id}
                    className="flex flex-col w-[90%] gap-5"
                  >
                    <div className="bg-[#F3E4E4] lgss:mt-4 shadow-md shadow-red/30 lgss:w-[90%] w-full flex flex-col gap-4 rounded-[32px] p-6">
                      <div className="flex justify-between w-full">
                        <h2 className="text-gold font-bold">
                          {discussion.title}
                        </h2>
                        <h2 className="text-red font-bold">
                          Posted{" "}
                          <span>
                            {calculateTimeDifference(discussion.createdAt)}
                          </span>
                        </h2>
                      </div>
                      <h4 className="flex flex-col w-full px-10 justify-between gap-2 list-disc font-semibold">
                        {discussion.content}
                      </h4>
                      {commentStates[index] ? (
                        <div className="flex flex-col justify-end items-end">
                          <textarea
                            name={`comment-${index}`}
                            id={`comment-${index}`}
                            cols="10"
                            rows="3"
                            placeholder="type your comment here..."
                            className="w-full px-3 border-[1px] border-red rounded-[8px]"
                            onChange={(e) => {
                              setComment(e.target.value);
                            }}
                          ></textarea>
                          {!comment ? (
                            <button
                              className="bg-red/20 mt-3 text-red font-bold w-[100px] p-2 rounded-[8px]"
                              onClick={() => toggleCommentModal(index, false)}
                            >
                              Cancel
                            </button>
                          ) : (
                            <button
                              className="bg-red/20 mt-3 text-red font-bold w-[100px] p-2 rounded-[8px]"
                              onClick={() =>
                                postComment(discussion._id, loggedInUser._id)
                              }
                              disabled={isPostingComment}
                            >
                              {isPostingComment ? "Posting..." : "Comment"}
                            </button>
                          )}
                        </div>
                      ) : (
                        <></>
                      )}
                      <div className="lgss:w-[70%] flex px-2 justify-between items-center text-red">
                        <div className="flex justify-center items-center text-[16px] gap-2">
                          <FaThumbsUp />
                          <button className="text-[18px] font-semibold">
                            Like
                          </button>
                        </div>
                        <div className="flex justify-center items-center text-[26px] gap-2">
                          <TiArrowBack />
                          <button
                            onClick={() => toggleCommentModal(index, true)}
                            className="text-[18px] font-semibold"
                          >
                            Reply
                          </button>
                        </div>
                        <div className="flex justify-center items-center text-[20px] gap-2">
                          <BiSolidBookmarkAltPlus />
                          <button className="text-[18px] font-semibold">
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

            <div className="">
              <button className="bg-red px-2 h-[50px] lgss:w-[30%] w-[60%] rounded-[32px] text-white font-medium text-[16px] lgss:text-[18px]">
                Proceed to Donate Blood
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} onRequestClose={closeModal} className={"w-0"}>
        <PostModal onClose={closeModal} onPostSubmit={handlePostSubmission} />
      </Modal>
    </div>
  );
};

export default CommunityForumPage;
