require('dotenv').config()

const express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    Core = require('./core/load.js'),
    passport = require('passport'),
    compression = require('compression'),
    cors = require('cors'),
    swaggerUi = require('swagger-ui-express'),
    YAML = require('yamljs'),
    cron = require('node-cron'),
    Models = require("./app/zohoModels"),
    zohoModel = Models.zoho_crm,
    ZohoCRM = require("./lib/Zohocrm"),
    ejs = require('ejs')