import React from "react";

import "components/InterviewerList.scss";

import InterviewerListItem from "components/InterviewerListItem";

import PropTypes from "prop-types";

// Adding a PropTypes test:
// Note, this only worked when placed here, above the function.
InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
};

function InterviewerList(props) {
  // console.log(typeof props.interviewers);
  const interviewers = props.interviewers.map(interviewer => {
    return (
      <InterviewerListItem
        key={interviewer.id}
        id={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === props.value}
        setInterviewer={event => props.onChange(interviewer.id)}
      />
    );
  });



  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewers}</ul>
    </section>
  );
}

export default InterviewerList;
