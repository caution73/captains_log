const React = require("react")
const DefaultLayout = require("../layout/Default")

class Show extends React.Component {
    render(){
        const {log} = this.props
        console.log(log)
        return(
            <DefaultLayout>
                 <div className="page">
                <a href='/logs'>Log Index</a>
                <h1>Log Entry</h1>
                <table>
                    <tr>
                        <td>
                            Title
                        </td>
                        <td>
                            {log.title}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Entry
                        </td>
                        <td>
                            {log.entry}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Is the ship broken?
                        </td>
                        <td>
                            {log.shipIsBroken ? "Yes" : "No"}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Creation date:
                        </td>
                        <td>
                            {log.createdAt.toISOString().slice(0, 10)}
                        </td>
                    </tr>
                </table>
            </div>
            </DefaultLayout>
           
           
        )
    }
}

module.exports = Show