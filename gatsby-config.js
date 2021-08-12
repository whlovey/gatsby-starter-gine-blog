module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/d3204296151a4a389e2c01c5d48480ef?v=e6820ab59f2242dab2c502583d88b6b6"
            }
        },
        {
            resolve: `@conradlin/gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/0068e7043f4f4ca9a7ddb571ad89f77d?v=66f2808c65054ecda830526a87e3b420"
            }
        }
    ],
}
