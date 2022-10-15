const React = require('react');
const Default = require("./layouts/Default")

class Show extends React.Component {
    render() {
        const { title, entry, shipIsBroken, _id } = this.props.log
        const capTitle = title[0].toUpperCase() + title.substring(1)
        return (
            <Default title={`${capTitle}'s Log Entry`} log={this.props.log}>
                <p>{capTitle} logged on {entry} and {shipIsBroken ? `is broken` : `is not broken`}</p>
            </Default>
        )
    }
}
module.exports = Show; 