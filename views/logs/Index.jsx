const React = require('react')

class Index extends React.Component{
    render(){
        const {logs} = this.props 
        return(
            <div>
                <h1>Entries Log</h1>
                <nav>
                    <a href='logs/new'> Create Entry Here</a>
                </nav>
                <ul>
                    {
                        logs.map((log) =>{
                            const{title, entry, shipIsBroken, timeStamp} =log
                            return(
                                <li key={log._id}>
                                    <a href={`/logs/${log._id}`}>{title}</a>
                                    <br/>
                                    {
                                        shipIsBroken?
                                        'Ship is Broke':
                                        'Ship is not Broken'
                                    }
                                    <br/>
                                    {entry}
                                </li>
                            )
                        })
                    }
                </ul>
                </div>
        )
    }
}

module.exports = Index 