const React = require('react')

class Index extends React.Component{
    render(){
        const {logs} = this.props 
        // console.log(this.props)
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
                                    <form method="POST" action={`/logs/${log._id}?_method=DELETE`}>
                                        <input type="submit" value={`Delete ${title}`}/>
                                    </form>
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