// =============================
// Utils.js
// =============================
Array.eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);

String.prototype.titleCase = function () {
  return this.toLowerCase().replace('_', ' ').split(' ').map(function (word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
};

// =============================
// components/Calculator.js
// =============================
class Calculator extends React.Component {
  constructor(props) {
    super(props);

    const defaultState = {
      future_value: 0,
      annual_retirement_income: 0,
      on_track: true,
      years_data: [] };


    this.state = { ...defaultState, ...this.props };
  }

  componentWillMount() {
    this.calculate();
  }

  componentDidMount() {
    this.renderChart();
  }

  shouldComponentUpdate(nextProps, nextState) {
    let dirty = false;
    let changed = [];

    for (let item in this.state) {
      if (Array.isArray(nextState[item])) {
        if (Array.eq(nextState[item], this.state[item])) continue;
        changed.push(item);
        dirty = true;
      } else {
        if (nextState[item] === this.state[item]) continue;
        changed.push(item);
        dirty = true;
      }
    }

    return dirty;
  }

  componentDidUpdate() {
    this.calculate();
    this.renderChart();
  }

  render() {
    const { future_value, annual_retirement_income } = this.state;

    return (
      React.createElement("div", { className: "row" },
      React.createElement("div", { className: "calc-form col-md-6" },

      Object.keys(this.props).map(name => {
        return (
          React.createElement(NumberInput, {
            name: name,
            value: this.state[name],
            saveToState: this.saveToState.bind(this) }));


      })),


      React.createElement("div", { className: "col-md-6" },
      React.createElement("div", { id: "myChart", className: "chart" }),
      React.createElement(InfoBox, { msg: `Total Retirement Savings: ${this.toUsd(future_value)}`, type: "info" }),
      React.createElement(InfoBox, {
        msg: `Annual Retirement Income: ${this.toUsd(annual_retirement_income)}`,
        type: this.state.on_track ? "success" : "danger" }))));





  }

  renderChart() {
    const labels = this.getChartLabels();
    const config = {
      id: "myChart",
      data: {
        "scale-x": { labels },
        type: "area",
        title: { text: "Piggy Bank" },
        series: [{ values: this.state.years_data }] } };


    zingchart.render(config);
  }

  getChartLabels() {
    const years = Array.from(new Array(this.getYearsUntilRetirement()));
    return years.map((_, i) => i + this.state.current_age + 1);
  }

  getYearsUntilRetirement() {
    const { current_age, retirement_age } = this.state;
    return retirement_age - current_age;
  }

  saveToState(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  calculate() {
    const { years_after_retirement, desired_retirement_income } = this.state;
    const { future_value, years_data } = this.futureValue();
    const annual_retirement_income = future_value / years_after_retirement;
    const on_track = annual_retirement_income > desired_retirement_income ? true : false;

    this.setState({
      years_data,
      future_value: this.toUsd(future_value),
      annual_retirement_income: this.toUsd(annual_retirement_income),
      on_track });

  }

  futureValue() {
    const {
      current_age,
      retirement_age,
      annual_deposit,
      interest_rate,
      current_savings } =
    this.state;

    const int = interest_rate / 100;
    const years_data = [];
    const years_until_retirement = Array.from(new Array(this.getYearsUntilRetirement()));
    const future_value = years_until_retirement.reduce(sum => {
      const last_year_plus_annual_deposit = sum + annual_deposit;
      const interest_earned = last_year_plus_annual_deposit * int;
      const new_sum = parseFloat((last_year_plus_annual_deposit + interest_earned).toFixed(2));

      years_data.push(new_sum);
      return new_sum;
    }, current_savings);

    return { future_value, years_data };
  }

  toUsd(number) {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD" });

  }}


// =============================
// components/InfoBox.js
// =============================
class InfoBox extends React.Component {
  render() {
    return (
      React.createElement("div", { className: `alert alert-${this.props.type}` },
      this.props.msg));


  }}


// =============================
// components/NumberInput.js
// =============================
class NumberInput extends React.Component {
  render() {
    const { name, value, saveToState } = this.props;

    return (
      React.createElement("div", { className: "form-group" },
      React.createElement("label", { for: name }, name.titleCase()),
      React.createElement("input", {
        type: "number",
        name: name,
        className: "form-control",
        value: value,
        onChange: saveToState })));



  }}


// =============================
// index.js
// =============================
const initial_data = {
  current_age: 25,
  retirement_age: 68,
  current_savings: 1000,
  annual_deposit: 6000,
  interest_rate: 8,
  years_after_retirement: 20,
  desired_retirement_income: 100000 };


ReactDOM.render(
React.createElement(Calculator, initial_data),
document.getElementById("calculator"));