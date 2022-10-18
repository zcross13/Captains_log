const React = require('react')

class Default extends React.Component {
    render(){
        const {log, title} = this.props
        console.log(this.props)
        return(
            <html>
                <head>
                    <link rel='stylesheet' href="/css/app.css"></link>
                    <title>{title}</title>
                </head>
                <body>
                    <nav>
                        <a href='/logs'>Go to Log Home Page</a> <br/>
                        <a href="/logs/new">Create a New Log</a> <br/>
                        {log? <a href={`/logs/${log._id}/edit`}> Edit Page </a>: ''} <br/>
                        {log? <a href={`/logs/${log._id}`}>Show Page </a> : ''} 
                    </nav>
                    <h1>
                        {title} 
                    </h1>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = Default 