/* Discord Bot */
import {Intents, CommandClient} from "./deps.ts"
import {TwitchExtension} from "./mod.ts"

const client = new CommandClient({ prefix: "!" });
const token = Deno.env.get("BOT_TOKEN")

console.log("=======================")
console.log("DISCORD BOT STARTING UP");
console.log("=======================")

console.log("- loading extensions:");

client.extensions.load(TwitchExtension)

client.on("ready", (n: number): void => {
    if(n === 1) {
        console.log("\n* BOT IS READY")
    } else {
        console.log("####################")
        console.log("SOMETHING WENT WRONG")
        console.log("####################")
    }
})

client.connect(token, Intents.GuildMembers);
