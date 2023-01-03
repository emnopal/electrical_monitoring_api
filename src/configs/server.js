import {json, urlencoded} from 'express';

export const config = (app, routes) => {
    app.use(json());
    app.use(urlencoded({extended: true}));
    app.use('/api/', routes);

    app.use((req, res, next) => {
        next(createError(404));
    });

    app.use((err, req, res, next) => {
        res.locals.message = err.message;
        res.locals.error = err;
        res.status(err.status || 500);
        res.json({
            error: err,
        });
    });

    return app;
};
