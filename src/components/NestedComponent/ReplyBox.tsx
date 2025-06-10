import React, { useState } from "react";

function ReplyBox({
	setShowReplyBox,
	addComment,
	id,
}: {
	setShowReplyBox: any;
	addComment: any;
	id: number;
}) {
	const [showReply, setShowReply] = useState("");

	const handlePostReply = () => {
		addComment(showReply, id);
		setShowReply("");
		setShowReplyBox(false);
	};
	return (
		<div className="reply-form">
			<textarea
				className="post-comment-area"
				value={showReply}
				onChange={(e: any) => setShowReply(e.target.value)}
				placeholder="Write your reply here..."
			></textarea>
			<button className="post-reply-btn" onClick={handlePostReply}>
				Post Reply
			</button>
		</div>
	);
}

export default ReplyBox;
