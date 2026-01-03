import React from "react";
import "./Home.css";
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="details">
        <div className="header-content">
          <h1>
            <span id="color">Make your</span> body into shape
          </h1>
          <p>
            You do not have to be great to start,
            <span> but you have to start to be great</span>
          </p>
          <Link to="/signup" className="btn">
            Enroll Now
          </Link>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <h1>About Us</h1>
       <pre>Welcome to [Gym Name], where fitness meets lifestyle! Our state-of-the-art facility is designed to
            help you achieve your health and fitness goals, whether you're a beginner or a seasoned athlete.
            Equipped with the latest exercise machines, free weights, and specialized training zones, we offer a
            wide range of activities to suit every fitness level.

            Our certified trainers are here to guide you through personalized workout plans, ensuring you make
            the most of your time at the gym. We also offer group classes, including yoga, spin, HIIT, and more,
            to keep your routine dynamic and enjoyable.
            
            At [Gym Name], we believe in creating a supportive and motivating environment. Whether you're
            looking to build strength, increase endurance, or improve overall wellness, our gym is the perfect
            place to start your journey. Join us today and become part of a community that is as committed to 
            your success as you are!</pre>
      </section>

      {/* PROGRAMS */}
      <section id="features" className="section">
        <h1>
          Our <span>Programs</span>
        </h1>

        <div className="all-box">
          <div className="feature-box">
            <h2>Strength / Free Weights</h2>
            <p>
              Our weight training program offers customized workouts designed for all fitness levels, 
               guided by expert trainers who ensure proper technique and progression. We focus on a balanced approach,
               targeting all major muscle groups through both compound and isolation exercises.
               With regular progress tracking, emphasis on safety, and flexible scheduling,
               our program is tailored to help you achieve your strength goals efficiently. 
               Plus, you'll be part of a supportive community that keeps you motivated and accountable.
            </p>
          </div>

          <div className="feature-box">
            <h2>Functional Training</h2>
            <p>
              Our functional training program is designed to enhance your overall strength, agility,
               and mobility through dynamic, full-body workouts. Tailored to your fitness level, 
               our expert trainers focus on exercises that mimic real-life movements, improving your performance in daily activities.
               We emphasize proper technique and safety, with regular progress tracking to ensure continuous improvement.
               Flexible scheduling and a supportive community make it easy to stay consistent and motivated on your fitness journey.
            </p>
          </div>

          <div className="feature-box">
            <h2>Cardio</h2>
            <p>
              Our cardio training program is crafted to boost your cardiovascular health, endurance,
                 and calorie burn through varied and engaging workouts. Whether you're a beginner or advanced, 
                 our expert trainers customize sessions to match your fitness level and goals. 
                 We incorporate a mix of high-intensity intervals and steady-state exercises to maximize results.
                 With a focus on proper technique and safety, along with flexible scheduling and a motivating community,
                 our program helps you stay on track and achieve your fitness objectives.
            </p>
          </div>

          <div className="feature-box">
            <h2>Coaching Services</h2>
            <p>
              Our training and coaching services offer personalized guidance to help you reach your fitness goals efficiently and safely.
               Our certified trainers create customized workout plans tailored to your individual needs, whether you're focusing on strength,
               endurance, or overall fitness. We provide one-on-one coaching to ensure proper technique, minimize injury risk, and optimize results.
               With regular progress assessments, flexible scheduling, 
               our services are designed to keep you motivated and on track for long-term success.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <form className="contact-form">
          <div className="container1">
            <h1 className="heading1">
              <span>Contact</span> Details
            </h1>

            <div className="contact-method">
              <div className="method">
                <i className="fas fa-envelope"></i>
                <p>Email: MyGym@gmail.com</p>
              </div>

              <div className="method">
                <i className="fas fa-phone"></i>
                <p>Phone: +91 9803*****</p>
              </div>
            </div>
          </div>

          <div className="all-input">
            <h1>
              Contact <span>Us</span>
            </h1>

            <input className="input" type="text" placeholder="Your Name" required />
            <input className="input" type="email" placeholder="Your Email" required />
            <textarea className="input" placeholder="Your Message" required></textarea>

            <button type="submit" className="btn">
              Send Message
            </button>
          </div>
        </form>

        <footer className="footer">
          <p>© 2024 My GYM. All rights reserved.</p>
        </footer>
      </section>
    </>
  );
};

export default Home;
