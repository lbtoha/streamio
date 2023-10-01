import BlogDetailsLeft from "./BlogDetailsLeft";
import BlogDetailsRight from "./BlogDetailsRight";

const BlogDetailsPost = () => {
  return (
    // <!--genres section-->
    <section className="custom__space mr-24 ml-24 pb-100">
      <div className="container">
        <div className="row">
          <BlogDetailsLeft />
          <BlogDetailsRight />
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsPost;
