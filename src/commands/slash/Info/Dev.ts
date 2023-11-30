import {
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  version,
  CommandInteraction,
  ButtonStyle,
} from "discord.js";
import ms from "pretty-ms";
import { Manager } from "../../../manager.js";
import {
  Accessableby,
  CommandOptionInterface,
  SlashCommand,
} from "../../../@types/Command.js";

export default class implements SlashCommand {
  name = ["developer"];
  description = "Shows the developer information of the Bot (Credit)";
  category = "Info";
  lavalink = false;
  options = [];
  accessableby = Accessableby.Member;

  async run(
    interaction: CommandInteraction,
    client: Manager,
    language: string
  ) {
    await interaction.deferReply({ ephemeral: false });
    const xeondex = new EmbedBuilder()
      .setTitle(`${client.i18n.get(language, "info", "dev_title")}`)
      .setDescription(`${client.i18n.get(language, "info", "dev_desc")}`)
      .setFooter({ text: `${client.i18n.get(language, "info", "dev_foot")}` })
      .setColor(client.color);

    const row1 = new ActionRowBuilder<ButtonBuilder>()
      .addComponents(
        new ButtonBuilder()
          .setLabel("Github (RainyXeon)")
          .setStyle(ButtonStyle.Link)
          .setURL("https://github.com/XeonE52680v3")
      )
      .addComponents(
        new ButtonBuilder()
          .setLabel("Support Server")
          .setStyle(ButtonStyle.Link)
          .setURL("https://discord.com/invite/xHvsCMjnhU")
      );

    await interaction.editReply({ embeds: [xeondex], components: [row1] });
  }
}
