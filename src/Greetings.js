import React from "react";

//const Greetings = (props) => <div>Hey You! {props.firstName} {props.lastName}!</div>;
//     //could also be const Greetings = ({firstName,lastName}) => <div>Hey You! {firstName, lastName}!<div>;
//     //useful when only accessing a few  properties of an object

const Greetings = ({ firstName, lastName}) => (
    <div>
        Hey you! {firstName} {lastName}!
    </div>
);

export default Greetings;