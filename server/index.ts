import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import xssFilter from 'x-xss-protection';
import path from 'path';

const PORT = process.env.PORT || 8080;
const { API_BASE, SITE_URL } = process.env;
const app = express();

app.use(
    helmet.contentSecurityPolicy({
        directives: {
            defaultSrc: ["'self'", `${API_BASE}/graphql`, `blob: ${SITE_URL}/*`, 'data:*'],
            styleSrc: ["'self'", 'https://use.fontawesome.com/', "'unsafe-inline'", 'https://fonts.googleapis.com/'],
            fontSrc: ['fonts.gstatic.com', 'https://fonts.googleapis.com/'],
            scriptSrc: ["'self'", "'unsafe-inline'", 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js'],
            imgSrc: ["'self'", `data: ${SITE_URL}/*`, `blob: ${SITE_URL}/*`, 'https://www.w3.org', `${API_BASE}/`],
            upgradeInsecureRequests: true,
        },
    })
);

const sixtyDaysInSeconds = 5184000;

app.disable('x-powered-by');
app.use(function (_, res, next) {
    res.removeHeader('X-Powered-By');
    next();
});

app.use(helmet.hidePoweredBy());
app.use(helmet.hsts({ maxAge: sixtyDaysInSeconds }));
app.use(helmet.noSniff());
app.use(helmet.frameguard({ action: 'sameorigin' }));
app.use(xssFilter({ setOnOldIE: true }));

app.use(cookieParser());

app.use(cors());
app.use(express.static('dist'));

app.get('/*', function (_, res) {
    res.sendFile(path.join(__dirname, './index.html'), function (err) {
        if (err) {
            res.status(500).send(err);
        }
    });
});

app.listen(PORT, () => {
    console.log(`APP IS RUNNING ON PORT - ${PORT}`);
});
