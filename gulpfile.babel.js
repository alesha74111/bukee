"use strict";

import gulp from "gulp";
const requireDir = require("require-dir");


const buildDir = './docs/';

const paths = {
    views: {
        src: [
            "./src/views/**/*.html",
            "./src/views/pages/*.html"
        ],
        dist: `${buildDir}`,
        watch: [
            "./src/blocks/**/*.html",
            "./src/views/**/*.html"
        ]
    },
    styles: {
        src: "./src/styles/main.{scss,sass}",
        dist: `${buildDir}styles/`,
        watch: [
            "./src/blocks/**/*.{scss,sass}",
            "./src/styles/**/*.{scss,sass}`
        ]
    },
    scripts: {
        src: "./src/js/index.js",
        dist: `${buildDir}js/`,
        watch: [
            "./src/blocks/**/*.js",
            "./src/js/**/*.js`
        ]
    },
    images: {
        src: [
            "./src/img/**/*.{jpg,jpeg,png,gif,tiff,svg}",
            "!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}"
        ],
        dist: `${buildDir}img/`,
        watch: "./src/img/**/*.{jpg,jpeg,png,gif,svg,tiff}`
    },
    sprites: {
        src: "./src/img/sprites/*.svg",
        dist: `${buildDir}img/sprites/`,
        watch: "./src/img/sprites/*.svg"
    },
    fonts: {
        src: "./src/fonts/**/*.{woff,woff2}",
        dist: `${buildDir}fonts/`,
        watch: "./src/fonts/**/*.{woff,woff2}`
    },
    favicons: {
        src: "./src/img/favicon/*.{jpg,jpeg,png,gif}",
        dist: `${buildDir}img/favicons/`,
    },
    gzip: {
        src: "./src/.htaccess",
        dist: `${buildDir}`
    }
};


requireDir("./gulp-tasks/");


export { paths };



export const development = gulp.series(
    "clean",
    gulp.parallel(["views", "styles", "scripts", "images", "webp", "sprites", "fonts", "favicons"]),
    gulp.parallel("serve")
);

export const prod = gulp.series(
    "clean",
    gulp.parallel(["views", "styles", "scripts", "images", "webp", "sprites", "fonts", "favicons", "gzip"])
);

export default development;
