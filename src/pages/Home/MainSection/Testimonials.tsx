import React, { useCallback, useEffect, useState } from 'react';

import comments from '../../../data/comments';

import './Main.scss';
import CommentCard from '../../../components/Comment/Comment';

const Testimonials: React.FC = (): JSX.Element => {
  const [selectedComments, setSelectedComments] = useState<Comment[] | null>(null);
  const [isPrevCommentBtn, setIsPrevCommentBtn] = useState(false);
  const [isNextCommentBtn, setIsNextCommentBtn] = useState(false);
  const [toggleTestimonialsSwitcher, setToggleTestimonialsSwitcher] = useState('');

  const selectComment = useCallback((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const getIndexOfComment = (comment: any): number => (
      comments.findIndex((item: any) => item.id === comment.id)
    );

    event.stopPropagation();
    let newComments = null;
    const { id } = event.target as HTMLDivElement;
    if (id === 'next'
      && selectedComments && selectedComments.length > 1) {
      const currentComment = selectedComments[1];
      const currentIndex = getIndexOfComment(currentComment);
      const nextCommentIndex = (
        (currentIndex === comments.length - 1) ? 0 : (currentIndex + 1)
      );
      newComments = [currentComment, comments[nextCommentIndex]];
      setSelectedComments(newComments);
    }
    if (id === 'prev'
      && selectedComments && selectedComments.length > 1) {
      const currentComment = selectedComments[0];
      const currentIndex = getIndexOfComment(currentComment);
      const nextCommentIndex = (
        (currentIndex === 0) ? comments.length - 1 : (currentIndex - 1)
      );
      newComments = [comments[nextCommentIndex], currentComment];
      setSelectedComments(newComments);
    }
    setToggleTestimonialsSwitcher(id);
  }, [selectedComments, setSelectedComments]);

  useEffect(() => {
    if (!comments || comments.length === 0) return;

    let newComments = null;
    if (comments.length > 1) {
      newComments = [comments[0], comments[1]];
      setIsPrevCommentBtn(true);
      setIsNextCommentBtn(true);
    }

    setSelectedComments(newComments || comments);
  }, []);

  return (
    <section className="main_section main_testimonials">
      <h2 className="main_title">
        Testimonials
      </h2>

      <div
        role="button"
        tabIndex={0}
        className="main_testimonials_content"
        onClick={selectComment}
        onKeyDown={() => {}}
      >

        <div
          id="prev"
          className={`main_testimonials_comments_selector ${
            isPrevCommentBtn && 'main_testimonials_comments_selector__prev'
          }`}
        />
        <div className="main_testimonials_comments">
          {selectedComments && selectedComments.map((comment: any) => (
            <div key={comment.id} className="main_testimonials_comment">
              <CommentCard comment={comment} />
            </div>
          ))}
        </div>
        <div
          id="next"
          className={`main_testimonials_comments_selector ${
            isNextCommentBtn && 'main_testimonials_comments_selector__next'
          }`}
        />

      </div>

      <div
        role="button"
        tabIndex={0}
        className="main_testimonials_switcher"
        onClick={selectComment}
        onKeyDown={() => {}}
      >
        {toggleTestimonialsSwitcher === 'prev' ? (
          <div id="prev" className="main_dots main_dots__active" />
        ) : (
          <div id="prev" className="main_dots main_dots__passive" />
        )}
        {isPrevCommentBtn && isNextCommentBtn ? (
          <div id="center" className="main_dots main_dots__active" />
        ) : (
          <div id="center" className="main_dots main_dots__passive" />
        )}
        {toggleTestimonialsSwitcher === 'next' ? (
          <div id="next" className="main_dots main_dots__active" />
        ) : (
          <div id="next" className="main_dots main_dots__passive" />
        )}
      </div>
    </section>
  );
};

export default Testimonials;
