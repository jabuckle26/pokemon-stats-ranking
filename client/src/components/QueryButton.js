import React from 'react'

export const QueryButton = (props) => {

    const getButtonStyle = () => {
        if (props.param === "type") {
            return `typeButton ${props.queryParam.toLowerCase()} ${props.selectedParam === props.queryParam ? "selected" : "" } `
        } else if (props.param === "stat") {
            return `statQuery ${props.selectedParam === props.queryParam ? 'selected' : ''}`;
        }

        let classNames = props.param === "type" ? `typeButton ${props.queryParam.toLowerCase()}` : `statQuery ${props.queryParam}`;
        if (props.selectedParam === props.queryParam) {
            classNames += 'selected';
        }

        return classNames;
    }
    
    const handleButtonClick = (buttonTextContent)  => {
        const textContentToSet = (props.selectedParam === buttonTextContent) ? "" : buttonTextContent;
        props.queryAction(textContentToSet);
    }
    
    return (
        <p 
        className={getButtonStyle()}
        onClick={(e) => handleButtonClick(e.target.textContent)}>
            {props.queryParam}
        </p>
    )
}
