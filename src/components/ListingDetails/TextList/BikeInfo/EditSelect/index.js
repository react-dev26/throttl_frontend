import React, { PropTypes, Component } from 'react';
import Select from 'react-select';
import fetch from 'isomorphic-fetch';


class EditSelect extends Component {
  static propTypes = {
    label: PropTypes.string,
  }
  static defaultProps = {
    label: null,
  }
  displayName: 'GithubUsers';
  constructor() {
    super();
    this.getUsers = this.getUsers.bind(this);
  }
  getInitialState() {
    return {
      backspaceRemoves: true,
      multi: true,
    };
  }
  onChange(val) {
    this.setState({
      value: val,
    });
  }
  getUsers(input) {
    if (!input) {
      return Promise.resolve({ options: [] });
    }
    return fetch(`https://api.github.com/search/users?q=${input}`)
    .then(response => response.json())
    .then(json => (
      { options: json.items }
    ));
  }
  switchToMulti() {
    this.setState({
      multi: true,
      value: [this.state.value],
    });
  }
  switchToSingle() {
    this.setState({
      multi: false,
      value: this.state.value ? this.state.value[0] : null,
    });
  }
  gotoUser(value) {
    window.open(value.html_url);
  }
  toggleBackspaceRemoves() {
    this.setState({
      backspaceRemoves: !this.state.backspaceRemoves,
    });
  }
  toggleCreatable() {
    this.setState({
      creatable: !this.state.creatable,
    });
  }
  render() {
    const AsyncComponent = this.state.creatable
    ? Select.AsyncCreatable
    : Select.Async;
    return (
      <div className="section">
        <AsyncComponent multi={this.state.multi} value={this.state.value} onChange={this.onChange} onValueClick={this.gotoUser} valueKey="id" labelKey="login" loadOptions={this.getUsers} backspaceRemoves={this.state.backspaceRemoves} />
      </div>
    );
  }
}
export default EditSelect;
