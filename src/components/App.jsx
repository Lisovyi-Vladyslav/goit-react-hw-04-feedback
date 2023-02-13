import { useState } from "react";
import ReactDOM from "react-dom";
import feedbackWidget from 'feedbackWidget.json';


import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section'
import { Notification } from 'components/Notification/Notification'
import { Component } from 'react';

 export const  App = () => {

   const [good, setGood] = useState(0);
   const [neutral, setNeutral] = useState(0);
   const [bad, setBad] = useState(0);
   
   const totalFeedback =() => good + neutral +bad;

  const positiveFeedback =() => Math.round((good/ totalFeedback()) * 100) + "%";


   const handleClick = e => {
     const { name } = e.target;
     switch (name) {
       case 'good':
         console.log('клік на good');
    setGood(prevState => (
      prevState + 1
    ));
        
    break;

       case 'neutral':
                  console.log('клік на neutral');
     setNeutral(prevState => (
      prevState + 1
     ));
    break;

       case 'bad':
         console.log('клік на bad');
         setBad(prevState => (
           prevState + 1
         ));
         break;
}
     
   };
   
   
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={(e) => handleClick(e)}/> 
        </Section>
         {totalFeedback() === 0 ? (
        <Notification message="There is no feedback"/>
      ) : (
        <Section title="Statics">
          <Statistics good={good} neutral={neutral} bad={bad} total={totalFeedback()} positivePercentage={positiveFeedback()} />
        </Section>
      )}
        
      </>
          
    );
  }

