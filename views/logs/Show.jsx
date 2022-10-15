const React = require('react');

class Show extends React.Component {
    render() {
        const { title, entry, shipIsBroken, _id } = this.props.log
        const capTitle = title[0].toUpperCase() + title.substring(1)
        return (
            <>
                <h1> {capTitle} Show Page </h1>
                    <nav>
                        <a href='/logs'>Back To Fruits Home</a> <br />
                        <a href={`/logs/${_id}/edit`}>{`Edit the ${capTitle}`}</a>
                    </nav>
                <p>{capTitle} logged on {entry} and {shipIsBroken ? `is broken` : `is not broken`}</p>
            </>
        )
    }
}
module.exports = Show; 