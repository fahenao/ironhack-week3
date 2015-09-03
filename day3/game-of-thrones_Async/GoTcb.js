function fileactions(error, file) {
	if (error) {
		throw err;
	}
	var episodes = JSON.parse(file)
	console.log(episodes[0]);
};

module.exports = fileactions