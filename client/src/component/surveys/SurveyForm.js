import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import _ from 'lodash';
import {Link} from 'react-router-dom';
import SurveyField from './SurveyField';

const FIELDS = [
    {label: 'Survey Title', name: 'title'},
    {label: 'Subject Line', name: 'subject'},
    {label: 'Email Body', name: 'body'},
    {label: 'Recipient List', name: 'emails'}
];

class SurveyForm extends Component {
    renderFields() {
        return _.map(FIELDS, ({label, name}) => {
            return (
                <Field
                    key={name}
                    component={SurveyField}
                    type="text"
                    label={label}
                    name={name}
                />
            );
        });
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                {this.renderFields()}
                <Link to="/surveys" className="btn-flat white-text red">
                    Cancel
                </Link>
                <button type="submit" className="teal btn-flat right white-text green">
                    Continue <i className="material-icons right">done</i>
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyForm);