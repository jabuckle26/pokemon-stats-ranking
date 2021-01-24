import React from 'react'
import { GoMarkGithub } from 'react-icons/go';
import { FaGripVertical } from 'react-icons/fa';

export const Banner = () => {
    return (
        <div className="container my-1">
                <div className="col-sm">
                    <FaGripVertical className="col-sm"/>
                </div>
                <div className="col-sm">
                    <h1 className="col-sm">Pokemon Stat Checker</h1>
                </div>
                <div className="col-sm">
                    <GoMarkGithub className="col-sm"/>
                </div>
        </div>
    )
}
