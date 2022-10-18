const React = require('react');
const Default = require("./layouts/Default")

class Show extends React.Component {
    render() {
        const { title, entry, shipIsBroken, _id } = this.props.log
        const capTitle = title[0].toUpperCase() + title.substring(1)
        return (
            <Default title={`${capTitle}`} log={this.props.log}>
                <h2>Daily Log Entries</h2>
                <p>{entry} {capTitle} {shipIsBroken ? `is currently broken` : `is not broken`}</p>
            </Default>
        )
    }
}
module.exports = Show; 