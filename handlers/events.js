const { readdirSync } = require("fs");
const ascii = require("ascii-table");
const table = new ascii("Events").setHeading("Events", "Load status");

module.exports = (client) => {
  const events = readdirSync("./events").filter((file) => file.endsWith(".js"));

  for (const file of events) {
    try {
      const event = require(`../events/${file}`);

      if (event.once) {
        client.once(event.name, (...args) => event.run(client, ...args));
      } else {
        client.on(event.name, (...args) => event.run(client, ...args));
      }

      table.addRow(file, "✔");
    } catch (err) {
      console.log(`An error occurred while loading the event: ${file}`);
      console.log(err);
      table.addRow(file, `❌ An error occurred while loading the event.`);
    }
  }

  console.log(table.toString());
};
