$('#start').on('click', () => {
    axios.get('/chromeDriver')
    .then(function (response) {
        console.log(response.data)
    })
    .catch(function (error) {
        console.log(error)
    })
})