import React, { useState } from "react";
import ReplyBox from "./ReplyBox";
// import "./App.css";

function CommentBox({
	comment,
	allComments,
	addComment,
	deleteComment,
}: {
	comment: any;
	allComments: any;
	addComment: any;
	deleteComment: any;
}) {
	const [showReplyBox, setShowReplyBox] = useState(false);

	const handleReplyButton = () => {
		setShowReplyBox(!showReplyBox);
	};
	return (
		<div className="comment-container">
			<div className="comment-header">
				<p className="comment-value">{comment.value}</p>
				<div className="comment-action">
					<button className="reply-btn" onClick={handleReplyButton}>
						{showReplyBox ? "Cancel" : "Reply"}
					</button>
					<button
						className="delete-btn"
						onClick={() => deleteComment(comment.id)}
					>
						Delete
					</button>
				</div>
			</div>

			{showReplyBox && (
				<ReplyBox
					setShowReplyBox={setShowReplyBox}
					addComment={addComment}
					id={comment.id}
				/>
			)}
			<div className="nested-comments">
				{comment.children.map((item: any) => {
					return (
						<CommentBox
							key={item}
							comment={allComments[item]}
							allComments={allComments}
							addComment={addComment}
							deleteComment={deleteComment}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default CommentBox;
