export default `statuses`;
export const showCommand = false;
export const guild = true;


/** @type {import("discord.js").ApplicationCommandPermissions[]} */
export const permissions = [{
   id: `754019782076137542`, // staff (Mighty Lobster [OFFICIAL])
   type: `ROLE`,
   permission: true
}];


/** @type {import("discord.js").ApplicationCommandData} */
export const data = {
   name: `statuses`,
   description: `Manage statuses ð§`,
   options: [{
      type: `SUB_COMMAND`,
      name: `add`,
      description: `Add a new status â`,
      options: [{
         type: `STRING`,
         name: `type`,
         description: `The status' type ðŽ`,
         required: true,
         choices: [{
            name: `Playing ðŪ`,
            value: `PLAYING`
         }, {
            name: `Watching ðš`,
            value: `WATCHING`
         }, {
            name: `Listening to ð`,
            value: `LISTENING`
         }, {
            name: `Competing in ðĪš`,
            value: `COMPETING`
         }]
      }, {
         type: `STRING`,
         name: `name`,
         description: `The name of this status ð`,
         required: true
      }]
   }, {
      type: `SUB_COMMAND`,
      name: `view`,
      description: `View current statuses ðŽ`
   }, {
      type: `SUB_COMMAND`,
      name: `delete`,
      description: `Delete a status â`,
      options: [{
         type: `STRING`,
         name: `name`,
         description: `The name of the status to delete ðŽ`,
         required: true,
         autocomplete: true
      }]
   }],
   defaultPermission: false
};