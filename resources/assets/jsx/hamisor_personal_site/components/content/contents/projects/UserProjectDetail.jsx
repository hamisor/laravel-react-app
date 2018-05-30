import React	    from "react";
import PropTypes    from "prop-types";
import Uuid         from 'uuid';

class UserProjectDetail extends React.Component
{
    render()
    {
        return  <div className="userProjectDetail">
                    <h4>{this.props.projectTitle}</h4>
                    <p>{this.props.projectDescription}</p>
                    <h6>Tech Keywords:</h6>
                    <ul>
                        {this.props.techKeywords.map(item_keyword => <li key={Uuid()}>{item_keyword}</li>)}
                    </ul>
                    {
                        this.props.demoUrl ? <a href={this.props.demoUrl}
                                                   className="btn btn-primary"
                                                   role="button"
                                                   target="_blank">View</a>
                                            : null
                    }
                    { this.props.note    ? <p>{`Note: ${this.props.note}`}</p> : null }
                </div>
    }
}

UserProjectDetail.propTypes =
{
    projectTitle:       PropTypes.string.isRequired,
    projectDescription: PropTypes.string.isRequired,
    techKeywords:  		PropTypes.array.isRequired,
    note:               PropTypes.string,
    demoUrl:  	        PropTypes.string,
};

export default UserProjectDetail
