export default function CommentList({ comments }) {
  const renderedComments = comments.map((comment) => {
    let content;
    if (comment.status === 'approved') {
      content = comment.content;
    }
    if (comment.status === 'pending') {
      content = '[Awaiting confirmation]';
    }
    if (comment.status === 'rejected') {
      content = '[Comment removed]';
    }
    return <li key={comment.id}>{content}</li>;
  });
  return <ul>{renderedComments}</ul>;
}
