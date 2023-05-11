const React = require("react")

class New extends React.Component {
    render(){
        return(
            <div className="formContainer">
                <form action="/logs"and method="POST">
                    <h2>Title</h2>
                    <input type="text" name="title"></input>
                    <h3>Entry</h3>
                    <input type="textarea" name="entry"></input>
                    <h3>Ship is broken</h3>
                    <input type="checkbox" name="shipIsBroken"></input>
                    <input type="submit"></input>
                </form>
            </div>
           
        )
    }
}

module.exports = New