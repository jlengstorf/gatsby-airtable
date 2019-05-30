require("dotenv").config()

module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-airtable",
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: "appG6BVCzY8TjmTTS",
            tableName: "Items",
            tableLinks: ["Company"],
          },
          {
            baseId: "appG6BVCzY8TjmTTS",
            tableName: "Companies",
            tableLinks: ["Items"],
          },
        ],
      },
    },
  ],
}
