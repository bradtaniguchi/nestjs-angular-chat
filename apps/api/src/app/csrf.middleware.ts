export function csrf(req, res, next) {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    return next();
}