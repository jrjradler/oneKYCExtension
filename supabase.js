! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.supabase = t() : e.supabase = t()
}(self, (function() {
    return (() => {
        var e = {
                101: (e, t, r) => {
                    "use strict";
                    r.r(t), r.d(t, {
                        GoTrueApi: () => f,
                        GoTrueClient: () => w
                    });
                    var s = r(98),
                        n = r.n(s),
                        i = function(e, t, r, s) {
                            return new(r || (r = Promise))((function(n, i) {
                                function o(e) {
                                    try {
                                        c(s.next(e))
                                    } catch (e) {
                                        i(e)
                                    }
                                }

                                function a(e) {
                                    try {
                                        c(s.throw(e))
                                    } catch (e) {
                                        i(e)
                                    }
                                }

                                function c(e) {
                                    var t;
                                    e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                                        e(t)
                                    }))).then(o, a)
                                }
                                c((s = s.apply(e, t || [])).next())
                            }))
                        };
                    const o = e => e.msg || e.message || e.error_description || e.error || JSON.stringify(e);

                    function a(e, t, r, s) {
                        return i(this, void 0, void 0, (function*() {
                            return new Promise(((i, a) => {
                                n()(t, ((e, t, r) => {
                                    const s = {
                                        method: e,
                                        headers: (null == t ? void 0 : t.headers) || {}
                                    };
                                    return "GET" === e || (s.headers = Object.assign({
                                        "Content-Type": "text/plain;charset=UTF-8"
                                    }, null == t ? void 0 : t.headers), s.body = JSON.stringify(r)), s
                                })(e, r, s)).then((e => {
                                    if (!e.ok) throw e;
                                    return (null == r ? void 0 : r.noResolveJson) ? i : e.json()
                                })).then((e => i(e))).catch((e => ((e, t) => {
                                    if ("function" != typeof e.json) return t(e);
                                    e.json().then((r => t({
                                        message: o(r),
                                        status: (null == e ? void 0 : e.status) || 500
                                    })))
                                })(e, a)))
                            }))
                        }))
                    }

                    function c(e, t, r) {
                        return i(this, void 0, void 0, (function*() {
                            return a("POST", e, r, t)
                        }))
                    }
                    const h = "supabase.auth.token",
                        u = {
                            name: "sb:token",
                            lifetime: 28800,
                            domain: "",
                            path: "/",
                            sameSite: "lax"
                        };

                    function l(e, t, r) {
                        const s = r.map((t => {
                                return r = t, s = function(e) {
                                        if (!e || !e.headers || !e.headers.host) throw new Error('The "host" request header is not available');
                                        const t = e.headers.host.indexOf(":") > -1 && e.headers.host.split(":")[0] || e.headers.host;
                                        return !(["localhost", "127.0.0.1"].indexOf(t) > -1)
                                    }(e),
                                    function(e, t, r) {
                                        const s = r || {},
                                            n = encodeURIComponent,
                                            i = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
                                        if ("function" != typeof n) throw new TypeError("option encode is invalid");
                                        if (!i.test(e)) throw new TypeError("argument name is invalid");
                                        const o = n(t);
                                        if (o && !i.test(o)) throw new TypeError("argument val is invalid");
                                        let a = e + "=" + o;
                                        if (null != s.maxAge) {
                                            const e = s.maxAge - 0;
                                            if (isNaN(e) || !isFinite(e)) throw new TypeError("option maxAge is invalid");
                                            a += "; Max-Age=" + Math.floor(e)
                                        }
                                        if (s.domain) {
                                            if (!i.test(s.domain)) throw new TypeError("option domain is invalid");
                                            a += "; Domain=" + s.domain
                                        }
                                        if (s.path) {
                                            if (!i.test(s.path)) throw new TypeError("option path is invalid");
                                            a += "; Path=" + s.path
                                        }
                                        if (s.expires) {
                                            if ("function" != typeof s.expires.toUTCString) throw new TypeError("option expires is invalid");
                                            a += "; Expires=" + s.expires.toUTCString()
                                        }
                                        if (s.httpOnly && (a += "; HttpOnly"), s.secure && (a += "; Secure"), s.sameSite) switch ("string" == typeof s.sameSite ? s.sameSite.toLowerCase() : s.sameSite) {
                                            case "lax":
                                                a += "; SameSite=Lax";
                                                break;
                                            case "strict":
                                                a += "; SameSite=Strict";
                                                break;
                                            case "none":
                                                a += "; SameSite=None";
                                                break;
                                            default:
                                                throw new TypeError("option sameSite is invalid")
                                        }
                                        return a
                                    }(r.name, r.value, {
                                        maxAge: r.maxAge,
                                        expires: new Date(Date.now() + 1e3 * r.maxAge),
                                        httpOnly: !0,
                                        secure: s,
                                        path: null !== (n = r.path) && void 0 !== n ? n : "/",
                                        domain: null !== (i = r.domain) && void 0 !== i ? i : "",
                                        sameSite: null !== (o = r.sameSite) && void 0 !== o ? o : "lax"
                                    });
                                var r, s, n, i, o
                            })),
                            n = t.getHeader("Set-Cookie");
                        n && (n instanceof Array ? Array.prototype.push.apply(s, n) : "string" == typeof n && s.push(n)), t.setHeader("Set-Cookie", s)
                    }

                    function d(e, t, r) {
                        l(e, t, [r])
                    }
                    var p = function(e, t, r, s) {
                        return new(r || (r = Promise))((function(n, i) {
                            function o(e) {
                                try {
                                    c(s.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function a(e) {
                                try {
                                    c(s.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function c(e) {
                                var t;
                                e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                                    e(t)
                                }))).then(o, a)
                            }
                            c((s = s.apply(e, t || [])).next())
                        }))
                    };
                    class f {
                        constructor({
                            url: e = "",
                            headers: t = {},
                            cookieOptions: r
                        }) {
                            this.url = e, this.headers = t, this.cookieOptions = Object.assign(Object.assign({}, u), r)
                        }
                        signUpWithEmail(e, t, r = {}) {
                            return p(this, void 0, void 0, (function*() {
                                try {
                                    let s = Object.assign({}, this.headers);
                                    return r.redirectTo && (s.referer = r.redirectTo), {
                                        data: yield c(this.url + "/signup", {
                                            email: e,
                                            password: t
                                        }, {
                                            headers: s
                                        }),
                                        error: null
                                    }
                                } catch (e) {
                                    return {
                                        data: null,
                                        error: e
                                    }
                                }
                            }))
                        }
                        signInWithEmail(e, t, r = {}) {
                            return p(this, void 0, void 0, (function*() {
                                try {
                                    let s = Object.assign({}, this.headers);
                                    return r.redirectTo && (s.referer = r.redirectTo), {
                                        data: yield c(this.url + "/token?grant_type=password", {
                                            email: e,
                                            password: t
                                        }, {
                                            headers: s
                                        }),
                                        error: null
                                    }
                                } catch (e) {
                                    return {
                                        data: null,
                                        error: e
                                    }
                                }
                            }))
                        }
                        sendMagicLinkEmail(e, t = {}) {
                            return p(this, void 0, void 0, (function*() {
                                try {
                                    let r = Object.assign({}, this.headers);
                                    return t.redirectTo && (r.referer = t.redirectTo), {
                                        data: yield c(this.url + "/magiclink", {
                                            email: e
                                        }, {
                                            headers: r
                                        }),
                                        error: null
                                    }
                                } catch (e) {
                                    return {
                                        data: null,
                                        error: e
                                    }
                                }
                            }))
                        }
                        inviteUserByEmail(e, t = {}) {
                            return p(this, void 0, void 0, (function*() {
                                try {
                                    let r = Object.assign({}, this.headers);
                                    return t.redirectTo && (r.referer = t.redirectTo), {
                                        data: yield c(this.url + "/invite", {
                                            email: e
                                        }, {
                                            headers: r
                                        }),
                                        error: null
                                    }
                                } catch (e) {
                                    return {
                                        data: null,
                                        error: e
                                    }
                                }
                            }))
                        }
                        resetPasswordForEmail(e, t = {}) {
                            return p(this, void 0, void 0, (function*() {
                                try {
                                    let r = Object.assign({}, this.headers);
                                    return t.redirectTo && (r.referer = t.redirectTo), {
                                        data: yield c(this.url + "/recover", {
                                            email: e
                                        }, {
                                            headers: r
                                        }),
                                        error: null
                                    }
                                } catch (e) {
                                    return {
                                        data: null,
                                        error: e
                                    }
                                }
                            }))
                        }
                        _createRequestHeaders(e) {
                            const t = Object.assign({}, this.headers);
                            return t.Authorization = "Bearer " + e, t
                        }
                        signOut(e) {
                            return p(this, void 0, void 0, (function*() {
                                try {
                                    return yield c(this.url + "/logout", {}, {
                                        headers: this._createRequestHeaders(e),
                                        noResolveJson: !0
                                    }), {
                                        error: null
                                    }
                                } catch (e) {
                                    return {
                                        error: e
                                    }
                                }
                            }))
                        }
                        getUrlForProvider(e, t) {
                            let r = ["provider=" + e];
                            return (null == t ? void 0 : t.redirectTo) && r.push("redirect_to=" + t.redirectTo), `${this.url}/authorize?${r.join("&")}`
                        }
                        getUser(e) {
                            return p(this, void 0, void 0, (function*() {
                                try {
                                    const t = yield function(e, t) {
                                        return i(this, void 0, void 0, (function*() {
                                            return a("GET", e, t)
                                        }))
                                    }(this.url + "/user", {
                                        headers: this._createRequestHeaders(e)
                                    });
                                    return {
                                        user: t,
                                        data: t,
                                        error: null
                                    }
                                } catch (e) {
                                    return {
                                        user: null,
                                        data: null,
                                        error: e
                                    }
                                }
                            }))
                        }
                        updateUser(e, t) {
                            return p(this, void 0, void 0, (function*() {
                                try {
                                    const r = yield function(e, t, r) {
                                        return i(this, void 0, void 0, (function*() {
                                            return a("PUT", e, r, t)
                                        }))
                                    }(this.url + "/user", t, {
                                        headers: this._createRequestHeaders(e)
                                    });
                                    return {
                                        user: r,
                                        data: r,
                                        error: null
                                    }
                                } catch (e) {
                                    return {
                                        user: null,
                                        data: null,
                                        error: e
                                    }
                                }
                            }))
                        }
                        refreshAccessToken(e) {
                            return p(this, void 0, void 0, (function*() {
                                try {
                                    return {
                                        data: yield c(this.url + "/token?grant_type=refresh_token", {
                                            refresh_token: e
                                        }, {
                                            headers: this.headers
                                        }),
                                        error: null
                                    }
                                } catch (e) {
                                    return {
                                        data: null,
                                        error: e
                                    }
                                }
                            }))
                        }
                        setAuthCookie(e, t) {
                            "POST" !== e.method && (t.setHeader("Allow", "POST"), t.status(405).end("Method Not Allowed"));
                            const {
                                event: r,
                                session: s
                            } = e.body;
                            if (!r) throw new Error("Auth event missing!");
                            if ("SIGNED_IN" === r) {
                                if (!s) throw new Error("Auth session missing!");
                                d(e, t, {
                                    name: this.cookieOptions.name,
                                    value: s.access_token,
                                    domain: this.cookieOptions.domain,
                                    maxAge: this.cookieOptions.lifetime,
                                    path: this.cookieOptions.path,
                                    sameSite: this.cookieOptions.sameSite
                                })
                            }
                            "SIGNED_OUT" === r && function(e, t, r) {
                                d(e, t, {
                                    name: r,
                                    value: "",
                                    maxAge: -1
                                })
                            }(e, t, this.cookieOptions.name), t.status(200).json({})
                        }
                        getUserByCookie(e) {
                            return p(this, void 0, void 0, (function*() {
                                try {
                                    if (!e.cookies) throw new Error("Not able to parse cookies! When using Express make sure the cookie-parser middleware is in use!");
                                    if (!e.cookies[this.cookieOptions.name]) throw new Error("No cookie found!");
                                    const t = e.cookies[this.cookieOptions.name],
                                        {
                                            user: r,
                                            error: s
                                        } = yield this.getUser(t);
                                    if (s) throw s;
                                    return {
                                        user: r,
                                        data: r,
                                        error: null
                                    }
                                } catch (e) {
                                    return {
                                        user: null,
                                        data: null,
                                        error: e
                                    }
                                }
                            }))
                        }
                    }
                    const m = () => "undefined" != typeof window;

                    function y(e, t) {
                        t || (t = window.location.href), e = e.replace(/[\[\]]/g, "\\$&");
                        var r = new RegExp("[?&#]" + e + "(=([^&#]*)|&|#|$)").exec(t);
                        return r ? r[2] ? decodeURIComponent(r[2].replace(/\+/g, " ")) : "" : null
                    }
                    class g {
                        constructor(e) {
                            this.localStorage = e || globalThis.localStorage
                        }
                        clear() {
                            return this.localStorage.clear()
                        }
                        key(e) {
                            return this.localStorage.key(e)
                        }
                        setItem(e, t) {
                            return this.localStorage.setItem(e, t)
                        }
                        getItem(e) {
                            return this.localStorage.getItem(e)
                        }
                        removeItem(e) {
                            return this.localStorage.removeItem(e)
                        }
                    }
                    var v = function(e, t, r, s) {
                        return new(r || (r = Promise))((function(n, i) {
                            function o(e) {
                                try {
                                    c(s.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function a(e) {
                                try {
                                    c(s.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function c(e) {
                                var t;
                                e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                                    e(t)
                                }))).then(o, a)
                            }
                            c((s = s.apply(e, t || [])).next())
                        }))
                    };
                    "object" != typeof globalThis && (Object.defineProperty(Object.prototype, "__magic__", {
                        get: function() {
                            return this
                        },
                        configurable: !0
                    }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__);
                    const b = {
                        url: "http://localhost:9999",
                        autoRefreshToken: !0,
                        persistSession: !0,
                        localStorage: globalThis.localStorage,
                        detectSessionInUrl: !0,
                        headers: {}
                    };
                    class w {
                        constructor(e) {
                            this.stateChangeEmitters = new Map;
                            const t = Object.assign(Object.assign({}, b), e);
                            this.currentUser = null, this.currentSession = null, this.autoRefreshToken = t.autoRefreshToken, this.persistSession = t.persistSession, this.localStorage = new g(t.localStorage), this.api = new f({
                                url: t.url,
                                headers: t.headers,
                                cookieOptions: t.cookieOptions
                            }), this._recoverSession();
                            try {
                                t.detectSessionInUrl && m() && y("access_token") && this.getSessionFromUrl({
                                    storeSession: !0
                                })
                            } catch (e) {
                                console.log("Error getting session from URL.")
                            }
                        }
                        signUp({
                            email: e,
                            password: t
                        }, r = {}) {
                            return v(this, void 0, void 0, (function*() {
                                try {
                                    this._removeSession();
                                    const {
                                        data: s,
                                        error: n
                                    } = yield this.api.signUpWithEmail(e, t, {
                                        redirectTo: r.redirectTo
                                    });
                                    if (n) throw n;
                                    if (!s) throw "An error occurred on sign up.";
                                    let i = null,
                                        o = null;
                                    return s.access_token && (i = s, o = i.user, this._saveSession(i), this._notifyAllSubscribers("SIGNED_IN")), s.id && (o = s), {
                                        data: s,
                                        user: o,
                                        session: i,
                                        error: null
                                    }
                                } catch (e) {
                                    return {
                                        data: null,
                                        user: null,
                                        session: null,
                                        error: e
                                    }
                                }
                            }))
                        }
                        signIn({
                            email: e,
                            password: t,
                            provider: r
                        }, s = {}) {
                            return v(this, void 0, void 0, (function*() {
                                try {
                                    if (this._removeSession(), e && !t) {
                                        const {
                                            error: t
                                        } = yield this.api.sendMagicLinkEmail(e, {
                                            redirectTo: s.redirectTo
                                        });
                                        return {
                                            data: null,
                                            user: null,
                                            session: null,
                                            error: t
                                        }
                                    }
                                    if (e && t) return this._handleEmailSignIn(e, t, {
                                        redirectTo: s.redirectTo
                                    });
                                    if (r) return this._handleProviderSignIn(r, {
                                        redirectTo: s.redirectTo
                                    });
                                    throw new Error("You must provide either an email or a third-party provider.")
                                } catch (e) {
                                    return {
                                        data: null,
                                        user: null,
                                        session: null,
                                        error: e
                                    }
                                }
                            }))
                        }
                        user() {
                            return this.currentUser
                        }
                        session() {
                            return this.currentSession
                        }
                        refreshSession() {
                            var e;
                            return v(this, void 0, void 0, (function*() {
                                try {
                                    if (!(null === (e = this.currentSession) || void 0 === e ? void 0 : e.access_token)) throw new Error("Not logged in.");
                                    yield this._callRefreshToken();
                                    const {
                                        data: t,
                                        error: r
                                    } = yield this.api.getUser(this.currentSession.access_token);
                                    if (r) throw r;
                                    return this.currentUser = t, {
                                        data: this.currentSession,
                                        user: this.currentUser,
                                        error: null
                                    }
                                } catch (e) {
                                    return {
                                        data: null,
                                        user: null,
                                        error: e
                                    }
                                }
                            }))
                        }
                        update(e) {
                            var t;
                            return v(this, void 0, void 0, (function*() {
                                try {
                                    if (!(null === (t = this.currentSession) || void 0 === t ? void 0 : t.access_token)) throw new Error("Not logged in.");
                                    const {
                                        data: r,
                                        error: s
                                    } = yield this.api.updateUser(this.currentSession.access_token, e);
                                    if (s) throw s;
                                    return this.currentUser = r, this._notifyAllSubscribers("USER_UPDATED"), {
                                        data: r,
                                        user: this.currentUser,
                                        error: null
                                    }
                                } catch (e) {
                                    return {
                                        data: null,
                                        user: null,
                                        error: e
                                    }
                                }
                            }))
                        }
                        getSessionFromUrl(e) {
                            return v(this, void 0, void 0, (function*() {
                                try {
                                    if (!m()) throw new Error("No browser detected.");
                                    const t = y("error_description");
                                    if (t) throw new Error(t);
                                    const r = y("access_token");
                                    if (!r) throw new Error("No access_token detected.");
                                    const s = y("expires_in");
                                    if (!s) throw new Error("No expires_in detected.");
                                    const n = y("refresh_token");
                                    if (!n) throw new Error("No refresh_token detected.");
                                    const i = y("token_type");
                                    if (!i) throw new Error("No token_type detected.");
                                    const {
                                        user: o,
                                        error: a
                                    } = yield this.api.getUser(r);
                                    if (a) throw a;
                                    const c = {
                                        access_token: r,
                                        expires_in: parseInt(s),
                                        refresh_token: n,
                                        token_type: i,
                                        user: o
                                    };
                                    return (null == e ? void 0 : e.storeSession) && (this._saveSession(c), this._notifyAllSubscribers("SIGNED_IN"), "recovery" === y("type") && this._notifyAllSubscribers("PASSWORD_RECOVERY")), window.location.hash = "", {
                                        data: c,
                                        error: null
                                    }
                                } catch (e) {
                                    return {
                                        data: null,
                                        error: e
                                    }
                                }
                            }))
                        }
                        signOut() {
                            return v(this, void 0, void 0, (function*() {
                                if (this.currentSession) {
                                    const {
                                        error: e
                                    } = yield this.api.signOut(this.currentSession.access_token);
                                    if (e) return {
                                        error: e
                                    }
                                }
                                return this._removeSession(), this._notifyAllSubscribers("SIGNED_OUT"), {
                                    error: null
                                }
                            }))
                        }
                        onAuthStateChange(e) {
                            try {
                                const t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
                                        var t = 16 * Math.random() | 0;
                                        return ("x" == e ? t : 3 & t | 8).toString(16)
                                    })),
                                    r = this,
                                    s = {
                                        id: t,
                                        callback: e,
                                        unsubscribe: () => {
                                            r.stateChangeEmitters.delete(t)
                                        }
                                    };
                                return this.stateChangeEmitters.set(t, s), {
                                    data: s,
                                    error: null
                                }
                            } catch (e) {
                                return {
                                    data: null,
                                    error: e
                                }
                            }
                        }
                        _handleEmailSignIn(e, t, r = {}) {
                            var s;
                            return v(this, void 0, void 0, (function*() {
                                try {
                                    const {
                                        data: n,
                                        error: i
                                    } = yield this.api.signInWithEmail(e, t, {
                                        redirectTo: r.redirectTo
                                    });
                                    return i || !n ? {
                                        data: null,
                                        user: null,
                                        session: null,
                                        error: i
                                    } : ((null === (s = null == n ? void 0 : n.user) || void 0 === s ? void 0 : s.confirmed_at) && (this._saveSession(n), this._notifyAllSubscribers("SIGNED_IN")), {
                                        data: n,
                                        user: n.user,
                                        session: n,
                                        error: null
                                    })
                                } catch (e) {
                                    return {
                                        data: null,
                                        user: null,
                                        session: null,
                                        error: e
                                    }
                                }
                            }))
                        }
                        _handleProviderSignIn(e, t = {}) {
                            const r = this.api.getUrlForProvider(e, {
                                redirectTo: t.redirectTo
                            });
                            try {
                                return m() && (window.location.href = r), {
                                    provider: e,
                                    url: r,
                                    data: null,
                                    session: null,
                                    user: null,
                                    error: null
                                }
                            } catch (t) {
                                return r ? {
                                    provider: e,
                                    url: r,
                                    data: null,
                                    session: null,
                                    user: null,
                                    error: null
                                } : {
                                    data: null,
                                    user: null,
                                    session: null,
                                    error: t
                                }
                            }
                        }
                        _saveSession(e) {
                            this.currentSession = e, this.currentUser = e.user;
                            const t = e.expires_in;
                            this.autoRefreshToken && t && setTimeout(this._callRefreshToken, 1e3 * (t - 60)), this.persistSession && this._persistSession(this.currentSession, t)
                        }
                        _persistSession(e, t) {
                            const r = {
                                currentSession: e,
                                expiresAt: Math.round(Date.now() / 1e3) + t
                            };
                            m() && this.localStorage.setItem(h, JSON.stringify(r))
                        }
                        _removeSession() {
                            return v(this, void 0, void 0, (function*() {
                                this.currentSession = null, this.currentUser = null, m() && (yield this.localStorage.removeItem(h))
                            }))
                        }
                        _recoverSession() {
                            return v(this, void 0, void 0, (function*() {
                                const e = m() && (yield this.localStorage.getItem(h));
                                if (!e) return null;
                                try {
                                    const t = JSON.parse(e),
                                        {
                                            currentSession: r,
                                            expiresAt: s
                                        } = t,
                                        n = Math.round(Date.now() / 1e3);
                                    if (s < n)
                                        if (this.autoRefreshToken && r.refresh_token) {
                                            const {
                                                error: e
                                            } = yield this._callRefreshToken(r.refresh_token);
                                            e && (console.log(e.message), yield this._removeSession())
                                        } else this._removeSession();
                                    else r && r.user ? (this.currentSession = r, this.currentUser = r.user, this._notifyAllSubscribers("SIGNED_IN"), setTimeout(this._callRefreshToken, 1e3 * (s - n - 60))) : (console.log("Current session is missing data."), this._removeSession())
                                } catch (e) {
                                    return console.error(e), null
                                }
                            }))
                        }
                        _callRefreshToken(e) {
                            var t;
                            return void 0 === e && (e = null === (t = this.currentSession) || void 0 === t ? void 0 : t.refresh_token), v(this, void 0, void 0, (function*() {
                                try {
                                    if (!e) throw new Error("No current session.");
                                    const {
                                        data: t,
                                        error: r
                                    } = yield this.api.refreshAccessToken(e);
                                    if (!(null == t ? void 0 : t.access_token)) throw r; {
                                        this.currentSession = t, this.currentUser = this.currentSession.user, this._notifyAllSubscribers("SIGNED_IN");
                                        const e = t.expires_in;
                                        this.autoRefreshToken && e && setTimeout(this._callRefreshToken, 1e3 * (e - 60)), this.persistSession && this.currentUser && this._persistSession(this.currentSession, e)
                                    }
                                    return {
                                        data: t,
                                        error: null
                                    }
                                } catch (e) {
                                    return {
                                        data: null,
                                        error: e
                                    }
                                }
                            }))
                        }
                        _notifyAllSubscribers(e) {
                            this.stateChangeEmitters.forEach((t => t.callback(e, this.currentSession)))
                        }
                    }
                },
                13: (e, t, r) => {
                    "use strict";
                    r.r(t), r.d(t, {
                        PostgrestBuilder: () => i,
                        PostgrestClient: () => u,
                        PostgrestFilterBuilder: () => c,
                        PostgrestQueryBuilder: () => h
                    });
                    var s = r(98),
                        n = r.n(s);
                    class i {
                        constructor(e) {
                            Object.assign(this, e)
                        }
                        then(e, t) {
                            return void 0 === this.schema || (["GET", "HEAD"].includes(this.method) ? this.headers["Accept-Profile"] = this.schema : this.headers["Content-Profile"] = this.schema), "GET" !== this.method && "HEAD" !== this.method && (this.headers["Content-Type"] = "application/json"), n()(this.url.toString(), {
                                method: this.method,
                                headers: this.headers,
                                body: JSON.stringify(this.body)
                            }).then((e => {
                                return t = this, r = void 0, n = function*() {
                                    var t, r, s;
                                    let n, i, o;
                                    if (e.ok)
                                        if (n = null, i = "HEAD" !== this.method ? (null === (t = this.headers.Prefer) || void 0 === t ? void 0 : t.split(",").includes("return=minimal")) ? null : yield e.json(): null, null === (r = this.headers.Prefer) || void 0 === r ? void 0 : r.match(/count=(exact|planned|estimated)/)) {
                                            const t = null === (s = e.headers.get("content-range")) || void 0 === s ? void 0 : s.split("/");
                                            o = t && t.length > 1 ? parseInt(t[1]) : null
                                        } else o = null;
                                    else n = yield e.json(), i = null, o = null;
                                    return {
                                        error: n,
                                        data: i,
                                        count: o,
                                        status: e.status,
                                        statusText: e.statusText,
                                        body: i
                                    }
                                }, new((s = void 0) || (s = Promise))((function(e, i) {
                                    function o(e) {
                                        try {
                                            c(n.next(e))
                                        } catch (e) {
                                            i(e)
                                        }
                                    }

                                    function a(e) {
                                        try {
                                            c(n.throw(e))
                                        } catch (e) {
                                            i(e)
                                        }
                                    }

                                    function c(t) {
                                        var r;
                                        t.done ? e(t.value) : (r = t.value, r instanceof s ? r : new s((function(e) {
                                            e(r)
                                        }))).then(o, a)
                                    }
                                    c((n = n.apply(t, r || [])).next())
                                }));
                                var t, r, s, n
                            })).then(e, t)
                        }
                    }
                    class o extends i {
                        select(e = "*") {
                            let t = !1;
                            const r = e.split("").map((e => /\s/.test(e) && !t ? "" : ('"' === e && (t = !t), e))).join("");
                            return this.url.searchParams.set("select", r), this
                        }
                        order(e, {
                            ascending: t = !0,
                            nullsFirst: r = !1,
                            foreignTable: s
                        } = {}) {
                            const n = void 0 === s ? "order" : `"${s}".order`;
                            return this.url.searchParams.set(n, `${e}.${t?"asc":"desc"}.${r?"nullsfirst":"nullslast"}`), this
                        }
                        limit(e, {
                            foreignTable: t
                        } = {}) {
                            const r = void 0 === t ? "limit" : `"${t}".limit`;
                            return this.url.searchParams.set(r, "" + e), this
                        }
                        range(e, t, {
                            foreignTable: r
                        } = {}) {
                            const s = void 0 === r ? "offset" : `"${r}".offset`,
                                n = void 0 === r ? "limit" : `"${r}".limit`;
                            return this.url.searchParams.set(s, "" + e), this.url.searchParams.set(n, "" + (t - e + 1)), this
                        }
                        single() {
                            return this.headers.Accept = "application/vnd.pgrst.object+json", this
                        }
                    }
                    const a = e => e.map((e => `"${e}"`)).join(",");
                    class c extends o {
                        not(e, t, r) {
                            return this.url.searchParams.append("" + e, `not.${t}.${r}`), this
                        }
                        or(e) {
                            return this.url.searchParams.append("or", `(${e})`), this
                        }
                        eq(e, t) {
                            return this.url.searchParams.append("" + e, "eq." + t), this
                        }
                        neq(e, t) {
                            return this.url.searchParams.append("" + e, "neq." + t), this
                        }
                        gt(e, t) {
                            return this.url.searchParams.append("" + e, "gt." + t), this
                        }
                        gte(e, t) {
                            return this.url.searchParams.append("" + e, "gte." + t), this
                        }
                        lt(e, t) {
                            return this.url.searchParams.append("" + e, "lt." + t), this
                        }
                        lte(e, t) {
                            return this.url.searchParams.append("" + e, "lte." + t), this
                        }
                        like(e, t) {
                            return this.url.searchParams.append("" + e, "like." + t), this
                        }
                        ilike(e, t) {
                            return this.url.searchParams.append("" + e, "ilike." + t), this
                        }
                        is(e, t) {
                            return this.url.searchParams.append("" + e, "is." + t), this
                        } in (e, t) {
                            return this.url.searchParams.append("" + e, `in.(${a(t)})`), this
                        }
                        cs(e, t) {
                            return "string" == typeof t ? this.url.searchParams.append("" + e, "cs." + t) : Array.isArray(t) ? this.url.searchParams.append("" + e, `cs.{${a(t)}}`) : this.url.searchParams.append("" + e, "cs." + JSON.stringify(t)), this
                        }
                        cd(e, t) {
                            return "string" == typeof t ? this.url.searchParams.append("" + e, "cd." + t) : Array.isArray(t) ? this.url.searchParams.append("" + e, `cd.{${a(t)}}`) : this.url.searchParams.append("" + e, "cd." + JSON.stringify(t)), this
                        }
                        sl(e, t) {
                            return this.url.searchParams.append("" + e, "sl." + t), this
                        }
                        sr(e, t) {
                            return this.url.searchParams.append("" + e, "sr." + t), this
                        }
                        nxl(e, t) {
                            return this.url.searchParams.append("" + e, "nxl." + t), this
                        }
                        nxr(e, t) {
                            return this.url.searchParams.append("" + e, "nxr." + t), this
                        }
                        adj(e, t) {
                            return this.url.searchParams.append("" + e, "adj." + t), this
                        }
                        ov(e, t) {
                            return "string" == typeof t ? this.url.searchParams.append("" + e, "ov." + t) : this.url.searchParams.append("" + e, `ov.{${a(t)}}`), this
                        }
                        fts(e, t, {
                            config: r
                        } = {}) {
                            const s = void 0 === r ? "" : `(${r})`;
                            return this.url.searchParams.append("" + e, `fts${s}.${t}`), this
                        }
                        plfts(e, t, {
                            config: r
                        } = {}) {
                            const s = void 0 === r ? "" : `(${r})`;
                            return this.url.searchParams.append("" + e, `plfts${s}.${t}`), this
                        }
                        phfts(e, t, {
                            config: r
                        } = {}) {
                            const s = void 0 === r ? "" : `(${r})`;
                            return this.url.searchParams.append("" + e, `phfts${s}.${t}`), this
                        }
                        wfts(e, t, {
                            config: r
                        } = {}) {
                            const s = void 0 === r ? "" : `(${r})`;
                            return this.url.searchParams.append("" + e, `wfts${s}.${t}`), this
                        }
                        filter(e, t, r) {
                            return this.url.searchParams.append("" + e, `${t}.${r}`), this
                        }
                        match(e) {
                            return Object.keys(e).forEach((t => {
                                this.url.searchParams.append("" + t, "eq." + e[t])
                            })), this
                        }
                    }
                    class h extends i {
                        constructor(e, {
                            headers: t = {},
                            schema: r
                        } = {}) {
                            super({}), this.url = new URL(e), this.headers = Object.assign({}, t), this.schema = r
                        }
                        select(e = "*", {
                            head: t = !1,
                            count: r = null
                        } = {}) {
                            this.method = "GET";
                            let s = !1;
                            const n = e.split("").map((e => /\s/.test(e) && !s ? "" : ('"' === e && (s = !s), e))).join("");
                            return this.url.searchParams.set("select", n), r && (this.headers.Prefer = "count=" + r), t && (this.method = "HEAD"), new c(this)
                        }
                        insert(e, {
                            upsert: t = !1,
                            onConflict: r,
                            returning: s = "representation",
                            count: n = null
                        } = {}) {
                            this.method = "POST";
                            let i = [];
                            return i.push("return=" + s), t && i.push("resolution=merge-duplicates"), this.headers.Prefer = i.join(","), t && void 0 !== r && this.url.searchParams.set("on_conflict", r), this.body = e, n && (i.push("count=" + n), this.headers.Prefer = i.join(",")), new c(this)
                        }
                        update(e, {
                            returning: t = "representation",
                            count: r = null
                        } = {}) {
                            this.method = "PATCH";
                            let s = [];
                            return s.push("return=" + t), this.headers.Prefer = s.join(","), this.body = e, r && (s.push("count=" + r), this.headers.Prefer = s.join(",")), new c(this)
                        }
                        delete({
                            returning: e = "representation",
                            count: t = null
                        } = {}) {
                            this.method = "DELETE";
                            let r = [];
                            return r.push("return=" + e), this.headers.Prefer = r.join(","), t && (r.push("count=" + t), this.headers.Prefer = r.join(",")), new c(this)
                        }
                        rpc(e, {
                            head: t = !1,
                            count: r = null
                        } = {}) {
                            return this.method = "POST", this.body = e, r && (this.headers.Prefer = "count=" + r), t && (this.method = "HEAD"), new o(this)
                        }
                    }
                    class u {
                        constructor(e, {
                            headers: t = {},
                            schema: r
                        } = {}) {
                            this.url = e, this.headers = t, this.schema = r
                        }
                        auth(e) {
                            return this.headers.Authorization = "Bearer " + e, this
                        }
                        from(e) {
                            const t = `${this.url}/${e}`;
                            return new h(t, {
                                headers: this.headers,
                                schema: this.schema
                            })
                        }
                        rpc(e, t) {
                            const r = `${this.url}/rpc/${e}`;
                            return new h(r, {
                                headers: this.headers,
                                schema: this.schema
                            }).rpc(t)
                        }
                    }
                },
                59: (e, t, r) => {
                    "use strict";
                    r.r(t), r.d(t, {
                        RealtimeClient: () => O,
                        RealtimeSubscription: () => j,
                        Transformers: () => n
                    });
                    var s, n = {};
                    r.r(n), r.d(n, {
                            PostgresTypes: () => s,
                            convertCell: () => a,
                            convertChangeData: () => i,
                            convertColumn: () => o,
                            toArray: () => y,
                            toBoolean: () => h,
                            toDate: () => u,
                            toDateRange: () => l,
                            toFloat: () => d,
                            toInt: () => p,
                            toIntRange: () => f,
                            toJson: () => m,
                            toTimestampString: () => g
                        }),
                        function(e) {
                            e.abstime = "abstime", e.bool = "bool", e.date = "date", e.daterange = "daterange", e.float4 = "float4", e.float8 = "float8", e.int2 = "int2", e.int4 = "int4", e.int4range = "int4range", e.int8 = "int8", e.int8range = "int8range", e.json = "json", e.jsonb = "jsonb", e.money = "money", e.numeric = "numeric", e.oid = "oid", e.reltime = "reltime", e.time = "time", e.timestamp = "timestamp", e.timestamptz = "timestamptz", e.timetz = "timetz", e.tsrange = "tsrange", e.tstzrange = "tstzrange"
                        }(s || (s = {}));
                    const i = (e, t, r = {}) => {
                            let s = {},
                                n = void 0 !== r.skipTypes ? r.skipTypes : [];
                            return Object.entries(t).map((([r, i]) => {
                                s[r] = o(r, e, t, n)
                            })), s
                        },
                        o = (e, t, r, s) => {
                            let n = t.find((t => t.name == e));
                            return !n || s.includes(n.type) ? c(r[e]) : a(n.type, r[e])
                        },
                        a = (e, t) => {
                            try {
                                if (null === t) return null;
                                if ("_" === e.charAt(0)) {
                                    let r = e.slice(1, e.length);
                                    return y(t, r)
                                }
                                switch (e) {
                                    case s.abstime:
                                        return c(t);
                                    case s.bool:
                                        return h(t);
                                    case s.date:
                                        return c(t);
                                    case s.daterange:
                                        return l(t);
                                    case s.float4:
                                    case s.float8:
                                        return d(t);
                                    case s.int2:
                                    case s.int4:
                                        return p(t);
                                    case s.int4range:
                                        return f(t);
                                    case s.int8:
                                        return p(t);
                                    case s.int8range:
                                        return f(t);
                                    case s.json:
                                    case s.jsonb:
                                        return m(t);
                                    case s.money:
                                    case s.numeric:
                                        return d(t);
                                    case s.oid:
                                        return p(t);
                                    case s.reltime:
                                    case s.time:
                                        return c(t);
                                    case s.timestamp:
                                        return g(t);
                                    case s.timestamptz:
                                    case s.timetz:
                                        return c(t);
                                    case s.tsrange:
                                    case s.tstzrange:
                                        return l(t);
                                    default:
                                        return c(t)
                                }
                            } catch (r) {
                                return console.log(`Could not convert cell of type ${e} and value ${t}`), console.log("This is the error: " + r), t
                            }
                        },
                        c = e => e,
                        h = e => {
                            switch (e) {
                                case "t":
                                    return !0;
                                case "f":
                                    return !1;
                                default:
                                    return null
                            }
                        },
                        u = e => new Date(e),
                        l = e => {
                            let t = JSON.parse(e);
                            return [new Date(t[0]), new Date(t[1])]
                        },
                        d = e => parseFloat(e),
                        p = e => parseInt(e),
                        f = e => {
                            let t = JSON.parse(e);
                            return [parseInt(t[0]), parseInt(t[1])]
                        },
                        m = e => JSON.parse(e),
                        y = (e, t) => {
                            let r = e.slice(1, e.length - 1);
                            return (r.length > 0 ? r.split(",") : []).map((e => a(t, e)))
                        },
                        g = e => e.replace(" ", "T");
                    var v, b, w, _;
                    ! function(e) {
                        e[e.connecting = 0] = "connecting", e[e.open = 1] = "open", e[e.closing = 2] = "closing", e[e.closed = 3] = "closed"
                    }(v || (v = {})),
                    function(e) {
                        e.closed = "closed", e.errored = "errored", e.joined = "joined", e.joining = "joining", e.leaving = "leaving"
                    }(b || (b = {})),
                    function(e) {
                        e.close = "phx_close", e.error = "phx_error", e.join = "phx_join", e.reply = "phx_reply", e.leave = "phx_leave"
                    }(w || (w = {})),
                    function(e) {
                        e.websocket = "websocket"
                    }(_ || (_ = {}));
                    var S = r(563);
                    class E {
                        constructor(e, t) {
                            this.callback = e, this.timerCalc = t, this.timer = void 0, this.tries = 0, this.callback = e, this.timerCalc = t
                        }
                        reset() {
                            this.tries = 0, clearTimeout(this.timer)
                        }
                        scheduleTimeout() {
                            clearTimeout(this.timer), this.timer = setTimeout((() => {
                                this.tries = this.tries + 1, this.callback()
                            }), this.timerCalc(this.tries + 1))
                        }
                    }
                    class T {
                        constructor(e, t, r = {}, s = 1e4) {
                            this.channel = e, this.event = t, this.payload = r, this.timeout = s, this.sent = !1, this.timeoutTimer = void 0, this.ref = "", this.receivedResp = null, this.recHooks = [], this.refEvent = null
                        }
                        resend(e) {
                            this.timeout = e, this._cancelRefEvent(), this.ref = "", this.refEvent = null, this.receivedResp = null, this.sent = !1, this.send()
                        }
                        send() {
                            this._hasReceived("timeout") || (this.startTimeout(), this.sent = !0, this.channel.socket.push({
                                topic: this.channel.topic,
                                event: this.event,
                                payload: this.payload,
                                ref: this.ref
                            }))
                        }
                        receive(e, t) {
                            var r;
                            return this._hasReceived(e) && t(null === (r = this.receivedResp) || void 0 === r ? void 0 : r.response), this.recHooks.push({
                                status: e,
                                callback: t
                            }), this
                        }
                        startTimeout() {
                            this.timeoutTimer || (this.ref = this.channel.socket.makeRef(), this.refEvent = this.channel.replyEventName(this.ref), this.channel.on(this.refEvent, (e => {
                                this._cancelRefEvent(), this._cancelTimeout(), this.receivedResp = e, this._matchReceive(e)
                            })), this.timeoutTimer = setTimeout((() => {
                                this.trigger("timeout", {})
                            }), this.timeout))
                        }
                        trigger(e, t) {
                            this.refEvent && this.channel.trigger(this.refEvent, {
                                status: e,
                                response: t
                            })
                        }
                        _cancelRefEvent() {
                            this.refEvent && this.channel.off(this.refEvent)
                        }
                        _cancelTimeout() {
                            clearTimeout(this.timeoutTimer), this.timeoutTimer = void 0
                        }
                        _matchReceive({
                            status: e,
                            response: t
                        }) {
                            this.recHooks.filter((t => t.status === e)).forEach((e => e.callback(t)))
                        }
                        _hasReceived(e) {
                            return this.receivedResp && this.receivedResp.status === e
                        }
                    }
                    class j {
                        constructor(e, t = {}, r) {
                            this.topic = e, this.params = t, this.socket = r, this.bindings = [], this.state = b.closed, this.joinedOnce = !1, this.pushBuffer = [], this.timeout = this.socket.timeout, this.joinPush = new T(this, w.join, this.params, this.timeout), this.rejoinTimer = new E((() => this.rejoinUntilConnected()), this.socket.reconnectAfterMs), this.joinPush.receive("ok", (() => {
                                this.state = b.joined, this.rejoinTimer.reset(), this.pushBuffer.forEach((e => e.send())), this.pushBuffer = []
                            })), this.onClose((() => {
                                this.rejoinTimer.reset(), this.socket.log("channel", `close ${this.topic} ${this.joinRef()}`), this.state = b.closed, this.socket.remove(this)
                            })), this.onError((e => {
                                this.isLeaving() || this.isClosed() || (this.socket.log("channel", "error " + this.topic, e), this.state = b.errored, this.rejoinTimer.scheduleTimeout())
                            })), this.joinPush.receive("timeout", (() => {
                                this.isJoining() && (this.socket.log("channel", "timeout " + this.topic, this.joinPush.timeout), this.state = b.errored, this.rejoinTimer.scheduleTimeout())
                            })), this.on(w.reply, ((e, t) => {
                                this.trigger(this.replyEventName(t), e)
                            }))
                        }
                        rejoinUntilConnected() {
                            this.rejoinTimer.scheduleTimeout(), this.socket.isConnected() && this.rejoin()
                        }
                        subscribe(e = this.timeout) {
                            if (this.joinedOnce) throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
                            return this.joinedOnce = !0, this.rejoin(e), this.joinPush
                        }
                        onClose(e) {
                            this.on(w.close, e)
                        }
                        onError(e) {
                            this.on(w.error, (t => e(t)))
                        }
                        on(e, t) {
                            this.bindings.push({
                                event: e,
                                callback: t
                            })
                        }
                        off(e) {
                            this.bindings = this.bindings.filter((t => t.event !== e))
                        }
                        canPush() {
                            return this.socket.isConnected() && this.isJoined()
                        }
                        push(e, t, r = this.timeout) {
                            if (!this.joinedOnce) throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
                            let s = new T(this, e, t, r);
                            return this.canPush() ? s.send() : (s.startTimeout(), this.pushBuffer.push(s)), s
                        }
                        unsubscribe(e = this.timeout) {
                            this.state = b.leaving;
                            let t = () => {
                                    this.socket.log("channel", "leave " + this.topic), this.trigger(w.close, "leave", this.joinRef())
                                },
                                r = new T(this, w.leave, {}, e);
                            return r.receive("ok", (() => t())).receive("timeout", (() => t())), r.send(), this.canPush() || r.trigger("ok", {}), r
                        }
                        onMessage(e, t, r) {
                            return t
                        }
                        isMember(e) {
                            return this.topic === e
                        }
                        joinRef() {
                            return this.joinPush.ref
                        }
                        sendJoin(e) {
                            this.state = b.joining, this.joinPush.resend(e)
                        }
                        rejoin(e = this.timeout) {
                            this.isLeaving() || this.sendJoin(e)
                        }
                        trigger(e, t, r) {
                            let {
                                close: s,
                                error: n,
                                leave: i,
                                join: o
                            } = w;
                            if (r && [s, n, i, o].indexOf(e) >= 0 && r !== this.joinRef()) return;
                            let a = this.onMessage(e, t, r);
                            if (t && !a) throw "channel onMessage callbacks must return the payload, modified or unmodified";
                            this.bindings.filter((t => t.event === e)).map((e => e.callback(a, r)))
                        }
                        replyEventName(e) {
                            return "chan_reply_" + e
                        }
                        isClosed() {
                            return this.state === b.closed
                        }
                        isErrored() {
                            return this.state === b.errored
                        }
                        isJoined() {
                            return this.state === b.joined
                        }
                        isJoining() {
                            return this.state === b.joining
                        }
                        isLeaving() {
                            return this.state === b.leaving
                        }
                    }
                    var x = r(840);
                    const k = () => {};
                    class O {
                        constructor(e, t) {
                            this.channels = [], this.endPoint = "", this.headers = {}, this.params = {}, this.timeout = 1e4, this.transport = x.w3cwebsocket, this.heartbeatIntervalMs = 3e4, this.longpollerTimeout = 2e4, this.heartbeatTimer = void 0, this.pendingHeartbeatRef = null, this.ref = 0, this.logger = k, this.conn = null, this.sendBuffer = [], this.stateChangeCallbacks = {
                                open: [],
                                close: [],
                                error: [],
                                message: []
                            }, this.endPoint = `${e}/${_.websocket}`, (null == t ? void 0 : t.params) && (this.params = t.params), (null == t ? void 0 : t.headers) && (this.headers = t.headers), (null == t ? void 0 : t.timeout) && (this.timeout = t.timeout), (null == t ? void 0 : t.logger) && (this.logger = t.logger), (null == t ? void 0 : t.transport) && (this.transport = t.transport), (null == t ? void 0 : t.heartbeatIntervalMs) && (this.heartbeatIntervalMs = t.heartbeatIntervalMs), (null == t ? void 0 : t.longpollerTimeout) && (this.longpollerTimeout = t.longpollerTimeout), this.reconnectAfterMs = (null == t ? void 0 : t.reconnectAfterMs) ? t.reconnectAfterMs : e => [1e3, 2e3, 5e3, 1e4][e - 1] || 1e4, this.encode = (null == t ? void 0 : t.encode) ? t.encode : (e, t) => t(JSON.stringify(e)), this.decode = (null == t ? void 0 : t.decode) ? t.decode : (e, t) => t(JSON.parse(e)), this.reconnectTimer = new E((() => {
                                return e = this, t = void 0, s = function*() {
                                    yield this.disconnect(), this.connect()
                                }, new((r = void 0) || (r = Promise))((function(n, i) {
                                    function o(e) {
                                        try {
                                            c(s.next(e))
                                        } catch (e) {
                                            i(e)
                                        }
                                    }

                                    function a(e) {
                                        try {
                                            c(s.throw(e))
                                        } catch (e) {
                                            i(e)
                                        }
                                    }

                                    function c(e) {
                                        var t;
                                        e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                                            e(t)
                                        }))).then(o, a)
                                    }
                                    c((s = s.apply(e, t || [])).next())
                                }));
                                var e, t, r, s
                            }), this.reconnectAfterMs)
                        }
                        connect() {
                            this.conn || (this.conn = new this.transport(this.endPointURL(), [], null, this.headers), this.conn && (this.conn.onopen = () => this._onConnOpen(), this.conn.onerror = e => this._onConnError(e), this.conn.onmessage = e => this.onConnMessage(e), this.conn.onclose = e => this._onConnClose(e)))
                        }
                        disconnect(e, t) {
                            return new Promise(((r, s) => {
                                try {
                                    this.conn && (this.conn.onclose = function() {}, e ? this.conn.close(e, t || "") : this.conn.close(), this.conn = null), r({
                                        error: null,
                                        data: !0
                                    })
                                } catch (e) {
                                    r({
                                        error: e,
                                        data: !1
                                    })
                                }
                            }))
                        }
                        log(e, t, r) {
                            this.logger(e, t, r)
                        }
                        onOpen(e) {
                            this.stateChangeCallbacks.open.push(e)
                        }
                        onClose(e) {
                            this.stateChangeCallbacks.close.push(e)
                        }
                        onError(e) {
                            this.stateChangeCallbacks.error.push(e)
                        }
                        onMessage(e) {
                            this.stateChangeCallbacks.message.push(e)
                        }
                        connectionState() {
                            switch (this.conn && this.conn.readyState) {
                                case v.connecting:
                                    return "connecting";
                                case v.open:
                                    return "open";
                                case v.closing:
                                    return "closing";
                                default:
                                    return "closed"
                            }
                        }
                        isConnected() {
                            return "open" === this.connectionState()
                        }
                        remove(e) {
                            this.channels = this.channels.filter((t => t.joinRef() !== e.joinRef()))
                        }
                        channel(e, t = {}) {
                            let r = new j(e, t, this);
                            return this.channels.push(r), r
                        }
                        push(e) {
                            let {
                                topic: t,
                                event: r,
                                payload: s,
                                ref: n
                            } = e, i = () => {
                                this.encode(e, (e => {
                                    var t;
                                    null === (t = this.conn) || void 0 === t || t.send(e)
                                }))
                            };
                            this.log("push", `${t} ${r} (${n})`, s), this.isConnected() ? i() : this.sendBuffer.push(i)
                        }
                        onConnMessage(e) {
                            this.decode(e.data, (e => {
                                let {
                                    topic: t,
                                    event: r,
                                    payload: s,
                                    ref: n
                                } = e;
                                n && n === this.pendingHeartbeatRef && (this.pendingHeartbeatRef = null), this.log("receive", `${s.status||""} ${t} ${r} ${n&&"("+n+")"||""}`, s), this.channels.filter((e => e.isMember(t))).forEach((e => e.trigger(r, s, n))), this.stateChangeCallbacks.message.forEach((t => t(e)))
                            }))
                        }
                        endPointURL() {
                            return this._appendParams(this.endPoint, Object.assign({}, this.params, {
                                vsn: "1.0.0"
                            }))
                        }
                        makeRef() {
                            let e = this.ref + 1;
                            return e === this.ref ? this.ref = 0 : this.ref = e, this.ref.toString()
                        }
                        _onConnOpen() {
                            this.log("transport", "connected to " + this.endPointURL()), this._flushSendBuffer(), this.reconnectTimer.reset(), clearInterval(this.heartbeatTimer), this.heartbeatTimer = setInterval((() => this._sendHeartbeat()), this.heartbeatIntervalMs), this.stateChangeCallbacks.open.forEach((e => e()))
                        }
                        _onConnClose(e) {
                            this.log("transport", "close", e), this._triggerChanError(), clearInterval(this.heartbeatTimer), this.reconnectTimer.scheduleTimeout(), this.stateChangeCallbacks.close.forEach((t => t(e)))
                        }
                        _onConnError(e) {
                            this.log("transport", e.message), this._triggerChanError(), this.stateChangeCallbacks.error.forEach((t => t(e)))
                        }
                        _triggerChanError() {
                            this.channels.forEach((e => e.trigger(w.error)))
                        }
                        _appendParams(e, t) {
                            if (0 === Object.keys(t).length) return e;
                            let r = e.match(/\?/) ? "&" : "?";
                            return `${e}${r}${S.stringify(t)}`
                        }
                        _flushSendBuffer() {
                            this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach((e => e())), this.sendBuffer = [])
                        }
                        _sendHeartbeat() {
                            var e;
                            if (this.isConnected()) {
                                if (this.pendingHeartbeatRef) return this.pendingHeartbeatRef = null, this.log("transport", "heartbeat timeout. Attempting to re-establish connection"), void(null === (e = this.conn) || void 0 === e || e.close(1e3, "hearbeat timeout"));
                                this.pendingHeartbeatRef = this.makeRef(), this.push({
                                    topic: "phoenix",
                                    event: "heartbeat",
                                    payload: {},
                                    ref: this.pendingHeartbeatRef
                                })
                            }
                        }
                    }
                },
                98: function(e, t) {
                    var r = function(e) {
                        function t() {
                            this.fetch = !1, this.DOMException = e.DOMException
                        }
                        return t.prototype = e, new t
                    }("undefined" != typeof self ? self : this);
                    ! function(e) {
                        ! function(t) {
                            var r = "URLSearchParams" in e,
                                s = "Symbol" in e && "iterator" in Symbol,
                                n = "FileReader" in e && "Blob" in e && function() {
                                    try {
                                        return new Blob, !0
                                    } catch (e) {
                                        return !1
                                    }
                                }(),
                                i = "FormData" in e,
                                o = "ArrayBuffer" in e;
                            if (o) var a = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                                c = ArrayBuffer.isView || function(e) {
                                    return e && a.indexOf(Object.prototype.toString.call(e)) > -1
                                };

                            function h(e) {
                                if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");
                                return e.toLowerCase()
                            }

                            function u(e) {
                                return "string" != typeof e && (e = String(e)), e
                            }

                            function l(e) {
                                var t = {
                                    next: function() {
                                        var t = e.shift();
                                        return {
                                            done: void 0 === t,
                                            value: t
                                        }
                                    }
                                };
                                return s && (t[Symbol.iterator] = function() {
                                    return t
                                }), t
                            }

                            function d(e) {
                                this.map = {}, e instanceof d ? e.forEach((function(e, t) {
                                    this.append(t, e)
                                }), this) : Array.isArray(e) ? e.forEach((function(e) {
                                    this.append(e[0], e[1])
                                }), this) : e && Object.getOwnPropertyNames(e).forEach((function(t) {
                                    this.append(t, e[t])
                                }), this)
                            }

                            function p(e) {
                                if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
                                e.bodyUsed = !0
                            }

                            function f(e) {
                                return new Promise((function(t, r) {
                                    e.onload = function() {
                                        t(e.result)
                                    }, e.onerror = function() {
                                        r(e.error)
                                    }
                                }))
                            }

                            function m(e) {
                                var t = new FileReader,
                                    r = f(t);
                                return t.readAsArrayBuffer(e), r
                            }

                            function y(e) {
                                if (e.slice) return e.slice(0);
                                var t = new Uint8Array(e.byteLength);
                                return t.set(new Uint8Array(e)), t.buffer
                            }

                            function g() {
                                return this.bodyUsed = !1, this._initBody = function(e) {
                                    var t;
                                    this._bodyInit = e, e ? "string" == typeof e ? this._bodyText = e : n && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : i && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : r && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : o && n && (t = e) && DataView.prototype.isPrototypeOf(t) ? (this._bodyArrayBuffer = y(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : o && (ArrayBuffer.prototype.isPrototypeOf(e) || c(e)) ? this._bodyArrayBuffer = y(e) : this._bodyText = e = Object.prototype.toString.call(e) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : r && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                                }, n && (this.blob = function() {
                                    var e = p(this);
                                    if (e) return e;
                                    if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                                    if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                                    if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                                    return Promise.resolve(new Blob([this._bodyText]))
                                }, this.arrayBuffer = function() {
                                    return this._bodyArrayBuffer ? p(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(m)
                                }), this.text = function() {
                                    var e, t, r, s = p(this);
                                    if (s) return s;
                                    if (this._bodyBlob) return e = this._bodyBlob, r = f(t = new FileReader), t.readAsText(e), r;
                                    if (this._bodyArrayBuffer) return Promise.resolve(function(e) {
                                        for (var t = new Uint8Array(e), r = new Array(t.length), s = 0; s < t.length; s++) r[s] = String.fromCharCode(t[s]);
                                        return r.join("")
                                    }(this._bodyArrayBuffer));
                                    if (this._bodyFormData) throw new Error("could not read FormData body as text");
                                    return Promise.resolve(this._bodyText)
                                }, i && (this.formData = function() {
                                    return this.text().then(w)
                                }), this.json = function() {
                                    return this.text().then(JSON.parse)
                                }, this
                            }
                            d.prototype.append = function(e, t) {
                                e = h(e), t = u(t);
                                var r = this.map[e];
                                this.map[e] = r ? r + ", " + t : t
                            }, d.prototype.delete = function(e) {
                                delete this.map[h(e)]
                            }, d.prototype.get = function(e) {
                                return e = h(e), this.has(e) ? this.map[e] : null
                            }, d.prototype.has = function(e) {
                                return this.map.hasOwnProperty(h(e))
                            }, d.prototype.set = function(e, t) {
                                this.map[h(e)] = u(t)
                            }, d.prototype.forEach = function(e, t) {
                                for (var r in this.map) this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this)
                            }, d.prototype.keys = function() {
                                var e = [];
                                return this.forEach((function(t, r) {
                                    e.push(r)
                                })), l(e)
                            }, d.prototype.values = function() {
                                var e = [];
                                return this.forEach((function(t) {
                                    e.push(t)
                                })), l(e)
                            }, d.prototype.entries = function() {
                                var e = [];
                                return this.forEach((function(t, r) {
                                    e.push([r, t])
                                })), l(e)
                            }, s && (d.prototype[Symbol.iterator] = d.prototype.entries);
                            var v = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                            function b(e, t) {
                                var r, s, n = (t = t || {}).body;
                                if (e instanceof b) {
                                    if (e.bodyUsed) throw new TypeError("Already read");
                                    this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new d(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, n || null == e._bodyInit || (n = e._bodyInit, e.bodyUsed = !0)
                                } else this.url = String(e);
                                if (this.credentials = t.credentials || this.credentials || "same-origin", !t.headers && this.headers || (this.headers = new d(t.headers)), this.method = (s = (r = t.method || this.method || "GET").toUpperCase(), v.indexOf(s) > -1 ? s : r), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && n) throw new TypeError("Body not allowed for GET or HEAD requests");
                                this._initBody(n)
                            }

                            function w(e) {
                                var t = new FormData;
                                return e.trim().split("&").forEach((function(e) {
                                    if (e) {
                                        var r = e.split("="),
                                            s = r.shift().replace(/\+/g, " "),
                                            n = r.join("=").replace(/\+/g, " ");
                                        t.append(decodeURIComponent(s), decodeURIComponent(n))
                                    }
                                })), t
                            }

                            function _(e, t) {
                                t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new d(t.headers), this.url = t.url || "", this._initBody(e)
                            }
                            b.prototype.clone = function() {
                                return new b(this, {
                                    body: this._bodyInit
                                })
                            }, g.call(b.prototype), g.call(_.prototype), _.prototype.clone = function() {
                                return new _(this._bodyInit, {
                                    status: this.status,
                                    statusText: this.statusText,
                                    headers: new d(this.headers),
                                    url: this.url
                                })
                            }, _.error = function() {
                                var e = new _(null, {
                                    status: 0,
                                    statusText: ""
                                });
                                return e.type = "error", e
                            };
                            var S = [301, 302, 303, 307, 308];
                            _.redirect = function(e, t) {
                                if (-1 === S.indexOf(t)) throw new RangeError("Invalid status code");
                                return new _(null, {
                                    status: t,
                                    headers: {
                                        location: e
                                    }
                                })
                            }, t.DOMException = e.DOMException;
                            try {
                                new t.DOMException
                            } catch (e) {
                                t.DOMException = function(e, t) {
                                    this.message = e, this.name = t;
                                    var r = Error(e);
                                    this.stack = r.stack
                                }, t.DOMException.prototype = Object.create(Error.prototype), t.DOMException.prototype.constructor = t.DOMException
                            }

                            function E(e, r) {
                                return new Promise((function(s, i) {
                                    var o = new b(e, r);
                                    if (o.signal && o.signal.aborted) return i(new t.DOMException("Aborted", "AbortError"));
                                    var a = new XMLHttpRequest;

                                    function c() {
                                        a.abort()
                                    }
                                    a.onload = function() {
                                        var e, t, r = {
                                            status: a.status,
                                            statusText: a.statusText,
                                            headers: (e = a.getAllResponseHeaders() || "", t = new d, e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach((function(e) {
                                                var r = e.split(":"),
                                                    s = r.shift().trim();
                                                if (s) {
                                                    var n = r.join(":").trim();
                                                    t.append(s, n)
                                                }
                                            })), t)
                                        };
                                        r.url = "responseURL" in a ? a.responseURL : r.headers.get("X-Request-URL");
                                        var n = "response" in a ? a.response : a.responseText;
                                        s(new _(n, r))
                                    }, a.onerror = function() {
                                        i(new TypeError("Network request failed"))
                                    }, a.ontimeout = function() {
                                        i(new TypeError("Network request failed"))
                                    }, a.onabort = function() {
                                        i(new t.DOMException("Aborted", "AbortError"))
                                    }, a.open(o.method, o.url, !0), "include" === o.credentials ? a.withCredentials = !0 : "omit" === o.credentials && (a.withCredentials = !1), "responseType" in a && n && (a.responseType = "blob"), o.headers.forEach((function(e, t) {
                                        a.setRequestHeader(t, e)
                                    })), o.signal && (o.signal.addEventListener("abort", c), a.onreadystatechange = function() {
                                        4 === a.readyState && o.signal.removeEventListener("abort", c)
                                    }), a.send(void 0 === o._bodyInit ? null : o._bodyInit)
                                }))
                            }
                            E.polyfill = !0, e.fetch || (e.fetch = E, e.Headers = d, e.Request = b, e.Response = _), t.Headers = d, t.Request = b, t.Response = _, t.fetch = E
                        }({})
                    }(r), delete r.fetch.polyfill, (t = r.fetch).default = r.fetch, t.fetch = r.fetch, t.Headers = r.Headers, t.Request = r.Request, t.Response = r.Response, e.exports = t
                },
                20: e => {
                    "use strict";
                    var t = "%[a-f0-9]{2}",
                        r = new RegExp(t, "gi"),
                        s = new RegExp("(" + t + ")+", "gi");

                    function n(e, t) {
                        try {
                            return decodeURIComponent(e.join(""))
                        } catch (e) {}
                        if (1 === e.length) return e;
                        t = t || 1;
                        var r = e.slice(0, t),
                            s = e.slice(t);
                        return Array.prototype.concat.call([], n(r), n(s))
                    }

                    function i(e) {
                        try {
                            return decodeURIComponent(e)
                        } catch (i) {
                            for (var t = e.match(r), s = 1; s < t.length; s++) t = (e = n(t, s).join("")).match(r);
                            return e
                        }
                    }
                    e.exports = function(e) {
                        if ("string" != typeof e) throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
                        try {
                            return e = e.replace(/\+/g, " "), decodeURIComponent(e)
                        } catch (t) {
                            return function(e) {
                                for (var t = {
                                        "%FE%FF": "��",
                                        "%FF%FE": "��"
                                    }, r = s.exec(e); r;) {
                                    try {
                                        t[r[0]] = decodeURIComponent(r[0])
                                    } catch (e) {
                                        var n = i(r[0]);
                                        n !== r[0] && (t[r[0]] = n)
                                    }
                                    r = s.exec(e)
                                }
                                t["%C2"] = "�";
                                for (var o = Object.keys(t), a = 0; a < o.length; a++) {
                                    var c = o[a];
                                    e = e.replace(new RegExp(c, "g"), t[c])
                                }
                                return e
                            }(e)
                        }
                    }
                },
                284: e => {
                    var t = function() {
                        if ("object" == typeof self && self) return self;
                        if ("object" == typeof window && window) return window;
                        throw new Error("Unable to resolve global `this`")
                    };
                    e.exports = function() {
                        if (this) return this;
                        if ("object" == typeof globalThis && globalThis) return globalThis;
                        try {
                            Object.defineProperty(Object.prototype, "__global__", {
                                get: function() {
                                    return this
                                },
                                configurable: !0
                            })
                        } catch (e) {
                            return t()
                        }
                        try {
                            return __global__ || t()
                        } finally {
                            delete Object.prototype.__global__
                        }
                    }()
                },
                563: (e, t, r) => {
                    "use strict";
                    const s = r(610),
                        n = r(20),
                        i = r(500);

                    function o(e) {
                        if ("string" != typeof e || 1 !== e.length) throw new TypeError("arrayFormatSeparator must be single character string")
                    }

                    function a(e, t) {
                        return t.encode ? t.strict ? s(e) : encodeURIComponent(e) : e
                    }

                    function c(e, t) {
                        return t.decode ? n(e) : e
                    }

                    function h(e) {
                        return Array.isArray(e) ? e.sort() : "object" == typeof e ? h(Object.keys(e)).sort(((e, t) => Number(e) - Number(t))).map((t => e[t])) : e
                    }

                    function u(e) {
                        const t = e.indexOf("#");
                        return -1 !== t && (e = e.slice(0, t)), e
                    }

                    function l(e) {
                        const t = (e = u(e)).indexOf("?");
                        return -1 === t ? "" : e.slice(t + 1)
                    }

                    function d(e, t) {
                        return t.parseNumbers && !Number.isNaN(Number(e)) && "string" == typeof e && "" !== e.trim() ? e = Number(e) : !t.parseBooleans || null === e || "true" !== e.toLowerCase() && "false" !== e.toLowerCase() || (e = "true" === e.toLowerCase()), e
                    }

                    function p(e, t) {
                        o((t = Object.assign({
                            decode: !0,
                            sort: !0,
                            arrayFormat: "none",
                            arrayFormatSeparator: ",",
                            parseNumbers: !1,
                            parseBooleans: !1
                        }, t)).arrayFormatSeparator);
                        const r = function(e) {
                                let t;
                                switch (e.arrayFormat) {
                                    case "index":
                                        return (e, r, s) => {
                                            t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), t ? (void 0 === s[e] && (s[e] = {}), s[e][t[1]] = r) : s[e] = r
                                        };
                                    case "bracket":
                                        return (e, r, s) => {
                                            t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), t ? void 0 !== s[e] ? s[e] = [].concat(s[e], r) : s[e] = [r] : s[e] = r
                                        };
                                    case "comma":
                                    case "separator":
                                        return (t, r, s) => {
                                            const n = "string" == typeof r && r.includes(e.arrayFormatSeparator),
                                                i = "string" == typeof r && !n && c(r, e).includes(e.arrayFormatSeparator);
                                            r = i ? c(r, e) : r;
                                            const o = n || i ? r.split(e.arrayFormatSeparator).map((t => c(t, e))) : null === r ? r : c(r, e);
                                            s[t] = o
                                        };
                                    default:
                                        return (e, t, r) => {
                                            void 0 !== r[e] ? r[e] = [].concat(r[e], t) : r[e] = t
                                        }
                                }
                            }(t),
                            s = Object.create(null);
                        if ("string" != typeof e) return s;
                        if (!(e = e.trim().replace(/^[?#&]/, ""))) return s;
                        for (const n of e.split("&")) {
                            let [e, o] = i(t.decode ? n.replace(/\+/g, " ") : n, "=");
                            o = void 0 === o ? null : ["comma", "separator"].includes(t.arrayFormat) ? o : c(o, t), r(c(e, t), o, s)
                        }
                        for (const e of Object.keys(s)) {
                            const r = s[e];
                            if ("object" == typeof r && null !== r)
                                for (const e of Object.keys(r)) r[e] = d(r[e], t);
                            else s[e] = d(r, t)
                        }
                        return !1 === t.sort ? s : (!0 === t.sort ? Object.keys(s).sort() : Object.keys(s).sort(t.sort)).reduce(((e, t) => {
                            const r = s[t];
                            return Boolean(r) && "object" == typeof r && !Array.isArray(r) ? e[t] = h(r) : e[t] = r, e
                        }), Object.create(null))
                    }
                    t.extract = l, t.parse = p, t.stringify = (e, t) => {
                        if (!e) return "";
                        o((t = Object.assign({
                            encode: !0,
                            strict: !0,
                            arrayFormat: "none",
                            arrayFormatSeparator: ","
                        }, t)).arrayFormatSeparator);
                        const r = r => t.skipNull && null == e[r] || t.skipEmptyString && "" === e[r],
                            s = function(e) {
                                switch (e.arrayFormat) {
                                    case "index":
                                        return t => (r, s) => {
                                            const n = r.length;
                                            return void 0 === s || e.skipNull && null === s || e.skipEmptyString && "" === s ? r : null === s ? [...r, [a(t, e), "[", n, "]"].join("")] : [...r, [a(t, e), "[", a(n, e), "]=", a(s, e)].join("")]
                                        };
                                    case "bracket":
                                        return t => (r, s) => void 0 === s || e.skipNull && null === s || e.skipEmptyString && "" === s ? r : null === s ? [...r, [a(t, e), "[]"].join("")] : [...r, [a(t, e), "[]=", a(s, e)].join("")];
                                    case "comma":
                                    case "separator":
                                        return t => (r, s) => null == s || 0 === s.length ? r : 0 === r.length ? [
                                            [a(t, e), "=", a(s, e)].join("")
                                        ] : [
                                            [r, a(s, e)].join(e.arrayFormatSeparator)
                                        ];
                                    default:
                                        return t => (r, s) => void 0 === s || e.skipNull && null === s || e.skipEmptyString && "" === s ? r : null === s ? [...r, a(t, e)] : [...r, [a(t, e), "=", a(s, e)].join("")]
                                }
                            }(t),
                            n = {};
                        for (const t of Object.keys(e)) r(t) || (n[t] = e[t]);
                        const i = Object.keys(n);
                        return !1 !== t.sort && i.sort(t.sort), i.map((r => {
                            const n = e[r];
                            return void 0 === n ? "" : null === n ? a(r, t) : Array.isArray(n) ? n.reduce(s(r), []).join("&") : a(r, t) + "=" + a(n, t)
                        })).filter((e => e.length > 0)).join("&")
                    }, t.parseUrl = (e, t) => {
                        t = Object.assign({
                            decode: !0
                        }, t);
                        const [r, s] = i(e, "#");
                        return Object.assign({
                            url: r.split("?")[0] || "",
                            query: p(l(e), t)
                        }, t && t.parseFragmentIdentifier && s ? {
                            fragmentIdentifier: c(s, t)
                        } : {})
                    }, t.stringifyUrl = (e, r) => {
                        r = Object.assign({
                            encode: !0,
                            strict: !0
                        }, r);
                        const s = u(e.url).split("?")[0] || "",
                            n = t.extract(e.url),
                            i = t.parse(n, {
                                sort: !1
                            }),
                            o = Object.assign(i, e.query);
                        let c = t.stringify(o, r);
                        c && (c = "?" + c);
                        let h = function(e) {
                            let t = "";
                            const r = e.indexOf("#");
                            return -1 !== r && (t = e.slice(r)), t
                        }(e.url);
                        return e.fragmentIdentifier && (h = "#" + a(e.fragmentIdentifier, r)), `${s}${c}${h}`
                    }
                },
                500: e => {
                    "use strict";
                    e.exports = (e, t) => {
                        if ("string" != typeof e || "string" != typeof t) throw new TypeError("Expected the arguments to be of type `string`");
                        if ("" === t) return [e];
                        const r = e.indexOf(t);
                        return -1 === r ? [e] : [e.slice(0, r), e.slice(r + t.length)]
                    }
                },
                610: e => {
                    "use strict";
                    e.exports = e => encodeURIComponent(e).replace(/[!'()*]/g, (e => "%" + e.charCodeAt(0).toString(16).toUpperCase()))
                },
                296: function(e, t, r) {
                    "use strict";
                    var s = this && this.__awaiter || function(e, t, r, s) {
                        return new(r || (r = Promise))((function(n, i) {
                            function o(e) {
                                try {
                                    c(s.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function a(e) {
                                try {
                                    c(s.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function c(e) {
                                var t;
                                e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                                    e(t)
                                }))).then(o, a)
                            }
                            c((s = s.apply(e, t || [])).next())
                        }))
                    };
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    const n = r(678),
                        i = r(283),
                        o = r(528),
                        a = r(13),
                        c = r(59),
                        h = {
                            schema: "public",
                            autoRefreshToken: !0,
                            persistSession: !0,
                            detectSessionInUrl: !0,
                            localStorage: globalThis.localStorage,
                            headers: n.DEFAULT_HEADERS
                        };
                    t.default = class {
                        constructor(e, t, r) {
                            if (this.supabaseUrl = e, this.supabaseKey = t, !e) throw new Error("supabaseUrl is required.");
                            if (!t) throw new Error("supabaseKey is required.");
                            const s = Object.assign(Object.assign({}, h), r);
                            this.restUrl = e + "/rest/v1", this.realtimeUrl = (e + "/realtime/v1").replace("http", "ws"), this.authUrl = e + "/auth/v1", this.schema = s.schema, this.auth = this._initSupabaseAuthClient(s), this.realtime = this._initRealtimeClient()
                        }
                        from(e) {
                            const t = `${this.restUrl}/${e}`;
                            return new o.SupabaseQueryBuilder(t, {
                                headers: this._getAuthHeaders(),
                                schema: this.schema,
                                realtime: this.realtime,
                                table: e
                            })
                        }
                        rpc(e, t) {
                            return this._initPostgRESTClient().rpc(e, t)
                        }
                        removeSubscription(e) {
                            return new Promise((t => s(this, void 0, void 0, (function*() {
                                try {
                                    yield this._closeSubscription(e);
                                    const r = this.getSubscriptions().length;
                                    if (!r) {
                                        const {
                                            error: e
                                        } = yield this.realtime.disconnect();
                                        if (e) return t({
                                            error: e
                                        })
                                    }
                                    return t({
                                        error: null,
                                        data: {
                                            openSubscriptions: r
                                        }
                                    })
                                } catch (e) {
                                    return t({
                                        error: e
                                    })
                                }
                            }))))
                        }
                        _closeSubscription(e) {
                            return s(this, void 0, void 0, (function*() {
                                e.isClosed() || (yield this._closeChannel(e))
                            }))
                        }
                        getSubscriptions() {
                            return this.realtime.channels
                        }
                        _initSupabaseAuthClient({
                            autoRefreshToken: e,
                            persistSession: t,
                            detectSessionInUrl: r,
                            localStorage: s
                        }) {
                            return new i.SupabaseAuthClient({
                                url: this.authUrl,
                                headers: {
                                    Authorization: "Bearer " + this.supabaseKey,
                                    apikey: "" + this.supabaseKey
                                },
                                autoRefreshToken: e,
                                persistSession: t,
                                detectSessionInUrl: r,
                                localStorage: s
                            })
                        }
                        _initRealtimeClient() {
                            return new c.RealtimeClient(this.realtimeUrl, {
                                params: {
                                    apikey: this.supabaseKey
                                }
                            })
                        }
                        _initPostgRESTClient() {
                            return new a.PostgrestClient(this.restUrl, {
                                headers: this._getAuthHeaders(),
                                schema: this.schema
                            })
                        }
                        _getAuthHeaders() {
                            var e, t;
                            const r = {},
                                s = null !== (t = null === (e = this.auth.session()) || void 0 === e ? void 0 : e.access_token) && void 0 !== t ? t : this.supabaseKey;
                            return r.apikey = this.supabaseKey, r.Authorization = "Bearer " + s, r
                        }
                        _closeChannel(e) {
                            return new Promise(((t, r) => {
                                e.unsubscribe().receive("ok", (() => (this.realtime.remove(e), t(!0)))).receive("error", (e => r(e)))
                            }))
                        }
                    }
                },
                341: function(e, t, r) {
                    "use strict";
                    var s = this && this.__createBinding || (Object.create ? function(e, t, r, s) {
                            void 0 === s && (s = r), Object.defineProperty(e, s, {
                                enumerable: !0,
                                get: function() {
                                    return t[r]
                                }
                            })
                        } : function(e, t, r, s) {
                            void 0 === s && (s = r), e[s] = t[r]
                        }),
                        n = this && this.__exportStar || function(e, t) {
                            for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || s(t, e, r)
                        },
                        i = this && this.__importDefault || function(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            }
                        };
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.AuthUser = t.SupabaseRealtimePayload = t.SupabaseClientOptions = t.SupabaseClient = t.createClient = void 0;
                    const o = i(r(296));
                    t.SupabaseClient = o.default;
                    const a = r(717);
                    Object.defineProperty(t, "SupabaseClientOptions", {
                        enumerable: !0,
                        get: function() {
                            return a.SupabaseClientOptions
                        }
                    }), Object.defineProperty(t, "SupabaseRealtimePayload", {
                        enumerable: !0,
                        get: function() {
                            return a.SupabaseRealtimePayload
                        }
                    });
                    const c = r(101);
                    Object.defineProperty(t, "AuthUser", {
                        enumerable: !0,
                        get: function() {
                            return c.User
                        }
                    }), n(r(101), t), n(r(59), t), t.createClient = (e, t, r) => new o.default(e, t, r)
                },
                283: (e, t, r) => {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.SupabaseAuthClient = void 0;
                    const s = r(101);
                    class n extends s.GoTrueClient {
                        constructor(e) {
                            super(e)
                        }
                    }
                    t.SupabaseAuthClient = n
                },
                528: (e, t, r) => {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.SupabaseQueryBuilder = void 0;
                    const s = r(13),
                        n = r(308);
                    class i extends s.PostgrestQueryBuilder {
                        constructor(e, {
                            headers: t = {},
                            schema: r,
                            realtime: s,
                            table: i
                        }) {
                            super(e, {
                                headers: t,
                                schema: r
                            }), this._subscription = new n.SupabaseRealtimeClient(s, r, i), this._realtime = s
                        }
                        on(e, t) {
                            return this._realtime.isConnected() || this._realtime.connect(), this._subscription.on(e, t)
                        }
                    }
                    t.SupabaseQueryBuilder = i
                },
                308: (e, t, r) => {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.SupabaseRealtimeClient = void 0;
                    const s = r(59);
                    t.SupabaseRealtimeClient = class {
                        constructor(e, t, r) {
                            const s = "*" === r ? "realtime:" + t : `realtime:${t}:${r}`;
                            this.subscription = e.channel(s)
                        }
                        getPayloadRecords(e) {
                            const t = {
                                new: {},
                                old: {}
                            };
                            return "INSERT" !== e.type && "UPDATE" !== e.type || (t.new = s.Transformers.convertChangeData(e.columns, e.record)), "UPDATE" !== e.type && "DELETE" !== e.type || (t.old = s.Transformers.convertChangeData(e.columns, e.old_record)), t
                        }
                        on(e, t) {
                            return this.subscription.on(e, (e => {
                                let r = {
                                    schema: e.schema,
                                    table: e.table,
                                    commit_timestamp: e.commit_timestamp,
                                    eventType: e.type,
                                    new: {},
                                    old: {}
                                };
                                r = Object.assign(Object.assign({}, r), this.getPayloadRecords(e)), t(r)
                            })), this
                        }
                        subscribe(e = (() => {})) {
                            return this.subscription.onError((t => e("SUBSCRIPTION_ERROR", t))), this.subscription.onClose((() => e("CLOSED"))), this.subscription.subscribe().receive("ok", (() => e("SUBSCRIBED"))).receive("error", (t => e("SUBSCRIPTION_ERROR", t))).receive("timeout", (() => e("RETRYING_AFTER_TIMEOUT"))), this.subscription
                        }
                    }
                },
                678: (e, t) => {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.DEFAULT_HEADERS = void 0, t.DEFAULT_HEADERS = {}
                },
                717: (e, t) => {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    })
                },
                840: (e, t, r) => {
                    var s;
                    try {
                        s = r(284)
                    } catch (e) {} finally {
                        if (s || "undefined" == typeof window || (s = window), !s) throw new Error("Could not determine global this")
                    }
                    var n = s.WebSocket || s.MozWebSocket,
                        i = r(387);

                    function o(e, t) {
                        return t ? new n(e, t) : new n(e)
                    }
                    n && ["CONNECTING", "OPEN", "CLOSING", "CLOSED"].forEach((function(e) {
                        Object.defineProperty(o, e, {
                            get: function() {
                                return n[e]
                            }
                        })
                    })), e.exports = {
                        w3cwebsocket: n ? o : null,
                        version: i
                    }
                },
                387: (e, t, r) => {
                    e.exports = r(847).version
                },
                847: e => {
                    "use strict";
                    e.exports = {
                        version: "1.0.32"
                    }
                }
            },
            t = {};

        function r(s) {
            if (t[s]) return t[s].exports;
            var n = t[s] = {
                exports: {}
            };
            return e[s].call(n.exports, n, n.exports, r), n.exports
        }
        return r.n = e => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return r.d(t, {
                a: t
            }), t
        }, r.d = (e, t) => {
            for (var s in t) r.o(t, s) && !r.o(e, s) && Object.defineProperty(e, s, {
                enumerable: !0,
                get: t[s]
            })
        }, r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), r.r = e => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, r(341)
    })()
}));