"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const helmet_1 = __importDefault(require("helmet"));
const x_xss_protection_1 = __importDefault(require("x-xss-protection"));
const path_1 = __importDefault(require("path"));
const webpack_config_1 = __importDefault(require("../webpack.config"));
const webpack_dev_middleware_1 = __importDefault(require("webpack-dev-middleware"));
const webpack_1 = __importDefault(require("webpack"));
const PORT = process.env.PORT || 8080;
const app = express_1.default();
const compiler = webpack_1.default(webpack_config_1.default);
app.use(webpack_dev_middleware_1.default(compiler, {
    publicPath: webpack_config_1.default.output.publicPath,
}));
app.use(webpack_dev_middleware_1.default(compiler));
const sixtyDaysInSeconds = 5184000;
app.disable('x-powered-by');
app.use(function (_, res, next) {
    res.removeHeader('X-Powered-By');
    next();
});
app.use(helmet_1.default.hidePoweredBy());
app.use(helmet_1.default.hsts({ maxAge: sixtyDaysInSeconds }));
app.use(helmet_1.default.noSniff());
app.use(helmet_1.default.frameguard({ action: 'sameorigin' }));
app.use(x_xss_protection_1.default({ setOnOldIE: true }));
app.use(cookie_parser_1.default());
app.use(cors_1.default());
app.use(express_1.default.static('dist'));
app.get('/*', function (_, res) {
    res.sendFile(path_1.default.join(__dirname, './index.html'), function (err) {
        if (err) {
            res.status(500).send(err);
        }
    });
});
app.listen(PORT, () => {
    console.log(`APP IS RUNNING ON PORT - ${PORT}`);
});
//# sourceMappingURL=index.js.map