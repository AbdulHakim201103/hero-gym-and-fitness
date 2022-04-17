import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div className='text-center bg-light container p-5 my-5 rounded'>
                <h2 className='text-danger my-5'>Authentication  ও Authorzation এর মধ্যে পাথক্য কি?</h2>
                <p><span className='text-success my-3'>Authentication:</span> কোন ব্যক্তি, কোন বস্তু,কারো কোনো Act (যা সঠিক বলে দাবি করা হচ্ছে) প্রকৃত পক্ষে সত্যি কি না তা নির্ণয় করা প্রক্রিয়া।</p>
                <p><span className='text-success my-3'>Authorzation:</span> কাউকে কোন কাজ করার জন্য বা কোন Resources ব্যবহার করতে পারার Permission দেওয়ার প্রক্রিয়া।</p>
            </div>
            <div className='text-center bg-light container p-5 my-5 rounded'>
                <h2 className='text-danger my-5'>Firebase এ Authentication ছাড়া আর কি কি করা যায়?</h2>
                <p>ফায়ারবেজ হচ্ছে গুগলের একাটি প্ল্যাটফর্ম।যা ডেভেলাপারদের অ্যাপ্লিকেশন ডেভেলাপ করার জন্য বিভিন্ন সার্ভিস দিয়ে থাকে।Firebase এ Authentication ছাড়া ও আর অনেক কিছু করা যায়। যেমন ডেটাবেজ, স্টোরেজ, হোস্টিং, ক্লাউড ফাংশন ইত্যাদি।</p>
            </div>
        </div>
    );
};

export default Blog;