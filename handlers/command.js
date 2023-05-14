const { readdirSync } = require("fs");
const { join } = require("path");
const ascii = require("ascii-table");
const table = new ascii().setHeading("Command", "Load Status");
const commands = new Map();
const aliases = new Map();

const commandFiles = readdirSync(join(__dirname, "..", "commands")).filter(file =>
  file.endsWith(".js")
);

for (const file of commandFiles) {
  try {
    const command = require(join(__dirname, "..", "commands", file));
    if (typeof command.run !== "function") {
      throw new TypeError(
        `[ERROR]: run function is not defined in ${file} file.`
      );
    }
    commands.set(command.name, command);
    if (command.aliases && Array.isArray(command.aliases)) {
      for (const alias of command.aliases) {
        aliases.set(alias, command.name);
      }
    }
    table.addRow(file, "✅");
  } catch (err) {
    console.log(
      `Error loading command ${file}: ${err.message}`.replace(
        `${__dirname}/`,
        ""
      )
    );
    table.addRow(file, "❌");
    continue;
  }
}

console.log(table.toString());

module.exports = {
  commands,
  aliases
};
