const React = require("react");
const DefaultLayout = require("../layout/Default")

class Index extends React.Component {
  render() {
    const { logs } = this.props;
    return (
     <DefaultLayout>
       <div className="page">
        <h1>Captain's Log</h1>
        <a href="/logs/new">Create a log</a>
        <ul>
          {logs.map((log, i) => {
            return (
              <li key={i}>
                <table>
                  <tr>
                    <td> <div><a href={`/logs/${log._id}`}>{log.title}</a></div></td>
                    <td><div><a href={`/logs/${log._id}/edit`}>Edit this log</a></div></td>
                    <td> <form action={`/logs/${log._id}/?_method=DELETE`} method="POST">
                  <input type="submit" value="DELETE" />
                </form></td>
                  </tr>              
                </table>
              </li>
            );
          })}
        </ul>
      </div>
     </DefaultLayout>
    );
  }
}

module.exports = Index;
