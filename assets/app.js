(function() {
    const i = document.createElement("link").relList;
    if (i && i.supports && i.supports("modulepreload"))
        return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]'))
        o(r);
    new MutationObserver(r => {
        for (const c of r)
            if (c.type === "childList")
                for (const h of c.addedNodes)
                    h.tagName === "LINK" && h.rel === "modulepreload" && o(h)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function s(r) {
        const c = {};
        return r.integrity && (c.integrity = r.integrity),
        r.referrerPolicy && (c.referrerPolicy = r.referrerPolicy),
        r.crossOrigin === "use-credentials" ? c.credentials = "include" : r.crossOrigin === "anonymous" ? c.credentials = "omit" : c.credentials = "same-origin",
        c
    }
    function o(r) {
        if (r.ep)
            return;
        r.ep = !0;
        const c = s(r);
        fetch(r.href, c)
    }
}
)();
function LS(n) {
    return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n
}
var Wc = {
    exports: {}
}
  , Is = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kp;
function jS() {
    if (kp)
        return Is;
    kp = 1;
    var n = Symbol.for("react.transitional.element")
      , i = Symbol.for("react.fragment");
    function s(o, r, c) {
        var h = null;
        if (c !== void 0 && (h = "" + c),
        r.key !== void 0 && (h = "" + r.key),
        "key" in r) {
            c = {};
            for (var d in r)
                d !== "key" && (c[d] = r[d])
        } else
            c = r;
        return r = c.ref,
        {
            $$typeof: n,
            type: o,
            key: h,
            ref: r !== void 0 ? r : null,
            props: c
        }
    }
    return Is.Fragment = i,
    Is.jsx = s,
    Is.jsxs = s,
    Is
}
var Xp;
function NS() {
    return Xp || (Xp = 1,
    Wc.exports = jS()),
    Wc.exports
}
var z = NS()
  , Ic = {
    exports: {}
}
  , ct = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pp;
function VS() {
    if (Pp)
        return ct;
    Pp = 1;
    var n = Symbol.for("react.transitional.element")
      , i = Symbol.for("react.portal")
      , s = Symbol.for("react.fragment")
      , o = Symbol.for("react.strict_mode")
      , r = Symbol.for("react.profiler")
      , c = Symbol.for("react.consumer")
      , h = Symbol.for("react.context")
      , d = Symbol.for("react.forward_ref")
      , p = Symbol.for("react.suspense")
      , m = Symbol.for("react.memo")
      , v = Symbol.for("react.lazy")
      , y = Symbol.for("react.activity")
      , S = Symbol.iterator;
    function b(M) {
        return M === null || typeof M != "object" ? null : (M = S && M[S] || M["@@iterator"],
        typeof M == "function" ? M : null)
    }
    var T = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , A = Object.assign
      , E = {};
    function R(M, k, I) {
        this.props = M,
        this.context = k,
        this.refs = E,
        this.updater = I || T
    }
    R.prototype.isReactComponent = {},
    R.prototype.setState = function(M, k) {
        if (typeof M != "object" && typeof M != "function" && M != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, M, k, "setState")
    }
    ,
    R.prototype.forceUpdate = function(M) {
        this.updater.enqueueForceUpdate(this, M, "forceUpdate")
    }
    ;
    function _() {}
    _.prototype = R.prototype;
    function O(M, k, I) {
        this.props = M,
        this.context = k,
        this.refs = E,
        this.updater = I || T
    }
    var V = O.prototype = new _;
    V.constructor = O,
    A(V, R.prototype),
    V.isPureReactComponent = !0;
    var P = Array.isArray;
    function Y() {}
    var q = {
        H: null,
        A: null,
        T: null,
        S: null
    }
      , Q = Object.prototype.hasOwnProperty;
    function Z(M, k, I) {
        var nt = I.ref;
        return {
            $$typeof: n,
            type: M,
            key: k,
            ref: nt !== void 0 ? nt : null,
            props: I
        }
    }
    function K(M, k) {
        return Z(M.type, k, M.props)
    }
    function W(M) {
        return typeof M == "object" && M !== null && M.$$typeof === n
    }
    function tt(M) {
        var k = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + M.replace(/[=:]/g, function(I) {
            return k[I]
        })
    }
    var pt = /\/+/g;
    function rt(M, k) {
        return typeof M == "object" && M !== null && M.key != null ? tt("" + M.key) : k.toString(36)
    }
    function ot(M) {
        switch (M.status) {
        case "fulfilled":
            return M.value;
        case "rejected":
            throw M.reason;
        default:
            switch (typeof M.status == "string" ? M.then(Y, Y) : (M.status = "pending",
            M.then(function(k) {
                M.status === "pending" && (M.status = "fulfilled",
                M.value = k)
            }, function(k) {
                M.status === "pending" && (M.status = "rejected",
                M.reason = k)
            })),
            M.status) {
            case "fulfilled":
                return M.value;
            case "rejected":
                throw M.reason
            }
        }
        throw M
    }
    function B(M, k, I, nt, ut) {
        var ft = typeof M;
        (ft === "undefined" || ft === "boolean") && (M = null);
        var Tt = !1;
        if (M === null)
            Tt = !0;
        else
            switch (ft) {
            case "bigint":
            case "string":
            case "number":
                Tt = !0;
                break;
            case "object":
                switch (M.$$typeof) {
                case n:
                case i:
                    Tt = !0;
                    break;
                case v:
                    return Tt = M._init,
                    B(Tt(M._payload), k, I, nt, ut)
                }
            }
        if (Tt)
            return ut = ut(M),
            Tt = nt === "" ? "." + rt(M, 0) : nt,
            P(ut) ? (I = "",
            Tt != null && (I = Tt.replace(pt, "$&/") + "/"),
            B(ut, k, I, "", function(hn) {
                return hn
            })) : ut != null && (W(ut) && (ut = K(ut, I + (ut.key == null || M && M.key === ut.key ? "" : ("" + ut.key).replace(pt, "$&/") + "/") + Tt)),
            k.push(ut)),
            1;
        Tt = 0;
        var ee = nt === "" ? "." : nt + ":";
        if (P(M))
            for (var jt = 0; jt < M.length; jt++)
                nt = M[jt],
                ft = ee + rt(nt, jt),
                Tt += B(nt, k, I, ft, ut);
        else if (jt = b(M),
        typeof jt == "function")
            for (M = jt.call(M),
            jt = 0; !(nt = M.next()).done; )
                nt = nt.value,
                ft = ee + rt(nt, jt++),
                Tt += B(nt, k, I, ft, ut);
        else if (ft === "object") {
            if (typeof M.then == "function")
                return B(ot(M), k, I, nt, ut);
            throw k = String(M),
            Error("Objects are not valid as a React child (found: " + (k === "[object Object]" ? "object with keys {" + Object.keys(M).join(", ") + "}" : k) + "). If you meant to render a collection of children, use an array instead.")
        }
        return Tt
    }
    function J(M, k, I) {
        if (M == null)
            return M;
        var nt = []
          , ut = 0;
        return B(M, nt, "", "", function(ft) {
            return k.call(I, ft, ut++)
        }),
        nt
    }
    function $(M) {
        if (M._status === -1) {
            var k = M._result;
            k = k(),
            k.then(function(I) {
                (M._status === 0 || M._status === -1) && (M._status = 1,
                M._result = I)
            }, function(I) {
                (M._status === 0 || M._status === -1) && (M._status = 2,
                M._result = I)
            }),
            M._status === -1 && (M._status = 0,
            M._result = k)
        }
        if (M._status === 1)
            return M._result.default;
        throw M._result
    }
    var ht = typeof reportError == "function" ? reportError : function(M) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var k = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof M == "object" && M !== null && typeof M.message == "string" ? String(M.message) : String(M),
                error: M
            });
            if (!window.dispatchEvent(k))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", M);
            return
        }
        console.error(M)
    }
      , vt = {
        map: J,
        forEach: function(M, k, I) {
            J(M, function() {
                k.apply(this, arguments)
            }, I)
        },
        count: function(M) {
            var k = 0;
            return J(M, function() {
                k++
            }),
            k
        },
        toArray: function(M) {
            return J(M, function(k) {
                return k
            }) || []
        },
        only: function(M) {
            if (!W(M))
                throw Error("React.Children.only expected to receive a single React element child.");
            return M
        }
    };
    return ct.Activity = y,
    ct.Children = vt,
    ct.Component = R,
    ct.Fragment = s,
    ct.Profiler = r,
    ct.PureComponent = O,
    ct.StrictMode = o,
    ct.Suspense = p,
    ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = q,
    ct.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(M) {
            return q.H.useMemoCache(M)
        }
    },
    ct.cache = function(M) {
        return function() {
            return M.apply(null, arguments)
        }
    }
    ,
    ct.cacheSignal = function() {
        return null
    }
    ,
    ct.cloneElement = function(M, k, I) {
        if (M == null)
            throw Error("The argument must be a React element, but you passed " + M + ".");
        var nt = A({}, M.props)
          , ut = M.key;
        if (k != null)
            for (ft in k.key !== void 0 && (ut = "" + k.key),
            k)
                !Q.call(k, ft) || ft === "key" || ft === "__self" || ft === "__source" || ft === "ref" && k.ref === void 0 || (nt[ft] = k[ft]);
        var ft = arguments.length - 2;
        if (ft === 1)
            nt.children = I;
        else if (1 < ft) {
            for (var Tt = Array(ft), ee = 0; ee < ft; ee++)
                Tt[ee] = arguments[ee + 2];
            nt.children = Tt
        }
        return Z(M.type, ut, nt)
    }
    ,
    ct.createContext = function(M) {
        return M = {
            $$typeof: h,
            _currentValue: M,
            _currentValue2: M,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        },
        M.Provider = M,
        M.Consumer = {
            $$typeof: c,
            _context: M
        },
        M
    }
    ,
    ct.createElement = function(M, k, I) {
        var nt, ut = {}, ft = null;
        if (k != null)
            for (nt in k.key !== void 0 && (ft = "" + k.key),
            k)
                Q.call(k, nt) && nt !== "key" && nt !== "__self" && nt !== "__source" && (ut[nt] = k[nt]);
        var Tt = arguments.length - 2;
        if (Tt === 1)
            ut.children = I;
        else if (1 < Tt) {
            for (var ee = Array(Tt), jt = 0; jt < Tt; jt++)
                ee[jt] = arguments[jt + 2];
            ut.children = ee
        }
        if (M && M.defaultProps)
            for (nt in Tt = M.defaultProps,
            Tt)
                ut[nt] === void 0 && (ut[nt] = Tt[nt]);
        return Z(M, ft, ut)
    }
    ,
    ct.createRef = function() {
        return {
            current: null
        }
    }
    ,
    ct.forwardRef = function(M) {
        return {
            $$typeof: d,
            render: M
        }
    }
    ,
    ct.isValidElement = W,
    ct.lazy = function(M) {
        return {
            $$typeof: v,
            _payload: {
                _status: -1,
                _result: M
            },
            _init: $
        }
    }
    ,
    ct.memo = function(M, k) {
        return {
            $$typeof: m,
            type: M,
            compare: k === void 0 ? null : k
        }
    }
    ,
    ct.startTransition = function(M) {
        var k = q.T
          , I = {};
        q.T = I;
        try {
            var nt = M()
              , ut = q.S;
            ut !== null && ut(I, nt),
            typeof nt == "object" && nt !== null && typeof nt.then == "function" && nt.then(Y, ht)
        } catch (ft) {
            ht(ft)
        } finally {
            k !== null && I.types !== null && (k.types = I.types),
            q.T = k
        }
    }
    ,
    ct.unstable_useCacheRefresh = function() {
        return q.H.useCacheRefresh()
    }
    ,
    ct.use = function(M) {
        return q.H.use(M)
    }
    ,
    ct.useActionState = function(M, k, I) {
        return q.H.useActionState(M, k, I)
    }
    ,
    ct.useCallback = function(M, k) {
        return q.H.useCallback(M, k)
    }
    ,
    ct.useContext = function(M) {
        return q.H.useContext(M)
    }
    ,
    ct.useDebugValue = function() {}
    ,
    ct.useDeferredValue = function(M, k) {
        return q.H.useDeferredValue(M, k)
    }
    ,
    ct.useEffect = function(M, k) {
        return q.H.useEffect(M, k)
    }
    ,
    ct.useEffectEvent = function(M) {
        return q.H.useEffectEvent(M)
    }
    ,
    ct.useId = function() {
        return q.H.useId()
    }
    ,
    ct.useImperativeHandle = function(M, k, I) {
        return q.H.useImperativeHandle(M, k, I)
    }
    ,
    ct.useInsertionEffect = function(M, k) {
        return q.H.useInsertionEffect(M, k)
    }
    ,
    ct.useLayoutEffect = function(M, k) {
        return q.H.useLayoutEffect(M, k)
    }
    ,
    ct.useMemo = function(M, k) {
        return q.H.useMemo(M, k)
    }
    ,
    ct.useOptimistic = function(M, k) {
        return q.H.useOptimistic(M, k)
    }
    ,
    ct.useReducer = function(M, k, I) {
        return q.H.useReducer(M, k, I)
    }
    ,
    ct.useRef = function(M) {
        return q.H.useRef(M)
    }
    ,
    ct.useState = function(M) {
        return q.H.useState(M)
    }
    ,
    ct.useSyncExternalStore = function(M, k, I) {
        return q.H.useSyncExternalStore(M, k, I)
    }
    ,
    ct.useTransition = function() {
        return q.H.useTransition()
    }
    ,
    ct.version = "19.2.8",
    ct
}
var Kp;
function vl() {
    return Kp || (Kp = 1,
    Ic.exports = VS()),
    Ic.exports
}
var F = vl();
const Je = LS(F);
var $c = {
    exports: {}
}
  , $s = {}
  , tf = {
    exports: {}
}
  , ef = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zp;
function BS() {
    return Zp || (Zp = 1,
    (function(n) {
        function i(B, J) {
            var $ = B.length;
            B.push(J);
            t: for (; 0 < $; ) {
                var ht = $ - 1 >>> 1
                  , vt = B[ht];
                if (0 < r(vt, J))
                    B[ht] = J,
                    B[$] = vt,
                    $ = ht;
                else
                    break t
            }
        }
        function s(B) {
            return B.length === 0 ? null : B[0]
        }
        function o(B) {
            if (B.length === 0)
                return null;
            var J = B[0]
              , $ = B.pop();
            if ($ !== J) {
                B[0] = $;
                t: for (var ht = 0, vt = B.length, M = vt >>> 1; ht < M; ) {
                    var k = 2 * (ht + 1) - 1
                      , I = B[k]
                      , nt = k + 1
                      , ut = B[nt];
                    if (0 > r(I, $))
                        nt < vt && 0 > r(ut, I) ? (B[ht] = ut,
                        B[nt] = $,
                        ht = nt) : (B[ht] = I,
                        B[k] = $,
                        ht = k);
                    else if (nt < vt && 0 > r(ut, $))
                        B[ht] = ut,
                        B[nt] = $,
                        ht = nt;
                    else
                        break t
                }
            }
            return J
        }
        function r(B, J) {
            var $ = B.sortIndex - J.sortIndex;
            return $ !== 0 ? $ : B.id - J.id
        }
        if (n.unstable_now = void 0,
        typeof performance == "object" && typeof performance.now == "function") {
            var c = performance;
            n.unstable_now = function() {
                return c.now()
            }
        } else {
            var h = Date
              , d = h.now();
            n.unstable_now = function() {
                return h.now() - d
            }
        }
        var p = []
          , m = []
          , v = 1
          , y = null
          , S = 3
          , b = !1
          , T = !1
          , A = !1
          , E = !1
          , R = typeof setTimeout == "function" ? setTimeout : null
          , _ = typeof clearTimeout == "function" ? clearTimeout : null
          , O = typeof setImmediate < "u" ? setImmediate : null;
        function V(B) {
            for (var J = s(m); J !== null; ) {
                if (J.callback === null)
                    o(m);
                else if (J.startTime <= B)
                    o(m),
                    J.sortIndex = J.expirationTime,
                    i(p, J);
                else
                    break;
                J = s(m)
            }
        }
        function P(B) {
            if (A = !1,
            V(B),
            !T)
                if (s(p) !== null)
                    T = !0,
                    Y || (Y = !0,
                    tt());
                else {
                    var J = s(m);
                    J !== null && ot(P, J.startTime - B)
                }
        }
        var Y = !1
          , q = -1
          , Q = 5
          , Z = -1;
        function K() {
            return E ? !0 : !(n.unstable_now() - Z < Q)
        }
        function W() {
            if (E = !1,
            Y) {
                var B = n.unstable_now();
                Z = B;
                var J = !0;
                try {
                    t: {
                        T = !1,
                        A && (A = !1,
                        _(q),
                        q = -1),
                        b = !0;
                        var $ = S;
                        try {
                            e: {
                                for (V(B),
                                y = s(p); y !== null && !(y.expirationTime > B && K()); ) {
                                    var ht = y.callback;
                                    if (typeof ht == "function") {
                                        y.callback = null,
                                        S = y.priorityLevel;
                                        var vt = ht(y.expirationTime <= B);
                                        if (B = n.unstable_now(),
                                        typeof vt == "function") {
                                            y.callback = vt,
                                            V(B),
                                            J = !0;
                                            break e
                                        }
                                        y === s(p) && o(p),
                                        V(B)
                                    } else
                                        o(p);
                                    y = s(p)
                                }
                                if (y !== null)
                                    J = !0;
                                else {
                                    var M = s(m);
                                    M !== null && ot(P, M.startTime - B),
                                    J = !1
                                }
                            }
                            break t
                        } finally {
                            y = null,
                            S = $,
                            b = !1
                        }
                        J = void 0
                    }
                } finally {
                    J ? tt() : Y = !1
                }
            }
        }
        var tt;
        if (typeof O == "function")
            tt = function() {
                O(W)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var pt = new MessageChannel
              , rt = pt.port2;
            pt.port1.onmessage = W,
            tt = function() {
                rt.postMessage(null)
            }
        } else
            tt = function() {
                R(W, 0)
            }
            ;
        function ot(B, J) {
            q = R(function() {
                B(n.unstable_now())
            }, J)
        }
        n.unstable_IdlePriority = 5,
        n.unstable_ImmediatePriority = 1,
        n.unstable_LowPriority = 4,
        n.unstable_NormalPriority = 3,
        n.unstable_Profiling = null,
        n.unstable_UserBlockingPriority = 2,
        n.unstable_cancelCallback = function(B) {
            B.callback = null
        }
        ,
        n.unstable_forceFrameRate = function(B) {
            0 > B || 125 < B ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Q = 0 < B ? Math.floor(1e3 / B) : 5
        }
        ,
        n.unstable_getCurrentPriorityLevel = function() {
            return S
        }
        ,
        n.unstable_next = function(B) {
            switch (S) {
            case 1:
            case 2:
            case 3:
                var J = 3;
                break;
            default:
                J = S
            }
            var $ = S;
            S = J;
            try {
                return B()
            } finally {
                S = $
            }
        }
        ,
        n.unstable_requestPaint = function() {
            E = !0
        }
        ,
        n.unstable_runWithPriority = function(B, J) {
            switch (B) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                B = 3
            }
            var $ = S;
            S = B;
            try {
                return J()
            } finally {
                S = $
            }
        }
        ,
        n.unstable_scheduleCallback = function(B, J, $) {
            var ht = n.unstable_now();
            switch (typeof $ == "object" && $ !== null ? ($ = $.delay,
            $ = typeof $ == "number" && 0 < $ ? ht + $ : ht) : $ = ht,
            B) {
            case 1:
                var vt = -1;
                break;
            case 2:
                vt = 250;
                break;
            case 5:
                vt = 1073741823;
                break;
            case 4:
                vt = 1e4;
                break;
            default:
                vt = 5e3
            }
            return vt = $ + vt,
            B = {
                id: v++,
                callback: J,
                priorityLevel: B,
                startTime: $,
                expirationTime: vt,
                sortIndex: -1
            },
            $ > ht ? (B.sortIndex = $,
            i(m, B),
            s(p) === null && B === s(m) && (A ? (_(q),
            q = -1) : A = !0,
            ot(P, $ - ht))) : (B.sortIndex = vt,
            i(p, B),
            T || b || (T = !0,
            Y || (Y = !0,
            tt()))),
            B
        }
        ,
        n.unstable_shouldYield = K,
        n.unstable_wrapCallback = function(B) {
            var J = S;
            return function() {
                var $ = S;
                S = J;
                try {
                    return B.apply(this, arguments)
                } finally {
                    S = $
                }
            }
        }
    }
    )(ef)),
    ef
}
var Qp;
function US() {
    return Qp || (Qp = 1,
    tf.exports = BS()),
    tf.exports
}
var nf = {
    exports: {}
}
  , ue = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fp;
function HS() {
    if (Fp)
        return ue;
    Fp = 1;
    var n = vl();
    function i(p) {
        var m = "https://react.dev/errors/" + p;
        if (1 < arguments.length) {
            m += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var v = 2; v < arguments.length; v++)
                m += "&args[]=" + encodeURIComponent(arguments[v])
        }
        return "Minified React error #" + p + "; visit " + m + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function s() {}
    var o = {
        d: {
            f: s,
            r: function() {
                throw Error(i(522))
            },
            D: s,
            C: s,
            L: s,
            m: s,
            X: s,
            S: s,
            M: s
        },
        p: 0,
        findDOMNode: null
    }
      , r = Symbol.for("react.portal");
    function c(p, m, v) {
        var y = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: r,
            key: y == null ? null : "" + y,
            children: p,
            containerInfo: m,
            implementation: v
        }
    }
    var h = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function d(p, m) {
        if (p === "font")
            return "";
        if (typeof m == "string")
            return m === "use-credentials" ? m : ""
    }
    return ue.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o,
    ue.createPortal = function(p, m) {
        var v = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)
            throw Error(i(299));
        return c(p, m, null, v)
    }
    ,
    ue.flushSync = function(p) {
        var m = h.T
          , v = o.p;
        try {
            if (h.T = null,
            o.p = 2,
            p)
                return p()
        } finally {
            h.T = m,
            o.p = v,
            o.d.f()
        }
    }
    ,
    ue.preconnect = function(p, m) {
        typeof p == "string" && (m ? (m = m.crossOrigin,
        m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null,
        o.d.C(p, m))
    }
    ,
    ue.prefetchDNS = function(p) {
        typeof p == "string" && o.d.D(p)
    }
    ,
    ue.preinit = function(p, m) {
        if (typeof p == "string" && m && typeof m.as == "string") {
            var v = m.as
              , y = d(v, m.crossOrigin)
              , S = typeof m.integrity == "string" ? m.integrity : void 0
              , b = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
            v === "style" ? o.d.S(p, typeof m.precedence == "string" ? m.precedence : void 0, {
                crossOrigin: y,
                integrity: S,
                fetchPriority: b
            }) : v === "script" && o.d.X(p, {
                crossOrigin: y,
                integrity: S,
                fetchPriority: b,
                nonce: typeof m.nonce == "string" ? m.nonce : void 0
            })
        }
    }
    ,
    ue.preinitModule = function(p, m) {
        if (typeof p == "string")
            if (typeof m == "object" && m !== null) {
                if (m.as == null || m.as === "script") {
                    var v = d(m.as, m.crossOrigin);
                    o.d.M(p, {
                        crossOrigin: v,
                        integrity: typeof m.integrity == "string" ? m.integrity : void 0,
                        nonce: typeof m.nonce == "string" ? m.nonce : void 0
                    })
                }
            } else
                m == null && o.d.M(p)
    }
    ,
    ue.preload = function(p, m) {
        if (typeof p == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
            var v = m.as
              , y = d(v, m.crossOrigin);
            o.d.L(p, v, {
                crossOrigin: y,
                integrity: typeof m.integrity == "string" ? m.integrity : void 0,
                nonce: typeof m.nonce == "string" ? m.nonce : void 0,
                type: typeof m.type == "string" ? m.type : void 0,
                fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
                referrerPolicy: typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
                imageSrcSet: typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
                imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
                media: typeof m.media == "string" ? m.media : void 0
            })
        }
    }
    ,
    ue.preloadModule = function(p, m) {
        if (typeof p == "string")
            if (m) {
                var v = d(m.as, m.crossOrigin);
                o.d.m(p, {
                    as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
                    crossOrigin: v,
                    integrity: typeof m.integrity == "string" ? m.integrity : void 0
                })
            } else
                o.d.m(p)
    }
    ,
    ue.requestFormReset = function(p) {
        o.d.r(p)
    }
    ,
    ue.unstable_batchedUpdates = function(p, m) {
        return p(m)
    }
    ,
    ue.useFormState = function(p, m, v) {
        return h.H.useFormState(p, m, v)
    }
    ,
    ue.useFormStatus = function() {
        return h.H.useHostTransitionStatus()
    }
    ,
    ue.version = "19.2.8",
    ue
}
var Jp;
function qS() {
    if (Jp)
        return nf.exports;
    Jp = 1;
    function n() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
            } catch (i) {
                console.error(i)
            }
    }
    return n(),
    nf.exports = HS(),
    nf.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wp;
function GS() {
    if (Wp)
        return $s;
    Wp = 1;
    var n = US()
      , i = vl()
      , s = qS();
    function o(t) {
        var e = "https://react.dev/errors/" + t;
        if (1 < arguments.length) {
            e += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var a = 2; a < arguments.length; a++)
                e += "&args[]=" + encodeURIComponent(arguments[a])
        }
        return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function r(t) {
        return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
    }
    function c(t) {
        var e = t
          , a = t;
        if (t.alternate)
            for (; e.return; )
                e = e.return;
        else {
            t = e;
            do
                e = t,
                (e.flags & 4098) !== 0 && (a = e.return),
                t = e.return;
            while (t)
        }
        return e.tag === 3 ? a : null
    }
    function h(t) {
        if (t.tag === 13) {
            var e = t.memoizedState;
            if (e === null && (t = t.alternate,
            t !== null && (e = t.memoizedState)),
            e !== null)
                return e.dehydrated
        }
        return null
    }
    function d(t) {
        if (t.tag === 31) {
            var e = t.memoizedState;
            if (e === null && (t = t.alternate,
            t !== null && (e = t.memoizedState)),
            e !== null)
                return e.dehydrated
        }
        return null
    }
    function p(t) {
        if (c(t) !== t)
            throw Error(o(188))
    }
    function m(t) {
        var e = t.alternate;
        if (!e) {
            if (e = c(t),
            e === null)
                throw Error(o(188));
            return e !== t ? null : t
        }
        for (var a = t, l = e; ; ) {
            var u = a.return;
            if (u === null)
                break;
            var f = u.alternate;
            if (f === null) {
                if (l = u.return,
                l !== null) {
                    a = l;
                    continue
                }
                break
            }
            if (u.child === f.child) {
                for (f = u.child; f; ) {
                    if (f === a)
                        return p(u),
                        t;
                    if (f === l)
                        return p(u),
                        e;
                    f = f.sibling
                }
                throw Error(o(188))
            }
            if (a.return !== l.return)
                a = u,
                l = f;
            else {
                for (var g = !1, x = u.child; x; ) {
                    if (x === a) {
                        g = !0,
                        a = u,
                        l = f;
                        break
                    }
                    if (x === l) {
                        g = !0,
                        l = u,
                        a = f;
                        break
                    }
                    x = x.sibling
                }
                if (!g) {
                    for (x = f.child; x; ) {
                        if (x === a) {
                            g = !0,
                            a = f,
                            l = u;
                            break
                        }
                        if (x === l) {
                            g = !0,
                            l = f,
                            a = u;
                            break
                        }
                        x = x.sibling
                    }
                    if (!g)
                        throw Error(o(189))
                }
            }
            if (a.alternate !== l)
                throw Error(o(190))
        }
        if (a.tag !== 3)
            throw Error(o(188));
        return a.stateNode.current === a ? t : e
    }
    function v(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6)
            return t;
        for (t = t.child; t !== null; ) {
            if (e = v(t),
            e !== null)
                return e;
            t = t.sibling
        }
        return null
    }
    var y = Object.assign
      , S = Symbol.for("react.element")
      , b = Symbol.for("react.transitional.element")
      , T = Symbol.for("react.portal")
      , A = Symbol.for("react.fragment")
      , E = Symbol.for("react.strict_mode")
      , R = Symbol.for("react.profiler")
      , _ = Symbol.for("react.consumer")
      , O = Symbol.for("react.context")
      , V = Symbol.for("react.forward_ref")
      , P = Symbol.for("react.suspense")
      , Y = Symbol.for("react.suspense_list")
      , q = Symbol.for("react.memo")
      , Q = Symbol.for("react.lazy")
      , Z = Symbol.for("react.activity")
      , K = Symbol.for("react.memo_cache_sentinel")
      , W = Symbol.iterator;
    function tt(t) {
        return t === null || typeof t != "object" ? null : (t = W && t[W] || t["@@iterator"],
        typeof t == "function" ? t : null)
    }
    var pt = Symbol.for("react.client.reference");
    function rt(t) {
        if (t == null)
            return null;
        if (typeof t == "function")
            return t.$$typeof === pt ? null : t.displayName || t.name || null;
        if (typeof t == "string")
            return t;
        switch (t) {
        case A:
            return "Fragment";
        case R:
            return "Profiler";
        case E:
            return "StrictMode";
        case P:
            return "Suspense";
        case Y:
            return "SuspenseList";
        case Z:
            return "Activity"
        }
        if (typeof t == "object")
            switch (t.$$typeof) {
            case T:
                return "Portal";
            case O:
                return t.displayName || "Context";
            case _:
                return (t._context.displayName || "Context") + ".Consumer";
            case V:
                var e = t.render;
                return t = t.displayName,
                t || (t = e.displayName || e.name || "",
                t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"),
                t;
            case q:
                return e = t.displayName || null,
                e !== null ? e : rt(t.type) || "Memo";
            case Q:
                e = t._payload,
                t = t._init;
                try {
                    return rt(t(e))
                } catch {}
            }
        return null
    }
    var ot = Array.isArray
      , B = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , J = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , $ = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }
      , ht = []
      , vt = -1;
    function M(t) {
        return {
            current: t
        }
    }
    function k(t) {
        0 > vt || (t.current = ht[vt],
        ht[vt] = null,
        vt--)
    }
    function I(t, e) {
        vt++,
        ht[vt] = t.current,
        t.current = e
    }
    var nt = M(null)
      , ut = M(null)
      , ft = M(null)
      , Tt = M(null);
    function ee(t, e) {
        switch (I(ft, e),
        I(ut, t),
        I(nt, null),
        e.nodeType) {
        case 9:
        case 11:
            t = (t = e.documentElement) && (t = t.namespaceURI) ? hp(t) : 0;
            break;
        default:
            if (t = e.tagName,
            e = e.namespaceURI)
                e = hp(e),
                t = dp(e, t);
            else
                switch (t) {
                case "svg":
                    t = 1;
                    break;
                case "math":
                    t = 2;
                    break;
                default:
                    t = 0
                }
        }
        k(nt),
        I(nt, t)
    }
    function jt() {
        k(nt),
        k(ut),
        k(ft)
    }
    function hn(t) {
        t.memoizedState !== null && I(Tt, t);
        var e = nt.current
          , a = dp(e, t.type);
        e !== a && (I(ut, t),
        I(nt, a))
    }
    function dn(t) {
        ut.current === t && (k(nt),
        k(ut)),
        Tt.current === t && (k(Tt),
        Qs._currentValue = $)
    }
    var Un, es;
    function $e(t) {
        if (Un === void 0)
            try {
                throw Error()
            } catch (a) {
                var e = a.stack.trim().match(/\n( *(at )?)/);
                Un = e && e[1] || "",
                es = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + Un + t + es
    }
    var Ii = !1;
    function Xe(t, e) {
        if (!t || Ii)
            return "";
        Ii = !0;
        var a = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var l = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (e) {
                            var X = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(X.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }),
                            typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(X, [])
                                } catch (U) {
                                    var N = U
                                }
                                Reflect.construct(t, [], X)
                            } else {
                                try {
                                    X.call()
                                } catch (U) {
                                    N = U
                                }
                                t.call(X.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (U) {
                                N = U
                            }
                            (X = t()) && typeof X.catch == "function" && X.catch(function() {})
                        }
                    } catch (U) {
                        if (U && N && typeof U.stack == "string")
                            return [U.stack, N.stack]
                    }
                    return [null, null]
                }
            };
            l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var u = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, "name");
            u && u.configurable && Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var f = l.DetermineComponentFrameRoot()
              , g = f[0]
              , x = f[1];
            if (g && x) {
                var C = g.split(`
`)
                  , j = x.split(`
`);
                for (u = l = 0; l < C.length && !C[l].includes("DetermineComponentFrameRoot"); )
                    l++;
                for (; u < j.length && !j[u].includes("DetermineComponentFrameRoot"); )
                    u++;
                if (l === C.length || u === j.length)
                    for (l = C.length - 1,
                    u = j.length - 1; 1 <= l && 0 <= u && C[l] !== j[u]; )
                        u--;
                for (; 1 <= l && 0 <= u; l--,
                u--)
                    if (C[l] !== j[u]) {
                        if (l !== 1 || u !== 1)
                            do
                                if (l--,
                                u--,
                                0 > u || C[l] !== j[u]) {
                                    var H = `
` + C[l].replace(" at new ", " at ");
                                    return t.displayName && H.includes("<anonymous>") && (H = H.replace("<anonymous>", t.displayName)),
                                    H
                                }
                            while (1 <= l && 0 <= u);
                        break
                    }
            }
        } finally {
            Ii = !1,
            Error.prepareStackTrace = a
        }
        return (a = t ? t.displayName || t.name : "") ? $e(a) : ""
    }
    function ns(t, e) {
        switch (t.tag) {
        case 26:
        case 27:
        case 5:
            return $e(t.type);
        case 16:
            return $e("Lazy");
        case 13:
            return t.child !== e && e !== null ? $e("Suspense Fallback") : $e("Suspense");
        case 19:
            return $e("SuspenseList");
        case 0:
        case 15:
            return Xe(t.type, !1);
        case 11:
            return Xe(t.type.render, !1);
        case 1:
            return Xe(t.type, !0);
        case 31:
            return $e("Activity");
        default:
            return ""
        }
    }
    function mn(t) {
        try {
            var e = ""
              , a = null;
            do
                e += ns(t, a),
                a = t,
                t = t.return;
            while (t);
            return e
        } catch (l) {
            return `
Error generating stack: ` + l.message + `
` + l.stack
        }
    }
    var xi = Object.prototype.hasOwnProperty
      , is = n.unstable_scheduleCallback
      , as = n.unstable_cancelCallback
      , Al = n.unstable_shouldYield
      , Jt = n.unstable_requestPaint
      , Ht = n.unstable_now
      , pn = n.unstable_getCurrentPriorityLevel
      , ss = n.unstable_ImmediatePriority
      , Ph = n.unstable_UserBlockingPriority
      , El = n.unstable_NormalPriority
      , m2 = n.unstable_LowPriority
      , Kh = n.unstable_IdlePriority
      , p2 = n.log
      , y2 = n.unstable_setDisableYieldValue
      , ls = null
      , xe = null;
    function Hn(t) {
        if (typeof p2 == "function" && y2(t),
        xe && typeof xe.setStrictMode == "function")
            try {
                xe.setStrictMode(ls, t)
            } catch {}
    }
    var Te = Math.clz32 ? Math.clz32 : S2
      , g2 = Math.log
      , v2 = Math.LN2;
    function S2(t) {
        return t >>>= 0,
        t === 0 ? 32 : 31 - (g2(t) / v2 | 0) | 0
    }
    var Cl = 256
      , Ml = 262144
      , wl = 4194304;
    function Ti(t) {
        var e = t & 42;
        if (e !== 0)
            return e;
        switch (t & -t) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
            return 64;
        case 128:
            return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
            return t & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return t & 62914560;
        case 67108864:
            return 67108864;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 0;
        default:
            return t
        }
    }
    function _l(t, e, a) {
        var l = t.pendingLanes;
        if (l === 0)
            return 0;
        var u = 0
          , f = t.suspendedLanes
          , g = t.pingedLanes;
        t = t.warmLanes;
        var x = l & 134217727;
        return x !== 0 ? (l = x & ~f,
        l !== 0 ? u = Ti(l) : (g &= x,
        g !== 0 ? u = Ti(g) : a || (a = x & ~t,
        a !== 0 && (u = Ti(a))))) : (x = l & ~f,
        x !== 0 ? u = Ti(x) : g !== 0 ? u = Ti(g) : a || (a = l & ~t,
        a !== 0 && (u = Ti(a)))),
        u === 0 ? 0 : e !== 0 && e !== u && (e & f) === 0 && (f = u & -u,
        a = e & -e,
        f >= a || f === 32 && (a & 4194048) !== 0) ? e : u
    }
    function os(t, e) {
        return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0
    }
    function b2(t, e) {
        switch (t) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
            return e + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function Zh() {
        var t = wl;
        return wl <<= 1,
        (wl & 62914560) === 0 && (wl = 4194304),
        t
    }
    function Hr(t) {
        for (var e = [], a = 0; 31 > a; a++)
            e.push(t);
        return e
    }
    function rs(t, e) {
        t.pendingLanes |= e,
        e !== 268435456 && (t.suspendedLanes = 0,
        t.pingedLanes = 0,
        t.warmLanes = 0)
    }
    function x2(t, e, a, l, u, f) {
        var g = t.pendingLanes;
        t.pendingLanes = a,
        t.suspendedLanes = 0,
        t.pingedLanes = 0,
        t.warmLanes = 0,
        t.expiredLanes &= a,
        t.entangledLanes &= a,
        t.errorRecoveryDisabledLanes &= a,
        t.shellSuspendCounter = 0;
        var x = t.entanglements
          , C = t.expirationTimes
          , j = t.hiddenUpdates;
        for (a = g & ~a; 0 < a; ) {
            var H = 31 - Te(a)
              , X = 1 << H;
            x[H] = 0,
            C[H] = -1;
            var N = j[H];
            if (N !== null)
                for (j[H] = null,
                H = 0; H < N.length; H++) {
                    var U = N[H];
                    U !== null && (U.lane &= -536870913)
                }
            a &= ~X
        }
        l !== 0 && Qh(t, l, 0),
        f !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= f & ~(g & ~e))
    }
    function Qh(t, e, a) {
        t.pendingLanes |= e,
        t.suspendedLanes &= ~e;
        var l = 31 - Te(e);
        t.entangledLanes |= e,
        t.entanglements[l] = t.entanglements[l] | 1073741824 | a & 261930
    }
    function Fh(t, e) {
        var a = t.entangledLanes |= e;
        for (t = t.entanglements; a; ) {
            var l = 31 - Te(a)
              , u = 1 << l;
            u & e | t[l] & e && (t[l] |= e),
            a &= ~u
        }
    }
    function Jh(t, e) {
        var a = e & -e;
        return a = (a & 42) !== 0 ? 1 : qr(a),
        (a & (t.suspendedLanes | e)) !== 0 ? 0 : a
    }
    function qr(t) {
        switch (t) {
        case 2:
            t = 1;
            break;
        case 8:
            t = 4;
            break;
        case 32:
            t = 16;
            break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            t = 128;
            break;
        case 268435456:
            t = 134217728;
            break;
        default:
            t = 0
        }
        return t
    }
    function Gr(t) {
        return t &= -t,
        2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function Wh() {
        var t = J.p;
        return t !== 0 ? t : (t = window.event,
        t === void 0 ? 32 : Vp(t.type))
    }
    function Ih(t, e) {
        var a = J.p;
        try {
            return J.p = t,
            e()
        } finally {
            J.p = a
        }
    }
    var qn = Math.random().toString(36).slice(2)
      , ne = "__reactFiber$" + qn
      , de = "__reactProps$" + qn
      , $i = "__reactContainer$" + qn
      , Yr = "__reactEvents$" + qn
      , T2 = "__reactListeners$" + qn
      , A2 = "__reactHandles$" + qn
      , $h = "__reactResources$" + qn
      , us = "__reactMarker$" + qn;
    function kr(t) {
        delete t[ne],
        delete t[de],
        delete t[Yr],
        delete t[T2],
        delete t[A2]
    }
    function ta(t) {
        var e = t[ne];
        if (e)
            return e;
        for (var a = t.parentNode; a; ) {
            if (e = a[$i] || a[ne]) {
                if (a = e.alternate,
                e.child !== null || a !== null && a.child !== null)
                    for (t = bp(t); t !== null; ) {
                        if (a = t[ne])
                            return a;
                        t = bp(t)
                    }
                return e
            }
            t = a,
            a = t.parentNode
        }
        return null
    }
    function ea(t) {
        if (t = t[ne] || t[$i]) {
            var e = t.tag;
            if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
                return t
        }
        return null
    }
    function cs(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6)
            return t.stateNode;
        throw Error(o(33))
    }
    function na(t) {
        var e = t[$h];
        return e || (e = t[$h] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
        e
    }
    function $t(t) {
        t[us] = !0
    }
    var td = new Set
      , ed = {};
    function Ai(t, e) {
        ia(t, e),
        ia(t + "Capture", e)
    }
    function ia(t, e) {
        for (ed[t] = e,
        t = 0; t < e.length; t++)
            td.add(e[t])
    }
    var E2 = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
      , nd = {}
      , id = {};
    function C2(t) {
        return xi.call(id, t) ? !0 : xi.call(nd, t) ? !1 : E2.test(t) ? id[t] = !0 : (nd[t] = !0,
        !1)
    }
    function Rl(t, e, a) {
        if (C2(e))
            if (a === null)
                t.removeAttribute(e);
            else {
                switch (typeof a) {
                case "undefined":
                case "function":
                case "symbol":
                    t.removeAttribute(e);
                    return;
                case "boolean":
                    var l = e.toLowerCase().slice(0, 5);
                    if (l !== "data-" && l !== "aria-") {
                        t.removeAttribute(e);
                        return
                    }
                }
                t.setAttribute(e, "" + a)
            }
    }
    function Dl(t, e, a) {
        if (a === null)
            t.removeAttribute(e);
        else {
            switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                t.removeAttribute(e);
                return
            }
            t.setAttribute(e, "" + a)
        }
    }
    function yn(t, e, a, l) {
        if (l === null)
            t.removeAttribute(a);
        else {
            switch (typeof l) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                t.removeAttribute(a);
                return
            }
            t.setAttributeNS(e, a, "" + l)
        }
    }
    function ze(t) {
        switch (typeof t) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return t;
        case "object":
            return t;
        default:
            return ""
        }
    }
    function ad(t) {
        var e = t.type;
        return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
    }
    function M2(t, e, a) {
        var l = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
        if (!t.hasOwnProperty(e) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
            var u = l.get
              , f = l.set;
            return Object.defineProperty(t, e, {
                configurable: !0,
                get: function() {
                    return u.call(this)
                },
                set: function(g) {
                    a = "" + g,
                    f.call(this, g)
                }
            }),
            Object.defineProperty(t, e, {
                enumerable: l.enumerable
            }),
            {
                getValue: function() {
                    return a
                },
                setValue: function(g) {
                    a = "" + g
                },
                stopTracking: function() {
                    t._valueTracker = null,
                    delete t[e]
                }
            }
        }
    }
    function Xr(t) {
        if (!t._valueTracker) {
            var e = ad(t) ? "checked" : "value";
            t._valueTracker = M2(t, e, "" + t[e])
        }
    }
    function sd(t) {
        if (!t)
            return !1;
        var e = t._valueTracker;
        if (!e)
            return !0;
        var a = e.getValue()
          , l = "";
        return t && (l = ad(t) ? t.checked ? "true" : "false" : t.value),
        t = l,
        t !== a ? (e.setValue(t),
        !0) : !1
    }
    function Ol(t) {
        if (t = t || (typeof document < "u" ? document : void 0),
        typeof t > "u")
            return null;
        try {
            return t.activeElement || t.body
        } catch {
            return t.body
        }
    }
    var w2 = /[\n"\\]/g;
    function Le(t) {
        return t.replace(w2, function(e) {
            return "\\" + e.charCodeAt(0).toString(16) + " "
        })
    }
    function Pr(t, e, a, l, u, f, g, x) {
        t.name = "",
        g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? t.type = g : t.removeAttribute("type"),
        e != null ? g === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + ze(e)) : t.value !== "" + ze(e) && (t.value = "" + ze(e)) : g !== "submit" && g !== "reset" || t.removeAttribute("value"),
        e != null ? Kr(t, g, ze(e)) : a != null ? Kr(t, g, ze(a)) : l != null && t.removeAttribute("value"),
        u == null && f != null && (t.defaultChecked = !!f),
        u != null && (t.checked = u && typeof u != "function" && typeof u != "symbol"),
        x != null && typeof x != "function" && typeof x != "symbol" && typeof x != "boolean" ? t.name = "" + ze(x) : t.removeAttribute("name")
    }
    function ld(t, e, a, l, u, f, g, x) {
        if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (t.type = f),
        e != null || a != null) {
            if (!(f !== "submit" && f !== "reset" || e != null)) {
                Xr(t);
                return
            }
            a = a != null ? "" + ze(a) : "",
            e = e != null ? "" + ze(e) : a,
            x || e === t.value || (t.value = e),
            t.defaultValue = e
        }
        l = l ?? u,
        l = typeof l != "function" && typeof l != "symbol" && !!l,
        t.checked = x ? t.checked : !!l,
        t.defaultChecked = !!l,
        g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" && (t.name = g),
        Xr(t)
    }
    function Kr(t, e, a) {
        e === "number" && Ol(t.ownerDocument) === t || t.defaultValue === "" + a || (t.defaultValue = "" + a)
    }
    function aa(t, e, a, l) {
        if (t = t.options,
        e) {
            e = {};
            for (var u = 0; u < a.length; u++)
                e["$" + a[u]] = !0;
            for (a = 0; a < t.length; a++)
                u = e.hasOwnProperty("$" + t[a].value),
                t[a].selected !== u && (t[a].selected = u),
                u && l && (t[a].defaultSelected = !0)
        } else {
            for (a = "" + ze(a),
            e = null,
            u = 0; u < t.length; u++) {
                if (t[u].value === a) {
                    t[u].selected = !0,
                    l && (t[u].defaultSelected = !0);
                    return
                }
                e !== null || t[u].disabled || (e = t[u])
            }
            e !== null && (e.selected = !0)
        }
    }
    function od(t, e, a) {
        if (e != null && (e = "" + ze(e),
        e !== t.value && (t.value = e),
        a == null)) {
            t.defaultValue !== e && (t.defaultValue = e);
            return
        }
        t.defaultValue = a != null ? "" + ze(a) : ""
    }
    function rd(t, e, a, l) {
        if (e == null) {
            if (l != null) {
                if (a != null)
                    throw Error(o(92));
                if (ot(l)) {
                    if (1 < l.length)
                        throw Error(o(93));
                    l = l[0]
                }
                a = l
            }
            a == null && (a = ""),
            e = a
        }
        a = ze(e),
        t.defaultValue = a,
        l = t.textContent,
        l === a && l !== "" && l !== null && (t.value = l),
        Xr(t)
    }
    function sa(t, e) {
        if (e) {
            var a = t.firstChild;
            if (a && a === t.lastChild && a.nodeType === 3) {
                a.nodeValue = e;
                return
            }
        }
        t.textContent = e
    }
    var _2 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function ud(t, e, a) {
        var l = e.indexOf("--") === 0;
        a == null || typeof a == "boolean" || a === "" ? l ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : l ? t.setProperty(e, a) : typeof a != "number" || a === 0 || _2.has(e) ? e === "float" ? t.cssFloat = a : t[e] = ("" + a).trim() : t[e] = a + "px"
    }
    function cd(t, e, a) {
        if (e != null && typeof e != "object")
            throw Error(o(62));
        if (t = t.style,
        a != null) {
            for (var l in a)
                !a.hasOwnProperty(l) || e != null && e.hasOwnProperty(l) || (l.indexOf("--") === 0 ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "");
            for (var u in e)
                l = e[u],
                e.hasOwnProperty(u) && a[u] !== l && ud(t, u, l)
        } else
            for (var f in e)
                e.hasOwnProperty(f) && ud(t, f, e[f])
    }
    function Zr(t) {
        if (t.indexOf("-") === -1)
            return !1;
        switch (t) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var R2 = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
      , D2 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function zl(t) {
        return D2.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t
    }
    function gn() {}
    var Qr = null;
    function Fr(t) {
        return t = t.target || t.srcElement || window,
        t.correspondingUseElement && (t = t.correspondingUseElement),
        t.nodeType === 3 ? t.parentNode : t
    }
    var la = null
      , oa = null;
    function fd(t) {
        var e = ea(t);
        if (e && (t = e.stateNode)) {
            var a = t[de] || null;
            t: switch (t = e.stateNode,
            e.type) {
            case "input":
                if (Pr(t, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name),
                e = a.name,
                a.type === "radio" && e != null) {
                    for (a = t; a.parentNode; )
                        a = a.parentNode;
                    for (a = a.querySelectorAll('input[name="' + Le("" + e) + '"][type="radio"]'),
                    e = 0; e < a.length; e++) {
                        var l = a[e];
                        if (l !== t && l.form === t.form) {
                            var u = l[de] || null;
                            if (!u)
                                throw Error(o(90));
                            Pr(l, u.value, u.defaultValue, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name)
                        }
                    }
                    for (e = 0; e < a.length; e++)
                        l = a[e],
                        l.form === t.form && sd(l)
                }
                break t;
            case "textarea":
                od(t, a.value, a.defaultValue);
                break t;
            case "select":
                e = a.value,
                e != null && aa(t, !!a.multiple, e, !1)
            }
        }
    }
    var Jr = !1;
    function hd(t, e, a) {
        if (Jr)
            return t(e, a);
        Jr = !0;
        try {
            var l = t(e);
            return l
        } finally {
            if (Jr = !1,
            (la !== null || oa !== null) && (bo(),
            la && (e = la,
            t = oa,
            oa = la = null,
            fd(e),
            t)))
                for (e = 0; e < t.length; e++)
                    fd(t[e])
        }
    }
    function fs(t, e) {
        var a = t.stateNode;
        if (a === null)
            return null;
        var l = a[de] || null;
        if (l === null)
            return null;
        a = l[e];
        t: switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (l = !l.disabled) || (t = t.type,
            l = !(t === "button" || t === "input" || t === "select" || t === "textarea")),
            t = !l;
            break t;
        default:
            t = !1
        }
        if (t)
            return null;
        if (a && typeof a != "function")
            throw Error(o(231, e, typeof a));
        return a
    }
    var vn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , Wr = !1;
    if (vn)
        try {
            var hs = {};
            Object.defineProperty(hs, "passive", {
                get: function() {
                    Wr = !0
                }
            }),
            window.addEventListener("test", hs, hs),
            window.removeEventListener("test", hs, hs)
        } catch {
            Wr = !1
        }
    var Gn = null
      , Ir = null
      , Ll = null;
    function dd() {
        if (Ll)
            return Ll;
        var t, e = Ir, a = e.length, l, u = "value" in Gn ? Gn.value : Gn.textContent, f = u.length;
        for (t = 0; t < a && e[t] === u[t]; t++)
            ;
        var g = a - t;
        for (l = 1; l <= g && e[a - l] === u[f - l]; l++)
            ;
        return Ll = u.slice(t, 1 < l ? 1 - l : void 0)
    }
    function jl(t) {
        var e = t.keyCode;
        return "charCode" in t ? (t = t.charCode,
        t === 0 && e === 13 && (t = 13)) : t = e,
        t === 10 && (t = 13),
        32 <= t || t === 13 ? t : 0
    }
    function Nl() {
        return !0
    }
    function md() {
        return !1
    }
    function me(t) {
        function e(a, l, u, f, g) {
            this._reactName = a,
            this._targetInst = u,
            this.type = l,
            this.nativeEvent = f,
            this.target = g,
            this.currentTarget = null;
            for (var x in t)
                t.hasOwnProperty(x) && (a = t[x],
                this[x] = a ? a(f) : f[x]);
            return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? Nl : md,
            this.isPropagationStopped = md,
            this
        }
        return y(e.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var a = this.nativeEvent;
                a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1),
                this.isDefaultPrevented = Nl)
            },
            stopPropagation: function() {
                var a = this.nativeEvent;
                a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
                this.isPropagationStopped = Nl)
            },
            persist: function() {},
            isPersistent: Nl
        }),
        e
    }
    var Ei = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(t) {
            return t.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, Vl = me(Ei), ds = y({}, Ei, {
        view: 0,
        detail: 0
    }), O2 = me(ds), $r, tu, ms, Bl = y({}, ds, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: nu,
        button: 0,
        buttons: 0,
        relatedTarget: function(t) {
            return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
        },
        movementX: function(t) {
            return "movementX" in t ? t.movementX : (t !== ms && (ms && t.type === "mousemove" ? ($r = t.screenX - ms.screenX,
            tu = t.screenY - ms.screenY) : tu = $r = 0,
            ms = t),
            $r)
        },
        movementY: function(t) {
            return "movementY" in t ? t.movementY : tu
        }
    }), pd = me(Bl), z2 = y({}, Bl, {
        dataTransfer: 0
    }), L2 = me(z2), j2 = y({}, ds, {
        relatedTarget: 0
    }), eu = me(j2), N2 = y({}, Ei, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), V2 = me(N2), B2 = y({}, Ei, {
        clipboardData: function(t) {
            return "clipboardData" in t ? t.clipboardData : window.clipboardData
        }
    }), U2 = me(B2), H2 = y({}, Ei, {
        data: 0
    }), yd = me(H2), q2 = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, G2 = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, Y2 = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function k2(t) {
        var e = this.nativeEvent;
        return e.getModifierState ? e.getModifierState(t) : (t = Y2[t]) ? !!e[t] : !1
    }
    function nu() {
        return k2
    }
    var X2 = y({}, ds, {
        key: function(t) {
            if (t.key) {
                var e = q2[t.key] || t.key;
                if (e !== "Unidentified")
                    return e
            }
            return t.type === "keypress" ? (t = jl(t),
            t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? G2[t.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: nu,
        charCode: function(t) {
            return t.type === "keypress" ? jl(t) : 0
        },
        keyCode: function(t) {
            return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
        },
        which: function(t) {
            return t.type === "keypress" ? jl(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
        }
    })
      , P2 = me(X2)
      , K2 = y({}, Bl, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , gd = me(K2)
      , Z2 = y({}, ds, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: nu
    })
      , Q2 = me(Z2)
      , F2 = y({}, Ei, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , J2 = me(F2)
      , W2 = y({}, Bl, {
        deltaX: function(t) {
            return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0
        },
        deltaY: function(t) {
            return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , I2 = me(W2)
      , $2 = y({}, Ei, {
        newState: 0,
        oldState: 0
    })
      , t3 = me($2)
      , e3 = [9, 13, 27, 32]
      , iu = vn && "CompositionEvent" in window
      , ps = null;
    vn && "documentMode" in document && (ps = document.documentMode);
    var n3 = vn && "TextEvent" in window && !ps
      , vd = vn && (!iu || ps && 8 < ps && 11 >= ps)
      , Sd = " "
      , bd = !1;
    function xd(t, e) {
        switch (t) {
        case "keyup":
            return e3.indexOf(e.keyCode) !== -1;
        case "keydown":
            return e.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function Td(t) {
        return t = t.detail,
        typeof t == "object" && "data" in t ? t.data : null
    }
    var ra = !1;
    function i3(t, e) {
        switch (t) {
        case "compositionend":
            return Td(e);
        case "keypress":
            return e.which !== 32 ? null : (bd = !0,
            Sd);
        case "textInput":
            return t = e.data,
            t === Sd && bd ? null : t;
        default:
            return null
        }
    }
    function a3(t, e) {
        if (ra)
            return t === "compositionend" || !iu && xd(t, e) ? (t = dd(),
            Ll = Ir = Gn = null,
            ra = !1,
            t) : null;
        switch (t) {
        case "paste":
            return null;
        case "keypress":
            if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
                if (e.char && 1 < e.char.length)
                    return e.char;
                if (e.which)
                    return String.fromCharCode(e.which)
            }
            return null;
        case "compositionend":
            return vd && e.locale !== "ko" ? null : e.data;
        default:
            return null
        }
    }
    var s3 = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function Ad(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return e === "input" ? !!s3[t.type] : e === "textarea"
    }
    function Ed(t, e, a, l) {
        la ? oa ? oa.push(l) : oa = [l] : la = l,
        e = wo(e, "onChange"),
        0 < e.length && (a = new Vl("onChange","change",null,a,l),
        t.push({
            event: a,
            listeners: e
        }))
    }
    var ys = null
      , gs = null;
    function l3(t) {
        lp(t, 0)
    }
    function Ul(t) {
        var e = cs(t);
        if (sd(e))
            return t
    }
    function Cd(t, e) {
        if (t === "change")
            return e
    }
    var Md = !1;
    if (vn) {
        var au;
        if (vn) {
            var su = "oninput" in document;
            if (!su) {
                var wd = document.createElement("div");
                wd.setAttribute("oninput", "return;"),
                su = typeof wd.oninput == "function"
            }
            au = su
        } else
            au = !1;
        Md = au && (!document.documentMode || 9 < document.documentMode)
    }
    function _d() {
        ys && (ys.detachEvent("onpropertychange", Rd),
        gs = ys = null)
    }
    function Rd(t) {
        if (t.propertyName === "value" && Ul(gs)) {
            var e = [];
            Ed(e, gs, t, Fr(t)),
            hd(l3, e)
        }
    }
    function o3(t, e, a) {
        t === "focusin" ? (_d(),
        ys = e,
        gs = a,
        ys.attachEvent("onpropertychange", Rd)) : t === "focusout" && _d()
    }
    function r3(t) {
        if (t === "selectionchange" || t === "keyup" || t === "keydown")
            return Ul(gs)
    }
    function u3(t, e) {
        if (t === "click")
            return Ul(e)
    }
    function c3(t, e) {
        if (t === "input" || t === "change")
            return Ul(e)
    }
    function f3(t, e) {
        return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
    }
    var Ae = typeof Object.is == "function" ? Object.is : f3;
    function vs(t, e) {
        if (Ae(t, e))
            return !0;
        if (typeof t != "object" || t === null || typeof e != "object" || e === null)
            return !1;
        var a = Object.keys(t)
          , l = Object.keys(e);
        if (a.length !== l.length)
            return !1;
        for (l = 0; l < a.length; l++) {
            var u = a[l];
            if (!xi.call(e, u) || !Ae(t[u], e[u]))
                return !1
        }
        return !0
    }
    function Dd(t) {
        for (; t && t.firstChild; )
            t = t.firstChild;
        return t
    }
    function Od(t, e) {
        var a = Dd(t);
        t = 0;
        for (var l; a; ) {
            if (a.nodeType === 3) {
                if (l = t + a.textContent.length,
                t <= e && l >= e)
                    return {
                        node: a,
                        offset: e - t
                    };
                t = l
            }
            t: {
                for (; a; ) {
                    if (a.nextSibling) {
                        a = a.nextSibling;
                        break t
                    }
                    a = a.parentNode
                }
                a = void 0
            }
            a = Dd(a)
        }
    }
    function zd(t, e) {
        return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? zd(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1
    }
    function Ld(t) {
        t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
        for (var e = Ol(t.document); e instanceof t.HTMLIFrameElement; ) {
            try {
                var a = typeof e.contentWindow.location.href == "string"
            } catch {
                a = !1
            }
            if (a)
                t = e.contentWindow;
            else
                break;
            e = Ol(t.document)
        }
        return e
    }
    function lu(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true")
    }
    var h3 = vn && "documentMode" in document && 11 >= document.documentMode
      , ua = null
      , ou = null
      , Ss = null
      , ru = !1;
    function jd(t, e, a) {
        var l = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
        ru || ua == null || ua !== Ol(l) || (l = ua,
        "selectionStart" in l && lu(l) ? l = {
            start: l.selectionStart,
            end: l.selectionEnd
        } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(),
        l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset
        }),
        Ss && vs(Ss, l) || (Ss = l,
        l = wo(ou, "onSelect"),
        0 < l.length && (e = new Vl("onSelect","select",null,e,a),
        t.push({
            event: e,
            listeners: l
        }),
        e.target = ua)))
    }
    function Ci(t, e) {
        var a = {};
        return a[t.toLowerCase()] = e.toLowerCase(),
        a["Webkit" + t] = "webkit" + e,
        a["Moz" + t] = "moz" + e,
        a
    }
    var ca = {
        animationend: Ci("Animation", "AnimationEnd"),
        animationiteration: Ci("Animation", "AnimationIteration"),
        animationstart: Ci("Animation", "AnimationStart"),
        transitionrun: Ci("Transition", "TransitionRun"),
        transitionstart: Ci("Transition", "TransitionStart"),
        transitioncancel: Ci("Transition", "TransitionCancel"),
        transitionend: Ci("Transition", "TransitionEnd")
    }
      , uu = {}
      , Nd = {};
    vn && (Nd = document.createElement("div").style,
    "AnimationEvent" in window || (delete ca.animationend.animation,
    delete ca.animationiteration.animation,
    delete ca.animationstart.animation),
    "TransitionEvent" in window || delete ca.transitionend.transition);
    function Mi(t) {
        if (uu[t])
            return uu[t];
        if (!ca[t])
            return t;
        var e = ca[t], a;
        for (a in e)
            if (e.hasOwnProperty(a) && a in Nd)
                return uu[t] = e[a];
        return t
    }
    var Vd = Mi("animationend")
      , Bd = Mi("animationiteration")
      , Ud = Mi("animationstart")
      , d3 = Mi("transitionrun")
      , m3 = Mi("transitionstart")
      , p3 = Mi("transitioncancel")
      , Hd = Mi("transitionend")
      , qd = new Map
      , cu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    cu.push("scrollEnd");
    function Pe(t, e) {
        qd.set(t, e),
        Ai(e, [t])
    }
    var Hl = typeof reportError == "function" ? reportError : function(t) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var e = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
                error: t
            });
            if (!window.dispatchEvent(e))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", t);
            return
        }
        console.error(t)
    }
      , je = []
      , fa = 0
      , fu = 0;
    function ql() {
        for (var t = fa, e = fu = fa = 0; e < t; ) {
            var a = je[e];
            je[e++] = null;
            var l = je[e];
            je[e++] = null;
            var u = je[e];
            je[e++] = null;
            var f = je[e];
            if (je[e++] = null,
            l !== null && u !== null) {
                var g = l.pending;
                g === null ? u.next = u : (u.next = g.next,
                g.next = u),
                l.pending = u
            }
            f !== 0 && Gd(a, u, f)
        }
    }
    function Gl(t, e, a, l) {
        je[fa++] = t,
        je[fa++] = e,
        je[fa++] = a,
        je[fa++] = l,
        fu |= l,
        t.lanes |= l,
        t = t.alternate,
        t !== null && (t.lanes |= l)
    }
    function hu(t, e, a, l) {
        return Gl(t, e, a, l),
        Yl(t)
    }
    function wi(t, e) {
        return Gl(t, null, null, e),
        Yl(t)
    }
    function Gd(t, e, a) {
        t.lanes |= a;
        var l = t.alternate;
        l !== null && (l.lanes |= a);
        for (var u = !1, f = t.return; f !== null; )
            f.childLanes |= a,
            l = f.alternate,
            l !== null && (l.childLanes |= a),
            f.tag === 22 && (t = f.stateNode,
            t === null || t._visibility & 1 || (u = !0)),
            t = f,
            f = f.return;
        return t.tag === 3 ? (f = t.stateNode,
        u && e !== null && (u = 31 - Te(a),
        t = f.hiddenUpdates,
        l = t[u],
        l === null ? t[u] = [e] : l.push(e),
        e.lane = a | 536870912),
        f) : null
    }
    function Yl(t) {
        if (50 < Gs)
            throw Gs = 0,
            xc = null,
            Error(o(185));
        for (var e = t.return; e !== null; )
            t = e,
            e = t.return;
        return t.tag === 3 ? t.stateNode : null
    }
    var ha = {};
    function y3(t, e, a, l) {
        this.tag = t,
        this.key = a,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.refCleanup = this.ref = null,
        this.pendingProps = e,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = l,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function Ee(t, e, a, l) {
        return new y3(t,e,a,l)
    }
    function du(t) {
        return t = t.prototype,
        !(!t || !t.isReactComponent)
    }
    function Sn(t, e) {
        var a = t.alternate;
        return a === null ? (a = Ee(t.tag, e, t.key, t.mode),
        a.elementType = t.elementType,
        a.type = t.type,
        a.stateNode = t.stateNode,
        a.alternate = t,
        t.alternate = a) : (a.pendingProps = e,
        a.type = t.type,
        a.flags = 0,
        a.subtreeFlags = 0,
        a.deletions = null),
        a.flags = t.flags & 65011712,
        a.childLanes = t.childLanes,
        a.lanes = t.lanes,
        a.child = t.child,
        a.memoizedProps = t.memoizedProps,
        a.memoizedState = t.memoizedState,
        a.updateQueue = t.updateQueue,
        e = t.dependencies,
        a.dependencies = e === null ? null : {
            lanes: e.lanes,
            firstContext: e.firstContext
        },
        a.sibling = t.sibling,
        a.index = t.index,
        a.ref = t.ref,
        a.refCleanup = t.refCleanup,
        a
    }
    function Yd(t, e) {
        t.flags &= 65011714;
        var a = t.alternate;
        return a === null ? (t.childLanes = 0,
        t.lanes = e,
        t.child = null,
        t.subtreeFlags = 0,
        t.memoizedProps = null,
        t.memoizedState = null,
        t.updateQueue = null,
        t.dependencies = null,
        t.stateNode = null) : (t.childLanes = a.childLanes,
        t.lanes = a.lanes,
        t.child = a.child,
        t.subtreeFlags = 0,
        t.deletions = null,
        t.memoizedProps = a.memoizedProps,
        t.memoizedState = a.memoizedState,
        t.updateQueue = a.updateQueue,
        t.type = a.type,
        e = a.dependencies,
        t.dependencies = e === null ? null : {
            lanes: e.lanes,
            firstContext: e.firstContext
        }),
        t
    }
    function kl(t, e, a, l, u, f) {
        var g = 0;
        if (l = t,
        typeof t == "function")
            du(t) && (g = 1);
        else if (typeof t == "string")
            g = xS(t, a, nt.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
        else
            t: switch (t) {
            case Z:
                return t = Ee(31, a, e, u),
                t.elementType = Z,
                t.lanes = f,
                t;
            case A:
                return _i(a.children, u, f, e);
            case E:
                g = 8,
                u |= 24;
                break;
            case R:
                return t = Ee(12, a, e, u | 2),
                t.elementType = R,
                t.lanes = f,
                t;
            case P:
                return t = Ee(13, a, e, u),
                t.elementType = P,
                t.lanes = f,
                t;
            case Y:
                return t = Ee(19, a, e, u),
                t.elementType = Y,
                t.lanes = f,
                t;
            default:
                if (typeof t == "object" && t !== null)
                    switch (t.$$typeof) {
                    case O:
                        g = 10;
                        break t;
                    case _:
                        g = 9;
                        break t;
                    case V:
                        g = 11;
                        break t;
                    case q:
                        g = 14;
                        break t;
                    case Q:
                        g = 16,
                        l = null;
                        break t
                    }
                g = 29,
                a = Error(o(130, t === null ? "null" : typeof t, "")),
                l = null
            }
        return e = Ee(g, a, e, u),
        e.elementType = t,
        e.type = l,
        e.lanes = f,
        e
    }
    function _i(t, e, a, l) {
        return t = Ee(7, t, l, e),
        t.lanes = a,
        t
    }
    function mu(t, e, a) {
        return t = Ee(6, t, null, e),
        t.lanes = a,
        t
    }
    function kd(t) {
        var e = Ee(18, null, null, 0);
        return e.stateNode = t,
        e
    }
    function pu(t, e, a) {
        return e = Ee(4, t.children !== null ? t.children : [], t.key, e),
        e.lanes = a,
        e.stateNode = {
            containerInfo: t.containerInfo,
            pendingChildren: null,
            implementation: t.implementation
        },
        e
    }
    var Xd = new WeakMap;
    function Ne(t, e) {
        if (typeof t == "object" && t !== null) {
            var a = Xd.get(t);
            return a !== void 0 ? a : (e = {
                value: t,
                source: e,
                stack: mn(e)
            },
            Xd.set(t, e),
            e)
        }
        return {
            value: t,
            source: e,
            stack: mn(e)
        }
    }
    var da = []
      , ma = 0
      , Xl = null
      , bs = 0
      , Ve = []
      , Be = 0
      , Yn = null
      , tn = 1
      , en = "";
    function bn(t, e) {
        da[ma++] = bs,
        da[ma++] = Xl,
        Xl = t,
        bs = e
    }
    function Pd(t, e, a) {
        Ve[Be++] = tn,
        Ve[Be++] = en,
        Ve[Be++] = Yn,
        Yn = t;
        var l = tn;
        t = en;
        var u = 32 - Te(l) - 1;
        l &= ~(1 << u),
        a += 1;
        var f = 32 - Te(e) + u;
        if (30 < f) {
            var g = u - u % 5;
            f = (l & (1 << g) - 1).toString(32),
            l >>= g,
            u -= g,
            tn = 1 << 32 - Te(e) + u | a << u | l,
            en = f + t
        } else
            tn = 1 << f | a << u | l,
            en = t
    }
    function yu(t) {
        t.return !== null && (bn(t, 1),
        Pd(t, 1, 0))
    }
    function gu(t) {
        for (; t === Xl; )
            Xl = da[--ma],
            da[ma] = null,
            bs = da[--ma],
            da[ma] = null;
        for (; t === Yn; )
            Yn = Ve[--Be],
            Ve[Be] = null,
            en = Ve[--Be],
            Ve[Be] = null,
            tn = Ve[--Be],
            Ve[Be] = null
    }
    function Kd(t, e) {
        Ve[Be++] = tn,
        Ve[Be++] = en,
        Ve[Be++] = Yn,
        tn = e.id,
        en = e.overflow,
        Yn = t
    }
    var ie = null
      , Nt = null
      , xt = !1
      , kn = null
      , Ue = !1
      , vu = Error(o(519));
    function Xn(t) {
        var e = Error(o(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
        throw xs(Ne(e, t)),
        vu
    }
    function Zd(t) {
        var e = t.stateNode
          , a = t.type
          , l = t.memoizedProps;
        switch (e[ne] = t,
        e[de] = l,
        a) {
        case "dialog":
            gt("cancel", e),
            gt("close", e);
            break;
        case "iframe":
        case "object":
        case "embed":
            gt("load", e);
            break;
        case "video":
        case "audio":
            for (a = 0; a < ks.length; a++)
                gt(ks[a], e);
            break;
        case "source":
            gt("error", e);
            break;
        case "img":
        case "image":
        case "link":
            gt("error", e),
            gt("load", e);
            break;
        case "details":
            gt("toggle", e);
            break;
        case "input":
            gt("invalid", e),
            ld(e, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, !0);
            break;
        case "select":
            gt("invalid", e);
            break;
        case "textarea":
            gt("invalid", e),
            rd(e, l.value, l.defaultValue, l.children)
        }
        a = l.children,
        typeof a != "string" && typeof a != "number" && typeof a != "bigint" || e.textContent === "" + a || l.suppressHydrationWarning === !0 || cp(e.textContent, a) ? (l.popover != null && (gt("beforetoggle", e),
        gt("toggle", e)),
        l.onScroll != null && gt("scroll", e),
        l.onScrollEnd != null && gt("scrollend", e),
        l.onClick != null && (e.onclick = gn),
        e = !0) : e = !1,
        e || Xn(t, !0)
    }
    function Qd(t) {
        for (ie = t.return; ie; )
            switch (ie.tag) {
            case 5:
            case 31:
            case 13:
                Ue = !1;
                return;
            case 27:
            case 3:
                Ue = !0;
                return;
            default:
                ie = ie.return
            }
    }
    function pa(t) {
        if (t !== ie)
            return !1;
        if (!xt)
            return Qd(t),
            xt = !0,
            !1;
        var e = t.tag, a;
        if ((a = e !== 3 && e !== 27) && ((a = e === 5) && (a = t.type,
        a = !(a !== "form" && a !== "button") || Vc(t.type, t.memoizedProps)),
        a = !a),
        a && Nt && Xn(t),
        Qd(t),
        e === 13) {
            if (t = t.memoizedState,
            t = t !== null ? t.dehydrated : null,
            !t)
                throw Error(o(317));
            Nt = Sp(t)
        } else if (e === 31) {
            if (t = t.memoizedState,
            t = t !== null ? t.dehydrated : null,
            !t)
                throw Error(o(317));
            Nt = Sp(t)
        } else
            e === 27 ? (e = Nt,
            ai(t.type) ? (t = Gc,
            Gc = null,
            Nt = t) : Nt = e) : Nt = ie ? qe(t.stateNode.nextSibling) : null;
        return !0
    }
    function Ri() {
        Nt = ie = null,
        xt = !1
    }
    function Su() {
        var t = kn;
        return t !== null && (ve === null ? ve = t : ve.push.apply(ve, t),
        kn = null),
        t
    }
    function xs(t) {
        kn === null ? kn = [t] : kn.push(t)
    }
    var bu = M(null)
      , Di = null
      , xn = null;
    function Pn(t, e, a) {
        I(bu, e._currentValue),
        e._currentValue = a
    }
    function Tn(t) {
        t._currentValue = bu.current,
        k(bu)
    }
    function xu(t, e, a) {
        for (; t !== null; ) {
            var l = t.alternate;
            if ((t.childLanes & e) !== e ? (t.childLanes |= e,
            l !== null && (l.childLanes |= e)) : l !== null && (l.childLanes & e) !== e && (l.childLanes |= e),
            t === a)
                break;
            t = t.return
        }
    }
    function Tu(t, e, a, l) {
        var u = t.child;
        for (u !== null && (u.return = t); u !== null; ) {
            var f = u.dependencies;
            if (f !== null) {
                var g = u.child;
                f = f.firstContext;
                t: for (; f !== null; ) {
                    var x = f;
                    f = u;
                    for (var C = 0; C < e.length; C++)
                        if (x.context === e[C]) {
                            f.lanes |= a,
                            x = f.alternate,
                            x !== null && (x.lanes |= a),
                            xu(f.return, a, t),
                            l || (g = null);
                            break t
                        }
                    f = x.next
                }
            } else if (u.tag === 18) {
                if (g = u.return,
                g === null)
                    throw Error(o(341));
                g.lanes |= a,
                f = g.alternate,
                f !== null && (f.lanes |= a),
                xu(g, a, t),
                g = null
            } else
                g = u.child;
            if (g !== null)
                g.return = u;
            else
                for (g = u; g !== null; ) {
                    if (g === t) {
                        g = null;
                        break
                    }
                    if (u = g.sibling,
                    u !== null) {
                        u.return = g.return,
                        g = u;
                        break
                    }
                    g = g.return
                }
            u = g
        }
    }
    function ya(t, e, a, l) {
        t = null;
        for (var u = e, f = !1; u !== null; ) {
            if (!f) {
                if ((u.flags & 524288) !== 0)
                    f = !0;
                else if ((u.flags & 262144) !== 0)
                    break
            }
            if (u.tag === 10) {
                var g = u.alternate;
                if (g === null)
                    throw Error(o(387));
                if (g = g.memoizedProps,
                g !== null) {
                    var x = u.type;
                    Ae(u.pendingProps.value, g.value) || (t !== null ? t.push(x) : t = [x])
                }
            } else if (u === Tt.current) {
                if (g = u.alternate,
                g === null)
                    throw Error(o(387));
                g.memoizedState.memoizedState !== u.memoizedState.memoizedState && (t !== null ? t.push(Qs) : t = [Qs])
            }
            u = u.return
        }
        t !== null && Tu(e, t, a, l),
        e.flags |= 262144
    }
    function Pl(t) {
        for (t = t.firstContext; t !== null; ) {
            if (!Ae(t.context._currentValue, t.memoizedValue))
                return !0;
            t = t.next
        }
        return !1
    }
    function Oi(t) {
        Di = t,
        xn = null,
        t = t.dependencies,
        t !== null && (t.firstContext = null)
    }
    function ae(t) {
        return Fd(Di, t)
    }
    function Kl(t, e) {
        return Di === null && Oi(t),
        Fd(t, e)
    }
    function Fd(t, e) {
        var a = e._currentValue;
        if (e = {
            context: e,
            memoizedValue: a,
            next: null
        },
        xn === null) {
            if (t === null)
                throw Error(o(308));
            xn = e,
            t.dependencies = {
                lanes: 0,
                firstContext: e
            },
            t.flags |= 524288
        } else
            xn = xn.next = e;
        return a
    }
    var g3 = typeof AbortController < "u" ? AbortController : function() {
        var t = []
          , e = this.signal = {
            aborted: !1,
            addEventListener: function(a, l) {
                t.push(l)
            }
        };
        this.abort = function() {
            e.aborted = !0,
            t.forEach(function(a) {
                return a()
            })
        }
    }
      , v3 = n.unstable_scheduleCallback
      , S3 = n.unstable_NormalPriority
      , Pt = {
        $$typeof: O,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function Au() {
        return {
            controller: new g3,
            data: new Map,
            refCount: 0
        }
    }
    function Ts(t) {
        t.refCount--,
        t.refCount === 0 && v3(S3, function() {
            t.controller.abort()
        })
    }
    var As = null
      , Eu = 0
      , ga = 0
      , va = null;
    function b3(t, e) {
        if (As === null) {
            var a = As = [];
            Eu = 0,
            ga = wc(),
            va = {
                status: "pending",
                value: void 0,
                then: function(l) {
                    a.push(l)
                }
            }
        }
        return Eu++,
        e.then(Jd, Jd),
        e
    }
    function Jd() {
        if (--Eu === 0 && As !== null) {
            va !== null && (va.status = "fulfilled");
            var t = As;
            As = null,
            ga = 0,
            va = null;
            for (var e = 0; e < t.length; e++)
                (0,
                t[e])()
        }
    }
    function x3(t, e) {
        var a = []
          , l = {
            status: "pending",
            value: null,
            reason: null,
            then: function(u) {
                a.push(u)
            }
        };
        return t.then(function() {
            l.status = "fulfilled",
            l.value = e;
            for (var u = 0; u < a.length; u++)
                (0,
                a[u])(e)
        }, function(u) {
            for (l.status = "rejected",
            l.reason = u,
            u = 0; u < a.length; u++)
                (0,
                a[u])(void 0)
        }),
        l
    }
    var Wd = B.S;
    B.S = function(t, e) {
        j0 = Ht(),
        typeof e == "object" && e !== null && typeof e.then == "function" && b3(t, e),
        Wd !== null && Wd(t, e)
    }
    ;
    var zi = M(null);
    function Cu() {
        var t = zi.current;
        return t !== null ? t : Ot.pooledCache
    }
    function Zl(t, e) {
        e === null ? I(zi, zi.current) : I(zi, e.pool)
    }
    function Id() {
        var t = Cu();
        return t === null ? null : {
            parent: Pt._currentValue,
            pool: t
        }
    }
    var Sa = Error(o(460))
      , Mu = Error(o(474))
      , Ql = Error(o(542))
      , Fl = {
        then: function() {}
    };
    function $d(t) {
        return t = t.status,
        t === "fulfilled" || t === "rejected"
    }
    function tm(t, e, a) {
        switch (a = t[a],
        a === void 0 ? t.push(e) : a !== e && (e.then(gn, gn),
        e = a),
        e.status) {
        case "fulfilled":
            return e.value;
        case "rejected":
            throw t = e.reason,
            nm(t),
            t;
        default:
            if (typeof e.status == "string")
                e.then(gn, gn);
            else {
                if (t = Ot,
                t !== null && 100 < t.shellSuspendCounter)
                    throw Error(o(482));
                t = e,
                t.status = "pending",
                t.then(function(l) {
                    if (e.status === "pending") {
                        var u = e;
                        u.status = "fulfilled",
                        u.value = l
                    }
                }, function(l) {
                    if (e.status === "pending") {
                        var u = e;
                        u.status = "rejected",
                        u.reason = l
                    }
                })
            }
            switch (e.status) {
            case "fulfilled":
                return e.value;
            case "rejected":
                throw t = e.reason,
                nm(t),
                t
            }
            throw ji = e,
            Sa
        }
    }
    function Li(t) {
        try {
            var e = t._init;
            return e(t._payload)
        } catch (a) {
            throw a !== null && typeof a == "object" && typeof a.then == "function" ? (ji = a,
            Sa) : a
        }
    }
    var ji = null;
    function em() {
        if (ji === null)
            throw Error(o(459));
        var t = ji;
        return ji = null,
        t
    }
    function nm(t) {
        if (t === Sa || t === Ql)
            throw Error(o(483))
    }
    var ba = null
      , Es = 0;
    function Jl(t) {
        var e = Es;
        return Es += 1,
        ba === null && (ba = []),
        tm(ba, t, e)
    }
    function Cs(t, e) {
        e = e.props.ref,
        t.ref = e !== void 0 ? e : null
    }
    function Wl(t, e) {
        throw e.$$typeof === S ? Error(o(525)) : (t = Object.prototype.toString.call(e),
        Error(o(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)))
    }
    function im(t) {
        function e(D, w) {
            if (t) {
                var L = D.deletions;
                L === null ? (D.deletions = [w],
                D.flags |= 16) : L.push(w)
            }
        }
        function a(D, w) {
            if (!t)
                return null;
            for (; w !== null; )
                e(D, w),
                w = w.sibling;
            return null
        }
        function l(D) {
            for (var w = new Map; D !== null; )
                D.key !== null ? w.set(D.key, D) : w.set(D.index, D),
                D = D.sibling;
            return w
        }
        function u(D, w) {
            return D = Sn(D, w),
            D.index = 0,
            D.sibling = null,
            D
        }
        function f(D, w, L) {
            return D.index = L,
            t ? (L = D.alternate,
            L !== null ? (L = L.index,
            L < w ? (D.flags |= 67108866,
            w) : L) : (D.flags |= 67108866,
            w)) : (D.flags |= 1048576,
            w)
        }
        function g(D) {
            return t && D.alternate === null && (D.flags |= 67108866),
            D
        }
        function x(D, w, L, G) {
            return w === null || w.tag !== 6 ? (w = mu(L, D.mode, G),
            w.return = D,
            w) : (w = u(w, L),
            w.return = D,
            w)
        }
        function C(D, w, L, G) {
            var st = L.type;
            return st === A ? H(D, w, L.props.children, G, L.key) : w !== null && (w.elementType === st || typeof st == "object" && st !== null && st.$$typeof === Q && Li(st) === w.type) ? (w = u(w, L.props),
            Cs(w, L),
            w.return = D,
            w) : (w = kl(L.type, L.key, L.props, null, D.mode, G),
            Cs(w, L),
            w.return = D,
            w)
        }
        function j(D, w, L, G) {
            return w === null || w.tag !== 4 || w.stateNode.containerInfo !== L.containerInfo || w.stateNode.implementation !== L.implementation ? (w = pu(L, D.mode, G),
            w.return = D,
            w) : (w = u(w, L.children || []),
            w.return = D,
            w)
        }
        function H(D, w, L, G, st) {
            return w === null || w.tag !== 7 ? (w = _i(L, D.mode, G, st),
            w.return = D,
            w) : (w = u(w, L),
            w.return = D,
            w)
        }
        function X(D, w, L) {
            if (typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint")
                return w = mu("" + w, D.mode, L),
                w.return = D,
                w;
            if (typeof w == "object" && w !== null) {
                switch (w.$$typeof) {
                case b:
                    return L = kl(w.type, w.key, w.props, null, D.mode, L),
                    Cs(L, w),
                    L.return = D,
                    L;
                case T:
                    return w = pu(w, D.mode, L),
                    w.return = D,
                    w;
                case Q:
                    return w = Li(w),
                    X(D, w, L)
                }
                if (ot(w) || tt(w))
                    return w = _i(w, D.mode, L, null),
                    w.return = D,
                    w;
                if (typeof w.then == "function")
                    return X(D, Jl(w), L);
                if (w.$$typeof === O)
                    return X(D, Kl(D, w), L);
                Wl(D, w)
            }
            return null
        }
        function N(D, w, L, G) {
            var st = w !== null ? w.key : null;
            if (typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint")
                return st !== null ? null : x(D, w, "" + L, G);
            if (typeof L == "object" && L !== null) {
                switch (L.$$typeof) {
                case b:
                    return L.key === st ? C(D, w, L, G) : null;
                case T:
                    return L.key === st ? j(D, w, L, G) : null;
                case Q:
                    return L = Li(L),
                    N(D, w, L, G)
                }
                if (ot(L) || tt(L))
                    return st !== null ? null : H(D, w, L, G, null);
                if (typeof L.then == "function")
                    return N(D, w, Jl(L), G);
                if (L.$$typeof === O)
                    return N(D, w, Kl(D, L), G);
                Wl(D, L)
            }
            return null
        }
        function U(D, w, L, G, st) {
            if (typeof G == "string" && G !== "" || typeof G == "number" || typeof G == "bigint")
                return D = D.get(L) || null,
                x(w, D, "" + G, st);
            if (typeof G == "object" && G !== null) {
                switch (G.$$typeof) {
                case b:
                    return D = D.get(G.key === null ? L : G.key) || null,
                    C(w, D, G, st);
                case T:
                    return D = D.get(G.key === null ? L : G.key) || null,
                    j(w, D, G, st);
                case Q:
                    return G = Li(G),
                    U(D, w, L, G, st)
                }
                if (ot(G) || tt(G))
                    return D = D.get(L) || null,
                    H(w, D, G, st, null);
                if (typeof G.then == "function")
                    return U(D, w, L, Jl(G), st);
                if (G.$$typeof === O)
                    return U(D, w, L, Kl(w, G), st);
                Wl(w, G)
            }
            return null
        }
        function et(D, w, L, G) {
            for (var st = null, At = null, at = w, mt = w = 0, bt = null; at !== null && mt < L.length; mt++) {
                at.index > mt ? (bt = at,
                at = null) : bt = at.sibling;
                var Et = N(D, at, L[mt], G);
                if (Et === null) {
                    at === null && (at = bt);
                    break
                }
                t && at && Et.alternate === null && e(D, at),
                w = f(Et, w, mt),
                At === null ? st = Et : At.sibling = Et,
                At = Et,
                at = bt
            }
            if (mt === L.length)
                return a(D, at),
                xt && bn(D, mt),
                st;
            if (at === null) {
                for (; mt < L.length; mt++)
                    at = X(D, L[mt], G),
                    at !== null && (w = f(at, w, mt),
                    At === null ? st = at : At.sibling = at,
                    At = at);
                return xt && bn(D, mt),
                st
            }
            for (at = l(at); mt < L.length; mt++)
                bt = U(at, D, mt, L[mt], G),
                bt !== null && (t && bt.alternate !== null && at.delete(bt.key === null ? mt : bt.key),
                w = f(bt, w, mt),
                At === null ? st = bt : At.sibling = bt,
                At = bt);
            return t && at.forEach(function(ui) {
                return e(D, ui)
            }),
            xt && bn(D, mt),
            st
        }
        function lt(D, w, L, G) {
            if (L == null)
                throw Error(o(151));
            for (var st = null, At = null, at = w, mt = w = 0, bt = null, Et = L.next(); at !== null && !Et.done; mt++,
            Et = L.next()) {
                at.index > mt ? (bt = at,
                at = null) : bt = at.sibling;
                var ui = N(D, at, Et.value, G);
                if (ui === null) {
                    at === null && (at = bt);
                    break
                }
                t && at && ui.alternate === null && e(D, at),
                w = f(ui, w, mt),
                At === null ? st = ui : At.sibling = ui,
                At = ui,
                at = bt
            }
            if (Et.done)
                return a(D, at),
                xt && bn(D, mt),
                st;
            if (at === null) {
                for (; !Et.done; mt++,
                Et = L.next())
                    Et = X(D, Et.value, G),
                    Et !== null && (w = f(Et, w, mt),
                    At === null ? st = Et : At.sibling = Et,
                    At = Et);
                return xt && bn(D, mt),
                st
            }
            for (at = l(at); !Et.done; mt++,
            Et = L.next())
                Et = U(at, D, mt, Et.value, G),
                Et !== null && (t && Et.alternate !== null && at.delete(Et.key === null ? mt : Et.key),
                w = f(Et, w, mt),
                At === null ? st = Et : At.sibling = Et,
                At = Et);
            return t && at.forEach(function(zS) {
                return e(D, zS)
            }),
            xt && bn(D, mt),
            st
        }
        function Dt(D, w, L, G) {
            if (typeof L == "object" && L !== null && L.type === A && L.key === null && (L = L.props.children),
            typeof L == "object" && L !== null) {
                switch (L.$$typeof) {
                case b:
                    t: {
                        for (var st = L.key; w !== null; ) {
                            if (w.key === st) {
                                if (st = L.type,
                                st === A) {
                                    if (w.tag === 7) {
                                        a(D, w.sibling),
                                        G = u(w, L.props.children),
                                        G.return = D,
                                        D = G;
                                        break t
                                    }
                                } else if (w.elementType === st || typeof st == "object" && st !== null && st.$$typeof === Q && Li(st) === w.type) {
                                    a(D, w.sibling),
                                    G = u(w, L.props),
                                    Cs(G, L),
                                    G.return = D,
                                    D = G;
                                    break t
                                }
                                a(D, w);
                                break
                            } else
                                e(D, w);
                            w = w.sibling
                        }
                        L.type === A ? (G = _i(L.props.children, D.mode, G, L.key),
                        G.return = D,
                        D = G) : (G = kl(L.type, L.key, L.props, null, D.mode, G),
                        Cs(G, L),
                        G.return = D,
                        D = G)
                    }
                    return g(D);
                case T:
                    t: {
                        for (st = L.key; w !== null; ) {
                            if (w.key === st)
                                if (w.tag === 4 && w.stateNode.containerInfo === L.containerInfo && w.stateNode.implementation === L.implementation) {
                                    a(D, w.sibling),
                                    G = u(w, L.children || []),
                                    G.return = D,
                                    D = G;
                                    break t
                                } else {
                                    a(D, w);
                                    break
                                }
                            else
                                e(D, w);
                            w = w.sibling
                        }
                        G = pu(L, D.mode, G),
                        G.return = D,
                        D = G
                    }
                    return g(D);
                case Q:
                    return L = Li(L),
                    Dt(D, w, L, G)
                }
                if (ot(L))
                    return et(D, w, L, G);
                if (tt(L)) {
                    if (st = tt(L),
                    typeof st != "function")
                        throw Error(o(150));
                    return L = st.call(L),
                    lt(D, w, L, G)
                }
                if (typeof L.then == "function")
                    return Dt(D, w, Jl(L), G);
                if (L.$$typeof === O)
                    return Dt(D, w, Kl(D, L), G);
                Wl(D, L)
            }
            return typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint" ? (L = "" + L,
            w !== null && w.tag === 6 ? (a(D, w.sibling),
            G = u(w, L),
            G.return = D,
            D = G) : (a(D, w),
            G = mu(L, D.mode, G),
            G.return = D,
            D = G),
            g(D)) : a(D, w)
        }
        return function(D, w, L, G) {
            try {
                Es = 0;
                var st = Dt(D, w, L, G);
                return ba = null,
                st
            } catch (at) {
                if (at === Sa || at === Ql)
                    throw at;
                var At = Ee(29, at, null, D.mode);
                return At.lanes = G,
                At.return = D,
                At
            } finally {}
        }
    }
    var Ni = im(!0)
      , am = im(!1)
      , Kn = !1;
    function wu(t) {
        t.updateQueue = {
            baseState: t.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }
    function _u(t, e) {
        t = t.updateQueue,
        e.updateQueue === t && (e.updateQueue = {
            baseState: t.baseState,
            firstBaseUpdate: t.firstBaseUpdate,
            lastBaseUpdate: t.lastBaseUpdate,
            shared: t.shared,
            callbacks: null
        })
    }
    function Zn(t) {
        return {
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function Qn(t, e, a) {
        var l = t.updateQueue;
        if (l === null)
            return null;
        if (l = l.shared,
        (Ct & 2) !== 0) {
            var u = l.pending;
            return u === null ? e.next = e : (e.next = u.next,
            u.next = e),
            l.pending = e,
            e = Yl(t),
            Gd(t, null, a),
            e
        }
        return Gl(t, l, e, a),
        Yl(t)
    }
    function Ms(t, e, a) {
        if (e = e.updateQueue,
        e !== null && (e = e.shared,
        (a & 4194048) !== 0)) {
            var l = e.lanes;
            l &= t.pendingLanes,
            a |= l,
            e.lanes = a,
            Fh(t, a)
        }
    }
    function Ru(t, e) {
        var a = t.updateQueue
          , l = t.alternate;
        if (l !== null && (l = l.updateQueue,
        a === l)) {
            var u = null
              , f = null;
            if (a = a.firstBaseUpdate,
            a !== null) {
                do {
                    var g = {
                        lane: a.lane,
                        tag: a.tag,
                        payload: a.payload,
                        callback: null,
                        next: null
                    };
                    f === null ? u = f = g : f = f.next = g,
                    a = a.next
                } while (a !== null);
                f === null ? u = f = e : f = f.next = e
            } else
                u = f = e;
            a = {
                baseState: l.baseState,
                firstBaseUpdate: u,
                lastBaseUpdate: f,
                shared: l.shared,
                callbacks: l.callbacks
            },
            t.updateQueue = a;
            return
        }
        t = a.lastBaseUpdate,
        t === null ? a.firstBaseUpdate = e : t.next = e,
        a.lastBaseUpdate = e
    }
    var Du = !1;
    function ws() {
        if (Du) {
            var t = va;
            if (t !== null)
                throw t
        }
    }
    function _s(t, e, a, l) {
        Du = !1;
        var u = t.updateQueue;
        Kn = !1;
        var f = u.firstBaseUpdate
          , g = u.lastBaseUpdate
          , x = u.shared.pending;
        if (x !== null) {
            u.shared.pending = null;
            var C = x
              , j = C.next;
            C.next = null,
            g === null ? f = j : g.next = j,
            g = C;
            var H = t.alternate;
            H !== null && (H = H.updateQueue,
            x = H.lastBaseUpdate,
            x !== g && (x === null ? H.firstBaseUpdate = j : x.next = j,
            H.lastBaseUpdate = C))
        }
        if (f !== null) {
            var X = u.baseState;
            g = 0,
            H = j = C = null,
            x = f;
            do {
                var N = x.lane & -536870913
                  , U = N !== x.lane;
                if (U ? (St & N) === N : (l & N) === N) {
                    N !== 0 && N === ga && (Du = !0),
                    H !== null && (H = H.next = {
                        lane: 0,
                        tag: x.tag,
                        payload: x.payload,
                        callback: null,
                        next: null
                    });
                    t: {
                        var et = t
                          , lt = x;
                        N = e;
                        var Dt = a;
                        switch (lt.tag) {
                        case 1:
                            if (et = lt.payload,
                            typeof et == "function") {
                                X = et.call(Dt, X, N);
                                break t
                            }
                            X = et;
                            break t;
                        case 3:
                            et.flags = et.flags & -65537 | 128;
                        case 0:
                            if (et = lt.payload,
                            N = typeof et == "function" ? et.call(Dt, X, N) : et,
                            N == null)
                                break t;
                            X = y({}, X, N);
                            break t;
                        case 2:
                            Kn = !0
                        }
                    }
                    N = x.callback,
                    N !== null && (t.flags |= 64,
                    U && (t.flags |= 8192),
                    U = u.callbacks,
                    U === null ? u.callbacks = [N] : U.push(N))
                } else
                    U = {
                        lane: N,
                        tag: x.tag,
                        payload: x.payload,
                        callback: x.callback,
                        next: null
                    },
                    H === null ? (j = H = U,
                    C = X) : H = H.next = U,
                    g |= N;
                if (x = x.next,
                x === null) {
                    if (x = u.shared.pending,
                    x === null)
                        break;
                    U = x,
                    x = U.next,
                    U.next = null,
                    u.lastBaseUpdate = U,
                    u.shared.pending = null
                }
            } while (!0);
            H === null && (C = X),
            u.baseState = C,
            u.firstBaseUpdate = j,
            u.lastBaseUpdate = H,
            f === null && (u.shared.lanes = 0),
            $n |= g,
            t.lanes = g,
            t.memoizedState = X
        }
    }
    function sm(t, e) {
        if (typeof t != "function")
            throw Error(o(191, t));
        t.call(e)
    }
    function lm(t, e) {
        var a = t.callbacks;
        if (a !== null)
            for (t.callbacks = null,
            t = 0; t < a.length; t++)
                sm(a[t], e)
    }
    var xa = M(null)
      , Il = M(0);
    function om(t, e) {
        t = On,
        I(Il, t),
        I(xa, e),
        On = t | e.baseLanes
    }
    function Ou() {
        I(Il, On),
        I(xa, xa.current)
    }
    function zu() {
        On = Il.current,
        k(xa),
        k(Il)
    }
    var Ce = M(null)
      , He = null;
    function Fn(t) {
        var e = t.alternate;
        I(kt, kt.current & 1),
        I(Ce, t),
        He === null && (e === null || xa.current !== null || e.memoizedState !== null) && (He = t)
    }
    function Lu(t) {
        I(kt, kt.current),
        I(Ce, t),
        He === null && (He = t)
    }
    function rm(t) {
        t.tag === 22 ? (I(kt, kt.current),
        I(Ce, t),
        He === null && (He = t)) : Jn()
    }
    function Jn() {
        I(kt, kt.current),
        I(Ce, Ce.current)
    }
    function Me(t) {
        k(Ce),
        He === t && (He = null),
        k(kt)
    }
    var kt = M(0);
    function $l(t) {
        for (var e = t; e !== null; ) {
            if (e.tag === 13) {
                var a = e.memoizedState;
                if (a !== null && (a = a.dehydrated,
                a === null || Hc(a) || qc(a)))
                    return e
            } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
                if ((e.flags & 128) !== 0)
                    return e
            } else if (e.child !== null) {
                e.child.return = e,
                e = e.child;
                continue
            }
            if (e === t)
                break;
            for (; e.sibling === null; ) {
                if (e.return === null || e.return === t)
                    return null;
                e = e.return
            }
            e.sibling.return = e.return,
            e = e.sibling
        }
        return null
    }
    var An = 0
      , dt = null
      , _t = null
      , Kt = null
      , to = !1
      , Ta = !1
      , Vi = !1
      , eo = 0
      , Rs = 0
      , Aa = null
      , T3 = 0;
    function qt() {
        throw Error(o(321))
    }
    function ju(t, e) {
        if (e === null)
            return !1;
        for (var a = 0; a < e.length && a < t.length; a++)
            if (!Ae(t[a], e[a]))
                return !1;
        return !0
    }
    function Nu(t, e, a, l, u, f) {
        return An = f,
        dt = e,
        e.memoizedState = null,
        e.updateQueue = null,
        e.lanes = 0,
        B.H = t === null || t.memoizedState === null ? Pm : Ju,
        Vi = !1,
        f = a(l, u),
        Vi = !1,
        Ta && (f = cm(e, a, l, u)),
        um(t),
        f
    }
    function um(t) {
        B.H = zs;
        var e = _t !== null && _t.next !== null;
        if (An = 0,
        Kt = _t = dt = null,
        to = !1,
        Rs = 0,
        Aa = null,
        e)
            throw Error(o(300));
        t === null || Zt || (t = t.dependencies,
        t !== null && Pl(t) && (Zt = !0))
    }
    function cm(t, e, a, l) {
        dt = t;
        var u = 0;
        do {
            if (Ta && (Aa = null),
            Rs = 0,
            Ta = !1,
            25 <= u)
                throw Error(o(301));
            if (u += 1,
            Kt = _t = null,
            t.updateQueue != null) {
                var f = t.updateQueue;
                f.lastEffect = null,
                f.events = null,
                f.stores = null,
                f.memoCache != null && (f.memoCache.index = 0)
            }
            B.H = Km,
            f = e(a, l)
        } while (Ta);
        return f
    }
    function A3() {
        var t = B.H
          , e = t.useState()[0];
        return e = typeof e.then == "function" ? Ds(e) : e,
        t = t.useState()[0],
        (_t !== null ? _t.memoizedState : null) !== t && (dt.flags |= 1024),
        e
    }
    function Vu() {
        var t = eo !== 0;
        return eo = 0,
        t
    }
    function Bu(t, e, a) {
        e.updateQueue = t.updateQueue,
        e.flags &= -2053,
        t.lanes &= ~a
    }
    function Uu(t) {
        if (to) {
            for (t = t.memoizedState; t !== null; ) {
                var e = t.queue;
                e !== null && (e.pending = null),
                t = t.next
            }
            to = !1
        }
        An = 0,
        Kt = _t = dt = null,
        Ta = !1,
        Rs = eo = 0,
        Aa = null
    }
    function ce() {
        var t = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Kt === null ? dt.memoizedState = Kt = t : Kt = Kt.next = t,
        Kt
    }
    function Xt() {
        if (_t === null) {
            var t = dt.alternate;
            t = t !== null ? t.memoizedState : null
        } else
            t = _t.next;
        var e = Kt === null ? dt.memoizedState : Kt.next;
        if (e !== null)
            Kt = e,
            _t = t;
        else {
            if (t === null)
                throw dt.alternate === null ? Error(o(467)) : Error(o(310));
            _t = t,
            t = {
                memoizedState: _t.memoizedState,
                baseState: _t.baseState,
                baseQueue: _t.baseQueue,
                queue: _t.queue,
                next: null
            },
            Kt === null ? dt.memoizedState = Kt = t : Kt = Kt.next = t
        }
        return Kt
    }
    function no() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function Ds(t) {
        var e = Rs;
        return Rs += 1,
        Aa === null && (Aa = []),
        t = tm(Aa, t, e),
        e = dt,
        (Kt === null ? e.memoizedState : Kt.next) === null && (e = e.alternate,
        B.H = e === null || e.memoizedState === null ? Pm : Ju),
        t
    }
    function io(t) {
        if (t !== null && typeof t == "object") {
            if (typeof t.then == "function")
                return Ds(t);
            if (t.$$typeof === O)
                return ae(t)
        }
        throw Error(o(438, String(t)))
    }
    function Hu(t) {
        var e = null
          , a = dt.updateQueue;
        if (a !== null && (e = a.memoCache),
        e == null) {
            var l = dt.alternate;
            l !== null && (l = l.updateQueue,
            l !== null && (l = l.memoCache,
            l != null && (e = {
                data: l.data.map(function(u) {
                    return u.slice()
                }),
                index: 0
            })))
        }
        if (e == null && (e = {
            data: [],
            index: 0
        }),
        a === null && (a = no(),
        dt.updateQueue = a),
        a.memoCache = e,
        a = e.data[e.index],
        a === void 0)
            for (a = e.data[e.index] = Array(t),
            l = 0; l < t; l++)
                a[l] = K;
        return e.index++,
        a
    }
    function En(t, e) {
        return typeof e == "function" ? e(t) : e
    }
    function ao(t) {
        var e = Xt();
        return qu(e, _t, t)
    }
    function qu(t, e, a) {
        var l = t.queue;
        if (l === null)
            throw Error(o(311));
        l.lastRenderedReducer = a;
        var u = t.baseQueue
          , f = l.pending;
        if (f !== null) {
            if (u !== null) {
                var g = u.next;
                u.next = f.next,
                f.next = g
            }
            e.baseQueue = u = f,
            l.pending = null
        }
        if (f = t.baseState,
        u === null)
            t.memoizedState = f;
        else {
            e = u.next;
            var x = g = null
              , C = null
              , j = e
              , H = !1;
            do {
                var X = j.lane & -536870913;
                if (X !== j.lane ? (St & X) === X : (An & X) === X) {
                    var N = j.revertLane;
                    if (N === 0)
                        C !== null && (C = C.next = {
                            lane: 0,
                            revertLane: 0,
                            gesture: null,
                            action: j.action,
                            hasEagerState: j.hasEagerState,
                            eagerState: j.eagerState,
                            next: null
                        }),
                        X === ga && (H = !0);
                    else if ((An & N) === N) {
                        j = j.next,
                        N === ga && (H = !0);
                        continue
                    } else
                        X = {
                            lane: 0,
                            revertLane: j.revertLane,
                            gesture: null,
                            action: j.action,
                            hasEagerState: j.hasEagerState,
                            eagerState: j.eagerState,
                            next: null
                        },
                        C === null ? (x = C = X,
                        g = f) : C = C.next = X,
                        dt.lanes |= N,
                        $n |= N;
                    X = j.action,
                    Vi && a(f, X),
                    f = j.hasEagerState ? j.eagerState : a(f, X)
                } else
                    N = {
                        lane: X,
                        revertLane: j.revertLane,
                        gesture: j.gesture,
                        action: j.action,
                        hasEagerState: j.hasEagerState,
                        eagerState: j.eagerState,
                        next: null
                    },
                    C === null ? (x = C = N,
                    g = f) : C = C.next = N,
                    dt.lanes |= X,
                    $n |= X;
                j = j.next
            } while (j !== null && j !== e);
            if (C === null ? g = f : C.next = x,
            !Ae(f, t.memoizedState) && (Zt = !0,
            H && (a = va,
            a !== null)))
                throw a;
            t.memoizedState = f,
            t.baseState = g,
            t.baseQueue = C,
            l.lastRenderedState = f
        }
        return u === null && (l.lanes = 0),
        [t.memoizedState, l.dispatch]
    }
    function Gu(t) {
        var e = Xt()
          , a = e.queue;
        if (a === null)
            throw Error(o(311));
        a.lastRenderedReducer = t;
        var l = a.dispatch
          , u = a.pending
          , f = e.memoizedState;
        if (u !== null) {
            a.pending = null;
            var g = u = u.next;
            do
                f = t(f, g.action),
                g = g.next;
            while (g !== u);
            Ae(f, e.memoizedState) || (Zt = !0),
            e.memoizedState = f,
            e.baseQueue === null && (e.baseState = f),
            a.lastRenderedState = f
        }
        return [f, l]
    }
    function fm(t, e, a) {
        var l = dt
          , u = Xt()
          , f = xt;
        if (f) {
            if (a === void 0)
                throw Error(o(407));
            a = a()
        } else
            a = e();
        var g = !Ae((_t || u).memoizedState, a);
        if (g && (u.memoizedState = a,
        Zt = !0),
        u = u.queue,
        Xu(mm.bind(null, l, u, t), [t]),
        u.getSnapshot !== e || g || Kt !== null && Kt.memoizedState.tag & 1) {
            if (l.flags |= 2048,
            Ea(9, {
                destroy: void 0
            }, dm.bind(null, l, u, a, e), null),
            Ot === null)
                throw Error(o(349));
            f || (An & 127) !== 0 || hm(l, e, a)
        }
        return a
    }
    function hm(t, e, a) {
        t.flags |= 16384,
        t = {
            getSnapshot: e,
            value: a
        },
        e = dt.updateQueue,
        e === null ? (e = no(),
        dt.updateQueue = e,
        e.stores = [t]) : (a = e.stores,
        a === null ? e.stores = [t] : a.push(t))
    }
    function dm(t, e, a, l) {
        e.value = a,
        e.getSnapshot = l,
        pm(e) && ym(t)
    }
    function mm(t, e, a) {
        return a(function() {
            pm(e) && ym(t)
        })
    }
    function pm(t) {
        var e = t.getSnapshot;
        t = t.value;
        try {
            var a = e();
            return !Ae(t, a)
        } catch {
            return !0
        }
    }
    function ym(t) {
        var e = wi(t, 2);
        e !== null && Se(e, t, 2)
    }
    function Yu(t) {
        var e = ce();
        if (typeof t == "function") {
            var a = t;
            if (t = a(),
            Vi) {
                Hn(!0);
                try {
                    a()
                } finally {
                    Hn(!1)
                }
            }
        }
        return e.memoizedState = e.baseState = t,
        e.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: En,
            lastRenderedState: t
        },
        e
    }
    function gm(t, e, a, l) {
        return t.baseState = a,
        qu(t, _t, typeof l == "function" ? l : En)
    }
    function E3(t, e, a, l, u) {
        if (oo(t))
            throw Error(o(485));
        if (t = e.action,
        t !== null) {
            var f = {
                payload: u,
                action: t,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(g) {
                    f.listeners.push(g)
                }
            };
            B.T !== null ? a(!0) : f.isTransition = !1,
            l(f),
            a = e.pending,
            a === null ? (f.next = e.pending = f,
            vm(e, f)) : (f.next = a.next,
            e.pending = a.next = f)
        }
    }
    function vm(t, e) {
        var a = e.action
          , l = e.payload
          , u = t.state;
        if (e.isTransition) {
            var f = B.T
              , g = {};
            B.T = g;
            try {
                var x = a(u, l)
                  , C = B.S;
                C !== null && C(g, x),
                Sm(t, e, x)
            } catch (j) {
                ku(t, e, j)
            } finally {
                f !== null && g.types !== null && (f.types = g.types),
                B.T = f
            }
        } else
            try {
                f = a(u, l),
                Sm(t, e, f)
            } catch (j) {
                ku(t, e, j)
            }
    }
    function Sm(t, e, a) {
        a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(l) {
            bm(t, e, l)
        }, function(l) {
            return ku(t, e, l)
        }) : bm(t, e, a)
    }
    function bm(t, e, a) {
        e.status = "fulfilled",
        e.value = a,
        xm(e),
        t.state = a,
        e = t.pending,
        e !== null && (a = e.next,
        a === e ? t.pending = null : (a = a.next,
        e.next = a,
        vm(t, a)))
    }
    function ku(t, e, a) {
        var l = t.pending;
        if (t.pending = null,
        l !== null) {
            l = l.next;
            do
                e.status = "rejected",
                e.reason = a,
                xm(e),
                e = e.next;
            while (e !== l)
        }
        t.action = null
    }
    function xm(t) {
        t = t.listeners;
        for (var e = 0; e < t.length; e++)
            (0,
            t[e])()
    }
    function Tm(t, e) {
        return e
    }
    function Am(t, e) {
        if (xt) {
            var a = Ot.formState;
            if (a !== null) {
                t: {
                    var l = dt;
                    if (xt) {
                        if (Nt) {
                            e: {
                                for (var u = Nt, f = Ue; u.nodeType !== 8; ) {
                                    if (!f) {
                                        u = null;
                                        break e
                                    }
                                    if (u = qe(u.nextSibling),
                                    u === null) {
                                        u = null;
                                        break e
                                    }
                                }
                                f = u.data,
                                u = f === "F!" || f === "F" ? u : null
                            }
                            if (u) {
                                Nt = qe(u.nextSibling),
                                l = u.data === "F!";
                                break t
                            }
                        }
                        Xn(l)
                    }
                    l = !1
                }
                l && (e = a[0])
            }
        }
        return a = ce(),
        a.memoizedState = a.baseState = e,
        l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Tm,
            lastRenderedState: e
        },
        a.queue = l,
        a = Ym.bind(null, dt, l),
        l.dispatch = a,
        l = Yu(!1),
        f = Fu.bind(null, dt, !1, l.queue),
        l = ce(),
        u = {
            state: e,
            dispatch: null,
            action: t,
            pending: null
        },
        l.queue = u,
        a = E3.bind(null, dt, u, f, a),
        u.dispatch = a,
        l.memoizedState = t,
        [e, a, !1]
    }
    function Em(t) {
        var e = Xt();
        return Cm(e, _t, t)
    }
    function Cm(t, e, a) {
        if (e = qu(t, e, Tm)[0],
        t = ao(En)[0],
        typeof e == "object" && e !== null && typeof e.then == "function")
            try {
                var l = Ds(e)
            } catch (g) {
                throw g === Sa ? Ql : g
            }
        else
            l = e;
        e = Xt();
        var u = e.queue
          , f = u.dispatch;
        return a !== e.memoizedState && (dt.flags |= 2048,
        Ea(9, {
            destroy: void 0
        }, C3.bind(null, u, a), null)),
        [l, f, t]
    }
    function C3(t, e) {
        t.action = e
    }
    function Mm(t) {
        var e = Xt()
          , a = _t;
        if (a !== null)
            return Cm(e, a, t);
        Xt(),
        e = e.memoizedState,
        a = Xt();
        var l = a.queue.dispatch;
        return a.memoizedState = t,
        [e, l, !1]
    }
    function Ea(t, e, a, l) {
        return t = {
            tag: t,
            create: a,
            deps: l,
            inst: e,
            next: null
        },
        e = dt.updateQueue,
        e === null && (e = no(),
        dt.updateQueue = e),
        a = e.lastEffect,
        a === null ? e.lastEffect = t.next = t : (l = a.next,
        a.next = t,
        t.next = l,
        e.lastEffect = t),
        t
    }
    function wm() {
        return Xt().memoizedState
    }
    function so(t, e, a, l) {
        var u = ce();
        dt.flags |= t,
        u.memoizedState = Ea(1 | e, {
            destroy: void 0
        }, a, l === void 0 ? null : l)
    }
    function lo(t, e, a, l) {
        var u = Xt();
        l = l === void 0 ? null : l;
        var f = u.memoizedState.inst;
        _t !== null && l !== null && ju(l, _t.memoizedState.deps) ? u.memoizedState = Ea(e, f, a, l) : (dt.flags |= t,
        u.memoizedState = Ea(1 | e, f, a, l))
    }
    function _m(t, e) {
        so(8390656, 8, t, e)
    }
    function Xu(t, e) {
        lo(2048, 8, t, e)
    }
    function M3(t) {
        dt.flags |= 4;
        var e = dt.updateQueue;
        if (e === null)
            e = no(),
            dt.updateQueue = e,
            e.events = [t];
        else {
            var a = e.events;
            a === null ? e.events = [t] : a.push(t)
        }
    }
    function Rm(t) {
        var e = Xt().memoizedState;
        return M3({
            ref: e,
            nextImpl: t
        }),
        function() {
            if ((Ct & 2) !== 0)
                throw Error(o(440));
            return e.impl.apply(void 0, arguments)
        }
    }
    function Dm(t, e) {
        return lo(4, 2, t, e)
    }
    function Om(t, e) {
        return lo(4, 4, t, e)
    }
    function zm(t, e) {
        if (typeof e == "function") {
            t = t();
            var a = e(t);
            return function() {
                typeof a == "function" ? a() : e(null)
            }
        }
        if (e != null)
            return t = t(),
            e.current = t,
            function() {
                e.current = null
            }
    }
    function Lm(t, e, a) {
        a = a != null ? a.concat([t]) : null,
        lo(4, 4, zm.bind(null, e, t), a)
    }
    function Pu() {}
    function jm(t, e) {
        var a = Xt();
        e = e === void 0 ? null : e;
        var l = a.memoizedState;
        return e !== null && ju(e, l[1]) ? l[0] : (a.memoizedState = [t, e],
        t)
    }
    function Nm(t, e) {
        var a = Xt();
        e = e === void 0 ? null : e;
        var l = a.memoizedState;
        if (e !== null && ju(e, l[1]))
            return l[0];
        if (l = t(),
        Vi) {
            Hn(!0);
            try {
                t()
            } finally {
                Hn(!1)
            }
        }
        return a.memoizedState = [l, e],
        l
    }
    function Ku(t, e, a) {
        return a === void 0 || (An & 1073741824) !== 0 && (St & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = a,
        t = V0(),
        dt.lanes |= t,
        $n |= t,
        a)
    }
    function Vm(t, e, a, l) {
        return Ae(a, e) ? a : xa.current !== null ? (t = Ku(t, a, l),
        Ae(t, e) || (Zt = !0),
        t) : (An & 42) === 0 || (An & 1073741824) !== 0 && (St & 261930) === 0 ? (Zt = !0,
        t.memoizedState = a) : (t = V0(),
        dt.lanes |= t,
        $n |= t,
        e)
    }
    function Bm(t, e, a, l, u) {
        var f = J.p;
        J.p = f !== 0 && 8 > f ? f : 8;
        var g = B.T
          , x = {};
        B.T = x,
        Fu(t, !1, e, a);
        try {
            var C = u()
              , j = B.S;
            if (j !== null && j(x, C),
            C !== null && typeof C == "object" && typeof C.then == "function") {
                var H = x3(C, l);
                Os(t, e, H, Re(t))
            } else
                Os(t, e, l, Re(t))
        } catch (X) {
            Os(t, e, {
                then: function() {},
                status: "rejected",
                reason: X
            }, Re())
        } finally {
            J.p = f,
            g !== null && x.types !== null && (g.types = x.types),
            B.T = g
        }
    }
    function w3() {}
    function Zu(t, e, a, l) {
        if (t.tag !== 5)
            throw Error(o(476));
        var u = Um(t).queue;
        Bm(t, u, e, $, a === null ? w3 : function() {
            return Hm(t),
            a(l)
        }
        )
    }
    function Um(t) {
        var e = t.memoizedState;
        if (e !== null)
            return e;
        e = {
            memoizedState: $,
            baseState: $,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: En,
                lastRenderedState: $
            },
            next: null
        };
        var a = {};
        return e.next = {
            memoizedState: a,
            baseState: a,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: En,
                lastRenderedState: a
            },
            next: null
        },
        t.memoizedState = e,
        t = t.alternate,
        t !== null && (t.memoizedState = e),
        e
    }
    function Hm(t) {
        var e = Um(t);
        e.next === null && (e = t.alternate.memoizedState),
        Os(t, e.next.queue, {}, Re())
    }
    function Qu() {
        return ae(Qs)
    }
    function qm() {
        return Xt().memoizedState
    }
    function Gm() {
        return Xt().memoizedState
    }
    function _3(t) {
        for (var e = t.return; e !== null; ) {
            switch (e.tag) {
            case 24:
            case 3:
                var a = Re();
                t = Zn(a);
                var l = Qn(e, t, a);
                l !== null && (Se(l, e, a),
                Ms(l, e, a)),
                e = {
                    cache: Au()
                },
                t.payload = e;
                return
            }
            e = e.return
        }
    }
    function R3(t, e, a) {
        var l = Re();
        a = {
            lane: l,
            revertLane: 0,
            gesture: null,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        oo(t) ? km(e, a) : (a = hu(t, e, a, l),
        a !== null && (Se(a, t, l),
        Xm(a, e, l)))
    }
    function Ym(t, e, a) {
        var l = Re();
        Os(t, e, a, l)
    }
    function Os(t, e, a, l) {
        var u = {
            lane: l,
            revertLane: 0,
            gesture: null,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (oo(t))
            km(e, u);
        else {
            var f = t.alternate;
            if (t.lanes === 0 && (f === null || f.lanes === 0) && (f = e.lastRenderedReducer,
            f !== null))
                try {
                    var g = e.lastRenderedState
                      , x = f(g, a);
                    if (u.hasEagerState = !0,
                    u.eagerState = x,
                    Ae(x, g))
                        return Gl(t, e, u, 0),
                        Ot === null && ql(),
                        !1
                } catch {} finally {}
            if (a = hu(t, e, u, l),
            a !== null)
                return Se(a, t, l),
                Xm(a, e, l),
                !0
        }
        return !1
    }
    function Fu(t, e, a, l) {
        if (l = {
            lane: 2,
            revertLane: wc(),
            gesture: null,
            action: l,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        oo(t)) {
            if (e)
                throw Error(o(479))
        } else
            e = hu(t, a, l, 2),
            e !== null && Se(e, t, 2)
    }
    function oo(t) {
        var e = t.alternate;
        return t === dt || e !== null && e === dt
    }
    function km(t, e) {
        Ta = to = !0;
        var a = t.pending;
        a === null ? e.next = e : (e.next = a.next,
        a.next = e),
        t.pending = e
    }
    function Xm(t, e, a) {
        if ((a & 4194048) !== 0) {
            var l = e.lanes;
            l &= t.pendingLanes,
            a |= l,
            e.lanes = a,
            Fh(t, a)
        }
    }
    var zs = {
        readContext: ae,
        use: io,
        useCallback: qt,
        useContext: qt,
        useEffect: qt,
        useImperativeHandle: qt,
        useLayoutEffect: qt,
        useInsertionEffect: qt,
        useMemo: qt,
        useReducer: qt,
        useRef: qt,
        useState: qt,
        useDebugValue: qt,
        useDeferredValue: qt,
        useTransition: qt,
        useSyncExternalStore: qt,
        useId: qt,
        useHostTransitionStatus: qt,
        useFormState: qt,
        useActionState: qt,
        useOptimistic: qt,
        useMemoCache: qt,
        useCacheRefresh: qt
    };
    zs.useEffectEvent = qt;
    var Pm = {
        readContext: ae,
        use: io,
        useCallback: function(t, e) {
            return ce().memoizedState = [t, e === void 0 ? null : e],
            t
        },
        useContext: ae,
        useEffect: _m,
        useImperativeHandle: function(t, e, a) {
            a = a != null ? a.concat([t]) : null,
            so(4194308, 4, zm.bind(null, e, t), a)
        },
        useLayoutEffect: function(t, e) {
            return so(4194308, 4, t, e)
        },
        useInsertionEffect: function(t, e) {
            so(4, 2, t, e)
        },
        useMemo: function(t, e) {
            var a = ce();
            e = e === void 0 ? null : e;
            var l = t();
            if (Vi) {
                Hn(!0);
                try {
                    t()
                } finally {
                    Hn(!1)
                }
            }
            return a.memoizedState = [l, e],
            l
        },
        useReducer: function(t, e, a) {
            var l = ce();
            if (a !== void 0) {
                var u = a(e);
                if (Vi) {
                    Hn(!0);
                    try {
                        a(e)
                    } finally {
                        Hn(!1)
                    }
                }
            } else
                u = e;
            return l.memoizedState = l.baseState = u,
            t = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: t,
                lastRenderedState: u
            },
            l.queue = t,
            t = t.dispatch = R3.bind(null, dt, t),
            [l.memoizedState, t]
        },
        useRef: function(t) {
            var e = ce();
            return t = {
                current: t
            },
            e.memoizedState = t
        },
        useState: function(t) {
            t = Yu(t);
            var e = t.queue
              , a = Ym.bind(null, dt, e);
            return e.dispatch = a,
            [t.memoizedState, a]
        },
        useDebugValue: Pu,
        useDeferredValue: function(t, e) {
            var a = ce();
            return Ku(a, t, e)
        },
        useTransition: function() {
            var t = Yu(!1);
            return t = Bm.bind(null, dt, t.queue, !0, !1),
            ce().memoizedState = t,
            [!1, t]
        },
        useSyncExternalStore: function(t, e, a) {
            var l = dt
              , u = ce();
            if (xt) {
                if (a === void 0)
                    throw Error(o(407));
                a = a()
            } else {
                if (a = e(),
                Ot === null)
                    throw Error(o(349));
                (St & 127) !== 0 || hm(l, e, a)
            }
            u.memoizedState = a;
            var f = {
                value: a,
                getSnapshot: e
            };
            return u.queue = f,
            _m(mm.bind(null, l, f, t), [t]),
            l.flags |= 2048,
            Ea(9, {
                destroy: void 0
            }, dm.bind(null, l, f, a, e), null),
            a
        },
        useId: function() {
            var t = ce()
              , e = Ot.identifierPrefix;
            if (xt) {
                var a = en
                  , l = tn;
                a = (l & ~(1 << 32 - Te(l) - 1)).toString(32) + a,
                e = "_" + e + "R_" + a,
                a = eo++,
                0 < a && (e += "H" + a.toString(32)),
                e += "_"
            } else
                a = T3++,
                e = "_" + e + "r_" + a.toString(32) + "_";
            return t.memoizedState = e
        },
        useHostTransitionStatus: Qu,
        useFormState: Am,
        useActionState: Am,
        useOptimistic: function(t) {
            var e = ce();
            e.memoizedState = e.baseState = t;
            var a = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return e.queue = a,
            e = Fu.bind(null, dt, !0, a),
            a.dispatch = e,
            [t, e]
        },
        useMemoCache: Hu,
        useCacheRefresh: function() {
            return ce().memoizedState = _3.bind(null, dt)
        },
        useEffectEvent: function(t) {
            var e = ce()
              , a = {
                impl: t
            };
            return e.memoizedState = a,
            function() {
                if ((Ct & 2) !== 0)
                    throw Error(o(440));
                return a.impl.apply(void 0, arguments)
            }
        }
    }
      , Ju = {
        readContext: ae,
        use: io,
        useCallback: jm,
        useContext: ae,
        useEffect: Xu,
        useImperativeHandle: Lm,
        useInsertionEffect: Dm,
        useLayoutEffect: Om,
        useMemo: Nm,
        useReducer: ao,
        useRef: wm,
        useState: function() {
            return ao(En)
        },
        useDebugValue: Pu,
        useDeferredValue: function(t, e) {
            var a = Xt();
            return Vm(a, _t.memoizedState, t, e)
        },
        useTransition: function() {
            var t = ao(En)[0]
              , e = Xt().memoizedState;
            return [typeof t == "boolean" ? t : Ds(t), e]
        },
        useSyncExternalStore: fm,
        useId: qm,
        useHostTransitionStatus: Qu,
        useFormState: Em,
        useActionState: Em,
        useOptimistic: function(t, e) {
            var a = Xt();
            return gm(a, _t, t, e)
        },
        useMemoCache: Hu,
        useCacheRefresh: Gm
    };
    Ju.useEffectEvent = Rm;
    var Km = {
        readContext: ae,
        use: io,
        useCallback: jm,
        useContext: ae,
        useEffect: Xu,
        useImperativeHandle: Lm,
        useInsertionEffect: Dm,
        useLayoutEffect: Om,
        useMemo: Nm,
        useReducer: Gu,
        useRef: wm,
        useState: function() {
            return Gu(En)
        },
        useDebugValue: Pu,
        useDeferredValue: function(t, e) {
            var a = Xt();
            return _t === null ? Ku(a, t, e) : Vm(a, _t.memoizedState, t, e)
        },
        useTransition: function() {
            var t = Gu(En)[0]
              , e = Xt().memoizedState;
            return [typeof t == "boolean" ? t : Ds(t), e]
        },
        useSyncExternalStore: fm,
        useId: qm,
        useHostTransitionStatus: Qu,
        useFormState: Mm,
        useActionState: Mm,
        useOptimistic: function(t, e) {
            var a = Xt();
            return _t !== null ? gm(a, _t, t, e) : (a.baseState = t,
            [t, a.queue.dispatch])
        },
        useMemoCache: Hu,
        useCacheRefresh: Gm
    };
    Km.useEffectEvent = Rm;
    function Wu(t, e, a, l) {
        e = t.memoizedState,
        a = a(l, e),
        a = a == null ? e : y({}, e, a),
        t.memoizedState = a,
        t.lanes === 0 && (t.updateQueue.baseState = a)
    }
    var Iu = {
        enqueueSetState: function(t, e, a) {
            t = t._reactInternals;
            var l = Re()
              , u = Zn(l);
            u.payload = e,
            a != null && (u.callback = a),
            e = Qn(t, u, l),
            e !== null && (Se(e, t, l),
            Ms(e, t, l))
        },
        enqueueReplaceState: function(t, e, a) {
            t = t._reactInternals;
            var l = Re()
              , u = Zn(l);
            u.tag = 1,
            u.payload = e,
            a != null && (u.callback = a),
            e = Qn(t, u, l),
            e !== null && (Se(e, t, l),
            Ms(e, t, l))
        },
        enqueueForceUpdate: function(t, e) {
            t = t._reactInternals;
            var a = Re()
              , l = Zn(a);
            l.tag = 2,
            e != null && (l.callback = e),
            e = Qn(t, l, a),
            e !== null && (Se(e, t, a),
            Ms(e, t, a))
        }
    };
    function Zm(t, e, a, l, u, f, g) {
        return t = t.stateNode,
        typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(l, f, g) : e.prototype && e.prototype.isPureReactComponent ? !vs(a, l) || !vs(u, f) : !0
    }
    function Qm(t, e, a, l) {
        t = e.state,
        typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(a, l),
        typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(a, l),
        e.state !== t && Iu.enqueueReplaceState(e, e.state, null)
    }
    function Bi(t, e) {
        var a = e;
        if ("ref" in e) {
            a = {};
            for (var l in e)
                l !== "ref" && (a[l] = e[l])
        }
        if (t = t.defaultProps) {
            a === e && (a = y({}, a));
            for (var u in t)
                a[u] === void 0 && (a[u] = t[u])
        }
        return a
    }
    function Fm(t) {
        Hl(t)
    }
    function Jm(t) {
        console.error(t)
    }
    function Wm(t) {
        Hl(t)
    }
    function ro(t, e) {
        try {
            var a = t.onUncaughtError;
            a(e.value, {
                componentStack: e.stack
            })
        } catch (l) {
            setTimeout(function() {
                throw l
            })
        }
    }
    function Im(t, e, a) {
        try {
            var l = t.onCaughtError;
            l(a.value, {
                componentStack: a.stack,
                errorBoundary: e.tag === 1 ? e.stateNode : null
            })
        } catch (u) {
            setTimeout(function() {
                throw u
            })
        }
    }
    function $u(t, e, a) {
        return a = Zn(a),
        a.tag = 3,
        a.payload = {
            element: null
        },
        a.callback = function() {
            ro(t, e)
        }
        ,
        a
    }
    function $m(t) {
        return t = Zn(t),
        t.tag = 3,
        t
    }
    function t0(t, e, a, l) {
        var u = a.type.getDerivedStateFromError;
        if (typeof u == "function") {
            var f = l.value;
            t.payload = function() {
                return u(f)
            }
            ,
            t.callback = function() {
                Im(e, a, l)
            }
        }
        var g = a.stateNode;
        g !== null && typeof g.componentDidCatch == "function" && (t.callback = function() {
            Im(e, a, l),
            typeof u != "function" && (ti === null ? ti = new Set([this]) : ti.add(this));
            var x = l.stack;
            this.componentDidCatch(l.value, {
                componentStack: x !== null ? x : ""
            })
        }
        )
    }
    function D3(t, e, a, l, u) {
        if (a.flags |= 32768,
        l !== null && typeof l == "object" && typeof l.then == "function") {
            if (e = a.alternate,
            e !== null && ya(e, a, u, !0),
            a = Ce.current,
            a !== null) {
                switch (a.tag) {
                case 31:
                case 13:
                    return He === null ? xo() : a.alternate === null && Gt === 0 && (Gt = 3),
                    a.flags &= -257,
                    a.flags |= 65536,
                    a.lanes = u,
                    l === Fl ? a.flags |= 16384 : (e = a.updateQueue,
                    e === null ? a.updateQueue = new Set([l]) : e.add(l),
                    Ec(t, l, u)),
                    !1;
                case 22:
                    return a.flags |= 65536,
                    l === Fl ? a.flags |= 16384 : (e = a.updateQueue,
                    e === null ? (e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l])
                    },
                    a.updateQueue = e) : (a = e.retryQueue,
                    a === null ? e.retryQueue = new Set([l]) : a.add(l)),
                    Ec(t, l, u)),
                    !1
                }
                throw Error(o(435, a.tag))
            }
            return Ec(t, l, u),
            xo(),
            !1
        }
        if (xt)
            return e = Ce.current,
            e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            e.flags |= 65536,
            e.lanes = u,
            l !== vu && (t = Error(o(422), {
                cause: l
            }),
            xs(Ne(t, a)))) : (l !== vu && (e = Error(o(423), {
                cause: l
            }),
            xs(Ne(e, a))),
            t = t.current.alternate,
            t.flags |= 65536,
            u &= -u,
            t.lanes |= u,
            l = Ne(l, a),
            u = $u(t.stateNode, l, u),
            Ru(t, u),
            Gt !== 4 && (Gt = 2)),
            !1;
        var f = Error(o(520), {
            cause: l
        });
        if (f = Ne(f, a),
        qs === null ? qs = [f] : qs.push(f),
        Gt !== 4 && (Gt = 2),
        e === null)
            return !0;
        l = Ne(l, a),
        a = e;
        do {
            switch (a.tag) {
            case 3:
                return a.flags |= 65536,
                t = u & -u,
                a.lanes |= t,
                t = $u(a.stateNode, l, t),
                Ru(a, t),
                !1;
            case 1:
                if (e = a.type,
                f = a.stateNode,
                (a.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (ti === null || !ti.has(f))))
                    return a.flags |= 65536,
                    u &= -u,
                    a.lanes |= u,
                    u = $m(u),
                    t0(u, t, a, l),
                    Ru(a, u),
                    !1
            }
            a = a.return
        } while (a !== null);
        return !1
    }
    var tc = Error(o(461))
      , Zt = !1;
    function se(t, e, a, l) {
        e.child = t === null ? am(e, null, a, l) : Ni(e, t.child, a, l)
    }
    function e0(t, e, a, l, u) {
        a = a.render;
        var f = e.ref;
        if ("ref" in l) {
            var g = {};
            for (var x in l)
                x !== "ref" && (g[x] = l[x])
        } else
            g = l;
        return Oi(e),
        l = Nu(t, e, a, g, f, u),
        x = Vu(),
        t !== null && !Zt ? (Bu(t, e, u),
        Cn(t, e, u)) : (xt && x && yu(e),
        e.flags |= 1,
        se(t, e, l, u),
        e.child)
    }
    function n0(t, e, a, l, u) {
        if (t === null) {
            var f = a.type;
            return typeof f == "function" && !du(f) && f.defaultProps === void 0 && a.compare === null ? (e.tag = 15,
            e.type = f,
            i0(t, e, f, l, u)) : (t = kl(a.type, null, l, e, e.mode, u),
            t.ref = e.ref,
            t.return = e,
            e.child = t)
        }
        if (f = t.child,
        !rc(t, u)) {
            var g = f.memoizedProps;
            if (a = a.compare,
            a = a !== null ? a : vs,
            a(g, l) && t.ref === e.ref)
                return Cn(t, e, u)
        }
        return e.flags |= 1,
        t = Sn(f, l),
        t.ref = e.ref,
        t.return = e,
        e.child = t
    }
    function i0(t, e, a, l, u) {
        if (t !== null) {
            var f = t.memoizedProps;
            if (vs(f, l) && t.ref === e.ref)
                if (Zt = !1,
                e.pendingProps = l = f,
                rc(t, u))
                    (t.flags & 131072) !== 0 && (Zt = !0);
                else
                    return e.lanes = t.lanes,
                    Cn(t, e, u)
        }
        return ec(t, e, a, l, u)
    }
    function a0(t, e, a, l) {
        var u = l.children
          , f = t !== null ? t.memoizedState : null;
        if (t === null && e.stateNode === null && (e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        l.mode === "hidden") {
            if ((e.flags & 128) !== 0) {
                if (f = f !== null ? f.baseLanes | a : a,
                t !== null) {
                    for (l = e.child = t.child,
                    u = 0; l !== null; )
                        u = u | l.lanes | l.childLanes,
                        l = l.sibling;
                    l = u & ~f
                } else
                    l = 0,
                    e.child = null;
                return s0(t, e, f, a, l)
            }
            if ((a & 536870912) !== 0)
                e.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                t !== null && Zl(e, f !== null ? f.cachePool : null),
                f !== null ? om(e, f) : Ou(),
                rm(e);
            else
                return l = e.lanes = 536870912,
                s0(t, e, f !== null ? f.baseLanes | a : a, a, l)
        } else
            f !== null ? (Zl(e, f.cachePool),
            om(e, f),
            Jn(),
            e.memoizedState = null) : (t !== null && Zl(e, null),
            Ou(),
            Jn());
        return se(t, e, u, a),
        e.child
    }
    function Ls(t, e) {
        return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        e.sibling
    }
    function s0(t, e, a, l, u) {
        var f = Cu();
        return f = f === null ? null : {
            parent: Pt._currentValue,
            pool: f
        },
        e.memoizedState = {
            baseLanes: a,
            cachePool: f
        },
        t !== null && Zl(e, null),
        Ou(),
        rm(e),
        t !== null && ya(t, e, l, !0),
        e.childLanes = u,
        null
    }
    function uo(t, e) {
        return e = fo({
            mode: e.mode,
            children: e.children
        }, t.mode),
        e.ref = t.ref,
        t.child = e,
        e.return = t,
        e
    }
    function l0(t, e, a) {
        return Ni(e, t.child, null, a),
        t = uo(e, e.pendingProps),
        t.flags |= 2,
        Me(e),
        e.memoizedState = null,
        t
    }
    function O3(t, e, a) {
        var l = e.pendingProps
          , u = (e.flags & 128) !== 0;
        if (e.flags &= -129,
        t === null) {
            if (xt) {
                if (l.mode === "hidden")
                    return t = uo(e, l),
                    e.lanes = 536870912,
                    Ls(null, t);
                if (Lu(e),
                (t = Nt) ? (t = vp(t, Ue),
                t = t !== null && t.data === "&" ? t : null,
                t !== null && (e.memoizedState = {
                    dehydrated: t,
                    treeContext: Yn !== null ? {
                        id: tn,
                        overflow: en
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                a = kd(t),
                a.return = e,
                e.child = a,
                ie = e,
                Nt = null)) : t = null,
                t === null)
                    throw Xn(e);
                return e.lanes = 536870912,
                null
            }
            return uo(e, l)
        }
        var f = t.memoizedState;
        if (f !== null) {
            var g = f.dehydrated;
            if (Lu(e),
            u)
                if (e.flags & 256)
                    e.flags &= -257,
                    e = l0(t, e, a);
                else if (e.memoizedState !== null)
                    e.child = t.child,
                    e.flags |= 128,
                    e = null;
                else
                    throw Error(o(558));
            else if (Zt || ya(t, e, a, !1),
            u = (a & t.childLanes) !== 0,
            Zt || u) {
                if (l = Ot,
                l !== null && (g = Jh(l, a),
                g !== 0 && g !== f.retryLane))
                    throw f.retryLane = g,
                    wi(t, g),
                    Se(l, t, g),
                    tc;
                xo(),
                e = l0(t, e, a)
            } else
                t = f.treeContext,
                Nt = qe(g.nextSibling),
                ie = e,
                xt = !0,
                kn = null,
                Ue = !1,
                t !== null && Kd(e, t),
                e = uo(e, l),
                e.flags |= 4096;
            return e
        }
        return t = Sn(t.child, {
            mode: l.mode,
            children: l.children
        }),
        t.ref = e.ref,
        e.child = t,
        t.return = e,
        t
    }
    function co(t, e) {
        var a = e.ref;
        if (a === null)
            t !== null && t.ref !== null && (e.flags |= 4194816);
        else {
            if (typeof a != "function" && typeof a != "object")
                throw Error(o(284));
            (t === null || t.ref !== a) && (e.flags |= 4194816)
        }
    }
    function ec(t, e, a, l, u) {
        return Oi(e),
        a = Nu(t, e, a, l, void 0, u),
        l = Vu(),
        t !== null && !Zt ? (Bu(t, e, u),
        Cn(t, e, u)) : (xt && l && yu(e),
        e.flags |= 1,
        se(t, e, a, u),
        e.child)
    }
    function o0(t, e, a, l, u, f) {
        return Oi(e),
        e.updateQueue = null,
        a = cm(e, l, a, u),
        um(t),
        l = Vu(),
        t !== null && !Zt ? (Bu(t, e, f),
        Cn(t, e, f)) : (xt && l && yu(e),
        e.flags |= 1,
        se(t, e, a, f),
        e.child)
    }
    function r0(t, e, a, l, u) {
        if (Oi(e),
        e.stateNode === null) {
            var f = ha
              , g = a.contextType;
            typeof g == "object" && g !== null && (f = ae(g)),
            f = new a(l,f),
            e.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null,
            f.updater = Iu,
            e.stateNode = f,
            f._reactInternals = e,
            f = e.stateNode,
            f.props = l,
            f.state = e.memoizedState,
            f.refs = {},
            wu(e),
            g = a.contextType,
            f.context = typeof g == "object" && g !== null ? ae(g) : ha,
            f.state = e.memoizedState,
            g = a.getDerivedStateFromProps,
            typeof g == "function" && (Wu(e, a, g, l),
            f.state = e.memoizedState),
            typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (g = f.state,
            typeof f.componentWillMount == "function" && f.componentWillMount(),
            typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(),
            g !== f.state && Iu.enqueueReplaceState(f, f.state, null),
            _s(e, l, f, u),
            ws(),
            f.state = e.memoizedState),
            typeof f.componentDidMount == "function" && (e.flags |= 4194308),
            l = !0
        } else if (t === null) {
            f = e.stateNode;
            var x = e.memoizedProps
              , C = Bi(a, x);
            f.props = C;
            var j = f.context
              , H = a.contextType;
            g = ha,
            typeof H == "object" && H !== null && (g = ae(H));
            var X = a.getDerivedStateFromProps;
            H = typeof X == "function" || typeof f.getSnapshotBeforeUpdate == "function",
            x = e.pendingProps !== x,
            H || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (x || j !== g) && Qm(e, f, l, g),
            Kn = !1;
            var N = e.memoizedState;
            f.state = N,
            _s(e, l, f, u),
            ws(),
            j = e.memoizedState,
            x || N !== j || Kn ? (typeof X == "function" && (Wu(e, a, X, l),
            j = e.memoizedState),
            (C = Kn || Zm(e, a, C, l, N, j, g)) ? (H || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(),
            typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()),
            typeof f.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (e.flags |= 4194308),
            e.memoizedProps = l,
            e.memoizedState = j),
            f.props = l,
            f.state = j,
            f.context = g,
            l = C) : (typeof f.componentDidMount == "function" && (e.flags |= 4194308),
            l = !1)
        } else {
            f = e.stateNode,
            _u(t, e),
            g = e.memoizedProps,
            H = Bi(a, g),
            f.props = H,
            X = e.pendingProps,
            N = f.context,
            j = a.contextType,
            C = ha,
            typeof j == "object" && j !== null && (C = ae(j)),
            x = a.getDerivedStateFromProps,
            (j = typeof x == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (g !== X || N !== C) && Qm(e, f, l, C),
            Kn = !1,
            N = e.memoizedState,
            f.state = N,
            _s(e, l, f, u),
            ws();
            var U = e.memoizedState;
            g !== X || N !== U || Kn || t !== null && t.dependencies !== null && Pl(t.dependencies) ? (typeof x == "function" && (Wu(e, a, x, l),
            U = e.memoizedState),
            (H = Kn || Zm(e, a, H, l, N, U, C) || t !== null && t.dependencies !== null && Pl(t.dependencies)) ? (j || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(l, U, C),
            typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(l, U, C)),
            typeof f.componentDidUpdate == "function" && (e.flags |= 4),
            typeof f.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || g === t.memoizedProps && N === t.memoizedState || (e.flags |= 4),
            typeof f.getSnapshotBeforeUpdate != "function" || g === t.memoizedProps && N === t.memoizedState || (e.flags |= 1024),
            e.memoizedProps = l,
            e.memoizedState = U),
            f.props = l,
            f.state = U,
            f.context = C,
            l = H) : (typeof f.componentDidUpdate != "function" || g === t.memoizedProps && N === t.memoizedState || (e.flags |= 4),
            typeof f.getSnapshotBeforeUpdate != "function" || g === t.memoizedProps && N === t.memoizedState || (e.flags |= 1024),
            l = !1)
        }
        return f = l,
        co(t, e),
        l = (e.flags & 128) !== 0,
        f || l ? (f = e.stateNode,
        a = l && typeof a.getDerivedStateFromError != "function" ? null : f.render(),
        e.flags |= 1,
        t !== null && l ? (e.child = Ni(e, t.child, null, u),
        e.child = Ni(e, null, a, u)) : se(t, e, a, u),
        e.memoizedState = f.state,
        t = e.child) : t = Cn(t, e, u),
        t
    }
    function u0(t, e, a, l) {
        return Ri(),
        e.flags |= 256,
        se(t, e, a, l),
        e.child
    }
    var nc = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function ic(t) {
        return {
            baseLanes: t,
            cachePool: Id()
        }
    }
    function ac(t, e, a) {
        return t = t !== null ? t.childLanes & ~a : 0,
        e && (t |= _e),
        t
    }
    function c0(t, e, a) {
        var l = e.pendingProps, u = !1, f = (e.flags & 128) !== 0, g;
        if ((g = f) || (g = t !== null && t.memoizedState === null ? !1 : (kt.current & 2) !== 0),
        g && (u = !0,
        e.flags &= -129),
        g = (e.flags & 32) !== 0,
        e.flags &= -33,
        t === null) {
            if (xt) {
                if (u ? Fn(e) : Jn(),
                (t = Nt) ? (t = vp(t, Ue),
                t = t !== null && t.data !== "&" ? t : null,
                t !== null && (e.memoizedState = {
                    dehydrated: t,
                    treeContext: Yn !== null ? {
                        id: tn,
                        overflow: en
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                a = kd(t),
                a.return = e,
                e.child = a,
                ie = e,
                Nt = null)) : t = null,
                t === null)
                    throw Xn(e);
                return qc(t) ? e.lanes = 32 : e.lanes = 536870912,
                null
            }
            var x = l.children;
            return l = l.fallback,
            u ? (Jn(),
            u = e.mode,
            x = fo({
                mode: "hidden",
                children: x
            }, u),
            l = _i(l, u, a, null),
            x.return = e,
            l.return = e,
            x.sibling = l,
            e.child = x,
            l = e.child,
            l.memoizedState = ic(a),
            l.childLanes = ac(t, g, a),
            e.memoizedState = nc,
            Ls(null, l)) : (Fn(e),
            sc(e, x))
        }
        var C = t.memoizedState;
        if (C !== null && (x = C.dehydrated,
        x !== null)) {
            if (f)
                e.flags & 256 ? (Fn(e),
                e.flags &= -257,
                e = lc(t, e, a)) : e.memoizedState !== null ? (Jn(),
                e.child = t.child,
                e.flags |= 128,
                e = null) : (Jn(),
                x = l.fallback,
                u = e.mode,
                l = fo({
                    mode: "visible",
                    children: l.children
                }, u),
                x = _i(x, u, a, null),
                x.flags |= 2,
                l.return = e,
                x.return = e,
                l.sibling = x,
                e.child = l,
                Ni(e, t.child, null, a),
                l = e.child,
                l.memoizedState = ic(a),
                l.childLanes = ac(t, g, a),
                e.memoizedState = nc,
                e = Ls(null, l));
            else if (Fn(e),
            qc(x)) {
                if (g = x.nextSibling && x.nextSibling.dataset,
                g)
                    var j = g.dgst;
                g = j,
                l = Error(o(419)),
                l.stack = "",
                l.digest = g,
                xs({
                    value: l,
                    source: null,
                    stack: null
                }),
                e = lc(t, e, a)
            } else if (Zt || ya(t, e, a, !1),
            g = (a & t.childLanes) !== 0,
            Zt || g) {
                if (g = Ot,
                g !== null && (l = Jh(g, a),
                l !== 0 && l !== C.retryLane))
                    throw C.retryLane = l,
                    wi(t, l),
                    Se(g, t, l),
                    tc;
                Hc(x) || xo(),
                e = lc(t, e, a)
            } else
                Hc(x) ? (e.flags |= 192,
                e.child = t.child,
                e = null) : (t = C.treeContext,
                Nt = qe(x.nextSibling),
                ie = e,
                xt = !0,
                kn = null,
                Ue = !1,
                t !== null && Kd(e, t),
                e = sc(e, l.children),
                e.flags |= 4096);
            return e
        }
        return u ? (Jn(),
        x = l.fallback,
        u = e.mode,
        C = t.child,
        j = C.sibling,
        l = Sn(C, {
            mode: "hidden",
            children: l.children
        }),
        l.subtreeFlags = C.subtreeFlags & 65011712,
        j !== null ? x = Sn(j, x) : (x = _i(x, u, a, null),
        x.flags |= 2),
        x.return = e,
        l.return = e,
        l.sibling = x,
        e.child = l,
        Ls(null, l),
        l = e.child,
        x = t.child.memoizedState,
        x === null ? x = ic(a) : (u = x.cachePool,
        u !== null ? (C = Pt._currentValue,
        u = u.parent !== C ? {
            parent: C,
            pool: C
        } : u) : u = Id(),
        x = {
            baseLanes: x.baseLanes | a,
            cachePool: u
        }),
        l.memoizedState = x,
        l.childLanes = ac(t, g, a),
        e.memoizedState = nc,
        Ls(t.child, l)) : (Fn(e),
        a = t.child,
        t = a.sibling,
        a = Sn(a, {
            mode: "visible",
            children: l.children
        }),
        a.return = e,
        a.sibling = null,
        t !== null && (g = e.deletions,
        g === null ? (e.deletions = [t],
        e.flags |= 16) : g.push(t)),
        e.child = a,
        e.memoizedState = null,
        a)
    }
    function sc(t, e) {
        return e = fo({
            mode: "visible",
            children: e
        }, t.mode),
        e.return = t,
        t.child = e
    }
    function fo(t, e) {
        return t = Ee(22, t, null, e),
        t.lanes = 0,
        t
    }
    function lc(t, e, a) {
        return Ni(e, t.child, null, a),
        t = sc(e, e.pendingProps.children),
        t.flags |= 2,
        e.memoizedState = null,
        t
    }
    function f0(t, e, a) {
        t.lanes |= e;
        var l = t.alternate;
        l !== null && (l.lanes |= e),
        xu(t.return, e, a)
    }
    function oc(t, e, a, l, u, f) {
        var g = t.memoizedState;
        g === null ? t.memoizedState = {
            isBackwards: e,
            rendering: null,
            renderingStartTime: 0,
            last: l,
            tail: a,
            tailMode: u,
            treeForkCount: f
        } : (g.isBackwards = e,
        g.rendering = null,
        g.renderingStartTime = 0,
        g.last = l,
        g.tail = a,
        g.tailMode = u,
        g.treeForkCount = f)
    }
    function h0(t, e, a) {
        var l = e.pendingProps
          , u = l.revealOrder
          , f = l.tail;
        l = l.children;
        var g = kt.current
          , x = (g & 2) !== 0;
        if (x ? (g = g & 1 | 2,
        e.flags |= 128) : g &= 1,
        I(kt, g),
        se(t, e, l, a),
        l = xt ? bs : 0,
        !x && t !== null && (t.flags & 128) !== 0)
            t: for (t = e.child; t !== null; ) {
                if (t.tag === 13)
                    t.memoizedState !== null && f0(t, a, e);
                else if (t.tag === 19)
                    f0(t, a, e);
                else if (t.child !== null) {
                    t.child.return = t,
                    t = t.child;
                    continue
                }
                if (t === e)
                    break t;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e)
                        break t;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        switch (u) {
        case "forwards":
            for (a = e.child,
            u = null; a !== null; )
                t = a.alternate,
                t !== null && $l(t) === null && (u = a),
                a = a.sibling;
            a = u,
            a === null ? (u = e.child,
            e.child = null) : (u = a.sibling,
            a.sibling = null),
            oc(e, !1, u, a, f, l);
            break;
        case "backwards":
        case "unstable_legacy-backwards":
            for (a = null,
            u = e.child,
            e.child = null; u !== null; ) {
                if (t = u.alternate,
                t !== null && $l(t) === null) {
                    e.child = u;
                    break
                }
                t = u.sibling,
                u.sibling = a,
                a = u,
                u = t
            }
            oc(e, !0, a, null, f, l);
            break;
        case "together":
            oc(e, !1, null, null, void 0, l);
            break;
        default:
            e.memoizedState = null
        }
        return e.child
    }
    function Cn(t, e, a) {
        if (t !== null && (e.dependencies = t.dependencies),
        $n |= e.lanes,
        (a & e.childLanes) === 0)
            if (t !== null) {
                if (ya(t, e, a, !1),
                (a & e.childLanes) === 0)
                    return null
            } else
                return null;
        if (t !== null && e.child !== t.child)
            throw Error(o(153));
        if (e.child !== null) {
            for (t = e.child,
            a = Sn(t, t.pendingProps),
            e.child = a,
            a.return = e; t.sibling !== null; )
                t = t.sibling,
                a = a.sibling = Sn(t, t.pendingProps),
                a.return = e;
            a.sibling = null
        }
        return e.child
    }
    function rc(t, e) {
        return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies,
        !!(t !== null && Pl(t)))
    }
    function z3(t, e, a) {
        switch (e.tag) {
        case 3:
            ee(e, e.stateNode.containerInfo),
            Pn(e, Pt, t.memoizedState.cache),
            Ri();
            break;
        case 27:
        case 5:
            hn(e);
            break;
        case 4:
            ee(e, e.stateNode.containerInfo);
            break;
        case 10:
            Pn(e, e.type, e.memoizedProps.value);
            break;
        case 31:
            if (e.memoizedState !== null)
                return e.flags |= 128,
                Lu(e),
                null;
            break;
        case 13:
            var l = e.memoizedState;
            if (l !== null)
                return l.dehydrated !== null ? (Fn(e),
                e.flags |= 128,
                null) : (a & e.child.childLanes) !== 0 ? c0(t, e, a) : (Fn(e),
                t = Cn(t, e, a),
                t !== null ? t.sibling : null);
            Fn(e);
            break;
        case 19:
            var u = (t.flags & 128) !== 0;
            if (l = (a & e.childLanes) !== 0,
            l || (ya(t, e, a, !1),
            l = (a & e.childLanes) !== 0),
            u) {
                if (l)
                    return h0(t, e, a);
                e.flags |= 128
            }
            if (u = e.memoizedState,
            u !== null && (u.rendering = null,
            u.tail = null,
            u.lastEffect = null),
            I(kt, kt.current),
            l)
                break;
            return null;
        case 22:
            return e.lanes = 0,
            a0(t, e, a, e.pendingProps);
        case 24:
            Pn(e, Pt, t.memoizedState.cache)
        }
        return Cn(t, e, a)
    }
    function d0(t, e, a) {
        if (t !== null)
            if (t.memoizedProps !== e.pendingProps)
                Zt = !0;
            else {
                if (!rc(t, a) && (e.flags & 128) === 0)
                    return Zt = !1,
                    z3(t, e, a);
                Zt = (t.flags & 131072) !== 0
            }
        else
            Zt = !1,
            xt && (e.flags & 1048576) !== 0 && Pd(e, bs, e.index);
        switch (e.lanes = 0,
        e.tag) {
        case 16:
            t: {
                var l = e.pendingProps;
                if (t = Li(e.elementType),
                e.type = t,
                typeof t == "function")
                    du(t) ? (l = Bi(t, l),
                    e.tag = 1,
                    e = r0(null, e, t, l, a)) : (e.tag = 0,
                    e = ec(null, e, t, l, a));
                else {
                    if (t != null) {
                        var u = t.$$typeof;
                        if (u === V) {
                            e.tag = 11,
                            e = e0(null, e, t, l, a);
                            break t
                        } else if (u === q) {
                            e.tag = 14,
                            e = n0(null, e, t, l, a);
                            break t
                        }
                    }
                    throw e = rt(t) || t,
                    Error(o(306, e, ""))
                }
            }
            return e;
        case 0:
            return ec(t, e, e.type, e.pendingProps, a);
        case 1:
            return l = e.type,
            u = Bi(l, e.pendingProps),
            r0(t, e, l, u, a);
        case 3:
            t: {
                if (ee(e, e.stateNode.containerInfo),
                t === null)
                    throw Error(o(387));
                l = e.pendingProps;
                var f = e.memoizedState;
                u = f.element,
                _u(t, e),
                _s(e, l, null, a);
                var g = e.memoizedState;
                if (l = g.cache,
                Pn(e, Pt, l),
                l !== f.cache && Tu(e, [Pt], a, !0),
                ws(),
                l = g.element,
                f.isDehydrated)
                    if (f = {
                        element: l,
                        isDehydrated: !1,
                        cache: g.cache
                    },
                    e.updateQueue.baseState = f,
                    e.memoizedState = f,
                    e.flags & 256) {
                        e = u0(t, e, l, a);
                        break t
                    } else if (l !== u) {
                        u = Ne(Error(o(424)), e),
                        xs(u),
                        e = u0(t, e, l, a);
                        break t
                    } else {
                        switch (t = e.stateNode.containerInfo,
                        t.nodeType) {
                        case 9:
                            t = t.body;
                            break;
                        default:
                            t = t.nodeName === "HTML" ? t.ownerDocument.body : t
                        }
                        for (Nt = qe(t.firstChild),
                        ie = e,
                        xt = !0,
                        kn = null,
                        Ue = !0,
                        a = am(e, null, l, a),
                        e.child = a; a; )
                            a.flags = a.flags & -3 | 4096,
                            a = a.sibling
                    }
                else {
                    if (Ri(),
                    l === u) {
                        e = Cn(t, e, a);
                        break t
                    }
                    se(t, e, l, a)
                }
                e = e.child
            }
            return e;
        case 26:
            return co(t, e),
            t === null ? (a = Ep(e.type, null, e.pendingProps, null)) ? e.memoizedState = a : xt || (a = e.type,
            t = e.pendingProps,
            l = _o(ft.current).createElement(a),
            l[ne] = e,
            l[de] = t,
            le(l, a, t),
            $t(l),
            e.stateNode = l) : e.memoizedState = Ep(e.type, t.memoizedProps, e.pendingProps, t.memoizedState),
            null;
        case 27:
            return hn(e),
            t === null && xt && (l = e.stateNode = xp(e.type, e.pendingProps, ft.current),
            ie = e,
            Ue = !0,
            u = Nt,
            ai(e.type) ? (Gc = u,
            Nt = qe(l.firstChild)) : Nt = u),
            se(t, e, e.pendingProps.children, a),
            co(t, e),
            t === null && (e.flags |= 4194304),
            e.child;
        case 5:
            return t === null && xt && ((u = l = Nt) && (l = rS(l, e.type, e.pendingProps, Ue),
            l !== null ? (e.stateNode = l,
            ie = e,
            Nt = qe(l.firstChild),
            Ue = !1,
            u = !0) : u = !1),
            u || Xn(e)),
            hn(e),
            u = e.type,
            f = e.pendingProps,
            g = t !== null ? t.memoizedProps : null,
            l = f.children,
            Vc(u, f) ? l = null : g !== null && Vc(u, g) && (e.flags |= 32),
            e.memoizedState !== null && (u = Nu(t, e, A3, null, null, a),
            Qs._currentValue = u),
            co(t, e),
            se(t, e, l, a),
            e.child;
        case 6:
            return t === null && xt && ((t = a = Nt) && (a = uS(a, e.pendingProps, Ue),
            a !== null ? (e.stateNode = a,
            ie = e,
            Nt = null,
            t = !0) : t = !1),
            t || Xn(e)),
            null;
        case 13:
            return c0(t, e, a);
        case 4:
            return ee(e, e.stateNode.containerInfo),
            l = e.pendingProps,
            t === null ? e.child = Ni(e, null, l, a) : se(t, e, l, a),
            e.child;
        case 11:
            return e0(t, e, e.type, e.pendingProps, a);
        case 7:
            return se(t, e, e.pendingProps, a),
            e.child;
        case 8:
            return se(t, e, e.pendingProps.children, a),
            e.child;
        case 12:
            return se(t, e, e.pendingProps.children, a),
            e.child;
        case 10:
            return l = e.pendingProps,
            Pn(e, e.type, l.value),
            se(t, e, l.children, a),
            e.child;
        case 9:
            return u = e.type._context,
            l = e.pendingProps.children,
            Oi(e),
            u = ae(u),
            l = l(u),
            e.flags |= 1,
            se(t, e, l, a),
            e.child;
        case 14:
            return n0(t, e, e.type, e.pendingProps, a);
        case 15:
            return i0(t, e, e.type, e.pendingProps, a);
        case 19:
            return h0(t, e, a);
        case 31:
            return O3(t, e, a);
        case 22:
            return a0(t, e, a, e.pendingProps);
        case 24:
            return Oi(e),
            l = ae(Pt),
            t === null ? (u = Cu(),
            u === null && (u = Ot,
            f = Au(),
            u.pooledCache = f,
            f.refCount++,
            f !== null && (u.pooledCacheLanes |= a),
            u = f),
            e.memoizedState = {
                parent: l,
                cache: u
            },
            wu(e),
            Pn(e, Pt, u)) : ((t.lanes & a) !== 0 && (_u(t, e),
            _s(e, null, null, a),
            ws()),
            u = t.memoizedState,
            f = e.memoizedState,
            u.parent !== l ? (u = {
                parent: l,
                cache: l
            },
            e.memoizedState = u,
            e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = u),
            Pn(e, Pt, l)) : (l = f.cache,
            Pn(e, Pt, l),
            l !== u.cache && Tu(e, [Pt], a, !0))),
            se(t, e, e.pendingProps.children, a),
            e.child;
        case 29:
            throw e.pendingProps
        }
        throw Error(o(156, e.tag))
    }
    function Mn(t) {
        t.flags |= 4
    }
    function uc(t, e, a, l, u) {
        if ((e = (t.mode & 32) !== 0) && (e = !1),
        e) {
            if (t.flags |= 16777216,
            (u & 335544128) === u)
                if (t.stateNode.complete)
                    t.flags |= 8192;
                else if (q0())
                    t.flags |= 8192;
                else
                    throw ji = Fl,
                    Mu
        } else
            t.flags &= -16777217
    }
    function m0(t, e) {
        if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
            t.flags &= -16777217;
        else if (t.flags |= 16777216,
        !Rp(e))
            if (q0())
                t.flags |= 8192;
            else
                throw ji = Fl,
                Mu
    }
    function ho(t, e) {
        e !== null && (t.flags |= 4),
        t.flags & 16384 && (e = t.tag !== 22 ? Zh() : 536870912,
        t.lanes |= e,
        _a |= e)
    }
    function js(t, e) {
        if (!xt)
            switch (t.tailMode) {
            case "hidden":
                e = t.tail;
                for (var a = null; e !== null; )
                    e.alternate !== null && (a = e),
                    e = e.sibling;
                a === null ? t.tail = null : a.sibling = null;
                break;
            case "collapsed":
                a = t.tail;
                for (var l = null; a !== null; )
                    a.alternate !== null && (l = a),
                    a = a.sibling;
                l === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : l.sibling = null
            }
    }
    function Vt(t) {
        var e = t.alternate !== null && t.alternate.child === t.child
          , a = 0
          , l = 0;
        if (e)
            for (var u = t.child; u !== null; )
                a |= u.lanes | u.childLanes,
                l |= u.subtreeFlags & 65011712,
                l |= u.flags & 65011712,
                u.return = t,
                u = u.sibling;
        else
            for (u = t.child; u !== null; )
                a |= u.lanes | u.childLanes,
                l |= u.subtreeFlags,
                l |= u.flags,
                u.return = t,
                u = u.sibling;
        return t.subtreeFlags |= l,
        t.childLanes = a,
        e
    }
    function L3(t, e, a) {
        var l = e.pendingProps;
        switch (gu(e),
        e.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Vt(e),
            null;
        case 1:
            return Vt(e),
            null;
        case 3:
            return a = e.stateNode,
            l = null,
            t !== null && (l = t.memoizedState.cache),
            e.memoizedState.cache !== l && (e.flags |= 2048),
            Tn(Pt),
            jt(),
            a.pendingContext && (a.context = a.pendingContext,
            a.pendingContext = null),
            (t === null || t.child === null) && (pa(e) ? Mn(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024,
            Su())),
            Vt(e),
            null;
        case 26:
            var u = e.type
              , f = e.memoizedState;
            return t === null ? (Mn(e),
            f !== null ? (Vt(e),
            m0(e, f)) : (Vt(e),
            uc(e, u, null, l, a))) : f ? f !== t.memoizedState ? (Mn(e),
            Vt(e),
            m0(e, f)) : (Vt(e),
            e.flags &= -16777217) : (t = t.memoizedProps,
            t !== l && Mn(e),
            Vt(e),
            uc(e, u, t, l, a)),
            null;
        case 27:
            if (dn(e),
            a = ft.current,
            u = e.type,
            t !== null && e.stateNode != null)
                t.memoizedProps !== l && Mn(e);
            else {
                if (!l) {
                    if (e.stateNode === null)
                        throw Error(o(166));
                    return Vt(e),
                    null
                }
                t = nt.current,
                pa(e) ? Zd(e) : (t = xp(u, l, a),
                e.stateNode = t,
                Mn(e))
            }
            return Vt(e),
            null;
        case 5:
            if (dn(e),
            u = e.type,
            t !== null && e.stateNode != null)
                t.memoizedProps !== l && Mn(e);
            else {
                if (!l) {
                    if (e.stateNode === null)
                        throw Error(o(166));
                    return Vt(e),
                    null
                }
                if (f = nt.current,
                pa(e))
                    Zd(e);
                else {
                    var g = _o(ft.current);
                    switch (f) {
                    case 1:
                        f = g.createElementNS("http://www.w3.org/2000/svg", u);
                        break;
                    case 2:
                        f = g.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                        break;
                    default:
                        switch (u) {
                        case "svg":
                            f = g.createElementNS("http://www.w3.org/2000/svg", u);
                            break;
                        case "math":
                            f = g.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                            break;
                        case "script":
                            f = g.createElement("div"),
                            f.innerHTML = "<script><\/script>",
                            f = f.removeChild(f.firstChild);
                            break;
                        case "select":
                            f = typeof l.is == "string" ? g.createElement("select", {
                                is: l.is
                            }) : g.createElement("select"),
                            l.multiple ? f.multiple = !0 : l.size && (f.size = l.size);
                            break;
                        default:
                            f = typeof l.is == "string" ? g.createElement(u, {
                                is: l.is
                            }) : g.createElement(u)
                        }
                    }
                    f[ne] = e,
                    f[de] = l;
                    t: for (g = e.child; g !== null; ) {
                        if (g.tag === 5 || g.tag === 6)
                            f.appendChild(g.stateNode);
                        else if (g.tag !== 4 && g.tag !== 27 && g.child !== null) {
                            g.child.return = g,
                            g = g.child;
                            continue
                        }
                        if (g === e)
                            break t;
                        for (; g.sibling === null; ) {
                            if (g.return === null || g.return === e)
                                break t;
                            g = g.return
                        }
                        g.sibling.return = g.return,
                        g = g.sibling
                    }
                    e.stateNode = f;
                    t: switch (le(f, u, l),
                    u) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        l = !!l.autoFocus;
                        break t;
                    case "img":
                        l = !0;
                        break t;
                    default:
                        l = !1
                    }
                    l && Mn(e)
                }
            }
            return Vt(e),
            uc(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, a),
            null;
        case 6:
            if (t && e.stateNode != null)
                t.memoizedProps !== l && Mn(e);
            else {
                if (typeof l != "string" && e.stateNode === null)
                    throw Error(o(166));
                if (t = ft.current,
                pa(e)) {
                    if (t = e.stateNode,
                    a = e.memoizedProps,
                    l = null,
                    u = ie,
                    u !== null)
                        switch (u.tag) {
                        case 27:
                        case 5:
                            l = u.memoizedProps
                        }
                    t[ne] = e,
                    t = !!(t.nodeValue === a || l !== null && l.suppressHydrationWarning === !0 || cp(t.nodeValue, a)),
                    t || Xn(e, !0)
                } else
                    t = _o(t).createTextNode(l),
                    t[ne] = e,
                    e.stateNode = t
            }
            return Vt(e),
            null;
        case 31:
            if (a = e.memoizedState,
            t === null || t.memoizedState !== null) {
                if (l = pa(e),
                a !== null) {
                    if (t === null) {
                        if (!l)
                            throw Error(o(318));
                        if (t = e.memoizedState,
                        t = t !== null ? t.dehydrated : null,
                        !t)
                            throw Error(o(557));
                        t[ne] = e
                    } else
                        Ri(),
                        (e.flags & 128) === 0 && (e.memoizedState = null),
                        e.flags |= 4;
                    Vt(e),
                    t = !1
                } else
                    a = Su(),
                    t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a),
                    t = !0;
                if (!t)
                    return e.flags & 256 ? (Me(e),
                    e) : (Me(e),
                    null);
                if ((e.flags & 128) !== 0)
                    throw Error(o(558))
            }
            return Vt(e),
            null;
        case 13:
            if (l = e.memoizedState,
            t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
                if (u = pa(e),
                l !== null && l.dehydrated !== null) {
                    if (t === null) {
                        if (!u)
                            throw Error(o(318));
                        if (u = e.memoizedState,
                        u = u !== null ? u.dehydrated : null,
                        !u)
                            throw Error(o(317));
                        u[ne] = e
                    } else
                        Ri(),
                        (e.flags & 128) === 0 && (e.memoizedState = null),
                        e.flags |= 4;
                    Vt(e),
                    u = !1
                } else
                    u = Su(),
                    t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = u),
                    u = !0;
                if (!u)
                    return e.flags & 256 ? (Me(e),
                    e) : (Me(e),
                    null)
            }
            return Me(e),
            (e.flags & 128) !== 0 ? (e.lanes = a,
            e) : (a = l !== null,
            t = t !== null && t.memoizedState !== null,
            a && (l = e.child,
            u = null,
            l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (u = l.alternate.memoizedState.cachePool.pool),
            f = null,
            l.memoizedState !== null && l.memoizedState.cachePool !== null && (f = l.memoizedState.cachePool.pool),
            f !== u && (l.flags |= 2048)),
            a !== t && a && (e.child.flags |= 8192),
            ho(e, e.updateQueue),
            Vt(e),
            null);
        case 4:
            return jt(),
            t === null && Oc(e.stateNode.containerInfo),
            Vt(e),
            null;
        case 10:
            return Tn(e.type),
            Vt(e),
            null;
        case 19:
            if (k(kt),
            l = e.memoizedState,
            l === null)
                return Vt(e),
                null;
            if (u = (e.flags & 128) !== 0,
            f = l.rendering,
            f === null)
                if (u)
                    js(l, !1);
                else {
                    if (Gt !== 0 || t !== null && (t.flags & 128) !== 0)
                        for (t = e.child; t !== null; ) {
                            if (f = $l(t),
                            f !== null) {
                                for (e.flags |= 128,
                                js(l, !1),
                                t = f.updateQueue,
                                e.updateQueue = t,
                                ho(e, t),
                                e.subtreeFlags = 0,
                                t = a,
                                a = e.child; a !== null; )
                                    Yd(a, t),
                                    a = a.sibling;
                                return I(kt, kt.current & 1 | 2),
                                xt && bn(e, l.treeForkCount),
                                e.child
                            }
                            t = t.sibling
                        }
                    l.tail !== null && Ht() > vo && (e.flags |= 128,
                    u = !0,
                    js(l, !1),
                    e.lanes = 4194304)
                }
            else {
                if (!u)
                    if (t = $l(f),
                    t !== null) {
                        if (e.flags |= 128,
                        u = !0,
                        t = t.updateQueue,
                        e.updateQueue = t,
                        ho(e, t),
                        js(l, !0),
                        l.tail === null && l.tailMode === "hidden" && !f.alternate && !xt)
                            return Vt(e),
                            null
                    } else
                        2 * Ht() - l.renderingStartTime > vo && a !== 536870912 && (e.flags |= 128,
                        u = !0,
                        js(l, !1),
                        e.lanes = 4194304);
                l.isBackwards ? (f.sibling = e.child,
                e.child = f) : (t = l.last,
                t !== null ? t.sibling = f : e.child = f,
                l.last = f)
            }
            return l.tail !== null ? (t = l.tail,
            l.rendering = t,
            l.tail = t.sibling,
            l.renderingStartTime = Ht(),
            t.sibling = null,
            a = kt.current,
            I(kt, u ? a & 1 | 2 : a & 1),
            xt && bn(e, l.treeForkCount),
            t) : (Vt(e),
            null);
        case 22:
        case 23:
            return Me(e),
            zu(),
            l = e.memoizedState !== null,
            t !== null ? t.memoizedState !== null !== l && (e.flags |= 8192) : l && (e.flags |= 8192),
            l ? (a & 536870912) !== 0 && (e.flags & 128) === 0 && (Vt(e),
            e.subtreeFlags & 6 && (e.flags |= 8192)) : Vt(e),
            a = e.updateQueue,
            a !== null && ho(e, a.retryQueue),
            a = null,
            t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool),
            l = null,
            e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool),
            l !== a && (e.flags |= 2048),
            t !== null && k(zi),
            null;
        case 24:
            return a = null,
            t !== null && (a = t.memoizedState.cache),
            e.memoizedState.cache !== a && (e.flags |= 2048),
            Tn(Pt),
            Vt(e),
            null;
        case 25:
            return null;
        case 30:
            return null
        }
        throw Error(o(156, e.tag))
    }
    function j3(t, e) {
        switch (gu(e),
        e.tag) {
        case 1:
            return t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 3:
            return Tn(Pt),
            jt(),
            t = e.flags,
            (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 26:
        case 27:
        case 5:
            return dn(e),
            null;
        case 31:
            if (e.memoizedState !== null) {
                if (Me(e),
                e.alternate === null)
                    throw Error(o(340));
                Ri()
            }
            return t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 13:
            if (Me(e),
            t = e.memoizedState,
            t !== null && t.dehydrated !== null) {
                if (e.alternate === null)
                    throw Error(o(340));
                Ri()
            }
            return t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 19:
            return k(kt),
            null;
        case 4:
            return jt(),
            null;
        case 10:
            return Tn(e.type),
            null;
        case 22:
        case 23:
            return Me(e),
            zu(),
            t !== null && k(zi),
            t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 24:
            return Tn(Pt),
            null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function p0(t, e) {
        switch (gu(e),
        e.tag) {
        case 3:
            Tn(Pt),
            jt();
            break;
        case 26:
        case 27:
        case 5:
            dn(e);
            break;
        case 4:
            jt();
            break;
        case 31:
            e.memoizedState !== null && Me(e);
            break;
        case 13:
            Me(e);
            break;
        case 19:
            k(kt);
            break;
        case 10:
            Tn(e.type);
            break;
        case 22:
        case 23:
            Me(e),
            zu(),
            t !== null && k(zi);
            break;
        case 24:
            Tn(Pt)
        }
    }
    function Ns(t, e) {
        try {
            var a = e.updateQueue
              , l = a !== null ? a.lastEffect : null;
            if (l !== null) {
                var u = l.next;
                a = u;
                do {
                    if ((a.tag & t) === t) {
                        l = void 0;
                        var f = a.create
                          , g = a.inst;
                        l = f(),
                        g.destroy = l
                    }
                    a = a.next
                } while (a !== u)
            }
        } catch (x) {
            wt(e, e.return, x)
        }
    }
    function Wn(t, e, a) {
        try {
            var l = e.updateQueue
              , u = l !== null ? l.lastEffect : null;
            if (u !== null) {
                var f = u.next;
                l = f;
                do {
                    if ((l.tag & t) === t) {
                        var g = l.inst
                          , x = g.destroy;
                        if (x !== void 0) {
                            g.destroy = void 0,
                            u = e;
                            var C = a
                              , j = x;
                            try {
                                j()
                            } catch (H) {
                                wt(u, C, H)
                            }
                        }
                    }
                    l = l.next
                } while (l !== f)
            }
        } catch (H) {
            wt(e, e.return, H)
        }
    }
    function y0(t) {
        var e = t.updateQueue;
        if (e !== null) {
            var a = t.stateNode;
            try {
                lm(e, a)
            } catch (l) {
                wt(t, t.return, l)
            }
        }
    }
    function g0(t, e, a) {
        a.props = Bi(t.type, t.memoizedProps),
        a.state = t.memoizedState;
        try {
            a.componentWillUnmount()
        } catch (l) {
            wt(t, e, l)
        }
    }
    function Vs(t, e) {
        try {
            var a = t.ref;
            if (a !== null) {
                switch (t.tag) {
                case 26:
                case 27:
                case 5:
                    var l = t.stateNode;
                    break;
                case 30:
                    l = t.stateNode;
                    break;
                default:
                    l = t.stateNode
                }
                typeof a == "function" ? t.refCleanup = a(l) : a.current = l
            }
        } catch (u) {
            wt(t, e, u)
        }
    }
    function nn(t, e) {
        var a = t.ref
          , l = t.refCleanup;
        if (a !== null)
            if (typeof l == "function")
                try {
                    l()
                } catch (u) {
                    wt(t, e, u)
                } finally {
                    t.refCleanup = null,
                    t = t.alternate,
                    t != null && (t.refCleanup = null)
                }
            else if (typeof a == "function")
                try {
                    a(null)
                } catch (u) {
                    wt(t, e, u)
                }
            else
                a.current = null
    }
    function v0(t) {
        var e = t.type
          , a = t.memoizedProps
          , l = t.stateNode;
        try {
            t: switch (e) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                a.autoFocus && l.focus();
                break t;
            case "img":
                a.src ? l.src = a.src : a.srcSet && (l.srcset = a.srcSet)
            }
        } catch (u) {
            wt(t, t.return, u)
        }
    }
    function cc(t, e, a) {
        try {
            var l = t.stateNode;
            nS(l, t.type, a, e),
            l[de] = e
        } catch (u) {
            wt(t, t.return, u)
        }
    }
    function S0(t) {
        return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && ai(t.type) || t.tag === 4
    }
    function fc(t) {
        t: for (; ; ) {
            for (; t.sibling === null; ) {
                if (t.return === null || S0(t.return))
                    return null;
                t = t.return
            }
            for (t.sibling.return = t.return,
            t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
                if (t.tag === 27 && ai(t.type) || t.flags & 2 || t.child === null || t.tag === 4)
                    continue t;
                t.child.return = t,
                t = t.child
            }
            if (!(t.flags & 2))
                return t.stateNode
        }
    }
    function hc(t, e, a) {
        var l = t.tag;
        if (l === 5 || l === 6)
            t = t.stateNode,
            e ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(t, e) : (e = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a,
            e.appendChild(t),
            a = a._reactRootContainer,
            a != null || e.onclick !== null || (e.onclick = gn));
        else if (l !== 4 && (l === 27 && ai(t.type) && (a = t.stateNode,
        e = null),
        t = t.child,
        t !== null))
            for (hc(t, e, a),
            t = t.sibling; t !== null; )
                hc(t, e, a),
                t = t.sibling
    }
    function mo(t, e, a) {
        var l = t.tag;
        if (l === 5 || l === 6)
            t = t.stateNode,
            e ? a.insertBefore(t, e) : a.appendChild(t);
        else if (l !== 4 && (l === 27 && ai(t.type) && (a = t.stateNode),
        t = t.child,
        t !== null))
            for (mo(t, e, a),
            t = t.sibling; t !== null; )
                mo(t, e, a),
                t = t.sibling
    }
    function b0(t) {
        var e = t.stateNode
          , a = t.memoizedProps;
        try {
            for (var l = t.type, u = e.attributes; u.length; )
                e.removeAttributeNode(u[0]);
            le(e, l, a),
            e[ne] = t,
            e[de] = a
        } catch (f) {
            wt(t, t.return, f)
        }
    }
    var wn = !1
      , Qt = !1
      , dc = !1
      , x0 = typeof WeakSet == "function" ? WeakSet : Set
      , te = null;
    function N3(t, e) {
        if (t = t.containerInfo,
        jc = No,
        t = Ld(t),
        lu(t)) {
            if ("selectionStart" in t)
                var a = {
                    start: t.selectionStart,
                    end: t.selectionEnd
                };
            else
                t: {
                    a = (a = t.ownerDocument) && a.defaultView || window;
                    var l = a.getSelection && a.getSelection();
                    if (l && l.rangeCount !== 0) {
                        a = l.anchorNode;
                        var u = l.anchorOffset
                          , f = l.focusNode;
                        l = l.focusOffset;
                        try {
                            a.nodeType,
                            f.nodeType
                        } catch {
                            a = null;
                            break t
                        }
                        var g = 0
                          , x = -1
                          , C = -1
                          , j = 0
                          , H = 0
                          , X = t
                          , N = null;
                        e: for (; ; ) {
                            for (var U; X !== a || u !== 0 && X.nodeType !== 3 || (x = g + u),
                            X !== f || l !== 0 && X.nodeType !== 3 || (C = g + l),
                            X.nodeType === 3 && (g += X.nodeValue.length),
                            (U = X.firstChild) !== null; )
                                N = X,
                                X = U;
                            for (; ; ) {
                                if (X === t)
                                    break e;
                                if (N === a && ++j === u && (x = g),
                                N === f && ++H === l && (C = g),
                                (U = X.nextSibling) !== null)
                                    break;
                                X = N,
                                N = X.parentNode
                            }
                            X = U
                        }
                        a = x === -1 || C === -1 ? null : {
                            start: x,
                            end: C
                        }
                    } else
                        a = null
                }
            a = a || {
                start: 0,
                end: 0
            }
        } else
            a = null;
        for (Nc = {
            focusedElem: t,
            selectionRange: a
        },
        No = !1,
        te = e; te !== null; )
            if (e = te,
            t = e.child,
            (e.subtreeFlags & 1028) !== 0 && t !== null)
                t.return = e,
                te = t;
            else
                for (; te !== null; ) {
                    switch (e = te,
                    f = e.alternate,
                    t = e.flags,
                    e.tag) {
                    case 0:
                        if ((t & 4) !== 0 && (t = e.updateQueue,
                        t = t !== null ? t.events : null,
                        t !== null))
                            for (a = 0; a < t.length; a++)
                                u = t[a],
                                u.ref.impl = u.nextImpl;
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((t & 1024) !== 0 && f !== null) {
                            t = void 0,
                            a = e,
                            u = f.memoizedProps,
                            f = f.memoizedState,
                            l = a.stateNode;
                            try {
                                var et = Bi(a.type, u);
                                t = l.getSnapshotBeforeUpdate(et, f),
                                l.__reactInternalSnapshotBeforeUpdate = t
                            } catch (lt) {
                                wt(a, a.return, lt)
                            }
                        }
                        break;
                    case 3:
                        if ((t & 1024) !== 0) {
                            if (t = e.stateNode.containerInfo,
                            a = t.nodeType,
                            a === 9)
                                Uc(t);
                            else if (a === 1)
                                switch (t.nodeName) {
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    Uc(t);
                                    break;
                                default:
                                    t.textContent = ""
                                }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        if ((t & 1024) !== 0)
                            throw Error(o(163))
                    }
                    if (t = e.sibling,
                    t !== null) {
                        t.return = e.return,
                        te = t;
                        break
                    }
                    te = e.return
                }
    }
    function T0(t, e, a) {
        var l = a.flags;
        switch (a.tag) {
        case 0:
        case 11:
        case 15:
            Rn(t, a),
            l & 4 && Ns(5, a);
            break;
        case 1:
            if (Rn(t, a),
            l & 4)
                if (t = a.stateNode,
                e === null)
                    try {
                        t.componentDidMount()
                    } catch (g) {
                        wt(a, a.return, g)
                    }
                else {
                    var u = Bi(a.type, e.memoizedProps);
                    e = e.memoizedState;
                    try {
                        t.componentDidUpdate(u, e, t.__reactInternalSnapshotBeforeUpdate)
                    } catch (g) {
                        wt(a, a.return, g)
                    }
                }
            l & 64 && y0(a),
            l & 512 && Vs(a, a.return);
            break;
        case 3:
            if (Rn(t, a),
            l & 64 && (t = a.updateQueue,
            t !== null)) {
                if (e = null,
                a.child !== null)
                    switch (a.child.tag) {
                    case 27:
                    case 5:
                        e = a.child.stateNode;
                        break;
                    case 1:
                        e = a.child.stateNode
                    }
                try {
                    lm(t, e)
                } catch (g) {
                    wt(a, a.return, g)
                }
            }
            break;
        case 27:
            e === null && l & 4 && b0(a);
        case 26:
        case 5:
            Rn(t, a),
            e === null && l & 4 && v0(a),
            l & 512 && Vs(a, a.return);
            break;
        case 12:
            Rn(t, a);
            break;
        case 31:
            Rn(t, a),
            l & 4 && C0(t, a);
            break;
        case 13:
            Rn(t, a),
            l & 4 && M0(t, a),
            l & 64 && (t = a.memoizedState,
            t !== null && (t = t.dehydrated,
            t !== null && (a = X3.bind(null, a),
            cS(t, a))));
            break;
        case 22:
            if (l = a.memoizedState !== null || wn,
            !l) {
                e = e !== null && e.memoizedState !== null || Qt,
                u = wn;
                var f = Qt;
                wn = l,
                (Qt = e) && !f ? Dn(t, a, (a.subtreeFlags & 8772) !== 0) : Rn(t, a),
                wn = u,
                Qt = f
            }
            break;
        case 30:
            break;
        default:
            Rn(t, a)
        }
    }
    function A0(t) {
        var e = t.alternate;
        e !== null && (t.alternate = null,
        A0(e)),
        t.child = null,
        t.deletions = null,
        t.sibling = null,
        t.tag === 5 && (e = t.stateNode,
        e !== null && kr(e)),
        t.stateNode = null,
        t.return = null,
        t.dependencies = null,
        t.memoizedProps = null,
        t.memoizedState = null,
        t.pendingProps = null,
        t.stateNode = null,
        t.updateQueue = null
    }
    var Bt = null
      , pe = !1;
    function _n(t, e, a) {
        for (a = a.child; a !== null; )
            E0(t, e, a),
            a = a.sibling
    }
    function E0(t, e, a) {
        if (xe && typeof xe.onCommitFiberUnmount == "function")
            try {
                xe.onCommitFiberUnmount(ls, a)
            } catch {}
        switch (a.tag) {
        case 26:
            Qt || nn(a, e),
            _n(t, e, a),
            a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode,
            a.parentNode.removeChild(a));
            break;
        case 27:
            Qt || nn(a, e);
            var l = Bt
              , u = pe;
            ai(a.type) && (Bt = a.stateNode,
            pe = !1),
            _n(t, e, a),
            Ps(a.stateNode),
            Bt = l,
            pe = u;
            break;
        case 5:
            Qt || nn(a, e);
        case 6:
            if (l = Bt,
            u = pe,
            Bt = null,
            _n(t, e, a),
            Bt = l,
            pe = u,
            Bt !== null)
                if (pe)
                    try {
                        (Bt.nodeType === 9 ? Bt.body : Bt.nodeName === "HTML" ? Bt.ownerDocument.body : Bt).removeChild(a.stateNode)
                    } catch (f) {
                        wt(a, e, f)
                    }
                else
                    try {
                        Bt.removeChild(a.stateNode)
                    } catch (f) {
                        wt(a, e, f)
                    }
            break;
        case 18:
            Bt !== null && (pe ? (t = Bt,
            yp(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, a.stateNode),
            Va(t)) : yp(Bt, a.stateNode));
            break;
        case 4:
            l = Bt,
            u = pe,
            Bt = a.stateNode.containerInfo,
            pe = !0,
            _n(t, e, a),
            Bt = l,
            pe = u;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            Wn(2, a, e),
            Qt || Wn(4, a, e),
            _n(t, e, a);
            break;
        case 1:
            Qt || (nn(a, e),
            l = a.stateNode,
            typeof l.componentWillUnmount == "function" && g0(a, e, l)),
            _n(t, e, a);
            break;
        case 21:
            _n(t, e, a);
            break;
        case 22:
            Qt = (l = Qt) || a.memoizedState !== null,
            _n(t, e, a),
            Qt = l;
            break;
        default:
            _n(t, e, a)
        }
    }
    function C0(t, e) {
        if (e.memoizedState === null && (t = e.alternate,
        t !== null && (t = t.memoizedState,
        t !== null))) {
            t = t.dehydrated;
            try {
                Va(t)
            } catch (a) {
                wt(e, e.return, a)
            }
        }
    }
    function M0(t, e) {
        if (e.memoizedState === null && (t = e.alternate,
        t !== null && (t = t.memoizedState,
        t !== null && (t = t.dehydrated,
        t !== null))))
            try {
                Va(t)
            } catch (a) {
                wt(e, e.return, a)
            }
    }
    function V3(t) {
        switch (t.tag) {
        case 31:
        case 13:
        case 19:
            var e = t.stateNode;
            return e === null && (e = t.stateNode = new x0),
            e;
        case 22:
            return t = t.stateNode,
            e = t._retryCache,
            e === null && (e = t._retryCache = new x0),
            e;
        default:
            throw Error(o(435, t.tag))
        }
    }
    function po(t, e) {
        var a = V3(t);
        e.forEach(function(l) {
            if (!a.has(l)) {
                a.add(l);
                var u = P3.bind(null, t, l);
                l.then(u, u)
            }
        })
    }
    function ye(t, e) {
        var a = e.deletions;
        if (a !== null)
            for (var l = 0; l < a.length; l++) {
                var u = a[l]
                  , f = t
                  , g = e
                  , x = g;
                t: for (; x !== null; ) {
                    switch (x.tag) {
                    case 27:
                        if (ai(x.type)) {
                            Bt = x.stateNode,
                            pe = !1;
                            break t
                        }
                        break;
                    case 5:
                        Bt = x.stateNode,
                        pe = !1;
                        break t;
                    case 3:
                    case 4:
                        Bt = x.stateNode.containerInfo,
                        pe = !0;
                        break t
                    }
                    x = x.return
                }
                if (Bt === null)
                    throw Error(o(160));
                E0(f, g, u),
                Bt = null,
                pe = !1,
                f = u.alternate,
                f !== null && (f.return = null),
                u.return = null
            }
        if (e.subtreeFlags & 13886)
            for (e = e.child; e !== null; )
                w0(e, t),
                e = e.sibling
    }
    var Ke = null;
    function w0(t, e) {
        var a = t.alternate
          , l = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            ye(e, t),
            ge(t),
            l & 4 && (Wn(3, t, t.return),
            Ns(3, t),
            Wn(5, t, t.return));
            break;
        case 1:
            ye(e, t),
            ge(t),
            l & 512 && (Qt || a === null || nn(a, a.return)),
            l & 64 && wn && (t = t.updateQueue,
            t !== null && (l = t.callbacks,
            l !== null && (a = t.shared.hiddenCallbacks,
            t.shared.hiddenCallbacks = a === null ? l : a.concat(l))));
            break;
        case 26:
            var u = Ke;
            if (ye(e, t),
            ge(t),
            l & 512 && (Qt || a === null || nn(a, a.return)),
            l & 4) {
                var f = a !== null ? a.memoizedState : null;
                if (l = t.memoizedState,
                a === null)
                    if (l === null)
                        if (t.stateNode === null) {
                            t: {
                                l = t.type,
                                a = t.memoizedProps,
                                u = u.ownerDocument || u;
                                e: switch (l) {
                                case "title":
                                    f = u.getElementsByTagName("title")[0],
                                    (!f || f[us] || f[ne] || f.namespaceURI === "http://www.w3.org/2000/svg" || f.hasAttribute("itemprop")) && (f = u.createElement(l),
                                    u.head.insertBefore(f, u.querySelector("head > title"))),
                                    le(f, l, a),
                                    f[ne] = t,
                                    $t(f),
                                    l = f;
                                    break t;
                                case "link":
                                    var g = wp("link", "href", u).get(l + (a.href || ""));
                                    if (g) {
                                        for (var x = 0; x < g.length; x++)
                                            if (f = g[x],
                                            f.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && f.getAttribute("rel") === (a.rel == null ? null : a.rel) && f.getAttribute("title") === (a.title == null ? null : a.title) && f.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                                                g.splice(x, 1);
                                                break e
                                            }
                                    }
                                    f = u.createElement(l),
                                    le(f, l, a),
                                    u.head.appendChild(f);
                                    break;
                                case "meta":
                                    if (g = wp("meta", "content", u).get(l + (a.content || ""))) {
                                        for (x = 0; x < g.length; x++)
                                            if (f = g[x],
                                            f.getAttribute("content") === (a.content == null ? null : "" + a.content) && f.getAttribute("name") === (a.name == null ? null : a.name) && f.getAttribute("property") === (a.property == null ? null : a.property) && f.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && f.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                                                g.splice(x, 1);
                                                break e
                                            }
                                    }
                                    f = u.createElement(l),
                                    le(f, l, a),
                                    u.head.appendChild(f);
                                    break;
                                default:
                                    throw Error(o(468, l))
                                }
                                f[ne] = t,
                                $t(f),
                                l = f
                            }
                            t.stateNode = l
                        } else
                            _p(u, t.type, t.stateNode);
                    else
                        t.stateNode = Mp(u, l, t.memoizedProps);
                else
                    f !== l ? (f === null ? a.stateNode !== null && (a = a.stateNode,
                    a.parentNode.removeChild(a)) : f.count--,
                    l === null ? _p(u, t.type, t.stateNode) : Mp(u, l, t.memoizedProps)) : l === null && t.stateNode !== null && cc(t, t.memoizedProps, a.memoizedProps)
            }
            break;
        case 27:
            ye(e, t),
            ge(t),
            l & 512 && (Qt || a === null || nn(a, a.return)),
            a !== null && l & 4 && cc(t, t.memoizedProps, a.memoizedProps);
            break;
        case 5:
            if (ye(e, t),
            ge(t),
            l & 512 && (Qt || a === null || nn(a, a.return)),
            t.flags & 32) {
                u = t.stateNode;
                try {
                    sa(u, "")
                } catch (et) {
                    wt(t, t.return, et)
                }
            }
            l & 4 && t.stateNode != null && (u = t.memoizedProps,
            cc(t, u, a !== null ? a.memoizedProps : u)),
            l & 1024 && (dc = !0);
            break;
        case 6:
            if (ye(e, t),
            ge(t),
            l & 4) {
                if (t.stateNode === null)
                    throw Error(o(162));
                l = t.memoizedProps,
                a = t.stateNode;
                try {
                    a.nodeValue = l
                } catch (et) {
                    wt(t, t.return, et)
                }
            }
            break;
        case 3:
            if (Oo = null,
            u = Ke,
            Ke = Ro(e.containerInfo),
            ye(e, t),
            Ke = u,
            ge(t),
            l & 4 && a !== null && a.memoizedState.isDehydrated)
                try {
                    Va(e.containerInfo)
                } catch (et) {
                    wt(t, t.return, et)
                }
            dc && (dc = !1,
            _0(t));
            break;
        case 4:
            l = Ke,
            Ke = Ro(t.stateNode.containerInfo),
            ye(e, t),
            ge(t),
            Ke = l;
            break;
        case 12:
            ye(e, t),
            ge(t);
            break;
        case 31:
            ye(e, t),
            ge(t),
            l & 4 && (l = t.updateQueue,
            l !== null && (t.updateQueue = null,
            po(t, l)));
            break;
        case 13:
            ye(e, t),
            ge(t),
            t.child.flags & 8192 && t.memoizedState !== null != (a !== null && a.memoizedState !== null) && (go = Ht()),
            l & 4 && (l = t.updateQueue,
            l !== null && (t.updateQueue = null,
            po(t, l)));
            break;
        case 22:
            u = t.memoizedState !== null;
            var C = a !== null && a.memoizedState !== null
              , j = wn
              , H = Qt;
            if (wn = j || u,
            Qt = H || C,
            ye(e, t),
            Qt = H,
            wn = j,
            ge(t),
            l & 8192)
                t: for (e = t.stateNode,
                e._visibility = u ? e._visibility & -2 : e._visibility | 1,
                u && (a === null || C || wn || Qt || Ui(t)),
                a = null,
                e = t; ; ) {
                    if (e.tag === 5 || e.tag === 26) {
                        if (a === null) {
                            C = a = e;
                            try {
                                if (f = C.stateNode,
                                u)
                                    g = f.style,
                                    typeof g.setProperty == "function" ? g.setProperty("display", "none", "important") : g.display = "none";
                                else {
                                    x = C.stateNode;
                                    var X = C.memoizedProps.style
                                      , N = X != null && X.hasOwnProperty("display") ? X.display : null;
                                    x.style.display = N == null || typeof N == "boolean" ? "" : ("" + N).trim()
                                }
                            } catch (et) {
                                wt(C, C.return, et)
                            }
                        }
                    } else if (e.tag === 6) {
                        if (a === null) {
                            C = e;
                            try {
                                C.stateNode.nodeValue = u ? "" : C.memoizedProps
                            } catch (et) {
                                wt(C, C.return, et)
                            }
                        }
                    } else if (e.tag === 18) {
                        if (a === null) {
                            C = e;
                            try {
                                var U = C.stateNode;
                                u ? gp(U, !0) : gp(C.stateNode, !1)
                            } catch (et) {
                                wt(C, C.return, et)
                            }
                        }
                    } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
                        e.child.return = e,
                        e = e.child;
                        continue
                    }
                    if (e === t)
                        break t;
                    for (; e.sibling === null; ) {
                        if (e.return === null || e.return === t)
                            break t;
                        a === e && (a = null),
                        e = e.return
                    }
                    a === e && (a = null),
                    e.sibling.return = e.return,
                    e = e.sibling
                }
            l & 4 && (l = t.updateQueue,
            l !== null && (a = l.retryQueue,
            a !== null && (l.retryQueue = null,
            po(t, a))));
            break;
        case 19:
            ye(e, t),
            ge(t),
            l & 4 && (l = t.updateQueue,
            l !== null && (t.updateQueue = null,
            po(t, l)));
            break;
        case 30:
            break;
        case 21:
            break;
        default:
            ye(e, t),
            ge(t)
        }
    }
    function ge(t) {
        var e = t.flags;
        if (e & 2) {
            try {
                for (var a, l = t.return; l !== null; ) {
                    if (S0(l)) {
                        a = l;
                        break
                    }
                    l = l.return
                }
                if (a == null)
                    throw Error(o(160));
                switch (a.tag) {
                case 27:
                    var u = a.stateNode
                      , f = fc(t);
                    mo(t, f, u);
                    break;
                case 5:
                    var g = a.stateNode;
                    a.flags & 32 && (sa(g, ""),
                    a.flags &= -33);
                    var x = fc(t);
                    mo(t, x, g);
                    break;
                case 3:
                case 4:
                    var C = a.stateNode.containerInfo
                      , j = fc(t);
                    hc(t, j, C);
                    break;
                default:
                    throw Error(o(161))
                }
            } catch (H) {
                wt(t, t.return, H)
            }
            t.flags &= -3
        }
        e & 4096 && (t.flags &= -4097)
    }
    function _0(t) {
        if (t.subtreeFlags & 1024)
            for (t = t.child; t !== null; ) {
                var e = t;
                _0(e),
                e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
                t = t.sibling
            }
    }
    function Rn(t, e) {
        if (e.subtreeFlags & 8772)
            for (e = e.child; e !== null; )
                T0(t, e.alternate, e),
                e = e.sibling
    }
    function Ui(t) {
        for (t = t.child; t !== null; ) {
            var e = t;
            switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                Wn(4, e, e.return),
                Ui(e);
                break;
            case 1:
                nn(e, e.return);
                var a = e.stateNode;
                typeof a.componentWillUnmount == "function" && g0(e, e.return, a),
                Ui(e);
                break;
            case 27:
                Ps(e.stateNode);
            case 26:
            case 5:
                nn(e, e.return),
                Ui(e);
                break;
            case 22:
                e.memoizedState === null && Ui(e);
                break;
            case 30:
                Ui(e);
                break;
            default:
                Ui(e)
            }
            t = t.sibling
        }
    }
    function Dn(t, e, a) {
        for (a = a && (e.subtreeFlags & 8772) !== 0,
        e = e.child; e !== null; ) {
            var l = e.alternate
              , u = t
              , f = e
              , g = f.flags;
            switch (f.tag) {
            case 0:
            case 11:
            case 15:
                Dn(u, f, a),
                Ns(4, f);
                break;
            case 1:
                if (Dn(u, f, a),
                l = f,
                u = l.stateNode,
                typeof u.componentDidMount == "function")
                    try {
                        u.componentDidMount()
                    } catch (j) {
                        wt(l, l.return, j)
                    }
                if (l = f,
                u = l.updateQueue,
                u !== null) {
                    var x = l.stateNode;
                    try {
                        var C = u.shared.hiddenCallbacks;
                        if (C !== null)
                            for (u.shared.hiddenCallbacks = null,
                            u = 0; u < C.length; u++)
                                sm(C[u], x)
                    } catch (j) {
                        wt(l, l.return, j)
                    }
                }
                a && g & 64 && y0(f),
                Vs(f, f.return);
                break;
            case 27:
                b0(f);
            case 26:
            case 5:
                Dn(u, f, a),
                a && l === null && g & 4 && v0(f),
                Vs(f, f.return);
                break;
            case 12:
                Dn(u, f, a);
                break;
            case 31:
                Dn(u, f, a),
                a && g & 4 && C0(u, f);
                break;
            case 13:
                Dn(u, f, a),
                a && g & 4 && M0(u, f);
                break;
            case 22:
                f.memoizedState === null && Dn(u, f, a),
                Vs(f, f.return);
                break;
            case 30:
                break;
            default:
                Dn(u, f, a)
            }
            e = e.sibling
        }
    }
    function mc(t, e) {
        var a = null;
        t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool),
        t = null,
        e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool),
        t !== a && (t != null && t.refCount++,
        a != null && Ts(a))
    }
    function pc(t, e) {
        t = null,
        e.alternate !== null && (t = e.alternate.memoizedState.cache),
        e = e.memoizedState.cache,
        e !== t && (e.refCount++,
        t != null && Ts(t))
    }
    function Ze(t, e, a, l) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; )
                R0(t, e, a, l),
                e = e.sibling
    }
    function R0(t, e, a, l) {
        var u = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 15:
            Ze(t, e, a, l),
            u & 2048 && Ns(9, e);
            break;
        case 1:
            Ze(t, e, a, l);
            break;
        case 3:
            Ze(t, e, a, l),
            u & 2048 && (t = null,
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            e = e.memoizedState.cache,
            e !== t && (e.refCount++,
            t != null && Ts(t)));
            break;
        case 12:
            if (u & 2048) {
                Ze(t, e, a, l),
                t = e.stateNode;
                try {
                    var f = e.memoizedProps
                      , g = f.id
                      , x = f.onPostCommit;
                    typeof x == "function" && x(g, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0)
                } catch (C) {
                    wt(e, e.return, C)
                }
            } else
                Ze(t, e, a, l);
            break;
        case 31:
            Ze(t, e, a, l);
            break;
        case 13:
            Ze(t, e, a, l);
            break;
        case 23:
            break;
        case 22:
            f = e.stateNode,
            g = e.alternate,
            e.memoizedState !== null ? f._visibility & 2 ? Ze(t, e, a, l) : Bs(t, e) : f._visibility & 2 ? Ze(t, e, a, l) : (f._visibility |= 2,
            Ca(t, e, a, l, (e.subtreeFlags & 10256) !== 0 || !1)),
            u & 2048 && mc(g, e);
            break;
        case 24:
            Ze(t, e, a, l),
            u & 2048 && pc(e.alternate, e);
            break;
        default:
            Ze(t, e, a, l)
        }
    }
    function Ca(t, e, a, l, u) {
        for (u = u && ((e.subtreeFlags & 10256) !== 0 || !1),
        e = e.child; e !== null; ) {
            var f = t
              , g = e
              , x = a
              , C = l
              , j = g.flags;
            switch (g.tag) {
            case 0:
            case 11:
            case 15:
                Ca(f, g, x, C, u),
                Ns(8, g);
                break;
            case 23:
                break;
            case 22:
                var H = g.stateNode;
                g.memoizedState !== null ? H._visibility & 2 ? Ca(f, g, x, C, u) : Bs(f, g) : (H._visibility |= 2,
                Ca(f, g, x, C, u)),
                u && j & 2048 && mc(g.alternate, g);
                break;
            case 24:
                Ca(f, g, x, C, u),
                u && j & 2048 && pc(g.alternate, g);
                break;
            default:
                Ca(f, g, x, C, u)
            }
            e = e.sibling
        }
    }
    function Bs(t, e) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; ) {
                var a = t
                  , l = e
                  , u = l.flags;
                switch (l.tag) {
                case 22:
                    Bs(a, l),
                    u & 2048 && mc(l.alternate, l);
                    break;
                case 24:
                    Bs(a, l),
                    u & 2048 && pc(l.alternate, l);
                    break;
                default:
                    Bs(a, l)
                }
                e = e.sibling
            }
    }
    var Us = 8192;
    function Ma(t, e, a) {
        if (t.subtreeFlags & Us)
            for (t = t.child; t !== null; )
                D0(t, e, a),
                t = t.sibling
    }
    function D0(t, e, a) {
        switch (t.tag) {
        case 26:
            Ma(t, e, a),
            t.flags & Us && t.memoizedState !== null && TS(a, Ke, t.memoizedState, t.memoizedProps);
            break;
        case 5:
            Ma(t, e, a);
            break;
        case 3:
        case 4:
            var l = Ke;
            Ke = Ro(t.stateNode.containerInfo),
            Ma(t, e, a),
            Ke = l;
            break;
        case 22:
            t.memoizedState === null && (l = t.alternate,
            l !== null && l.memoizedState !== null ? (l = Us,
            Us = 16777216,
            Ma(t, e, a),
            Us = l) : Ma(t, e, a));
            break;
        default:
            Ma(t, e, a)
        }
    }
    function O0(t) {
        var e = t.alternate;
        if (e !== null && (t = e.child,
        t !== null)) {
            e.child = null;
            do
                e = t.sibling,
                t.sibling = null,
                t = e;
            while (t !== null)
        }
    }
    function Hs(t) {
        var e = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (e !== null)
                for (var a = 0; a < e.length; a++) {
                    var l = e[a];
                    te = l,
                    L0(l, t)
                }
            O0(t)
        }
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; )
                z0(t),
                t = t.sibling
    }
    function z0(t) {
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            Hs(t),
            t.flags & 2048 && Wn(9, t, t.return);
            break;
        case 3:
            Hs(t);
            break;
        case 12:
            Hs(t);
            break;
        case 22:
            var e = t.stateNode;
            t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3,
            yo(t)) : Hs(t);
            break;
        default:
            Hs(t)
        }
    }
    function yo(t) {
        var e = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (e !== null)
                for (var a = 0; a < e.length; a++) {
                    var l = e[a];
                    te = l,
                    L0(l, t)
                }
            O0(t)
        }
        for (t = t.child; t !== null; ) {
            switch (e = t,
            e.tag) {
            case 0:
            case 11:
            case 15:
                Wn(8, e, e.return),
                yo(e);
                break;
            case 22:
                a = e.stateNode,
                a._visibility & 2 && (a._visibility &= -3,
                yo(e));
                break;
            default:
                yo(e)
            }
            t = t.sibling
        }
    }
    function L0(t, e) {
        for (; te !== null; ) {
            var a = te;
            switch (a.tag) {
            case 0:
            case 11:
            case 15:
                Wn(8, a, e);
                break;
            case 23:
            case 22:
                if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
                    var l = a.memoizedState.cachePool.pool;
                    l != null && l.refCount++
                }
                break;
            case 24:
                Ts(a.memoizedState.cache)
            }
            if (l = a.child,
            l !== null)
                l.return = a,
                te = l;
            else
                t: for (a = t; te !== null; ) {
                    l = te;
                    var u = l.sibling
                      , f = l.return;
                    if (A0(l),
                    l === a) {
                        te = null;
                        break t
                    }
                    if (u !== null) {
                        u.return = f,
                        te = u;
                        break t
                    }
                    te = f
                }
        }
    }
    var B3 = {
        getCacheForType: function(t) {
            var e = ae(Pt)
              , a = e.data.get(t);
            return a === void 0 && (a = t(),
            e.data.set(t, a)),
            a
        },
        cacheSignal: function() {
            return ae(Pt).controller.signal
        }
    }
      , U3 = typeof WeakMap == "function" ? WeakMap : Map
      , Ct = 0
      , Ot = null
      , yt = null
      , St = 0
      , Mt = 0
      , we = null
      , In = !1
      , wa = !1
      , yc = !1
      , On = 0
      , Gt = 0
      , $n = 0
      , Hi = 0
      , gc = 0
      , _e = 0
      , _a = 0
      , qs = null
      , ve = null
      , vc = !1
      , go = 0
      , j0 = 0
      , vo = 1 / 0
      , So = null
      , ti = null
      , Wt = 0
      , ei = null
      , Ra = null
      , zn = 0
      , Sc = 0
      , bc = null
      , N0 = null
      , Gs = 0
      , xc = null;
    function Re() {
        return (Ct & 2) !== 0 && St !== 0 ? St & -St : B.T !== null ? wc() : Wh()
    }
    function V0() {
        if (_e === 0)
            if ((St & 536870912) === 0 || xt) {
                var t = Ml;
                Ml <<= 1,
                (Ml & 3932160) === 0 && (Ml = 262144),
                _e = t
            } else
                _e = 536870912;
        return t = Ce.current,
        t !== null && (t.flags |= 32),
        _e
    }
    function Se(t, e, a) {
        (t === Ot && (Mt === 2 || Mt === 9) || t.cancelPendingCommit !== null) && (Da(t, 0),
        ni(t, St, _e, !1)),
        rs(t, a),
        ((Ct & 2) === 0 || t !== Ot) && (t === Ot && ((Ct & 2) === 0 && (Hi |= a),
        Gt === 4 && ni(t, St, _e, !1)),
        an(t))
    }
    function B0(t, e, a) {
        if ((Ct & 6) !== 0)
            throw Error(o(327));
        var l = !a && (e & 127) === 0 && (e & t.expiredLanes) === 0 || os(t, e)
          , u = l ? G3(t, e) : Ac(t, e, !0)
          , f = l;
        do {
            if (u === 0) {
                wa && !l && ni(t, e, 0, !1);
                break
            } else {
                if (a = t.current.alternate,
                f && !H3(a)) {
                    u = Ac(t, e, !1),
                    f = !1;
                    continue
                }
                if (u === 2) {
                    if (f = e,
                    t.errorRecoveryDisabledLanes & f)
                        var g = 0;
                    else
                        g = t.pendingLanes & -536870913,
                        g = g !== 0 ? g : g & 536870912 ? 536870912 : 0;
                    if (g !== 0) {
                        e = g;
                        t: {
                            var x = t;
                            u = qs;
                            var C = x.current.memoizedState.isDehydrated;
                            if (C && (Da(x, g).flags |= 256),
                            g = Ac(x, g, !1),
                            g !== 2) {
                                if (yc && !C) {
                                    x.errorRecoveryDisabledLanes |= f,
                                    Hi |= f,
                                    u = 4;
                                    break t
                                }
                                f = ve,
                                ve = u,
                                f !== null && (ve === null ? ve = f : ve.push.apply(ve, f))
                            }
                            u = g
                        }
                        if (f = !1,
                        u !== 2)
                            continue
                    }
                }
                if (u === 1) {
                    Da(t, 0),
                    ni(t, e, 0, !0);
                    break
                }
                t: {
                    switch (l = t,
                    f = u,
                    f) {
                    case 0:
                    case 1:
                        throw Error(o(345));
                    case 4:
                        if ((e & 4194048) !== e)
                            break;
                    case 6:
                        ni(l, e, _e, !In);
                        break t;
                    case 2:
                        ve = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(o(329))
                    }
                    if ((e & 62914560) === e && (u = go + 300 - Ht(),
                    10 < u)) {
                        if (ni(l, e, _e, !In),
                        _l(l, 0, !0) !== 0)
                            break t;
                        zn = e,
                        l.timeoutHandle = mp(U0.bind(null, l, a, ve, So, vc, e, _e, Hi, _a, In, f, "Throttled", -0, 0), u);
                        break t
                    }
                    U0(l, a, ve, So, vc, e, _e, Hi, _a, In, f, null, -0, 0)
                }
            }
            break
        } while (!0);
        an(t)
    }
    function U0(t, e, a, l, u, f, g, x, C, j, H, X, N, U) {
        if (t.timeoutHandle = -1,
        X = e.subtreeFlags,
        X & 8192 || (X & 16785408) === 16785408) {
            X = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: gn
            },
            D0(e, f, X);
            var et = (f & 62914560) === f ? go - Ht() : (f & 4194048) === f ? j0 - Ht() : 0;
            if (et = AS(X, et),
            et !== null) {
                zn = f,
                t.cancelPendingCommit = et(K0.bind(null, t, e, f, a, l, u, g, x, C, H, X, null, N, U)),
                ni(t, f, g, !j);
                return
            }
        }
        K0(t, e, f, a, l, u, g, x, C)
    }
    function H3(t) {
        for (var e = t; ; ) {
            var a = e.tag;
            if ((a === 0 || a === 11 || a === 15) && e.flags & 16384 && (a = e.updateQueue,
            a !== null && (a = a.stores,
            a !== null)))
                for (var l = 0; l < a.length; l++) {
                    var u = a[l]
                      , f = u.getSnapshot;
                    u = u.value;
                    try {
                        if (!Ae(f(), u))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (a = e.child,
            e.subtreeFlags & 16384 && a !== null)
                a.return = e,
                e = a;
            else {
                if (e === t)
                    break;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        return !0;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        }
        return !0
    }
    function ni(t, e, a, l) {
        e &= ~gc,
        e &= ~Hi,
        t.suspendedLanes |= e,
        t.pingedLanes &= ~e,
        l && (t.warmLanes |= e),
        l = t.expirationTimes;
        for (var u = e; 0 < u; ) {
            var f = 31 - Te(u)
              , g = 1 << f;
            l[f] = -1,
            u &= ~g
        }
        a !== 0 && Qh(t, a, e)
    }
    function bo() {
        return (Ct & 6) === 0 ? (Ys(0),
        !1) : !0
    }
    function Tc() {
        if (yt !== null) {
            if (Mt === 0)
                var t = yt.return;
            else
                t = yt,
                xn = Di = null,
                Uu(t),
                ba = null,
                Es = 0,
                t = yt;
            for (; t !== null; )
                p0(t.alternate, t),
                t = t.return;
            yt = null
        }
    }
    function Da(t, e) {
        var a = t.timeoutHandle;
        a !== -1 && (t.timeoutHandle = -1,
        sS(a)),
        a = t.cancelPendingCommit,
        a !== null && (t.cancelPendingCommit = null,
        a()),
        zn = 0,
        Tc(),
        Ot = t,
        yt = a = Sn(t.current, null),
        St = e,
        Mt = 0,
        we = null,
        In = !1,
        wa = os(t, e),
        yc = !1,
        _a = _e = gc = Hi = $n = Gt = 0,
        ve = qs = null,
        vc = !1,
        (e & 8) !== 0 && (e |= e & 32);
        var l = t.entangledLanes;
        if (l !== 0)
            for (t = t.entanglements,
            l &= e; 0 < l; ) {
                var u = 31 - Te(l)
                  , f = 1 << u;
                e |= t[u],
                l &= ~f
            }
        return On = e,
        ql(),
        a
    }
    function H0(t, e) {
        dt = null,
        B.H = zs,
        e === Sa || e === Ql ? (e = em(),
        Mt = 3) : e === Mu ? (e = em(),
        Mt = 4) : Mt = e === tc ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1,
        we = e,
        yt === null && (Gt = 1,
        ro(t, Ne(e, t.current)))
    }
    function q0() {
        var t = Ce.current;
        return t === null ? !0 : (St & 4194048) === St ? He === null : (St & 62914560) === St || (St & 536870912) !== 0 ? t === He : !1
    }
    function G0() {
        var t = B.H;
        return B.H = zs,
        t === null ? zs : t
    }
    function Y0() {
        var t = B.A;
        return B.A = B3,
        t
    }
    function xo() {
        Gt = 4,
        In || (St & 4194048) !== St && Ce.current !== null || (wa = !0),
        ($n & 134217727) === 0 && (Hi & 134217727) === 0 || Ot === null || ni(Ot, St, _e, !1)
    }
    function Ac(t, e, a) {
        var l = Ct;
        Ct |= 2;
        var u = G0()
          , f = Y0();
        (Ot !== t || St !== e) && (So = null,
        Da(t, e)),
        e = !1;
        var g = Gt;
        t: do
            try {
                if (Mt !== 0 && yt !== null) {
                    var x = yt
                      , C = we;
                    switch (Mt) {
                    case 8:
                        Tc(),
                        g = 6;
                        break t;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        Ce.current === null && (e = !0);
                        var j = Mt;
                        if (Mt = 0,
                        we = null,
                        Oa(t, x, C, j),
                        a && wa) {
                            g = 0;
                            break t
                        }
                        break;
                    default:
                        j = Mt,
                        Mt = 0,
                        we = null,
                        Oa(t, x, C, j)
                    }
                }
                q3(),
                g = Gt;
                break
            } catch (H) {
                H0(t, H)
            }
        while (!0);
        return e && t.shellSuspendCounter++,
        xn = Di = null,
        Ct = l,
        B.H = u,
        B.A = f,
        yt === null && (Ot = null,
        St = 0,
        ql()),
        g
    }
    function q3() {
        for (; yt !== null; )
            k0(yt)
    }
    function G3(t, e) {
        var a = Ct;
        Ct |= 2;
        var l = G0()
          , u = Y0();
        Ot !== t || St !== e ? (So = null,
        vo = Ht() + 500,
        Da(t, e)) : wa = os(t, e);
        t: do
            try {
                if (Mt !== 0 && yt !== null) {
                    e = yt;
                    var f = we;
                    e: switch (Mt) {
                    case 1:
                        Mt = 0,
                        we = null,
                        Oa(t, e, f, 1);
                        break;
                    case 2:
                    case 9:
                        if ($d(f)) {
                            Mt = 0,
                            we = null,
                            X0(e);
                            break
                        }
                        e = function() {
                            Mt !== 2 && Mt !== 9 || Ot !== t || (Mt = 7),
                            an(t)
                        }
                        ,
                        f.then(e, e);
                        break t;
                    case 3:
                        Mt = 7;
                        break t;
                    case 4:
                        Mt = 5;
                        break t;
                    case 7:
                        $d(f) ? (Mt = 0,
                        we = null,
                        X0(e)) : (Mt = 0,
                        we = null,
                        Oa(t, e, f, 7));
                        break;
                    case 5:
                        var g = null;
                        switch (yt.tag) {
                        case 26:
                            g = yt.memoizedState;
                        case 5:
                        case 27:
                            var x = yt;
                            if (g ? Rp(g) : x.stateNode.complete) {
                                Mt = 0,
                                we = null;
                                var C = x.sibling;
                                if (C !== null)
                                    yt = C;
                                else {
                                    var j = x.return;
                                    j !== null ? (yt = j,
                                    To(j)) : yt = null
                                }
                                break e
                            }
                        }
                        Mt = 0,
                        we = null,
                        Oa(t, e, f, 5);
                        break;
                    case 6:
                        Mt = 0,
                        we = null,
                        Oa(t, e, f, 6);
                        break;
                    case 8:
                        Tc(),
                        Gt = 6;
                        break t;
                    default:
                        throw Error(o(462))
                    }
                }
                Y3();
                break
            } catch (H) {
                H0(t, H)
            }
        while (!0);
        return xn = Di = null,
        B.H = l,
        B.A = u,
        Ct = a,
        yt !== null ? 0 : (Ot = null,
        St = 0,
        ql(),
        Gt)
    }
    function Y3() {
        for (; yt !== null && !Al(); )
            k0(yt)
    }
    function k0(t) {
        var e = d0(t.alternate, t, On);
        t.memoizedProps = t.pendingProps,
        e === null ? To(t) : yt = e
    }
    function X0(t) {
        var e = t
          , a = e.alternate;
        switch (e.tag) {
        case 15:
        case 0:
            e = o0(a, e, e.pendingProps, e.type, void 0, St);
            break;
        case 11:
            e = o0(a, e, e.pendingProps, e.type.render, e.ref, St);
            break;
        case 5:
            Uu(e);
        default:
            p0(a, e),
            e = yt = Yd(e, On),
            e = d0(a, e, On)
        }
        t.memoizedProps = t.pendingProps,
        e === null ? To(t) : yt = e
    }
    function Oa(t, e, a, l) {
        xn = Di = null,
        Uu(e),
        ba = null,
        Es = 0;
        var u = e.return;
        try {
            if (D3(t, u, e, a, St)) {
                Gt = 1,
                ro(t, Ne(a, t.current)),
                yt = null;
                return
            }
        } catch (f) {
            if (u !== null)
                throw yt = u,
                f;
            Gt = 1,
            ro(t, Ne(a, t.current)),
            yt = null;
            return
        }
        e.flags & 32768 ? (xt || l === 1 ? t = !0 : wa || (St & 536870912) !== 0 ? t = !1 : (In = t = !0,
        (l === 2 || l === 9 || l === 3 || l === 6) && (l = Ce.current,
        l !== null && l.tag === 13 && (l.flags |= 16384))),
        P0(e, t)) : To(e)
    }
    function To(t) {
        var e = t;
        do {
            if ((e.flags & 32768) !== 0) {
                P0(e, In);
                return
            }
            t = e.return;
            var a = L3(e.alternate, e, On);
            if (a !== null) {
                yt = a;
                return
            }
            if (e = e.sibling,
            e !== null) {
                yt = e;
                return
            }
            yt = e = t
        } while (e !== null);
        Gt === 0 && (Gt = 5)
    }
    function P0(t, e) {
        do {
            var a = j3(t.alternate, t);
            if (a !== null) {
                a.flags &= 32767,
                yt = a;
                return
            }
            if (a = t.return,
            a !== null && (a.flags |= 32768,
            a.subtreeFlags = 0,
            a.deletions = null),
            !e && (t = t.sibling,
            t !== null)) {
                yt = t;
                return
            }
            yt = t = a
        } while (t !== null);
        Gt = 6,
        yt = null
    }
    function K0(t, e, a, l, u, f, g, x, C) {
        t.cancelPendingCommit = null;
        do
            Ao();
        while (Wt !== 0);
        if ((Ct & 6) !== 0)
            throw Error(o(327));
        if (e !== null) {
            if (e === t.current)
                throw Error(o(177));
            if (f = e.lanes | e.childLanes,
            f |= fu,
            x2(t, a, f, g, x, C),
            t === Ot && (yt = Ot = null,
            St = 0),
            Ra = e,
            ei = t,
            zn = a,
            Sc = f,
            bc = u,
            N0 = l,
            (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null,
            t.callbackPriority = 0,
            K3(El, function() {
                return W0(),
                null
            })) : (t.callbackNode = null,
            t.callbackPriority = 0),
            l = (e.flags & 13878) !== 0,
            (e.subtreeFlags & 13878) !== 0 || l) {
                l = B.T,
                B.T = null,
                u = J.p,
                J.p = 2,
                g = Ct,
                Ct |= 4;
                try {
                    N3(t, e, a)
                } finally {
                    Ct = g,
                    J.p = u,
                    B.T = l
                }
            }
            Wt = 1,
            Z0(),
            Q0(),
            F0()
        }
    }
    function Z0() {
        if (Wt === 1) {
            Wt = 0;
            var t = ei
              , e = Ra
              , a = (e.flags & 13878) !== 0;
            if ((e.subtreeFlags & 13878) !== 0 || a) {
                a = B.T,
                B.T = null;
                var l = J.p;
                J.p = 2;
                var u = Ct;
                Ct |= 4;
                try {
                    w0(e, t);
                    var f = Nc
                      , g = Ld(t.containerInfo)
                      , x = f.focusedElem
                      , C = f.selectionRange;
                    if (g !== x && x && x.ownerDocument && zd(x.ownerDocument.documentElement, x)) {
                        if (C !== null && lu(x)) {
                            var j = C.start
                              , H = C.end;
                            if (H === void 0 && (H = j),
                            "selectionStart" in x)
                                x.selectionStart = j,
                                x.selectionEnd = Math.min(H, x.value.length);
                            else {
                                var X = x.ownerDocument || document
                                  , N = X && X.defaultView || window;
                                if (N.getSelection) {
                                    var U = N.getSelection()
                                      , et = x.textContent.length
                                      , lt = Math.min(C.start, et)
                                      , Dt = C.end === void 0 ? lt : Math.min(C.end, et);
                                    !U.extend && lt > Dt && (g = Dt,
                                    Dt = lt,
                                    lt = g);
                                    var D = Od(x, lt)
                                      , w = Od(x, Dt);
                                    if (D && w && (U.rangeCount !== 1 || U.anchorNode !== D.node || U.anchorOffset !== D.offset || U.focusNode !== w.node || U.focusOffset !== w.offset)) {
                                        var L = X.createRange();
                                        L.setStart(D.node, D.offset),
                                        U.removeAllRanges(),
                                        lt > Dt ? (U.addRange(L),
                                        U.extend(w.node, w.offset)) : (L.setEnd(w.node, w.offset),
                                        U.addRange(L))
                                    }
                                }
                            }
                        }
                        for (X = [],
                        U = x; U = U.parentNode; )
                            U.nodeType === 1 && X.push({
                                element: U,
                                left: U.scrollLeft,
                                top: U.scrollTop
                            });
                        for (typeof x.focus == "function" && x.focus(),
                        x = 0; x < X.length; x++) {
                            var G = X[x];
                            G.element.scrollLeft = G.left,
                            G.element.scrollTop = G.top
                        }
                    }
                    No = !!jc,
                    Nc = jc = null
                } finally {
                    Ct = u,
                    J.p = l,
                    B.T = a
                }
            }
            t.current = e,
            Wt = 2
        }
    }
    function Q0() {
        if (Wt === 2) {
            Wt = 0;
            var t = ei
              , e = Ra
              , a = (e.flags & 8772) !== 0;
            if ((e.subtreeFlags & 8772) !== 0 || a) {
                a = B.T,
                B.T = null;
                var l = J.p;
                J.p = 2;
                var u = Ct;
                Ct |= 4;
                try {
                    T0(t, e.alternate, e)
                } finally {
                    Ct = u,
                    J.p = l,
                    B.T = a
                }
            }
            Wt = 3
        }
    }
    function F0() {
        if (Wt === 4 || Wt === 3) {
            Wt = 0,
            Jt();
            var t = ei
              , e = Ra
              , a = zn
              , l = N0;
            (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Wt = 5 : (Wt = 0,
            Ra = ei = null,
            J0(t, t.pendingLanes));
            var u = t.pendingLanes;
            if (u === 0 && (ti = null),
            Gr(a),
            e = e.stateNode,
            xe && typeof xe.onCommitFiberRoot == "function")
                try {
                    xe.onCommitFiberRoot(ls, e, void 0, (e.current.flags & 128) === 128)
                } catch {}
            if (l !== null) {
                e = B.T,
                u = J.p,
                J.p = 2,
                B.T = null;
                try {
                    for (var f = t.onRecoverableError, g = 0; g < l.length; g++) {
                        var x = l[g];
                        f(x.value, {
                            componentStack: x.stack
                        })
                    }
                } finally {
                    B.T = e,
                    J.p = u
                }
            }
            (zn & 3) !== 0 && Ao(),
            an(t),
            u = t.pendingLanes,
            (a & 261930) !== 0 && (u & 42) !== 0 ? t === xc ? Gs++ : (Gs = 0,
            xc = t) : Gs = 0,
            Ys(0)
        }
    }
    function J0(t, e) {
        (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache,
        e != null && (t.pooledCache = null,
        Ts(e)))
    }
    function Ao() {
        return Z0(),
        Q0(),
        F0(),
        W0()
    }
    function W0() {
        if (Wt !== 5)
            return !1;
        var t = ei
          , e = Sc;
        Sc = 0;
        var a = Gr(zn)
          , l = B.T
          , u = J.p;
        try {
            J.p = 32 > a ? 32 : a,
            B.T = null,
            a = bc,
            bc = null;
            var f = ei
              , g = zn;
            if (Wt = 0,
            Ra = ei = null,
            zn = 0,
            (Ct & 6) !== 0)
                throw Error(o(331));
            var x = Ct;
            if (Ct |= 4,
            z0(f.current),
            R0(f, f.current, g, a),
            Ct = x,
            Ys(0, !1),
            xe && typeof xe.onPostCommitFiberRoot == "function")
                try {
                    xe.onPostCommitFiberRoot(ls, f)
                } catch {}
            return !0
        } finally {
            J.p = u,
            B.T = l,
            J0(t, e)
        }
    }
    function I0(t, e, a) {
        e = Ne(a, e),
        e = $u(t.stateNode, e, 2),
        t = Qn(t, e, 2),
        t !== null && (rs(t, 2),
        an(t))
    }
    function wt(t, e, a) {
        if (t.tag === 3)
            I0(t, t, a);
        else
            for (; e !== null; ) {
                if (e.tag === 3) {
                    I0(e, t, a);
                    break
                } else if (e.tag === 1) {
                    var l = e.stateNode;
                    if (typeof e.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (ti === null || !ti.has(l))) {
                        t = Ne(a, t),
                        a = $m(2),
                        l = Qn(e, a, 2),
                        l !== null && (t0(a, l, e, t),
                        rs(l, 2),
                        an(l));
                        break
                    }
                }
                e = e.return
            }
    }
    function Ec(t, e, a) {
        var l = t.pingCache;
        if (l === null) {
            l = t.pingCache = new U3;
            var u = new Set;
            l.set(e, u)
        } else
            u = l.get(e),
            u === void 0 && (u = new Set,
            l.set(e, u));
        u.has(a) || (yc = !0,
        u.add(a),
        t = k3.bind(null, t, e, a),
        e.then(t, t))
    }
    function k3(t, e, a) {
        var l = t.pingCache;
        l !== null && l.delete(e),
        t.pingedLanes |= t.suspendedLanes & a,
        t.warmLanes &= ~a,
        Ot === t && (St & a) === a && (Gt === 4 || Gt === 3 && (St & 62914560) === St && 300 > Ht() - go ? (Ct & 2) === 0 && Da(t, 0) : gc |= a,
        _a === St && (_a = 0)),
        an(t)
    }
    function $0(t, e) {
        e === 0 && (e = Zh()),
        t = wi(t, e),
        t !== null && (rs(t, e),
        an(t))
    }
    function X3(t) {
        var e = t.memoizedState
          , a = 0;
        e !== null && (a = e.retryLane),
        $0(t, a)
    }
    function P3(t, e) {
        var a = 0;
        switch (t.tag) {
        case 31:
        case 13:
            var l = t.stateNode
              , u = t.memoizedState;
            u !== null && (a = u.retryLane);
            break;
        case 19:
            l = t.stateNode;
            break;
        case 22:
            l = t.stateNode._retryCache;
            break;
        default:
            throw Error(o(314))
        }
        l !== null && l.delete(e),
        $0(t, a)
    }
    function K3(t, e) {
        return is(t, e)
    }
    var Eo = null
      , za = null
      , Cc = !1
      , Co = !1
      , Mc = !1
      , ii = 0;
    function an(t) {
        t !== za && t.next === null && (za === null ? Eo = za = t : za = za.next = t),
        Co = !0,
        Cc || (Cc = !0,
        Q3())
    }
    function Ys(t, e) {
        if (!Mc && Co) {
            Mc = !0;
            do
                for (var a = !1, l = Eo; l !== null; ) {
                    if (t !== 0) {
                        var u = l.pendingLanes;
                        if (u === 0)
                            var f = 0;
                        else {
                            var g = l.suspendedLanes
                              , x = l.pingedLanes;
                            f = (1 << 31 - Te(42 | t) + 1) - 1,
                            f &= u & ~(g & ~x),
                            f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0
                        }
                        f !== 0 && (a = !0,
                        ip(l, f))
                    } else
                        f = St,
                        f = _l(l, l === Ot ? f : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1),
                        (f & 3) === 0 || os(l, f) || (a = !0,
                        ip(l, f));
                    l = l.next
                }
            while (a);
            Mc = !1
        }
    }
    function Z3() {
        tp()
    }
    function tp() {
        Co = Cc = !1;
        var t = 0;
        ii !== 0 && aS() && (t = ii);
        for (var e = Ht(), a = null, l = Eo; l !== null; ) {
            var u = l.next
              , f = ep(l, e);
            f === 0 ? (l.next = null,
            a === null ? Eo = u : a.next = u,
            u === null && (za = a)) : (a = l,
            (t !== 0 || (f & 3) !== 0) && (Co = !0)),
            l = u
        }
        Wt !== 0 && Wt !== 5 || Ys(t),
        ii !== 0 && (ii = 0)
    }
    function ep(t, e) {
        for (var a = t.suspendedLanes, l = t.pingedLanes, u = t.expirationTimes, f = t.pendingLanes & -62914561; 0 < f; ) {
            var g = 31 - Te(f)
              , x = 1 << g
              , C = u[g];
            C === -1 ? ((x & a) === 0 || (x & l) !== 0) && (u[g] = b2(x, e)) : C <= e && (t.expiredLanes |= x),
            f &= ~x
        }
        if (e = Ot,
        a = St,
        a = _l(t, t === e ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1),
        l = t.callbackNode,
        a === 0 || t === e && (Mt === 2 || Mt === 9) || t.cancelPendingCommit !== null)
            return l !== null && l !== null && as(l),
            t.callbackNode = null,
            t.callbackPriority = 0;
        if ((a & 3) === 0 || os(t, a)) {
            if (e = a & -a,
            e === t.callbackPriority)
                return e;
            switch (l !== null && as(l),
            Gr(a)) {
            case 2:
            case 8:
                a = Ph;
                break;
            case 32:
                a = El;
                break;
            case 268435456:
                a = Kh;
                break;
            default:
                a = El
            }
            return l = np.bind(null, t),
            a = is(a, l),
            t.callbackPriority = e,
            t.callbackNode = a,
            e
        }
        return l !== null && l !== null && as(l),
        t.callbackPriority = 2,
        t.callbackNode = null,
        2
    }
    function np(t, e) {
        if (Wt !== 0 && Wt !== 5)
            return t.callbackNode = null,
            t.callbackPriority = 0,
            null;
        var a = t.callbackNode;
        if (Ao() && t.callbackNode !== a)
            return null;
        var l = St;
        return l = _l(t, t === Ot ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1),
        l === 0 ? null : (B0(t, l, e),
        ep(t, Ht()),
        t.callbackNode != null && t.callbackNode === a ? np.bind(null, t) : null)
    }
    function ip(t, e) {
        if (Ao())
            return null;
        B0(t, e, !0)
    }
    function Q3() {
        lS(function() {
            (Ct & 6) !== 0 ? is(ss, Z3) : tp()
        })
    }
    function wc() {
        if (ii === 0) {
            var t = ga;
            t === 0 && (t = Cl,
            Cl <<= 1,
            (Cl & 261888) === 0 && (Cl = 256)),
            ii = t
        }
        return ii
    }
    function ap(t) {
        return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : zl("" + t)
    }
    function sp(t, e) {
        var a = e.ownerDocument.createElement("input");
        return a.name = e.name,
        a.value = e.value,
        t.id && a.setAttribute("form", t.id),
        e.parentNode.insertBefore(a, e),
        t = new FormData(t),
        a.parentNode.removeChild(a),
        t
    }
    function F3(t, e, a, l, u) {
        if (e === "submit" && a && a.stateNode === u) {
            var f = ap((u[de] || null).action)
              , g = l.submitter;
            g && (e = (e = g[de] || null) ? ap(e.formAction) : g.getAttribute("formAction"),
            e !== null && (f = e,
            g = null));
            var x = new Vl("action","action",null,l,u);
            t.push({
                event: x,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (l.defaultPrevented) {
                            if (ii !== 0) {
                                var C = g ? sp(u, g) : new FormData(u);
                                Zu(a, {
                                    pending: !0,
                                    data: C,
                                    method: u.method,
                                    action: f
                                }, null, C)
                            }
                        } else
                            typeof f == "function" && (x.preventDefault(),
                            C = g ? sp(u, g) : new FormData(u),
                            Zu(a, {
                                pending: !0,
                                data: C,
                                method: u.method,
                                action: f
                            }, f, C))
                    },
                    currentTarget: u
                }]
            })
        }
    }
    for (var _c = 0; _c < cu.length; _c++) {
        var Rc = cu[_c]
          , J3 = Rc.toLowerCase()
          , W3 = Rc[0].toUpperCase() + Rc.slice(1);
        Pe(J3, "on" + W3)
    }
    Pe(Vd, "onAnimationEnd"),
    Pe(Bd, "onAnimationIteration"),
    Pe(Ud, "onAnimationStart"),
    Pe("dblclick", "onDoubleClick"),
    Pe("focusin", "onFocus"),
    Pe("focusout", "onBlur"),
    Pe(d3, "onTransitionRun"),
    Pe(m3, "onTransitionStart"),
    Pe(p3, "onTransitionCancel"),
    Pe(Hd, "onTransitionEnd"),
    ia("onMouseEnter", ["mouseout", "mouseover"]),
    ia("onMouseLeave", ["mouseout", "mouseover"]),
    ia("onPointerEnter", ["pointerout", "pointerover"]),
    ia("onPointerLeave", ["pointerout", "pointerover"]),
    Ai("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    Ai("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    Ai("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ai("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    Ai("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    Ai("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var ks = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , I3 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ks));
    function lp(t, e) {
        e = (e & 4) !== 0;
        for (var a = 0; a < t.length; a++) {
            var l = t[a]
              , u = l.event;
            l = l.listeners;
            t: {
                var f = void 0;
                if (e)
                    for (var g = l.length - 1; 0 <= g; g--) {
                        var x = l[g]
                          , C = x.instance
                          , j = x.currentTarget;
                        if (x = x.listener,
                        C !== f && u.isPropagationStopped())
                            break t;
                        f = x,
                        u.currentTarget = j;
                        try {
                            f(u)
                        } catch (H) {
                            Hl(H)
                        }
                        u.currentTarget = null,
                        f = C
                    }
                else
                    for (g = 0; g < l.length; g++) {
                        if (x = l[g],
                        C = x.instance,
                        j = x.currentTarget,
                        x = x.listener,
                        C !== f && u.isPropagationStopped())
                            break t;
                        f = x,
                        u.currentTarget = j;
                        try {
                            f(u)
                        } catch (H) {
                            Hl(H)
                        }
                        u.currentTarget = null,
                        f = C
                    }
            }
        }
    }
    function gt(t, e) {
        var a = e[Yr];
        a === void 0 && (a = e[Yr] = new Set);
        var l = t + "__bubble";
        a.has(l) || (op(e, t, 2, !1),
        a.add(l))
    }
    function Dc(t, e, a) {
        var l = 0;
        e && (l |= 4),
        op(a, t, l, e)
    }
    var Mo = "_reactListening" + Math.random().toString(36).slice(2);
    function Oc(t) {
        if (!t[Mo]) {
            t[Mo] = !0,
            td.forEach(function(a) {
                a !== "selectionchange" && (I3.has(a) || Dc(a, !1, t),
                Dc(a, !0, t))
            });
            var e = t.nodeType === 9 ? t : t.ownerDocument;
            e === null || e[Mo] || (e[Mo] = !0,
            Dc("selectionchange", !1, e))
        }
    }
    function op(t, e, a, l) {
        switch (Vp(e)) {
        case 2:
            var u = MS;
            break;
        case 8:
            u = wS;
            break;
        default:
            u = Kc
        }
        a = u.bind(null, e, a, t),
        u = void 0,
        !Wr || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (u = !0),
        l ? u !== void 0 ? t.addEventListener(e, a, {
            capture: !0,
            passive: u
        }) : t.addEventListener(e, a, !0) : u !== void 0 ? t.addEventListener(e, a, {
            passive: u
        }) : t.addEventListener(e, a, !1)
    }
    function zc(t, e, a, l, u) {
        var f = l;
        if ((e & 1) === 0 && (e & 2) === 0 && l !== null)
            t: for (; ; ) {
                if (l === null)
                    return;
                var g = l.tag;
                if (g === 3 || g === 4) {
                    var x = l.stateNode.containerInfo;
                    if (x === u)
                        break;
                    if (g === 4)
                        for (g = l.return; g !== null; ) {
                            var C = g.tag;
                            if ((C === 3 || C === 4) && g.stateNode.containerInfo === u)
                                return;
                            g = g.return
                        }
                    for (; x !== null; ) {
                        if (g = ta(x),
                        g === null)
                            return;
                        if (C = g.tag,
                        C === 5 || C === 6 || C === 26 || C === 27) {
                            l = f = g;
                            continue t
                        }
                        x = x.parentNode
                    }
                }
                l = l.return
            }
        hd(function() {
            var j = f
              , H = Fr(a)
              , X = [];
            t: {
                var N = qd.get(t);
                if (N !== void 0) {
                    var U = Vl
                      , et = t;
                    switch (t) {
                    case "keypress":
                        if (jl(a) === 0)
                            break t;
                    case "keydown":
                    case "keyup":
                        U = P2;
                        break;
                    case "focusin":
                        et = "focus",
                        U = eu;
                        break;
                    case "focusout":
                        et = "blur",
                        U = eu;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        U = eu;
                        break;
                    case "click":
                        if (a.button === 2)
                            break t;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        U = pd;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        U = L2;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        U = Q2;
                        break;
                    case Vd:
                    case Bd:
                    case Ud:
                        U = V2;
                        break;
                    case Hd:
                        U = J2;
                        break;
                    case "scroll":
                    case "scrollend":
                        U = O2;
                        break;
                    case "wheel":
                        U = I2;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        U = U2;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        U = gd;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        U = t3
                    }
                    var lt = (e & 4) !== 0
                      , Dt = !lt && (t === "scroll" || t === "scrollend")
                      , D = lt ? N !== null ? N + "Capture" : null : N;
                    lt = [];
                    for (var w = j, L; w !== null; ) {
                        var G = w;
                        if (L = G.stateNode,
                        G = G.tag,
                        G !== 5 && G !== 26 && G !== 27 || L === null || D === null || (G = fs(w, D),
                        G != null && lt.push(Xs(w, G, L))),
                        Dt)
                            break;
                        w = w.return
                    }
                    0 < lt.length && (N = new U(N,et,null,a,H),
                    X.push({
                        event: N,
                        listeners: lt
                    }))
                }
            }
            if ((e & 7) === 0) {
                t: {
                    if (N = t === "mouseover" || t === "pointerover",
                    U = t === "mouseout" || t === "pointerout",
                    N && a !== Qr && (et = a.relatedTarget || a.fromElement) && (ta(et) || et[$i]))
                        break t;
                    if ((U || N) && (N = H.window === H ? H : (N = H.ownerDocument) ? N.defaultView || N.parentWindow : window,
                    U ? (et = a.relatedTarget || a.toElement,
                    U = j,
                    et = et ? ta(et) : null,
                    et !== null && (Dt = c(et),
                    lt = et.tag,
                    et !== Dt || lt !== 5 && lt !== 27 && lt !== 6) && (et = null)) : (U = null,
                    et = j),
                    U !== et)) {
                        if (lt = pd,
                        G = "onMouseLeave",
                        D = "onMouseEnter",
                        w = "mouse",
                        (t === "pointerout" || t === "pointerover") && (lt = gd,
                        G = "onPointerLeave",
                        D = "onPointerEnter",
                        w = "pointer"),
                        Dt = U == null ? N : cs(U),
                        L = et == null ? N : cs(et),
                        N = new lt(G,w + "leave",U,a,H),
                        N.target = Dt,
                        N.relatedTarget = L,
                        G = null,
                        ta(H) === j && (lt = new lt(D,w + "enter",et,a,H),
                        lt.target = L,
                        lt.relatedTarget = Dt,
                        G = lt),
                        Dt = G,
                        U && et)
                            e: {
                                for (lt = $3,
                                D = U,
                                w = et,
                                L = 0,
                                G = D; G; G = lt(G))
                                    L++;
                                G = 0;
                                for (var st = w; st; st = lt(st))
                                    G++;
                                for (; 0 < L - G; )
                                    D = lt(D),
                                    L--;
                                for (; 0 < G - L; )
                                    w = lt(w),
                                    G--;
                                for (; L--; ) {
                                    if (D === w || w !== null && D === w.alternate) {
                                        lt = D;
                                        break e
                                    }
                                    D = lt(D),
                                    w = lt(w)
                                }
                                lt = null
                            }
                        else
                            lt = null;
                        U !== null && rp(X, N, U, lt, !1),
                        et !== null && Dt !== null && rp(X, Dt, et, lt, !0)
                    }
                }
                t: {
                    if (N = j ? cs(j) : window,
                    U = N.nodeName && N.nodeName.toLowerCase(),
                    U === "select" || U === "input" && N.type === "file")
                        var At = Cd;
                    else if (Ad(N))
                        if (Md)
                            At = c3;
                        else {
                            At = r3;
                            var at = o3
                        }
                    else
                        U = N.nodeName,
                        !U || U.toLowerCase() !== "input" || N.type !== "checkbox" && N.type !== "radio" ? j && Zr(j.elementType) && (At = Cd) : At = u3;
                    if (At && (At = At(t, j))) {
                        Ed(X, At, a, H);
                        break t
                    }
                    at && at(t, N, j),
                    t === "focusout" && j && N.type === "number" && j.memoizedProps.value != null && Kr(N, "number", N.value)
                }
                switch (at = j ? cs(j) : window,
                t) {
                case "focusin":
                    (Ad(at) || at.contentEditable === "true") && (ua = at,
                    ou = j,
                    Ss = null);
                    break;
                case "focusout":
                    Ss = ou = ua = null;
                    break;
                case "mousedown":
                    ru = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    ru = !1,
                    jd(X, a, H);
                    break;
                case "selectionchange":
                    if (h3)
                        break;
                case "keydown":
                case "keyup":
                    jd(X, a, H)
                }
                var mt;
                if (iu)
                    t: {
                        switch (t) {
                        case "compositionstart":
                            var bt = "onCompositionStart";
                            break t;
                        case "compositionend":
                            bt = "onCompositionEnd";
                            break t;
                        case "compositionupdate":
                            bt = "onCompositionUpdate";
                            break t
                        }
                        bt = void 0
                    }
                else
                    ra ? xd(t, a) && (bt = "onCompositionEnd") : t === "keydown" && a.keyCode === 229 && (bt = "onCompositionStart");
                bt && (vd && a.locale !== "ko" && (ra || bt !== "onCompositionStart" ? bt === "onCompositionEnd" && ra && (mt = dd()) : (Gn = H,
                Ir = "value" in Gn ? Gn.value : Gn.textContent,
                ra = !0)),
                at = wo(j, bt),
                0 < at.length && (bt = new yd(bt,t,null,a,H),
                X.push({
                    event: bt,
                    listeners: at
                }),
                mt ? bt.data = mt : (mt = Td(a),
                mt !== null && (bt.data = mt)))),
                (mt = n3 ? i3(t, a) : a3(t, a)) && (bt = wo(j, "onBeforeInput"),
                0 < bt.length && (at = new yd("onBeforeInput","beforeinput",null,a,H),
                X.push({
                    event: at,
                    listeners: bt
                }),
                at.data = mt)),
                F3(X, t, j, a, H)
            }
            lp(X, e)
        })
    }
    function Xs(t, e, a) {
        return {
            instance: t,
            listener: e,
            currentTarget: a
        }
    }
    function wo(t, e) {
        for (var a = e + "Capture", l = []; t !== null; ) {
            var u = t
              , f = u.stateNode;
            if (u = u.tag,
            u !== 5 && u !== 26 && u !== 27 || f === null || (u = fs(t, a),
            u != null && l.unshift(Xs(t, u, f)),
            u = fs(t, e),
            u != null && l.push(Xs(t, u, f))),
            t.tag === 3)
                return l;
            t = t.return
        }
        return []
    }
    function $3(t) {
        if (t === null)
            return null;
        do
            t = t.return;
        while (t && t.tag !== 5 && t.tag !== 27);
        return t || null
    }
    function rp(t, e, a, l, u) {
        for (var f = e._reactName, g = []; a !== null && a !== l; ) {
            var x = a
              , C = x.alternate
              , j = x.stateNode;
            if (x = x.tag,
            C !== null && C === l)
                break;
            x !== 5 && x !== 26 && x !== 27 || j === null || (C = j,
            u ? (j = fs(a, f),
            j != null && g.unshift(Xs(a, j, C))) : u || (j = fs(a, f),
            j != null && g.push(Xs(a, j, C)))),
            a = a.return
        }
        g.length !== 0 && t.push({
            event: e,
            listeners: g
        })
    }
    var tS = /\r\n?/g
      , eS = /\u0000|\uFFFD/g;
    function up(t) {
        return (typeof t == "string" ? t : "" + t).replace(tS, `
`).replace(eS, "")
    }
    function cp(t, e) {
        return e = up(e),
        up(t) === e
    }
    function Rt(t, e, a, l, u, f) {
        switch (a) {
        case "children":
            typeof l == "string" ? e === "body" || e === "textarea" && l === "" || sa(t, l) : (typeof l == "number" || typeof l == "bigint") && e !== "body" && sa(t, "" + l);
            break;
        case "className":
            Dl(t, "class", l);
            break;
        case "tabIndex":
            Dl(t, "tabindex", l);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            Dl(t, a, l);
            break;
        case "style":
            cd(t, l, f);
            break;
        case "data":
            if (e !== "object") {
                Dl(t, "data", l);
                break
            }
        case "src":
        case "href":
            if (l === "" && (e !== "a" || a !== "href")) {
                t.removeAttribute(a);
                break
            }
            if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
                t.removeAttribute(a);
                break
            }
            l = zl("" + l),
            t.setAttribute(a, l);
            break;
        case "action":
        case "formAction":
            if (typeof l == "function") {
                t.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break
            } else
                typeof f == "function" && (a === "formAction" ? (e !== "input" && Rt(t, e, "name", u.name, u, null),
                Rt(t, e, "formEncType", u.formEncType, u, null),
                Rt(t, e, "formMethod", u.formMethod, u, null),
                Rt(t, e, "formTarget", u.formTarget, u, null)) : (Rt(t, e, "encType", u.encType, u, null),
                Rt(t, e, "method", u.method, u, null),
                Rt(t, e, "target", u.target, u, null)));
            if (l == null || typeof l == "symbol" || typeof l == "boolean") {
                t.removeAttribute(a);
                break
            }
            l = zl("" + l),
            t.setAttribute(a, l);
            break;
        case "onClick":
            l != null && (t.onclick = gn);
            break;
        case "onScroll":
            l != null && gt("scroll", t);
            break;
        case "onScrollEnd":
            l != null && gt("scrollend", t);
            break;
        case "dangerouslySetInnerHTML":
            if (l != null) {
                if (typeof l != "object" || !("__html" in l))
                    throw Error(o(61));
                if (a = l.__html,
                a != null) {
                    if (u.children != null)
                        throw Error(o(60));
                    t.innerHTML = a
                }
            }
            break;
        case "multiple":
            t.multiple = l && typeof l != "function" && typeof l != "symbol";
            break;
        case "muted":
            t.muted = l && typeof l != "function" && typeof l != "symbol";
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
            break;
        case "autoFocus":
            break;
        case "xlinkHref":
            if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
                t.removeAttribute("xlink:href");
                break
            }
            a = zl("" + l),
            t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(a, "" + l) : t.removeAttribute(a);
            break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
            l && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(a, "") : t.removeAttribute(a);
            break;
        case "capture":
        case "download":
            l === !0 ? t.setAttribute(a, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(a, l) : t.removeAttribute(a);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? t.setAttribute(a, l) : t.removeAttribute(a);
            break;
        case "rowSpan":
        case "start":
            l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? t.removeAttribute(a) : t.setAttribute(a, l);
            break;
        case "popover":
            gt("beforetoggle", t),
            gt("toggle", t),
            Rl(t, "popover", l);
            break;
        case "xlinkActuate":
            yn(t, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
            break;
        case "xlinkArcrole":
            yn(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
            break;
        case "xlinkRole":
            yn(t, "http://www.w3.org/1999/xlink", "xlink:role", l);
            break;
        case "xlinkShow":
            yn(t, "http://www.w3.org/1999/xlink", "xlink:show", l);
            break;
        case "xlinkTitle":
            yn(t, "http://www.w3.org/1999/xlink", "xlink:title", l);
            break;
        case "xlinkType":
            yn(t, "http://www.w3.org/1999/xlink", "xlink:type", l);
            break;
        case "xmlBase":
            yn(t, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
            break;
        case "xmlLang":
            yn(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
            break;
        case "xmlSpace":
            yn(t, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
            break;
        case "is":
            Rl(t, "is", l);
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = R2.get(a) || a,
            Rl(t, a, l))
        }
    }
    function Lc(t, e, a, l, u, f) {
        switch (a) {
        case "style":
            cd(t, l, f);
            break;
        case "dangerouslySetInnerHTML":
            if (l != null) {
                if (typeof l != "object" || !("__html" in l))
                    throw Error(o(61));
                if (a = l.__html,
                a != null) {
                    if (u.children != null)
                        throw Error(o(60));
                    t.innerHTML = a
                }
            }
            break;
        case "children":
            typeof l == "string" ? sa(t, l) : (typeof l == "number" || typeof l == "bigint") && sa(t, "" + l);
            break;
        case "onScroll":
            l != null && gt("scroll", t);
            break;
        case "onScrollEnd":
            l != null && gt("scrollend", t);
            break;
        case "onClick":
            l != null && (t.onclick = gn);
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            if (!ed.hasOwnProperty(a))
                t: {
                    if (a[0] === "o" && a[1] === "n" && (u = a.endsWith("Capture"),
                    e = a.slice(2, u ? a.length - 7 : void 0),
                    f = t[de] || null,
                    f = f != null ? f[a] : null,
                    typeof f == "function" && t.removeEventListener(e, f, u),
                    typeof l == "function")) {
                        typeof f != "function" && f !== null && (a in t ? t[a] = null : t.hasAttribute(a) && t.removeAttribute(a)),
                        t.addEventListener(e, l, u);
                        break t
                    }
                    a in t ? t[a] = l : l === !0 ? t.setAttribute(a, "") : Rl(t, a, l)
                }
        }
    }
    function le(t, e, a) {
        switch (e) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "img":
            gt("error", t),
            gt("load", t);
            var l = !1, u = !1, f;
            for (f in a)
                if (a.hasOwnProperty(f)) {
                    var g = a[f];
                    if (g != null)
                        switch (f) {
                        case "src":
                            l = !0;
                            break;
                        case "srcSet":
                            u = !0;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(o(137, e));
                        default:
                            Rt(t, e, f, g, a, null)
                        }
                }
            u && Rt(t, e, "srcSet", a.srcSet, a, null),
            l && Rt(t, e, "src", a.src, a, null);
            return;
        case "input":
            gt("invalid", t);
            var x = f = g = u = null
              , C = null
              , j = null;
            for (l in a)
                if (a.hasOwnProperty(l)) {
                    var H = a[l];
                    if (H != null)
                        switch (l) {
                        case "name":
                            u = H;
                            break;
                        case "type":
                            g = H;
                            break;
                        case "checked":
                            C = H;
                            break;
                        case "defaultChecked":
                            j = H;
                            break;
                        case "value":
                            f = H;
                            break;
                        case "defaultValue":
                            x = H;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (H != null)
                                throw Error(o(137, e));
                            break;
                        default:
                            Rt(t, e, l, H, a, null)
                        }
                }
            ld(t, f, x, C, j, g, u, !1);
            return;
        case "select":
            gt("invalid", t),
            l = g = f = null;
            for (u in a)
                if (a.hasOwnProperty(u) && (x = a[u],
                x != null))
                    switch (u) {
                    case "value":
                        f = x;
                        break;
                    case "defaultValue":
                        g = x;
                        break;
                    case "multiple":
                        l = x;
                    default:
                        Rt(t, e, u, x, a, null)
                    }
            e = f,
            a = g,
            t.multiple = !!l,
            e != null ? aa(t, !!l, e, !1) : a != null && aa(t, !!l, a, !0);
            return;
        case "textarea":
            gt("invalid", t),
            f = u = l = null;
            for (g in a)
                if (a.hasOwnProperty(g) && (x = a[g],
                x != null))
                    switch (g) {
                    case "value":
                        l = x;
                        break;
                    case "defaultValue":
                        u = x;
                        break;
                    case "children":
                        f = x;
                        break;
                    case "dangerouslySetInnerHTML":
                        if (x != null)
                            throw Error(o(91));
                        break;
                    default:
                        Rt(t, e, g, x, a, null)
                    }
            rd(t, l, u, f);
            return;
        case "option":
            for (C in a)
                if (a.hasOwnProperty(C) && (l = a[C],
                l != null))
                    switch (C) {
                    case "selected":
                        t.selected = l && typeof l != "function" && typeof l != "symbol";
                        break;
                    default:
                        Rt(t, e, C, l, a, null)
                    }
            return;
        case "dialog":
            gt("beforetoggle", t),
            gt("toggle", t),
            gt("cancel", t),
            gt("close", t);
            break;
        case "iframe":
        case "object":
            gt("load", t);
            break;
        case "video":
        case "audio":
            for (l = 0; l < ks.length; l++)
                gt(ks[l], t);
            break;
        case "image":
            gt("error", t),
            gt("load", t);
            break;
        case "details":
            gt("toggle", t);
            break;
        case "embed":
        case "source":
        case "link":
            gt("error", t),
            gt("load", t);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
            for (j in a)
                if (a.hasOwnProperty(j) && (l = a[j],
                l != null))
                    switch (j) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(o(137, e));
                    default:
                        Rt(t, e, j, l, a, null)
                    }
            return;
        default:
            if (Zr(e)) {
                for (H in a)
                    a.hasOwnProperty(H) && (l = a[H],
                    l !== void 0 && Lc(t, e, H, l, a, void 0));
                return
            }
        }
        for (x in a)
            a.hasOwnProperty(x) && (l = a[x],
            l != null && Rt(t, e, x, l, a, null))
    }
    function nS(t, e, a, l) {
        switch (e) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "input":
            var u = null
              , f = null
              , g = null
              , x = null
              , C = null
              , j = null
              , H = null;
            for (U in a) {
                var X = a[U];
                if (a.hasOwnProperty(U) && X != null)
                    switch (U) {
                    case "checked":
                        break;
                    case "value":
                        break;
                    case "defaultValue":
                        C = X;
                    default:
                        l.hasOwnProperty(U) || Rt(t, e, U, null, l, X)
                    }
            }
            for (var N in l) {
                var U = l[N];
                if (X = a[N],
                l.hasOwnProperty(N) && (U != null || X != null))
                    switch (N) {
                    case "type":
                        f = U;
                        break;
                    case "name":
                        u = U;
                        break;
                    case "checked":
                        j = U;
                        break;
                    case "defaultChecked":
                        H = U;
                        break;
                    case "value":
                        g = U;
                        break;
                    case "defaultValue":
                        x = U;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (U != null)
                            throw Error(o(137, e));
                        break;
                    default:
                        U !== X && Rt(t, e, N, U, l, X)
                    }
            }
            Pr(t, g, x, C, j, H, f, u);
            return;
        case "select":
            U = g = x = N = null;
            for (f in a)
                if (C = a[f],
                a.hasOwnProperty(f) && C != null)
                    switch (f) {
                    case "value":
                        break;
                    case "multiple":
                        U = C;
                    default:
                        l.hasOwnProperty(f) || Rt(t, e, f, null, l, C)
                    }
            for (u in l)
                if (f = l[u],
                C = a[u],
                l.hasOwnProperty(u) && (f != null || C != null))
                    switch (u) {
                    case "value":
                        N = f;
                        break;
                    case "defaultValue":
                        x = f;
                        break;
                    case "multiple":
                        g = f;
                    default:
                        f !== C && Rt(t, e, u, f, l, C)
                    }
            e = x,
            a = g,
            l = U,
            N != null ? aa(t, !!a, N, !1) : !!l != !!a && (e != null ? aa(t, !!a, e, !0) : aa(t, !!a, a ? [] : "", !1));
            return;
        case "textarea":
            U = N = null;
            for (x in a)
                if (u = a[x],
                a.hasOwnProperty(x) && u != null && !l.hasOwnProperty(x))
                    switch (x) {
                    case "value":
                        break;
                    case "children":
                        break;
                    default:
                        Rt(t, e, x, null, l, u)
                    }
            for (g in l)
                if (u = l[g],
                f = a[g],
                l.hasOwnProperty(g) && (u != null || f != null))
                    switch (g) {
                    case "value":
                        N = u;
                        break;
                    case "defaultValue":
                        U = u;
                        break;
                    case "children":
                        break;
                    case "dangerouslySetInnerHTML":
                        if (u != null)
                            throw Error(o(91));
                        break;
                    default:
                        u !== f && Rt(t, e, g, u, l, f)
                    }
            od(t, N, U);
            return;
        case "option":
            for (var et in a)
                if (N = a[et],
                a.hasOwnProperty(et) && N != null && !l.hasOwnProperty(et))
                    switch (et) {
                    case "selected":
                        t.selected = !1;
                        break;
                    default:
                        Rt(t, e, et, null, l, N)
                    }
            for (C in l)
                if (N = l[C],
                U = a[C],
                l.hasOwnProperty(C) && N !== U && (N != null || U != null))
                    switch (C) {
                    case "selected":
                        t.selected = N && typeof N != "function" && typeof N != "symbol";
                        break;
                    default:
                        Rt(t, e, C, N, l, U)
                    }
            return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
            for (var lt in a)
                N = a[lt],
                a.hasOwnProperty(lt) && N != null && !l.hasOwnProperty(lt) && Rt(t, e, lt, null, l, N);
            for (j in l)
                if (N = l[j],
                U = a[j],
                l.hasOwnProperty(j) && N !== U && (N != null || U != null))
                    switch (j) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (N != null)
                            throw Error(o(137, e));
                        break;
                    default:
                        Rt(t, e, j, N, l, U)
                    }
            return;
        default:
            if (Zr(e)) {
                for (var Dt in a)
                    N = a[Dt],
                    a.hasOwnProperty(Dt) && N !== void 0 && !l.hasOwnProperty(Dt) && Lc(t, e, Dt, void 0, l, N);
                for (H in l)
                    N = l[H],
                    U = a[H],
                    !l.hasOwnProperty(H) || N === U || N === void 0 && U === void 0 || Lc(t, e, H, N, l, U);
                return
            }
        }
        for (var D in a)
            N = a[D],
            a.hasOwnProperty(D) && N != null && !l.hasOwnProperty(D) && Rt(t, e, D, null, l, N);
        for (X in l)
            N = l[X],
            U = a[X],
            !l.hasOwnProperty(X) || N === U || N == null && U == null || Rt(t, e, X, N, l, U)
    }
    function fp(t) {
        switch (t) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
            return !0;
        default:
            return !1
        }
    }
    function iS() {
        if (typeof performance.getEntriesByType == "function") {
            for (var t = 0, e = 0, a = performance.getEntriesByType("resource"), l = 0; l < a.length; l++) {
                var u = a[l]
                  , f = u.transferSize
                  , g = u.initiatorType
                  , x = u.duration;
                if (f && x && fp(g)) {
                    for (g = 0,
                    x = u.responseEnd,
                    l += 1; l < a.length; l++) {
                        var C = a[l]
                          , j = C.startTime;
                        if (j > x)
                            break;
                        var H = C.transferSize
                          , X = C.initiatorType;
                        H && fp(X) && (C = C.responseEnd,
                        g += H * (C < x ? 1 : (x - j) / (C - j)))
                    }
                    if (--l,
                    e += 8 * (f + g) / (u.duration / 1e3),
                    t++,
                    10 < t)
                        break
                }
            }
            if (0 < t)
                return e / t / 1e6
        }
        return navigator.connection && (t = navigator.connection.downlink,
        typeof t == "number") ? t : 5
    }
    var jc = null
      , Nc = null;
    function _o(t) {
        return t.nodeType === 9 ? t : t.ownerDocument
    }
    function hp(t) {
        switch (t) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0
        }
    }
    function dp(t, e) {
        if (t === 0)
            switch (e) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
            }
        return t === 1 && e === "foreignObject" ? 0 : t
    }
    function Vc(t, e) {
        return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
    }
    var Bc = null;
    function aS() {
        var t = window.event;
        return t && t.type === "popstate" ? t === Bc ? !1 : (Bc = t,
        !0) : (Bc = null,
        !1)
    }
    var mp = typeof setTimeout == "function" ? setTimeout : void 0
      , sS = typeof clearTimeout == "function" ? clearTimeout : void 0
      , pp = typeof Promise == "function" ? Promise : void 0
      , lS = typeof queueMicrotask == "function" ? queueMicrotask : typeof pp < "u" ? function(t) {
        return pp.resolve(null).then(t).catch(oS)
    }
    : mp;
    function oS(t) {
        setTimeout(function() {
            throw t
        })
    }
    function ai(t) {
        return t === "head"
    }
    function yp(t, e) {
        var a = e
          , l = 0;
        do {
            var u = a.nextSibling;
            if (t.removeChild(a),
            u && u.nodeType === 8)
                if (a = u.data,
                a === "/$" || a === "/&") {
                    if (l === 0) {
                        t.removeChild(u),
                        Va(e);
                        return
                    }
                    l--
                } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
                    l++;
                else if (a === "html")
                    Ps(t.ownerDocument.documentElement);
                else if (a === "head") {
                    a = t.ownerDocument.head,
                    Ps(a);
                    for (var f = a.firstChild; f; ) {
                        var g = f.nextSibling
                          , x = f.nodeName;
                        f[us] || x === "SCRIPT" || x === "STYLE" || x === "LINK" && f.rel.toLowerCase() === "stylesheet" || a.removeChild(f),
                        f = g
                    }
                } else
                    a === "body" && Ps(t.ownerDocument.body);
            a = u
        } while (a);
        Va(e)
    }
    function gp(t, e) {
        var a = t;
        t = 0;
        do {
            var l = a.nextSibling;
            if (a.nodeType === 1 ? e ? (a._stashedDisplay = a.style.display,
            a.style.display = "none") : (a.style.display = a._stashedDisplay || "",
            a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (e ? (a._stashedText = a.nodeValue,
            a.nodeValue = "") : a.nodeValue = a._stashedText || ""),
            l && l.nodeType === 8)
                if (a = l.data,
                a === "/$") {
                    if (t === 0)
                        break;
                    t--
                } else
                    a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || t++;
            a = l
        } while (a)
    }
    function Uc(t) {
        var e = t.firstChild;
        for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
            var a = e;
            switch (e = e.nextSibling,
            a.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                Uc(a),
                kr(a);
                continue;
            case "SCRIPT":
            case "STYLE":
                continue;
            case "LINK":
                if (a.rel.toLowerCase() === "stylesheet")
                    continue
            }
            t.removeChild(a)
        }
    }
    function rS(t, e, a, l) {
        for (; t.nodeType === 1; ) {
            var u = a;
            if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
                if (!l && (t.nodeName !== "INPUT" || t.type !== "hidden"))
                    break
            } else if (l) {
                if (!t[us])
                    switch (e) {
                    case "meta":
                        if (!t.hasAttribute("itemprop"))
                            break;
                        return t;
                    case "link":
                        if (f = t.getAttribute("rel"),
                        f === "stylesheet" && t.hasAttribute("data-precedence"))
                            break;
                        if (f !== u.rel || t.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || t.getAttribute("title") !== (u.title == null ? null : u.title))
                            break;
                        return t;
                    case "style":
                        if (t.hasAttribute("data-precedence"))
                            break;
                        return t;
                    case "script":
                        if (f = t.getAttribute("src"),
                        (f !== (u.src == null ? null : u.src) || t.getAttribute("type") !== (u.type == null ? null : u.type) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && f && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                            break;
                        return t;
                    default:
                        return t
                    }
            } else if (e === "input" && t.type === "hidden") {
                var f = u.name == null ? null : "" + u.name;
                if (u.type === "hidden" && t.getAttribute("name") === f)
                    return t
            } else
                return t;
            if (t = qe(t.nextSibling),
            t === null)
                break
        }
        return null
    }
    function uS(t, e, a) {
        if (e === "")
            return null;
        for (; t.nodeType !== 3; )
            if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !a || (t = qe(t.nextSibling),
            t === null))
                return null;
        return t
    }
    function vp(t, e) {
        for (; t.nodeType !== 8; )
            if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = qe(t.nextSibling),
            t === null))
                return null;
        return t
    }
    function Hc(t) {
        return t.data === "$?" || t.data === "$~"
    }
    function qc(t) {
        return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading"
    }
    function cS(t, e) {
        var a = t.ownerDocument;
        if (t.data === "$~")
            t._reactRetry = e;
        else if (t.data !== "$?" || a.readyState !== "loading")
            e();
        else {
            var l = function() {
                e(),
                a.removeEventListener("DOMContentLoaded", l)
            };
            a.addEventListener("DOMContentLoaded", l),
            t._reactRetry = l
        }
    }
    function qe(t) {
        for (; t != null; t = t.nextSibling) {
            var e = t.nodeType;
            if (e === 1 || e === 3)
                break;
            if (e === 8) {
                if (e = t.data,
                e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
                    break;
                if (e === "/$" || e === "/&")
                    return null
            }
        }
        return t
    }
    var Gc = null;
    function Sp(t) {
        t = t.nextSibling;
        for (var e = 0; t; ) {
            if (t.nodeType === 8) {
                var a = t.data;
                if (a === "/$" || a === "/&") {
                    if (e === 0)
                        return qe(t.nextSibling);
                    e--
                } else
                    a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || e++
            }
            t = t.nextSibling
        }
        return null
    }
    function bp(t) {
        t = t.previousSibling;
        for (var e = 0; t; ) {
            if (t.nodeType === 8) {
                var a = t.data;
                if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
                    if (e === 0)
                        return t;
                    e--
                } else
                    a !== "/$" && a !== "/&" || e++
            }
            t = t.previousSibling
        }
        return null
    }
    function xp(t, e, a) {
        switch (e = _o(a),
        t) {
        case "html":
            if (t = e.documentElement,
            !t)
                throw Error(o(452));
            return t;
        case "head":
            if (t = e.head,
            !t)
                throw Error(o(453));
            return t;
        case "body":
            if (t = e.body,
            !t)
                throw Error(o(454));
            return t;
        default:
            throw Error(o(451))
        }
    }
    function Ps(t) {
        for (var e = t.attributes; e.length; )
            t.removeAttributeNode(e[0]);
        kr(t)
    }
    var Ge = new Map
      , Tp = new Set;
    function Ro(t) {
        return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument
    }
    var Ln = J.d;
    J.d = {
        f: fS,
        r: hS,
        D: dS,
        C: mS,
        L: pS,
        m: yS,
        X: vS,
        S: gS,
        M: SS
    };
    function fS() {
        var t = Ln.f()
          , e = bo();
        return t || e
    }
    function hS(t) {
        var e = ea(t);
        e !== null && e.tag === 5 && e.type === "form" ? Hm(e) : Ln.r(t)
    }
    var La = typeof document > "u" ? null : document;
    function Ap(t, e, a) {
        var l = La;
        if (l && typeof e == "string" && e) {
            var u = Le(e);
            u = 'link[rel="' + t + '"][href="' + u + '"]',
            typeof a == "string" && (u += '[crossorigin="' + a + '"]'),
            Tp.has(u) || (Tp.add(u),
            t = {
                rel: t,
                crossOrigin: a,
                href: e
            },
            l.querySelector(u) === null && (e = l.createElement("link"),
            le(e, "link", t),
            $t(e),
            l.head.appendChild(e)))
        }
    }
    function dS(t) {
        Ln.D(t),
        Ap("dns-prefetch", t, null)
    }
    function mS(t, e) {
        Ln.C(t, e),
        Ap("preconnect", t, e)
    }
    function pS(t, e, a) {
        Ln.L(t, e, a);
        var l = La;
        if (l && t && e) {
            var u = 'link[rel="preload"][as="' + Le(e) + '"]';
            e === "image" && a && a.imageSrcSet ? (u += '[imagesrcset="' + Le(a.imageSrcSet) + '"]',
            typeof a.imageSizes == "string" && (u += '[imagesizes="' + Le(a.imageSizes) + '"]')) : u += '[href="' + Le(t) + '"]';
            var f = u;
            switch (e) {
            case "style":
                f = ja(t);
                break;
            case "script":
                f = Na(t)
            }
            Ge.has(f) || (t = y({
                rel: "preload",
                href: e === "image" && a && a.imageSrcSet ? void 0 : t,
                as: e
            }, a),
            Ge.set(f, t),
            l.querySelector(u) !== null || e === "style" && l.querySelector(Ks(f)) || e === "script" && l.querySelector(Zs(f)) || (e = l.createElement("link"),
            le(e, "link", t),
            $t(e),
            l.head.appendChild(e)))
        }
    }
    function yS(t, e) {
        Ln.m(t, e);
        var a = La;
        if (a && t) {
            var l = e && typeof e.as == "string" ? e.as : "script"
              , u = 'link[rel="modulepreload"][as="' + Le(l) + '"][href="' + Le(t) + '"]'
              , f = u;
            switch (l) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                f = Na(t)
            }
            if (!Ge.has(f) && (t = y({
                rel: "modulepreload",
                href: t
            }, e),
            Ge.set(f, t),
            a.querySelector(u) === null)) {
                switch (l) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (a.querySelector(Zs(f)))
                        return
                }
                l = a.createElement("link"),
                le(l, "link", t),
                $t(l),
                a.head.appendChild(l)
            }
        }
    }
    function gS(t, e, a) {
        Ln.S(t, e, a);
        var l = La;
        if (l && t) {
            var u = na(l).hoistableStyles
              , f = ja(t);
            e = e || "default";
            var g = u.get(f);
            if (!g) {
                var x = {
                    loading: 0,
                    preload: null
                };
                if (g = l.querySelector(Ks(f)))
                    x.loading = 5;
                else {
                    t = y({
                        rel: "stylesheet",
                        href: t,
                        "data-precedence": e
                    }, a),
                    (a = Ge.get(f)) && Yc(t, a);
                    var C = g = l.createElement("link");
                    $t(C),
                    le(C, "link", t),
                    C._p = new Promise(function(j, H) {
                        C.onload = j,
                        C.onerror = H
                    }
                    ),
                    C.addEventListener("load", function() {
                        x.loading |= 1
                    }),
                    C.addEventListener("error", function() {
                        x.loading |= 2
                    }),
                    x.loading |= 4,
                    Do(g, e, l)
                }
                g = {
                    type: "stylesheet",
                    instance: g,
                    count: 1,
                    state: x
                },
                u.set(f, g)
            }
        }
    }
    function vS(t, e) {
        Ln.X(t, e);
        var a = La;
        if (a && t) {
            var l = na(a).hoistableScripts
              , u = Na(t)
              , f = l.get(u);
            f || (f = a.querySelector(Zs(u)),
            f || (t = y({
                src: t,
                async: !0
            }, e),
            (e = Ge.get(u)) && kc(t, e),
            f = a.createElement("script"),
            $t(f),
            le(f, "link", t),
            a.head.appendChild(f)),
            f = {
                type: "script",
                instance: f,
                count: 1,
                state: null
            },
            l.set(u, f))
        }
    }
    function SS(t, e) {
        Ln.M(t, e);
        var a = La;
        if (a && t) {
            var l = na(a).hoistableScripts
              , u = Na(t)
              , f = l.get(u);
            f || (f = a.querySelector(Zs(u)),
            f || (t = y({
                src: t,
                async: !0,
                type: "module"
            }, e),
            (e = Ge.get(u)) && kc(t, e),
            f = a.createElement("script"),
            $t(f),
            le(f, "link", t),
            a.head.appendChild(f)),
            f = {
                type: "script",
                instance: f,
                count: 1,
                state: null
            },
            l.set(u, f))
        }
    }
    function Ep(t, e, a, l) {
        var u = (u = ft.current) ? Ro(u) : null;
        if (!u)
            throw Error(o(446));
        switch (t) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof a.precedence == "string" && typeof a.href == "string" ? (e = ja(a.href),
            a = na(u).hoistableStyles,
            l = a.get(e),
            l || (l = {
                type: "style",
                instance: null,
                count: 0,
                state: null
            },
            a.set(e, l)),
            l) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        case "link":
            if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
                t = ja(a.href);
                var f = na(u).hoistableStyles
                  , g = f.get(t);
                if (g || (u = u.ownerDocument || u,
                g = {
                    type: "stylesheet",
                    instance: null,
                    count: 0,
                    state: {
                        loading: 0,
                        preload: null
                    }
                },
                f.set(t, g),
                (f = u.querySelector(Ks(t))) && !f._p && (g.instance = f,
                g.state.loading = 5),
                Ge.has(t) || (a = {
                    rel: "preload",
                    as: "style",
                    href: a.href,
                    crossOrigin: a.crossOrigin,
                    integrity: a.integrity,
                    media: a.media,
                    hrefLang: a.hrefLang,
                    referrerPolicy: a.referrerPolicy
                },
                Ge.set(t, a),
                f || bS(u, t, a, g.state))),
                e && l === null)
                    throw Error(o(528, ""));
                return g
            }
            if (e && l !== null)
                throw Error(o(529, ""));
            return null;
        case "script":
            return e = a.async,
            a = a.src,
            typeof a == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = Na(a),
            a = na(u).hoistableScripts,
            l = a.get(e),
            l || (l = {
                type: "script",
                instance: null,
                count: 0,
                state: null
            },
            a.set(e, l)),
            l) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        default:
            throw Error(o(444, t))
        }
    }
    function ja(t) {
        return 'href="' + Le(t) + '"'
    }
    function Ks(t) {
        return 'link[rel="stylesheet"][' + t + "]"
    }
    function Cp(t) {
        return y({}, t, {
            "data-precedence": t.precedence,
            precedence: null
        })
    }
    function bS(t, e, a, l) {
        t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? l.loading = 1 : (e = t.createElement("link"),
        l.preload = e,
        e.addEventListener("load", function() {
            return l.loading |= 1
        }),
        e.addEventListener("error", function() {
            return l.loading |= 2
        }),
        le(e, "link", a),
        $t(e),
        t.head.appendChild(e))
    }
    function Na(t) {
        return '[src="' + Le(t) + '"]'
    }
    function Zs(t) {
        return "script[async]" + t
    }
    function Mp(t, e, a) {
        if (e.count++,
        e.instance === null)
            switch (e.type) {
            case "style":
                var l = t.querySelector('style[data-href~="' + Le(a.href) + '"]');
                if (l)
                    return e.instance = l,
                    $t(l),
                    l;
                var u = y({}, a, {
                    "data-href": a.href,
                    "data-precedence": a.precedence,
                    href: null,
                    precedence: null
                });
                return l = (t.ownerDocument || t).createElement("style"),
                $t(l),
                le(l, "style", u),
                Do(l, a.precedence, t),
                e.instance = l;
            case "stylesheet":
                u = ja(a.href);
                var f = t.querySelector(Ks(u));
                if (f)
                    return e.state.loading |= 4,
                    e.instance = f,
                    $t(f),
                    f;
                l = Cp(a),
                (u = Ge.get(u)) && Yc(l, u),
                f = (t.ownerDocument || t).createElement("link"),
                $t(f);
                var g = f;
                return g._p = new Promise(function(x, C) {
                    g.onload = x,
                    g.onerror = C
                }
                ),
                le(f, "link", l),
                e.state.loading |= 4,
                Do(f, a.precedence, t),
                e.instance = f;
            case "script":
                return f = Na(a.src),
                (u = t.querySelector(Zs(f))) ? (e.instance = u,
                $t(u),
                u) : (l = a,
                (u = Ge.get(f)) && (l = y({}, a),
                kc(l, u)),
                t = t.ownerDocument || t,
                u = t.createElement("script"),
                $t(u),
                le(u, "link", l),
                t.head.appendChild(u),
                e.instance = u);
            case "void":
                return null;
            default:
                throw Error(o(443, e.type))
            }
        else
            e.type === "stylesheet" && (e.state.loading & 4) === 0 && (l = e.instance,
            e.state.loading |= 4,
            Do(l, a.precedence, t));
        return e.instance
    }
    function Do(t, e, a) {
        for (var l = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), u = l.length ? l[l.length - 1] : null, f = u, g = 0; g < l.length; g++) {
            var x = l[g];
            if (x.dataset.precedence === e)
                f = x;
            else if (f !== u)
                break
        }
        f ? f.parentNode.insertBefore(t, f.nextSibling) : (e = a.nodeType === 9 ? a.head : a,
        e.insertBefore(t, e.firstChild))
    }
    function Yc(t, e) {
        t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
        t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
        t.title == null && (t.title = e.title)
    }
    function kc(t, e) {
        t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
        t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
        t.integrity == null && (t.integrity = e.integrity)
    }
    var Oo = null;
    function wp(t, e, a) {
        if (Oo === null) {
            var l = new Map
              , u = Oo = new Map;
            u.set(a, l)
        } else
            u = Oo,
            l = u.get(a),
            l || (l = new Map,
            u.set(a, l));
        if (l.has(t))
            return l;
        for (l.set(t, null),
        a = a.getElementsByTagName(t),
        u = 0; u < a.length; u++) {
            var f = a[u];
            if (!(f[us] || f[ne] || t === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== "http://www.w3.org/2000/svg") {
                var g = f.getAttribute(e) || "";
                g = t + g;
                var x = l.get(g);
                x ? x.push(f) : l.set(g, [f])
            }
        }
        return l
    }
    function _p(t, e, a) {
        t = t.ownerDocument || t,
        t.head.insertBefore(a, e === "title" ? t.querySelector("head > title") : null)
    }
    function xS(t, e, a) {
        if (a === 1 || e.itemProp != null)
            return !1;
        switch (t) {
        case "meta":
        case "title":
            return !0;
        case "style":
            if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
                break;
            return !0;
        case "link":
            if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
                break;
            switch (e.rel) {
            case "stylesheet":
                return t = e.disabled,
                typeof e.precedence == "string" && t == null;
            default:
                return !0
            }
        case "script":
            if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
                return !0
        }
        return !1
    }
    function Rp(t) {
        return !(t.type === "stylesheet" && (t.state.loading & 3) === 0)
    }
    function TS(t, e, a, l) {
        if (a.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (a.state.loading & 4) === 0) {
            if (a.instance === null) {
                var u = ja(l.href)
                  , f = e.querySelector(Ks(u));
                if (f) {
                    e = f._p,
                    e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++,
                    t = zo.bind(t),
                    e.then(t, t)),
                    a.state.loading |= 4,
                    a.instance = f,
                    $t(f);
                    return
                }
                f = e.ownerDocument || e,
                l = Cp(l),
                (u = Ge.get(u)) && Yc(l, u),
                f = f.createElement("link"),
                $t(f);
                var g = f;
                g._p = new Promise(function(x, C) {
                    g.onload = x,
                    g.onerror = C
                }
                ),
                le(f, "link", l),
                a.instance = f
            }
            t.stylesheets === null && (t.stylesheets = new Map),
            t.stylesheets.set(a, e),
            (e = a.state.preload) && (a.state.loading & 3) === 0 && (t.count++,
            a = zo.bind(t),
            e.addEventListener("load", a),
            e.addEventListener("error", a))
        }
    }
    var Xc = 0;
    function AS(t, e) {
        return t.stylesheets && t.count === 0 && jo(t, t.stylesheets),
        0 < t.count || 0 < t.imgCount ? function(a) {
            var l = setTimeout(function() {
                if (t.stylesheets && jo(t, t.stylesheets),
                t.unsuspend) {
                    var f = t.unsuspend;
                    t.unsuspend = null,
                    f()
                }
            }, 6e4 + e);
            0 < t.imgBytes && Xc === 0 && (Xc = 62500 * iS());
            var u = setTimeout(function() {
                if (t.waitingForImages = !1,
                t.count === 0 && (t.stylesheets && jo(t, t.stylesheets),
                t.unsuspend)) {
                    var f = t.unsuspend;
                    t.unsuspend = null,
                    f()
                }
            }, (t.imgBytes > Xc ? 50 : 800) + e);
            return t.unsuspend = a,
            function() {
                t.unsuspend = null,
                clearTimeout(l),
                clearTimeout(u)
            }
        }
        : null
    }
    function zo() {
        if (this.count--,
        this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
            if (this.stylesheets)
                jo(this, this.stylesheets);
            else if (this.unsuspend) {
                var t = this.unsuspend;
                this.unsuspend = null,
                t()
            }
        }
    }
    var Lo = null;
    function jo(t, e) {
        t.stylesheets = null,
        t.unsuspend !== null && (t.count++,
        Lo = new Map,
        e.forEach(ES, t),
        Lo = null,
        zo.call(t))
    }
    function ES(t, e) {
        if (!(e.state.loading & 4)) {
            var a = Lo.get(t);
            if (a)
                var l = a.get(null);
            else {
                a = new Map,
                Lo.set(t, a);
                for (var u = t.querySelectorAll("link[data-precedence],style[data-precedence]"), f = 0; f < u.length; f++) {
                    var g = u[f];
                    (g.nodeName === "LINK" || g.getAttribute("media") !== "not all") && (a.set(g.dataset.precedence, g),
                    l = g)
                }
                l && a.set(null, l)
            }
            u = e.instance,
            g = u.getAttribute("data-precedence"),
            f = a.get(g) || l,
            f === l && a.set(null, u),
            a.set(g, u),
            this.count++,
            l = zo.bind(this),
            u.addEventListener("load", l),
            u.addEventListener("error", l),
            f ? f.parentNode.insertBefore(u, f.nextSibling) : (t = t.nodeType === 9 ? t.head : t,
            t.insertBefore(u, t.firstChild)),
            e.state.loading |= 4
        }
    }
    var Qs = {
        $$typeof: O,
        Provider: null,
        Consumer: null,
        _currentValue: $,
        _currentValue2: $,
        _threadCount: 0
    };
    function CS(t, e, a, l, u, f, g, x, C) {
        this.tag = 1,
        this.containerInfo = t,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = Hr(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = Hr(0),
        this.hiddenUpdates = Hr(null),
        this.identifierPrefix = l,
        this.onUncaughtError = u,
        this.onCaughtError = f,
        this.onRecoverableError = g,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = C,
        this.incompleteTransitions = new Map
    }
    function Dp(t, e, a, l, u, f, g, x, C, j, H, X) {
        return t = new CS(t,e,a,g,C,j,H,X,x),
        e = 1,
        f === !0 && (e |= 24),
        f = Ee(3, null, null, e),
        t.current = f,
        f.stateNode = t,
        e = Au(),
        e.refCount++,
        t.pooledCache = e,
        e.refCount++,
        f.memoizedState = {
            element: l,
            isDehydrated: a,
            cache: e
        },
        wu(f),
        t
    }
    function Op(t) {
        return t ? (t = ha,
        t) : ha
    }
    function zp(t, e, a, l, u, f) {
        u = Op(u),
        l.context === null ? l.context = u : l.pendingContext = u,
        l = Zn(e),
        l.payload = {
            element: a
        },
        f = f === void 0 ? null : f,
        f !== null && (l.callback = f),
        a = Qn(t, l, e),
        a !== null && (Se(a, t, e),
        Ms(a, t, e))
    }
    function Lp(t, e) {
        if (t = t.memoizedState,
        t !== null && t.dehydrated !== null) {
            var a = t.retryLane;
            t.retryLane = a !== 0 && a < e ? a : e
        }
    }
    function Pc(t, e) {
        Lp(t, e),
        (t = t.alternate) && Lp(t, e)
    }
    function jp(t) {
        if (t.tag === 13 || t.tag === 31) {
            var e = wi(t, 67108864);
            e !== null && Se(e, t, 67108864),
            Pc(t, 67108864)
        }
    }
    function Np(t) {
        if (t.tag === 13 || t.tag === 31) {
            var e = Re();
            e = qr(e);
            var a = wi(t, e);
            a !== null && Se(a, t, e),
            Pc(t, e)
        }
    }
    var No = !0;
    function MS(t, e, a, l) {
        var u = B.T;
        B.T = null;
        var f = J.p;
        try {
            J.p = 2,
            Kc(t, e, a, l)
        } finally {
            J.p = f,
            B.T = u
        }
    }
    function wS(t, e, a, l) {
        var u = B.T;
        B.T = null;
        var f = J.p;
        try {
            J.p = 8,
            Kc(t, e, a, l)
        } finally {
            J.p = f,
            B.T = u
        }
    }
    function Kc(t, e, a, l) {
        if (No) {
            var u = Zc(l);
            if (u === null)
                zc(t, e, l, Vo, a),
                Bp(t, l);
            else if (RS(u, t, e, a, l))
                l.stopPropagation();
            else if (Bp(t, l),
            e & 4 && -1 < _S.indexOf(t)) {
                for (; u !== null; ) {
                    var f = ea(u);
                    if (f !== null)
                        switch (f.tag) {
                        case 3:
                            if (f = f.stateNode,
                            f.current.memoizedState.isDehydrated) {
                                var g = Ti(f.pendingLanes);
                                if (g !== 0) {
                                    var x = f;
                                    for (x.pendingLanes |= 2,
                                    x.entangledLanes |= 2; g; ) {
                                        var C = 1 << 31 - Te(g);
                                        x.entanglements[1] |= C,
                                        g &= ~C
                                    }
                                    an(f),
                                    (Ct & 6) === 0 && (vo = Ht() + 500,
                                    Ys(0))
                                }
                            }
                            break;
                        case 31:
                        case 13:
                            x = wi(f, 2),
                            x !== null && Se(x, f, 2),
                            bo(),
                            Pc(f, 2)
                        }
                    if (f = Zc(l),
                    f === null && zc(t, e, l, Vo, a),
                    f === u)
                        break;
                    u = f
                }
                u !== null && l.stopPropagation()
            } else
                zc(t, e, l, null, a)
        }
    }
    function Zc(t) {
        return t = Fr(t),
        Qc(t)
    }
    var Vo = null;
    function Qc(t) {
        if (Vo = null,
        t = ta(t),
        t !== null) {
            var e = c(t);
            if (e === null)
                t = null;
            else {
                var a = e.tag;
                if (a === 13) {
                    if (t = h(e),
                    t !== null)
                        return t;
                    t = null
                } else if (a === 31) {
                    if (t = d(e),
                    t !== null)
                        return t;
                    t = null
                } else if (a === 3) {
                    if (e.stateNode.current.memoizedState.isDehydrated)
                        return e.tag === 3 ? e.stateNode.containerInfo : null;
                    t = null
                } else
                    e !== t && (t = null)
            }
        }
        return Vo = t,
        null
    }
    function Vp(t) {
        switch (t) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 8;
        case "message":
            switch (pn()) {
            case ss:
                return 2;
            case Ph:
                return 8;
            case El:
            case m2:
                return 32;
            case Kh:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var Fc = !1
      , si = null
      , li = null
      , oi = null
      , Fs = new Map
      , Js = new Map
      , ri = []
      , _S = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function Bp(t, e) {
        switch (t) {
        case "focusin":
        case "focusout":
            si = null;
            break;
        case "dragenter":
        case "dragleave":
            li = null;
            break;
        case "mouseover":
        case "mouseout":
            oi = null;
            break;
        case "pointerover":
        case "pointerout":
            Fs.delete(e.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Js.delete(e.pointerId)
        }
    }
    function Ws(t, e, a, l, u, f) {
        return t === null || t.nativeEvent !== f ? (t = {
            blockedOn: e,
            domEventName: a,
            eventSystemFlags: l,
            nativeEvent: f,
            targetContainers: [u]
        },
        e !== null && (e = ea(e),
        e !== null && jp(e)),
        t) : (t.eventSystemFlags |= l,
        e = t.targetContainers,
        u !== null && e.indexOf(u) === -1 && e.push(u),
        t)
    }
    function RS(t, e, a, l, u) {
        switch (e) {
        case "focusin":
            return si = Ws(si, t, e, a, l, u),
            !0;
        case "dragenter":
            return li = Ws(li, t, e, a, l, u),
            !0;
        case "mouseover":
            return oi = Ws(oi, t, e, a, l, u),
            !0;
        case "pointerover":
            var f = u.pointerId;
            return Fs.set(f, Ws(Fs.get(f) || null, t, e, a, l, u)),
            !0;
        case "gotpointercapture":
            return f = u.pointerId,
            Js.set(f, Ws(Js.get(f) || null, t, e, a, l, u)),
            !0
        }
        return !1
    }
    function Up(t) {
        var e = ta(t.target);
        if (e !== null) {
            var a = c(e);
            if (a !== null) {
                if (e = a.tag,
                e === 13) {
                    if (e = h(a),
                    e !== null) {
                        t.blockedOn = e,
                        Ih(t.priority, function() {
                            Np(a)
                        });
                        return
                    }
                } else if (e === 31) {
                    if (e = d(a),
                    e !== null) {
                        t.blockedOn = e,
                        Ih(t.priority, function() {
                            Np(a)
                        });
                        return
                    }
                } else if (e === 3 && a.stateNode.current.memoizedState.isDehydrated) {
                    t.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
                    return
                }
            }
        }
        t.blockedOn = null
    }
    function Bo(t) {
        if (t.blockedOn !== null)
            return !1;
        for (var e = t.targetContainers; 0 < e.length; ) {
            var a = Zc(t.nativeEvent);
            if (a === null) {
                a = t.nativeEvent;
                var l = new a.constructor(a.type,a);
                Qr = l,
                a.target.dispatchEvent(l),
                Qr = null
            } else
                return e = ea(a),
                e !== null && jp(e),
                t.blockedOn = a,
                !1;
            e.shift()
        }
        return !0
    }
    function Hp(t, e, a) {
        Bo(t) && a.delete(e)
    }
    function DS() {
        Fc = !1,
        si !== null && Bo(si) && (si = null),
        li !== null && Bo(li) && (li = null),
        oi !== null && Bo(oi) && (oi = null),
        Fs.forEach(Hp),
        Js.forEach(Hp)
    }
    function Uo(t, e) {
        t.blockedOn === e && (t.blockedOn = null,
        Fc || (Fc = !0,
        n.unstable_scheduleCallback(n.unstable_NormalPriority, DS)))
    }
    var Ho = null;
    function qp(t) {
        Ho !== t && (Ho = t,
        n.unstable_scheduleCallback(n.unstable_NormalPriority, function() {
            Ho === t && (Ho = null);
            for (var e = 0; e < t.length; e += 3) {
                var a = t[e]
                  , l = t[e + 1]
                  , u = t[e + 2];
                if (typeof l != "function") {
                    if (Qc(l || a) === null)
                        continue;
                    break
                }
                var f = ea(a);
                f !== null && (t.splice(e, 3),
                e -= 3,
                Zu(f, {
                    pending: !0,
                    data: u,
                    method: a.method,
                    action: l
                }, l, u))
            }
        }))
    }
    function Va(t) {
        function e(C) {
            return Uo(C, t)
        }
        si !== null && Uo(si, t),
        li !== null && Uo(li, t),
        oi !== null && Uo(oi, t),
        Fs.forEach(e),
        Js.forEach(e);
        for (var a = 0; a < ri.length; a++) {
            var l = ri[a];
            l.blockedOn === t && (l.blockedOn = null)
        }
        for (; 0 < ri.length && (a = ri[0],
        a.blockedOn === null); )
            Up(a),
            a.blockedOn === null && ri.shift();
        if (a = (t.ownerDocument || t).$$reactFormReplay,
        a != null)
            for (l = 0; l < a.length; l += 3) {
                var u = a[l]
                  , f = a[l + 1]
                  , g = u[de] || null;
                if (typeof f == "function")
                    g || qp(a);
                else if (g) {
                    var x = null;
                    if (f && f.hasAttribute("formAction")) {
                        if (u = f,
                        g = f[de] || null)
                            x = g.formAction;
                        else if (Qc(u) !== null)
                            continue
                    } else
                        x = g.action;
                    typeof x == "function" ? a[l + 1] = x : (a.splice(l, 3),
                    l -= 3),
                    qp(a)
                }
            }
    }
    function Gp() {
        function t(f) {
            f.canIntercept && f.info === "react-transition" && f.intercept({
                handler: function() {
                    return new Promise(function(g) {
                        return u = g
                    }
                    )
                },
                focusReset: "manual",
                scroll: "manual"
            })
        }
        function e() {
            u !== null && (u(),
            u = null),
            l || setTimeout(a, 20)
        }
        function a() {
            if (!l && !navigation.transition) {
                var f = navigation.currentEntry;
                f && f.url != null && navigation.navigate(f.url, {
                    state: f.getState(),
                    info: "react-transition",
                    history: "replace"
                })
            }
        }
        if (typeof navigation == "object") {
            var l = !1
              , u = null;
            return navigation.addEventListener("navigate", t),
            navigation.addEventListener("navigatesuccess", e),
            navigation.addEventListener("navigateerror", e),
            setTimeout(a, 100),
            function() {
                l = !0,
                navigation.removeEventListener("navigate", t),
                navigation.removeEventListener("navigatesuccess", e),
                navigation.removeEventListener("navigateerror", e),
                u !== null && (u(),
                u = null)
            }
        }
    }
    function Jc(t) {
        this._internalRoot = t
    }
    qo.prototype.render = Jc.prototype.render = function(t) {
        var e = this._internalRoot;
        if (e === null)
            throw Error(o(409));
        var a = e.current
          , l = Re();
        zp(a, l, t, e, null, null)
    }
    ,
    qo.prototype.unmount = Jc.prototype.unmount = function() {
        var t = this._internalRoot;
        if (t !== null) {
            this._internalRoot = null;
            var e = t.containerInfo;
            zp(t.current, 2, null, t, null, null),
            bo(),
            e[$i] = null
        }
    }
    ;
    function qo(t) {
        this._internalRoot = t
    }
    qo.prototype.unstable_scheduleHydration = function(t) {
        if (t) {
            var e = Wh();
            t = {
                blockedOn: null,
                target: t,
                priority: e
            };
            for (var a = 0; a < ri.length && e !== 0 && e < ri[a].priority; a++)
                ;
            ri.splice(a, 0, t),
            a === 0 && Up(t)
        }
    }
    ;
    var Yp = i.version;
    if (Yp !== "19.2.8")
        throw Error(o(527, Yp, "19.2.8"));
    J.findDOMNode = function(t) {
        var e = t._reactInternals;
        if (e === void 0)
            throw typeof t.render == "function" ? Error(o(188)) : (t = Object.keys(t).join(","),
            Error(o(268, t)));
        return t = m(e),
        t = t !== null ? v(t) : null,
        t = t === null ? null : t.stateNode,
        t
    }
    ;
    var OS = {
        bundleType: 0,
        version: "19.2.8",
        rendererPackageName: "react-dom",
        currentDispatcherRef: B,
        reconcilerVersion: "19.2.8"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Go = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Go.isDisabled && Go.supportsFiber)
            try {
                ls = Go.inject(OS),
                xe = Go
            } catch {}
    }
    return $s.createRoot = function(t, e) {
        if (!r(t))
            throw Error(o(299));
        var a = !1
          , l = ""
          , u = Fm
          , f = Jm
          , g = Wm;
        return e != null && (e.unstable_strictMode === !0 && (a = !0),
        e.identifierPrefix !== void 0 && (l = e.identifierPrefix),
        e.onUncaughtError !== void 0 && (u = e.onUncaughtError),
        e.onCaughtError !== void 0 && (f = e.onCaughtError),
        e.onRecoverableError !== void 0 && (g = e.onRecoverableError)),
        e = Dp(t, 1, !1, null, null, a, l, null, u, f, g, Gp),
        t[$i] = e.current,
        Oc(t),
        new Jc(e)
    }
    ,
    $s.hydrateRoot = function(t, e, a) {
        if (!r(t))
            throw Error(o(299));
        var l = !1
          , u = ""
          , f = Fm
          , g = Jm
          , x = Wm
          , C = null;
        return a != null && (a.unstable_strictMode === !0 && (l = !0),
        a.identifierPrefix !== void 0 && (u = a.identifierPrefix),
        a.onUncaughtError !== void 0 && (f = a.onUncaughtError),
        a.onCaughtError !== void 0 && (g = a.onCaughtError),
        a.onRecoverableError !== void 0 && (x = a.onRecoverableError),
        a.formState !== void 0 && (C = a.formState)),
        e = Dp(t, 1, !0, e, a ?? null, l, u, C, f, g, x, Gp),
        e.context = Op(null),
        a = e.current,
        l = Re(),
        l = qr(l),
        u = Zn(l),
        u.callback = null,
        Qn(a, u, l),
        a = l,
        e.current.lanes = a,
        rs(e, a),
        an(e),
        t[$i] = e.current,
        Oc(t),
        new qo(e)
    }
    ,
    $s.version = "19.2.8",
    $s
}
var Ip;
function YS() {
    if (Ip)
        return $c.exports;
    Ip = 1;
    function n() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
            } catch (i) {
                console.error(i)
            }
    }
    return n(),
    $c.exports = GS(),
    $c.exports
}
var kS = YS();
const XS = !1;
var Kg = F.useLayoutEffect;
function PS(n, i, s) {
    F.useEffect( () => {
        if (!n.current || s || typeof IntersectionObserver != "function")
            return () => i();
        const o = new IntersectionObserver(r => {
            i(r.pop())
        }
        ,{
            rootMargin: "100px"
        });
        return o.observe(n.current),
        () => {
            o.disconnect(),
            i()
        }
    }
    , [i, s, n])
}
function KS(n) {
    const i = F.useRef(null);
    return F.useImperativeHandle(n, () => i.current, []),
    i
}
function cl(n) {
    return n[n.length - 1]
}
function Qa(n, i) {
    return typeof n == "function" ? n(i) : n
}
const Zg = Object.prototype.hasOwnProperty
  , ZS = Object.prototype.propertyIsEnumerable;
function Qg(n) {
    for (const i in n)
        if (Zg.call(n, i))
            return !0;
    return !1
}
const QS = () => Object.create(null)
  , qi = (n, i) => ki(n, i, QS);
function ki(n, i, s= () => ({}), o=0) {
    if (n === i)
        return n;
    if (o > 500)
        return i;
    const r = i
      , c = ey(n) && ey(r);
    if (!c && !(ur(n) && ur(r)))
        return r;
    const h = c ? n : $p(n);
    if (!h)
        return r;
    const d = c ? r : $p(r);
    if (!d)
        return r;
    const p = h.length
      , m = d.length
      , v = c ? new Array(m) : s();
    let y = 0;
    for (let S = 0; S < m; S++) {
        const b = c ? S : d[S]
          , T = n[b]
          , A = r[b];
        if (T === A) {
            v[b] = T,
            (c ? S < p : Zg.call(n, b)) && y++;
            continue
        }
        if (T === null || A === null || typeof T != "object" || typeof A != "object") {
            v[b] = A;
            continue
        }
        const E = ki(T, A, s, o + 1);
        v[b] = E,
        E === T && y++
    }
    return p === m && y === p ? n : v
}
function $p(n) {
    const i = Object.keys(n);
    if (i.length !== Object.getOwnPropertyNames(n).length)
        return !1;
    const s = Object.getOwnPropertySymbols(n);
    if (s.length === 0)
        return i;
    for (const o of s) {
        if (!ZS.call(n, o))
            return !1;
        i.push(o)
    }
    return i
}
function ur(n) {
    if (!ty(n))
        return !1;
    const i = n.constructor;
    if (typeof i > "u")
        return !0;
    const s = i.prototype;
    return !(!ty(s) || !s.hasOwnProperty("isPrototypeOf"))
}
function ty(n) {
    return Object.prototype.toString.call(n) === "[object Object]"
}
function ey(n) {
    return Array.isArray(n) && n.length === Object.keys(n).length
}
function mi(n, i, s) {
    if (n === i)
        return !0;
    if (typeof n != typeof i)
        return !1;
    if (Array.isArray(n) && Array.isArray(i)) {
        if (n.length !== i.length)
            return !1;
        for (let o = 0, r = n.length; o < r; o++)
            if (!mi(n[o], i[o], s))
                return !1;
        return !0
    }
    if (ur(n) && ur(i)) {
        const o = (s == null ? void 0 : s.ignoreUndefined) ?? !0;
        if (s != null && s.partial) {
            for (const h in i)
                if ((!o || i[h] !== void 0) && !mi(n[h], i[h], s))
                    return !1;
            return !0
        }
        let r = 0;
        if (!o)
            r = Object.keys(n).length;
        else
            for (const h in n)
                n[h] !== void 0 && r++;
        let c = 0;
        for (const h in i)
            if ((!o || i[h] !== void 0) && (c++,
            c > r || !mi(n[h], i[h], s)))
                return !1;
        return r === c
    }
    return !1
}
const FS = /[\x00-\x1f\x7f"<>`{}]/g;
function JS(n) {
    return n.replace(FS, i => "%" + i.charCodeAt(0).toString(16).toUpperCase().padStart(2, "0"))
}
function ny(n) {
    let i;
    try {
        i = decodeURI(n)
    } catch {
        i = n.replaceAll(/%[0-9A-F]{2}/gi, s => {
            try {
                return decodeURI(s)
            } catch {
                return s
            }
        }
        )
    }
    return JS(i)
}
const WS = ["http:", "https:", "mailto:", "tel:"];
function cr(n, i) {
    if (!n)
        return !1;
    try {
        const s = new URL(n);
        return !i.has(s.protocol)
    } catch {
        return !1
    }
}
function tl(n) {
    if (!n)
        return {
            path: n,
            handledProtocolRelativeURL: !1
        };
    if (!/[%\\\x00-\x1f\x7f]/.test(n) && !n.startsWith("//"))
        return {
            path: n,
            handledProtocolRelativeURL: !1
        };
    const i = /%25|%5C/gi;
    let s = 0, o = "", r;
    for (; (r = i.exec(n)) !== null; )
        o += ny(n.slice(s, r.index)) + r[0],
        s = i.lastIndex;
    o = o + ny(s ? n.slice(s) : n);
    let c = !1;
    return o.startsWith("//") && (c = !0,
    o = "/" + o.replace(/^\/+/, "")),
    {
        path: o,
        handledProtocolRelativeURL: c
    }
}
function IS(n) {
    return /\s|[^\u0000-\u007F]/.test(n) ? n.replace(/\s|[^\u0000-\u007F]/gu, encodeURIComponent) : n
}
function $S(n, i) {
    if (n === i)
        return !0;
    if (n.length !== i.length)
        return !1;
    for (let s = 0; s < n.length; s++)
        if (n[s] !== i[s])
            return !1;
    return !0
}
function uh() {
    throw new Error("Invariant failed")
}
function fr(n) {
    const i = new Map;
    let s, o;
    const r = c => {
        c.next && (c.prev ? (c.prev.next = c.next,
        c.next.prev = c.prev,
        c.next = void 0,
        o && (o.next = c,
        c.prev = o)) : (c.next.prev = void 0,
        s = c.next,
        c.next = void 0,
        o && (c.prev = o,
        o.next = c)),
        o = c)
    }
    ;
    return {
        get(c) {
            const h = i.get(c);
            if (h)
                return r(h),
                h.value
        },
        set(c, h) {
            if (i.size >= n && s) {
                const p = s;
                i.delete(p.key),
                p.next && (s = p.next,
                p.next.prev = void 0),
                p === o && (o = void 0)
            }
            const d = i.get(c);
            if (d)
                d.value = h,
                r(d);
            else {
                const p = {
                    key: c,
                    value: h,
                    prev: o
                };
                o && (o.next = p),
                o = p,
                s || (s = p),
                i.set(c, p)
            }
        },
        clear() {
            i.clear(),
            s = void 0,
            o = void 0
        }
    }
}
const hi = 4
  , Fg = 5;
function Jg(n, i, s=new Uint16Array(6)) {
    const o = n.indexOf("/", i)
      , r = o === -1 ? n.length : o
      , c = n.substring(i, r);
    if (!c || !c.includes("$"))
        return s[0] = 0,
        s[1] = i,
        s[2] = i,
        s[3] = r,
        s[4] = r,
        s[5] = r,
        s;
    if (c === "$") {
        const p = n.length;
        return s[0] = 2,
        s[1] = i,
        s[2] = i,
        s[3] = p,
        s[4] = p,
        s[5] = p,
        s
    }
    if (c.charCodeAt(0) === 36)
        return s[0] = 1,
        s[1] = i,
        s[2] = i + 1,
        s[3] = r,
        s[4] = r,
        s[5] = r,
        s;
    const h = c.indexOf("{");
    let d;
    if (h !== -1 && h + 1 < c.length && (d = c.indexOf("}", h)) !== -1) {
        const p = c.charCodeAt(h + 1);
        if (p === 45) {
            if (h + 2 < c.length && c.charCodeAt(h + 2) === 36) {
                const m = h + 3
                  , v = d;
                if (m < v)
                    return s[0] = 3,
                    s[1] = i + h,
                    s[2] = i + m,
                    s[3] = i + v,
                    s[4] = i + d + 1,
                    s[5] = r,
                    s
            }
        } else if (p === 36) {
            const m = h + 1
              , v = h + 2;
            return v === d ? (s[0] = 2,
            s[1] = i + h,
            s[2] = i + m,
            s[3] = i + v,
            s[4] = i + d + 1,
            s[5] = n.length,
            s) : (s[0] = 1,
            s[1] = i + h,
            s[2] = i + v,
            s[3] = i + d,
            s[4] = i + d + 1,
            s[5] = r,
            s)
        }
    }
    return s[0] = 0,
    s[1] = i,
    s[2] = i,
    s[3] = r,
    s[4] = r,
    s[5] = r,
    s
}
function _r(n, i, s, o, r, c, h, d) {
    var m, v;
    d == null || d(s);
    let p = o;
    {
        const y = s.fullPath ?? s.from
          , S = s.options
          , b = y.length
          , T = (S == null ? void 0 : S.caseSensitive) ?? n
          , A = ((m = S == null ? void 0 : S.params) == null ? void 0 : m.parse) ?? (S == null ? void 0 : S.parseParams);
        for (; p < b; ) {
            const R = Jg(y, p, i);
            let _;
            const O = p
              , V = R[5];
            p = V + 1,
            c++;
            const P = R[0];
            switch (P) {
            case 0:
                {
                    const Y = y.substring(R[2], R[3]);
                    let q = Y, Q;
                    T ? Q = r.static ?? (r.static = new Map) : (q = Y.toLowerCase(),
                    Q = r.staticInsensitive ?? (r.staticInsensitive = new Map));
                    const Z = Q.get(q);
                    if (Z)
                        _ = Z;
                    else {
                        const K = Xa(y);
                        K.parent = r,
                        K.depth = c,
                        _ = K,
                        Q.set(q, K)
                    }
                    break
                }
            case 1:
            case 3:
            case 2:
                {
                    let Y = y.substring(O, R[1])
                      , q = y.substring(R[4], V);
                    const Q = T && !!(Y || q);
                    T || (Y = Y.toLowerCase(),
                    q = q.toLowerCase());
                    const Z = P === 1 ? r.dynamic : P === 3 ? r.optional : r.wildcard
                      , K = P !== 2 && !A && (Z == null ? void 0 : Z.find(W => !W.parse && W.caseSensitive === Q && W.prefix === Y && W.suffix === q));
                    if (K)
                        _ = K;
                    else {
                        const W = tb(P, y, Q, Y, q);
                        _ = W,
                        W.parent = r,
                        W.depth = c;
                        let tt;
                        P === 1 ? tt = r.dynamic ?? (r.dynamic = []) : P === 3 ? tt = r.optional ?? (r.optional = []) : tt = r.wildcard ?? (r.wildcard = []),
                        tt.push(W),
                        tt.length === 2 && (h == null || h.push(tt))
                    }
                    break
                }
            }
            r = _
        }
        if (A && s.children && !s.isRoot && s.id && s.id.charCodeAt(s.id.lastIndexOf("/") + 1) === 95) {
            const R = Xa(y);
            R.kind = Fg,
            R.parent = r,
            c++,
            R.depth = c,
            r.pathless ?? (r.pathless = []),
            r.pathless.push(R),
            r = R
        }
        const E = (s.path || !s.children) && !s.isRoot;
        if (E && y.endsWith("/")) {
            const R = Xa(y);
            R.kind = hi,
            R.parent = r,
            c++,
            R.depth = c,
            r.index = R,
            r = R
        }
        r.parse = A ?? null,
        r.priority = ((v = S == null ? void 0 : S.params) == null ? void 0 : v.priority) ?? 0,
        E && !r.route && (r.route = s,
        r.fullPath = y)
    }
    if (s.children)
        for (const y of s.children)
            _r(n, i, y, p, r, c, h, d)
}
function Wg(n, i) {
    if (n.parse && !i.parse)
        return -1;
    if (!n.parse && i.parse)
        return 1;
    if (n.parse && i.parse && (n.priority || i.priority))
        return i.priority - n.priority;
    if (n.prefix && i.prefix && n.prefix !== i.prefix) {
        if (n.prefix.startsWith(i.prefix))
            return -1;
        if (i.prefix.startsWith(n.prefix))
            return 1
    }
    if (n.suffix && i.suffix && n.suffix !== i.suffix) {
        if (n.suffix.endsWith(i.suffix))
            return -1;
        if (i.suffix.endsWith(n.suffix))
            return 1
    }
    return n.prefix && !i.prefix ? -1 : !n.prefix && i.prefix ? 1 : n.suffix && !i.suffix ? -1 : !n.suffix && i.suffix ? 1 : n.caseSensitive && !i.caseSensitive ? -1 : !n.caseSensitive && i.caseSensitive ? 1 : 0
}
function Xa(n) {
    return {
        kind: 0,
        depth: 0,
        pathless: null,
        index: null,
        static: null,
        staticInsensitive: null,
        dynamic: null,
        optional: null,
        wildcard: null,
        route: null,
        fullPath: n,
        parent: null,
        parse: null,
        priority: 0
    }
}
function tb(n, i, s, o, r) {
    return {
        kind: n,
        depth: 0,
        pathless: null,
        index: null,
        static: null,
        staticInsensitive: null,
        dynamic: null,
        optional: null,
        wildcard: null,
        route: null,
        fullPath: i,
        parent: null,
        parse: null,
        priority: 0,
        caseSensitive: s,
        prefix: o,
        suffix: r
    }
}
function eb(n, i) {
    const s = Xa("/")
      , o = new Uint16Array(6)
      , r = [];
    for (const c of n)
        _r(!1, o, c, 1, s, 0, r);
    for (const c of r)
        c.sort(Wg);
    i.masksTree = s,
    i.flatCache = fr(1e3)
}
function nb(n, i) {
    n || (n = "/");
    const s = i.flatCache.get(n);
    if (s !== void 0)
        return s;
    const o = ch(n, i.masksTree);
    return i.flatCache.set(n, o),
    o
}
function ib(n, i, s, o, r) {
    n || (n = "/"),
    o || (o = "/");
    const c = i ? `case\0${n}` : n;
    let h = r.singleCache.get(c);
    return h || (h = Xa("/"),
    _r(i, new Uint16Array(6), {
        from: n
    }, 1, h, 0),
    r.singleCache.set(c, h)),
    ch(o, h, s)
}
function ab(n, i, s=!1) {
    const o = s ? n : `nofuzz\0${n}`
      , r = i.matchCache.get(o);
    if (r !== void 0)
        return r;
    n || (n = "/");
    let c;
    try {
        c = ch(n, i.segmentTree, s)
    } catch (h) {
        if (h instanceof URIError)
            c = null;
        else
            throw h
    }
    return c && (c.branch = $g(c.route)),
    i.matchCache.set(o, c),
    c
}
function sb(n) {
    return n === "/" ? n : n.replace(/\/{1,}$/, "")
}
function lb(n, i=!1, s) {
    const o = Xa(n.fullPath)
      , r = new Uint16Array(6)
      , c = []
      , h = {}
      , d = {};
    let p = 0;
    _r(i, r, n, 1, o, 0, c, m => {
        if (s == null || s(m, p),
        m.id in h && uh(),
        h[m.id] = m,
        p !== 0 && m.path) {
            const v = sb(m.fullPath);
            (!d[v] || m.fullPath.endsWith("/")) && (d[v] = m)
        }
        p++
    }
    );
    for (const m of c)
        m.sort(Wg);
    return {
        processedTree: {
            segmentTree: o,
            singleCache: fr(1e3),
            matchCache: fr(1e3),
            flatCache: null,
            masksTree: null
        },
        routesById: h,
        routesByPath: d
    }
}
function ch(n, i, s=!1) {
    const o = n.split("/")
      , r = rb(n, o, i, s);
    if (!r)
        return null;
    const [c] = Ig(n, o, r);
    return {
        route: r.node.route,
        rawParams: c
    }
}
function Ig(n, i, s) {
    var v, y, S, b;
    const o = ob(s.node);
    let r = null;
    const c = Object.create(null);
    let h = ((v = s.extract) == null ? void 0 : v.part) ?? 0
      , d = ((y = s.extract) == null ? void 0 : y.node) ?? 0
      , p = ((S = s.extract) == null ? void 0 : S.path) ?? 0
      , m = ((b = s.extract) == null ? void 0 : b.segment) ?? 0;
    for (; d < o.length; h++,
    d++,
    p++,
    m++) {
        const T = o[d];
        if (T.kind === hi)
            break;
        if (T.kind === Fg) {
            m--,
            h--,
            p--;
            continue
        }
        const A = i[h]
          , E = p;
        if (A && (p += A.length),
        T.kind === 1) {
            r ?? (r = s.node.fullPath.split("/"));
            const R = r[m]
              , _ = T.prefix.length;
            if (R.charCodeAt(_) === 123) {
                const O = T.suffix.length
                  , V = R.substring(_ + 2, R.length - O - 1)
                  , P = A.substring(_, A.length - O);
                c[V] = decodeURIComponent(P)
            } else {
                const O = R.substring(1);
                c[O] = decodeURIComponent(A)
            }
        } else if (T.kind === 3) {
            if (s.skipped & 1 << d) {
                h--,
                p = E - 1;
                continue
            }
            r ?? (r = s.node.fullPath.split("/"));
            const R = r[m]
              , _ = T.prefix.length
              , O = T.suffix.length
              , V = R.substring(_ + 3, R.length - O - 1)
              , P = T.suffix || T.prefix ? A.substring(_, A.length - O) : A;
            P && (c[V] = decodeURIComponent(P))
        } else if (T.kind === 2) {
            const R = T
              , _ = n.substring(E + R.prefix.length, n.length - R.suffix.length)
              , O = decodeURIComponent(_);
            c["*"] = O,
            c._splat = O;
            break
        }
    }
    return s.rawParams && Object.assign(c, s.rawParams),
    [c, {
        part: h,
        node: d,
        path: p,
        segment: m
    }]
}
function $g(n) {
    const i = [n];
    for (; n.parentRoute; )
        n = n.parentRoute,
        i.push(n);
    return i.reverse(),
    i
}
function ob(n) {
    const i = Array(n.depth + 1);
    do
        i[n.depth] = n,
        n = n.parent;
    while (n);
    return i
}
function rb(n, i, s, o) {
    if (n === "/" && s.index)
        return {
            node: s.index,
            skipped: 0
        };
    const r = !cl(i)
      , c = r && n !== "/"
      , h = i.length - (r ? 1 : 0)
      , d = [{
        node: s,
        index: 1,
        skipped: 0,
        statics: 0,
        dynamics: 0,
        optionals: 0
    }];
    let p = null
      , m = null;
    for (; d.length; ) {
        const v = d.pop()
          , {node: y, index: S, skipped: b, statics: T, dynamics: A, optionals: E} = v;
        let {extract: R, rawParams: _} = v;
        if (y.kind === 2 && y.route && !ko(m, v))
            continue;
        if (y.parse) {
            if (!iy(n, i, v))
                continue;
            _ = v.rawParams,
            R = v.extract
        }
        o && y.route && y.kind !== hi && ko(p, v) && (p = v);
        const O = S === h;
        if (O && (y.route && (!c || y.kind === hi || y.kind === 2) && ko(m, v) && (m = v),
        !y.optional && !y.wildcard && !y.index && !y.pathless))
            continue;
        const V = O ? void 0 : i[S];
        let P;
        if (O && y.index) {
            const Y = {
                node: y.index,
                index: S,
                skipped: b,
                statics: T,
                dynamics: A,
                optionals: E,
                extract: R,
                rawParams: _
            };
            let q = !0;
            if (y.index.parse && (iy(n, i, Y) || (q = !1)),
            q) {
                if (!A && !E && !b && ub(T, h))
                    return Y;
                ko(m, Y) && (m = Y)
            }
        }
        if (y.wildcard)
            for (let Y = y.wildcard.length - 1; Y >= 0; Y--) {
                const q = y.wildcard[Y]
                  , {prefix: Q, suffix: Z} = q;
                if (!(Q && (O || !(q.caseSensitive ? V : P ?? (P = V.toLowerCase())).startsWith(Q)))) {
                    if (Z) {
                        if (O)
                            continue;
                        const K = i.slice(S).join("/")
                          , W = K.slice(-Z.length);
                        if ((q.caseSensitive ? W : W.toLowerCase()) !== Z || K.length - Z.length < Q.length)
                            continue
                    }
                    d.push({
                        node: q,
                        index: h,
                        skipped: b,
                        statics: T,
                        dynamics: A,
                        optionals: E,
                        extract: R,
                        rawParams: _
                    })
                }
            }
        if (y.optional) {
            const Y = b | 1 << y.depth + 1;
            for (let q = y.optional.length - 1; q >= 0; q--) {
                const Q = y.optional[q];
                d.push({
                    node: Q,
                    index: S,
                    skipped: Y,
                    statics: T,
                    dynamics: A,
                    optionals: E,
                    extract: R,
                    rawParams: _
                })
            }
            if (!O)
                for (let q = y.optional.length - 1; q >= 0; q--) {
                    const Q = y.optional[q]
                      , {prefix: Z, suffix: K} = Q;
                    if (Z || K) {
                        const W = Q.caseSensitive ? V : P ?? (P = V.toLowerCase());
                        if (Z && !W.startsWith(Z) || K && W.indexOf(K, W.length - K.length) < Z.length)
                            continue
                    }
                    d.push({
                        node: Q,
                        index: S + 1,
                        skipped: b,
                        statics: T,
                        dynamics: A,
                        optionals: E + Yo(h, S),
                        extract: R,
                        rawParams: _
                    })
                }
        }
        if (!O && y.dynamic && V)
            for (let Y = y.dynamic.length - 1; Y >= 0; Y--) {
                const q = y.dynamic[Y]
                  , {prefix: Q, suffix: Z} = q;
                if (Q || Z) {
                    const K = q.caseSensitive ? V : P ?? (P = V.toLowerCase());
                    if (Q && !K.startsWith(Q) || Z && K.indexOf(Z, K.length - Z.length) < Q.length)
                        continue
                }
                d.push({
                    node: q,
                    index: S + 1,
                    skipped: b,
                    statics: T,
                    dynamics: A + Yo(h, S),
                    optionals: E,
                    extract: R,
                    rawParams: _
                })
            }
        if (!O && y.staticInsensitive) {
            const Y = y.staticInsensitive.get(P ?? (P = V.toLowerCase()));
            Y && d.push({
                node: Y,
                index: S + 1,
                skipped: b,
                statics: T + Yo(h, S),
                dynamics: A,
                optionals: E,
                extract: R,
                rawParams: _
            })
        }
        if (!O && y.static) {
            const Y = y.static.get(V);
            Y && d.push({
                node: Y,
                index: S + 1,
                skipped: b,
                statics: T + Yo(h, S),
                dynamics: A,
                optionals: E,
                extract: R,
                rawParams: _
            })
        }
        if (y.pathless)
            for (let Y = y.pathless.length - 1; Y >= 0; Y--) {
                const q = y.pathless[Y];
                d.push({
                    node: q,
                    index: S,
                    skipped: b,
                    statics: T,
                    dynamics: A,
                    optionals: E,
                    extract: R,
                    rawParams: _
                })
            }
    }
    if (m)
        return m;
    if (o && p) {
        let v = p.index;
        for (let S = 0; S < p.index; S++)
            v += i[S].length;
        const y = v === n.length ? "/" : n.slice(v);
        return p.rawParams ?? (p.rawParams = Object.create(null)),
        p.rawParams["**"] = decodeURIComponent(y),
        p
    }
    return null
}
function Yo(n, i) {
    return 2 ** (n - i - 1)
}
function ub(n, i) {
    return n === 2 ** (i - 1) - 1
}
function iy(n, i, s) {
    let o, r;
    try {
        [o,r] = Ig(n, i, s)
    } catch {
        return null
    }
    if (s.rawParams = o,
    s.extract = r,
    !s.node.parse)
        return !0;
    try {
        if (s.node.parse(o) === !1)
            return null
    } catch {}
    return !0
}
function ko(n, i) {
    return n ? i.statics > n.statics || i.statics === n.statics && (i.dynamics > n.dynamics || i.dynamics === n.dynamics && (i.optionals > n.optionals || i.optionals === n.optionals && ((i.node.kind === hi) > (n.node.kind === hi) || i.node.kind === hi == (n.node.kind === hi) && i.node.depth > n.node.depth))) : !0
}
function Wo(n) {
    return Io(n.filter(i => i !== void 0).join("/"))
}
function Io(n) {
    return n.replace(/\/{2,}/g, "/")
}
function t1(n) {
    return n === "/" ? n : n.replace(/^\/{1,}/, "")
}
function Nn(n) {
    const i = n.length;
    return i > 1 && n[i - 1] === "/" ? n.replace(/\/{1,}$/, "") : n
}
function e1(n) {
    return Nn(t1(n))
}
function hr(n, i) {
    return n != null && n.endsWith("/") && n !== "/" && n !== `${i}/` ? n.slice(0, -1) : n
}
function cb(n, i, s) {
    return hr(n, s) === hr(i, s)
}
function fb({base: n, to: i, trailingSlash: s="never", cache: o}) {
    if (i.includes("//") && (i = Io(i)),
    i.startsWith("/"))
        return i.length === 1 || s === "preserve" ? i : s === "always" ? i.endsWith("/") ? i : `${i}/` : i.endsWith("/") ? i.slice(0, -1) : i;
    const r = i === ".";
    let c;
    if (o) {
        c = r ? n : n + "\0" + i;
        const m = o.get(c);
        if (m)
            return m
    }
    let h;
    if (r)
        h = n.split("/");
    else {
        for (n.includes("//") && (n = Io(n)),
        h = n.split("/"); h.length > 1 && cl(h) === ""; )
            h.pop();
        const m = i.split("/");
        for (let v = 0, y = m.length; v < y; v++) {
            const S = m[v];
            S === "" ? v ? v === y - 1 && h.push(S) : h = [S] : S === ".." ? h.length > 1 ? h.pop() : h = [""] : S === "." || h.push(S)
        }
    }
    h.length > 1 && (cl(h) === "" ? s === "never" && h.pop() : s === "always" && h.push(""));
    const d = h.join("/")
      , p = (r ? Io(d) : d) || "/";
    return c && o && o.set(c, p),
    p
}
function hb(n) {
    const i = new Map(n.map(r => [encodeURIComponent(r), r]))
      , s = Array.from(i.keys()).map(r => r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")
      , o = new RegExp(s,"g");
    return r => r.replace(o, c => i.get(c) ?? c)
}
function af(n, i, s) {
    const o = i[n];
    return typeof o != "string" ? o : n === "_splat" ? /^[a-zA-Z0-9\-._~!/]*$/.test(o) ? o : o.split("/").map(r => sy(r, s)).join("/") : sy(o, s)
}
function ay({path: n, params: i, decoder: s, ...o}) {
    let r = !1;
    const c = Object.create(null);
    if (!n || n === "/")
        return {
            interpolatedPath: "/",
            usedParams: c,
            isMissingParams: r
        };
    if (!n.includes("$"))
        return {
            interpolatedPath: n,
            usedParams: c,
            isMissingParams: r
        };
    const h = n.length;
    let d = 0, p, m = "";
    for (; d < h; ) {
        const v = d;
        p = Jg(n, v, p);
        const y = p[5];
        if (d = y + 1,
        v === y)
            continue;
        const S = p[0];
        if (S === 0) {
            m += "/" + n.substring(v, y);
            continue
        }
        if (S === 2) {
            const b = i._splat;
            c._splat = b,
            c["*"] = b;
            const T = n.substring(v, p[1])
              , A = n.substring(p[4], y);
            if (!b) {
                r = !0,
                (T || A) && (m += "/" + T + A);
                continue
            }
            const E = af("_splat", i, s);
            m += "/" + T + E + A;
            continue
        }
        if (S === 1) {
            const b = n.substring(p[2], p[3]);
            !r && !(b in i) && (r = !0),
            c[b] = i[b];
            const T = n.substring(v, p[1])
              , A = n.substring(p[4], y)
              , E = af(b, i, s) ?? "undefined";
            m += "/" + T + E + A;
            continue
        }
        if (S === 3) {
            const b = n.substring(p[2], p[3])
              , T = i[b];
            if (T == null)
                continue;
            c[b] = T;
            const A = n.substring(v, p[1])
              , E = n.substring(p[4], y)
              , R = af(b, i, s) ?? "";
            m += "/" + A + R + E;
            continue
        }
    }
    return n.endsWith("/") && (m += "/"),
    {
        usedParams: c,
        interpolatedPath: m || "/",
        isMissingParams: r
    }
}
function sy(n, i) {
    const s = encodeURIComponent(n);
    return (i == null ? void 0 : i(s)) ?? s
}
function Fa(n) {
    return (n == null ? void 0 : n.isNotFound) === !0
}
function db() {
    try {
        return sessionStorage
    } catch {
        return
    }
}
const mb = "tsr-scroll-restoration-v1_3"
  , Pa = db();
function pb() {
    try {
        return JSON.parse((Pa == null ? void 0 : Pa.getItem("tsr-scroll-restoration-v1_3")) || "{}")
    } catch {
        return {}
    }
}
function yb() {
    try {
        Pa == null || Pa.setItem(mb, JSON.stringify(ci))
    } catch {}
}
const ci = pb()
  , ly = "data-scroll-restoration-id"
  , gb = n => n.state.__TSR_key || n.href;
function vb(n) {
    const i = n.getAttribute(ly);
    if (i)
        return `[${ly}="${i}"]`;
    let s = "", o = n, r;
    for (; r = o.parentNode; ) {
        let c = 1
          , h = o;
        for (; h = h.previousElementSibling; )
            c++;
        const d = `${o.localName}:nth-child(${c})`;
        s = s ? `${d} > ${s}` : d,
        o = r
    }
    return s
}
let Xo = !1;
const $o = "window";
function Df(n) {
    try {
        return typeof n == "function" ? n() : document.querySelector(n)
    } catch {}
}
function oy(n) {
    const i = new Set;
    for (const s of n) {
        if (s === $o)
            continue;
        const o = Df(s);
        o && i.add(o)
    }
    return i
}
function Sb(n, i) {
    const s = n.options.scrollRestoration
      , o = n._scroll;
    s && (o.restoring = !0);
    const r = n.options.getScrollRestorationKey || gb
      , c = new Set
      , h = d => {
        const p = ci[d] || (ci[d] = {});
        for (const m of c)
            m === document ? p[$o] = {
                scrollX,
                scrollY
            } : m.isConnected && (p[vb(m)] = {
                scrollX: m.scrollLeft,
                scrollY: m.scrollTop
            })
    }
    ;
    s && !o.restoration && (o.restoration = !0,
    Xo = !1,
    history.scrollRestoration = "manual",
    document.addEventListener("scroll", d => {
        Xo || c.add(d.target)
    }
    , !0),
    n.subscribe("onBeforeLoad", d => {
        d.fromLocation && h(r(d.fromLocation)),
        c.clear()
    }
    ),
    addEventListener("pagehide", () => {
        h(r(n.stores.resolvedLocation.get() ?? n.stores.location.get())),
        yb()
    }
    )),
    !o.reset && (o.reset = !0,
    n.subscribe("onRendered", d => {
        var A;
        const p = n.options.scrollRestorationBehavior
          , m = n.options.scrollToTopSelectors
          , v = o.next
          , y = o.hash;
        let S;
        if (c.clear(),
        o.next = !0,
        o.hash = !1,
        typeof n.options.scrollRestoration == "function" && !n.options.scrollRestoration({
            location: n.latestLocation
        }))
            return;
        const b = r(d.toLocation)
          , T = d.fromLocation && r(d.fromLocation);
        if (o.restoring && T && T !== b) {
            const E = ci[T];
            if (E) {
                let R = ci[b];
                for (const _ in E) {
                    if (_ === $o) {
                        if (v)
                            continue
                    } else {
                        const O = Df(_);
                        if (!O || v && m && (S ?? (S = oy(m)),
                        S.has(O)))
                            continue
                    }
                    R || (R = ci[b] = {}),
                    R[_] ?? (R[_] = E[_])
                }
            }
        }
        Xo = !0;
        try {
            const E = d.toLocation.hash
              , R = d.toLocation.state.__hashScrollIntoViewOptions ?? !0;
            let _ = !1;
            if (v) {
                !E && m && (S ?? (S = oy(m)));
                const O = E && R && y
                  , V = o.restoring ? ci[b] : void 0;
                if (V)
                    for (const P in V) {
                        const {scrollX: Y, scrollY: q} = V[P];
                        if (P === $o) {
                            if (O)
                                continue;
                            scrollTo({
                                top: q,
                                left: Y,
                                behavior: p
                            }),
                            _ = !0
                        } else {
                            const Q = Df(P);
                            Q && (Q.scrollLeft = Y,
                            Q.scrollTop = q,
                            S == null || S.delete(Q))
                        }
                    }
                if (!E) {
                    const P = {
                        top: 0,
                        left: 0,
                        behavior: p
                    };
                    if (_ || scrollTo(P),
                    S)
                        for (const Y of S)
                            Y.scrollTo(P)
                }
            }
            !_ && E && R && ((A = document.getElementById(E)) == null || A.scrollIntoView(R))
        } finally {
            Xo = !1
        }
    }
    ))
}
function bb(n, i=String) {
    const s = new URLSearchParams;
    for (const o in n) {
        const r = n[o];
        r !== void 0 && s.set(o, i(r))
    }
    return s.toString()
}
function sf(n) {
    return n ? n === "false" ? !1 : n === "true" ? !0 : +n * 0 === 0 && +n + "" === n ? +n : n : ""
}
function xb(n) {
    const i = new URLSearchParams(n)
      , s = Object.create(null);
    for (const [o,r] of i.entries()) {
        const c = s[o];
        c == null ? s[o] = sf(r) : Array.isArray(c) ? c.push(sf(r)) : s[o] = [c, sf(r)]
    }
    return s
}
const Tb = /^(?:\s|["[{\d-]|fa|nu|tr)/
  , Ab = Cb(JSON.parse)
  , Eb = Mb(JSON.stringify, JSON.parse);
function Cb(n) {
    return i => {
        i[0] === "?" && (i = i.substring(1));
        const s = xb(i);
        for (const o in s) {
            const r = s[o];
            if (typeof r == "string")
                try {
                    s[o] = n(r)
                } catch {}
        }
        return s
    }
}
function Mb(n, i) {
    const s = i === JSON.parse;
    function o(r) {
        if (r && typeof r == "object")
            try {
                return n(r)
            } catch {}
        else if (i && typeof r == "string") {
            if (s && !Tb.test(r))
                return r;
            try {
                return i(r),
                n(r)
            } catch {}
        }
        return r
    }
    return r => {
        const c = bb(r, o);
        return c ? `?${c}` : ""
    }
}
const Ka = "__root__";
function wb(n) {
    if (n.statusCode = n.statusCode || n.code || 307,
    !n.reloadDocument && typeof n.href == "string")
        try {
            new URL(n.href),
            n.reloadDocument = !0
        } catch {}
    const i = new Headers(n.headers);
    n.href && i.get("Location") === null && i.set("Location", n.href);
    const s = new Response(null,{
        status: n.statusCode,
        headers: i
    });
    if (s.options = n,
    n.throw)
        throw s;
    return s
}
function n1(n) {
    return n instanceof Response && !!n.options
}
function _b(n) {
    return {
        input: ({url: i}) => {
            for (const s of n)
                i = Of(s, i);
            return i
        }
        ,
        output: ({url: i}) => {
            for (let s = n.length - 1; s >= 0; s--)
                i = i1(n[s], i);
            return i
        }
    }
}
function Rb(n) {
    const i = e1(n.basepath)
      , s = `/${i}`
      , o = n.caseSensitive ? s : s.toLowerCase()
      , r = `${o}/`;
    return {
        input: ({url: c}) => {
            const h = n.caseSensitive ? c.pathname : c.pathname.toLowerCase();
            return h === o ? c.pathname = "/" : h.startsWith(r) && (c.pathname = c.pathname.slice(s.length)),
            c
        }
        ,
        output: ({url: c}) => (c.pathname = Wo(["/", i, c.pathname]),
        c)
    }
}
function Of(n, i) {
    var o;
    const s = (o = n == null ? void 0 : n.input) == null ? void 0 : o.call(n, {
        url: i
    });
    if (s) {
        if (typeof s == "string")
            return new URL(s);
        if (s instanceof URL)
            return s
    }
    return i
}
function i1(n, i) {
    var o;
    const s = (o = n == null ? void 0 : n.output) == null ? void 0 : o.call(n, {
        url: i
    });
    if (s) {
        if (typeof s == "string")
            return new URL(s);
        if (s instanceof URL)
            return s
    }
    return i
}
function Db(n, i) {
    const {createMutableStore: s, createReadonlyStore: o, batch: r} = i
      , c = new Map
      , h = s("idle")
      , d = s(n)
      , p = s(void 0)
      , m = s([])
      , v = o( () => m.get().map(A => c.get(A).get()))
      , y = o( () => ({
        status: h.get(),
        isLoading: h.get() === "pending",
        matches: v.get(),
        location: d.get(),
        resolvedLocation: p.get()
    }));
    function S(A) {
        let E = c.get(A);
        return E || (E = s(void 0),
        c.set(A, E)),
        E
    }
    const b = {
        status: h,
        location: d,
        resolvedLocation: p,
        ids: m,
        matches: v,
        byRoute: c,
        __store: y,
        getMatchStore: S,
        setMatches: T
    };
    function T(A) {
        const E = m.get()
          , R = A.map(_ => _.routeId);
        r( () => {
            $S(E, R) || m.set(R);
            for (const _ of E)
                R.includes(_) || c.get(_).set( () => {}
                );
            for (const _ of A) {
                const O = S(_.routeId);
                O.get() !== _ && O.set(_)
            }
        }
        )
    }
    return b
}
var pi = "__TSR_index"
  , ry = "popstate"
  , uy = "beforeunload";
function Ob(n) {
    let i = n.getLocation();
    const s = new Set
      , o = h => {
        i = n.getLocation(),
        s.forEach(d => d({
            location: i,
            action: h
        }))
    }
      , r = h => {
        n.notifyOnIndexChange ?? !0 ? o(h) : i = n.getLocation()
    }
      , c = async ({task: h, navigateOpts: d, ...p}) => {
        var y, S;
        if ((d == null ? void 0 : d.ignoreBlocker) ?? !1) {
            h();
            return
        }
        const m = ((y = n.getBlockers) == null ? void 0 : y.call(n)) ?? []
          , v = p.type === "PUSH" || p.type === "REPLACE";
        if (typeof document < "u" && m.length && v)
            for (const b of m) {
                const T = dr(p.path, p.state);
                if (await b.blockerFn({
                    currentLocation: i,
                    nextLocation: T,
                    action: p.type
                })) {
                    (S = n.onBlocked) == null || S.call(n);
                    return
                }
            }
        h()
    }
    ;
    return {
        get location() {
            return i
        },
        get length() {
            return n.getLength()
        },
        subscribers: s,
        subscribe: h => (s.add(h),
        () => {
            s.delete(h)
        }
        ),
        push: (h, d, p) => {
            const m = i.state[pi];
            d = cy(m + 1, d),
            c({
                task: () => {
                    n.pushState(h, d),
                    o({
                        type: "PUSH"
                    })
                }
                ,
                navigateOpts: p,
                type: "PUSH",
                path: h,
                state: d
            })
        }
        ,
        replace: (h, d, p) => {
            const m = i.state[pi];
            d = cy(m, d),
            c({
                task: () => {
                    n.replaceState(h, d),
                    o({
                        type: "REPLACE"
                    })
                }
                ,
                navigateOpts: p,
                type: "REPLACE",
                path: h,
                state: d
            })
        }
        ,
        go: (h, d) => {
            c({
                task: () => {
                    n.go(h),
                    r({
                        type: "GO",
                        index: h
                    })
                }
                ,
                navigateOpts: d,
                type: "GO"
            })
        }
        ,
        back: h => {
            c({
                task: () => {
                    n.back((h == null ? void 0 : h.ignoreBlocker) ?? !1),
                    r({
                        type: "BACK"
                    })
                }
                ,
                navigateOpts: h,
                type: "BACK"
            })
        }
        ,
        forward: h => {
            c({
                task: () => {
                    n.forward((h == null ? void 0 : h.ignoreBlocker) ?? !1),
                    r({
                        type: "FORWARD"
                    })
                }
                ,
                navigateOpts: h,
                type: "FORWARD"
            })
        }
        ,
        canGoBack: () => i.state[pi] !== 0,
        createHref: h => n.createHref(h),
        block: h => {
            var p;
            if (!n.setBlockers)
                return () => {}
                ;
            const d = ((p = n.getBlockers) == null ? void 0 : p.call(n)) ?? [];
            return n.setBlockers([...d, h]),
            () => {
                var v, y;
                const m = ((v = n.getBlockers) == null ? void 0 : v.call(n)) ?? [];
                (y = n.setBlockers) == null || y.call(n, m.filter(S => S !== h))
            }
        }
        ,
        flush: () => {
            var h;
            return (h = n.flush) == null ? void 0 : h.call(n)
        }
        ,
        destroy: () => {
            var h;
            return (h = n.destroy) == null ? void 0 : h.call(n)
        }
        ,
        notify: o
    }
}
function cy(n, i) {
    i || (i = {});
    const s = fh();
    return {
        ...i,
        key: s,
        __TSR_key: s,
        [pi]: n
    }
}
function zb(n) {
    var q, Q;
    const i = typeof document < "u" ? window : void 0
      , s = i.history.pushState
      , o = i.history.replaceState;
    let r = [];
    const c = () => r
      , h = Z => r = Z
      , d = (Z => Z)
      , p = ( () => dr(`${i.location.pathname}${i.location.search}${i.location.hash}`, i.history.state));
    if (!((q = i.history.state) != null && q.__TSR_key) && !((Q = i.history.state) != null && Q.key)) {
        const Z = fh();
        i.history.replaceState({
            [pi]: 0,
            key: Z,
            __TSR_key: Z
        }, "")
    }
    let m = p(), v, y = !1, S = !1, b = !1, T = !1;
    const A = () => m;
    let E;
    const R = () => {
        E && (Y._ignoreSubscribers = !0,
        (E[2] ? i.history.pushState : i.history.replaceState)(E[1], "", E[0]),
        Y._ignoreSubscribers = !1,
        E = void 0,
        v = void 0)
    }
      , _ = (Z, K, W) => {
        const tt = d(K)
          , pt = !!E;
        pt || (v = m),
        m = dr(K, W),
        E = [tt, W, (E == null ? void 0 : E[2]) || Z],
        pt || queueMicrotask( () => R())
    }
      , O = Z => {
        m = p(),
        Y.notify({
            type: Z
        })
    }
      , V = async () => {
        if (S) {
            S = !1;
            return
        }
        const Z = p()
          , K = Z.state[pi] - m.state[pi]
          , W = K === 1
          , tt = K === -1
          , pt = !W && !tt || y;
        y = !1;
        const rt = pt ? "GO" : tt ? "BACK" : "FORWARD"
          , ot = pt ? {
            type: "GO",
            index: K
        } : {
            type: tt ? "BACK" : "FORWARD"
        };
        if (b)
            b = !1;
        else {
            const B = c();
            if (typeof document < "u" && B.length) {
                for (const J of B)
                    if (await J.blockerFn({
                        currentLocation: m,
                        nextLocation: Z,
                        action: rt
                    })) {
                        S = !0,
                        i.history.go(1),
                        Y.notify(ot);
                        return
                    }
            }
        }
        m = p(),
        Y.notify(ot)
    }
      , P = Z => {
        if (T) {
            T = !1;
            return
        }
        let K = !1;
        const W = c();
        if (typeof document < "u" && W.length)
            for (const tt of W) {
                const pt = tt.enableBeforeUnload ?? !0;
                if (pt === !0) {
                    K = !0;
                    break
                }
                if (typeof pt == "function" && pt() === !0) {
                    K = !0;
                    break
                }
            }
        if (K)
            return Z.preventDefault(),
            Z.returnValue = ""
    }
      , Y = Ob({
        getLocation: A,
        getLength: () => i.history.length,
        pushState: (Z, K) => _(!0, Z, K),
        replaceState: (Z, K) => _(!1, Z, K),
        back: Z => (Z && (b = !0),
        T = !0,
        i.history.back()),
        forward: Z => {
            Z && (b = !0),
            T = !0,
            i.history.forward()
        }
        ,
        go: Z => {
            y = !0,
            i.history.go(Z)
        }
        ,
        createHref: Z => d(Z),
        flush: R,
        destroy: () => {
            i.history.pushState = s,
            i.history.replaceState = o,
            i.removeEventListener(uy, P, {
                capture: !0
            }),
            i.removeEventListener(ry, V)
        }
        ,
        onBlocked: () => {
            v && m !== v && (m = v)
        }
        ,
        getBlockers: c,
        setBlockers: h,
        notifyOnIndexChange: !1
    });
    return i.addEventListener(uy, P, {
        capture: !0
    }),
    i.addEventListener(ry, V),
    i.history.pushState = function(...Z) {
        const K = s.apply(i.history, Z);
        return Y._ignoreSubscribers || O("PUSH"),
        K
    }
    ,
    i.history.replaceState = function(...Z) {
        const K = o.apply(i.history, Z);
        return Y._ignoreSubscribers || O("REPLACE"),
        K
    }
    ,
    Y
}
function Lb(n) {
    let i = n.replace(/[\x00-\x1f\x7f]/g, "");
    return i.startsWith("//") && (i = "/" + i.replace(/^\/+/, "")),
    i
}
function dr(n, i) {
    const s = Lb(n)
      , o = s.indexOf("#")
      , r = s.indexOf("?")
      , c = fh();
    return {
        href: s,
        pathname: s.substring(0, o > 0 ? r > 0 ? Math.min(o, r) : o : r > 0 ? r : s.length),
        hash: o > -1 ? s.substring(o) : "",
        search: r > -1 ? s.slice(r, o === -1 ? void 0 : o) : "",
        state: i || {
            [pi]: 0,
            key: c,
            __TSR_key: c
        }
    }
}
function fh() {
    return (Math.random() + 1).toString(36).substring(7)
}
function fy(n) {
    var i, s;
    return n.options.loader || n.options.beforeLoad || n.lazyFn || ((i = n.options.component) == null ? void 0 : i.preload) || ((s = n.options.pendingComponent) == null ? void 0 : s.preload)
}
function Rr(n, i) {
    return {
        fromLocation: i,
        toLocation: n,
        pathChanged: (i == null ? void 0 : i.pathname) !== n.pathname,
        hrefChanged: (i == null ? void 0 : i.href) !== n.href,
        hashChanged: (i == null ? void 0 : i.hash) !== n.hash
    }
}
function hy({key: n, __TSR_key: i, __TSR_index: s, __hashScrollIntoViewOptions: o, ...r}) {
    return r
}
function jb(n, i, s, o) {
    var r, c, h, d;
    for (const p of i) {
        if (o && n._tx !== o)
            return;
        s.some(m => m.routeId === p.routeId) || (c = (r = n.routesById[p.routeId].options).onLeave) == null || c.call(r, p)
    }
    for (const p of s) {
        if (o && n._tx !== o)
            return;
        (d = (h = n.routesById[p.routeId].options)[i.some(m => m.routeId === p.routeId) ? "onStay" : "onEnter"]) == null || d.call(h, p)
    }
}
var Nb = class {
    constructor(n, i) {
        this.tempLocationKey = `${Math.round(Math.random() * 1e7)}`,
        this._scroll = {
            next: !0
        },
        this.subscribers = new Set,
        this._cache = new Map,
        this._committed = [],
        this.routeBranchCache = new WeakMap,
        this.lightweightCache = new WeakMap,
        this.startTransition = async s => (s(),
        !1),
        this.update = s => {
            const o = this.options
              , r = this.basepath ?? (o == null ? void 0 : o.basepath) ?? "/"
              , c = this.basepath === void 0
              , h = o == null ? void 0 : o.rewrite;
            if (this.options = {
                ...o,
                ...s
            },
            this.isServer = this.options.isServer ?? XS ?? typeof document > "u",
            this.protocolAllowlist = new Set(this.options.protocolAllowlist),
            this.options.pathParamsAllowedCharacters && (this.pathParamsDecoder = hb(this.options.pathParamsAllowedCharacters)),
            (!this.history || this.options.history && this.options.history !== this.history) && (this.options.history ? this.history = this.options.history : this.history = zb()),
            this.origin = this.options.origin,
            this.origin || (window != null && window.origin && window.origin !== "null" ? this.origin = window.origin : this.origin = "http://localhost"),
            this.history && this.updateLatestLocation(),
            this.options.routeTree !== this.routeTree) {
                this.routeTree = this.options.routeTree;
                let m;
                this.resolvePathCache = fr(1e3),
                m = this.buildRouteTree(),
                this.setRoutes(m)
            }
            if (!this.stores && this.latestLocation) {
                const m = this.getStoreConfig(this);
                this.batch = m.batch,
                this.stores = Db(this.latestLocation, m),
                Sb(this)
            }
            const d = this.options.basepath ?? "/"
              , p = this.options.rewrite;
            if (c || r !== d || h !== p) {
                this.basepath = d;
                const m = []
                  , v = e1(d);
                v && v !== "/" && m.push(Rb({
                    basepath: d
                })),
                p && m.push(p),
                this.rewrite = m.length === 0 ? void 0 : m.length === 1 ? m[0] : _b(m),
                this.history && this.updateLatestLocation(),
                this.stores && this.stores.location.set(this.latestLocation)
            }
        }
        ,
        this.updateLatestLocation = () => {
            this.latestLocation = this.parseLocation(this.history.location, this.latestLocation)
        }
        ,
        this.buildRouteTree = () => {
            const s = lb(this.routeTree, this.options.caseSensitive, (o, r) => {
                o.init({
                    originalIndex: r
                })
            }
            );
            return this.options.routeMasks && eb(this.options.routeMasks, s.processedTree),
            s
        }
        ,
        this.subscribe = (s, o) => {
            const r = {
                eventType: s,
                fn: o
            };
            return this.subscribers.add(r),
            () => {
                this.subscribers.delete(r)
            }
        }
        ,
        this.emit = s => {
            for (const o of this.subscribers)
                if (o.eventType === s.type)
                    try {
                        o.fn(s)
                    } catch (r) {
                        console.error(r)
                    }
        }
        ,
        this.parseLocation = (s, o) => {
            const r = ({pathname: p, search: m, hash: v, href: y, state: S}) => {
                if (!this.rewrite && !/[ \x00-\x1f\x7f\u0080-\uffff]/.test(p)) {
                    const R = this.options.parseSearch(m)
                      , _ = this.options.stringifySearch(R);
                    return {
                        href: p + _ + v,
                        publicHref: p + _ + v,
                        pathname: tl(p).path,
                        external: !1,
                        searchStr: _,
                        search: qi(o == null ? void 0 : o.search, R),
                        hash: tl(v.slice(1)).path,
                        state: ki(o == null ? void 0 : o.state, S)
                    }
                }
                const b = new URL(y,this.origin)
                  , T = Of(this.rewrite, b)
                  , A = this.options.parseSearch(T.search)
                  , E = this.options.stringifySearch(A);
                return T.search = E,
                {
                    href: T.href.replace(T.origin, ""),
                    publicHref: y,
                    pathname: tl(T.pathname).path,
                    external: !!this.rewrite && T.origin !== this.origin,
                    searchStr: E,
                    search: qi(o == null ? void 0 : o.search, A),
                    hash: tl(T.hash.slice(1)).path,
                    state: ki(o == null ? void 0 : o.state, S)
                }
            }
              , c = r(s)
              , {__tempLocation: h, __tempKey: d} = c.state;
            if (h && (!d || d === this.tempLocationKey)) {
                const p = r(h);
                return p.state.key = c.state.key,
                p.state.__TSR_key = c.state.__TSR_key,
                delete p.state.__tempLocation,
                {
                    ...p,
                    maskedLocation: c
                }
            }
            return c
        }
        ,
        this.resolvePathWithBase = (s, o) => fb({
            base: s,
            to: o,
            trailingSlash: this.options.trailingSlash,
            cache: this.resolvePathCache
        }),
        this.matchRoutes = (s, o, r) => typeof s == "string" ? this.matchRoutesInternal({
            pathname: s,
            search: o
        }, r) : this.matchRoutesInternal(s, o),
        this.getMatchedRoutes = s => {
            const o = Object.create(null)
              , r = ab(Nn(s), this.processedTree, !0);
            return r && Object.assign(o, r.rawParams),
            [(r == null ? void 0 : r.branch) || [this.routesById.__root__], o, r == null ? void 0 : r.route]
        }
        ,
        this.buildLocation = s => {
            const o = (c={}) => {
                var Z, K;
                if (c.href) {
                    const W = dr(c.href, {});
                    c = {
                        ...c,
                        to: Of(this.rewrite, new URL(W.pathname,this.origin)).pathname,
                        search: this.options.parseSearch(W.search),
                        hash: W.hash.slice(1)
                    }
                }
                const h = c._fromLocation || this._pendingLocation || this.latestLocation
                  , d = this.matchRoutesLightweight(h);
                c.from;
                const p = c.unsafeRelative === "path" ? h.pathname : c.from ?? d[1]
                  , m = d[2]
                  , v = d[3]
                  , y = this.resolvePathWithBase(p, c.to ? `${c.to}` : ".");
                let S = dy(c.params, v);
                const b = this.routesByPath[Nn(y)];
                let T;
                if (b)
                    T = this.getRouteBranch(b);
                else if (y.includes("$"))
                    T = [];
                else {
                    const [W,tt,pt] = this.getMatchedRoutes(y);
                    T = W,
                    this.options.notFoundRoute && (!pt || pt.path !== "/" && tt["**"]) && (T = [...T, this.options.notFoundRoute])
                }
                if (T.length && Qg(S))
                    for (const W of T) {
                        const tt = ((Z = W.options.params) == null ? void 0 : Z.stringify) ?? W.options.stringifyParams;
                        if (tt) {
                            S === v && (S = Object.assign(Object.create(null), S));
                            try {
                                Object.assign(S, tt(S))
                            } catch {}
                        }
                    }
                const A = s.leaveParams ? y : tl(ay({
                    path: y,
                    params: S,
                    decoder: this.pathParamsDecoder,
                    server: this.isServer
                }).interpolatedPath).path;
                let E = m;
                if (s._includeValidateSearch && ((K = this.options.search) != null && K.strict)) {
                    const W = {};
                    T.forEach(tt => {
                        if (tt.options.validateSearch)
                            try {
                                Object.assign(W, tr(tt.options.validateSearch, {
                                    ...W,
                                    ...E
                                }))
                            } catch {}
                    }
                    ),
                    E = W
                }
                E = Bb(E, c, T, s._includeValidateSearch),
                E = qi(m, E);
                const R = this.options.stringifySearch(E)
                  , _ = c.hash === !0 ? h.hash : c.hash ? Qa(c.hash, h.hash) : void 0
                  , O = _ ? `#${_}` : "";
                let V = c.state === !0 ? h.state : c.state ? Qa(c.state, h.state) : {};
                c.state && (V = ki(h.state, V));
                const P = `${A}${R}${O}`;
                let Y, q, Q = !1;
                if (this.rewrite) {
                    const W = new URL(P,this.origin)
                      , tt = i1(this.rewrite, W);
                    Y = W.href.replace(W.origin, ""),
                    tt.origin !== this.origin ? (q = tt.href,
                    Q = !0) : q = tt.pathname + tt.search + tt.hash
                } else
                    Y = IS(P),
                    q = Y;
                return {
                    publicHref: q,
                    href: Y,
                    pathname: A,
                    search: E,
                    searchStr: R,
                    state: V,
                    hash: _ ?? "",
                    external: Q,
                    unmaskOnReload: c.unmaskOnReload
                }
            }
              , r = o(s);
            if (s.mask)
                r.maskedLocation = o({
                    from: s.from,
                    ...s.mask
                });
            else if (this.options.routeMasks) {
                const c = nb(r.pathname, this.processedTree);
                if (c) {
                    const h = Object.assign(Object.create(null), c.rawParams)
                      , {from: d, params: p, ...m} = c.route
                      , v = dy(p, h);
                    r.maskedLocation = o({
                        from: s.from,
                        ...m,
                        params: v
                    })
                }
            }
            return r
        }
        ,
        this.commitLocation = async ({viewTransition: s, ignoreBlocker: o, ...r}) => {
            let c;
            const h = Nn(this.latestLocation.href) === Nn(r.href) && mi(hy(r.state), hy(this.latestLocation.state))
              , d = this._commitPromise;
            let p;
            const m = new Promise(v => {
                p = v
            }
            );
            if (m.resolve = () => {
                p(),
                d == null || d.resolve()
            }
            ,
            this._commitPromise = m,
            h)
                this.load();
            else {
                let {maskedLocation: v, hashScrollIntoView: y, ...S} = r;
                v && (S = {
                    ...v,
                    state: {
                        ...v.state,
                        __tempKey: void 0,
                        __tempLocation: {
                            ...S,
                            search: S.searchStr,
                            state: {
                                ...S.state,
                                __tempKey: void 0,
                                __tempLocation: void 0,
                                __TSR_key: void 0,
                                key: void 0
                            }
                        }
                    }
                },
                (S.unmaskOnReload ?? this.options.unmaskOnReload ?? !1) && (S.state.__tempKey = this.tempLocationKey)),
                S.state.__hashScrollIntoViewOptions = y ?? this.options.defaultHashScrollIntoView ?? !0,
                this.shouldViewTransition = s,
                c = r.replace ? "REPLACE" : "PUSH",
                this.history[c === "REPLACE" ? "replace" : "push"](S.publicHref, S.state, {
                    ignoreBlocker: o
                }),
                this.history.subscribers.size || this.load({
                    action: {
                        type: c
                    }
                })
            }
            return this._scroll.next = r.resetScroll ?? !0,
            this._commitPromise
        }
        ,
        this.buildAndCommitLocation = ({replace: s, resetScroll: o, hashScrollIntoView: r, viewTransition: c, ignoreBlocker: h, ...d}={}) => {
            const p = this.buildLocation({
                ...d,
                _includeValidateSearch: !0
            });
            this._pendingLocation = p;
            const m = this.commitLocation({
                ...p,
                viewTransition: c,
                replace: s,
                resetScroll: o,
                hashScrollIntoView: r,
                ignoreBlocker: h
            });
            return queueMicrotask( () => {
                this._pendingLocation === p && (this._pendingLocation = void 0)
            }
            ),
            m
        }
        ,
        this.navigate = async ({to: s, reloadDocument: o, href: r, publicHref: c, ...h}) => {
            var p, m;
            let d = !1;
            if (r)
                try {
                    new URL(`${r}`),
                    d = !0
                } catch {}
            if (d && !o && (o = !0),
            o) {
                if (s !== void 0 || !r) {
                    const y = this.buildLocation({
                        to: s,
                        ...h
                    });
                    r = r ?? y.publicHref,
                    c = c ?? y.publicHref
                }
                const v = !d && c ? c : r;
                if (cr(v, this.protocolAllowlist))
                    return;
                if (!h.ignoreBlocker) {
                    const y = ((m = (p = this.history).getBlockers) == null ? void 0 : m.call(p)) ?? [];
                    for (const S of y)
                        if (S != null && S.blockerFn && await S.blockerFn({
                            currentLocation: this.latestLocation,
                            nextLocation: this.latestLocation,
                            action: "PUSH"
                        }))
                            return
                }
                h.replace ? window.location.replace(v) : window.location.href = v;
                return
            }
            return this.buildAndCommitLocation({
                ...h,
                href: r,
                to: s,
                _isNavigate: !0
            })
        }
        ,
        this.load = async s => {
            this.updateLatestLocation(),
            s != null && s.action && (this._scroll.hash = s.action.type === "PUSH" || s.action.type === "REPLACE"),
            await Kb(this, s)
        }
        ,
        this.startViewTransition = s => {
            var r, c;
            const o = this.shouldViewTransition ?? this.options.defaultViewTransition;
            if (this.shouldViewTransition = void 0,
            o && typeof document.startViewTransition == "function") {
                let h;
                if (typeof o == "object" && ((c = (r = window.CSS) == null ? void 0 : r.supports) != null && c.call(r, "selector(:active-view-transition-type(a))"))) {
                    const d = this.latestLocation
                      , p = this.stores.resolvedLocation.get()
                      , m = typeof o.types == "function" ? o.types(Rr(d, p)) : o.types;
                    if (m === !1)
                        return s();
                    h = {
                        update: s,
                        types: m
                    }
                } else
                    h = s;
                return document.startViewTransition(h).updateCallbackDone
            }
            return s()
        }
        ,
        this.invalidate = s => {
            var m, v;
            const o = this._committed
              , r = s == null ? void 0 : s.filter
              , c = this._preloads
              , h = new Set([...o, ...this._cache.values(), ...[...(c == null ? void 0 : c.values()) ?? []].flat(), ...((m = this._tx) == null ? void 0 : m[3]) ?? []].filter(y => !r || r(y)).map(y => y.id))
              , d = [];
            for (const [y,S] of c ?? [])
                S.some(b => h.has(b.id)) && (c.delete(y),
                d.push(y));
            const p = y => {
                if (h.has(y.id)) {
                    const S = this.routesById[y.routeId]
                      , b = {
                        ...y,
                        invalid: !0,
                        ...(s != null && s.forcePending || y.status === "error" || y.status === "notFound") && fy(S) ? {
                            status: "pending",
                            error: void 0
                        } : void 0
                    };
                    return y._flight = void 0,
                    b
                }
                return y
            }
            ;
            this._committed = o.map(p);
            for (const [y,S] of this._cache)
                h.has(y) && (S.invalid = !0,
                s != null && s.forcePending && (S.status = "pending"));
            for (const y of h)
                (v = this._flights) == null || v.delete(y);
            for (const y of d)
                y.abort();
            return this.shouldViewTransition = !1,
            this.load({
                sync: s == null ? void 0 : s.sync
            })
        }
        ,
        this.resolveRedirect = s => {
            const o = s.headers.get("Location");
            if (s.options.href) {
                if (o)
                    try {
                        const r = new URL(o);
                        if (this.origin && r.origin === this.origin) {
                            const c = r.pathname + r.search + r.hash;
                            s.options.href = c,
                            s.headers.set("Location", c)
                        }
                    } catch {}
            } else {
                const r = this.buildLocation(s.options).publicHref || "/";
                s.options.href = r,
                s.headers.set("Location", r)
            }
            if (s.options.href && cr(s.options.href, this.protocolAllowlist))
                throw new Error("Redirect blocked: unsafe protocol");
            return s.headers.get("Location") || s.headers.set("Location", s.options.href),
            s
        }
        ,
        this.clearCache = s => {
            var m;
            const o = this._cache
              , r = this._preloads
              , c = s == null ? void 0 : s.filter
              , h = []
              , d = [];
            for (const [v,y] of o)
                (!c || c(y)) && (d.push(v),
                h.push(y));
            const p = [];
            for (const [v,y] of r ?? [])
                (!c || y.some(c)) && (p.push(v),
                h.push(...y));
            for (const v of d)
                o.delete(v);
            for (const v of p)
                r.delete(v);
            for (const v of h) {
                const y = v._flight;
                v._flight = void 0,
                y && !--y[2] && (((m = this._flights) == null ? void 0 : m.get(v.id)) === y && this._flights.delete(v.id),
                p.push(y[1]))
            }
            for (const v of p)
                v.abort()
        }
        ,
        this.loadRouteChunk = Za,
        this.preloadRoute = s => Zb(this, s),
        this.matchRoute = (s, o) => {
            const r = {
                ...s,
                to: s.to ? this.resolvePathWithBase(s.from || "", s.to) : void 0,
                params: s.params || {},
                leaveParams: !0
            }
              , c = this.buildLocation(r)
              , h = this.stores.status.get() === "pending";
            if (o != null && o.pending && !h)
                return !1;
            const d = (o == null ? void 0 : o.pending) ?? !h ? this.latestLocation : this.stores.resolvedLocation.get() || this.stores.location.get()
              , p = ib(c.pathname, (o == null ? void 0 : o.caseSensitive) ?? !1, (o == null ? void 0 : o.fuzzy) ?? !1, d.pathname, this.processedTree);
            return !p || s.params && !mi(p.rawParams, s.params, {
                partial: !0
            }) ? !1 : (o == null ? void 0 : o.includeSearch) ?? !0 ? mi(d.search, c.search, {
                partial: !0
            }) ? p.rawParams : !1 : p.rawParams
        }
        ,
        this.getStoreConfig = i,
        this.update({
            defaultPreloadDelay: 50,
            defaultPendingMs: 1e3,
            defaultPendingMinMs: 500,
            context: void 0,
            ...n,
            caseSensitive: n.caseSensitive ?? !1,
            notFoundMode: n.notFoundMode ?? "fuzzy",
            stringifySearch: n.stringifySearch ?? Eb,
            parseSearch: n.parseSearch ?? Ab,
            protocolAllowlist: n.protocolAllowlist ?? WS
        }),
        self.__TSR_ROUTER__ = this
    }
    isShell() {
        return !!this.options.isShell
    }
    get state() {
        return this.stores.__store.get()
    }
    setRoutes({routesById: n, routesByPath: i, processedTree: s}) {
        this.routesById = n,
        this.routesByPath = i,
        this.processedTree = s;
        const o = this.options.notFoundRoute;
        o && (o.init({
            originalIndex: 99999999999
        }),
        this.routesById[o.id] = o)
    }
    getRouteBranch(n) {
        let i = this.routeBranchCache.get(n);
        return i || (i = $g(n),
        this.routeBranchCache.set(n, i)),
        i
    }
    matchRoutesInternal(n, i) {
        var S, b;
        const [s,o,r] = this.getMatchedRoutes(n.pathname);
        let c = s
          , h = !1;
        (r ? r.path !== "/" && o["**"] : Nn(n.pathname)) && (this.options.notFoundRoute ? c = [...c, this.options.notFoundRoute] : h = !0);
        const d = h ? Ub(this.options.notFoundMode, c) : void 0
          , p = new Array(c.length)
          , m = this._committed
          , v = (T, A) => {
            const E = m[A];
            return (E == null ? void 0 : E.routeId) === T.id ? E : T === this.options.notFoundRoute ? m.find(R => R.routeId === T.id) : void 0
        }
        ;
        let y;
        for (let T = 0; T < c.length; T++) {
            const A = c[T]
              , E = p[T - 1];
            let R, _, O;
            {
                const ot = (E == null ? void 0 : E.search) ?? n.search
                  , B = (E == null ? void 0 : E._strictSearch) ?? void 0;
                try {
                    const J = tr(A.options.validateSearch, {
                        ...ot
                    }) ?? void 0;
                    R = {
                        ...ot,
                        ...J
                    },
                    _ = {
                        ...B,
                        ...J
                    }
                } catch (J) {
                    let $ = J;
                    if (J instanceof mr || ($ = new mr(J.message,{
                        cause: J
                    })),
                    i != null && i.throwOnError)
                        throw $;
                    R = ot,
                    _ = {},
                    O = $
                }
            }
            let V = ""
              , P = "";
            try {
                V = ((b = (S = A.options).loaderDeps) == null ? void 0 : b.call(S, {
                    search: R
                })) ?? "",
                P = V && JSON.stringify(V) || ""
            } catch (ot) {
                if (i != null && i.throwOnError)
                    throw ot;
                O ?? (O = ot)
            }
            const {interpolatedPath: Y, usedParams: q} = ay({
                path: A.fullPath,
                params: o,
                decoder: this.pathParamsDecoder,
                server: this.isServer
            })
              , Q = A.id + Y + P
              , Z = v(A, T)
              , K = this._cache.get(Q) ?? ((Z == null ? void 0 : Z.id) === Q ? Z : void 0);
            y = (K == null ? void 0 : K._strictParams) ?? Object.assign(q, y);
            let W;
            if (!K)
                try {
                    my(A, y)
                } catch (ot) {
                    if (Fa(ot) || n1(ot) ? W = ot : W = new Vb(ot.message,{
                        cause: ot
                    }),
                    i != null && i.throwOnError)
                        throw W
                }
            const tt = Z ? "stay" : "enter";
            let pt;
            if (K)
                pt = {
                    ...K,
                    cause: tt,
                    search: qi(Z ? Z.search : K.search, R),
                    _strictSearch: _,
                    searchError: O
                };
            else {
                const ot = fy(A) ? "pending" : "success";
                pt = {
                    id: Q,
                    ssr: A.options.ssr,
                    index: T,
                    routeId: A.id,
                    params: (Z == null ? void 0 : Z.params) ?? y,
                    _strictParams: y,
                    pathname: Y,
                    updatedAt: Date.now(),
                    search: Z ? qi(Z.search, R) : R,
                    _strictSearch: _,
                    searchError: O,
                    status: ot,
                    isFetching: !1,
                    error: void 0,
                    paramsError: W,
                    context: {},
                    abortController: (i == null ? void 0 : i._controller) ?? new AbortController,
                    cause: tt,
                    loaderDeps: Z ? ki(Z.loaderDeps, V) : V,
                    invalid: !1,
                    preload: !1,
                    staticData: A.options.staticData || {},
                    fullPath: A.fullPath
                }
            }
            const rt = d === A.id;
            pt._notFound && !rt && (pt.error = void 0),
            pt._notFound = rt,
            p[T] = pt
        }
        for (let T = 0; T < p.length; T++) {
            const A = p[T];
            A.params = A.cause === "stay" ? qi(A.params, y) : y,
            i != null && i._controller && (A.context = {})
        }
        return p
    }
    matchRoutesLightweight(n) {
        const i = cl(this.stores.ids.get())
          , s = i ? this.stores.byRoute.get(i).get() : void 0
          , o = s == null ? void 0 : s.id
          , r = this.lightweightCache.get(n);
        if (r && r[0] === o)
            return r[1];
        const [c,h] = this.getMatchedRoutes(n.pathname)
          , d = cl(c)
          , p = {
            ...n.search
        };
        for (const S of c)
            try {
                Object.assign(p, tr(S.options.validateSearch, p))
            } catch {}
        const m = s && s.routeId === d.id && s.pathname === n.pathname;
        let v;
        if (m)
            v = s.params;
        else {
            const S = Object.assign(Object.create(null), h);
            for (const b of c)
                try {
                    my(b, S)
                } catch {}
            v = S
        }
        const y = [c, d.fullPath, p, v];
        return this.lightweightCache.set(n, [o, y]),
        y
    }
}
  , mr = class extends Error {
}
  , Vb = class extends Error {
}
;
function tr(n, i) {
    if (n == null)
        return {};
    if ("~standard" in n) {
        const s = n["~standard"].validate(i);
        if (s instanceof Promise)
            throw new mr("Async validation not supported");
        if (s.issues)
            throw new mr(JSON.stringify(s.issues, void 0, 2),{
                cause: s
            });
        return s.value
    }
    return "parse" in n ? n.parse(i) : typeof n == "function" ? n(i) : {}
}
function Bb(n, i, s, o) {
    var h;
    const r = [];
    for (const d of s) {
        const p = d.options;
        if ("search" in p)
            (h = p.search) != null && h.middlewares && r.push(...p.search.middlewares);
        else if (p.preSearchFilters || p.postSearchFilters) {
            const v = ({search: y, next: S}) => {
                const b = S(p.preSearchFilters ? p.preSearchFilters.reduce( (T, A) => A(T), y) : y);
                return p.postSearchFilters ? p.postSearchFilters.reduce( (T, A) => A(T), b) : b
            }
            ;
            r.push(v)
        }
        const m = p.validateSearch;
        if (o && m) {
            const v = ({search: y, next: S, meta: b}) => {
                const T = S(y);
                try {
                    const A = tr(m, T);
                    if (b && A)
                        for (const E in A)
                            E in T || (b.defaulted || (b.defaulted = new Map)).set(E, A[E]);
                    return {
                        ...T,
                        ...A
                    }
                } catch {}
                return T
            }
            ;
            r.push(v)
        }
    }
    const c = (d, p, m) => {
        if (d >= r.length) {
            if (!i.search)
                return {};
            if (i.search === !0)
                return p;
            const y = Qa(i.search, p);
            return m && (m.explicit = y),
            y
        }
        const v = (y, S) => {
            if (S) {
                const b = m || {};
                return {
                    search: c(d + 1, y, b),
                    meta: b
                }
            }
            return c(d + 1, y, m)
        }
        ;
        return r[d]({
            search: p,
            next: v,
            meta: m
        })
    }
    ;
    return c(0, n)
}
function Ub(n, i) {
    if (n !== "root") {
        let s;
        for (let o = i.length - 1; o >= 0; o--) {
            const r = i[o];
            if (r.options.notFoundComponent)
                return r.id;
            s || (s = r.children && r.id)
        }
        if (s)
            return s
    }
    return Ka
}
function dy(n, i) {
    if (n === !1 || n === null)
        return Object.create(null);
    if ((n ?? !0) === !0)
        return i;
    const s = Object.assign(Object.create(null), i);
    return Object.assign(s, Qa(n, s))
}
function my(n, i) {
    var o;
    const s = ((o = n.options.params) == null ? void 0 : o.parse) ?? n.options.parseParams;
    s && Object.assign(i, s(i))
}
function zf(n, i) {
    var s, o;
    return (o = (s = n.options[i]) == null ? void 0 : s.preload) == null ? void 0 : o.call(s)
}
function Hb(n, i) {
    const s = zf(n, "component");
    let o = zf(n, "pendingComponent");
    return i && (o ? o = o.then(i) : i()),
    s && o ? Promise.all([s, o]).then( () => {}
    ) : s ?? o
}
function Za(n, i, s) {
    const o = () => i === !1 ? void 0 : i ? zf(n, i) : Hb(n, s)
      , r = n._lazy;
    if (r)
        return r === !0 ? o() : r.then(o);
    if (!n.lazyFn)
        return o();
    const c = n.lazyFn().then(h => {
        {
            const {id: d, ...p} = h.options;
            Object.assign(n.options, p),
            n._lazy = !0
        }
    }
    , h => {
        throw n._lazy = void 0,
        h
    }
    );
    return n._lazy = c,
    c.then(o)
}
function hh(n) {
    const i = n.findIndex(s => s.status !== "success" || s._notFound) + 1;
    return i && i < n.length ? n.slice(0, i) : n
}
const rn = 0
  , Bn = 1
  , Dr = 2
  , De = 3
  , yi = [4];
function fl(n) {
    return typeof n[0] == "number"
}
function Fi(n, i) {
    return i.aborted ? Promise.race([Promise.reject(i), n]) : new Promise( (s, o) => {
        const r = () => o(i);
        i.addEventListener("abort", r, {
            once: !0
        }),
        Promise.resolve(n).then(s, o).finally( () => i.removeEventListener("abort", r))
    }
    )
}
function Ji(n, i) {
    return n.routesById[i.routeId]
}
function hl(n, i, s) {
    return n1(n) ? [De, n] : Fa(n) ? (n.routeId || (n.routeId = s),
    [Dr, n]) : i ? (typeof (n == null ? void 0 : n.then) == "function" && (n = new Error("A Promise was thrown",{
        cause: n
    })),
    [Bn, n]) : [rn, n]
}
function dh(n, i) {
    var o, r;
    let s = hl(i, !0, n.id);
    if (s[0] !== Bn)
        return s;
    try {
        (r = (o = n.options).onError) == null || r.call(o, s[1])
    } catch (c) {
        s = hl(c, !0, n.id)
    }
    return s
}
function al(n, i, s, o, r) {
    return r[0].signal.aborted ? yi : yh(n, i, s, dh(s, o), r)
}
async function qb(n, i, s, o, r, c) {
    var v, y;
    const [h,d] = i
      , p = s[0].signal
      , m = !!s[3];
    for (let S = s[6] ?? 0; S < o; S++) {
        const b = d[S]
          , T = Ji(n, b);
        b.abortController = s[0];
        const A = ((v = d[S - 1]) == null ? void 0 : v.context) ?? n.options.context ?? {}
          , E = {
            params: b.params,
            location: h,
            navigate: V => n.navigate({
                ...V,
                _fromLocation: h
            }),
            buildLocation: n.buildLocation,
            cause: m ? "preload" : b.cause,
            abortController: s[0],
            preload: m,
            matches: d,
            routeId: T.id
        };
        try {
            const V = b._ctx || (b._ctx = T.options.context ? T.options.context({
                ...E,
                deps: b.loaderDeps,
                context: A
            }) || {} : void 0);
            b.context = {
                ...A,
                ...V
            }
        } catch (V) {
            return Vn(n, b),
            [S, al(n, i, T, V, s)]
        }
        if (p.aborted)
            return [S, yi];
        const R = b.paramsError ?? b.searchError;
        if (R !== void 0)
            return Vn(n, b),
            [S, al(n, i, T, R, s)];
        const _ = T.options.beforeLoad;
        if (!_)
            continue;
        const O = b.status;
        S >= c && (b.status = "pending",
        (y = s[7]) == null || y.call(s));
        try {
            dl(n, b, "beforeLoad", s[0]);
            const V = await Fi(_({
                ...E,
                search: b.search,
                context: b.context,
                ...n.options.additionalContext
            }), p);
            if (p.aborted)
                return [S, yi];
            const P = yh(n, i, T, hl(V, !1, T.id), s);
            if (P[0] !== rn)
                return Vn(n, b),
                [S, P];
            b.context = {
                ...b.context,
                ...V
            }
        } catch (V) {
            return Vn(n, b),
            [S, al(n, i, T, V, s)]
        } finally {
            b.status = O,
            dl(n, b, !1, s[0])
        }
    }
    r()
}
function mh(n, i, s) {
    var o;
    if (!(!s || --s[2])) {
        if (((o = n._flights) == null ? void 0 : o.get(i.id)) === s) {
            const r = n._tx;
            if (r && !r[0].signal.aborted && !r[3].includes(i) && r[3].some(c => c.id === i.id) && r[3].some(c => c.isFetching === "beforeLoad"))
                return;
            n._flights.delete(i.id)
        }
        return s[1]
    }
}
function Vn(n, i) {
    var o;
    const s = i._flight;
    i._flight = void 0,
    (o = mh(n, i, s)) == null || o.abort()
}
function be(n, i, s, o) {
    var c;
    const r = [];
    for (const h of i)
        if (!(s != null && s.includes(h))) {
            const d = h._flight;
            if (h._flight = void 0,
            o && (d == null ? void 0 : d[2]) === 1 && ((c = n._flights) == null ? void 0 : c.get(h.id)) === d && (s != null && s.some(p => p.id === h.id)))
                d[2] = 0;
            else {
                const p = mh(n, h, d);
                p && r.push(p)
            }
        }
    for (const h of r)
        h.abort()
}
function ph(n) {
    for (const i of n) {
        const s = i._flight;
        s && s[2]++
    }
}
function dl(n, i, s, o) {
    var h;
    if (i.isFetching = s,
    o && ((h = n._tx) == null ? void 0 : h[0]) !== o)
        return;
    const r = n.stores.byRoute.get(i.routeId)
      , c = r == null ? void 0 : r.get();
    (c == null ? void 0 : c.id) === i.id && r.set({
        ...c,
        isFetching: s
    })
}
function a1(n, i, s, o, r, c, h) {
    const d = i[0];
    return {
        params: s.params,
        location: d,
        navigate: p => n.navigate({
            ...p,
            _fromLocation: d
        }),
        cause: h ? "preload" : s.cause,
        abortController: r,
        preload: h,
        deps: s.loaderDeps,
        parentMatchPromise: c,
        context: s.context,
        route: o,
        ...n.options.additionalContext
    }
}
async function py(n, i, s, o, r, c, h) {
    const d = h[0]
      , p = d.signal;
    if (p.aborted)
        return yi;
    if (!r)
        return [rn, void 0];
    let m = s._flight;
    dl(n, s, "loader", d);
    try {
        if (!m) {
            const v = new AbortController;
            m = [Promise.resolve().then( () => r(a1(n, i, s, o, v, c, !!h[3]))).then(y => hl(y, !1, o.id), y => hl(y, !0, o.id)).then(y => {
                var S;
                return y[0] !== rn && ((S = n._flights) == null ? void 0 : S.get(s.id)) === m && (n._flights.delete(s.id),
                m[2] || v.abort()),
                y[0] === Bn && m[2] ? dh(o, y[1]) : y
            }
            ), v, 1],
            (n._flights ?? (n._flights = new Map)).set(s.id, m)
        }
        return s._flight = m,
        s.abortController = m[1],
        yh(n, i, o, await Fi(m[0], p), h)
    } catch (v) {
        if (v !== p || !p.aborted)
            throw v;
        return Vn(n, s),
        yi
    } finally {
        dl(n, s, !1, d)
    }
}
function yy(n, i, s) {
    i[0] !== De && (n.status = "success",
    n.error = void 0,
    i[0] === rn ? (n.loaderData = i[1],
    n.invalid = !1,
    n.updatedAt = Date.now(),
    n.preload = s) : n.invalid = !0)
}
function Gb(n, i, s) {
    const o = n._cache.get(i.id);
    if (o !== s || n._committed.some(c => c.id === i.id && c._flight === i._flight))
        return;
    const r = {
        ...i,
        _notFound: void 0,
        context: {}
    };
    r._flight && r._flight[2]++,
    n._cache.set(i.id, r),
    o && Vn(n, o)
}
function gy(n, i) {
    return i[0] === Bn || i[0] === Dr ? {
        ...n,
        status: i[0] === Bn ? "error" : "notFound",
        error: i[1],
        _flight: void 0
    } : n
}
function Yb(n, i, s, o, r, c, h) {
    var tt, pt;
    const d = i[1][s]
      , p = Ji(n, d)
      , m = !!c[3]
      , v = n._cache.get(d.id);
    let y, S = !1, b;
    try {
        if (d.status === "success" && (y = p.options.shouldReload,
        typeof y == "function" && (y = y(a1(n, i, d, p, c[0], r, m))),
        c[0].signal.aborted && (b = yi)),
        !b)
            if (d.status !== "success")
                S = !0;
            else {
                const rt = m || d.preload ? p.options.preloadStaleTime ?? n.options.defaultPreloadStaleTime ?? 3e4 : p.options.staleTime ?? n.options.defaultStaleTime ?? 0;
                S = !!(d.invalid || y || y === void 0 && Date.now() - d.updatedAt >= rt && (c[5] || d.cause === "enter" || c[2].some(ot => ot.routeId === d.routeId && ot.id !== d.id)))
            }
    } catch (rt) {
        d.invalid = !0,
        Vn(n, d),
        b = al(n, i, p, rt, c)
    }
    const T = p.options.loader
      , A = typeof T == "function"
      , E = A ? T : T == null ? void 0 : T.handler
      , R = !m || p.options.preload !== !1;
    let _ = R && T ? (tt = n._flights) == null ? void 0 : tt.get(d.id) : void 0;
    _ === d._flight || b ? _ = void 0 : _ && !S && !m && y === void 0 ? S = !0 : S || (_ = void 0);
    const O = !!(T && S && d.status === "success" && !m && !c[4] && ((A ? void 0 : T.staleReloadMode) ?? n.options.defaultStaleReloadMode) !== "blocking")
      , V = S && R
      , P = V && !O && (d.status !== "success" || !!T)
      , Y = s >= h ? c[7] : void 0
      , q = p.lazyFn && p._lazy !== !0 ? Y : void 0;
    if (V && !T && (d.invalid = !1,
    d.updatedAt = Date.now()),
    _ && _[2]++,
    P) {
        const rt = d._flight;
        d._flight = _,
        (pt = mh(n, d, rt)) == null || pt.abort(),
        s >= h && (d.status = "pending"),
        Y == null || Y()
    }
    V || (d.isFetching = !1);
    const Q = (b ? Promise.resolve(b) : P ? py(n, i, d, p, E, r, c) : Promise.resolve([rn, d.loaderData])).then(rt => (P && (yy(d, rt, m),
    rt[0] === rn && (T && !c[0].signal.aborted && Gb(n, d, v),
    s >= h && (d.status = "pending"))),
    rt))
      , Z = Fi(Promise.resolve().then( () => Za(p, void 0, q)), c[0].signal).then( () => {}
    , rt => i[1].some( (ot, B) => B <= s && (ot.status === "error" || ot.status === "notFound" || ot._notFound)) ? void 0 : [s, al(n, i, p, rt, c)]).then(rt => Q.then(ot => (P && !rt && ot[0] === rn && d.status === "pending" && !c[0].signal.aborted && (d.status = "success",
    Y == null || Y()),
    rt)));
    if (o.push([s, Q, Z]),
    !O)
        return Q.then(rt => gy(d, rt));
    const K = {
        ...d,
        status: "pending",
        preload: !1,
        _flight: _
    };
    d.invalid = !1,
    d.isFetching = "loader";
    const W = py(n, i, K, p, E, r, c).then(rt => (d.isFetching = !1,
    yy(K, rt, !1),
    rt));
    return (i[2] ?? (i[2] = [])).push([s, W, Z, K]),
    W.then(rt => gy(K, rt))
}
async function Lf(n, i, s, o, r=0) {
    const c = s == null ? void 0 : s[1][1];
    let h = c != null && c.routeId ? i.findIndex(d => d.routeId === c.routeId) : (s == null ? void 0 : s[0]) ?? i.length - 1;
    h < 0 && (h = 0);
    for (let d = h; d >= 0; d--) {
        const p = Ji(n, i[d]);
        try {
            const m = Za(p, !1);
            m && await Fi(m, o)
        } catch (m) {
            if (m === o && o.aborted)
                throw m
        }
        if (p.options.notFoundComponent)
            return d
    }
    return c != null && c.routeId ? h : r
}
function Ki(n, i) {
    i[2] && (be(n, i[2].map(s => s[3])),
    i[2] = void 0)
}
async function vy(n, i, s, o) {
    let r;
    try {
        await Promise.all(n.map(c => c[1].then(async h => {
            const d = c[0];
            if (!(o && d >= await o)) {
                if (h[0] >= De)
                    throw [d, h];
                !r && h[0] !== rn && (r = [d, h],
                await Promise.all((s ?? []).map(p => {
                    if (!(p[0] <= d))
                        return p[1].then(m => {
                            if (m[0] === De)
                                throw [p[0], m]
                        }
                        )
                }
                )))
            }
        }
        )))
    } catch (c) {
        return c
    }
    return i ?? r
}
function yh(n, i, s, o, r, c) {
    for (; o[0] === De; ) {
        const h = o[1]
          , d = h.options;
        if (d.reloadDocument ? r[3] : r[1] >= 20)
            return o;
        try {
            return d.href && d.reloadDocument ? (n.resolveRedirect(h),
            o) : [De, h, n.buildLocation({
                ...d,
                _fromLocation: i[0],
                _includeValidateSearch: !0
            })]
        } catch (p) {
            o = c ? [Bn, p] : dh(s, p),
            c = !0
        }
    }
    return o
}
async function s1(n, i, s, o, r, c) {
    const h = i[1];
    let d = await r
      , p = !1;
    const m = h.findIndex(b => b._notFound)
      , v = b => b[1][0] === Dr ? Lf(n, h, b, o.signal) : b[0];
    let y = m < 0 ? h.length : m;
    if (((d == null ? void 0 : d[1][0]) ?? 0) >= De)
        y = 0;
    else if (d) {
        y = d[2] ?? (d[2] = await v(d));
        for (const b of s) {
            if (b[0] >= y)
                break;
            const T = await b[1];
            if (T[0] !== rn && T[0] < De && !("loaderData" in h[b[0]])) {
                d = [b[0], T],
                y = d[2] = await v(d);
                break
            }
        }
    }
    for (const b of s) {
        if (b[0] >= y)
            break;
        const T = await b[2];
        if (T) {
            d = T;
            break
        }
    }
    if (((d == null ? void 0 : d[1][0]) ?? 0) >= De) {
        const b = d[1];
        if (b[0] !== De || b[1].options.reloadDocument || b[2])
            return Ki(n, i),
            b;
        p = !0,
        d = [0, [Bn, new Error("Too many redirects")]]
    }
    const S = d ? d[2] ?? await v(d) : m;
    if (S >= 0) {
        const b = d == null ? void 0 : d[1]
          , T = b == null ? void 0 : b[0]
          , A = h[S]
          , E = b == null ? void 0 : b[1]
          , R = () => {
            b && (A._notFound = void 0,
            T === Bn ? A.status = "error" : (E.routeId = A.routeId,
            A.routeId === n.routeTree.id ? (A.status = "success",
            A._notFound = !0) : A.status = "notFound"),
            A.error = E,
            A.isFetching = !1)
        }
        ;
        R(),
        b || c == null || c();
        const _ = Ji(n, A);
        try {
            await Fi(b ? Promise.resolve().then( () => Za(_, T === Bn ? "errorComponent" : "notFoundComponent")) : Promise.all([Za(_), Za(_, "notFoundComponent")]), o.signal)
        } catch (O) {
            if (O === o.signal && o.signal.aborted)
                return Ki(n, i),
                yi
        }
        b ? p && (o.abort(),
        await Promise.all([...s.map(O => O[1]), ...s.map(O => O[2]), ...(i[2] ?? []).map(O => O[1])]),
        Ki(n, i),
        be(n, h),
        R()) : A.status = "success"
    }
    return i
}
async function l1(n, i, s, o=0, r=i[1].length) {
    var h, d;
    const c = i[1];
    for (let p = o; p < r; p++) {
        const m = c[p]
          , v = Ji(n, m).options;
        if (v.head || v.scripts)
            try {
                const y = {
                    ssr: n.options.ssr,
                    matches: c,
                    match: m,
                    params: m.params,
                    loaderData: m.loaderData
                }
                  , [S,b] = await Fi(Promise.all([(h = v.head) == null ? void 0 : h.call(v, y), (d = v.scripts) == null ? void 0 : d.call(v, y)]), s);
                m.meta = S == null ? void 0 : S.meta,
                m.links = S == null ? void 0 : S.links,
                m.headScripts = S == null ? void 0 : S.scripts,
                m.styles = S == null ? void 0 : S.styles,
                m.scripts = b
            } catch (y) {
                if (y === s && s.aborted)
                    break;
                console.error(y)
            }
        if (m.status !== "success" || m._notFound)
            break
    }
    return i
}
async function o1(n, i, s, o) {
    var d;
    const r = [i, s]
      , c = o[0].signal;
    let h;
    try {
        const p = n.stores.matches.get();
        let m = s.findIndex(_ => _._notFound);
        if (n.options.notFoundMode !== "root" && m >= 0) {
            const _ = await Lf(n, s, void 0, c, m);
            s[m]._notFound = void 0,
            s[_]._notFound = !0,
            m = _
        }
        let v = m < 0 ? s.length : m + 1
          , y = 0;
        for (; y < v && y !== m; ) {
            const _ = s[y]
              , O = o[2][y]
              , V = p[y];
            if ((O == null ? void 0 : O.id) !== _.id || O.status !== "success" || O._notFound || _.preload || (V == null ? void 0 : V.id) !== _.id || V.status !== "success" || V._notFound)
                break;
            y++
        }
        const S = []
          , b = o[6] ?? 0;
        let T = b ? Promise.resolve(s[b - 1]) : void 0;
        const A = () => {
            for (let _ = b; _ < v && !c.aborted; _++)
                T = Yb(n, r, _, S, T, o, y)
        }
          , E = await qb(n, r, o, v, A, y);
        if (E) {
            if (o[4] = !0,
            v = E[0],
            E[1][0] === Dr) {
                const _ = await Lf(n, s, E, c);
                E[2] = _,
                v = Math.min(v, _ + 1)
            } else
                E[1][0] >= De && (v = 0);
            A()
        }
        if (!c.aborted && !o[3]) {
            const _ = [];
            for (const [O,V] of n._flights ?? [])
                V[2] || (n._flights.delete(O),
                _.push(V[1]));
            for (const O of _)
                O.abort()
        }
        const R = s1(n, r, S, o[0], vy(S, E, r[2]), o[7]);
        (d = r[2]) != null && d.length && (r[3] = vy(r[2], void 0, void 0, R.then(_ => fl(_) ? 0 : hh(s).length, () => 0))),
        h = await R
    } catch (p) {
        if (Ki(n, r),
        p === c && c.aborted)
            return yi;
        throw p
    }
    return fl(h) ? h : l1(n, h, c, o[6] === s.length ? o[6] : 0)
}
function jf(n, i) {
    var c, h;
    if (n._tx !== i)
        return;
    const s = i[3]
      , o = n.stores.matches.get();
    let r = n._pending;
    for (let d = 0; d < s.length; d++) {
        const p = s[d]
          , m = p.status === "success" && !p._notFound
          , v = ((c = o[d]) == null ? void 0 : c.id) === p.id && ((h = o[d]) == null ? void 0 : h.status) === "pending";
        if (m && !v)
            continue;
        const y = Ji(n, p)
          , S = m || p.invalid ? 0 : y.options.pendingMs ?? n.options.defaultPendingMs
          , b = y.options.pendingComponent ?? n.options.defaultPendingComponent;
        if (!b || typeof S != "number" || S === 1 / 0) {
            r && (r[0] = i,
            r[2] = 0,
            r[4] = !0);
            return
        }
        const T = y.options.pendingMinMs ?? n.options.defaultPendingMinMs ?? 0;
        let A = !1;
        if ((r == null ? void 0 : r[1]) === p.id ? (A = r[0] !== i,
        r[0] = i) : (clearTimeout(r == null ? void 0 : r[3]),
        n._pending = r = void 0),
        r || (n._pending = r = [i, p.id, v ? Date.now() + T : i[4] + S, void 0, v || void 0, b]),
        r[4] && !A && r[5] === b)
            return;
        if (r[5] = b,
        !r[4]) {
            clearTimeout(r[3]);
            const _ = r[2] - Date.now();
            if (_ > 0) {
                r[3] = setTimeout( () => jf(n, i), _);
                return
            }
            r[2] = 0
        }
        const E = s.map(_ => ({
            ..._,
            _flight: void 0
        }));
        E[d].status = "pending";
        const R = r[4] = n.startTransition( () => n.stores.setMatches(E), E).then(_ => (_ && n._pending === r && r[4] === R && !r[2] && (r[2] = Date.now() + T),
        _));
        return
    }
}
function el(n, i) {
    var o;
    const s = n._pending;
    (n._tx === i || !((o = n._tx) != null && o[3].some(r => r.id === (s == null ? void 0 : s[1])))) && (clearTimeout(s == null ? void 0 : s[3]),
    n._pending = void 0)
}
async function Sy(n, i) {
    const s = n._pending;
    if (!s)
        return;
    clearTimeout(s[3]);
    const o = s[2] - Date.now();
    if (!s[4] || o <= 0 || !hh(i[3]).some(c => c.id === s[1]))
        return;
    let r;
    try {
        await Fi(new Promise(c => {
            r = setTimeout(c, o)
        }
        ), i[0].signal)
    } catch {}
    clearTimeout(r)
}
function r1(n, i) {
    n._committed = i,
    n.stores.setMatches(i)
}
function kb(n, i, s, o) {
    const r = n._committed
      , c = n._cache;
    for (const p of s)
        p.preload = !1,
        o && (p._assetEnd = void 0);
    const h = hh(s).length
      , d = new Map;
    {
        const p = Date.now();
        for (const m of [...r, ...c.values()]) {
            if (m.status !== "success" || s.some( (y, S) => y.id === m.id && (S < h || y.status === "success")))
                continue;
            const v = Ji(n, m);
            !v.options.loader || p - m.updatedAt >= (m.preload ? v.options.preloadGcTime ?? n.options.defaultPreloadGcTime ?? 3e5 : v.options.gcTime ?? n.options.defaultGcTime ?? 3e5) || d.set(m.id, c.get(m.id) === m ? m : {
                ...m,
                _flight: void 0,
                isFetching: !1,
                context: {}
            })
        }
    }
    i[3] = [],
    n._cache = d,
    r1(n, s),
    be(n, [...c.values(), ...r], [...s, ...d.values()]),
    jb(n, r, s, i)
}
async function Po(n, i) {
    let s = n._tx;
    for (; s && s !== i; ) {
        if (await s[5],
        n._tx === s)
            return;
        s = n._tx
    }
}
function u1(n, i, s) {
    const o = s[1].options
      , r = s[2];
    if (!r)
        return n.navigate({
            ...o,
            replace: !0,
            ignoreBlocker: !0
        });
    if (o.reloadDocument)
        return n.navigate({
            href: r.publicHref,
            reloadDocument: !0,
            replace: !0,
            ignoreBlocker: !0
        });
    r._redirects = i[1] + 1,
    n._pendingLocation = r;
    const c = n.commitLocation({
        ...r,
        viewTransition: o.viewTransition,
        replace: !0,
        resetScroll: o.resetScroll,
        hashScrollIntoView: o.hashScrollIntoView,
        ignoreBlocker: !0
    });
    return queueMicrotask( () => {
        n._pendingLocation === r && (n._pendingLocation = void 0)
    }
    ),
    c
}
async function Xb(n, i, s, o, r) {
    const c = s.map(p => ({
        ...p
    }));
    ph(c);
    for (const p of o)
        Vn(n, c[p[0]]),
        c[p[0]] = p[3];
    const h = [i[2], c];
    let d;
    try {
        d = await s1(n, h, o, i[0], r)
    } catch (p) {
        throw be(n, c),
        p
    }
    if (fl(d)) {
        be(n, c),
        d[0] === De && n._tx === i && n._committed === s && await u1(n, i, d);
        return
    }
    if (await l1(n, d, i[0].signal),
    n._tx !== i || n._committed !== s) {
        be(n, c);
        return
    }
    for (const p of c) {
        const m = n._cache.get(p.id);
        m != null && m._flight && m._flight === p._flight && (n._cache.delete(p.id),
        Vn(n, m))
    }
    r1(n, c),
    be(n, s, c)
}
async function Pb(n, i, s, o, r, c) {
    const h = await o1(n, i[2], i[3], [i[0], i[1], n._committed, void 0, r, s, c, o]);
    if (fl(h)) {
        const y = h[0] === De && n._tx === i;
        if ((!y || h[1].options.reloadDocument) && el(n, i),
        be(n, i[3]),
        i[3] = [],
        !y)
            return;
        if (n._tx !== i) {
            el(n, i);
            return
        }
        await u1(n, i, h);
        return
    }
    const d = h[1];
    if (n._tx === i && await Sy(n, i),
    n._tx !== i) {
        el(n, i),
        be(n, d),
        Ki(n, h);
        return
    }
    const p = i[2]
      , m = Rr(p, n.stores.resolvedLocation.get())
      , v = h[2];
    await n.startViewTransition(async () => {
        var b;
        if (n._tx === i && await Sy(n, i),
        n._tx !== i) {
            el(n, i),
            be(n, d),
            Ki(n, h);
            return
        }
        const y = () => {
            el(n, i),
            kb(n, i, d, c),
            n._tx === i && (n.emit({
                type: "onLoad",
                ...m
            }),
            n._tx === i && n.emit({
                type: "onBeforeRouteMount",
                ...m
            }))
        }
          , S = await n.startTransition(y, d);
        if (n._tx !== i) {
            Ki(n, h);
            return
        }
        v != null && v.length && Xb(n, i, d, v, h[3]).catch(console.error),
        n.batch( () => {
            n.stores.resolvedLocation.set(p),
            n.stores.status.set("idle"),
            n._tx === i && n.emit({
                type: "onResolved",
                ...m
            }),
            S && n._tx === i && n.emit({
                type: "onRendered",
                ...m
            })
        }
        ),
        n._tx === i && ((b = n._commitPromise) == null || b.resolve(),
        n._commitPromise = void 0)
    }
    )
}
async function Kb(n, i) {
    var V;
    const s = n._tx
      , o = n.stores.resolvedLocation.get()
      , r = o ?? n.stores.location.get()
      , c = n.latestLocation
      , h = n._pendingLocation
      , d = (h == null ? void 0 : h.href) === c.href ? h._redirects ?? 0 : 0
      , p = n._handoff
      , m = p == null ? void 0 : p[0]()
      , v = new AbortController
      , y = n._preflight;
    if (n._preflight = v,
    m || p == null || p[1](),
    y == null || y.abort(),
    !v.signal.aborted) {
        const P = Rr(c, o);
        n.emit({
            type: "onBeforeNavigate",
            ...P
        }),
        v.signal.aborted || n.emit({
            type: "onBeforeLoad",
            ...P
        })
    }
    if (v.signal.aborted) {
        await Po(n, s);
        return
    }
    const S = r.href === c.href;
    let b = v;
    const T = n.matchRoutes(c, {
        _controller: v
    });
    ph(T);
    const A = m ? p[1](T) : void 0;
    if (A ? b = m : m == null || m.abort(),
    v.signal.aborted) {
        be(n, T),
        await Po(n, s);
        return
    }
    n._preflight = void 0;
    let E;
    const R = () => Pb(n, O, S, () => jf(n, O), i == null ? void 0 : i.sync, A)
      , _ = i != null && i.sync ? new Promise(P => E = P) : Promise.resolve().then(R).then()
      , O = [b, d, c, T, Date.now(), _];
    if (n._tx = O,
    s) {
        for (const P of n.stores.matches.get()) {
            if (n._tx !== O)
                break;
            P.isFetching && dl(n, P, !1)
        }
        s[0].abort(),
        be(n, s[3], O[3], !0)
    }
    if (n._tx !== O) {
        be(n, O[3]),
        O[3] = [],
        E == null || E(),
        await Po(n, O);
        return
    }
    n.batch( () => {
        n.stores.status.set("pending"),
        n.stores.location.set(c)
    }
    ),
    (A || !n._committed.length && ((V = T[0]) == null ? void 0 : V.status) !== "success" && !T.some(P => P._notFound)) && jf(n, O),
    E == null || E(R()),
    await _,
    await Po(n, O)
}
async function Zb(n, i) {
    let s = n.buildLocation(i);
    for (let o = 0; ; o++) {
        const r = n._committed
          , c = new AbortController;
        let h, d, p;
        try {
            try {
                h = n.matchRoutes(s, {
                    _controller: c
                }),
                ph(h),
                d = (n._preloads ?? (n._preloads = new Map)).set(c, h),
                p = await o1(n, s, h, [c, o, r, !0])
            } finally {
                d && (d = d.delete(c),
                be(n, h)),
                c.abort()
            }
            if (!fl(p))
                return p[1];
            if (!d || p.length < 3)
                return;
            s = p[2]
        } catch (m) {
            Fa(m) || console.error(m);
            return
        }
    }
}
const Qb = "Error preloading route! ☝️";
var c1 = class {
    get to() {
        return this._to
    }
    get id() {
        return this._id
    }
    get path() {
        return this._path
    }
    get fullPath() {
        return this._fullPath
    }
    constructor(n) {
        if (this.init = i => {
            var p, m;
            this.originalIndex = i.originalIndex;
            const s = this.options
              , o = !(s != null && s.path) && !(s != null && s.id);
            this.parentRoute = (m = (p = this.options).getParentRoute) == null ? void 0 : m.call(p),
            o ? this._path = Ka : this.parentRoute || uh();
            let r = o ? Ka : s == null ? void 0 : s.path;
            r && r !== "/" && (r = t1(r));
            const c = (s == null ? void 0 : s.id) || r;
            let h = o ? Ka : Wo([this.parentRoute.id === "__root__" ? "" : this.parentRoute.id, c]);
            r === "__root__" && (r = "/"),
            h !== "__root__" && (h = Wo(["/", h]));
            const d = h === "__root__" ? "/" : Wo([this.parentRoute.fullPath, r]);
            this._path = r,
            this._id = h,
            this._fullPath = d,
            this._to = Nn(d)
        }
        ,
        this.addChildren = i => this._addFileChildren(i),
        this._addFileChildren = i => (Array.isArray(i) && (this.children = i),
        typeof i == "object" && i !== null && (this.children = Object.values(i)),
        this),
        this._addFileTypes = () => this,
        this.updateLoader = i => (Object.assign(this.options, i),
        this),
        this.update = i => (Object.assign(this.options, i),
        this),
        this.lazy = i => (this.lazyFn = i,
        this),
        this.redirect = i => wb({
            from: this.fullPath,
            ...i
        }),
        this.options = n || {},
        this.isRoot = !(n != null && n.getParentRoute),
        n != null && n.id && (n != null && n.path))
            throw new Error("Route cannot have both an 'id' and a 'path' option.")
    }
}
  , Fb = class extends c1 {
    constructor(n) {
        super(n)
    }
}
  , gh = class extends F.Component {
    constructor(...n) {
        super(...n),
        this.state = {
            error: null
        },
        this.reset = () => {
            this.setState({
                error: null
            })
        }
    }
    static getDerivedStateFromProps(n, i) {
        const s = n.getResetKey();
        return i.error && i.resetKey !== s ? {
            resetKey: s,
            error: null
        } : {
            resetKey: s
        }
    }
    static getDerivedStateFromError(n) {
        return {
            error: n
        }
    }
    componentDidCatch(n, i) {
        var s, o;
        (o = (s = this.props).onCatch) == null || o.call(s, n, i)
    }
    render() {
        const n = this.state.error;
        return n ? F.createElement(this.props.errorComponent ?? Jb, {
            error: n,
            reset: this.reset
        }) : this.props.children
    }
}
;
function Jb({error: n}) {
    const [i,s] = F.useState(!1);
    return z.jsxs("div", {
        style: {
            padding: ".5rem",
            maxWidth: "100%"
        },
        children: [z.jsxs("div", {
            style: {
                display: "flex",
                alignItems: "center",
                gap: ".5rem"
            },
            children: [z.jsx("strong", {
                style: {
                    fontSize: "1rem"
                },
                children: "Something went wrong!"
            }), z.jsx("button", {
                style: {
                    appearance: "none",
                    fontSize: ".6em",
                    border: "1px solid currentColor",
                    padding: ".1rem .2rem",
                    fontWeight: "bold",
                    borderRadius: ".25rem"
                },
                onClick: () => s(o => !o),
                children: i ? "Hide Error" : "Show Error"
            })]
        }), z.jsx("div", {
            style: {
                height: ".25rem"
            }
        }), i ? z.jsx("div", {
            children: z.jsx("pre", {
                style: {
                    fontSize: ".7em",
                    border: "1px solid red",
                    borderRadius: ".25rem",
                    padding: ".3rem",
                    color: "red",
                    overflow: "auto"
                },
                children: n.message ? z.jsx("code", {
                    children: n.message
                }) : null
            })
        }) : null]
    })
}
function f1({children: n, fallback: i=null}) {
    return z.jsx(Je.Fragment, {
        children: h1() ? n : i
    })
}
function h1() {
    return Je.useSyncExternalStore(Wb, () => !0, () => !1)
}
function Wb() {
    return () => {}
}
var d1 = F.createContext(null);
function fn(n) {
    return F.useContext(d1)
}
var Or = F.createContext(void 0)
  , Ib = F.createContext(void 0)
  , Ut = (n => (n[n.None = 0] = "None",
n[n.Mutable = 1] = "Mutable",
n[n.Watching = 2] = "Watching",
n[n.RecursedCheck = 4] = "RecursedCheck",
n[n.Recursed = 8] = "Recursed",
n[n.Dirty = 16] = "Dirty",
n[n.Pending = 32] = "Pending",
n))(Ut || {});
function $b({update: n, notify: i, unwatched: s}) {
    return {
        link: o,
        unlink: r,
        propagate: c,
        checkDirty: h,
        shallowPropagate: d
    };
    function o(m, v, y) {
        const S = v.depsTail;
        if (S !== void 0 && S.dep === m)
            return;
        const b = S !== void 0 ? S.nextDep : v.deps;
        if (b !== void 0 && b.dep === m) {
            b.version = y,
            v.depsTail = b;
            return
        }
        const T = m.subsTail;
        if (T !== void 0 && T.version === y && T.sub === v)
            return;
        const A = v.depsTail = m.subsTail = {
            version: y,
            dep: m,
            sub: v,
            prevDep: S,
            nextDep: b,
            prevSub: T,
            nextSub: void 0
        };
        b !== void 0 && (b.prevDep = A),
        S !== void 0 ? S.nextDep = A : v.deps = A,
        T !== void 0 ? T.nextSub = A : m.subs = A
    }
    function r(m, v=m.sub) {
        const y = m.dep
          , S = m.prevDep
          , b = m.nextDep
          , T = m.nextSub
          , A = m.prevSub;
        return b !== void 0 ? b.prevDep = S : v.depsTail = S,
        S !== void 0 ? S.nextDep = b : v.deps = b,
        T !== void 0 ? T.prevSub = A : y.subsTail = A,
        A !== void 0 ? A.nextSub = T : (y.subs = T) === void 0 && s(y),
        b
    }
    function c(m) {
        let v = m.nextSub, y;
        t: do {
            const S = m.sub;
            let b = S.flags;
            if (b & 60 ? b & 12 ? b & 4 ? !(b & 48) && p(m, S) ? (S.flags = b | 40,
            b &= 1) : b = 0 : S.flags = b & -9 | 32 : b = 0 : S.flags = b | 32,
            b & 2 && i(S),
            b & 1) {
                const T = S.subs;
                if (T !== void 0) {
                    const A = (m = T).nextSub;
                    A !== void 0 && (y = {
                        value: v,
                        prev: y
                    },
                    v = A);
                    continue
                }
            }
            if ((m = v) !== void 0) {
                v = m.nextSub;
                continue
            }
            for (; y !== void 0; )
                if (m = y.value,
                y = y.prev,
                m !== void 0) {
                    v = m.nextSub;
                    continue t
                }
            break
        } while (!0)
    }
    function h(m, v) {
        let y, S = 0, b = !1;
        t: do {
            const T = m.dep
              , A = T.flags;
            if (v.flags & 16)
                b = !0;
            else if ((A & 17) === 17) {
                if (n(T)) {
                    const E = T.subs;
                    E.nextSub !== void 0 && d(E),
                    b = !0
                }
            } else if ((A & 33) === 33) {
                (m.nextSub !== void 0 || m.prevSub !== void 0) && (y = {
                    value: m,
                    prev: y
                }),
                m = T.deps,
                v = T,
                ++S;
                continue
            }
            if (!b) {
                const E = m.nextDep;
                if (E !== void 0) {
                    m = E;
                    continue
                }
            }
            for (; S--; ) {
                const E = v.subs
                  , R = E.nextSub !== void 0;
                if (R ? (m = y.value,
                y = y.prev) : m = E,
                b) {
                    if (n(v)) {
                        R && d(E),
                        v = m.sub;
                        continue
                    }
                    b = !1
                } else
                    v.flags &= -33;
                v = m.sub;
                const _ = m.nextDep;
                if (_ !== void 0) {
                    m = _;
                    continue t
                }
            }
            return b
        } while (!0)
    }
    function d(m) {
        do {
            const v = m.sub
              , y = v.flags;
            (y & 48) === 32 && (v.flags = y | 16,
            (y & 6) === 2 && i(v))
        } while ((m = m.nextSub) !== void 0)
    }
    function p(m, v) {
        let y = v.depsTail;
        for (; y !== void 0; ) {
            if (y === m)
                return !0;
            y = y.prevDep
        }
        return !1
    }
}
function t4(n, i, s) {
    var c, h, d;
    const o = typeof n == "object"
      , r = o ? n : void 0;
    return {
        next: (c = o ? n.next : n) == null ? void 0 : c.bind(r),
        error: (h = o ? n.error : i) == null ? void 0 : h.bind(r),
        complete: (d = o ? n.complete : s) == null ? void 0 : d.bind(r)
    }
}
const Nf = [];
let er = 0;
const {link: by, unlink: e4, propagate: n4, checkDirty: m1, shallowPropagate: xy} = $b({
    update(n) {
        return n._update()
    },
    notify(n) {
        Nf[Vf++] = n,
        n.flags &= ~Ut.Watching
    },
    unwatched(n) {
        n.depsTail !== void 0 && (n.depsTail = void 0,
        n.flags = Ut.Mutable | Ut.Dirty,
        pr(n))
    }
});
let Ko = 0, Vf = 0, ln, Bf = 0;
function i4(n) {
    try {
        ++Bf,
        n()
    } finally {
        --Bf || p1()
    }
}
function pr(n) {
    const i = n.depsTail;
    let s = i !== void 0 ? i.nextDep : n.deps;
    for (; s !== void 0; )
        s = e4(s, n)
}
function p1() {
    if (!(Bf > 0)) {
        for (; Ko < Vf; ) {
            const n = Nf[Ko];
            Nf[Ko++] = void 0,
            n.notify()
        }
        Ko = 0,
        Vf = 0
    }
}
function Ty(n, i) {
    const s = typeof n == "function"
      , o = n
      , r = {
        _snapshot: s ? void 0 : n,
        subs: void 0,
        subsTail: void 0,
        deps: void 0,
        depsTail: void 0,
        flags: s ? Ut.None : Ut.Mutable,
        get() {
            return ln !== void 0 && by(r, ln, er),
            r._snapshot
        },
        subscribe(c) {
            const h = t4(c)
              , d = {
                current: !1
            }
              , p = a4( () => {
                var m;
                r.get(),
                d.current ? (m = h.next) == null || m.call(h, r._snapshot) : d.current = !0
            }
            );
            return {
                unsubscribe: () => {
                    p.stop()
                }
            }
        },
        _update(c) {
            const h = ln
              , d = (i == null ? void 0 : i.compare) ?? Object.is;
            if (s)
                ln = r,
                ++er,
                r.depsTail = void 0;
            else if (c === void 0)
                return !1;
            s && (r.flags = Ut.Mutable | Ut.RecursedCheck);
            try {
                const p = r._snapshot
                  , m = typeof c == "function" ? c(p) : c === void 0 && s ? o(p) : c;
                return p === void 0 || !d(p, m) ? (r._snapshot = m,
                !0) : !1
            } finally {
                ln = h,
                s && (r.flags &= ~Ut.RecursedCheck),
                pr(r)
            }
        }
    };
    return s ? (r.flags = Ut.Mutable | Ut.Dirty,
    r.get = function() {
        const c = r.flags;
        if (c & Ut.Dirty || c & Ut.Pending && m1(r.deps, r)) {
            if (r._update()) {
                const h = r.subs;
                h !== void 0 && xy(h)
            }
        } else
            c & Ut.Pending && (r.flags = c & ~Ut.Pending);
        return ln !== void 0 && by(r, ln, er),
        r._snapshot
    }
    ) : r.set = function(c) {
        if (r._update(c)) {
            const h = r.subs;
            h !== void 0 && (n4(h),
            xy(h),
            p1())
        }
    }
    ,
    r
}
function a4(n) {
    const i = () => {
        const o = ln;
        ln = s,
        ++er,
        s.depsTail = void 0,
        s.flags = Ut.Watching | Ut.RecursedCheck;
        try {
            return n()
        } finally {
            ln = o,
            s.flags &= ~Ut.RecursedCheck,
            pr(s)
        }
    }
      , s = {
        deps: void 0,
        depsTail: void 0,
        subs: void 0,
        subsTail: void 0,
        flags: Ut.Watching | Ut.RecursedCheck,
        notify() {
            const o = this.flags;
            o & Ut.Dirty || o & Ut.Pending && m1(this.deps, this) ? i() : this.flags = Ut.Watching
        },
        stop() {
            this.flags = Ut.None,
            this.depsTail = void 0,
            pr(this)
        }
    };
    return i(),
    s
}
var lf = {
    exports: {}
}
  , of = {}
  , rf = {
    exports: {}
}
  , uf = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ay;
function s4() {
    if (Ay)
        return uf;
    Ay = 1;
    var n = vl();
    function i(y, S) {
        return y === S && (y !== 0 || 1 / y === 1 / S) || y !== y && S !== S
    }
    var s = typeof Object.is == "function" ? Object.is : i
      , o = n.useState
      , r = n.useEffect
      , c = n.useLayoutEffect
      , h = n.useDebugValue;
    function d(y, S) {
        var b = S()
          , T = o({
            inst: {
                value: b,
                getSnapshot: S
            }
        })
          , A = T[0].inst
          , E = T[1];
        return c(function() {
            A.value = b,
            A.getSnapshot = S,
            p(A) && E({
                inst: A
            })
        }, [y, b, S]),
        r(function() {
            return p(A) && E({
                inst: A
            }),
            y(function() {
                p(A) && E({
                    inst: A
                })
            })
        }, [y]),
        h(b),
        b
    }
    function p(y) {
        var S = y.getSnapshot;
        y = y.value;
        try {
            var b = S();
            return !s(y, b)
        } catch {
            return !0
        }
    }
    function m(y, S) {
        return S()
    }
    var v = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? m : d;
    return uf.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : v,
    uf
}
var Ey;
function l4() {
    return Ey || (Ey = 1,
    rf.exports = s4()),
    rf.exports
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cy;
function o4() {
    if (Cy)
        return of;
    Cy = 1;
    var n = vl()
      , i = l4();
    function s(m, v) {
        return m === v && (m !== 0 || 1 / m === 1 / v) || m !== m && v !== v
    }
    var o = typeof Object.is == "function" ? Object.is : s
      , r = i.useSyncExternalStore
      , c = n.useRef
      , h = n.useEffect
      , d = n.useMemo
      , p = n.useDebugValue;
    return of.useSyncExternalStoreWithSelector = function(m, v, y, S, b) {
        var T = c(null);
        if (T.current === null) {
            var A = {
                hasValue: !1,
                value: null
            };
            T.current = A
        } else
            A = T.current;
        T = d(function() {
            function R(Y) {
                if (!_) {
                    if (_ = !0,
                    O = Y,
                    Y = S(Y),
                    b !== void 0 && A.hasValue) {
                        var q = A.value;
                        if (b(q, Y))
                            return V = q
                    }
                    return V = Y
                }
                if (q = V,
                o(O, Y))
                    return q;
                var Q = S(Y);
                return b !== void 0 && b(q, Q) ? (O = Y,
                q) : (O = Y,
                V = Q)
            }
            var _ = !1, O, V, P = y === void 0 ? null : y;
            return [function() {
                return R(v())
            }
            , P === null ? void 0 : function() {
                return R(P())
            }
            ]
        }, [v, y, S, b]);
        var E = r(m, T[0], T[1]);
        return h(function() {
            A.hasValue = !0,
            A.value = E
        }, [E]),
        p(E),
        E
    }
    ,
    of
}
var My;
function r4() {
    return My || (My = 1,
    lf.exports = o4()),
    lf.exports
}
var u4 = r4();
function c4(n, i) {
    return n === i
}
function gi(n, i, s=c4) {
    const o = F.useCallback(h => {
        if (!n)
            return () => {}
            ;
        const {unsubscribe: d} = n.subscribe(h);
        return d
    }
    , [n])
      , r = F.useCallback( () => n == null ? void 0 : n.get(), [n]);
    return u4.useSyncExternalStoreWithSelector(o, r, r, i, s)
}
var wy = {};
function f4(n, i) {
    const s = F.useRef();
    return o => {
        const r = n != null && n.select ? n.select(o) : o;
        return (n == null ? void 0 : n.structuralSharing) ?? i.options.defaultStructuralSharing ? s.current = ki(s.current, r) : r
    }
}
function Wi(n) {
    const i = fn()
      , s = F.useContext(n.from ? Ib : Or)
      , o = n.from ?? s
      , r = i.stores.getMatchStore(o)
      , c = f4(n, i)
      , h = gi(r, d => d ? c(d) : wy);
    if (h !== wy)
        return h;
    (n.shouldThrow ?? !0) && uh()
}
function y1(n) {
    return Wi({
        from: n.from,
        strict: n.strict,
        structuralSharing: n.structuralSharing,
        select: i => n.select ? n.select(i.loaderData) : i.loaderData
    })
}
function g1(n) {
    const {select: i, ...s} = n;
    return Wi({
        ...s,
        select: o => i ? i(o.loaderDeps) : o.loaderDeps
    })
}
function v1(n) {
    return Wi({
        from: n.from,
        shouldThrow: n.shouldThrow,
        structuralSharing: n.structuralSharing,
        strict: n.strict,
        select: i => {
            const s = n.strict === !1 ? i.params : i._strictParams;
            return n.select ? n.select(s) : s
        }
    })
}
function S1(n) {
    return Wi({
        from: n.from,
        strict: n.strict,
        shouldThrow: n.shouldThrow,
        structuralSharing: n.structuralSharing,
        select: i => n.select ? n.select(i.search) : i.search
    })
}
function b1(n) {
    const i = fn();
    return F.useCallback(s => i.navigate({
        ...s,
        from: s.from ?? (n == null ? void 0 : n.from)
    }), [n == null ? void 0 : n.from, i])
}
function x1(n) {
    return Wi({
        ...n,
        select: i => n.select ? n.select(i.context) : i.context
    })
}
function cf(n) {
    const i = F.useRef(n);
    return mi(i.current, n, {
        ignoreUndefined: !1
    }) || (i.current = n),
    i.current
}
function h4(n, i) {
    return n[0] === i[0] && n[1] === i[1] && n[2] === i[2]
}
function d4(n, i, s) {
    if (n != null && n.external)
        return cr(n.href, s) ? void 0 : n.href;
    if (!b4(i) && !(typeof i != "string" || i.indexOf(":") === -1))
        try {
            return new URL(i),
            cr(i, s) ? void 0 : i
        } catch {}
}
function m4(n, i, s, o, r, c) {
    if (c)
        return !1;
    if (s != null && s.exact) {
        if (!cb(n.pathname, i.pathname, o))
            return !1
    } else {
        const h = hr(n.pathname, o)
          , d = hr(i.pathname, o);
        if (!(h.startsWith(d) && (h.length === d.length || h[d.length] === "/")))
            return !1
    }
    return ((s == null ? void 0 : s.includeSearch) ?? !0) && !mi(n.search, i.search, {
        partial: !(s != null && s.exact),
        ignoreUndefined: !(s != null && s.explicitUndefined)
    }) ? !1 : s != null && s.includeHash ? r && n.hash === i.hash : !0
}
function p4(n, i) {
    const s = fn()
      , o = KS(i)
      , {activeProps: r, inactiveProps: c, activeOptions: h, to: d, preload: p, preloadDelay: m, preloadIntentProximity: v, hashScrollIntoView: y, replace: S, startTransition: b, resetScroll: T, viewTransition: A, children: E, target: R, disabled: _, style: O, className: V, onClick: P, onBlur: Y, onFocus: q, onMouseEnter: Q, onMouseLeave: Z, onTouchStart: K, ignoreBlocker: W, params: tt, search: pt, hash: rt, state: ot, mask: B, reloadDocument: J, unsafeRelative: $, from: ht, _fromLocation: vt, ...M} = n
      , k = h1()
      , I = cf(n.search)
      , nt = cf(n.params)
      , ut = cf(h)
      , ft = F.useMemo( () => n, [s, n.from, n._fromLocation, n.hash, n.to, I, nt, n.state, n.mask, n.unsafeRelative])
      , Tt = F.useCallback(Jt => {
        const Ht = s.buildLocation({
            _fromLocation: Jt,
            ...ft
        })
          , pn = S4(Ht.maskedLocation ? Ht.maskedLocation.publicHref : Ht.publicHref, Ht.maskedLocation ? Ht.maskedLocation.external : Ht.external, s.history, _)
          , ss = d4(pn, d, s.protocolAllowlist);
        return [pn == null ? void 0 : pn.href, ss, m4(Jt, Ht, ut, s.basepath, k, ss !== void 0)]
    }
    , [ut, _, k, ft, s, d])
      , [ee,jt,hn] = gi(s.stores.location, Tt, h4)
      , dn = hn ? Qa(r, {}) ?? y4 : ff
      , Un = hn ? ff : Qa(c, {}) ?? ff
      , es = [V, dn.className, Un.className].filter(Boolean).join(" ")
      , $e = (O || dn.style || Un.style) && {
        ...O,
        ...dn.style,
        ...Un.style
    }
      , Ii = F.useRef(!1)
      , Xe = n.reloadDocument || jt || _ ? !1 : p ?? s.options.defaultPreload
      , ns = m ?? s.options.defaultPreloadDelay ?? 0
      , mn = F.useCallback( () => {
        s.preloadRoute(ft).catch(Jt => {
            console.warn(Jt),
            console.warn(Qb)
        }
        )
    }
    , [s, ft])
      , xi = F.useCallback(Jt => {
        if (!Jt) {
            hf(o);
            return
        }
        if (!(Jt.isIntersecting ?? Xe === "intent")) {
            Jt.isIntersecting === !1 && hf(o);
            return
        }
        if (!ns) {
            mn();
            return
        }
        sl.has(o) || sl.set(o, setTimeout( () => {
            sl.delete(o),
            mn()
        }
        , ns))
    }
    , [mn, o, Xe, ns]);
    PS(o, xi, Xe !== "viewport"),
    F.useEffect( () => {
        Ii.current || Xe === "render" && (mn(),
        Ii.current = !0)
    }
    , [mn, Xe]);
    const is = Jt => {
        const Ht = Jt.currentTarget.getAttribute("target")
          , pn = R !== void 0 ? R : Ht;
        !_ && !(Jt.metaKey || Jt.altKey || Jt.ctrlKey || Jt.shiftKey) && !Jt.defaultPrevented && (!pn || pn === "_self") && Jt.button === 0 && (Jt.preventDefault(),
        s.navigate({
            ...ft,
            replace: S,
            resetScroll: T,
            hashScrollIntoView: y,
            startTransition: b,
            viewTransition: A,
            ignoreBlocker: W
        }))
    }
    ;
    if (jt)
        return {
            ...M,
            ref: o,
            href: jt,
            ...E && {
                children: E
            },
            ...R && {
                target: R
            },
            ..._ && {
                disabled: _
            },
            ...O && {
                style: O
            },
            ...V && {
                className: V
            },
            ...P && {
                onClick: P
            },
            ...Y && {
                onBlur: Y
            },
            ...q && {
                onFocus: q
            },
            ...Q && {
                onMouseEnter: Q
            },
            ...Z && {
                onMouseLeave: Z
            },
            ...K && {
                onTouchStart: K
            }
        };
    const as = () => {
        Xe === "intent" && mn()
    }
      , Al = () => {
        Xe === "intent" && hf(o)
    }
    ;
    return {
        ...M,
        ...dn,
        ...Un,
        href: ee,
        ref: o,
        onClick: Ba([P, is]),
        onBlur: Ba([Y, Al]),
        onFocus: Ba([q, xi]),
        onMouseEnter: Ba([Q, xi]),
        onMouseLeave: Ba([Z, Al]),
        onTouchStart: Ba([K, as]),
        disabled: !!_,
        target: R,
        ...$e && {
            style: $e
        },
        ...es && {
            className: es
        },
        ..._ && g4,
        ...hn && v4
    }
}
var ff = {}
  , y4 = {
    className: "active"
}
  , g4 = {
    role: "link",
    "aria-disabled": !0
}
  , v4 = {
    "data-status": "active",
    "aria-current": "page"
}
  , sl = new WeakMap
  , hf = n => {
    clearTimeout(sl.get(n)),
    sl.delete(n)
}
  , Ba = n => i => {
    for (const s of n)
        if (s) {
            if (i.defaultPrevented)
                return;
            s(i)
        }
}
;
function S4(n, i, s, o) {
    if (!o)
        return i ? {
            href: n,
            external: !0
        } : {
            href: s.createHref(n) || "/",
            external: !1
        }
}
function b4(n) {
    if (typeof n != "string")
        return !1;
    const i = n.charCodeAt(0);
    return i === 47 ? n.charCodeAt(1) !== 47 : i === 46
}
var zr = F.forwardRef( (n, i) => {
    const {_asChild: s, ...o} = n
      , {type: r, ...c} = p4(o, i)
      , h = typeof o.children == "function" ? o.children({
        isActive: c["data-status"] === "active"
    }) : o.children;
    if (!s) {
        const {disabled: d, ...p} = c;
        return F.createElement("a", p, h)
    }
    return F.createElement(s, c, h)
}
)
  , x4 = class extends c1 {
    constructor(n) {
        super(n),
        this.useMatch = i => Wi({
            select: i == null ? void 0 : i.select,
            from: this.id,
            structuralSharing: i == null ? void 0 : i.structuralSharing
        }),
        this.useRouteContext = i => x1({
            ...i,
            from: this.id
        }),
        this.useSearch = i => S1({
            select: i == null ? void 0 : i.select,
            structuralSharing: i == null ? void 0 : i.structuralSharing,
            from: this.id
        }),
        this.useParams = i => v1({
            select: i == null ? void 0 : i.select,
            structuralSharing: i == null ? void 0 : i.structuralSharing,
            from: this.id
        }),
        this.useLoaderDeps = i => g1({
            ...i,
            from: this.id
        }),
        this.useLoaderData = i => y1({
            ...i,
            from: this.id
        }),
        this.useNavigate = () => b1({
            from: this.fullPath
        }),
        this.Link = Je.forwardRef( (i, s) => z.jsx(zr, {
            ref: s,
            from: this.fullPath,
            ...i
        }))
    }
}
;
function T1(n) {
    return new x4(n)
}
var T4 = class extends Fb {
    constructor(n) {
        super(n),
        this.useMatch = i => Wi({
            select: i == null ? void 0 : i.select,
            from: this.id,
            structuralSharing: i == null ? void 0 : i.structuralSharing
        }),
        this.useRouteContext = i => x1({
            ...i,
            from: this.id
        }),
        this.useSearch = i => S1({
            select: i == null ? void 0 : i.select,
            structuralSharing: i == null ? void 0 : i.structuralSharing,
            from: this.id
        }),
        this.useParams = i => v1({
            select: i == null ? void 0 : i.select,
            structuralSharing: i == null ? void 0 : i.structuralSharing,
            from: this.id
        }),
        this.useLoaderDeps = i => g1({
            ...i,
            from: this.id
        }),
        this.useLoaderData = i => y1({
            ...i,
            from: this.id
        }),
        this.useNavigate = () => b1({
            from: this.fullPath
        }),
        this.Link = Je.forwardRef( (i, s) => z.jsx(zr, {
            ref: s,
            from: this.fullPath,
            ...i
        }))
    }
}
;
function A4(n) {
    return new T4(n)
}
function E4(n) {
    const i = fn()
      , s = `not-found-${gi(i.stores.location, o => o.pathname)}-${gi(i.stores.status, o => o)}`;
    return z.jsx(gh, {
        getResetKey: () => s,
        onCatch: (o, r) => {
            var c;
            if (Fa(o))
                (c = n.onCatch) == null || c.call(n, o, r);
            else
                throw o
        }
        ,
        errorComponent: ({error: o}) => {
            var r;
            if (Fa(o))
                return (r = n.fallback) == null ? void 0 : r.call(n, o);
            throw o
        }
        ,
        children: n.children
    })
}
function C4() {
    return z.jsx("p", {
        children: "Not Found"
    })
}
function Ha(n) {
    return z.jsx(z.Fragment, {
        children: n.children
    })
}
function A1(n, i, s) {
    return i.options.notFoundComponent ? z.jsx(i.options.notFoundComponent, {
        ...s
    }) : n.options.defaultNotFoundComponent ? z.jsx(n.options.defaultNotFoundComponent, {
        ...s
    }) : z.jsx(C4, {})
}
function Lr(n, i) {
    const s = (i == null ? void 0 : i.options.pendingComponent) ?? n.options.defaultPendingComponent;
    return s ? z.jsx(s, {}) : null
}
var M4 = (n, i) => n[0] === i[0] && n[1] === i[1]
  , E1 = (n, i, s) => !i.isRoot || i.options.shellComponent || i.options.wrapInSuspense || s === !1 || s === "data-only" || !n.ssr
  , C1 = F.memo(function({routeId: i}) {
    const s = fn();
    return z.jsx(w4, {
        router: s,
        match: gi(s.stores.getMatchStore(i), o => o)
    })
});
function w4({router: n, match: i}) {
    var y, S;
    const s = n.routesById[i.routeId]
      , o = Lr(n, s)
      , r = s.options.errorComponent ?? n.options.defaultErrorComponent
      , c = s.options.onCatch ?? n.options.defaultOnCatch
      , h = s.isRoot ? s.options.notFoundComponent ?? ((y = n.options.notFoundRoute) == null ? void 0 : y.options.component) : s.options.notFoundComponent
      , d = i.ssr === !1 || i.ssr === "data-only"
      , p = E1(n, s, i.ssr) && (s.options.wrapInSuspense ?? o ?? (((S = s.options.errorComponent) == null ? void 0 : S.preload) || d)) ? F.Suspense : Ha
      , m = r ? gh : Ha
      , v = h ? E4 : Ha;
    return z.jsxs(s.isRoot ? s.options.shellComponent ?? Ha : Ha, {
        children: [z.jsx(Or.Provider, {
            value: i.routeId,
            children: z.jsx(p, {
                fallback: o,
                children: z.jsx(m, {
                    getResetKey: () => i,
                    errorComponent: r,
                    onCatch: (b, T) => {
                        if (Fa(b))
                            throw b.routeId ?? (b.routeId = i.routeId),
                            b;
                        c == null || c(b, T)
                    }
                    ,
                    children: z.jsx(v, {
                        fallback: b => {
                            if (b.routeId ?? (b.routeId = i.routeId),
                            b.routeId !== i.routeId)
                                throw b;
                            return F.createElement(h, b)
                        }
                        ,
                        children: d ? z.jsx(f1, {
                            fallback: o,
                            children: z.jsx(_y, {
                                match: i
                            })
                        }) : z.jsx(_y, {
                            match: i
                        })
                    })
                })
            })
        }), null]
    })
}
var _y = F.memo(function({match: i}) {
    const s = fn()
      , o = i.routeId
      , r = s.routesById[o]
      , c = F.useMemo( () => {
        var p;
        const d = (p = r.options.remountDeps ?? s.options.defaultRemountDeps) == null ? void 0 : p({
            routeId: o,
            loaderDeps: i.loaderDeps,
            params: i._strictParams,
            search: i._strictSearch
        });
        return d ? JSON.stringify(d) : void 0
    }
    , [o, i.loaderDeps, i._strictParams, i._strictSearch, r.options.remountDeps, s.options.defaultRemountDeps])
      , h = F.useMemo( () => {
        const d = r.options.component ?? s.options.defaultComponent;
        return d ? z.jsx(d, {}, c) : z.jsx(M1, {})
    }
    , [c, r.options.component, s.options.defaultComponent]);
    if (i.status === "pending") {
        if (s.ssr && !E1(s, r, i.ssr))
            return h;
        if (s._tx)
            throw s._tx[5];
        return Lr(s, r)
    }
    if (i.status === "notFound")
        return A1(s, r, i.error);
    if (i.status === "error")
        throw i.error;
    return h
})
  , M1 = F.memo(function() {
    const i = fn()
      , s = F.useContext(Or);
    let o, r, c;
    {
        const d = i.stores.getMatchStore(s);
        [o,r] = gi(d, p => [!!p._notFound, p.error], M4),
        c = gi(i.stores.ids, p => p[p.indexOf(s) + 1])
    }
    if (o)
        return A1(i, i.routesById[s], r);
    if (!c)
        return null;
    const h = z.jsx(C1, {
        routeId: c
    });
    return s === Ka ? z.jsx(F.Suspense, {
        fallback: Lr(i),
        children: h
    }) : h
});
function w1(n, i) {
    const s = n[1];
    n.length = 0,
    s == null || s(i)
}
function _4({t: n}) {
    const i = fn()
      , s = i._rendered ?? (i._rendered = []);
    return i.startTransition = (o, r) => new Promise(c => {
        w1(s, !1),
        s.push(r, c),
        n(i),
        F.startTransition(o)
    }
    ),
    Kg( () => {
        const o = i.history.subscribe(i.load);
        i.updateLatestLocation();
        const r = i.latestLocation
          , c = i.buildLocation({
            to: r.pathname,
            search: !0,
            params: !0,
            hash: !0,
            state: !0,
            _includeValidateSearch: !0
        });
        if (Nn(r.publicHref) !== Nn(c.publicHref))
            return i.commitLocation({
                ...c,
                replace: !0,
                ignoreBlocker: !0
            }),
            o;
        const h = i.stores.resolvedLocation.get();
        return (h == null ? void 0 : h.href) === r.href && h.state.__TSR_key === r.state.__TSR_key ? s.push(i.stores.matches.get(), d => {
            d && i.emit({
                type: "onRendered",
                ...Rr(h, h)
            })
        }
        ) : i._tx || i.load({
            sync: !0
        }).catch(console.error),
        o
    }
    , [i, i.history]),
    null
}
function R4() {
    const n = fn()
      , i = n.routesById[Ka]
      , s = Lr(n, i)
      , o = n.ssr ? Ha : F.Suspense
      , r = z.jsxs(z.Fragment, {
        children: [z.jsx(_4, {
            t: F.useState()[1]
        }), z.jsx(o, {
            fallback: s,
            children: z.jsx(D4, {})
        })]
    });
    return n.options.InnerWrap ? z.jsx(n.options.InnerWrap, {
        children: r
    }) : r
}
function D4() {
    const n = fn()
      , i = n._rendered
      , s = gi(n.stores.matches, h => i[0] ?? h)
      , o = s[0]
      , r = o == null ? void 0 : o.routeId;
    Kg( () => {
        i[0] === s && w1(i, !0)
    }
    , [i, s]);
    const c = r ? z.jsx(C1, {
        routeId: r
    }) : null;
    return z.jsx(Or.Provider, {
        value: r,
        children: n.options.disableGlobalCatchBoundary ? c : z.jsx(gh, {
            getResetKey: () => o,
            onCatch: void 0,
            children: c
        })
    })
}
var O4 = n => ({
    createMutableStore: Ty,
    createReadonlyStore: Ty,
    batch: i4
})
  , z4 = n => new L4(n)
  , L4 = class extends Nb {
    constructor(n) {
        super(n, O4)
    }
}
;
function j4({router: n, children: i, ...s}) {
    Qg(s) && n.update({
        ...n.options,
        ...s,
        context: {
            ...n.options.context,
            ...s.context
        }
    });
    const o = z.jsx(d1.Provider, {
        value: n,
        children: i
    });
    return n.options.Wrap ? z.jsx(n.options.Wrap, {
        children: o
    }) : o
}
function N4({router: n, ...i}) {
    return z.jsx(j4, {
        router: n,
        ...i,
        children: z.jsx(R4, {})
    })
}
var _1 = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0
}
  , Ry = Je.createContext && Je.createContext(_1)
  , V4 = ["attr", "size", "title"];
function B4(n, i) {
    if (n == null)
        return {};
    var s, o, r = U4(n, i);
    if (Object.getOwnPropertySymbols) {
        var c = Object.getOwnPropertySymbols(n);
        for (o = 0; o < c.length; o++)
            s = c[o],
            i.indexOf(s) === -1 && {}.propertyIsEnumerable.call(n, s) && (r[s] = n[s])
    }
    return r
}
function U4(n, i) {
    if (n == null)
        return {};
    var s = {};
    for (var o in n)
        if ({}.hasOwnProperty.call(n, o)) {
            if (i.indexOf(o) !== -1)
                continue;
            s[o] = n[o]
        }
    return s
}
function yr() {
    return yr = Object.assign ? Object.assign.bind() : function(n) {
        for (var i = 1; i < arguments.length; i++) {
            var s = arguments[i];
            for (var o in s)
                ({}).hasOwnProperty.call(s, o) && (n[o] = s[o])
        }
        return n
    }
    ,
    yr.apply(null, arguments)
}
function Dy(n, i) {
    var s = Object.keys(n);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(n);
        i && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(n, r).enumerable
        })),
        s.push.apply(s, o)
    }
    return s
}
function gr(n) {
    for (var i = 1; i < arguments.length; i++) {
        var s = arguments[i] != null ? arguments[i] : {};
        i % 2 ? Dy(Object(s), !0).forEach(function(o) {
            H4(n, o, s[o])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : Dy(Object(s)).forEach(function(o) {
            Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(s, o))
        })
    }
    return n
}
function H4(n, i, s) {
    return (i = q4(i)) in n ? Object.defineProperty(n, i, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : n[i] = s,
    n
}
function q4(n) {
    var i = G4(n, "string");
    return typeof i == "symbol" ? i : i + ""
}
function G4(n, i) {
    if (typeof n != "object" || !n)
        return n;
    var s = n[Symbol.toPrimitive];
    if (s !== void 0) {
        var o = s.call(n, i);
        if (typeof o != "object")
            return o;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (i === "string" ? String : Number)(n)
}
function R1(n) {
    return n && n.map( (i, s) => Je.createElement(i.tag, gr({
        key: s
    }, i.attr), R1(i.child)))
}
function Ie(n) {
    return i => Je.createElement(Y4, yr({
        attr: gr({}, n.attr)
    }, i), R1(n.child))
}
function Y4(n) {
    var i = s => {
        var o = n.attr, r = n.size, c = n.title, h = B4(n, V4), d = r || s.size || "1em", p;
        return s.className && (p = s.className),
        n.className && (p = (p ? p + " " : "") + n.className),
        Je.createElement("svg", yr({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
        }, s.attr, o, h, {
            className: p,
            style: gr(gr({
                color: n.color || s.color
            }, s.style), n.style),
            height: d,
            width: d,
            xmlns: "http://www.w3.org/2000/svg"
        }), c && Je.createElement("title", null, c), n.children)
    }
    ;
    return Ry !== void 0 ? Je.createElement(Ry.Consumer, null, s => i(s)) : i(_1)
}
function k4(n) {
    return Ie({
        attr: {
            viewBox: "0 0 576 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
            },
            child: []
        }]
    })(n)
}
function X4(n) {
    return Ie({
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
            },
            child: []
        }]
    })(n)
}
function P4(n) {
    return Ie({
        attr: {
            viewBox: "0 0 448 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
            },
            child: []
        }]
    })(n)
}
function K4(n) {
    return Ie({
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M508.52,249.75,486.7,236.24c-.17-2-.34-3.93-.55-5.88l18.72-17.5a7.35,7.35,0,0,0-2.44-12.25l-24-9c-.54-1.88-1.08-3.78-1.67-5.64l15-20.83a7.35,7.35,0,0,0-4.79-11.54l-25.42-4.15c-.9-1.73-1.79-3.45-2.73-5.15l10.68-23.42a7.35,7.35,0,0,0-6.95-10.39l-25.82.91q-1.79-2.22-3.61-4.4L439,81.84A7.36,7.36,0,0,0,430.16,73L405,78.93q-2.17-1.83-4.4-3.61l.91-25.82a7.35,7.35,0,0,0-10.39-7L367.7,53.23c-1.7-.94-3.43-1.84-5.15-2.73L358.4,25.08a7.35,7.35,0,0,0-11.54-4.79L326,35.26c-1.86-.59-3.75-1.13-5.64-1.67l-9-24a7.35,7.35,0,0,0-12.25-2.44l-17.5,18.72c-1.95-.21-3.91-.38-5.88-.55L262.25,3.48a7.35,7.35,0,0,0-12.5,0L236.24,25.3c-2,.17-3.93.34-5.88.55L212.86,7.13a7.35,7.35,0,0,0-12.25,2.44l-9,24c-1.89.55-3.79,1.08-5.66,1.68l-20.82-15a7.35,7.35,0,0,0-11.54,4.79l-4.15,25.41c-1.73.9-3.45,1.79-5.16,2.73L120.88,42.55a7.35,7.35,0,0,0-10.39,7l.92,25.81c-1.49,1.19-3,2.39-4.42,3.61L81.84,73A7.36,7.36,0,0,0,73,81.84L78.93,107c-1.23,1.45-2.43,2.93-3.62,4.41l-25.81-.91a7.42,7.42,0,0,0-6.37,3.26,7.35,7.35,0,0,0-.57,7.13l10.66,23.41c-.94,1.7-1.83,3.43-2.73,5.16L25.08,153.6a7.35,7.35,0,0,0-4.79,11.54l15,20.82c-.59,1.87-1.13,3.77-1.68,5.66l-24,9a7.35,7.35,0,0,0-2.44,12.25l18.72,17.5c-.21,1.95-.38,3.91-.55,5.88L3.48,249.75a7.35,7.35,0,0,0,0,12.5L25.3,275.76c.17,2,.34,3.92.55,5.87L7.13,299.13a7.35,7.35,0,0,0,2.44,12.25l24,9c.55,1.89,1.08,3.78,1.68,5.65l-15,20.83a7.35,7.35,0,0,0,4.79,11.54l25.42,4.15c.9,1.72,1.79,3.45,2.73,5.14L42.56,391.12a7.35,7.35,0,0,0,.57,7.13,7.13,7.13,0,0,0,6.37,3.26l25.83-.91q1.77,2.22,3.6,4.4L73,430.16A7.36,7.36,0,0,0,81.84,439L107,433.07q2.18,1.83,4.41,3.61l-.92,25.82a7.35,7.35,0,0,0,10.39,6.95l23.43-10.68c1.69.94,3.42,1.83,5.14,2.73l4.15,25.42a7.34,7.34,0,0,0,11.54,4.78l20.83-15c1.86.6,3.76,1.13,5.65,1.68l9,24a7.36,7.36,0,0,0,12.25,2.44l17.5-18.72c1.95.21,3.92.38,5.88.55l13.51,21.82a7.35,7.35,0,0,0,12.5,0l13.51-21.82c2-.17,3.93-.34,5.88-.56l17.5,18.73a7.36,7.36,0,0,0,12.25-2.44l9-24c1.89-.55,3.78-1.08,5.65-1.68l20.82,15a7.34,7.34,0,0,0,11.54-4.78l4.15-25.42c1.72-.9,3.45-1.79,5.15-2.73l23.42,10.68a7.35,7.35,0,0,0,10.39-6.95l-.91-25.82q2.22-1.79,4.4-3.61L430.16,439a7.36,7.36,0,0,0,8.84-8.84L433.07,405q1.83-2.17,3.61-4.4l25.82.91a7.23,7.23,0,0,0,6.37-3.26,7.35,7.35,0,0,0,.58-7.13L458.77,367.7c.94-1.7,1.83-3.43,2.73-5.15l25.42-4.15a7.35,7.35,0,0,0,4.79-11.54l-15-20.83c.59-1.87,1.13-3.76,1.67-5.65l24-9a7.35,7.35,0,0,0,2.44-12.25l-18.72-17.5c.21-1.95.38-3.91.55-5.87l21.82-13.51a7.35,7.35,0,0,0,0-12.5Zm-151,129.08A13.91,13.91,0,0,0,341,389.51l-7.64,35.67A187.51,187.51,0,0,1,177,424.44l-7.64-35.66a13.87,13.87,0,0,0-16.46-10.68l-31.51,6.76a187.38,187.38,0,0,1-16.26-19.21H258.3c1.72,0,2.89-.29,2.89-1.91V309.55c0-1.57-1.17-1.91-2.89-1.91H213.47l.05-34.35H262c4.41,0,23.66,1.28,29.79,25.87,1.91,7.55,6.17,32.14,9.06,40,2.89,8.82,14.6,26.46,27.1,26.46H407a187.3,187.3,0,0,1-17.34,20.09Zm25.77,34.49A15.24,15.24,0,1,1,368,398.08h.44A15.23,15.23,0,0,1,383.24,413.32Zm-225.62-.68a15.24,15.24,0,1,1-15.25-15.25h.45A15.25,15.25,0,0,1,157.62,412.64ZM69.57,234.15l32.83-14.6a13.88,13.88,0,0,0,7.06-18.33L102.69,186h26.56V305.73H75.65A187.65,187.65,0,0,1,69.57,234.15ZM58.31,198.09a15.24,15.24,0,0,1,15.23-15.25H74a15.24,15.24,0,1,1-15.67,15.24Zm155.16,24.49.05-35.32h63.26c3.28,0,23.07,3.77,23.07,18.62,0,12.29-15.19,16.7-27.68,16.7ZM399,306.71c-9.8,1.13-20.63-4.12-22-10.09-5.78-32.49-15.39-39.4-30.57-51.4,18.86-11.95,38.46-29.64,38.46-53.26,0-25.52-17.49-41.59-29.4-49.48-16.76-11-35.28-13.23-40.27-13.23H116.32A187.49,187.49,0,0,1,221.21,70.06l23.47,24.6a13.82,13.82,0,0,0,19.6.44l26.26-25a187.51,187.51,0,0,1,128.37,91.43l-18,40.57A14,14,0,0,0,408,220.43l34.59,15.33a187.12,187.12,0,0,1,.4,32.54H423.71c-1.91,0-2.69,1.27-2.69,3.13v8.82C421,301,409.31,305.58,399,306.71ZM240,60.21A15.24,15.24,0,0,1,255.21,45h.45A15.24,15.24,0,1,1,240,60.21ZM436.84,214a15.24,15.24,0,1,1,0-30.48h.44a15.24,15.24,0,0,1-.44,30.48Z"
            },
            child: []
        }]
    })(n)
}
function Z4(n) {
    return Ie({
        attr: {
            viewBox: "0 0 448 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M0 32h214.6v214.6H0V32zm233.4 0H448v214.6H233.4V32zM0 265.4h214.6V480H0V265.4zm233.4 0H448V480H233.4V265.4z"
            },
            child: []
        }]
    })(n)
}
function Q4(n) {
    return Ie({
        attr: {
            viewBox: "0 0 640 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M400.1 194.8C389.2 197.6 380.2 199.1 371 202.4C363.7 204.3 356.3 206.3 347.8 208.5L347.2 208.6C343 209.8 342.6 209.9 338.7 205.4C334 200.1 330.6 196.7 324.1 193.5C304.4 183.9 285.4 186.7 267.7 198.2C246.5 211.9 235.6 232.2 235.9 257.4C236.2 282.4 253.3 302.9 277.1 306.3C299.1 309.1 316.9 301.7 330.9 285.8C333 283.2 334.9 280.5 337 277.5V277.5L337 277.5C337.8 276.5 338.5 275.4 339.3 274.2H279.2C272.7 274.2 271.1 270.2 273.3 264.9C277.3 255.2 284.8 239 289.2 230.9C290.1 229.1 292.3 225.1 296.1 225.1H397.2C401.7 211.7 409 198.2 418.8 185.4C441.5 155.5 468.1 139.9 506 133.4C537.8 127.8 567.7 130.9 594.9 149.3C619.5 166.1 634.7 188.9 638.8 218.8C644.1 260.9 631.9 295.1 602.1 324.4C582.4 345.3 557.2 358.4 528.2 364.3C522.6 365.3 517.1 365.8 511.7 366.3C508.8 366.5 506 366.8 503.2 367.1C474.9 366.5 449 358.4 427.2 339.7C411.9 326.4 401.3 310.1 396.1 291.2C392.4 298.5 388.1 305.6 382.1 312.3C360.5 341.9 331.2 360.3 294.2 365.2C263.6 369.3 235.3 363.4 210.3 344.7C187.3 327.2 174.2 304.2 170.8 275.5C166.7 241.5 176.7 210.1 197.2 184.2C219.4 155.2 248.7 136.8 284.5 130.3C313.8 124.1 341.8 128.4 367.1 145.6C383.6 156.5 395.4 171.4 403.2 189.5C405.1 192.3 403.8 193.9 400.1 194.8zM48.3 200.4C47.05 200.4 46.74 199.8 47.36 198.8L53.91 190.4C54.53 189.5 56.09 188.9 57.34 188.9H168.6C169.8 188.9 170.1 189.8 169.5 190.7L164.2 198.8C163.6 199.8 162 200.7 161.1 200.7L48.3 200.4zM1.246 229.1C0 229.1-.3116 228.4 .3116 227.5L6.855 219.1C7.479 218.2 9.037 217.5 10.28 217.5H152.4C153.6 217.5 154.2 218.5 153.9 219.4L151.4 226.9C151.1 228.1 149.9 228.8 148.6 228.8L1.246 229.1zM75.72 255.9C75.1 256.8 75.41 257.7 76.65 257.7L144.6 258C145.5 258 146.8 257.1 146.8 255.9L147.4 248.4C147.4 247.1 146.8 246.2 145.5 246.2H83.2C81.95 246.2 80.71 247.1 80.08 248.1L75.72 255.9zM577.2 237.9C577 235.3 576.9 233.1 576.5 230.9C570.9 200.1 542.5 182.6 512.9 189.5C483.9 196 465.2 214.4 458.4 243.7C452.8 268 464.6 292.6 487 302.6C504.2 310.1 521.3 309.2 537.8 300.7C562.4 287.1 575.8 268 577.4 241.2C577.3 240 577.3 238.9 577.2 237.9z"
            },
            child: []
        }]
    })(n)
}
function F4(n) {
    return Ie({
        attr: {
            viewBox: "0 0 640 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
            },
            child: []
        }]
    })(n)
}
function J4(n) {
    return Ie({
        attr: {
            viewBox: "0 0 640 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-154.3-121c-2-30.1 20.8-60.1 56-60.1l11.5 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-11.5 0c-49.9 0-74.9-60.3-39.6-95.6l8.2-8.2c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-8.2 8.2C412.3 118.4 352 93.4 352 43.5L352 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 11.5c0 49.9-60.3 74.9-95.6 39.6L184.2 75c-12.5-12.5-32.8-12.5-45.3 0c-1.6 1.6-3.1 3.4-4.3 5.3L38.8 5.1zm225.8 177c6.9-3.9 14.9-6.1 23.4-6.1c26.5 0 48 21.5 48 48c0 4.4-.6 8.7-1.7 12.7l-69.7-54.6zM402 412.7L144.7 210c-9.5 8.5-22.2 14-37.2 14L96 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l11.5 0c49.9 0 74.9 60.3 39.6 95.6l-8.2 8.2c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l8.2-8.2c35.3-35.3 95.6-10.3 95.6 39.6l0 11.5c0 17.7 14.3 32 32 32s32-14.3 32-32l0-11.5c0-31.2 23.6-52.7 50-55.7z"
            },
            child: []
        }]
    })(n)
}
function W4(n) {
    return Ie({
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
            },
            child: []
        }]
    })(n)
}
function I4(n) {
    return Ie({
        attr: {
            role: "img",
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
            },
            child: []
        }]
    })(n)
}
function $4(n) {
    return Ie({
        attr: {
            role: "img",
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z"
            },
            child: []
        }]
    })(n)
}
const D1 = F.createContext({});
function t5(n) {
    const i = F.useRef(null);
    return i.current === null && (i.current = n()),
    i.current
}
const e5 = typeof window < "u"
  , n5 = e5 ? F.useLayoutEffect : F.useEffect
  , vh = F.createContext(null);
function Sh(n, i) {
    n.indexOf(i) === -1 && n.push(i)
}
function vr(n, i) {
    const s = n.indexOf(i);
    s > -1 && n.splice(s, 1)
}
const cn = (n, i, s) => s > i ? i : s < n ? n : s;
let jr = () => {}
;
const vi = {}
  , O1 = n => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n)
  , z1 = n => typeof n == "object" && n !== null
  , L1 = n => /^0[^.\s]+$/u.test(n);
function j1(n) {
    let i;
    return () => (i === void 0 && (i = n()),
    i)
}
const ke = n => n
  , Sl = (...n) => n.reduce( (i, s) => o => s(i(o)))
  , ml = (n, i, s) => {
    const o = i - n;
    return o ? (s - n) / o : 1
}
;
class bh {
    constructor() {
        this.subscriptions = []
    }
    add(i) {
        return Sh(this.subscriptions, i),
        () => vr(this.subscriptions, i)
    }
    notify(i, s, o) {
        const r = this.subscriptions.length;
        if (r)
            if (r === 1)
                this.subscriptions[0](i, s, o);
            else
                for (let c = 0; c < r; c++) {
                    const h = this.subscriptions[c];
                    h && h(i, s, o)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const Oe = n => n * 1e3
  , Ye = n => n / 1e3
  , N1 = (n, i) => i ? n * (1e3 / i) : 0
  , V1 = (n, i, s) => (((1 - 3 * s + 3 * i) * n + (3 * s - 6 * i)) * n + 3 * i) * n
  , i5 = 1e-7
  , a5 = 12;
function s5(n, i, s, o, r) {
    let c, h, d = 0;
    do
        h = i + (s - i) / 2,
        c = V1(h, o, r) - n,
        c > 0 ? s = h : i = h;
    while (Math.abs(c) > i5 && ++d < a5);
    return h
}
function bl(n, i, s, o) {
    if (n === i && s === o)
        return ke;
    const r = c => s5(c, 0, 1, n, s);
    return c => c === 0 || c === 1 ? c : V1(r(c), i, o)
}
const B1 = n => i => i <= .5 ? n(2 * i) / 2 : (2 - n(2 * (1 - i))) / 2
  , U1 = n => i => 1 - n(1 - i)
  , H1 = bl(.33, 1.53, .69, .99)
  , xh = U1(H1)
  , q1 = B1(xh)
  , G1 = n => n >= 1 ? 1 : (n *= 2) < 1 ? .5 * xh(n) : .5 * (2 - Math.pow(2, -10 * (n - 1)))
  , Th = n => 1 - Math.sin(Math.acos(n))
  , Y1 = U1(Th)
  , k1 = B1(Th)
  , l5 = bl(.42, 0, 1, 1)
  , o5 = bl(0, 0, .58, 1)
  , X1 = bl(.42, 0, .58, 1)
  , r5 = n => Array.isArray(n) && typeof n[0] != "number"
  , P1 = n => Array.isArray(n) && typeof n[0] == "number"
  , u5 = {
    linear: ke,
    easeIn: l5,
    easeInOut: X1,
    easeOut: o5,
    circIn: Th,
    circInOut: k1,
    circOut: Y1,
    backIn: xh,
    backInOut: q1,
    backOut: H1,
    anticipate: G1
}
  , c5 = n => typeof n == "string"
  , Oy = n => {
    if (P1(n)) {
        jr(n.length === 4);
        const [i,s,o,r] = n;
        return bl(i, s, o, r)
    } else if (c5(n))
        return u5[n];
    return n
}
  , Zo = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];
function f5(n) {
    let i = new Set
      , s = new Set
      , o = !1
      , r = !1;
    const c = new WeakSet;
    let h = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };
    function d(m) {
        c.has(m) && (p.schedule(m),
        n()),
        m(h)
    }
    const p = {
        schedule: (m, v=!1, y=!1) => {
            const b = y && o ? i : s;
            return v && c.add(m),
            b.add(m),
            m
        }
        ,
        cancel: m => {
            s.delete(m),
            c.delete(m)
        }
        ,
        process: m => {
            if (h = m,
            o) {
                r = !0;
                return
            }
            o = !0;
            const v = i;
            i = s,
            s = v,
            i.forEach(d),
            i.clear(),
            o = !1,
            r && (r = !1,
            p.process(m))
        }
    };
    return p
}
const h5 = 40;
function K1(n, i) {
    let s = !1
      , o = !0;
    const r = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , c = () => s = !0
      , h = Zo.reduce( (O, V) => (O[V] = f5(c),
    O), {})
      , {setup: d, read: p, resolveKeyframes: m, preUpdate: v, update: y, preRender: S, render: b, postRender: T} = h
      , A = () => {
        const O = vi.useManualTiming
          , V = O ? r.timestamp : performance.now();
        s = !1,
        O || (r.delta = o ? 1e3 / 60 : Math.max(Math.min(V - r.timestamp, h5), 1)),
        r.timestamp = V,
        r.isProcessing = !0,
        d.process(r),
        p.process(r),
        m.process(r),
        v.process(r),
        y.process(r),
        S.process(r),
        b.process(r),
        T.process(r),
        r.isProcessing = !1,
        s && i && (o = !1,
        n(A))
    }
      , E = () => {
        s = !0,
        o = !0,
        r.isProcessing || n(A)
    }
    ;
    return {
        schedule: Zo.reduce( (O, V) => {
            const P = h[V];
            return O[V] = (Y, q=!1, Q=!1) => (s || E(),
            P.schedule(Y, q, Q)),
            O
        }
        , {}),
        cancel: O => {
            for (let V = 0; V < Zo.length; V++)
                h[Zo[V]].cancel(O)
        }
        ,
        state: r,
        steps: h
    }
}
const {schedule: Lt, cancel: Si, state: oe, steps: df} = K1(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ke, !0);
let nr;
function d5() {
    nr = void 0
}
const fe = {
    now: () => (nr === void 0 && fe.set(oe.isProcessing || vi.useManualTiming ? oe.timestamp : performance.now()),
    nr),
    set: n => {
        nr = n,
        queueMicrotask(d5)
    }
}
  , Z1 = n => i => typeof i == "string" && i.startsWith(n)
  , Q1 = Z1("--")
  , m5 = Z1("var(--")
  , Ah = n => m5(n) ? p5.test(n.split("/*")[0].trim()) : !1
  , p5 = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function zy(n) {
    return typeof n != "string" ? !1 : n.split("/*")[0].includes("var(--")
}
const Ia = {
    test: n => typeof n == "number",
    parse: parseFloat,
    transform: n => n
}
  , pl = {
    ...Ia,
    transform: n => cn(0, 1, n)
}
  , Qo = {
    ...Ia,
    default: 1
}
  , ll = n => Math.round(n * 1e5) / 1e5
  , Eh = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function y5(n) {
    return n == null
}
const g5 = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , Ch = (n, i) => s => !!(typeof s == "string" && g5.test(s) && s.startsWith(n) || i && !y5(s) && Object.prototype.hasOwnProperty.call(s, i))
  , F1 = (n, i, s) => o => {
    if (typeof o != "string")
        return o;
    const [r,c,h,d] = o.match(Eh);
    return {
        [n]: parseFloat(r),
        [i]: parseFloat(c),
        [s]: parseFloat(h),
        alpha: d !== void 0 ? parseFloat(d) : 1
    }
}
  , v5 = n => cn(0, 255, n)
  , mf = {
    ...Ia,
    transform: n => Math.round(v5(n))
}
  , Xi = {
    test: Ch("rgb", "red"),
    parse: F1("red", "green", "blue"),
    transform: ({red: n, green: i, blue: s, alpha: o=1}) => "rgba(" + mf.transform(n) + ", " + mf.transform(i) + ", " + mf.transform(s) + ", " + ll(pl.transform(o)) + ")"
};
function S5(n) {
    let i = ""
      , s = ""
      , o = ""
      , r = "";
    return n.length > 5 ? (i = n.substring(1, 3),
    s = n.substring(3, 5),
    o = n.substring(5, 7),
    r = n.substring(7, 9)) : (i = n.substring(1, 2),
    s = n.substring(2, 3),
    o = n.substring(3, 4),
    r = n.substring(4, 5),
    i += i,
    s += s,
    o += o,
    r += r),
    {
        red: parseInt(i, 16),
        green: parseInt(s, 16),
        blue: parseInt(o, 16),
        alpha: r ? parseInt(r, 16) / 255 : 1
    }
}
const Uf = {
    test: Ch("#"),
    parse: S5,
    transform: Xi.transform
}
  , xl = n => ({
    test: i => typeof i == "string" && i.endsWith(n) && i.split(" ").length === 1,
    parse: parseFloat,
    transform: i => `${i}${n}`
})
  , jn = xl("deg")
  , un = xl("%")
  , it = xl("px")
  , b5 = xl("vh")
  , x5 = xl("vw")
  , Ly = {
    ...un,
    parse: n => un.parse(n) / 100,
    transform: n => un.transform(n * 100)
}
  , Ga = {
    test: Ch("hsl", "hue"),
    parse: F1("hue", "saturation", "lightness"),
    transform: ({hue: n, saturation: i, lightness: s, alpha: o=1}) => "hsla(" + Math.round(n) + ", " + un.transform(ll(i)) + ", " + un.transform(ll(s)) + ", " + ll(pl.transform(o)) + ")"
}
  , Ft = {
    test: n => Xi.test(n) || Uf.test(n) || Ga.test(n),
    parse: n => Xi.test(n) ? Xi.parse(n) : Ga.test(n) ? Ga.parse(n) : Uf.parse(n),
    transform: n => typeof n == "string" ? n : n.hasOwnProperty("red") ? Xi.transform(n) : Ga.transform(n),
    getAnimatableNone: n => {
        const i = Ft.parse(n);
        return i.alpha = 0,
        Ft.transform(i)
    }
}
  , T5 = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function A5(n) {
    var i, s;
    return isNaN(n) && typeof n == "string" && (((i = n.match(Eh)) == null ? void 0 : i.length) || 0) + (((s = n.match(T5)) == null ? void 0 : s.length) || 0) > 0
}
const J1 = "number"
  , W1 = "color"
  , E5 = "var"
  , C5 = "var("
  , jy = "${}"
  , M5 = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Ja(n) {
    const i = n.toString()
      , s = []
      , o = {
        color: [],
        number: [],
        var: []
    }
      , r = [];
    let c = 0;
    const d = i.replace(M5, p => (Ft.test(p) ? (o.color.push(c),
    r.push(W1),
    s.push(Ft.parse(p))) : p.startsWith(C5) ? (o.var.push(c),
    r.push(E5),
    s.push(p)) : (o.number.push(c),
    r.push(J1),
    s.push(parseFloat(p))),
    ++c,
    jy)).split(jy);
    return {
        values: s,
        split: d,
        indexes: o,
        types: r
    }
}
function w5(n) {
    return Ja(n).values
}
function I1({split: n, types: i}) {
    const s = n.length;
    return o => {
        let r = "";
        for (let c = 0; c < s; c++)
            if (r += n[c],
            o[c] !== void 0) {
                const h = i[c];
                h === J1 ? r += ll(o[c]) : h === W1 ? r += Ft.transform(o[c]) : r += o[c]
            }
        return r
    }
}
function _5(n) {
    return I1(Ja(n))
}
const R5 = n => typeof n == "number" ? 0 : Ft.test(n) ? Ft.getAnimatableNone(n) : n
  , D5 = (n, i) => typeof n == "number" ? i != null && i.trim().endsWith("/") ? n : 0 : R5(n);
function O5(n) {
    const i = Ja(n);
    return I1(i)(i.values.map( (o, r) => D5(o, i.split[r])))
}
const We = {
    test: A5,
    parse: w5,
    createTransformer: _5,
    getAnimatableNone: O5
};
function pf(n, i, s) {
    return s < 0 && (s += 1),
    s > 1 && (s -= 1),
    s < 1 / 6 ? n + (i - n) * 6 * s : s < 1 / 2 ? i : s < 2 / 3 ? n + (i - n) * (2 / 3 - s) * 6 : n
}
function z5({hue: n, saturation: i, lightness: s, alpha: o}) {
    n /= 360,
    i /= 100,
    s /= 100;
    let r = 0
      , c = 0
      , h = 0;
    if (!i)
        r = c = h = s;
    else {
        const d = s < .5 ? s * (1 + i) : s + i - s * i
          , p = 2 * s - d;
        r = pf(p, d, n + 1 / 3),
        c = pf(p, d, n),
        h = pf(p, d, n - 1 / 3)
    }
    return {
        red: Math.round(r * 255),
        green: Math.round(c * 255),
        blue: Math.round(h * 255),
        alpha: o
    }
}
function Sr(n, i) {
    return s => s > 0 ? i : n
}
const zt = (n, i, s) => n + (i - n) * s
  , yf = (n, i, s) => {
    const o = n * n
      , r = s * (i * i - o) + o;
    return r < 0 ? 0 : Math.sqrt(r)
}
  , L5 = [Uf, Xi, Ga]
  , j5 = n => L5.find(i => i.test(n));
function Ny(n) {
    const i = j5(n);
    if (!i)
        return !1;
    let s = i.parse(n);
    return i === Ga && (s = z5(s)),
    s
}
const Vy = (n, i) => {
    const s = Ny(n)
      , o = Ny(i);
    if (!s || !o)
        return Sr(n, i);
    const r = {
        ...s
    };
    return c => (r.red = yf(s.red, o.red, c),
    r.green = yf(s.green, o.green, c),
    r.blue = yf(s.blue, o.blue, c),
    r.alpha = zt(s.alpha, o.alpha, c),
    Xi.transform(r))
}
  , Hf = new Set(["none", "hidden"]);
function N5(n, i) {
    return Hf.has(n) ? s => s <= 0 ? n : i : s => s >= 1 ? i : n
}
function V5(n, i) {
    return s => zt(n, i, s)
}
function Mh(n) {
    return typeof n == "number" ? V5 : typeof n == "string" ? Ah(n) ? Sr : Ft.test(n) ? Vy : H5 : Array.isArray(n) ? $1 : typeof n == "object" ? Ft.test(n) ? Vy : B5 : Sr
}
function $1(n, i) {
    const s = [...n]
      , o = s.length
      , r = n.map( (c, h) => Mh(c)(c, i[h]));
    return c => {
        for (let h = 0; h < o; h++)
            s[h] = r[h](c);
        return s
    }
}
function B5(n, i) {
    const s = {
        ...n,
        ...i
    }
      , o = {};
    for (const r in s)
        n[r] !== void 0 && i[r] !== void 0 && (o[r] = Mh(n[r])(n[r], i[r]));
    return r => {
        for (const c in o)
            s[c] = o[c](r);
        return s
    }
}
function U5(n, i) {
    const s = []
      , o = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let r = 0; r < i.values.length; r++) {
        const c = i.types[r]
          , h = n.indexes[c][o[c]]
          , d = n.values[h] ?? 0;
        s[r] = d,
        o[c]++
    }
    return s
}
const H5 = (n, i) => {
    const s = We.createTransformer(i)
      , o = Ja(n)
      , r = Ja(i);
    return o.indexes.var.length === r.indexes.var.length && o.indexes.color.length === r.indexes.color.length && o.indexes.number.length >= r.indexes.number.length ? Hf.has(n) && !r.values.length || Hf.has(i) && !o.values.length ? N5(n, i) : Sl($1(U5(o, r), r.values), s) : Sr(n, i)
}
;
function tv(n, i, s) {
    return typeof n == "number" && typeof i == "number" && typeof s == "number" ? zt(n, i, s) : Mh(n)(n, i)
}
const q5 = n => {
    const i = ({timestamp: s}) => n(s);
    return {
        start: (s=!0) => Lt.update(i, s),
        stop: () => Si(i),
        now: () => oe.isProcessing ? oe.timestamp : fe.now()
    }
}
  , ev = (n, i, s=10) => {
    let o = "";
    const r = Math.max(Math.round(i / s), 2);
    for (let c = 0; c < r; c++)
        o += Math.round(n(c / (r - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${o.substring(0, o.length - 2)})`
}
  , br = 2e4;
function wh(n) {
    let i = 0;
    const s = 50;
    let o = n.next(i);
    for (; !o.done && i < br; )
        i += s,
        o = n.next(i);
    return i >= br ? 1 / 0 : i
}
function G5(n, i=100, s) {
    const o = s({
        ...n,
        keyframes: [0, i]
    })
      , r = Math.min(wh(o), br);
    return {
        type: "keyframes",
        ease: c => o.next(r * c).value / i,
        duration: Ye(r)
    }
}
const Yt = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
};
function qf(n, i) {
    return n * Math.sqrt(1 - i * i)
}
const Y5 = 12;
function k5(n, i, s) {
    let o = s;
    for (let r = 1; r < Y5; r++)
        o = o - n(o) / i(o);
    return o
}
const gf = .001;
function X5({duration: n=Yt.duration, bounce: i=Yt.bounce, velocity: s=Yt.velocity, mass: o=Yt.mass}) {
    let r, c, h = 1 - i;
    h = cn(Yt.minDamping, Yt.maxDamping, h),
    n = cn(Yt.minDuration, Yt.maxDuration, Ye(n)),
    h < 1 ? (r = m => {
        const v = m * h
          , y = v * n
          , S = v - s
          , b = qf(m, h)
          , T = Math.exp(-y);
        return gf - S / b * T
    }
    ,
    c = m => {
        const y = m * h * n
          , S = y * s + s
          , b = Math.pow(h, 2) * Math.pow(m, 2) * n
          , T = Math.exp(-y)
          , A = qf(Math.pow(m, 2), h);
        return (-r(m) + gf > 0 ? -1 : 1) * ((S - b) * T) / A
    }
    ) : (r = m => {
        const v = Math.exp(-m * n)
          , y = (m - s) * n + 1;
        return -gf + v * y
    }
    ,
    c = m => {
        const v = Math.exp(-m * n)
          , y = (s - m) * (n * n);
        return v * y
    }
    );
    const d = 5 / n
      , p = k5(r, c, d);
    if (n = Oe(n),
    isNaN(p))
        return {
            stiffness: Yt.stiffness,
            damping: Yt.damping,
            duration: n
        };
    {
        const m = Math.pow(p, 2) * o;
        return {
            stiffness: m,
            damping: h * 2 * Math.sqrt(o * m),
            duration: n
        }
    }
}
const P5 = ["duration", "bounce"]
  , K5 = ["stiffness", "damping", "mass"];
function By(n, i) {
    return i.some(s => n[s] !== void 0)
}
function Z5(n) {
    let i = {
        velocity: Yt.velocity,
        stiffness: Yt.stiffness,
        damping: Yt.damping,
        mass: Yt.mass,
        isResolvedFromDuration: !1,
        ...n
    };
    if (!By(n, K5) && By(n, P5))
        if (i.velocity = 0,
        n.visualDuration) {
            const s = n.visualDuration
              , o = 2 * Math.PI / (s * 1.2)
              , r = o * o
              , c = 2 * cn(.05, 1, 1 - (n.bounce || 0)) * Math.sqrt(r);
            i = {
                ...i,
                mass: Yt.mass,
                stiffness: r,
                damping: c
            }
        } else {
            const s = X5({
                ...n,
                velocity: 0
            });
            i = {
                ...i,
                ...s,
                mass: Yt.mass
            },
            i.isResolvedFromDuration = !0
        }
    return i
}
function xr(n=Yt.visualDuration, i=Yt.bounce) {
    const s = typeof n != "object" ? {
        visualDuration: n,
        keyframes: [0, 1],
        bounce: i
    } : n;
    let {restSpeed: o, restDelta: r} = s;
    const c = s.keyframes[0]
      , h = s.keyframes[s.keyframes.length - 1]
      , d = {
        done: !1,
        value: c
    }
      , {stiffness: p, damping: m, mass: v, duration: y, velocity: S, isResolvedFromDuration: b} = Z5({
        ...s,
        velocity: -Ye(s.velocity || 0)
    })
      , T = S || 0
      , A = m / (2 * Math.sqrt(p * v))
      , E = h - c
      , R = Ye(Math.sqrt(p / v))
      , _ = Math.abs(E) < 5;
    o || (o = _ ? Yt.restSpeed.granular : Yt.restSpeed.default),
    r || (r = _ ? Yt.restDelta.granular : Yt.restDelta.default);
    let O, V, P, Y, q, Q;
    if (A < 1)
        P = qf(R, A),
        Y = (T + A * R * E) / P,
        O = K => {
            const W = Math.exp(-A * R * K);
            return h - W * (Y * Math.sin(P * K) + E * Math.cos(P * K))
        }
        ,
        q = A * R * Y + E * P,
        Q = A * R * E - Y * P,
        V = K => Math.exp(-A * R * K) * (q * Math.sin(P * K) + Q * Math.cos(P * K));
    else if (A === 1) {
        O = W => h - Math.exp(-R * W) * (E + (T + R * E) * W);
        const K = T + R * E;
        V = W => Math.exp(-R * W) * (R * K * W - T)
    } else {
        const K = R * Math.sqrt(A * A - 1);
        O = rt => {
            const ot = Math.exp(-A * R * rt)
              , B = Math.min(K * rt, 300);
            return h - ot * ((T + A * R * E) * Math.sinh(B) + K * E * Math.cosh(B)) / K
        }
        ;
        const W = (T + A * R * E) / K
          , tt = A * R * W - E * K
          , pt = A * R * E - W * K;
        V = rt => {
            const ot = Math.exp(-A * R * rt)
              , B = Math.min(K * rt, 300);
            return ot * (tt * Math.sinh(B) + pt * Math.cosh(B))
        }
    }
    const Z = {
        calculatedDuration: b && y || null,
        velocity: K => Oe(V(K)),
        next: K => {
            if (!b && A < 1) {
                const tt = Math.exp(-A * R * K)
                  , pt = Math.sin(P * K)
                  , rt = Math.cos(P * K)
                  , ot = h - tt * (Y * pt + E * rt)
                  , B = Oe(tt * (q * pt + Q * rt));
                return d.done = Math.abs(B) <= o && Math.abs(h - ot) <= r,
                d.value = d.done ? h : ot,
                d
            }
            const W = O(K);
            if (b)
                d.done = K >= y;
            else {
                const tt = Oe(V(K));
                d.done = Math.abs(tt) <= o && Math.abs(h - W) <= r
            }
            return d.value = d.done ? h : W,
            d
        }
        ,
        toString: () => {
            const K = Math.min(wh(Z), br)
              , W = ev(tt => Z.next(K * tt).value, K, 30);
            return K + "ms " + W
        }
        ,
        toTransition: () => {}
    };
    return Z
}
xr.applyToOptions = n => {
    const i = G5(n, 100, xr);
    return n.ease = i.ease,
    n.duration = Oe(i.duration),
    n.type = "keyframes",
    n
}
;
const Q5 = 5;
function nv(n, i, s) {
    const o = Math.max(i - Q5, 0);
    return N1(s - n(o), i - o)
}
function Gf({keyframes: n, velocity: i=0, power: s=.8, timeConstant: o=325, bounceDamping: r=10, bounceStiffness: c=500, modifyTarget: h, min: d, max: p, restDelta: m=.5, restSpeed: v}) {
    const y = n[0]
      , S = {
        done: !1,
        value: y
    }
      , b = Q => d !== void 0 && Q < d || p !== void 0 && Q > p
      , T = Q => d === void 0 ? p : p === void 0 || Math.abs(d - Q) < Math.abs(p - Q) ? d : p;
    let A = s * i;
    const E = y + A
      , R = h === void 0 ? E : h(E);
    R !== E && (A = R - y);
    const _ = Q => -A * Math.exp(-Q / o)
      , O = Q => R + _(Q)
      , V = Q => {
        const Z = _(Q)
          , K = O(Q);
        S.done = Math.abs(Z) <= m,
        S.value = S.done ? R : K
    }
    ;
    let P, Y;
    const q = Q => {
        b(S.value) && (P = Q,
        Y = xr({
            keyframes: [S.value, T(S.value)],
            velocity: nv(O, Q, S.value),
            damping: r,
            stiffness: c,
            restDelta: m,
            restSpeed: v
        }))
    }
    ;
    return q(0),
    {
        calculatedDuration: null,
        next: Q => {
            let Z = !1;
            return !Y && P === void 0 && (Z = !0,
            V(Q),
            q(Q)),
            P !== void 0 && Q >= P ? Y.next(Q - P) : (!Z && V(Q),
            S)
        }
    }
}
function F5(n, i, s) {
    const o = []
      , r = s || vi.mix || tv
      , c = n.length - 1;
    for (let h = 0; h < c; h++) {
        let d = r(n[h], n[h + 1]);
        if (i) {
            const p = Array.isArray(i) ? i[h] || ke : i;
            d = Sl(p, d)
        }
        o.push(d)
    }
    return o
}
function J5(n, i, {clamp: s=!0, ease: o, mixer: r}={}) {
    const c = n.length;
    if (jr(c === i.length),
    c === 1)
        return () => i[0];
    if (c === 2 && i[0] === i[1])
        return () => i[1];
    const h = n[0] === n[1];
    n[0] > n[c - 1] && (n = [...n].reverse(),
    i = [...i].reverse());
    const d = F5(i, o, r)
      , p = d.length
      , m = v => {
        if (h && v < n[0])
            return i[0];
        let y = 0;
        if (p > 1)
            for (; y < n.length - 2 && !(v < n[y + 1]); y++)
                ;
        const S = ml(n[y], n[y + 1], v);
        return d[y](S)
    }
    ;
    return s ? v => m(cn(n[0], n[c - 1], v)) : m
}
function W5(n, i) {
    const s = n[n.length - 1];
    for (let o = 1; o <= i; o++) {
        const r = ml(0, i, o);
        n.push(zt(s, 1, r))
    }
}
function I5(n) {
    const i = [0];
    return W5(i, n.length - 1),
    i
}
function $5(n, i) {
    return n.map(s => s * i)
}
function tx(n, i) {
    return n.map( () => i || X1).splice(0, n.length - 1)
}
function ol({duration: n=300, keyframes: i, times: s, ease: o="easeInOut"}) {
    const r = r5(o) ? o.map(Oy) : Oy(o)
      , c = {
        done: !1,
        value: i[0]
    }
      , h = $5(s && s.length === i.length ? s : I5(i), n)
      , d = J5(h, i, {
        ease: Array.isArray(r) ? r : tx(i, r)
    });
    return {
        calculatedDuration: n,
        next: p => (c.value = d(p),
        c.done = p >= n,
        c)
    }
}
const ex = n => n !== null;
function Nr(n, {repeat: i, repeatType: s="loop"}, o, r=1) {
    const c = n.filter(ex)
      , d = r < 0 || i && s !== "loop" && i % 2 === 1 ? 0 : c.length - 1;
    return !d || o === void 0 ? c[d] : o
}
const nx = {
    decay: Gf,
    inertia: Gf,
    tween: ol,
    keyframes: ol,
    spring: xr
};
function iv(n) {
    typeof n.type == "string" && (n.type = nx[n.type])
}
class _h {
    constructor() {
        this.updateFinished()
    }
    get finished() {
        return this._finished
    }
    updateFinished() {
        this._finished = new Promise(i => {
            this.resolve = i
        }
        )
    }
    notifyFinished() {
        this.resolve()
    }
    then(i, s) {
        return this.finished.then(i, s)
    }
}
const ix = n => n / 100;
class Tr extends _h {
    constructor(i) {
        super(),
        this.state = "idle",
        this.startTime = null,
        this.isStopped = !1,
        this.currentTime = 0,
        this.holdTime = null,
        this.playbackSpeed = 1,
        this.delayState = {
            done: !1,
            value: void 0
        },
        this.stop = () => {
            var o, r;
            const {motionValue: s} = this.options;
            s && s.updatedAt !== fe.now() && this.tick(fe.now()),
            this.isStopped = !0,
            this.state !== "idle" && (this.teardown(),
            (r = (o = this.options).onStop) == null || r.call(o))
        }
        ,
        this.options = i,
        this.initAnimation(),
        this.play(),
        i.autoplay === !1 && this.pause()
    }
    initAnimation() {
        const {options: i} = this;
        iv(i);
        const {type: s=ol, repeat: o=0, repeatDelay: r=0, repeatType: c, velocity: h=0} = i;
        let {keyframes: d} = i;
        const p = s || ol;
        p !== ol && typeof d[0] != "number" && (this.mixKeyframes = Sl(ix, tv(d[0], d[1])),
        d = [0, 100]);
        const m = p({
            ...i,
            keyframes: d
        });
        c === "mirror" && (this.mirroredGenerator = p({
            ...i,
            keyframes: [...d].reverse(),
            velocity: -h
        })),
        m.calculatedDuration === null && (m.calculatedDuration = wh(m));
        const {calculatedDuration: v} = m;
        this.calculatedDuration = v,
        this.resolvedDuration = v + r,
        this.totalDuration = this.resolvedDuration * (o + 1) - r,
        this.generator = m
    }
    updateTime(i) {
        const s = Math.round(i - this.startTime) * this.playbackSpeed;
        this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = s
    }
    tick(i, s=!1) {
        const {generator: o, totalDuration: r, mixKeyframes: c, mirroredGenerator: h, resolvedDuration: d, calculatedDuration: p} = this;
        if (this.startTime === null)
            return o.next(0);
        const {delay: m=0, keyframes: v, repeat: y, repeatType: S, repeatDelay: b, type: T, onUpdate: A, finalKeyframe: E} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, i) : this.speed < 0 && (this.startTime = Math.min(i - r / this.speed, this.startTime)),
        s ? this.currentTime = i : this.updateTime(i);
        const R = this.currentTime - m * (this.playbackSpeed >= 0 ? 1 : -1)
          , _ = this.playbackSpeed >= 0 ? R < 0 : R > r;
        this.currentTime = Math.max(R, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = r);
        let O = this.currentTime
          , V = o;
        if (y) {
            const Q = Math.min(this.currentTime, r) / d;
            let Z = Math.floor(Q)
              , K = Q % 1;
            !K && Q >= 1 && (K = 1),
            K === 1 && Z--,
            Z = Math.min(Z, y + 1),
            !!(Z % 2) && (S === "reverse" ? (K = 1 - K,
            b && (K -= b / d)) : S === "mirror" && (V = h)),
            O = cn(0, 1, K) * d
        }
        let P;
        _ ? (this.delayState.value = v[0],
        P = this.delayState) : P = V.next(O),
        c && !_ && (P.value = c(P.value));
        let {done: Y} = P;
        !_ && p !== null && (Y = this.playbackSpeed >= 0 ? this.currentTime >= r : this.currentTime <= 0);
        const q = this.holdTime === null && (this.state === "finished" || this.state === "running" && Y);
        return q && T !== Gf && (P.value = Nr(v, this.options, E, this.speed)),
        A && A(P.value),
        q && this.finish(),
        P
    }
    then(i, s) {
        return this.finished.then(i, s)
    }
    get duration() {
        return Ye(this.calculatedDuration)
    }
    get iterationDuration() {
        const {delay: i=0} = this.options || {};
        return this.duration + Ye(i)
    }
    get time() {
        return Ye(this.currentTime)
    }
    set time(i) {
        i = Oe(i),
        this.currentTime = i,
        this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = i : this.driver && (this.startTime = this.driver.now() - i / this.playbackSpeed),
        this.driver ? this.driver.start(!1) : (this.startTime = 0,
        this.state = "paused",
        this.holdTime = i,
        this.tick(i))
    }
    getGeneratorVelocity() {
        const i = this.currentTime;
        if (i <= 0)
            return this.options.velocity || 0;
        if (this.generator.velocity)
            return this.generator.velocity(i);
        const s = this.generator.next(i).value;
        return nv(o => this.generator.next(o).value, i, s)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(i) {
        const s = this.playbackSpeed !== i;
        s && this.driver && this.updateTime(fe.now()),
        this.playbackSpeed = i,
        s && this.driver && (this.time = Ye(this.currentTime))
    }
    play() {
        var r, c;
        if (this.isStopped)
            return;
        const {driver: i=q5, startTime: s} = this.options;
        this.driver || (this.driver = i(h => this.tick(h))),
        (c = (r = this.options).onPlay) == null || c.call(r);
        const o = this.driver.now();
        this.state === "finished" ? (this.updateFinished(),
        this.startTime = o) : this.holdTime !== null ? this.startTime = o - this.holdTime : this.startTime || (this.startTime = s ?? o),
        this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration),
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        this.state = "paused",
        this.updateTime(fe.now()),
        this.holdTime = this.currentTime
    }
    complete() {
        this.state !== "running" && this.play(),
        this.state = "finished",
        this.holdTime = null
    }
    finish() {
        var i, s;
        this.notifyFinished(),
        this.teardown(),
        this.state = "finished",
        (s = (i = this.options).onComplete) == null || s.call(i)
    }
    cancel() {
        var i, s;
        this.holdTime = null,
        this.startTime = 0,
        this.tick(0),
        this.teardown(),
        (s = (i = this.options).onCancel) == null || s.call(i)
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.startTime = this.holdTime = null
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(i) {
        return this.startTime = 0,
        this.tick(i, !0)
    }
    attachTimeline(i) {
        var s;
        return this.options.allowFlatten && (this.options.type = "keyframes",
        this.options.ease = "linear",
        this.initAnimation()),
        (s = this.driver) == null || s.stop(),
        i.observe(this)
    }
}
function ax(n) {
    for (let i = 1; i < n.length; i++)
        n[i] ?? (n[i] = n[i - 1])
}
const Pi = n => n * 180 / Math.PI
  , Yf = n => {
    const i = Pi(Math.atan2(n[1], n[0]));
    return kf(i)
}
  , sx = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: n => (Math.abs(n[0]) + Math.abs(n[3])) / 2,
    rotate: Yf,
    rotateZ: Yf,
    skewX: n => Pi(Math.atan(n[1])),
    skewY: n => Pi(Math.atan(n[2])),
    skew: n => (Math.abs(n[1]) + Math.abs(n[2])) / 2
}
  , kf = n => (n = n % 360,
n < 0 && (n += 360),
n)
  , Uy = Yf
  , Hy = n => Math.sqrt(n[0] * n[0] + n[1] * n[1])
  , qy = n => Math.sqrt(n[4] * n[4] + n[5] * n[5])
  , lx = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Hy,
    scaleY: qy,
    scale: n => (Hy(n) + qy(n)) / 2,
    rotateX: n => kf(Pi(Math.atan2(n[6], n[5]))),
    rotateY: n => kf(Pi(Math.atan2(-n[2], n[0]))),
    rotateZ: Uy,
    rotate: Uy,
    skewX: n => Pi(Math.atan(n[4])),
    skewY: n => Pi(Math.atan(n[1])),
    skew: n => (Math.abs(n[1]) + Math.abs(n[4])) / 2
};
function Xf(n) {
    return n.includes("scale") ? 1 : 0
}
function Pf(n, i) {
    if (!n || n === "none")
        return Xf(i);
    const s = n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let o, r;
    if (s)
        o = lx,
        r = s;
    else {
        const d = n.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        o = sx,
        r = d
    }
    if (!r)
        return Xf(i);
    const c = o[i]
      , h = r[1].split(",").map(rx);
    return typeof c == "function" ? c(h) : h[c]
}
const ox = (n, i) => {
    const {transform: s="none"} = getComputedStyle(n);
    return Pf(s, i)
}
;
function rx(n) {
    return parseFloat(n.trim())
}
const $a = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , ts = new Set([...$a, "pathRotation"])
  , Gy = n => n === Ia || n === it
  , ux = new Set(["x", "y", "z"])
  , cx = $a.filter(n => !ux.has(n));
function fx(n) {
    const i = [];
    return cx.forEach(s => {
        const o = n.getValue(s);
        o !== void 0 && (i.push([s, o.get()]),
        o.set(s.startsWith("scale") ? 1 : 0))
    }
    ),
    i
}
const di = {
    width: ({x: n}, {paddingLeft: i="0", paddingRight: s="0", boxSizing: o}) => {
        const r = n.max - n.min;
        return o === "border-box" ? r : r - parseFloat(i) - parseFloat(s)
    }
    ,
    height: ({y: n}, {paddingTop: i="0", paddingBottom: s="0", boxSizing: o}) => {
        const r = n.max - n.min;
        return o === "border-box" ? r : r - parseFloat(i) - parseFloat(s)
    }
    ,
    top: (n, {top: i}) => parseFloat(i),
    left: (n, {left: i}) => parseFloat(i),
    bottom: ({y: n}, {top: i}) => parseFloat(i) + (n.max - n.min),
    right: ({x: n}, {left: i}) => parseFloat(i) + (n.max - n.min),
    x: (n, {transform: i}) => Pf(i, "x"),
    y: (n, {transform: i}) => Pf(i, "y")
};
di.translateX = di.x;
di.translateY = di.y;
const Zi = new Set;
let Kf = !1
  , Zf = !1
  , Qf = !1;
function av() {
    if (Zf) {
        const n = Array.from(Zi).filter(o => o.needsMeasurement)
          , i = new Set(n.map(o => o.element))
          , s = new Map;
        i.forEach(o => {
            const r = fx(o);
            r.length && (s.set(o, r),
            o.render())
        }
        ),
        n.forEach(o => o.measureInitialState()),
        i.forEach(o => {
            o.render();
            const r = s.get(o);
            r && r.forEach( ([c,h]) => {
                var d;
                (d = o.getValue(c)) == null || d.set(h)
            }
            )
        }
        ),
        n.forEach(o => o.measureEndState()),
        n.forEach(o => {
            o.suspendedScrollY !== void 0 && window.scrollTo(0, o.suspendedScrollY)
        }
        )
    }
    Zf = !1,
    Kf = !1,
    Zi.forEach(n => n.complete(Qf)),
    Zi.clear()
}
function sv() {
    Zi.forEach(n => {
        n.readKeyframes(),
        n.needsMeasurement && (Zf = !0)
    }
    )
}
function hx() {
    Qf = !0,
    sv(),
    av(),
    Qf = !1
}
class Rh {
    constructor(i, s, o, r, c, h=!1) {
        this.state = "pending",
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.unresolvedKeyframes = [...i],
        this.onComplete = s,
        this.name = o,
        this.motionValue = r,
        this.element = c,
        this.isAsync = h
    }
    scheduleResolve() {
        this.state = "scheduled",
        this.isAsync ? (Zi.add(this),
        Kf || (Kf = !0,
        Lt.read(sv),
        Lt.resolveKeyframes(av))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: i, name: s, element: o, motionValue: r} = this;
        if (i[0] === null) {
            const c = r == null ? void 0 : r.get()
              , h = i[i.length - 1];
            if (c !== void 0)
                i[0] = c;
            else if (o && s) {
                const d = o.readValue(s, h);
                d != null && (i[0] = d)
            }
            i[0] === void 0 && (i[0] = h),
            r && c === void 0 && r.set(i[0])
        }
        ax(i)
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(i=!1) {
        this.state = "complete",
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, i),
        Zi.delete(this)
    }
    cancel() {
        this.state === "scheduled" && (Zi.delete(this),
        this.state = "pending")
    }
    resume() {
        this.state === "pending" && this.scheduleResolve()
    }
}
const dx = n => n.startsWith("--");
function lv(n, i, s) {
    dx(i) ? n.style.setProperty(i, s) : n.style[i] = s
}
const mx = {};
function ov(n, i) {
    const s = j1(n);
    return () => mx[i] ?? s()
}
const px = ov( () => window.ScrollTimeline !== void 0, "scrollTimeline")
  , rv = ov( () => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}
, "linearEasing")
  , il = ([n,i,s,o]) => `cubic-bezier(${n}, ${i}, ${s}, ${o})`
  , Yy = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: il([0, .65, .55, 1]),
    circOut: il([.55, 0, 1, .45]),
    backIn: il([.31, .01, .66, -.59]),
    backOut: il([.33, 1.53, .69, .99])
};
function uv(n, i) {
    if (n)
        return typeof n == "function" ? rv() ? ev(n, i) : "ease-out" : P1(n) ? il(n) : Array.isArray(n) ? n.map(s => uv(s, i) || Yy.easeOut) : Yy[n]
}
function yx(n, i, s, {delay: o=0, duration: r=300, repeat: c=0, repeatType: h="loop", ease: d="easeOut", times: p}={}, m=void 0) {
    const v = {
        [i]: s
    };
    p && (v.offset = p);
    const y = uv(d, r);
    Array.isArray(y) && (v.easing = y);
    const S = {
        delay: o,
        duration: r,
        easing: Array.isArray(y) ? "linear" : y,
        fill: "both",
        iterations: c + 1,
        direction: h === "reverse" ? "alternate" : "normal"
    };
    return m && (S.pseudoElement = m),
    n.animate(v, S)
}
function cv(n) {
    return typeof n == "function" && "applyToOptions" in n
}
function gx({type: n, ...i}) {
    return cv(n) && rv() ? n.applyToOptions(i) : (i.duration ?? (i.duration = 300),
    i.ease ?? (i.ease = "easeOut"),
    i)
}
class fv extends _h {
    constructor(i) {
        if (super(),
        this.finishedTime = null,
        this.isStopped = !1,
        this.manualStartTime = null,
        !i)
            return;
        const {element: s, name: o, keyframes: r, pseudoElement: c, allowFlatten: h=!1, finalKeyframe: d, onComplete: p} = i;
        this.isPseudoElement = !!c,
        this.allowFlatten = h,
        this.options = i,
        jr(typeof i.type != "string");
        const m = gx(i);
        this.animation = yx(s, o, r, m, c),
        m.autoplay === !1 && this.animation.pause(),
        this.animation.onfinish = () => {
            if (this.finishedTime = this.time,
            !c) {
                const v = Nr(r, this.options, d, this.speed);
                this.updateMotionValue && this.updateMotionValue(v),
                lv(s, o, v),
                this.animation.cancel()
            }
            p == null || p(),
            this.notifyFinished()
        }
    }
    play() {
        this.isStopped || (this.manualStartTime = null,
        this.animation.play(),
        this.state === "finished" && this.updateFinished())
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        var i, s;
        (s = (i = this.animation).finish) == null || s.call(i)
    }
    cancel() {
        try {
            this.animation.cancel()
        } catch {}
    }
    stop() {
        if (this.isStopped)
            return;
        this.isStopped = !0;
        const {state: i} = this;
        i === "idle" || i === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
        this.isPseudoElement || this.cancel())
    }
    commitStyles() {
        var s, o, r;
        const i = (s = this.options) == null ? void 0 : s.element;
        !this.isPseudoElement && (i != null && i.isConnected) && ((r = (o = this.animation).commitStyles) == null || r.call(o))
    }
    get duration() {
        var s, o;
        const i = ((o = (s = this.animation.effect) == null ? void 0 : s.getComputedTiming) == null ? void 0 : o.call(s).duration) || 0;
        return Ye(Number(i))
    }
    get iterationDuration() {
        const {delay: i=0} = this.options || {};
        return this.duration + Ye(i)
    }
    get time() {
        return Ye(Number(this.animation.currentTime) || 0)
    }
    set time(i) {
        const s = this.finishedTime !== null;
        this.manualStartTime = null,
        this.finishedTime = null,
        this.animation.currentTime = Oe(i),
        s && this.animation.pause()
    }
    get speed() {
        return this.animation.playbackRate
    }
    set speed(i) {
        i < 0 && (this.finishedTime = null),
        this.animation.playbackRate = i
    }
    get state() {
        return this.finishedTime !== null ? "finished" : this.animation.playState
    }
    get startTime() {
        return this.manualStartTime ?? Number(this.animation.startTime)
    }
    set startTime(i) {
        this.manualStartTime = this.animation.startTime = i
    }
    attachTimeline({timeline: i, rangeStart: s, rangeEnd: o, observe: r}) {
        var c;
        return this.allowFlatten && ((c = this.animation.effect) == null || c.updateTiming({
            easing: "linear"
        })),
        this.animation.onfinish = null,
        i && px() ? (this.animation.timeline = i,
        s && (this.animation.rangeStart = s),
        o && (this.animation.rangeEnd = o),
        ke) : r(this)
    }
}
const hv = {
    anticipate: G1,
    backInOut: q1,
    circInOut: k1
};
function vx(n) {
    return n in hv
}
function Sx(n) {
    typeof n.ease == "string" && vx(n.ease) && (n.ease = hv[n.ease])
}
const vf = 10;
class bx extends fv {
    constructor(i) {
        Sx(i),
        iv(i),
        super(i),
        i.startTime !== void 0 && i.autoplay !== !1 && (this.startTime = i.startTime),
        this.options = i
    }
    updateMotionValue(i) {
        const {motionValue: s, onUpdate: o, onComplete: r, element: c, ...h} = this.options;
        if (!s)
            return;
        if (i !== void 0) {
            s.set(i);
            return
        }
        const d = new Tr({
            ...h,
            autoplay: !1
        })
          , p = Math.max(vf, fe.now() - this.startTime)
          , m = cn(0, vf, p - vf)
          , v = d.sample(p).value
          , {name: y} = this.options;
        c && y && lv(c, y, v),
        s.setWithVelocity(d.sample(Math.max(0, p - m)).value, v, m),
        d.stop()
    }
}
const ky = (n, i) => i === "zIndex" ? !1 : !!(typeof n == "number" || Array.isArray(n) || typeof n == "string" && (We.test(n) || n === "0") && !n.startsWith("url("));
function xx(n) {
    const i = n[0];
    if (n.length === 1)
        return !0;
    for (let s = 0; s < n.length; s++)
        if (n[s] !== i)
            return !0
}
function Tx(n, i, s, o) {
    const r = n[0];
    if (r === null)
        return !1;
    if (i === "display" || i === "visibility")
        return !0;
    const c = n[n.length - 1]
      , h = ky(r, i)
      , d = ky(c, i);
    return !h || !d ? !1 : xx(n) || (s === "spring" || cv(s)) && o
}
function Ff(n) {
    n.duration = 0,
    n.type = "keyframes"
}
const dv = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"])
  , Ax = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function Ex(n) {
    for (let i = 0; i < n.length; i++)
        if (typeof n[i] == "string" && Ax.test(n[i]))
            return !0;
    return !1
}
const Cx = new Set(["color", "backgroundColor", "outlineColor", "fill", "stroke", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"])
  , Mx = j1( () => Object.hasOwnProperty.call(Element.prototype, "animate"));
function wx(n) {
    var y;
    const {motionValue: i, name: s, repeatDelay: o, repeatType: r, damping: c, type: h, keyframes: d} = n
      , p = (y = i == null ? void 0 : i.owner) == null ? void 0 : y.current;
    if (!(p instanceof HTMLElement) && !(p instanceof SVGElement))
        return !1;
    const {onUpdate: m, transformTemplate: v} = i.owner.getProps();
    return Mx() && s && (dv.has(s) || Cx.has(s) && Ex(d)) && (s !== "transform" || !v) && !m && !o && r !== "mirror" && c !== 0 && h !== "inertia"
}
const _x = 40;
class Rx extends _h {
    constructor({autoplay: i=!0, delay: s=0, type: o="keyframes", repeat: r=0, repeatDelay: c=0, repeatType: h="loop", keyframes: d, name: p, motionValue: m, element: v, ...y}) {
        var T;
        super(),
        this.stop = () => {
            var A, E;
            this._animation && (this._animation.stop(),
            (A = this.stopTimeline) == null || A.call(this)),
            (E = this.keyframeResolver) == null || E.cancel()
        }
        ,
        this.createdAt = fe.now();
        const S = {
            autoplay: i,
            delay: s,
            type: o,
            repeat: r,
            repeatDelay: c,
            repeatType: h,
            name: p,
            motionValue: m,
            element: v,
            ...y
        }
          , b = (v == null ? void 0 : v.KeyframeResolver) || Rh;
        this.keyframeResolver = new b(d, (A, E, R) => this.onKeyframesResolved(A, E, S, !R),p,m,v),
        (T = this.keyframeResolver) == null || T.scheduleResolve()
    }
    onKeyframesResolved(i, s, o, r) {
        var R, _;
        this.keyframeResolver = void 0;
        const {name: c, type: h, velocity: d, delay: p, isHandoff: m, onUpdate: v} = o;
        this.resolvedAt = fe.now();
        let y = !0;
        Tx(i, c, h, d) || (y = !1,
        (vi.instantAnimations || !p) && (v == null || v(Nr(i, o, s))),
        i[0] = i[i.length - 1],
        Ff(o),
        o.repeat = 0);
        const b = {
            startTime: r ? this.resolvedAt ? this.resolvedAt - this.createdAt > _x ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
            finalKeyframe: s,
            ...o,
            keyframes: i
        }
          , T = y && !m && wx(b)
          , A = (_ = (R = b.motionValue) == null ? void 0 : R.owner) == null ? void 0 : _.current;
        let E;
        if (T)
            try {
                E = new bx({
                    ...b,
                    element: A
                })
            } catch {
                E = new Tr(b)
            }
        else
            E = new Tr(b);
        E.finished.then( () => {
            this.notifyFinished()
        }
        ).catch(ke),
        this.pendingTimeline && (this.stopTimeline = E.attachTimeline(this.pendingTimeline),
        this.pendingTimeline = void 0),
        this._animation = E
    }
    get finished() {
        return this._animation ? this.animation.finished : this._finished
    }
    then(i, s) {
        return this.finished.finally(i).then( () => {}
        )
    }
    get animation() {
        var i;
        return this._animation || ((i = this.keyframeResolver) == null || i.resume(),
        hx()),
        this._animation
    }
    get duration() {
        return this.animation.duration
    }
    get iterationDuration() {
        return this.animation.iterationDuration
    }
    get time() {
        return this.animation.time
    }
    set time(i) {
        this.animation.time = i
    }
    get speed() {
        return this.animation.speed
    }
    get state() {
        return this.animation.state
    }
    set speed(i) {
        this.animation.speed = i
    }
    get startTime() {
        return this.animation.startTime
    }
    attachTimeline(i) {
        return this._animation ? this.stopTimeline = this.animation.attachTimeline(i) : this.pendingTimeline = i,
        () => this.stop()
    }
    play() {
        this.animation.play()
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.complete()
    }
    cancel() {
        var i;
        this._animation && this.animation.cancel(),
        (i = this.keyframeResolver) == null || i.cancel()
    }
}
function mv(n, i, s, o=0, r=1) {
    const c = Array.from(n).sort( (m, v) => m.sortNodePosition(v)).indexOf(i)
      , h = n.size
      , d = (h - 1) * o;
    return typeof s == "function" ? s(c, h) : r === 1 ? c * o : d - c * o
}
const Xy = 30
  , Dx = n => !isNaN(parseFloat(n));
class Ox {
    constructor(i, s={}) {
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = o => {
            var c;
            const r = fe.now();
            if (this.updatedAt !== r && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(o),
            this.current !== this.prev && ((c = this.events.change) == null || c.notify(this.current),
            this.dependents))
                for (const h of this.dependents)
                    h.dirty()
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(i),
        this.owner = s.owner
    }
    setCurrent(i) {
        this.current = i,
        this.updatedAt = fe.now(),
        this.canTrackVelocity === null && i !== void 0 && (this.canTrackVelocity = Dx(this.current))
    }
    setPrevFrameValue(i=this.current) {
        this.prevFrameValue = i,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(i) {
        return this.on("change", i)
    }
    on(i, s) {
        this.events[i] || (this.events[i] = new bh);
        const o = this.events[i].add(s);
        return i === "change" ? () => {
            o(),
            Lt.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : o
    }
    clearListeners() {
        for (const i in this.events)
            this.events[i].clear()
    }
    attach(i, s) {
        this.passiveEffect = i,
        this.stopPassiveEffect = s
    }
    set(i) {
        this.passiveEffect ? this.passiveEffect(i, this.updateAndNotify) : this.updateAndNotify(i)
    }
    setWithVelocity(i, s, o) {
        this.set(s),
        this.prev = void 0,
        this.prevFrameValue = i,
        this.prevUpdatedAt = this.updatedAt - o
    }
    jump(i, s=!0) {
        this.updateAndNotify(i),
        this.prev = i,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        s && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    dirty() {
        var i;
        (i = this.events.change) == null || i.notify(this.current)
    }
    addDependent(i) {
        this.dependents || (this.dependents = new Set),
        this.dependents.add(i)
    }
    removeDependent(i) {
        this.dependents && this.dependents.delete(i)
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const i = fe.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || i - this.updatedAt > Xy)
            return 0;
        const s = Math.min(this.updatedAt - this.prevUpdatedAt, Xy);
        return N1(parseFloat(this.current) - parseFloat(this.prevFrameValue), s)
    }
    start(i) {
        return this.stop(),
        new Promise(s => {
            this.hasAnimated = !0,
            this.animation = i(s),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        var i, s;
        (i = this.dependents) == null || i.clear(),
        (s = this.events.destroy) == null || s.notify(),
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function Wa(n, i) {
    return new Ox(n,i)
}
function pv(n, i) {
    if (n != null && n.inherit && i) {
        const {inherit: s, ...o} = n;
        return {
            ...i,
            ...o
        }
    }
    return n
}
function Dh(n, i) {
    const s = (n == null ? void 0 : n[i]) ?? (n == null ? void 0 : n.default) ?? n;
    return s !== n ? pv(s, n) : s
}
const zx = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , Lx = n => ({
    type: "spring",
    stiffness: 550,
    damping: n === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , jx = {
    type: "keyframes",
    duration: .8
}
  , Nx = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , Vx = (n, {keyframes: i}) => i.length > 2 ? jx : ts.has(n) ? n.startsWith("scale") ? Lx(i[1]) : zx : Nx
  , Bx = new Set(["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from", "elapsed"]);
function Ux(n) {
    for (const i in n)
        if (!Bx.has(i))
            return !0;
    return !1
}
const Oh = (n, i, s, o={}, r, c) => h => {
    const d = Dh(o, n) || {}
      , p = d.delay || o.delay || 0;
    let {elapsed: m=0} = o;
    m = m - Oe(p);
    const v = {
        keyframes: Array.isArray(s) ? s : [null, s],
        ease: "easeOut",
        velocity: i.getVelocity(),
        ...d,
        delay: -m,
        onUpdate: S => {
            i.set(S),
            d.onUpdate && d.onUpdate(S)
        }
        ,
        onComplete: () => {
            h(),
            d.onComplete && d.onComplete()
        }
        ,
        name: n,
        motionValue: i,
        element: c ? void 0 : r
    };
    Ux(d) || Object.assign(v, Vx(n, v)),
    v.duration && (v.duration = Oe(v.duration)),
    v.repeatDelay && (v.repeatDelay = Oe(v.repeatDelay)),
    v.from !== void 0 && (v.keyframes[0] = v.from);
    let y = !1;
    if ((v.type === !1 || v.duration === 0 && !v.repeatDelay) && (Ff(v),
    v.delay === 0 && (y = !0)),
    (vi.instantAnimations || vi.skipAnimations || r != null && r.shouldSkipAnimations || d.skipAnimations) && (y = !0,
    Ff(v),
    v.delay = 0),
    v.allowFlatten = !d.type && !d.ease,
    y && !c && i.get() !== void 0) {
        const S = Nr(v.keyframes, d);
        if (S !== void 0) {
            Lt.update( () => {
                v.onUpdate(S),
                v.onComplete()
            }
            );
            return
        }
    }
    return d.isSync ? new Tr(v) : new Rx(v)
}
  , Hx = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function qx(n) {
    const i = Hx.exec(n);
    if (!i)
        return [, ];
    const [,s,o,r] = i;
    return [`--${s ?? o}`, r]
}
function yv(n, i, s=1) {
    const [o,r] = qx(n);
    if (!o)
        return;
    const c = window.getComputedStyle(i).getPropertyValue(o);
    if (c) {
        const h = c.trim();
        return O1(h) ? parseFloat(h) : h
    }
    return Ah(r) ? yv(r, i, s + 1) : r
}
function Py(n) {
    const i = [{}, {}];
    return n == null || n.values.forEach( (s, o) => {
        i[0][o] = s.get(),
        i[1][o] = s.getVelocity()
    }
    ),
    i
}
function zh(n, i, s, o) {
    if (typeof i == "function") {
        const [r,c] = Py(o);
        i = i(s !== void 0 ? s : n.custom, r, c)
    }
    if (typeof i == "string" && (i = n.variants && n.variants[i]),
    typeof i == "function") {
        const [r,c] = Py(o);
        i = i(s !== void 0 ? s : n.custom, r, c)
    }
    return i
}
function Qi(n, i, s) {
    const o = n.getProps();
    return zh(o, i, s !== void 0 ? s : o.custom, n)
}
const gv = new Set(["width", "height", "top", "left", "right", "bottom", ...$a])
  , Jf = n => Array.isArray(n);
function Gx(n, i, s) {
    n.hasValue(i) ? n.getValue(i).set(s) : n.addValue(i, Wa(s))
}
function Yx(n) {
    return Jf(n) ? n[n.length - 1] || 0 : n
}
function kx(n, i) {
    const s = Qi(n, i);
    let {transitionEnd: o={}, transition: r={}, ...c} = s || {};
    c = {
        ...c,
        ...o
    };
    for (const h in c) {
        const d = Yx(c[h]);
        Gx(n, h, d)
    }
}
const re = n => !!(n && n.getVelocity);
function Xx(n) {
    return !!(re(n) && n.add)
}
function Wf(n, i) {
    const s = n.getValue("willChange");
    if (Xx(s))
        return s.add(i);
    if (!s && vi.WillChange) {
        const o = new vi.WillChange("auto");
        n.addValue("willChange", o),
        o.add(i)
    }
}
function Lh(n) {
    return n.replace(/([A-Z])/g, i => `-${i.toLowerCase()}`)
}
const Px = "framerAppearId"
  , vv = "data-" + Lh(Px);
function Sv(n) {
    return n.props[vv]
}
function Kx({protectedKeys: n, needsAnimating: i}, s) {
    const o = n.hasOwnProperty(s) && i[s] !== !0;
    return i[s] = !1,
    o
}
function bv(n, i, {delay: s=0, transitionOverride: o, type: r}={}) {
    let {transition: c, transitionEnd: h, ...d} = i;
    const p = n.getDefaultTransition();
    c = c ? pv(c, p) : p;
    const m = c == null ? void 0 : c.reduceMotion
      , v = c == null ? void 0 : c.skipAnimations;
    o && (c = o);
    const y = []
      , S = r && n.animationState && n.animationState.getState()[r]
      , b = c == null ? void 0 : c.path;
    b && b.animateVisualElement(n, d, c, s, y);
    for (const T in d) {
        const A = n.getValue(T, n.latestValues[T] ?? null)
          , E = d[T];
        if (E === void 0 || S && Kx(S, T))
            continue;
        const R = {
            delay: s,
            ...Dh(c || {}, T)
        };
        v && (R.skipAnimations = !0);
        const _ = A.get();
        if (_ !== void 0 && !A.isAnimating() && !Array.isArray(E) && E === _ && !R.velocity) {
            Lt.update( () => A.set(E));
            continue
        }
        let O = !1;
        if (window.MotionHandoffAnimation) {
            const Y = Sv(n);
            if (Y) {
                const q = window.MotionHandoffAnimation(Y, T, Lt);
                q !== null && (R.startTime = q,
                O = !0)
            }
        }
        Wf(n, T);
        const V = m ?? n.shouldReduceMotion;
        A.start(Oh(T, A, E, V && gv.has(T) ? {
            type: !1
        } : R, n, O));
        const P = A.animation;
        P && y.push(P)
    }
    if (h) {
        const T = () => Lt.update( () => {
            h && kx(n, h)
        }
        );
        y.length ? Promise.all(y).then(T) : T()
    }
    return y
}
function If(n, i, s={}) {
    var p;
    const o = Qi(n, i, s.type === "exit" ? (p = n.presenceContext) == null ? void 0 : p.custom : void 0);
    let {transition: r=n.getDefaultTransition() || {}} = o || {};
    s.transitionOverride && (r = s.transitionOverride);
    const c = o ? () => Promise.all(bv(n, o, s)) : () => Promise.resolve()
      , h = n.variantChildren && n.variantChildren.size ? (m=0) => {
        const {delayChildren: v=0, staggerChildren: y, staggerDirection: S} = r;
        return Zx(n, i, m, v, y, S, s)
    }
    : () => Promise.resolve()
      , {when: d} = r;
    if (d) {
        const [m,v] = d === "beforeChildren" ? [c, h] : [h, c];
        return m().then( () => v())
    } else
        return Promise.all([c(), h(s.delay)])
}
function Zx(n, i, s=0, o=0, r=0, c=1, h) {
    const d = [];
    for (const p of n.variantChildren)
        p.notify("AnimationStart", i),
        d.push(If(p, i, {
            ...h,
            delay: s + (typeof o == "function" ? 0 : o) + mv(n.variantChildren, p, o, r, c)
        }).then( () => p.notify("AnimationComplete", i)));
    return Promise.all(d)
}
function Qx(n, i, s={}) {
    n.notify("AnimationStart", i);
    let o;
    if (Array.isArray(i)) {
        const r = i.map(c => If(n, c, s));
        o = Promise.all(r)
    } else if (typeof i == "string")
        o = If(n, i, s);
    else {
        const r = typeof i == "function" ? Qi(n, i, s.custom) : i;
        o = Promise.all(bv(n, r, s))
    }
    return o.then( () => {
        n.notify("AnimationComplete", i)
    }
    )
}
const Fx = {
    test: n => n === "auto",
    parse: n => n
}
  , xv = n => i => i.test(n)
  , Tv = [Ia, it, un, jn, x5, b5, Fx]
  , Ky = n => Tv.find(xv(n));
function Jx(n) {
    return typeof n == "number" ? n === 0 : n !== null ? n === "none" || n === "0" || L1(n) : !0
}
const Wx = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Ix(n) {
    const [i,s] = n.slice(0, -1).split("(");
    if (i === "drop-shadow")
        return n;
    const [o] = s.match(Eh) || [];
    if (!o)
        return n;
    const r = s.replace(o, "");
    let c = Wx.has(i) ? 1 : 0;
    return o !== s && (c *= 100),
    i + "(" + c + r + ")"
}
const $x = /\b([a-z-]*)\(.*?\)/gu
  , $f = {
    ...We,
    getAnimatableNone: n => {
        const i = n.match($x);
        return i ? i.map(Ix).join(" ") : n
    }
}
  , th = {
    ...We,
    getAnimatableNone: n => {
        const i = We.parse(n);
        return We.createTransformer(n)(i.map(o => typeof o == "number" ? 0 : typeof o == "object" ? {
            ...o,
            alpha: 1
        } : o))
    }
}
  , Zy = {
    ...Ia,
    transform: Math.round
}
  , tT = {
    rotate: jn,
    pathRotation: jn,
    rotateX: jn,
    rotateY: jn,
    rotateZ: jn,
    scale: Qo,
    scaleX: Qo,
    scaleY: Qo,
    scaleZ: Qo,
    skew: jn,
    skewX: jn,
    skewY: jn,
    distance: it,
    translateX: it,
    translateY: it,
    translateZ: it,
    x: it,
    y: it,
    z: it,
    perspective: it,
    transformPerspective: it,
    opacity: pl,
    originX: Ly,
    originY: Ly,
    originZ: it
}
  , Ar = {
    borderWidth: it,
    borderTopWidth: it,
    borderRightWidth: it,
    borderBottomWidth: it,
    borderLeftWidth: it,
    borderRadius: it,
    borderTopLeftRadius: it,
    borderTopRightRadius: it,
    borderBottomRightRadius: it,
    borderBottomLeftRadius: it,
    width: it,
    maxWidth: it,
    height: it,
    maxHeight: it,
    top: it,
    right: it,
    bottom: it,
    left: it,
    inset: it,
    insetBlock: it,
    insetBlockStart: it,
    insetBlockEnd: it,
    insetInline: it,
    insetInlineStart: it,
    insetInlineEnd: it,
    padding: it,
    paddingTop: it,
    paddingRight: it,
    paddingBottom: it,
    paddingLeft: it,
    paddingBlock: it,
    paddingBlockStart: it,
    paddingBlockEnd: it,
    paddingInline: it,
    paddingInlineStart: it,
    paddingInlineEnd: it,
    margin: it,
    marginTop: it,
    marginRight: it,
    marginBottom: it,
    marginLeft: it,
    marginBlock: it,
    marginBlockStart: it,
    marginBlockEnd: it,
    marginInline: it,
    marginInlineStart: it,
    marginInlineEnd: it,
    fontSize: it,
    backgroundPositionX: it,
    backgroundPositionY: it,
    ...tT,
    zIndex: Zy,
    fillOpacity: pl,
    strokeOpacity: pl,
    numOctaves: Zy
}
  , eT = {
    ...Ar,
    color: Ft,
    backgroundColor: Ft,
    outlineColor: Ft,
    fill: Ft,
    stroke: Ft,
    borderColor: Ft,
    borderTopColor: Ft,
    borderRightColor: Ft,
    borderBottomColor: Ft,
    borderLeftColor: Ft,
    filter: $f,
    WebkitFilter: $f,
    mask: th,
    WebkitMask: th
}
  , Av = n => eT[n]
  , nT = new Set([$f, th]);
function Ev(n, i) {
    let s = Av(n);
    return nT.has(s) || (s = We),
    s.getAnimatableNone ? s.getAnimatableNone(i) : void 0
}
const iT = new Set(["auto", "none", "0"]);
function aT(n, i, s) {
    let o = 0, r;
    for (; o < n.length && !r; ) {
        const c = n[o];
        typeof c == "string" && !iT.has(c) && Ja(c).values.length && (r = n[o]),
        o++
    }
    if (r && s)
        for (const c of i)
            n[c] = Ev(s, r)
}
class sT extends Rh {
    constructor(i, s, o, r, c) {
        super(i, s, o, r, c, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: i, element: s, name: o} = this;
        if (!s || !s.current)
            return;
        super.readKeyframes();
        for (let v = 0; v < i.length; v++) {
            let y = i[v];
            if (typeof y == "string" && (y = y.trim(),
            Ah(y))) {
                const S = yv(y, s.current);
                S !== void 0 && (i[v] = S),
                v === i.length - 1 && (this.finalKeyframe = y)
            }
        }
        if (this.resolveNoneKeyframes(),
        !gv.has(o) || i.length !== 2)
            return;
        const [r,c] = i
          , h = Ky(r)
          , d = Ky(c)
          , p = zy(r)
          , m = zy(c);
        if (p !== m && di[o]) {
            this.needsMeasurement = !0;
            return
        }
        if (h !== d)
            if (Gy(h) && Gy(d))
                for (let v = 0; v < i.length; v++) {
                    const y = i[v];
                    typeof y == "string" && (i[v] = parseFloat(y))
                }
            else
                di[o] && (this.needsMeasurement = !0)
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: i, name: s} = this
          , o = [];
        for (let r = 0; r < i.length; r++)
            (i[r] === null || Jx(i[r])) && o.push(r);
        o.length && aT(i, o, s)
    }
    measureInitialState() {
        const {element: i, unresolvedKeyframes: s, name: o} = this;
        if (!i || !i.current)
            return;
        o === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = di[o](i.measureViewportBox(), window.getComputedStyle(i.current)),
        s[0] = this.measuredOrigin;
        const r = s[s.length - 1];
        r !== void 0 && i.getValue(o, r).jump(r, !1)
    }
    measureEndState() {
        var d;
        const {element: i, name: s, unresolvedKeyframes: o} = this;
        if (!i || !i.current)
            return;
        const r = i.getValue(s);
        r && r.jump(this.measuredOrigin, !1);
        const c = o.length - 1
          , h = o[c];
        o[c] = di[s](i.measureViewportBox(), window.getComputedStyle(i.current)),
        h !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = h),
        (d = this.removedTransforms) != null && d.length && this.removedTransforms.forEach( ([p,m]) => {
            i.getValue(p).set(m)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
const jh = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"];
function Cv(n, i, s) {
    if (n == null)
        return [];
    if (n instanceof EventTarget)
        return [n];
    if (typeof n == "string") {
        let o = document;
        const r = (s == null ? void 0 : s[n]) ?? o.querySelectorAll(n);
        return r ? Array.from(r) : []
    }
    return Array.from(n).filter(o => o != null)
}
const eh = (n, i) => i && typeof n == "number" ? i.transform(n) : n;
function lT(n) {
    return z1(n) && "offsetHeight" in n && !("ownerSVGElement" in n)
}
const {schedule: Nh} = K1(queueMicrotask, !1)
  , Fe = {
    x: !1,
    y: !1
};
function Mv() {
    return Fe.x || Fe.y
}
function oT(n) {
    return n === "x" || n === "y" ? Fe[n] ? null : (Fe[n] = !0,
    () => {
        Fe[n] = !1
    }
    ) : Fe.x || Fe.y ? null : (Fe.x = Fe.y = !0,
    () => {
        Fe.x = Fe.y = !1
    }
    )
}
function wv(n, i) {
    const s = Cv(n)
      , o = new AbortController
      , r = {
        passive: !0,
        ...i,
        signal: o.signal
    };
    return [s, r, () => o.abort()]
}
function rT(n) {
    return !(n.pointerType === "touch" || Mv())
}
function uT(n, i, s={}) {
    const [o,r,c] = wv(n, s);
    return o.forEach(h => {
        let d = !1, p = !1, m;
        const v = () => {
            h.removeEventListener("pointerleave", T)
        }
          , y = E => {
            m && (m(E),
            m = void 0),
            v()
        }
          , S = E => {
            d = !1,
            window.removeEventListener("pointerup", S),
            window.removeEventListener("pointercancel", S),
            p && (p = !1,
            y(E))
        }
          , b = () => {
            d = !0,
            window.addEventListener("pointerup", S, r),
            window.addEventListener("pointercancel", S, r)
        }
          , T = E => {
            if (E.pointerType !== "touch") {
                if (d) {
                    p = !0;
                    return
                }
                y(E)
            }
        }
          , A = E => {
            if (!rT(E))
                return;
            p = !1;
            const R = i(h, E);
            typeof R == "function" && (m = R,
            h.addEventListener("pointerleave", T, r))
        }
        ;
        h.addEventListener("pointerenter", A, r),
        h.addEventListener("pointerdown", b, r)
    }
    ),
    c
}
const _v = (n, i) => i ? n === i ? !0 : _v(n, i.parentElement) : !1
  , Vh = n => n.pointerType === "mouse" ? typeof n.button != "number" || n.button <= 0 : n.isPrimary !== !1
  , cT = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function fT(n) {
    return cT.has(n.tagName) || n.isContentEditable === !0
}
const hT = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function dT(n) {
    return hT.has(n.tagName) || n.isContentEditable === !0
}
const ir = new WeakSet;
function Qy(n) {
    return i => {
        i.key === "Enter" && n(i)
    }
}
function Sf(n, i) {
    n.dispatchEvent(new PointerEvent("pointer" + i,{
        isPrimary: !0,
        bubbles: !0
    }))
}
const mT = (n, i) => {
    const s = n.currentTarget;
    if (!s)
        return;
    const o = Qy( () => {
        if (ir.has(s))
            return;
        Sf(s, "down");
        const r = Qy( () => {
            Sf(s, "up")
        }
        )
          , c = () => Sf(s, "cancel");
        s.addEventListener("keyup", r, i),
        s.addEventListener("blur", c, i)
    }
    );
    s.addEventListener("keydown", o, i),
    s.addEventListener("blur", () => s.removeEventListener("keydown", o), i)
}
;
function Fy(n) {
    return Vh(n) && !Mv()
}
const Jy = new WeakSet;
function pT(n, i, s={}) {
    const [o,r,c] = wv(n, s)
      , h = d => {
        const p = d.currentTarget;
        if (!Fy(d) || Jy.has(d))
            return;
        ir.add(p),
        s.stopPropagation && Jy.add(d);
        const m = i(p, d)
          , v = {
            ...r,
            capture: !0
        }
          , y = (T, A) => {
            window.removeEventListener("pointerup", S, v),
            window.removeEventListener("pointercancel", b, v),
            ir.has(p) && ir.delete(p),
            Fy(T) && typeof m == "function" && m(T, {
                success: A
            })
        }
          , S = T => {
            y(T, p === window || p === document || s.useGlobalTarget || _v(p, T.target))
        }
          , b = T => {
            y(T, !1)
        }
        ;
        window.addEventListener("pointerup", S, v),
        window.addEventListener("pointercancel", b, v)
    }
    ;
    return o.forEach(d => {
        (s.useGlobalTarget ? window : d).addEventListener("pointerdown", h, r),
        lT(d) && (d.addEventListener("focus", m => mT(m, r)),
        !fT(d) && !d.hasAttribute("tabindex") && (d.tabIndex = 0))
    }
    ),
    c
}
function Bh(n) {
    return z1(n) && "ownerSVGElement" in n
}
const ar = new WeakMap;
let fi;
const Rv = (n, i, s) => (o, r) => r && r[0] ? r[0][n + "Size"] : Bh(o) && "getBBox" in o ? o.getBBox()[i] : o[s]
  , yT = Rv("inline", "width", "offsetWidth")
  , gT = Rv("block", "height", "offsetHeight");
function vT({target: n, borderBoxSize: i}) {
    var s;
    (s = ar.get(n)) == null || s.forEach(o => {
        o(n, {
            get width() {
                return yT(n, i)
            },
            get height() {
                return gT(n, i)
            }
        })
    }
    )
}
function ST(n) {
    n.forEach(vT)
}
function bT() {
    typeof ResizeObserver > "u" || (fi = new ResizeObserver(ST))
}
function xT(n, i) {
    fi || bT();
    const s = Cv(n);
    return s.forEach(o => {
        let r = ar.get(o);
        r || (r = new Set,
        ar.set(o, r)),
        r.add(i),
        fi == null || fi.observe(o)
    }
    ),
    () => {
        s.forEach(o => {
            const r = ar.get(o);
            r == null || r.delete(i),
            r != null && r.size || fi == null || fi.unobserve(o)
        }
        )
    }
}
const sr = new Set;
let Ya;
function TT() {
    Ya = () => {
        const n = {
            get width() {
                return window.innerWidth
            },
            get height() {
                return window.innerHeight
            }
        };
        sr.forEach(i => i(n))
    }
    ,
    window.addEventListener("resize", Ya)
}
function AT(n) {
    return sr.add(n),
    Ya || TT(),
    () => {
        sr.delete(n),
        !sr.size && typeof Ya == "function" && (window.removeEventListener("resize", Ya),
        Ya = void 0)
    }
}
function Wy(n, i) {
    return typeof n == "function" ? AT(n) : xT(n, i)
}
function ET(n) {
    return Bh(n) && n.tagName === "svg"
}
const CT = [...Tv, Ft, We]
  , MT = n => CT.find(xv(n))
  , Iy = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , ka = () => ({
    x: Iy(),
    y: Iy()
})
  , $y = () => ({
    min: 0,
    max: 0
})
  , It = () => ({
    x: $y(),
    y: $y()
})
  , wT = new WeakMap;
function Vr(n) {
    return n !== null && typeof n == "object" && typeof n.start == "function"
}
function yl(n) {
    return typeof n == "string" || Array.isArray(n)
}
const Uh = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , Hh = ["initial", ...Uh];
function Br(n) {
    return Vr(n.animate) || Hh.some(i => yl(n[i]))
}
function Dv(n) {
    return !!(Br(n) || n.variants)
}
function _T(n, i, s) {
    for (const o in i) {
        const r = i[o]
          , c = s[o];
        if (re(r))
            n.addValue(o, r);
        else if (re(c))
            n.addValue(o, Wa(r, {
                owner: n
            }));
        else if (c !== r)
            if (n.hasValue(o)) {
                const h = n.getValue(o);
                h.liveStyle === !0 ? h.jump(r) : h.hasAnimated || h.set(r)
            } else {
                const h = n.getStaticValue(o);
                n.addValue(o, Wa(h !== void 0 ? h : r, {
                    owner: n
                }))
            }
    }
    for (const o in s)
        i[o] === void 0 && n.removeValue(o);
    return i
}
const nh = {
    current: null
}
  , Ov = {
    current: !1
}
  , RT = typeof window < "u";
function DT() {
    if (Ov.current = !0,
    !!RT)
        if (window.matchMedia) {
            const n = window.matchMedia("(prefers-reduced-motion)")
              , i = () => nh.current = n.matches;
            n.addEventListener("change", i),
            i()
        } else
            nh.current = !1
}
const tg = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
let Er = {};
function zv(n) {
    Er = n
}
function OT() {
    return Er
}
class zT {
    scrapeMotionValuesFromProps(i, s, o) {
        return {}
    }
    constructor({parent: i, props: s, presenceContext: o, reducedMotionConfig: r, skipAnimations: c, blockInitialAnimation: h, visualState: d}, p={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.shouldSkipAnimations = !1,
        this.values = new Map,
        this.KeyframeResolver = Rh,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.hasBeenMounted = !1,
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.renderScheduledAt = 0,
        this.scheduleRender = () => {
            const b = fe.now();
            this.renderScheduledAt < b && (this.renderScheduledAt = b,
            Lt.render(this.render, !1, !0))
        }
        ;
        const {latestValues: m, renderState: v} = d;
        this.latestValues = m,
        this.baseTarget = {
            ...m
        },
        this.initialValues = s.initial ? {
            ...m
        } : {},
        this.renderState = v,
        this.parent = i,
        this.props = s,
        this.presenceContext = o,
        this.depth = i ? i.depth + 1 : 0,
        this.reducedMotionConfig = r,
        this.skipAnimationsConfig = c,
        this.options = p,
        this.blockInitialAnimation = !!h,
        this.isControllingVariants = Br(s),
        this.isVariantNode = Dv(s),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(i && i.current);
        const {willChange: y, ...S} = this.scrapeMotionValuesFromProps(s, {}, this);
        for (const b in S) {
            const T = S[b];
            m[b] !== void 0 && re(T) && T.set(m[b])
        }
    }
    mount(i) {
        var s, o;
        if (this.hasBeenMounted)
            for (const r in this.initialValues)
                (s = this.values.get(r)) == null || s.jump(this.initialValues[r]),
                this.latestValues[r] = this.initialValues[r];
        this.current = i,
        wT.set(i, this),
        this.projection && !this.projection.instance && this.projection.mount(i),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (r, c) => this.bindToMotionValue(c, r)),
        this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (Ov.current || DT(),
        this.shouldReduceMotion = nh.current),
        this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1,
        (o = this.parent) == null || o.addChild(this),
        this.update(this.props, this.presenceContext),
        this.hasBeenMounted = !0
    }
    unmount() {
        var i;
        this.projection && this.projection.unmount(),
        Si(this.notifyUpdate),
        Si(this.render),
        this.valueSubscriptions.forEach(s => s()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        (i = this.parent) == null || i.removeChild(this);
        for (const s in this.events)
            this.events[s].clear();
        for (const s in this.features) {
            const o = this.features[s];
            o && (o.unmount(),
            o.isMounted = !1)
        }
        this.current = null
    }
    addChild(i) {
        this.children.add(i),
        this.enteringChildren ?? (this.enteringChildren = new Set),
        this.enteringChildren.add(i)
    }
    removeChild(i) {
        this.children.delete(i),
        this.enteringChildren && this.enteringChildren.delete(i)
    }
    bindToMotionValue(i, s) {
        if (this.valueSubscriptions.has(i) && this.valueSubscriptions.get(i)(),
        s.accelerate && dv.has(i) && this.current instanceof HTMLElement) {
            const {factory: h, keyframes: d, times: p, ease: m, duration: v} = s.accelerate
              , y = new fv({
                element: this.current,
                name: i,
                keyframes: d,
                times: p,
                ease: m,
                duration: Oe(v)
            })
              , S = h(y);
            this.valueSubscriptions.set(i, () => {
                S(),
                y.cancel()
            }
            );
            return
        }
        const o = ts.has(i);
        o && this.onBindTransform && this.onBindTransform();
        const r = s.on("change", h => {
            this.latestValues[i] = h,
            this.props.onUpdate && Lt.preRender(this.notifyUpdate),
            o && this.projection && (this.projection.isTransformDirty = !0),
            this.scheduleRender()
        }
        );
        let c;
        typeof window < "u" && window.MotionCheckAppearSync && (c = window.MotionCheckAppearSync(this, i, s)),
        this.valueSubscriptions.set(i, () => {
            r(),
            c && c()
        }
        )
    }
    sortNodePosition(i) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== i.type ? 0 : this.sortInstanceNodePosition(this.current, i.current)
    }
    updateFeatures() {
        let i = "animation";
        for (i in Er) {
            const s = Er[i];
            if (!s)
                continue;
            const {isEnabled: o, Feature: r} = s;
            if (!this.features[i] && r && o(this.props) && (this.features[i] = new r(this)),
            this.features[i]) {
                const c = this.features[i];
                c.isMounted ? c.update() : (c.mount(),
                c.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : It()
    }
    getStaticValue(i) {
        return this.latestValues[i]
    }
    setStaticValue(i, s) {
        this.latestValues[i] = s
    }
    update(i, s) {
        (i.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = i,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = s;
        for (let o = 0; o < tg.length; o++) {
            const r = tg[o];
            this.propEventSubscriptions[r] && (this.propEventSubscriptions[r](),
            delete this.propEventSubscriptions[r]);
            const c = "on" + r
              , h = i[c];
            h && (this.propEventSubscriptions[r] = this.on(r, h))
        }
        this.prevMotionValues = _T(this, this.scrapeMotionValuesFromProps(i, this.prevProps || {}, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(i) {
        return this.props.variants ? this.props.variants[i] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(i) {
        const s = this.getClosestVariantNode();
        if (s)
            return s.variantChildren && s.variantChildren.add(i),
            () => s.variantChildren.delete(i)
    }
    addValue(i, s) {
        const o = this.values.get(i);
        s !== o && (o && this.removeValue(i),
        this.bindToMotionValue(i, s),
        this.values.set(i, s),
        this.latestValues[i] = s.get())
    }
    removeValue(i) {
        this.values.delete(i);
        const s = this.valueSubscriptions.get(i);
        s && (s(),
        this.valueSubscriptions.delete(i)),
        delete this.latestValues[i],
        this.removeValueFromRenderState(i, this.renderState)
    }
    hasValue(i) {
        return this.values.has(i)
    }
    getValue(i, s) {
        if (this.props.values && this.props.values[i])
            return this.props.values[i];
        let o = this.values.get(i);
        return o === void 0 && s !== void 0 && (o = Wa(s === null ? void 0 : s, {
            owner: this
        }),
        this.addValue(i, o)),
        o
    }
    readValue(i, s) {
        let o = this.latestValues[i] !== void 0 || !this.current ? this.latestValues[i] : this.getBaseTargetFromProps(this.props, i) ?? this.readValueFromInstance(this.current, i, this.options);
        return o != null && (typeof o == "string" && (O1(o) || L1(o)) ? o = parseFloat(o) : !MT(o) && We.test(s) && (o = Ev(i, s)),
        this.setBaseTarget(i, re(o) ? o.get() : o)),
        re(o) ? o.get() : o
    }
    setBaseTarget(i, s) {
        this.baseTarget[i] = s
    }
    getBaseTarget(i) {
        var c;
        const {initial: s} = this.props;
        let o;
        if (typeof s == "string" || typeof s == "object") {
            const h = zh(this.props, s, (c = this.presenceContext) == null ? void 0 : c.custom);
            h && (o = h[i])
        }
        if (s && o !== void 0)
            return o;
        const r = this.getBaseTargetFromProps(this.props, i);
        return r !== void 0 && !re(r) ? r : this.initialValues[i] !== void 0 && o === void 0 ? void 0 : this.baseTarget[i]
    }
    on(i, s) {
        return this.events[i] || (this.events[i] = new bh),
        this.events[i].add(s)
    }
    notify(i, ...s) {
        this.events[i] && this.events[i].notify(...s)
    }
    scheduleRenderMicrotask() {
        Nh.render(this.render)
    }
}
class Lv extends zT {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = sT
    }
    sortInstanceNodePosition(i, s) {
        return i.compareDocumentPosition(s) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(i, s) {
        const o = i.style;
        return o ? o[s] : void 0
    }
    removeValueFromRenderState(i, {vars: s, style: o}) {
        delete s[i],
        delete o[i]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: i} = this.props;
        re(i) && (this.childSubscription = i.on("change", s => {
            this.current && (this.current.textContent = `${s}`)
        }
        ))
    }
}
class bi {
    constructor(i) {
        this.isMounted = !1,
        this.node = i
    }
    update() {}
}
function jv({top: n, left: i, right: s, bottom: o}) {
    return {
        x: {
            min: i,
            max: s
        },
        y: {
            min: n,
            max: o
        }
    }
}
function LT({x: n, y: i}) {
    return {
        top: i.min,
        right: n.max,
        bottom: i.max,
        left: n.min
    }
}
function jT(n, i) {
    if (!i)
        return n;
    const s = i({
        x: n.left,
        y: n.top
    })
      , o = i({
        x: n.right,
        y: n.bottom
    });
    return {
        top: s.y,
        left: s.x,
        bottom: o.y,
        right: o.x
    }
}
function bf(n) {
    return n === void 0 || n === 1
}
function ih({scale: n, scaleX: i, scaleY: s}) {
    return !bf(n) || !bf(i) || !bf(s)
}
function Yi(n) {
    return ih(n) || Nv(n) || n.z || n.rotate || n.rotateX || n.rotateY || n.skewX || n.skewY
}
function Nv(n) {
    return eg(n.x) || eg(n.y)
}
function eg(n) {
    return n && n !== "0%"
}
function Cr(n, i, s) {
    const o = n - s
      , r = i * o;
    return s + r
}
function ng(n, i, s, o, r) {
    return r !== void 0 && (n = Cr(n, r, o)),
    Cr(n, s, o) + i
}
function ah(n, i=0, s=1, o, r) {
    n.min = ng(n.min, i, s, o, r),
    n.max = ng(n.max, i, s, o, r)
}
function Vv(n, {x: i, y: s}) {
    ah(n.x, i.translate, i.scale, i.originPoint),
    ah(n.y, s.translate, s.scale, s.originPoint)
}
const ig = .999999999999
  , ag = 1.0000000000001;
function NT(n, i, s, o=!1) {
    var d;
    const r = s.length;
    if (!r)
        return;
    i.x = i.y = 1;
    let c, h;
    for (let p = 0; p < r; p++) {
        c = s[p],
        h = c.projectionDelta;
        const {visualElement: m} = c.options;
        m && m.props.style && m.props.style.display === "contents" || (o && c.options.layoutScroll && c.scroll && c !== c.root && (on(n.x, -c.scroll.offset.x),
        on(n.y, -c.scroll.offset.y)),
        h && (i.x *= h.x.scale,
        i.y *= h.y.scale,
        Vv(n, h)),
        o && Yi(c.latestValues) && lr(n, c.latestValues, (d = c.layout) == null ? void 0 : d.layoutBox))
    }
    i.x < ag && i.x > ig && (i.x = 1),
    i.y < ag && i.y > ig && (i.y = 1)
}
function on(n, i) {
    n.min += i,
    n.max += i
}
function sg(n, i, s, o, r=.5) {
    const c = zt(n.min, n.max, r);
    ah(n, i, s, c, o)
}
function lg(n, i) {
    return typeof n == "string" ? parseFloat(n) / 100 * (i.max - i.min) : n
}
function lr(n, i, s) {
    const o = s ?? n;
    sg(n.x, lg(i.x, o.x), i.scaleX, i.scale, i.originX),
    sg(n.y, lg(i.y, o.y), i.scaleY, i.scale, i.originY)
}
function Bv(n, i) {
    return jv(jT(n.getBoundingClientRect(), i))
}
function VT(n, i, s) {
    const o = Bv(n, s)
      , {scroll: r} = i;
    return r && (on(o.x, r.offset.x),
    on(o.y, r.offset.y)),
    o
}
const BT = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , UT = $a.length;
function HT(n, i, s) {
    let o = ""
      , r = !0;
    for (let h = 0; h < UT; h++) {
        const d = $a[h]
          , p = n[d];
        if (p === void 0)
            continue;
        let m = !0;
        if (typeof p == "number")
            m = p === (d.startsWith("scale") ? 1 : 0);
        else {
            const v = parseFloat(p);
            m = d.startsWith("scale") ? v === 1 : v === 0
        }
        if (!m || s) {
            const v = eh(p, Ar[d]);
            if (!m) {
                r = !1;
                const y = BT[d] || d;
                o += `${y}(${v}) `
            }
            s && (i[d] = v)
        }
    }
    const c = n.pathRotation;
    return c && (r = !1,
    o += `rotate(${eh(c, Ar.pathRotation)}) `),
    o = o.trim(),
    s ? o = s(i, r ? "" : o) : r && (o = "none"),
    o
}
function qh(n, i, s) {
    const {style: o, vars: r, transformOrigin: c} = n;
    let h = !1
      , d = !1;
    for (const p in i) {
        const m = i[p];
        if (ts.has(p)) {
            h = !0;
            continue
        } else if (Q1(p)) {
            r[p] = m;
            continue
        } else {
            const v = eh(m, Ar[p]);
            p.startsWith("origin") ? (d = !0,
            c[p] = v) : o[p] = v
        }
    }
    if (i.transform || (h || s ? o.transform = HT(i, n.transform, s) : o.transform && (o.transform = "none")),
    d) {
        const {originX: p="50%", originY: m="50%", originZ: v=0} = c;
        o.transformOrigin = `${p} ${m} ${v}`
    }
}
function Uv(n, {style: i, vars: s}, o, r) {
    const c = n.style;
    let h;
    for (h in i)
        c[h] = i[h];
    r == null || r.applyProjectionStyles(c, o);
    for (h in s)
        c.setProperty(h, s[h])
}
function og(n, i) {
    return i.max === i.min ? 0 : n / (i.max - i.min) * 100
}
const nl = {
    correct: (n, i) => {
        if (!i.target)
            return n;
        if (typeof n == "string")
            if (it.test(n))
                n = parseFloat(n);
            else
                return n;
        const s = og(n, i.target.x)
          , o = og(n, i.target.y);
        return `${s}% ${o}%`
    }
}
  , qT = {
    correct: (n, {treeScale: i, projectionDelta: s}) => {
        const o = n
          , r = We.parse(n);
        if (r.length > 5)
            return o;
        const c = We.createTransformer(n)
          , h = typeof r[0] != "number" ? 1 : 0
          , d = s.x.scale * i.x
          , p = s.y.scale * i.y;
        r[0 + h] /= d,
        r[1 + h] /= p;
        const m = zt(d, p, .5);
        return typeof r[2 + h] == "number" && (r[2 + h] /= m),
        typeof r[3 + h] == "number" && (r[3 + h] /= m),
        c(r)
    }
}
  , sh = {
    borderRadius: {
        ...nl,
        applyTo: [...jh]
    },
    borderTopLeftRadius: nl,
    borderTopRightRadius: nl,
    borderBottomLeftRadius: nl,
    borderBottomRightRadius: nl,
    boxShadow: qT
};
function Hv(n, {layout: i, layoutId: s}) {
    return ts.has(n) || n.startsWith("origin") || (i || s !== void 0) && (!!sh[n] || n === "opacity")
}
function Gh(n, i, s) {
    var h;
    const o = n.style
      , r = i == null ? void 0 : i.style
      , c = {};
    if (!o)
        return c;
    for (const d in o)
        (re(o[d]) || r && re(r[d]) || Hv(d, n) || ((h = s == null ? void 0 : s.getValue(d)) == null ? void 0 : h.liveStyle) !== void 0) && (c[d] = o[d]);
    return c
}
function GT(n) {
    return window.getComputedStyle(n)
}
class YT extends Lv {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = Uv
    }
    mount(i) {
        jr(!!i.style),
        super.mount(i)
    }
    readValueFromInstance(i, s) {
        var o;
        if (ts.has(s))
            return (o = this.projection) != null && o.isProjecting ? Xf(s) : ox(i, s);
        {
            const r = GT(i)
              , c = (Q1(s) ? r.getPropertyValue(s) : r[s]) || 0;
            return typeof c == "string" ? c.trim() : c
        }
    }
    measureInstanceViewportBox(i, {transformPagePoint: s}) {
        return Bv(i, s)
    }
    build(i, s, o) {
        qh(i, s, o.transformTemplate)
    }
    scrapeMotionValuesFromProps(i, s, o) {
        return Gh(i, s, o)
    }
}
const kT = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , XT = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function PT(n, i, s=1, o=0, r=!0) {
    n.pathLength = 1;
    const c = r ? kT : XT;
    n[c.offset] = `${-o}`,
    n[c.array] = `${i} ${s}`
}
const KT = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function qv(n, {attrX: i, attrY: s, attrScale: o, pathLength: r, pathSpacing: c=1, pathOffset: h=0, ...d}, p, m, v) {
    if (qh(n, d, m),
    p) {
        n.style.viewBox && (n.attrs.viewBox = n.style.viewBox);
        return
    }
    n.attrs = n.style,
    n.style = {};
    const {attrs: y, style: S} = n;
    y.transform && (S.transform = y.transform,
    delete y.transform),
    (S.transform || y.transformOrigin) && (S.transformOrigin = y.transformOrigin ?? "50% 50%",
    delete y.transformOrigin),
    S.transform && (S.transformBox = (v == null ? void 0 : v.transformBox) ?? "fill-box",
    delete y.transformBox);
    for (const b of KT)
        y[b] !== void 0 && (S[b] = y[b],
        delete y[b]);
    i !== void 0 && (y.x = i),
    s !== void 0 && (y.y = s),
    o !== void 0 && (y.scale = o),
    r !== void 0 && PT(y, r, c, h, !1)
}
const Gv = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"])
  , Yv = n => typeof n == "string" && n.toLowerCase() === "svg";
function ZT(n, i, s, o) {
    Uv(n, i, void 0, o);
    for (const r in i.attrs)
        n.setAttribute(Gv.has(r) ? r : Lh(r), i.attrs[r])
}
function kv(n, i, s) {
    const o = Gh(n, i, s);
    for (const r in n)
        if (re(n[r]) || re(i[r])) {
            const c = $a.indexOf(r) !== -1 ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r;
            o[c] = n[r]
        }
    return o
}
class QT extends Lv {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = It
    }
    getBaseTargetFromProps(i, s) {
        return i[s]
    }
    readValueFromInstance(i, s) {
        if (ts.has(s)) {
            const o = Av(s);
            return o && o.default || 0
        }
        return s = Gv.has(s) ? s : Lh(s),
        i.getAttribute(s)
    }
    scrapeMotionValuesFromProps(i, s, o) {
        return kv(i, s, o)
    }
    build(i, s, o) {
        qv(i, s, this.isSVGTag, o.transformTemplate, o.style)
    }
    renderInstance(i, s, o, r) {
        ZT(i, s, o, r)
    }
    mount(i) {
        this.isSVGTag = Yv(i.tagName),
        super.mount(i)
    }
}
const FT = Hh.length;
function Xv(n) {
    if (!n)
        return;
    if (!n.isControllingVariants) {
        const s = n.parent ? Xv(n.parent) || {} : {};
        return n.props.initial !== void 0 && (s.initial = n.props.initial),
        s
    }
    const i = {};
    for (let s = 0; s < FT; s++) {
        const o = Hh[s]
          , r = n.props[o];
        (yl(r) || r === !1) && (i[o] = r)
    }
    return i
}
function Pv(n, i) {
    if (!Array.isArray(i))
        return !1;
    const s = i.length;
    if (s !== n.length)
        return !1;
    for (let o = 0; o < s; o++)
        if (i[o] !== n[o])
            return !1;
    return !0
}
const JT = [...Uh].reverse()
  , WT = Uh.length;
function IT(n) {
    return i => Promise.all(i.map( ({animation: s, options: o}) => Qx(n, s, o)))
}
function $T(n) {
    let i = IT(n)
      , s = rg()
      , o = !0
      , r = !1;
    const c = m => (v, y) => {
        var b;
        const S = Qi(n, y, m === "exit" ? (b = n.presenceContext) == null ? void 0 : b.custom : void 0);
        if (S) {
            const {transition: T, transitionEnd: A, ...E} = S;
            v = {
                ...v,
                ...E,
                ...A
            }
        }
        return v
    }
    ;
    function h(m) {
        i = m(n)
    }
    function d(m) {
        const {props: v} = n
          , y = Xv(n.parent) || {}
          , S = []
          , b = new Set;
        let T = {}
          , A = 1 / 0;
        for (let R = 0; R < WT; R++) {
            const _ = JT[R]
              , O = s[_]
              , V = v[_] !== void 0 ? v[_] : y[_]
              , P = yl(V)
              , Y = _ === m ? O.isActive : null;
            Y === !1 && (A = R);
            let q = V === y[_] && V !== v[_] && P;
            if (q && (o || r) && n.manuallyAnimateOnMount && (q = !1),
            O.protectedKeys = {
                ...T
            },
            !O.isActive && Y === null || !V && !O.prevProp || Vr(V) || typeof V == "boolean")
                continue;
            if (_ === "exit" && O.isActive && Y !== !0) {
                O.prevResolvedValues && (T = {
                    ...T,
                    ...O.prevResolvedValues
                });
                continue
            }
            const Q = t6(O.prevProp, V);
            let Z = Q || _ === m && O.isActive && !q && P || R > A && P
              , K = !1;
            const W = Array.isArray(V) ? V : [V];
            let tt = W.reduce(c(_), {});
            Y === !1 && (tt = {});
            const {prevResolvedValues: pt={}} = O
              , rt = {
                ...pt,
                ...tt
            }
              , ot = $ => {
                Z = !0,
                b.has($) && (K = !0,
                b.delete($)),
                O.needsAnimating[$] = !0;
                const ht = n.getValue($);
                ht && (ht.liveStyle = !1)
            }
            ;
            for (const $ in rt) {
                const ht = tt[$]
                  , vt = pt[$];
                if (T.hasOwnProperty($))
                    continue;
                let M = !1;
                Jf(ht) && Jf(vt) ? M = !Pv(ht, vt) || Q : M = ht !== vt,
                M ? ht != null ? ot($) : b.add($) : ht !== void 0 && b.has($) ? ot($) : O.protectedKeys[$] = !0
            }
            O.prevProp = V,
            O.prevResolvedValues = tt,
            O.isActive && (T = {
                ...T,
                ...tt
            }),
            (o || r) && n.blockInitialAnimation && (Z = !1);
            const B = q && Q;
            Z && (!B || K) && S.push(...W.map($ => {
                const ht = {
                    type: _
                };
                if (typeof $ == "string" && (o || r) && !B && n.manuallyAnimateOnMount && n.parent) {
                    const {parent: vt} = n
                      , M = Qi(vt, $);
                    if (vt.enteringChildren && M) {
                        const {delayChildren: k} = M.transition || {};
                        ht.delay = mv(vt.enteringChildren, n, k)
                    }
                }
                return {
                    animation: $,
                    options: ht
                }
            }
            ))
        }
        if (b.size) {
            const R = {};
            if (typeof v.initial != "boolean") {
                const _ = Qi(n, Array.isArray(v.initial) ? v.initial[0] : v.initial);
                _ && _.transition && (R.transition = _.transition)
            }
            b.forEach(_ => {
                const O = n.getBaseTarget(_)
                  , V = n.getValue(_);
                V && (V.liveStyle = !0),
                R[_] = O ?? null
            }
            ),
            S.push({
                animation: R
            })
        }
        let E = !!S.length;
        return o && (v.initial === !1 || v.initial === v.animate) && !n.manuallyAnimateOnMount && (E = !1),
        o = !1,
        r = !1,
        E ? i(S) : Promise.resolve()
    }
    function p(m, v) {
        var S;
        if (s[m].isActive === v)
            return Promise.resolve();
        (S = n.variantChildren) == null || S.forEach(b => {
            var T;
            return (T = b.animationState) == null ? void 0 : T.setActive(m, v)
        }
        ),
        s[m].isActive = v;
        const y = d(m);
        for (const b in s)
            s[b].protectedKeys = {};
        return y
    }
    return {
        animateChanges: d,
        setActive: p,
        setAnimateFunction: h,
        getState: () => s,
        reset: () => {
            s = rg(),
            r = !0
        }
    }
}
function t6(n, i) {
    return typeof i == "string" ? i !== n : Array.isArray(i) ? !Pv(i, n) : !1
}
function Gi(n=!1) {
    return {
        isActive: n,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function rg() {
    return {
        animate: Gi(!0),
        whileInView: Gi(),
        whileHover: Gi(),
        whileTap: Gi(),
        whileDrag: Gi(),
        whileFocus: Gi(),
        exit: Gi()
    }
}
function lh(n, i) {
    n.min = i.min,
    n.max = i.max
}
function Qe(n, i) {
    lh(n.x, i.x),
    lh(n.y, i.y)
}
function ug(n, i) {
    n.translate = i.translate,
    n.scale = i.scale,
    n.originPoint = i.originPoint,
    n.origin = i.origin
}
const Kv = 1e-4
  , e6 = 1 - Kv
  , n6 = 1 + Kv
  , Zv = .01
  , i6 = 0 - Zv
  , a6 = 0 + Zv;
function he(n) {
    return n.max - n.min
}
function s6(n, i, s) {
    return Math.abs(n - i) <= s
}
function cg(n, i, s, o=.5) {
    n.origin = o,
    n.originPoint = zt(i.min, i.max, n.origin),
    n.scale = he(s) / he(i),
    n.translate = zt(s.min, s.max, n.origin) - n.originPoint,
    (n.scale >= e6 && n.scale <= n6 || isNaN(n.scale)) && (n.scale = 1),
    (n.translate >= i6 && n.translate <= a6 || isNaN(n.translate)) && (n.translate = 0)
}
function rl(n, i, s, o) {
    cg(n.x, i.x, s.x, o ? o.originX : void 0),
    cg(n.y, i.y, s.y, o ? o.originY : void 0)
}
function fg(n, i, s, o=0) {
    const r = o ? zt(s.min, s.max, o) : s.min;
    n.min = r + i.min,
    n.max = n.min + he(i)
}
function l6(n, i, s, o) {
    fg(n.x, i.x, s.x, o == null ? void 0 : o.x),
    fg(n.y, i.y, s.y, o == null ? void 0 : o.y)
}
function hg(n, i, s, o=0) {
    const r = o ? zt(s.min, s.max, o) : s.min;
    n.min = i.min - r,
    n.max = n.min + he(i)
}
function Mr(n, i, s, o) {
    hg(n.x, i.x, s.x, o == null ? void 0 : o.x),
    hg(n.y, i.y, s.y, o == null ? void 0 : o.y)
}
function dg(n, i, s, o, r) {
    return n -= i,
    n = Cr(n, 1 / s, o),
    r !== void 0 && (n = Cr(n, 1 / r, o)),
    n
}
function o6(n, i=0, s=1, o=.5, r, c=n, h=n) {
    if (un.test(i) && (i = parseFloat(i),
    i = zt(h.min, h.max, i / 100) - h.min),
    typeof i != "number")
        return;
    let d = zt(c.min, c.max, o);
    n === c && (d -= i),
    n.min = dg(n.min, i, s, d, r),
    n.max = dg(n.max, i, s, d, r)
}
function mg(n, i, [s,o,r], c, h) {
    o6(n, i[s], i[o], i[r], i.scale, c, h)
}
const r6 = ["x", "scaleX", "originX"]
  , u6 = ["y", "scaleY", "originY"];
function pg(n, i, s, o) {
    mg(n.x, i, r6, s ? s.x : void 0, o ? o.x : void 0),
    mg(n.y, i, u6, s ? s.y : void 0, o ? o.y : void 0)
}
function yg(n) {
    return n.translate === 0 && n.scale === 1
}
function Qv(n) {
    return yg(n.x) && yg(n.y)
}
function gg(n, i) {
    return n.min === i.min && n.max === i.max
}
function c6(n, i) {
    return gg(n.x, i.x) && gg(n.y, i.y)
}
function vg(n, i) {
    return Math.round(n.min) === Math.round(i.min) && Math.round(n.max) === Math.round(i.max)
}
function Fv(n, i) {
    return vg(n.x, i.x) && vg(n.y, i.y)
}
function Sg(n) {
    return he(n.x) / he(n.y)
}
function bg(n, i) {
    return n.translate === i.translate && n.scale === i.scale && n.originPoint === i.originPoint
}
function sn(n) {
    return [n("x"), n("y")]
}
function f6(n, i, s) {
    let o = "";
    const r = n.x.translate / i.x
      , c = n.y.translate / i.y
      , h = (s == null ? void 0 : s.z) || 0;
    if ((r || c || h) && (o = `translate3d(${r}px, ${c}px, ${h}px) `),
    (i.x !== 1 || i.y !== 1) && (o += `scale(${1 / i.x}, ${1 / i.y}) `),
    s) {
        const {transformPerspective: m, rotate: v, pathRotation: y, rotateX: S, rotateY: b, skewX: T, skewY: A} = s;
        m && (o = `perspective(${m}px) ${o}`),
        v && (o += `rotate(${v}deg) `),
        y && (o += `rotate(${y}deg) `),
        S && (o += `rotateX(${S}deg) `),
        b && (o += `rotateY(${b}deg) `),
        T && (o += `skewX(${T}deg) `),
        A && (o += `skewY(${A}deg) `)
    }
    const d = n.x.scale * i.x
      , p = n.y.scale * i.y;
    return (d !== 1 || p !== 1) && (o += `scale(${d}, ${p})`),
    o || "none"
}
const h6 = jh.length
  , xg = n => typeof n == "string" ? parseFloat(n) : n
  , Tg = n => typeof n == "number" || it.test(n);
function d6(n, i, s, o, r, c) {
    r ? (n.opacity = zt(0, s.opacity ?? 1, m6(o)),
    n.opacityExit = zt(i.opacity ?? 1, 0, p6(o))) : c && (n.opacity = zt(i.opacity ?? 1, s.opacity ?? 1, o));
    for (let h = 0; h < h6; h++) {
        const d = jh[h];
        let p = Ag(i, d)
          , m = Ag(s, d);
        if (p === void 0 && m === void 0)
            continue;
        p || (p = 0),
        m || (m = 0),
        p === 0 || m === 0 || Tg(p) === Tg(m) ? (n[d] = Math.max(zt(xg(p), xg(m), o), 0),
        (un.test(m) || un.test(p)) && (n[d] += "%")) : n[d] = m
    }
    (i.rotate || s.rotate) && (n.rotate = zt(i.rotate || 0, s.rotate || 0, o))
}
function Ag(n, i) {
    return n[i] !== void 0 ? n[i] : n.borderRadius
}
const m6 = Jv(0, .5, Y1)
  , p6 = Jv(.5, .95, ke);
function Jv(n, i, s) {
    return o => o < n ? 0 : o > i ? 1 : s(ml(n, i, o))
}
function y6(n, i, s) {
    const o = re(n) ? n : Wa(n);
    return o.start(Oh("", o, i, s)),
    o.animation
}
function gl(n, i, s, o={
    passive: !0
}) {
    return n.addEventListener(i, s, o),
    () => n.removeEventListener(i, s, o)
}
const g6 = (n, i) => n.depth - i.depth;
class v6 {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(i) {
        Sh(this.children, i),
        this.isDirty = !0
    }
    remove(i) {
        vr(this.children, i),
        this.isDirty = !0
    }
    forEach(i) {
        this.isDirty && this.children.sort(g6),
        this.isDirty = !1,
        this.children.forEach(i)
    }
}
function S6(n, i) {
    const s = fe.now()
      , o = ({timestamp: r}) => {
        const c = r - s;
        c >= i && (Si(o),
        n(c - i))
    }
    ;
    return Lt.setup(o, !0),
    () => Si(o)
}
function or(n) {
    return re(n) ? n.get() : n
}
class b6 {
    constructor() {
        this.members = []
    }
    add(i) {
        Sh(this.members, i);
        for (let s = this.members.length - 1; s >= 0; s--) {
            const o = this.members[s];
            if (o === i || o === this.lead || o === this.prevLead)
                continue;
            const r = o.instance;
            (!r || r.isConnected === !1) && !o.snapshot && (vr(this.members, o),
            o.unmount())
        }
        i.scheduleRender()
    }
    remove(i) {
        if (vr(this.members, i),
        i === this.prevLead && (this.prevLead = void 0),
        i === this.lead) {
            const s = this.members[this.members.length - 1];
            s && this.promote(s)
        }
    }
    relegate(i) {
        var s;
        for (let o = this.members.indexOf(i) - 1; o >= 0; o--) {
            const r = this.members[o];
            if (r.isPresent !== !1 && ((s = r.instance) == null ? void 0 : s.isConnected) !== !1)
                return this.promote(r),
                !0
        }
        return !1
    }
    promote(i, s) {
        var r;
        const o = this.lead;
        if (i !== o && (this.prevLead = o,
        this.lead = i,
        i.show(),
        o)) {
            o.updateSnapshot(),
            i.scheduleRender();
            const {layoutDependency: c} = o.options
              , {layoutDependency: h} = i.options;
            (c === void 0 || c !== h) && (i.resumeFrom = o,
            s && (o.preserveOpacity = !0),
            o.snapshot && (i.snapshot = o.snapshot,
            i.snapshot.latestValues = o.animationValues || o.latestValues),
            (r = i.root) != null && r.isUpdating && (i.isLayoutDirty = !0)),
            i.options.crossfade === !1 && o.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(i => {
            var s, o, r, c, h;
            (o = (s = i.options).onExitComplete) == null || o.call(s),
            (h = (r = i.resumingFrom) == null ? void 0 : (c = r.options).onExitComplete) == null || h.call(c)
        }
        )
    }
    scheduleRender() {
        this.members.forEach(i => i.instance && i.scheduleRender(!1))
    }
    removeLeadSnapshot() {
        var i;
        (i = this.lead) != null && i.snapshot && (this.lead.snapshot = void 0)
    }
}
const rr = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
}
  , xf = ["", "X", "Y", "Z"]
  , x6 = 1e3;
let T6 = 0;
function Tf(n, i, s, o) {
    const {latestValues: r} = i;
    r[n] && (s[n] = r[n],
    i.setStaticValue(n, 0),
    o && (o[n] = 0))
}
function Wv(n) {
    if (n.hasCheckedOptimisedAppear = !0,
    n.root === n)
        return;
    const {visualElement: i} = n.options;
    if (!i)
        return;
    const s = Sv(i);
    if (window.MotionHasOptimisedAnimation(s, "transform")) {
        const {layout: r, layoutId: c} = n.options;
        window.MotionCancelOptimisedAnimation(s, "transform", Lt, !(r || c))
    }
    const {parent: o} = n;
    o && !o.hasCheckedOptimisedAppear && Wv(o)
}
function Iv({attachResizeListener: n, defaultParent: i, measureScroll: s, checkIsScrollRoot: o, resetTransform: r}) {
    return class {
        constructor(h={}, d=i == null ? void 0 : i()) {
            this.id = T6++,
            this.animationId = 0,
            this.animationCommitId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.layoutVersion = 0,
            this.updateScheduled = !1,
            this.scheduleUpdate = () => this.update(),
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                this.nodes.forEach(C6),
                this.nodes.forEach(O6),
                this.nodes.forEach(z6),
                this.nodes.forEach(M6)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.linkedParentVersion = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = h,
            this.root = d ? d.root || d : this,
            this.path = d ? [...d.path, d] : [],
            this.parent = d,
            this.depth = d ? d.depth + 1 : 0;
            for (let p = 0; p < this.path.length; p++)
                this.path[p].shouldResetTransform = !0;
            this.root === this && (this.nodes = new v6)
        }
        addEventListener(h, d) {
            return this.eventHandlers.has(h) || this.eventHandlers.set(h, new bh),
            this.eventHandlers.get(h).add(d)
        }
        notifyListeners(h, ...d) {
            const p = this.eventHandlers.get(h);
            p && p.notify(...d)
        }
        hasListeners(h) {
            return this.eventHandlers.has(h)
        }
        mount(h) {
            if (this.instance)
                return;
            this.isSVG = Bh(h) && !ET(h),
            this.instance = h;
            const {layoutId: d, layout: p, visualElement: m} = this.options;
            if (m && !m.current && m.mount(h),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            this.root.hasTreeAnimated && (p || d) && (this.isLayoutDirty = !0),
            n) {
                let v, y = 0;
                const S = () => this.root.updateBlockedByResize = !1;
                Lt.read( () => {
                    y = window.innerWidth
                }
                ),
                n(h, () => {
                    const b = window.innerWidth;
                    b !== y && (y = b,
                    this.root.updateBlockedByResize = !0,
                    v && v(),
                    v = S6(S, 250),
                    rr.hasAnimatedSinceResize && (rr.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(Mg)))
                }
                )
            }
            d && this.root.registerSharedNode(d, this),
            this.options.animate !== !1 && m && (d || p) && this.addEventListener("didUpdate", ({delta: v, hasLayoutChanged: y, hasRelativeLayoutChanged: S, layout: b}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const T = this.options.transition || m.getDefaultTransition() || B6
                  , {onLayoutAnimationStart: A, onLayoutAnimationComplete: E} = m.getProps()
                  , R = !this.targetLayout || !Fv(this.targetLayout, b)
                  , _ = !y && S;
                if (this.options.layoutRoot || this.resumeFrom || _ || y && (R || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0);
                    const O = {
                        ...Dh(T, "layout"),
                        onPlay: A,
                        onComplete: E
                    };
                    (m.shouldReduceMotion || this.options.layoutRoot) && (O.delay = 0,
                    O.type = !1),
                    this.startAnimation(O),
                    this.setAnimationOrigin(v, _, O.path)
                } else
                    y || Mg(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = b
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const h = this.getStack();
            h && h.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            this.eventHandlers.clear(),
            Si(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(L6),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: h} = this.options;
            return h && h.getProps().transformTemplate
        }
        willUpdate(h=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Wv(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let v = 0; v < this.path.length; v++) {
                const y = this.path[v];
                y.shouldResetTransform = !0,
                (typeof y.latestValues.x == "string" || typeof y.latestValues.y == "string") && (y.isLayoutDirty = !0),
                y.updateScroll("snapshot"),
                y.options.layoutRoot && y.willUpdate(!1)
            }
            const {layoutId: d, layout: p} = this.options;
            if (d === void 0 && !p)
                return;
            const m = this.getTransformTemplate();
            this.prevTransformTemplateValue = m ? m(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            h && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                const p = this.updateBlockedByResize;
                this.unblockUpdate(),
                this.updateBlockedByResize = !1,
                this.clearAllSnapshots(),
                p && this.nodes.forEach(_6),
                this.nodes.forEach(Eg);
                return
            }
            if (this.animationId <= this.animationCommitId) {
                this.nodes.forEach(Cg);
                return
            }
            this.animationCommitId = this.animationId,
            this.isUpdating ? (this.isUpdating = !1,
            this.nodes.forEach(R6),
            this.nodes.forEach(D6),
            this.nodes.forEach(A6),
            this.nodes.forEach(E6)) : this.nodes.forEach(Cg),
            this.clearAllSnapshots();
            const d = fe.now();
            oe.delta = cn(0, 1e3 / 60, d - oe.timestamp),
            oe.timestamp = d,
            oe.isProcessing = !0,
            df.update.process(oe),
            df.preRender.process(oe),
            df.render.process(oe),
            oe.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            Nh.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(w6),
            this.sharedNodes.forEach(j6)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            Lt.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            Lt.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(),
            this.snapshot && !he(this.snapshot.measuredBox.x) && !he(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let p = 0; p < this.path.length; p++)
                    this.path[p].updateScroll();
            const h = this.layout;
            this.layout = this.measure(!1),
            this.layoutVersion++,
            this.layoutCorrected || (this.layoutCorrected = It()),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: d} = this.options;
            d && d.notify("LayoutMeasure", this.layout.layoutBox, h ? h.layoutBox : void 0)
        }
        updateScroll(h="measure") {
            let d = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === h && (d = !1),
            d && this.instance) {
                const p = o(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: h,
                    isRoot: p,
                    offset: s(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : p
                }
            }
        }
        resetTransform() {
            if (!r)
                return;
            const h = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , d = this.projectionDelta && !Qv(this.projectionDelta)
              , p = this.getTransformTemplate()
              , m = p ? p(this.latestValues, "") : void 0
              , v = m !== this.prevTransformTemplateValue;
            h && this.instance && (d || Yi(this.latestValues) || v) && (r(this.instance, m),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(h=!0) {
            const d = this.measurePageBox();
            let p = this.removeElementScroll(d);
            return h && (p = this.removeTransform(p)),
            U6(p),
            {
                animationId: this.root.animationId,
                measuredBox: d,
                layoutBox: p,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var m;
            const {visualElement: h} = this.options;
            if (!h)
                return It();
            const d = h.measureViewportBox();
            if (!(((m = this.scroll) == null ? void 0 : m.wasRoot) || this.path.some(H6))) {
                const {scroll: v} = this.root;
                v && (on(d.x, v.offset.x),
                on(d.y, v.offset.y))
            }
            return d
        }
        removeElementScroll(h) {
            var p;
            const d = It();
            if (Qe(d, h),
            (p = this.scroll) != null && p.wasRoot)
                return d;
            for (let m = 0; m < this.path.length; m++) {
                const v = this.path[m]
                  , {scroll: y, options: S} = v;
                v !== this.root && y && S.layoutScroll && (y.wasRoot && Qe(d, h),
                on(d.x, y.offset.x),
                on(d.y, y.offset.y))
            }
            return d
        }
        applyTransform(h, d=!1, p) {
            var v, y;
            const m = p || It();
            Qe(m, h);
            for (let S = 0; S < this.path.length; S++) {
                const b = this.path[S];
                !d && b.options.layoutScroll && b.scroll && b !== b.root && (on(m.x, -b.scroll.offset.x),
                on(m.y, -b.scroll.offset.y)),
                Yi(b.latestValues) && lr(m, b.latestValues, (v = b.layout) == null ? void 0 : v.layoutBox)
            }
            return Yi(this.latestValues) && lr(m, this.latestValues, (y = this.layout) == null ? void 0 : y.layoutBox),
            m
        }
        removeTransform(h) {
            var p;
            const d = It();
            Qe(d, h);
            for (let m = 0; m < this.path.length; m++) {
                const v = this.path[m];
                if (!Yi(v.latestValues))
                    continue;
                let y;
                v.instance && (ih(v.latestValues) && v.updateSnapshot(),
                y = It(),
                Qe(y, v.measurePageBox())),
                pg(d, v.latestValues, (p = v.snapshot) == null ? void 0 : p.layoutBox, y)
            }
            return Yi(this.latestValues) && pg(d, this.latestValues),
            d
        }
        setTargetDelta(h) {
            this.targetDelta = h,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(h) {
            this.options = {
                ...this.options,
                ...h,
                crossfade: h.crossfade !== void 0 ? h.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== oe.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(h=!1) {
            var b;
            const d = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = d.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = d.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = d.isSharedProjectionDirty);
            const p = !!this.resumingFrom || this !== d;
            if (!(h || p && this.isSharedProjectionDirty || this.isProjectionDirty || (b = this.parent) != null && b.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: v, layoutId: y} = this.options;
            if (!this.layout || !(v || y))
                return;
            this.resolvedRelativeTargetAt = oe.timestamp;
            const S = this.getClosestProjectingParent();
            S && this.linkedParentVersion !== S.layoutVersion && !S.options.layoutRoot && this.removeRelativeTarget(),
            !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && S && S.layout ? this.createRelativeTarget(S, this.layout.layoutBox, S.layout.layoutBox) : this.removeRelativeTarget()),
            !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = It(),
            this.targetWithTransforms = It()),
            this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
            l6(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : Qe(this.target, this.layout.layoutBox),
            Vv(this.target, this.targetDelta)) : Qe(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1,
            this.options.layoutAnchor !== !1 && S && !!S.resumingFrom == !!this.resumingFrom && !S.options.layoutScroll && S.target && this.animationProgress !== 1 ? this.createRelativeTarget(S, this.target, S.target) : this.relativeParent = this.relativeTarget = void 0))
        }
        getClosestProjectingParent() {
            if (!(!this.parent || ih(this.parent.latestValues) || Nv(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        createRelativeTarget(h, d, p) {
            this.relativeParent = h,
            this.linkedParentVersion = h.layoutVersion,
            this.forceRelativeParentToResolveTarget(),
            this.relativeTarget = It(),
            this.relativeTargetOrigin = It(),
            Mr(this.relativeTargetOrigin, d, p, this.options.layoutAnchor || void 0),
            Qe(this.relativeTarget, this.relativeTargetOrigin)
        }
        removeRelativeTarget() {
            this.relativeParent = this.relativeTarget = void 0
        }
        calcProjection() {
            var T;
            const h = this.getLead()
              , d = !!this.resumingFrom || this !== h;
            let p = !0;
            if ((this.isProjectionDirty || (T = this.parent) != null && T.isProjectionDirty) && (p = !1),
            d && (this.isSharedProjectionDirty || this.isTransformDirty) && (p = !1),
            this.resolvedRelativeTargetAt === oe.timestamp && (p = !1),
            p)
                return;
            const {layout: m, layoutId: v} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(m || v))
                return;
            Qe(this.layoutCorrected, this.layout.layoutBox);
            const y = this.treeScale.x
              , S = this.treeScale.y;
            NT(this.layoutCorrected, this.treeScale, this.path, d),
            h.layout && !h.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (h.target = h.layout.layoutBox,
            h.targetWithTransforms = It());
            const {target: b} = h;
            if (!b) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (ug(this.prevProjectionDelta.x, this.projectionDelta.x),
            ug(this.prevProjectionDelta.y, this.projectionDelta.y)),
            rl(this.projectionDelta, this.layoutCorrected, b, this.latestValues),
            (this.treeScale.x !== y || this.treeScale.y !== S || !bg(this.projectionDelta.x, this.prevProjectionDelta.x) || !bg(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", b))
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(h=!0) {
            var d;
            if ((d = this.options.visualElement) == null || d.scheduleRender(),
            h) {
                const p = this.getStack();
                p && p.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = ka(),
            this.projectionDelta = ka(),
            this.projectionDeltaWithTransform = ka()
        }
        setAnimationOrigin(h, d=!1, p) {
            const m = this.snapshot
              , v = m ? m.latestValues : {}
              , y = {
                ...this.latestValues
            }
              , S = ka();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !d;
            const b = It()
              , T = m ? m.source : void 0
              , A = this.layout ? this.layout.source : void 0
              , E = T !== A
              , R = this.getStack()
              , _ = !R || R.members.length <= 1
              , O = !!(E && !_ && this.options.crossfade === !0 && !this.path.some(V6));
            this.animationProgress = 0;
            let V;
            const P = p == null ? void 0 : p.interpolateProjection(h);
            this.mixTargetDelta = Y => {
                const q = Y / 1e3
                  , Q = P == null ? void 0 : P(q);
                Q ? (S.x.translate = Q.x,
                S.x.scale = zt(h.x.scale, 1, q),
                S.x.origin = h.x.origin,
                S.x.originPoint = h.x.originPoint,
                S.y.translate = Q.y,
                S.y.scale = zt(h.y.scale, 1, q),
                S.y.origin = h.y.origin,
                S.y.originPoint = h.y.originPoint) : (wg(S.x, h.x, q),
                wg(S.y, h.y, q)),
                this.setTargetDelta(S),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Mr(b, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0),
                N6(this.relativeTarget, this.relativeTargetOrigin, b, q),
                V && c6(this.relativeTarget, V) && (this.isProjectionDirty = !1),
                V || (V = It()),
                Qe(V, this.relativeTarget)),
                E && (this.animationValues = y,
                d6(y, v, this.latestValues, q, O, _)),
                Q && Q.rotate !== void 0 && (this.animationValues || (this.animationValues = y),
                this.animationValues.pathRotation = Q.rotate),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = q
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(h) {
            var d, p, m;
            this.notifyListeners("animationStart"),
            (d = this.currentAnimation) == null || d.stop(),
            (m = (p = this.resumingFrom) == null ? void 0 : p.currentAnimation) == null || m.stop(),
            this.pendingAnimation && (Si(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = Lt.update( () => {
                rr.hasAnimatedSinceResize = !0,
                this.motionValue || (this.motionValue = Wa(0)),
                this.motionValue.jump(0, !1),
                this.currentAnimation = y6(this.motionValue, [0, 1e3], {
                    ...h,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: v => {
                        this.mixTargetDelta(v),
                        h.onUpdate && h.onUpdate(v)
                    }
                    ,
                    onComplete: () => {
                        h.onComplete && h.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const h = this.getStack();
            h && h.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(x6),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const h = this.getLead();
            let {targetWithTransforms: d, target: p, layout: m, latestValues: v} = h;
            if (!(!d || !p || !m)) {
                if (this !== h && this.layout && m && $v(this.options.animationType, this.layout.layoutBox, m.layoutBox)) {
                    p = this.target || It();
                    const y = he(this.layout.layoutBox.x);
                    p.x.min = h.target.x.min,
                    p.x.max = p.x.min + y;
                    const S = he(this.layout.layoutBox.y);
                    p.y.min = h.target.y.min,
                    p.y.max = p.y.min + S
                }
                Qe(d, p),
                lr(d, v),
                rl(this.projectionDeltaWithTransform, this.layoutCorrected, d, v)
            }
        }
        registerSharedNode(h, d) {
            this.sharedNodes.has(h) || this.sharedNodes.set(h, new b6),
            this.sharedNodes.get(h).add(d);
            const m = d.options.initialPromotionConfig;
            d.promote({
                transition: m ? m.transition : void 0,
                preserveFollowOpacity: m && m.shouldPreserveFollowOpacity ? m.shouldPreserveFollowOpacity(d) : void 0
            })
        }
        isLead() {
            const h = this.getStack();
            return h ? h.lead === this : !0
        }
        getLead() {
            var d;
            const {layoutId: h} = this.options;
            return h ? ((d = this.getStack()) == null ? void 0 : d.lead) || this : this
        }
        getPrevLead() {
            var d;
            const {layoutId: h} = this.options;
            return h ? (d = this.getStack()) == null ? void 0 : d.prevLead : void 0
        }
        getStack() {
            const {layoutId: h} = this.options;
            if (h)
                return this.root.sharedNodes.get(h)
        }
        promote({needsReset: h, transition: d, preserveFollowOpacity: p}={}) {
            const m = this.getStack();
            m && m.promote(this, p),
            h && (this.projectionDelta = void 0,
            this.needsReset = !0),
            d && this.setOptions({
                transition: d
            })
        }
        relegate() {
            const h = this.getStack();
            return h ? h.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {visualElement: h} = this.options;
            if (!h)
                return;
            let d = !1;
            const {latestValues: p} = h;
            if ((p.z || p.rotate || p.rotateX || p.rotateY || p.rotateZ || p.skewX || p.skewY) && (d = !0),
            !d)
                return;
            const m = {};
            p.z && Tf("z", h, m, this.animationValues);
            for (let v = 0; v < xf.length; v++)
                Tf(`rotate${xf[v]}`, h, m, this.animationValues),
                Tf(`skew${xf[v]}`, h, m, this.animationValues);
            h.render();
            for (const v in m)
                h.setStaticValue(v, m[v]),
                this.animationValues && (this.animationValues[v] = m[v]);
            h.scheduleRender()
        }
        applyProjectionStyles(h, d) {
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible) {
                h.visibility = "hidden";
                return
            }
            const p = this.getTransformTemplate();
            if (this.needsReset) {
                this.needsReset = !1,
                h.visibility = "",
                h.opacity = "",
                h.pointerEvents = or(d == null ? void 0 : d.pointerEvents) || "",
                h.transform = p ? p(this.latestValues, "") : "none";
                return
            }
            const m = this.getLead();
            if (!this.projectionDelta || !this.layout || !m.target) {
                this.options.layoutId && (h.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                h.pointerEvents = or(d == null ? void 0 : d.pointerEvents) || ""),
                this.hasProjected && !Yi(this.latestValues) && (h.transform = p ? p({}, "") : "none",
                this.hasProjected = !1);
                return
            }
            h.visibility = "";
            const v = m.animationValues || m.latestValues;
            this.applyTransformsToTarget();
            let y = f6(this.projectionDeltaWithTransform, this.treeScale, v);
            p && (y = p(v, y)),
            h.transform = y;
            const {x: S, y: b} = this.projectionDelta;
            h.transformOrigin = `${S.origin * 100}% ${b.origin * 100}% 0`,
            m.animationValues ? h.opacity = m === this ? v.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : v.opacityExit : h.opacity = m === this ? v.opacity !== void 0 ? v.opacity : "" : v.opacityExit !== void 0 ? v.opacityExit : 0;
            for (const T in sh) {
                if (v[T] === void 0)
                    continue;
                const {correct: A, applyTo: E, isCSSVariable: R} = sh[T]
                  , _ = y === "none" ? v[T] : A(v[T], m);
                if (E) {
                    const O = E.length;
                    for (let V = 0; V < O; V++)
                        h[E[V]] = _
                } else
                    R ? this.options.visualElement.renderState.vars[T] = _ : h[T] = _
            }
            this.options.layoutId && (h.pointerEvents = m === this ? or(d == null ? void 0 : d.pointerEvents) || "" : "none")
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(h => {
                var d;
                return (d = h.currentAnimation) == null ? void 0 : d.stop()
            }
            ),
            this.root.nodes.forEach(Eg),
            this.root.sharedNodes.clear()
        }
    }
}
function A6(n) {
    n.updateLayout()
}
function E6(n) {
    var s;
    const i = ((s = n.resumeFrom) == null ? void 0 : s.snapshot) || n.snapshot;
    if (n.isLead() && n.layout && i && n.hasListeners("didUpdate")) {
        const {layoutBox: o, measuredBox: r} = n.layout
          , {animationType: c} = n.options
          , h = i.source !== n.layout.source;
        if (c === "size")
            sn(y => {
                const S = h ? i.measuredBox[y] : i.layoutBox[y]
                  , b = he(S);
                S.min = o[y].min,
                S.max = S.min + b
            }
            );
        else if (c === "x" || c === "y") {
            const y = c === "x" ? "y" : "x";
            lh(h ? i.measuredBox[y] : i.layoutBox[y], o[y])
        } else
            $v(c, i.layoutBox, o) && sn(y => {
                const S = h ? i.measuredBox[y] : i.layoutBox[y]
                  , b = he(o[y]);
                S.max = S.min + b,
                n.relativeTarget && !n.currentAnimation && (n.isProjectionDirty = !0,
                n.relativeTarget[y].max = n.relativeTarget[y].min + b)
            }
            );
        const d = ka();
        rl(d, o, i.layoutBox);
        const p = ka();
        h ? rl(p, n.applyTransform(r, !0), i.measuredBox) : rl(p, o, i.layoutBox);
        const m = !Qv(d);
        let v = !1;
        if (!n.resumeFrom) {
            const y = n.getClosestProjectingParent();
            if (y && !y.resumeFrom) {
                const {snapshot: S, layout: b} = y;
                if (S && b) {
                    const T = n.options.layoutAnchor || void 0
                      , A = It();
                    Mr(A, i.layoutBox, S.layoutBox, T);
                    const E = It();
                    Mr(E, o, b.layoutBox, T),
                    Fv(A, E) || (v = !0),
                    y.options.layoutRoot && (n.relativeTarget = E,
                    n.relativeTargetOrigin = A,
                    n.relativeParent = y)
                }
            }
        }
        n.notifyListeners("didUpdate", {
            layout: o,
            snapshot: i,
            delta: p,
            layoutDelta: d,
            hasLayoutChanged: m,
            hasRelativeLayoutChanged: v
        })
    } else if (n.isLead()) {
        const {onExitComplete: o} = n.options;
        o && o()
    }
    n.options.transition = void 0
}
function C6(n) {
    n.parent && (n.isProjecting() || (n.isProjectionDirty = n.parent.isProjectionDirty),
    n.isSharedProjectionDirty || (n.isSharedProjectionDirty = !!(n.isProjectionDirty || n.parent.isProjectionDirty || n.parent.isSharedProjectionDirty)),
    n.isTransformDirty || (n.isTransformDirty = n.parent.isTransformDirty))
}
function M6(n) {
    n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty = !1
}
function w6(n) {
    n.clearSnapshot()
}
function Eg(n) {
    n.clearMeasurements()
}
function _6(n) {
    n.isLayoutDirty = !0,
    n.updateLayout()
}
function Cg(n) {
    n.isLayoutDirty = !1
}
function R6(n) {
    n.isAnimationBlocked && n.layout && !n.isLayoutDirty && (n.snapshot = n.layout,
    n.isLayoutDirty = !0)
}
function D6(n) {
    const {visualElement: i} = n.options;
    i && i.getProps().onBeforeLayoutMeasure && i.notify("BeforeLayoutMeasure"),
    n.resetTransform()
}
function Mg(n) {
    n.finishAnimation(),
    n.targetDelta = n.relativeTarget = n.target = void 0,
    n.isProjectionDirty = !0
}
function O6(n) {
    n.resolveTargetDelta()
}
function z6(n) {
    n.calcProjection()
}
function L6(n) {
    n.resetSkewAndRotation()
}
function j6(n) {
    n.removeLeadSnapshot()
}
function wg(n, i, s) {
    n.translate = zt(i.translate, 0, s),
    n.scale = zt(i.scale, 1, s),
    n.origin = i.origin,
    n.originPoint = i.originPoint
}
function _g(n, i, s, o) {
    n.min = zt(i.min, s.min, o),
    n.max = zt(i.max, s.max, o)
}
function N6(n, i, s, o) {
    _g(n.x, i.x, s.x, o),
    _g(n.y, i.y, s.y, o)
}
function V6(n) {
    return n.animationValues && n.animationValues.opacityExit !== void 0
}
const B6 = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , Rg = n => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(n)
  , Dg = Rg("applewebkit/") && !Rg("chrome/") ? Math.round : ke;
function Og(n) {
    n.min = Dg(n.min),
    n.max = Dg(n.max)
}
function U6(n) {
    Og(n.x),
    Og(n.y)
}
function $v(n, i, s) {
    return n === "position" || n === "preserve-aspect" && !s6(Sg(i), Sg(s), .2)
}
function H6(n) {
    var i;
    return n !== n.root && ((i = n.scroll) == null ? void 0 : i.wasRoot)
}
const q6 = Iv({
    attachResizeListener: (n, i) => gl(n, "resize", i),
    measureScroll: () => {
        var n, i;
        return {
            x: document.documentElement.scrollLeft || ((n = document.body) == null ? void 0 : n.scrollLeft) || 0,
            y: document.documentElement.scrollTop || ((i = document.body) == null ? void 0 : i.scrollTop) || 0
        }
    }
    ,
    checkIsScrollRoot: () => !0
})
  , Af = {
    current: void 0
}
  , t2 = Iv({
    measureScroll: n => ({
        x: n.scrollLeft,
        y: n.scrollTop
    }),
    defaultParent: () => {
        if (!Af.current) {
            const n = new q6({});
            n.mount(window),
            n.setOptions({
                layoutScroll: !0
            }),
            Af.current = n
        }
        return Af.current
    }
    ,
    resetTransform: (n, i) => {
        n.style.transform = i !== void 0 ? i : "none"
    }
    ,
    checkIsScrollRoot: n => window.getComputedStyle(n).position === "fixed"
})
  , e2 = F.createContext({
    transformPagePoint: n => n,
    isStatic: !1,
    reducedMotion: "never"
});
function G6(n=!0) {
    const i = F.useContext(vh);
    if (i === null)
        return [!0, null];
    const {isPresent: s, onExitComplete: o, register: r} = i
      , c = F.useId();
    F.useEffect( () => {
        if (n)
            return r(c)
    }
    , [n]);
    const h = F.useCallback( () => n && o && o(c), [c, o, n]);
    return !s && o ? [!1, h] : [!0]
}
const n2 = F.createContext({
    strict: !1
})
  , zg = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
};
let Lg = !1;
function Y6() {
    if (Lg)
        return;
    const n = {};
    for (const i in zg)
        n[i] = {
            isEnabled: s => zg[i].some(o => !!s[o])
        };
    zv(n),
    Lg = !0
}
function i2() {
    return Y6(),
    OT()
}
function k6(n) {
    const i = i2();
    for (const s in n)
        i[s] = {
            ...i[s],
            ...n[s]
        };
    zv(i)
}
const X6 = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "propagate", "ignoreStrict", "viewport"]);
function wr(n) {
    return n.startsWith("while") || n.startsWith("drag") && n !== "draggable" || n.startsWith("layout") || n.startsWith("onTap") || n.startsWith("onPan") || n.startsWith("onLayout") || X6.has(n)
}
let a2 = n => !wr(n);
function P6(n) {
    typeof n == "function" && (a2 = i => i.startsWith("on") ? !wr(i) : n(i))
}
try {
    P6(require("@emotion/is-prop-valid").default)
} catch {}
function K6(n, i, s) {
    const o = {};
    for (const r in n)
        r === "values" && typeof n.values == "object" || re(n[r]) || (a2(r) || s === !0 && wr(r) || !i && !wr(r) || n.draggable && r.startsWith("onDrag")) && (o[r] = n[r]);
    return o
}
const Ur = F.createContext({});
function Z6(n, i) {
    if (Br(n)) {
        const {initial: s, animate: o} = n;
        return {
            initial: s === !1 || yl(s) ? s : void 0,
            animate: yl(o) ? o : void 0
        }
    }
    return n.inherit !== !1 ? i : {}
}
function Q6(n) {
    const {initial: i, animate: s} = Z6(n, F.useContext(Ur));
    return F.useMemo( () => ({
        initial: i,
        animate: s
    }), [jg(i), jg(s)])
}
function jg(n) {
    return Array.isArray(n) ? n.join(" ") : n
}
const Yh = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function s2(n, i, s) {
    for (const o in i)
        !re(i[o]) && !Hv(o, s) && (n[o] = i[o])
}
function F6({transformTemplate: n}, i) {
    return F.useMemo( () => {
        const s = Yh();
        return qh(s, i, n),
        Object.assign({}, s.vars, s.style)
    }
    , [i])
}
function J6(n, i) {
    const s = n.style || {}
      , o = {};
    return s2(o, s, n),
    Object.assign(o, F6(n, i)),
    o
}
function W6(n, i) {
    const s = {}
      , o = J6(n, i);
    return n.drag && n.dragListener !== !1 && (s.draggable = !1,
    o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none",
    o.touchAction = n.drag === !0 ? "none" : `pan-${n.drag === "x" ? "y" : "x"}`),
    n.tabIndex === void 0 && (n.onTap || n.onTapStart || n.whileTap) && (s.tabIndex = 0),
    s.style = o,
    s
}
const l2 = () => ({
    ...Yh(),
    attrs: {}
});
function I6(n, i, s, o) {
    const r = F.useMemo( () => {
        const c = l2();
        return qv(c, i, Yv(o), n.transformTemplate, n.style),
        {
            ...c.attrs,
            style: {
                ...c.style
            }
        }
    }
    , [i]);
    if (n.style) {
        const c = {};
        s2(c, n.style, n),
        r.style = {
            ...c,
            ...r.style
        }
    }
    return r
}
const $6 = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function kh(n) {
    return typeof n != "string" || n.includes("-") ? !1 : !!($6.indexOf(n) > -1 || /[A-Z]/u.test(n))
}
function t8(n, i, s, {latestValues: o}, r, c=!1, h) {
    const p = (h ?? kh(n) ? I6 : W6)(i, o, r, n)
      , m = K6(i, typeof n == "string", c)
      , v = n !== F.Fragment ? {
        ...m,
        ...p,
        ref: s
    } : {}
      , {children: y} = i
      , S = F.useMemo( () => re(y) ? y.get() : y, [y]);
    return F.createElement(n, {
        ...v,
        children: S
    })
}
function e8({scrapeMotionValuesFromProps: n, createRenderState: i}, s, o, r) {
    return {
        latestValues: n8(s, o, r, n),
        renderState: i()
    }
}
function n8(n, i, s, o) {
    const r = {}
      , c = o(n, {});
    for (const S in c)
        r[S] = or(c[S]);
    let {initial: h, animate: d} = n;
    const p = Br(n)
      , m = Dv(n);
    i && m && !p && n.inherit !== !1 && (h === void 0 && (h = i.initial),
    d === void 0 && (d = i.animate));
    let v = s ? s.initial === !1 : !1;
    v = v || h === !1;
    const y = v ? d : h;
    if (y && typeof y != "boolean" && !Vr(y)) {
        const S = Array.isArray(y) ? y : [y];
        for (let b = 0; b < S.length; b++) {
            const T = zh(n, S[b]);
            if (T) {
                const {transitionEnd: A, transition: E, ...R} = T;
                for (const _ in R) {
                    let O = R[_];
                    if (Array.isArray(O)) {
                        const V = v ? O.length - 1 : 0;
                        O = O[V]
                    }
                    O !== null && (r[_] = O)
                }
                for (const _ in A)
                    r[_] = A[_]
            }
        }
    }
    return r
}
const o2 = n => (i, s) => {
    const o = F.useContext(Ur)
      , r = F.useContext(vh)
      , c = () => e8(n, i, o, r);
    return s ? c() : t5(c)
}
  , i8 = o2({
    scrapeMotionValuesFromProps: Gh,
    createRenderState: Yh
})
  , a8 = o2({
    scrapeMotionValuesFromProps: kv,
    createRenderState: l2
})
  , s8 = Symbol.for("motionComponentSymbol");
function l8(n, i, s) {
    const o = F.useRef(s);
    F.useInsertionEffect( () => {
        o.current = s
    }
    );
    const r = F.useRef(null);
    return F.useCallback(c => {
        var d;
        c && ((d = n.onMount) == null || d.call(n, c)),
        i && (c ? i.mount(c) : i.unmount());
        const h = o.current;
        if (typeof h == "function")
            if (c) {
                const p = h(c);
                typeof p == "function" && (r.current = p)
            } else
                r.current ? (r.current(),
                r.current = null) : h(c);
        else
            h && (h.current = c)
    }
    , [i])
}
const r2 = F.createContext({});
function qa(n) {
    return n && typeof n == "object" && Object.prototype.hasOwnProperty.call(n, "current")
}
function o8(n, i, s, o, r, c) {
    var O, V;
    const {visualElement: h} = F.useContext(Ur)
      , d = F.useContext(n2)
      , p = F.useContext(vh)
      , m = F.useContext(e2)
      , v = m.reducedMotion
      , y = m.skipAnimations
      , S = F.useRef(null)
      , b = F.useRef(!1);
    o = o || d.renderer,
    !S.current && o && (S.current = o(n, {
        visualState: i,
        parent: h,
        props: s,
        presenceContext: p,
        blockInitialAnimation: p ? p.initial === !1 : !1,
        reducedMotionConfig: v,
        skipAnimations: y,
        isSVG: c
    }),
    b.current && S.current && (S.current.manuallyAnimateOnMount = !0));
    const T = S.current
      , A = F.useContext(r2);
    T && !T.projection && r && (T.type === "html" || T.type === "svg") && r8(S.current, s, r, A);
    const E = F.useRef(!1);
    F.useInsertionEffect( () => {
        T && E.current && T.update(s, p)
    }
    );
    const R = s[vv]
      , _ = F.useRef(!!R && typeof window < "u" && !((O = window.MotionHandoffIsComplete) != null && O.call(window, R)) && ((V = window.MotionHasOptimisedAnimation) == null ? void 0 : V.call(window, R)));
    return n5( () => {
        b.current = !0,
        T && (E.current = !0,
        window.MotionIsMounted = !0,
        T.updateFeatures(),
        T.scheduleRenderMicrotask(),
        _.current && T.animationState && T.animationState.animateChanges())
    }
    ),
    F.useEffect( () => {
        T && (!_.current && T.animationState && T.animationState.animateChanges(),
        _.current && (queueMicrotask( () => {
            var P;
            (P = window.MotionHandoffMarkAsComplete) == null || P.call(window, R)
        }
        ),
        _.current = !1),
        T.enteringChildren = void 0)
    }
    ),
    T
}
function r8(n, i, s, o) {
    const {layoutId: r, layout: c, drag: h, dragConstraints: d, layoutScroll: p, layoutRoot: m, layoutAnchor: v, layoutCrossfade: y} = i;
    n.projection = new s(n.latestValues,i["data-framer-portal-id"] ? void 0 : u2(n.parent)),
    n.projection.setOptions({
        layoutId: r,
        layout: c,
        alwaysMeasureLayout: !!h || d && qa(d),
        visualElement: n,
        animationType: typeof c == "string" ? c : "both",
        initialPromotionConfig: o,
        crossfade: y,
        layoutScroll: p,
        layoutRoot: m,
        layoutAnchor: v
    })
}
function u2(n) {
    if (n)
        return n.options.allowProjection !== !1 ? n.projection : u2(n.parent)
}
function Ef(n, {forwardMotionProps: i=!1, type: s}={}, o, r) {
    o && k6(o);
    const c = s ? s === "svg" : kh(n)
      , h = c ? a8 : i8;
    function d(m, v) {
        let y;
        const S = {
            ...F.useContext(e2),
            ...m,
            layoutId: u8(m)
        }
          , {isStatic: b} = S
          , T = Q6(m)
          , A = h(m, b);
        if (!b && typeof window < "u") {
            c8();
            const E = f8(S);
            y = E.MeasureLayout,
            T.visualElement = o8(n, A, S, r, E.ProjectionNode, c)
        }
        return z.jsxs(Ur.Provider, {
            value: T,
            children: [y && T.visualElement ? z.jsx(y, {
                visualElement: T.visualElement,
                ...S
            }) : null, t8(n, m, l8(A, T.visualElement, v), A, b, i, c)]
        })
    }
    d.displayName = `motion.${typeof n == "string" ? n : `create(${n.displayName ?? n.name ?? ""})`}`;
    const p = F.forwardRef(d);
    return p[s8] = n,
    p
}
function u8({layoutId: n}) {
    const i = F.useContext(D1).id;
    return i && n !== void 0 ? i + "-" + n : n
}
function c8(n, i) {
    F.useContext(n2).strict
}
function f8(n) {
    const i = i2()
      , {drag: s, layout: o} = i;
    if (!s && !o)
        return {};
    const r = {
        ...s,
        ...o
    };
    return {
        MeasureLayout: s != null && s.isEnabled(n) || o != null && o.isEnabled(n) ? r.MeasureLayout : void 0,
        ProjectionNode: r.ProjectionNode
    }
}
function h8(n, i) {
    if (typeof Proxy > "u")
        return Ef;
    const s = new Map
      , o = (c, h) => Ef(c, h, n, i)
      , r = (c, h) => o(c, h);
    return new Proxy(r,{
        get: (c, h) => h === "create" ? o : (s.has(h) || s.set(h, Ef(h, void 0, n, i)),
        s.get(h))
    })
}
const d8 = (n, i) => i.isSVG ?? kh(n) ? new QT(i) : new YT(i,{
    allowProjection: n !== F.Fragment
});
class m8 extends bi {
    constructor(i) {
        super(i),
        i.animationState || (i.animationState = $T(i))
    }
    updateAnimationControlsSubscription() {
        const {animate: i} = this.node.getProps();
        Vr(i) && (this.unmountControls = i.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: i} = this.node.getProps()
          , {animate: s} = this.node.prevProps || {};
        i !== s && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var i;
        this.node.animationState.reset(),
        (i = this.unmountControls) == null || i.call(this)
    }
}
let p8 = 0;
class y8 extends bi {
    constructor() {
        super(...arguments),
        this.id = p8++,
        this.isExitComplete = !1
    }
    update() {
        var c;
        if (!this.node.presenceContext)
            return;
        const {isPresent: i, onExitComplete: s} = this.node.presenceContext
          , {isPresent: o} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || i === o)
            return;
        if (i && o === !1) {
            if (this.isExitComplete) {
                const {initial: h, custom: d} = this.node.getProps();
                if (typeof h == "string" || typeof h == "object" && h !== null && !Array.isArray(h)) {
                    const p = Qi(this.node, h, d);
                    if (p) {
                        const {transition: m, transitionEnd: v, ...y} = p;
                        for (const S in y)
                            (c = this.node.getValue(S)) == null || c.jump(y[S])
                    }
                }
                this.node.animationState.reset(),
                this.node.animationState.animateChanges()
            } else
                this.node.animationState.setActive("exit", !1);
            this.isExitComplete = !1;
            return
        }
        const r = this.node.animationState.setActive("exit", !i);
        s && !i && r.then( () => {
            this.isExitComplete = !0,
            s(this.id)
        }
        )
    }
    mount() {
        const {register: i, onExitComplete: s} = this.node.presenceContext || {};
        s && s(this.id),
        i && (this.unmount = i(this.id))
    }
    unmount() {}
}
const g8 = {
    animation: {
        Feature: m8
    },
    exit: {
        Feature: y8
    }
};
function Tl(n) {
    return {
        point: {
            x: n.pageX,
            y: n.pageY
        }
    }
}
const v8 = n => i => Vh(i) && n(i, Tl(i));
function ul(n, i, s, o) {
    return gl(n, i, v8(s), o)
}
const c2 = ({current: n}) => n ? n.ownerDocument.defaultView : null
  , Ng = (n, i) => Math.abs(n - i);
function S8(n, i) {
    const s = Ng(n.x, i.x)
      , o = Ng(n.y, i.y);
    return Math.sqrt(s ** 2 + o ** 2)
}
const Vg = new Set(["auto", "scroll"]);
class f2 {
    constructor(i, s, {transformPagePoint: o, contextWindow: r=window, dragSnapToOrigin: c=!1, distanceThreshold: h=3, element: d}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.lastRawMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.scrollPositions = new Map,
        this.removeScrollListeners = null,
        this.onElementScroll = T => {
            this.handleScroll(T.target)
        }
        ,
        this.onWindowScroll = () => {
            this.handleScroll(window)
        }
        ,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            this.lastRawMoveEventInfo && (this.lastMoveEventInfo = Fo(this.lastRawMoveEventInfo, this.transformPagePoint));
            const T = Cf(this.lastMoveEventInfo, this.history)
              , A = this.startEvent !== null
              , E = S8(T.offset, {
                x: 0,
                y: 0
            }) >= this.distanceThreshold;
            if (!A && !E)
                return;
            const {point: R} = T
              , {timestamp: _} = oe;
            this.history.push({
                ...R,
                timestamp: _
            });
            const {onStart: O, onMove: V} = this.handlers;
            A || (O && O(this.lastMoveEvent, T),
            this.startEvent = this.lastMoveEvent),
            V && V(this.lastMoveEvent, T)
        }
        ,
        this.handlePointerMove = (T, A) => {
            this.lastMoveEvent = T,
            this.lastRawMoveEventInfo = A,
            this.lastMoveEventInfo = Fo(A, this.transformPagePoint),
            Lt.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (T, A) => {
            this.end();
            const {onEnd: E, onSessionEnd: R, resumeAnimation: _} = this.handlers;
            if ((this.dragSnapToOrigin || !this.startEvent) && _ && _(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const O = Cf(T.type === "pointercancel" ? this.lastMoveEventInfo : Fo(A, this.transformPagePoint), this.history);
            this.startEvent && E && E(T, O),
            R && R(T, O)
        }
        ,
        !Vh(i))
            return;
        this.dragSnapToOrigin = c,
        this.handlers = s,
        this.transformPagePoint = o,
        this.distanceThreshold = h,
        this.contextWindow = r || window;
        const p = Tl(i)
          , m = Fo(p, this.transformPagePoint)
          , {point: v} = m
          , {timestamp: y} = oe;
        this.history = [{
            ...v,
            timestamp: y
        }];
        const {onSessionStart: S} = s;
        S && S(i, Cf(m, this.history));
        const b = {
            passive: !0,
            capture: !0
        };
        this.removeListeners = Sl(ul(this.contextWindow, "pointermove", this.handlePointerMove, b), ul(this.contextWindow, "pointerup", this.handlePointerUp, b), ul(this.contextWindow, "pointercancel", this.handlePointerUp, b)),
        d && this.startScrollTracking(d)
    }
    startScrollTracking(i) {
        let s = i.parentElement;
        for (; s; ) {
            const o = getComputedStyle(s);
            (Vg.has(o.overflowX) || Vg.has(o.overflowY)) && this.scrollPositions.set(s, {
                x: s.scrollLeft,
                y: s.scrollTop
            }),
            s = s.parentElement
        }
        this.scrollPositions.set(window, {
            x: window.scrollX,
            y: window.scrollY
        }),
        window.addEventListener("scroll", this.onElementScroll, {
            capture: !0
        }),
        window.addEventListener("scroll", this.onWindowScroll),
        this.removeScrollListeners = () => {
            window.removeEventListener("scroll", this.onElementScroll, {
                capture: !0
            }),
            window.removeEventListener("scroll", this.onWindowScroll)
        }
    }
    handleScroll(i) {
        const s = this.scrollPositions.get(i);
        if (!s)
            return;
        const o = i === window
          , r = o ? {
            x: window.scrollX,
            y: window.scrollY
        } : {
            x: i.scrollLeft,
            y: i.scrollTop
        }
          , c = {
            x: r.x - s.x,
            y: r.y - s.y
        };
        c.x === 0 && c.y === 0 || (o ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += c.x,
        this.lastMoveEventInfo.point.y += c.y) : this.history.length > 0 && (this.history[0].x -= c.x,
        this.history[0].y -= c.y),
        this.scrollPositions.set(i, r),
        Lt.update(this.updatePoint, !0))
    }
    updateHandlers(i) {
        this.handlers = i
    }
    end() {
        this.removeListeners && this.removeListeners(),
        this.removeScrollListeners && this.removeScrollListeners(),
        this.scrollPositions.clear(),
        Si(this.updatePoint)
    }
}
function Fo(n, i) {
    return i ? {
        point: i(n.point)
    } : n
}
function Bg(n, i) {
    return {
        x: n.x - i.x,
        y: n.y - i.y
    }
}
function Cf({point: n}, i) {
    return {
        point: n,
        delta: Bg(n, h2(i)),
        offset: Bg(n, b8(i)),
        velocity: x8(i, .1)
    }
}
function b8(n) {
    return n[0]
}
function h2(n) {
    return n[n.length - 1]
}
function x8(n, i) {
    if (n.length < 2)
        return {
            x: 0,
            y: 0
        };
    let s = n.length - 1
      , o = null;
    const r = h2(n);
    for (; s >= 0 && (o = n[s],
    !(r.timestamp - o.timestamp > Oe(i))); )
        s--;
    if (!o)
        return {
            x: 0,
            y: 0
        };
    o === n[0] && n.length > 2 && r.timestamp - o.timestamp > Oe(i) * 2 && (o = n[1]);
    const c = Ye(r.timestamp - o.timestamp);
    if (c === 0)
        return {
            x: 0,
            y: 0
        };
    const h = {
        x: (r.x - o.x) / c,
        y: (r.y - o.y) / c
    };
    return h.x === 1 / 0 && (h.x = 0),
    h.y === 1 / 0 && (h.y = 0),
    h
}
function T8(n, {min: i, max: s}, o) {
    return i !== void 0 && n < i ? n = o ? zt(i, n, o.min) : Math.max(n, i) : s !== void 0 && n > s && (n = o ? zt(s, n, o.max) : Math.min(n, s)),
    n
}
function Ug(n, i, s) {
    return {
        min: i !== void 0 ? n.min + i : void 0,
        max: s !== void 0 ? n.max + s - (n.max - n.min) : void 0
    }
}
function A8(n, {top: i, left: s, bottom: o, right: r}) {
    return {
        x: Ug(n.x, s, r),
        y: Ug(n.y, i, o)
    }
}
function Hg(n, i) {
    let s = i.min - n.min
      , o = i.max - n.max;
    return i.max - i.min < n.max - n.min && ([s,o] = [o, s]),
    {
        min: s,
        max: o
    }
}
function E8(n, i) {
    return {
        x: Hg(n.x, i.x),
        y: Hg(n.y, i.y)
    }
}
function C8(n, i) {
    let s = .5;
    const o = he(n)
      , r = he(i);
    return r > o ? s = ml(i.min, i.max - o, n.min) : o > r && (s = ml(n.min, n.max - r, i.min)),
    cn(0, 1, s)
}
function M8(n, i) {
    const s = {};
    return i.min !== void 0 && (s.min = i.min - n.min),
    i.max !== void 0 && (s.max = i.max - n.min),
    s
}
const oh = .35;
function w8(n=oh) {
    return n === !1 ? n = 0 : n === !0 && (n = oh),
    {
        x: qg(n, "left", "right"),
        y: qg(n, "top", "bottom")
    }
}
function qg(n, i, s) {
    return {
        min: Gg(n, i),
        max: Gg(n, s)
    }
}
function Gg(n, i) {
    return typeof n == "number" ? n : n[i] || 0
}
const _8 = new WeakMap;
class R8 {
    constructor(i) {
        this.openDragLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = It(),
        this.latestPointerEvent = null,
        this.latestPanInfo = null,
        this.visualElement = i
    }
    start(i, {snapToCursor: s=!1, distanceThreshold: o}={}) {
        const {presenceContext: r} = this.visualElement;
        if (r && r.isPresent === !1)
            return;
        const c = y => {
            s && this.snapToCursor(Tl(y).point),
            this.stopAnimation()
        }
          , h = (y, S) => {
            const {drag: b, dragPropagation: T, onDragStart: A} = this.getProps();
            if (b && !T && (this.openDragLock && this.openDragLock(),
            this.openDragLock = oT(b),
            !this.openDragLock))
                return;
            this.latestPointerEvent = y,
            this.latestPanInfo = S,
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            sn(R => {
                let _ = this.getAxisMotionValue(R).get() || 0;
                if (un.test(_)) {
                    const {projection: O} = this.visualElement;
                    if (O && O.layout) {
                        const V = O.layout.layoutBox[R];
                        V && (_ = he(V) * (parseFloat(_) / 100))
                    }
                }
                this.originPoint[R] = _
            }
            ),
            A && Lt.update( () => A(y, S), !1, !0),
            Wf(this.visualElement, "transform");
            const {animationState: E} = this.visualElement;
            E && E.setActive("whileDrag", !0)
        }
          , d = (y, S) => {
            this.latestPointerEvent = y,
            this.latestPanInfo = S;
            const {dragPropagation: b, dragDirectionLock: T, onDirectionLock: A, onDrag: E} = this.getProps();
            if (!b && !this.openDragLock)
                return;
            const {offset: R} = S;
            if (T && this.currentDirection === null) {
                this.currentDirection = O8(R),
                this.currentDirection !== null && A && A(this.currentDirection);
                return
            }
            this.updateAxis("x", S.point, R),
            this.updateAxis("y", S.point, R),
            this.visualElement.render(),
            E && Lt.update( () => E(y, S), !1, !0)
        }
          , p = (y, S) => {
            this.latestPointerEvent = y,
            this.latestPanInfo = S,
            this.stop(y, S),
            this.latestPointerEvent = null,
            this.latestPanInfo = null
        }
          , m = () => {
            const {dragSnapToOrigin: y} = this.getProps();
            (y || this.constraints) && this.startAnimation({
                x: 0,
                y: 0
            })
        }
          , {dragSnapToOrigin: v} = this.getProps();
        this.panSession = new f2(i,{
            onSessionStart: c,
            onStart: h,
            onMove: d,
            onSessionEnd: p,
            resumeAnimation: m
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: v,
            distanceThreshold: o,
            contextWindow: c2(this.visualElement),
            element: this.visualElement.current
        })
    }
    stop(i, s) {
        const o = i || this.latestPointerEvent
          , r = s || this.latestPanInfo
          , c = this.isDragging;
        if (this.cancel(),
        !c || !r || !o)
            return;
        const {velocity: h} = r;
        this.startAnimation(h);
        const {onDragEnd: d} = this.getProps();
        d && Lt.postRender( () => d(o, r))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: i, animationState: s} = this.visualElement;
        i && (i.isAnimationBlocked = !1),
        this.endPanSession();
        const {dragPropagation: o} = this.getProps();
        !o && this.openDragLock && (this.openDragLock(),
        this.openDragLock = null),
        s && s.setActive("whileDrag", !1)
    }
    endPanSession() {
        this.panSession && this.panSession.end(),
        this.panSession = void 0
    }
    updateAxis(i, s, o) {
        const {drag: r} = this.getProps();
        if (!o || !Jo(i, r, this.currentDirection))
            return;
        const c = this.getAxisMotionValue(i);
        let h = this.originPoint[i] + o[i];
        this.constraints && this.constraints[i] && (h = T8(h, this.constraints[i], this.elastic[i])),
        c.set(h)
    }
    resolveConstraints() {
        var c;
        const {dragConstraints: i, dragElastic: s} = this.getProps()
          , o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (c = this.visualElement.projection) == null ? void 0 : c.layout
          , r = this.constraints;
        i && qa(i) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : i && o ? this.constraints = A8(o.layoutBox, i) : this.constraints = !1,
        this.elastic = w8(s),
        r !== this.constraints && !qa(i) && o && this.constraints && !this.hasMutatedConstraints && sn(h => {
            this.constraints !== !1 && this.getAxisMotionValue(h) && (this.constraints[h] = M8(o.layoutBox[h], this.constraints[h]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: i, onMeasureDragConstraints: s} = this.getProps();
        if (!i || !qa(i))
            return !1;
        const o = i.current
          , {projection: r} = this.visualElement;
        if (!r || !r.layout)
            return !1;
        r.root && (r.root.scroll = void 0,
        r.root.updateScroll());
        const c = VT(o, r.root, this.visualElement.getTransformPagePoint());
        let h = E8(r.layout.layoutBox, c);
        if (s) {
            const d = s(LT(h));
            this.hasMutatedConstraints = !!d,
            d && (h = jv(d))
        }
        return h
    }
    startAnimation(i) {
        const {drag: s, dragMomentum: o, dragElastic: r, dragTransition: c, dragSnapToOrigin: h, onDragTransitionEnd: d} = this.getProps()
          , p = this.constraints || {}
          , m = sn(v => {
            if (!Jo(v, s, this.currentDirection))
                return;
            let y = p && p[v] || {};
            (h === !0 || h === v) && (y = {
                min: 0,
                max: 0
            });
            const S = r ? 200 : 1e6
              , b = r ? 40 : 1e7
              , T = {
                type: "inertia",
                velocity: o ? i[v] : 0,
                bounceStiffness: S,
                bounceDamping: b,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...c,
                ...y
            };
            return this.startAxisValueAnimation(v, T)
        }
        );
        return Promise.all(m).then(d)
    }
    startAxisValueAnimation(i, s) {
        const o = this.getAxisMotionValue(i);
        return Wf(this.visualElement, i),
        o.start(Oh(i, o, 0, s, this.visualElement, !1))
    }
    stopAnimation() {
        sn(i => this.getAxisMotionValue(i).stop())
    }
    getAxisMotionValue(i) {
        const s = `_drag${i.toUpperCase()}`
          , r = this.visualElement.getProps()[s];
        return r || this.visualElement.getValue(i, this.visualElement.latestValues[i] ?? 0)
    }
    snapToCursor(i) {
        sn(s => {
            const {drag: o} = this.getProps();
            if (!Jo(s, o, this.currentDirection))
                return;
            const {projection: r} = this.visualElement
              , c = this.getAxisMotionValue(s);
            if (r && r.layout) {
                const {min: h, max: d} = r.layout.layoutBox[s]
                  , p = c.get() || 0;
                c.set(i[s] - zt(h, d, .5) + p)
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: i, dragConstraints: s} = this.getProps()
          , {projection: o} = this.visualElement;
        if (!qa(s) || !o || !this.constraints)
            return;
        this.stopAnimation();
        const r = {
            x: 0,
            y: 0
        };
        sn(h => {
            const d = this.getAxisMotionValue(h);
            if (d && this.constraints !== !1) {
                const p = d.get();
                r[h] = C8({
                    min: p,
                    max: p
                }, this.constraints[h])
            }
        }
        );
        const {transformTemplate: c} = this.visualElement.getProps();
        this.visualElement.current.style.transform = c ? c({}, "") : "none",
        o.root && o.root.updateScroll(),
        o.updateLayout(),
        this.constraints = !1,
        this.resolveConstraints(),
        sn(h => {
            if (!Jo(h, i, null))
                return;
            const d = this.getAxisMotionValue(h)
              , {min: p, max: m} = this.constraints[h];
            d.set(zt(p, m, r[h]))
        }
        ),
        this.visualElement.render()
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        _8.set(this.visualElement, this);
        const i = this.visualElement.current
          , s = ul(i, "pointerdown", m => {
            const {drag: v, dragListener: y=!0} = this.getProps()
              , S = m.target
              , b = S !== i && dT(S);
            v && y && !b && this.start(m)
        }
        );
        let o;
        const r = () => {
            const {dragConstraints: m} = this.getProps();
            qa(m) && m.current && (this.constraints = this.resolveRefConstraints(),
            o || (o = D8(i, m.current, () => this.scalePositionWithinConstraints())))
        }
          , {projection: c} = this.visualElement
          , h = c.addEventListener("measure", r);
        c && !c.layout && (c.root && c.root.updateScroll(),
        c.updateLayout()),
        Lt.read(r);
        const d = gl(window, "resize", () => this.scalePositionWithinConstraints())
          , p = c.addEventListener("didUpdate", ( ({delta: m, hasLayoutChanged: v}) => {
            this.isDragging && v && (sn(y => {
                const S = this.getAxisMotionValue(y);
                S && (this.originPoint[y] += m[y].translate,
                S.set(S.get() + m[y].translate))
            }
            ),
            this.visualElement.render())
        }
        ));
        return () => {
            d(),
            s(),
            h(),
            p && p(),
            o && o()
        }
    }
    getProps() {
        const i = this.visualElement.getProps()
          , {drag: s=!1, dragDirectionLock: o=!1, dragPropagation: r=!1, dragConstraints: c=!1, dragElastic: h=oh, dragMomentum: d=!0} = i;
        return {
            ...i,
            drag: s,
            dragDirectionLock: o,
            dragPropagation: r,
            dragConstraints: c,
            dragElastic: h,
            dragMomentum: d
        }
    }
}
function Yg(n) {
    let i = !0;
    return () => {
        if (i) {
            i = !1;
            return
        }
        n()
    }
}
function D8(n, i, s) {
    const o = Wy(n, Yg(s))
      , r = Wy(i, Yg(s));
    return () => {
        o(),
        r()
    }
}
function Jo(n, i, s) {
    return (i === !0 || i === n) && (s === null || s === n)
}
function O8(n, i=10) {
    let s = null;
    return Math.abs(n.y) > i ? s = "y" : Math.abs(n.x) > i && (s = "x"),
    s
}
class z8 extends bi {
    constructor(i) {
        super(i),
        this.removeGroupControls = ke,
        this.removeListeners = ke,
        this.controls = new R8(i)
    }
    mount() {
        const {dragControls: i} = this.node.getProps();
        i && (this.removeGroupControls = i.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || ke
    }
    update() {
        const {dragControls: i} = this.node.getProps()
          , {dragControls: s} = this.node.prevProps || {};
        i !== s && (this.removeGroupControls(),
        i && (this.removeGroupControls = i.subscribe(this.controls)))
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners(),
        this.controls.isDragging || this.controls.endPanSession()
    }
}
const Mf = n => (i, s) => {
    n && Lt.update( () => n(i, s), !1, !0)
}
;
class L8 extends bi {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = ke
    }
    onPointerDown(i) {
        this.session = new f2(i,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: c2(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: i, onPanStart: s, onPan: o, onPanEnd: r} = this.node.getProps();
        return {
            onSessionStart: Mf(i),
            onStart: Mf(s),
            onMove: Mf(o),
            onEnd: (c, h) => {
                delete this.session,
                r && Lt.postRender( () => r(c, h))
            }
        }
    }
    mount() {
        this.removePointerDownListener = ul(this.node.current, "pointerdown", i => this.onPointerDown(i))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
let wf = !1;
class j8 extends F.Component {
    componentDidMount() {
        const {visualElement: i, layoutGroup: s, switchLayoutGroup: o, layoutId: r} = this.props
          , {projection: c} = i;
        c && (s.group && s.group.add(c),
        o && o.register && r && o.register(c),
        wf && c.root.didUpdate(),
        c.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        c.setOptions({
            ...c.options,
            layoutDependency: this.props.layoutDependency,
            onExitComplete: () => this.safeToRemove()
        })),
        rr.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(i) {
        const {layoutDependency: s, visualElement: o, drag: r, isPresent: c} = this.props
          , {projection: h} = o;
        return h && (h.isPresent = c,
        i.layoutDependency !== s && h.setOptions({
            ...h.options,
            layoutDependency: s
        }),
        wf = !0,
        r || i.layoutDependency !== s || s === void 0 || i.isPresent !== c ? h.willUpdate() : this.safeToRemove(),
        i.isPresent !== c && (c ? h.promote() : h.relegate() || Lt.postRender( () => {
            const d = h.getStack();
            (!d || !d.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {visualElement: i, layoutAnchor: s} = this.props
          , {projection: o} = i;
        o && (o.options.layoutAnchor = s,
        o.root.didUpdate(),
        Nh.postRender( () => {
            !o.currentAnimation && o.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: i, layoutGroup: s, switchLayoutGroup: o} = this.props
          , {projection: r} = i;
        wf = !0,
        r && (r.scheduleCheckAfterUnmount(),
        s && s.group && s.group.remove(r),
        o && o.deregister && o.deregister(r))
    }
    safeToRemove() {
        const {safeToRemove: i} = this.props;
        i && i()
    }
    render() {
        return null
    }
}
function d2(n) {
    const [i,s] = G6()
      , o = F.useContext(D1);
    return z.jsx(j8, {
        ...n,
        layoutGroup: o,
        switchLayoutGroup: F.useContext(r2),
        isPresent: i,
        safeToRemove: s
    })
}
const N8 = {
    pan: {
        Feature: L8
    },
    drag: {
        Feature: z8,
        ProjectionNode: t2,
        MeasureLayout: d2
    }
};
function kg(n, i, s) {
    const {props: o} = n;
    n.animationState && o.whileHover && n.animationState.setActive("whileHover", s === "Start");
    const r = "onHover" + s
      , c = o[r];
    c && Lt.postRender( () => c(i, Tl(i)))
}
class V8 extends bi {
    mount() {
        const {current: i} = this.node;
        i && (this.unmount = uT(i, (s, o) => (kg(this.node, o, "Start"),
        r => kg(this.node, r, "End"))))
    }
    unmount() {}
}
class B8 extends bi {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let i = !1;
        try {
            i = this.node.current.matches(":focus-visible")
        } catch {
            i = !0
        }
        !i || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = Sl(gl(this.node.current, "focus", () => this.onFocus()), gl(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
function Xg(n, i, s) {
    const {props: o} = n;
    if (n.current instanceof HTMLButtonElement && n.current.disabled)
        return;
    n.animationState && o.whileTap && n.animationState.setActive("whileTap", s === "Start");
    const r = "onTap" + (s === "End" ? "" : s)
      , c = o[r];
    c && Lt.postRender( () => c(i, Tl(i)))
}
class U8 extends bi {
    mount() {
        const {current: i} = this.node;
        if (!i)
            return;
        const {globalTapTarget: s, propagate: o} = this.node.props;
        this.unmount = pT(i, (r, c) => (Xg(this.node, c, "Start"),
        (h, {success: d}) => Xg(this.node, h, d ? "End" : "Cancel")), {
            useGlobalTarget: s,
            stopPropagation: (o == null ? void 0 : o.tap) === !1
        })
    }
    unmount() {}
}
const rh = new WeakMap
  , _f = new WeakMap
  , H8 = n => {
    const i = rh.get(n.target);
    i && i(n)
}
  , q8 = n => {
    n.forEach(H8)
}
;
function G8({root: n, ...i}) {
    const s = n || document;
    _f.has(s) || _f.set(s, {});
    const o = _f.get(s)
      , r = JSON.stringify(i);
    return o[r] || (o[r] = new IntersectionObserver(q8,{
        root: n,
        ...i
    })),
    o[r]
}
function Y8(n, i, s) {
    const o = G8(i);
    return rh.set(n, s),
    o.observe(n),
    () => {
        rh.delete(n),
        o.unobserve(n)
    }
}
const k8 = {
    some: 0,
    all: 1
};
class X8 extends bi {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        var p;
        (p = this.stopObserver) == null || p.call(this);
        const {viewport: i={}} = this.node.getProps()
          , {root: s, margin: o, amount: r="some", once: c} = i
          , h = {
            root: s ? s.current : void 0,
            rootMargin: o,
            threshold: typeof r == "number" ? r : k8[r]
        }
          , d = m => {
            const {isIntersecting: v} = m;
            if (this.isInView === v || (this.isInView = v,
            c && !v && this.hasEnteredView))
                return;
            v && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", v);
            const {onViewportEnter: y, onViewportLeave: S} = this.node.getProps()
              , b = v ? y : S;
            b && b(m)
        }
        ;
        this.stopObserver = Y8(this.node.current, h, d)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: i, prevProps: s} = this.node;
        ["amount", "margin", "root"].some(P8(i, s)) && this.startObserver()
    }
    unmount() {
        var i;
        (i = this.stopObserver) == null || i.call(this),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
}
function P8({viewport: n={}}, {viewport: i={}}={}) {
    return s => n[s] !== i[s]
}
const K8 = {
    inView: {
        Feature: X8
    },
    tap: {
        Feature: U8
    },
    focus: {
        Feature: B8
    },
    hover: {
        Feature: V8
    }
}
  , Z8 = {
    layout: {
        ProjectionNode: t2,
        MeasureLayout: d2
    }
}
  , Q8 = {
    ...g8,
    ...K8,
    ...N8,
    ...Z8
}
  , F8 = h8(Q8, d8)
  , J8 = F8
  , W8 = () => z.jsx("div", {
    className: "absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden",
    children: Array.from({
        length: 50
    }).map( (n, i) => z.jsx(I8, {}, i))
})
  , Pg = ["/icon.png"]
  , I8 = () => {
    const n = F.useMemo( () => {
        const i = Math.random() * 1 + 1
          , s = Math.random() * 100
          , o = Math.random() * 5 + 25
          , r = Math.random() * -20
          , c = Math.random() * 360 - 90
          , h = Pg[Math.floor(Math.random() * Pg.length)];
        return {
            size: i,
            left: s,
            duration: o,
            delay: r,
            rotation: c,
            bg: `url(${h})`
        }
    }
    , []);
    return z.jsx(J8.div, {
        initial: {
            y: "-10vh",
            rotate: 0
        },
        animate: {
            y: "110vh",
            rotate: n.rotation
        },
        transition: {
            duration: n.duration,
            delay: n.delay,
            repeat: 1 / 0,
            ease: "easeInOut"
        },
        style: {
            position: "absolute",
            top: 0,
            left: `${n.left}%`,
            height: `${n.size}rem`,
            width: `${n.size}rem`,
            backgroundImage: n.bg,
            backgroundSize: "cover",
            backgroundPosition: "center",
            pointerEvents: "none",
            borderRadius: "50%",
            filter: "brightness(0.4) blur(1px)",
            opacity: .2
        }
    })
}
  , $8 = () => {
    F.useEffect( () => {
        document.title = "Retrac — Official Website | Experience Classic Fortnite Again"
    }
    , []);
    const n = s => {
        const o = window.open(s, "_blank", "noopener,noreferrer");
        o && (o.opener = null)
    }
      , i = async () => {
        window.location.assign("https://github.com/sdfhgrjgnhrt6fhjedfgye455351/SDFGSDGGSAGGGGGGGG/releases/download/gasdasdcsxb/Retrac_3.0.13_x64_en-US.zip")
    }
    ;
    return z.jsxs("div", {
        className: "relative flex flex-col w-full h-full overflow-x-hidden",
        children: [z.jsxs("nav", {
            className: "absolute top-0 left-0 w-full flex flex-row items-center justify-between px-6 py-4 z-30",
            children: [z.jsx("span", {
                className: "sr-only",
                children: "Project Retrac OG Fortnite, OG Movement, OMPP, OGFN"
            }), z.jsxs("div", {
                className: "flex flex-row items-center justify-center gap-6 w-full",
                children: [z.jsx("a", {
                    href: "#how-it-works",
                    className: "text-neutral-400 text-xs hover:text-neutral-300 transition-colors ease-linear duration-75",
                    children: "How It Works"
                }), z.jsx("a", {
                    href: "#faq",
                    className: "text-neutral-400 text-xs hover:text-neutral-300 transition-colors ease-linear duration-75",
                    children: "FAQ"
                }), z.jsx(zr, {
                    to: "/status",
                    className: "text-neutral-400 text-xs hover:text-neutral-300 transition-colors ease-linear duration-75 hover:underline",
                    children: "Service Status"
                })]
            })]
        }), z.jsxs("main", {
            className: "relative flex flex-col items-center justify-center w-full min-h-dvh md:min-h-0 py-40 md:py-64 bg-neutral-700/5",
            children: [z.jsx(f1, {
                children: z.jsx(W8, {})
            }), z.jsx("div", {
                className: "absolute bg-radial-[circle_at_50%_0%] from-lime-300/20 via-lime-300/10 via-40% to-lime-300/0 to-95% w-full h-full z-10"
            }), z.jsxs("div", {
                className: "flex flex-col items-center justify-center w-full max-w-[70rem] h-full gap-4 px-6 z-20",
                children: [z.jsxs("h1", {
                    className: "flex flex-col items-center font-[800] font-stretch-100% text-center leading-none bg-radial-[at_50%_100%] from-lime-300 to-white bg-clip-text text-transparent",
                    children: [z.jsx("span", {
                        className: "text-[clamp(1.5rem,4.5vw,3rem)] tracking-wide",
                        children: "RETRAC — EXPERIENCE CLASSIC FORTNITE"
                    }), z.jsx("span", {
                        className: "text-[clamp(2.5rem,7.5vw,5rem)] text-balance md:whitespace-nowrap",
                        children: "CHAPTER 2 SEASON 4"
                    })]
                }), z.jsx("p", {
                    className: "text-neutral-400 text-sm text-center max-w-2xl",
                    children: "Retrac is a community-driven project that lets you experience classic Fortnite Chapter 2 Season 4 with original movement, classic loot pools, and global dedicated servers."
                }), z.jsxs("div", {
                    className: "flex flex-row flex-wrap justify-center gap-4",
                    children: [z.jsx("button", {
                        className: "bg-lime-700/30 border-1 border-lime-300/50 px-4 py-2 rounded-full text-sm text-center cursor-pointer transition-colors hover:bg-lime-700/50 hover:border-lime-300/70 ease-linear duration-75",
                        onClick: i,
                        children: "Download Retrac for Free"
                    }), z.jsx("button", {
                        className: "bg-neutral-700/30 border-1 border-neutral-700/50 px-4 py-2 rounded-full text-sm text-center text-neutral-400 cursor-pointer transition-colors hover:bg-neutral-700/50 hover:border-neutral-700/70 ease-linear duration-75",
                        onClick: () => n("https://discord.gg/retrac"),
                        children: "Join the Discord"
                    })]
                })]
            }), z.jsx("button", {
                type: "button",
                "aria-label": "Scroll down",
                className: "md:hidden absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-neutral-400 hover:text-neutral-200 animate-bounce cursor-pointer",
                onClick: () => {
                    var s;
                    return (s = document.getElementById("how-it-works")) == null ? void 0 : s.scrollIntoView({
                        behavior: "smooth"
                    })
                }
                ,
                children: z.jsx(W4, {
                    className: "w-5 h-5"
                })
            })]
        }), z.jsx("section", {
            id: "how-it-works",
            className: "@container flex flex-col items-center justify-center w-full py-24",
            children: z.jsx("div", {
                className: "flex flex-col w-full max-w-[70rem] h-full px-8 gap-8",
                children: z.jsxs("div", {
                    className: "flex flex-col @min-3xl:flex-row gap-8 @min-3xl:gap-4",
                    children: [z.jsxs("div", {
                        className: "flex-1 flex flex-row items-center gap-4",
                        children: [z.jsx("span", {
                            className: "text-lime-300/30 font-[800] text-6xl leading-none min-w-10 text-center",
                            children: "1"
                        }), z.jsxs("div", {
                            className: "flex flex-col gap-1",
                            children: [z.jsx("span", {
                                className: "text-neutral-400 font-semibold",
                                children: "Download the Retrac launcher"
                            }), z.jsx("p", {
                                className: "text-neutral-500 text-sm leading-4",
                                children: "Run the installer to install required files and our game-launcher interface"
                            })]
                        })]
                    }), z.jsxs("div", {
                        className: "flex-1 flex flex-row items-center gap-4",
                        children: [z.jsx("span", {
                            className: "text-lime-300/30 font-[800] text-6xl leading-none min-w-10 text-center",
                            children: "2"
                        }), z.jsxs("div", {
                            className: "flex flex-col gap-1",
                            children: [z.jsx("span", {
                                className: "text-neutral-400 font-semibold",
                                children: "Link your Discord"
                            }), z.jsx("p", {
                                className: "text-neutral-500 text-sm leading-4",
                                children: "Sign in once and everything else is handled automatically"
                            })]
                        })]
                    }), z.jsxs("div", {
                        className: "flex-1 flex flex-row items-center gap-4",
                        children: [z.jsx("span", {
                            className: "text-lime-300/30 font-[800] text-6xl leading-none min-w-10 text-center",
                            children: "3"
                        }), z.jsxs("div", {
                            className: "flex flex-col gap-1",
                            children: [z.jsx("span", {
                                className: "text-neutral-400 font-semibold",
                                children: "Drop into a match"
                            }), z.jsx("p", {
                                className: "text-neutral-500 text-sm leading-4",
                                children: "Press play and queue into any game-mode, exactly how you remember it"
                            })]
                        })]
                    })]
                })
            })
        }), z.jsx("section", {
            className: "@container flex flex-col items-center justify-center w-full py-24 bg-neutral-700/5",
            children: z.jsxs("div", {
                className: "flex flex-col items-center w-full max-w-[70rem] h-full @min-3xl:flex-row px-8 gap-4 @max-3xl:gap-16",
                children: [z.jsxs("div", {
                    className: "flex flex-col w-full h-full gap-4 justify-center",
                    children: [z.jsx("h2", {
                        className: "text-neutral-400 text-md leading-4",
                        children: "The Retrac Experience: Built on Cutting Edge Technology"
                    }), z.jsx("p", {
                        className: "text-neutral-500 text-sm leading-4",
                        children: "You can count on Retrac to provide a smooth and enjoyable experience, with a focus on performance and reliability. Our infrastructure is designed to handle high traffic and provide a seamless experience for all players."
                    })]
                }), z.jsxs("div", {
                    className: "flex flex-row gap-2 min-w-max",
                    children: [z.jsx("div", {
                        className: "h-24 aspect-square bg-neutral-600/5 rounded-md flex items-center justify-center p-4",
                        children: z.jsx(Q4, {
                            className: "w-full h-full"
                        })
                    }), z.jsx("div", {
                        className: "h-24 aspect-square bg-neutral-600/5 rounded-md flex items-center justify-center p-6",
                        children: z.jsx($4, {
                            className: "w-full h-full"
                        })
                    }), z.jsx("div", {
                        className: "h-24 aspect-square bg-neutral-600/5 rounded-md flex items-center justify-center p-6",
                        children: z.jsx(K4, {
                            className: "w-full h-full"
                        })
                    }), z.jsx("div", {
                        className: "h-24 aspect-square bg-neutral-600/5 rounded-md flex items-center justify-center p-7",
                        children: z.jsx(I4, {
                            className: "w-full h-full"
                        })
                    })]
                })]
            })
        }), z.jsx("section", {
            className: "@container flex flex-col items-center justify-center w-full py-24",
            children: z.jsxs("div", {
                className: "flex flex-col items-center w-full max-w-[70rem] h-full @min-3xl:flex-row px-8 gap-8 @max-3xl:gap-16",
                children: [z.jsxs("div", {
                    className: "flex flex-row gap-2 min-w-max",
                    children: [z.jsx("div", {
                        className: "h-24 aspect-square bg-neutral-600/5 rounded-md flex items-center justify-center p-6",
                        children: z.jsx(Z4, {
                            className: "w-full h-full"
                        })
                    }), z.jsx("div", {
                        className: "h-24 aspect-square bg-neutral-600/5 rounded-md flex items-center justify-center p-6",
                        children: z.jsx(J4, {
                            className: "w-full h-full"
                        })
                    })]
                }), z.jsxs("div", {
                    className: "flex flex-col w-full h-full gap-4 justify-center",
                    children: [z.jsx("h2", {
                        className: "text-neutral-400 text-md leading-4",
                        children: "Secure & Certified"
                    }), z.jsx("p", {
                        className: "text-neutral-500 text-sm leading-4",
                        children: "We hold an EV Code Signing Certificate issued by Digicert and all of our software is manually appoved by Microsoft's Security Analysis team before every update. Our software is the only true safe option, and we take pride in it."
                    })]
                })]
            })
        }), z.jsx("section", {
            className: "flex flex-col items-center justify-center w-full py-24 bg-neutral-700/5",
            children: z.jsxs("div", {
                className: "flex flex-col w-full max-w-[70rem] h-full @min-3xl:flex-col px-8 gap-4",
                children: [z.jsx("h2", {
                    className: "text-neutral-500 text-sm leading-4",
                    children: "Retrac Showcase: Trusted by Players and Creators"
                }), z.jsx("iframe", {
                    src: "https://www.youtube.com/embed/NEqXlxCFogE?si=BJkWtAqOe1lSXsXS",
                    title: "Retrac gameplay showcase",
                    loading: "lazy",
                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                    referrerPolicy: "strict-origin-when-cross-origin",
                    allowFullScreen: !0,
                    className: "w-full aspect-video rounded-md"
                })]
            })
        }), z.jsx("section", {
            className: "@container flex flex-col items-center justify-center w-full py-24",
            children: z.jsxs("div", {
                className: "flex flex-col items-center w-full max-w-[70rem] h-full @min-3xl:flex-row px-8 gap-4 @max-3xl:gap-16",
                children: [z.jsxs("div", {
                    className: "flex flex-col w-full h-full gap-4",
                    children: [z.jsx("h2", {
                        className: "text-neutral-400 text-md leading-4",
                        children: "Join the Official Retrac Community"
                    }), z.jsx("p", {
                        className: "text-neutral-500 text-sm leading-4",
                        children: "Join our Discord server to stay up to date with the latest news, updates, and community events. Follow us on social media to see what we're working on and get a sneak peek of upcoming features."
                    })]
                }), z.jsxs("div", {
                    className: "flex flex-row gap-2 min-w-max",
                    children: [z.jsx("button", {
                        "aria-label": "Join the Retrac Discord",
                        className: "h-24 aspect-square bg-neutral-600/5 rounded-md flex items-center justify-center p-6 cursor-pointer hover:bg-neutral-600/10 transition-colors ease-linear duration-75",
                        onClick: () => n("https://discord.gg/retrac"),
                        children: z.jsx(F4, {
                            className: "w-full h-full"
                        })
                    }), z.jsx("button", {
                        "aria-label": "Retrac on TikTok",
                        className: "h-24 aspect-square bg-neutral-600/5 rounded-md flex items-center justify-center p-7 cursor-pointer hover:bg-neutral-600/10 transition-colors ease-linear duration-75",
                        onClick: () => n("https://www.tiktok.com/@retracmp"),
                        children: z.jsx(P4, {
                            className: "w-full h-full"
                        })
                    }), z.jsx("button", {
                        "aria-label": "Retrac on Twitter",
                        className: "h-24 aspect-square bg-neutral-600/5 rounded-md flex items-center justify-center p-7 cursor-pointer hover:bg-neutral-600/10 transition-colors ease-linear duration-75",
                        onClick: () => n("https://twitter.com/retracmp"),
                        children: z.jsx(X4, {
                            className: "w-full h-full"
                        })
                    }), z.jsx("button", {
                        "aria-label": "Retrac on YouTube",
                        className: "h-24 aspect-square bg-neutral-600/5 rounded-md flex items-center justify-center p-6 cursor-pointer hover:bg-neutral-600/10 transition-colors ease-linear duration-75",
                        onClick: () => n("https://youtube.com/@retracmp"),
                        children: z.jsx(k4, {
                            className: "w-full h-full"
                        })
                    })]
                })]
            })
        }), z.jsx("section", {
            id: "faq",
            className: "@container flex flex-col items-center justify-center w-full py-24 bg-neutral-700/5",
            children: z.jsxs("div", {
                className: "flex flex-col w-full max-w-[70rem] h-full px-8 gap-8",
                children: [z.jsxs("div", {
                    className: "flex flex-col gap-2",
                    children: [z.jsx("h2", {
                        className: "text-lime-300 font-bold text-xs tracking-wider uppercase",
                        children: "Frequently Asked Questions"
                    }), z.jsx("p", {
                        className: "text-neutral-200 text-2xl font-bold",
                        children: "Frequently Asked Questions about Retrac"
                    })]
                }), z.jsxs("div", {
                    className: "flex flex-col gap-4",
                    children: [z.jsxs("div", {
                        className: "bg-neutral-800/40 border border-neutral-700/40 rounded-xl p-6 flex flex-col gap-2",
                        children: [z.jsx("h3", {
                            className: "text-neutral-200 font-semibold text-base",
                            children: "What is Retrac?"
                        }), z.jsx("p", {
                            className: "text-neutral-400 text-sm leading-relaxed",
                            children: "Retrac is a free, community-driven project and custom launcher that lets players relive classic Fortnite Chapter 2 Season 4 (v14.40 / Stark Season) with authentic OG movement, original loot pools, and dedicated servers worldwide."
                        })]
                    }), z.jsxs("div", {
                        className: "bg-neutral-800/40 border border-neutral-700/40 rounded-xl p-6 flex flex-col gap-2",
                        children: [z.jsx("h3", {
                            className: "text-neutral-200 font-semibold text-base",
                            children: "Which version of Fortnite does Retrac support?"
                        }), z.jsx("p", {
                            className: "text-neutral-400 text-sm leading-relaxed",
                            children: "Retrac specifically restores Fortnite Chapter 2 Season 4 (v14.40), bringing back the original Stark Season map, iconic weapons, vehicle mechanics, and classic gameplay."
                        })]
                    }), z.jsxs("div", {
                        className: "bg-neutral-800/40 border border-neutral-700/40 rounded-xl p-6 flex flex-col gap-2",
                        children: [z.jsx("h3", {
                            className: "text-neutral-200 font-semibold text-base",
                            children: "How do I download and install the Retrac launcher?"
                        }), z.jsx("p", {
                            className: "text-neutral-400 text-sm leading-relaxed",
                            children: "Click 'Download Retrac for Free' above to get the official installer. Run the setup to install required files, connect your Discord account once for authentication, and jump directly into matchmaking."
                        })]
                    }), z.jsxs("div", {
                        className: "bg-neutral-800/40 border border-neutral-700/40 rounded-xl p-6 flex flex-col gap-2",
                        children: [z.jsx("h3", {
                            className: "text-neutral-200 font-semibold text-base",
                            children: "Is Retrac safe to use?"
                        }), z.jsx("p", {
                            className: "text-neutral-400 text-sm leading-relaxed",
                            children: "Yes. Retrac holds an EV Code Signing Certificate issued by DigiCert and is manually checked by Microsoft Security Analysis before each update to ensure safety and integrity."
                        })]
                    }), z.jsxs("div", {
                        className: "bg-neutral-800/40 border border-neutral-700/40 rounded-xl p-6 flex flex-col gap-2",
                        children: [z.jsx("h3", {
                            className: "text-neutral-200 font-semibold text-base",
                            children: "Is Retrac free to play?"
                        }), z.jsx("p", {
                            className: "text-neutral-400 text-sm leading-relaxed",
                            children: "Yes, Retrac is 100% free and community-driven. All matchmaking, servers, and classic seasonal gameplay are available without any purchase."
                        })]
                    }), z.jsxs("div", {
                        className: "bg-neutral-800/40 border border-neutral-700/40 rounded-xl p-6 flex flex-col gap-2",
                        children: [z.jsx("h3", {
                            className: "text-neutral-200 font-semibold text-base",
                            children: "Is Retrac affiliated with Epic Games?"
                        }), z.jsx("p", {
                            className: "text-neutral-400 text-sm leading-relaxed",
                            children: "No. Retrac is an independent fan-made community project created for legacy gameplay preservation and is not affiliated with, endorsed by, or sponsored by Epic Games, Inc."
                        })]
                    })]
                })]
            })
        }), z.jsxs("footer", {
            className: "w-full py-12 px-8 flex flex-col items-center justify-center border-t border-neutral-800/80 gap-4 text-center bg-neutral-900",
            children: [z.jsxs("div", {
                className: "flex flex-row flex-wrap items-center justify-center gap-6 text-xs text-neutral-400",
                children: [z.jsx(zr, {
                    to: "/status",
                    className: "hover:text-neutral-200 transition-colors",
                    children: "Service Status"
                }), z.jsx("a", {
                    href: "#how-it-works",
                    className: "hover:text-neutral-200 transition-colors",
                    children: "How It Works"
                }), z.jsx("a", {
                    href: "#faq",
                    className: "hover:text-neutral-200 transition-colors",
                    children: "FAQ"
                }), z.jsx("a", {
                    href: "https://discord.gg/retrac",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "hover:text-neutral-200 transition-colors",
                    children: "Discord Community"
                })]
            }), z.jsx("p", {
                className: "text-neutral-500 text-xs max-w-2xl leading-normal",
                children: "Retrac is an independent community project created for legacy gameplay preservation and nostalgia. Retrac is not affiliated with, endorsed by, or associated with Epic Games, Inc. Fortnite is a registered trademark of Epic Games, Inc."
            }), z.jsx("p", {
                className: "text-neutral-600 text-xs",
                children: "\xA9 Retrac. Relive classic Fortnite Chapter 2 Season 4."
            })]
        })]
    })
}
  , t7 = ""
  , Rf = {
    up: {
        label: "All Systems Operational",
        dot: "bg-green-400",
        pill: "bg-green-700/30"
    },
    warning: {
        label: "Partial Degradation",
        dot: "bg-amber-400",
        pill: "bg-amber-700/30 border-amber-300/50"
    },
    down: {
        label: "Major Outage",
        dot: "bg-red-400",
        pill: "bg-red-700/30 border-red-300/50"
    }
}
  , Ua = {
    up: {
        label: "Up",
        dot: "bg-green-400",
        text: "text-green-300/80"
    },
    warning: {
        label: "Warning",
        dot: "bg-amber-400",
        text: "text-amber-300/80"
    },
    down: {
        label: "Down",
        dot: "bg-red-400",
        text: "text-red-300/80"
    }
}
  , e7 = () => {
    const [n,i] = F.useState(null)
      , [s,o] = F.useState(!1);
    F.useEffect( () => {
        document.title = "Service Status - Retrac"
    }
    , []),
    F.useEffect( () => {
        const c = async () => {
            try {
                const d = await fetch(`${t7}/api/status`);
                if (!d.ok)
                    throw new Error(`status ${d.status}`);
                i(await d.json()),
                o(!1)
            } catch {
                o(!0)
            }
        }
        ;
        c();
        const h = setInterval(c, 3e4);
        return () => clearInterval(h)
    }
    , []);
    const r = n ? Math.max(0, Math.floor((Date.now() - new Date(n.generated_at).getTime()) / 1e3)) : 0;
    return z.jsx("div", {
        className: "flex flex-col items-center w-full h-full overflow-x-hidden",
        children: z.jsxs("section", {
            className: "flex flex-col w-full max-w-[45rem] px-6 py-24 gap-6",
            children: [z.jsx("div", {
                className: "flex flex-col gap-2",
                children: z.jsx(zr, {
                    to: "/",
                    className: "text-neutral-500 text-xs hover:text-neutral-400 transition-colors ease-linear duration-75 w-max",
                    children: "← back to home"
                })
            }), s && !n && z.jsx("div", {
                className: "bg-neutral-700/20 rounded-md p-4",
                children: z.jsx("p", {
                    className: "text-neutral-400 text-sm leading-4",
                    children: "Status is currently unavailable"
                })
            }), n && z.jsxs(z.Fragment, {
                children: [n.updating && z.jsxs("div", {
                    className: "bg-amber-700/20 rounded-md p-4 flex flex-row items-center gap-3",
                    children: [z.jsx("span", {
                        className: "w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"
                    }), z.jsxs("div", {
                        className: "flex flex-col",
                        children: [z.jsx("p", {
                            className: "text-amber-200/90 text-sm",
                            children: n.message || "Currently Updating"
                        }), z.jsx("p", {
                            className: "text-amber-300/90 text-xs",
                            children: n.description || "Retrac is temporarily unavailable while we roll out an update."
                        })]
                    })]
                }), z.jsxs("div", {
                    className: "flex flex-col gap-2",
                    children: [z.jsx("p", {
                        className: "text-neutral-400 text-md leading-4",
                        children: "Retrac"
                    }), z.jsxs("div", {
                        className: `rounded-md p-4 flex flex-row items-center gap-3 ${Rf[n.overall].pill}`,
                        children: [z.jsx("span", {
                            className: `w-2.5 h-2.5 rounded-full ${Rf[n.overall].dot}`
                        }), z.jsx("span", {
                            className: "text-neutral-200 text-sm leading-4",
                            children: Rf[n.overall].label
                        }), z.jsxs("span", {
                            className: "text-neutral-500 text-xs ml-auto",
                            children: ["updated ", r, "s ago"]
                        })]
                    })]
                }), z.jsxs("div", {
                    className: "flex flex-col gap-2",
                    children: [z.jsx("p", {
                        className: "text-neutral-400 text-md leading-4",
                        children: "Services"
                    }), z.jsxs("div", {
                        className: "flex flex-col bg-neutral-600/5 rounded-md divide-y divide-neutral-700/30",
                        children: [n.categories.map(c => z.jsxs("div", {
                            className: "flex flex-row items-center gap-3 p-3 px-4",
                            children: [z.jsx("span", {
                                className: `w-2 h-2 rounded-full ${Ua[c.status].dot}`
                            }), z.jsx("span", {
                                className: "text-neutral-400 text-sm",
                                children: c.label
                            }), z.jsx("span", {
                                className: `text-xs font-semibold ml-auto ${Ua[c.status].text}`,
                                children: Ua[c.status].label
                            })]
                        }, c.id)), n.categories.length === 0 && z.jsx("p", {
                            className: "text-neutral-500 text-sm p-3 px-4",
                            children: "No service data."
                        })]
                    })]
                }), z.jsxs("div", {
                    className: "flex flex-col gap-2",
                    children: [z.jsx("p", {
                        className: "text-neutral-400 text-md leading-4",
                        children: "Regions"
                    }), z.jsxs("div", {
                        className: "flex flex-col bg-neutral-600/5 rounded-md divide-y divide-neutral-700/30",
                        children: [n.regions.map(c => z.jsxs("div", {
                            className: "flex flex-row items-center gap-3 p-3 px-4",
                            children: [z.jsx("span", {
                                className: `w-2 h-2 rounded-full ${Ua[c.status].dot}`
                            }), z.jsx("span", {
                                className: "text-neutral-400 text-sm",
                                children: c.label
                            }), z.jsx("span", {
                                className: `text-xs font-semibold ml-auto ${Ua[c.status].text}`,
                                children: Ua[c.status].label
                            })]
                        }, c.id)), n.regions.length === 0 && z.jsx("p", {
                            className: "text-neutral-500 text-sm p-3 px-4",
                            children: "No regions configured."
                        })]
                    })]
                })]
            }), !n && !s && z.jsx("p", {
                className: "text-neutral-500 text-sm",
                children: "Loading status…"
            })]
        })
    })
}
  , Xh = A4({
    component: () => z.jsx(M1, {}),
    notFoundComponent: () => z.jsx("p", {
        className: "text-sm text-neutral-400 p-2",
        children: "Not Implemented"
    }),
    errorComponent: () => z.jsx("div", {
        className: "flex flex-col p-2 h-full w-full",
        children: z.jsx("p", {
            className: "text-sm text-neutral-500",
            children: "A critical error has occurred, please refresh the page."
        })
    })
})
  , n7 = T1({
    getParentRoute: () => Xh,
    component: () => z.jsx($8, {}),
    path: "/"
})
  , i7 = T1({
    getParentRoute: () => Xh,
    component: () => z.jsx(e7, {}),
    path: "/status"
})
  , a7 = n => z4({
    routeTree: Xh.addChildren([n7, i7]),
    history: n
})
  , s7 = a7();
kS.createRoot(document.getElementById("root")).render(z.jsx(F.StrictMode, {
    children: z.jsx(N4, {
        router: s7
    })
}));
