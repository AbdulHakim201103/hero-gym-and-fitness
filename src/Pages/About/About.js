import React from "react";
import abdulhakim from "../../images/abdulhakim.jpeg";
import "./About.css";

const About = () => {
  return (
    <div className="about container rounded bg-light my-5">
      <div className="p-5">
        <img className="img img-fluid" src={abdulhakim} alt="" />
      </div>
      <div className=" p-5 ">
        <h2 className="text-danger text-center mb-5">My Next Goal</h2>
        <p>
          আমার নাম আব্দুল হাকিম মিয়া । আমি জাতীয় বিশ্ববিদ্যালয়ের হিসাববিজ্ঞান বিভাগের ছাত্র। আমি
          ভিন্ন গ্রুপের হওয়ার কারনে নিজের সর্বোচ্চ টা দিয়ে চেষ্টা করে যাচ্ছি ।আমি আশা করি এই কোর্স
          শেষ নিজেকে একজন Junior Developer হিসাবে দেখা পাবো এবং পরবর্তীতে চার পাঁচ মাস পর নিজের কোন
          একটা কোম্পানিতে চাকরি রত অবস্থায় দেখে চাই। আমি চেষ্টা করছি এবং আমি বিশ্বাস করি, আমি আমার
          লক্ষ্য পৌঁছাতে পারবো ইনসাআল্লাহ।
        </p>
      </div>
    </div>
  );
};

export default About;
