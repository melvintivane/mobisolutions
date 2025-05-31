import React from "react";
import { toast } from "react-toastify";

const BlogForm = () => {
  const handleComment = (event) => {
    event.preventDefault();
    event.target.reset();
    toast.success("Obrigado pelo seu comentário!");
  };

  return (
    <>
      <div className="comments-form">
        <div className="title">
          <h3>Deixe um comentário</h3>
        </div>
        <form className="contact-comments" onSubmit={handleComment}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  name="name"
                  className="form-control"
                  placeholder="Nome *"
                  type="text"
                  autoComplete="off"
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  name="email"
                  className="form-control"
                  placeholder="Email *"
                  type="email"
                  autoComplete="off"
                  required
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group comments">
                <textarea
                  className="form-control"
                  name="Comment"
                  placeholder="Comentário"
                  autoComplete="off"
                  required
                ></textarea>
              </div>
              <div className="form-group full-width submit">
                <button className="btn dark border" type="submit">
                  Postar Comentário
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default BlogForm;
