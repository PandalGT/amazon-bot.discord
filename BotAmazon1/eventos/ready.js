module.exports = (client) => {
    client.user.setPresence( 
        {
            status: "online",
            game: {
                name: 'Panda guapo',
                url: null,
                type: "PLAYING"
            }
        }
    )
}