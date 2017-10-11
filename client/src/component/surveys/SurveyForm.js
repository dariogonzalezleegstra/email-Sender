import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import _ from 'lodash';
import {Link} from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';


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
            <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
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

function validate(values) {
    const errors = {};

    errors.emails = validateEmails(values.emails || '');

    _.each(FIELDS, ({name}) => {
        //With values[name] we access to the key assigned to "name" (which will changes in every loop)
        if (!values[name]) {
            errors[name] = 'Please, write a ' + name + ' for the survey';
        }
    });

    return errors;
}


export default reduxForm({
    validate,
    form: 'surveyForm'
})(SurveyForm);