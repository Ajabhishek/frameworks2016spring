function gulpConfig(){
    "use strict";
	
	var config = {
        baseDir: "./",
		browserSyncFiles: ["./*.html", "./css/*.css"],
        browsers: ["firefox", "google chrome"],
        sass: "sass/*.scss",
        css: "./css"
	};

	return config;
}

module.exports = gulpConfig;

