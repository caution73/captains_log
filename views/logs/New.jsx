const React = require("react")
const DefaultLayout = require("../layout/Default")

class New extends React.Component {
    render(){
        return(
           <DefaultLayout>
             <div className="page">
                <form action="/logs"and method="POST" className="form">
                    <h2>Log Title</h2>
                    <input type="text" name="title"></input>
                    <h3>Log Entry</h3>
                    <input type="textarea" name="entry"></input>
                    <h3>Ship is broken</h3>
                    <input type="checkbox" name="shipIsBroken"></input>
                    <br></br>
                    <br></br>
                    <input type="submit"></input>
                </form>
            </div>
           </DefaultLayout>
           
        )
    }
}

module.exports = New