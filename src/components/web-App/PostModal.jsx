import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Modal from "react-modal";

const PostModal = ({ onClose }) => {
  const [changesMade, setChangesMade] = useState(false);
  const [isPostSuccessful, setIsPostSuccessful] = useState(false);

  const handleInputChange = () => {
    setChangesMade(true);
  };

  const handlePostSubmission = () => {
    setChangesMade(false);
    onClose();
    window.alert("Post successful");
    setTimeout(() => setIsPostSuccessful(true), 1000);
  };

  const handleModalClose = () => {
    if (changesMade) {
      const shouldClose = window.confirm(
        "You have unsaved changes. Do you really want to close?"
      );
      if (shouldClose) {
        setChangesMade(false);
        onClose();
      }
    } else {
      onClose();
    }
  };

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
    },
    content: {
      width: "30%",
      height: "40%",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
  };

  return (
    <div className="">
      <Modal
        isOpen={!isPostSuccessful} // Show the modal only if post is not successful
        onRequestClose={handleModalClose}
        style={customStyles}
        contentLabel="Post Modal"
      >
        <div className="flex w-full justify-end">
          <button type="button" onClick={onClose}>
            <FaTimes className="text-red" />
          </button>
        </div>
        <h2 className="text-center font-semibold text-[18px]">
          Create a New Post
        </h2>
        <form className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <label className="font-semibold w-[25%]" htmlFor="postTitle">
              Post Title:
            </label>
            <input
              type="text"
              id="postTitle"
              placeholder="Enter the title"
              className="w-full h-[48px] outline-none bg-[#D9D9D9] rounded-[8px] shadow-lg shadow-black/20 px-2"
              name="postTitle"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex items-center gap-4">
            <label htmlFor="postContent" className="w-[25%] font-semibold">
              Post Content:
            </label>
            <textarea
              id="postContent"
              name="postContent"
              placeholder="Type anything..."
              className="w-full px-2 bg-[#D9D9D9] rounded-[8px] shadow-lg outline-none shadow-black/20"
              rows="4"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex gap-4 w-full justify-end">
            <button
              className="bg-transparent text-black w-[20%] h-[48px] font-semibold"
              type="button"
              onClick={handlePostSubmission}
            >
              Save as draft
            </button>
            <button
              className="bg-red text-white w-[30%] h-[48px] rounded-[32px]"
              type="button"
              onClick={handlePostSubmission}
            >
              Submit Post
            </button>
          </div>
        </form>
      </Modal>

      {isPostSuccessful && (
        // Show success message if post is successful
        <div className="success-message">
          <p>Your post has been successfully submitted.</p>
        </div>
      )}
    </div>
  );
};

export default PostModal;
