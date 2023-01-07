import blog1 from "../assets/images/repositories/blog_1.png";
import blog2 from "../assets/images/repositories/blog_2.png";
import blog3 from "../assets/images/repositories/blog_3.png";
import portfolio from "../assets/images/repositories/portfolio.png";
import portfoliov2 from "../assets/images/repositories/portfolio-v2.png";
import quickstart from "../assets/images/repositories/quickstart.jpeg";
import cardportfolio from "../assets/images/repositories/cardportfolio.jpeg";
import imgGallery from "../assets/images/repositories/image_gallery.png";
import notebook from "../assets/images/repositories/notebook_app.png";
import devto from "../assets/images/repositories/devto.png";

export const repositories = [
  {
    title: "Portfolio1",
    description: "Personal portfolio app to show my skills and experience.",
    cover: portfoliov2,
    technologies: ["react", "chakraUi"],
    url: "https://github.com/MA-Ahmad/portfolio",
    live: "https://ma-ahmad.github.io/portfolio",
    blurHash: "L25#he^nryxc^-w$V{V_56bqx[M{",
    stars: "65",
    fork: "12"
  },
  {
    title: "Blogify",
    description: "A simple react+rails(RR) CRUD app with tailwindcss.",
    cover: blog3,
    technologies: ["rails", "tailwindCss"],
    url: "https://github.com/MA-Ahmad/react_rails_blog",
    live: "https://react-on-rails-blog.herokuapp.com",
    blurHash: "L6O;6=00M|og00_4_4s:E9-oxVoL",
    stars: "4"
  },

  {
    title: "FakeNewsDetector",
    description: "tensorflow machine learning rnn-model/gru-model",
    technologies: ["python", "tensorflow", "pytorch"],
    url: "https://github.com/mymyxtran/FakeNewsDetector",
    blurHash: "L4S~x5xb~q$*~WR6MykCx^Vt4TtP",
    stars: '0',
    fork: '0'
  }
  // {
  //   title: "Video-to-text",
  //   description: "Convert a video to text using ruby.",
  //   cover: "",
  //   technologies: ["ruby"],
  //   url: "https://github.com/MA-Ahmad/Video-to-text",
  //   blurHash: "L4S~x5xb~q$*~WR6MykCx^Vt4TtP",
  //   stars: "3"
  // },
  // {
  //   title: "Authentication API",
  //   description:
  //     "Simple Authentication API that can be used with any front-end app like React, Vue, Angular app.",
  //   technologies: ["ruby", "rails"],
  //   url: "https://github.com/MA-Ahmad/rails-authentication-app",
  //   blurHash: "L4S~x5xb~q$*~WR6MykCx^Vt4TtP",
  //   stars: "2"
  // }
];
