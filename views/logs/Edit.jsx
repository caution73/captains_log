const React = require("react");

class Edit extends React.Component {
  render() {
    const log = this.props.log
    return (
      <div className="indexPage">
        <form
          action={`/logs/${log._id}/?_method=PUT`}
          method="POST"
        >
          {/* use the vegetable info to give the inputs a defaultValue for a nice user experience */}
          Title: <input type="text" name="title" defaultValue={log.title} />
          Entry:{" "}
          <input type="text" name="entry" defaultValue={log.entry} />
          The ship is broken:
          {/* conditionally rendering the checkbox input to make it check by default or not. */}
          {log.shipIsBroken ? (
            <input type="checkbox" name="shipIsBroken" defaultChecked />
          ) : (
            <input type="checkbox" name="shipIsBroken" />
          )}
          <input type="submit" value="Submit Changes" />
        </form>
      </div>
    );
  }
}

module.exports = Edit;
