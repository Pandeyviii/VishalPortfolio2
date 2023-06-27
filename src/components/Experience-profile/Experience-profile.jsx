import React from 'react'
import './Experience-profile.css'
import {FaRegHandPointRight} from 'react-icons/fa'
import {FiCornerUpRight} from 'react-icons/fi'
import {AiOutlineLink} from 'react-icons/ai'
const Experience = () => {
    return (
        <section id='skills'>
          <h2> My Experiences</h2>
          <div className="container experience__container">
            {/* backend */}
            <div className='experience__backend'>
            <h1>Sharpener Tech</h1>
            <h2>Full Stack Developer</h2>
            <h3>(28-02-2023 - 10-07-2023)</h3>
              <div className="experience__content">
                <article className='experience__details'>
                  <FaRegHandPointRight className='experience__details-icon'/>
                  <div>
                  <h2>Expense Tracker</h2>
                  <h4> <FaRegHandPointRight /> Created an expense tracker where a user can login, signup , add and
    remove expenses and also download the reports of expenses </h4>
    
                  <h5><FiCornerUpRight/> Added authentication for the user using JWT token.</h5>
                  <h5><FiCornerUpRight/> Used Bcrypt library for encryption to store passwords in the database.</h5>
                  <h5><FiCornerUpRight/> Integrated Razorpay payment gateway.</h5>
                  <h5><FiCornerUpRight/> Integrated SendGrid for reset password link</h5>
                  <h5><FiCornerUpRight/> Added pagination for the expenses page.</h5>
                  <h5><FiCornerUpRight/> Added report generation using AWS S3 Bucket for premium users.</h5>
                  <h5><FiCornerUpRight/> Added a leaderboard list for premium Users.</h5>
                  <h3 className="hoo"><a href="https://github.com/Pandeyviii/expenseTracker"><AiOutlineLink/> Expense Tracker </a></h3>
    
                  </div>
                  
                </article>
                <article className='experience__details'>
                  <FaRegHandPointRight className='experience__details-icon'/>
                  <div>
                  <h2>Group Chat Application</h2>
                  <h4> <FaRegHandPointRight /> Created a group chat application where a users can login and send and
    receive messages. </h4>
                  <h5><FiCornerUpRight/> Used Bcrypt library for encryption to store passwords in the database.</h5>
                  <h5><FiCornerUpRight/> Designed schema for chats, users, and groups and set up associations
    among them.</h5>
                  <h5><FiCornerUpRight/>  Followed MVC [Model View Controller] pattern.
    </h5>
                  <h5><FiCornerUpRight/> User can create and delete multiple groups.</h5>
                  <h5><FiCornerUpRight/> Implemented an Admin feature for the group that can add and remove
    users.</h5>
                  <h5><FiCornerUpRight/> Users also can make other users admin and give them admin features.</h5>
                  <h3 className="hoo"><a href="https://github.com/Pandeyviii/Group-Chat-App"> <AiOutlineLink/>   Group Chat App </a></h3>
    
                  </div>
                  
                </article>
    
              </div>
              </div>
              {/* otherskills */}
              <div className='experience__otherskills'>
              <h1>Netcracker Technology</h1>
              <h2>QA(Internship)</h2>
              <h3>(16-03-2022 - 16-09-2022)</h3>
              <div className="experience__content">
                <article className='experience__details'>
                  <FaRegHandPointRight className='experience__details-icon'/>
                  <div>
                  <h2>QA Tester</h2>
                  <h5><FiCornerUpRight/> Design and implement test scenarios and Test cases.</h5>
                  <h5><FiCornerUpRight/> Create and implement the plan and Test Scripts.</h5>
                  <h5><FiCornerUpRight/>Software defect discovery, tracking, and Reporting</h5>
                  </div>
                  
                </article>
    
    
              </div>
            </div>
          </div>
        </section>
      )
}

export default Experience