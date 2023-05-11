const React = require("react");

class Index extends React.Component {
  render() {
    const { logs } = this.props;
    return (
      <div className="indexPage">
        <h1>Here lies our index</h1>
        <a href="/logs/new">Create a log</a>
        <ul>
          Logs
          {logs.map((log, i) => {
            return (
              <li key={i}>
                <a href={`/logs/${log._id}`}>{log.title}</a>
                <a href={`/logs/${log._id}/edit`}>Edit this log</a>
                <form action={`/logs/${log._id}/?_method=DELETE`} method="POST">
                  <input type="submit" value="DELETE" />
                </form>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;
