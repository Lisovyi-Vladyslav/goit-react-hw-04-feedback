import PropTypes from "prop-types";

import feedbackWidget from 'feedbackWidget.json';


export const Statistics = (props) => {
  // console.log(props);
    return (
      <>
       

          <ul>
            {
              feedbackWidget.map(({id, title}) => (
                <li key={id}>
                  <span> {title}: {props[id]}</span>
                </li>
              ))}
        </ul>
       </>
  );
};

Statistics.propTypes = {
  positivePercentage: PropTypes.number,
  total: PropTypes.number,
  bad: PropTypes.number,
  neutral: PropTypes.number,
  good: PropTypes.number,
 
};