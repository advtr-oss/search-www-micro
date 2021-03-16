import s from "react";

const la = {
  env: Bt.Env.PRODUCTION,
  zoom: 17,
  placeholder: Object(Pe.t)("wazemap.search.placeholder"),
  searchProvider: sa(),
  requestDelayMs: 200,
  theme: Vt.SearchTheme.DEFAULT,
  items: [],
  title: ve.a.translate("livemap.search.suggestions_title"),
  onComplete: e=>{}
  ,
  onClear: ()=>{}
  ,
  onInputClear: ()=>{}
};

function ua(e) {
  var t, n;
  const {primary: a, secondary: r, suggestion: o, setSuggestion: i} = (e=>{
      var t, n;
      const [a,r] = s.useState(null !== (t = e.primary) && void 0 !== t ? t : "")
        , [o,i] = s.useState(null !== (n = e.secondary) && void 0 !== n ? n : "")
        , c = s.useMemo(()=>o.replace(a, "").replace(/^[,]/, "").trim(), [a, o])
        , l = s.useMemo(()=>[a, o].filter(Boolean).join(", "), [a, o]);
      s.useEffect(()=>{
          var t, n;
          r(null !== (t = e.primary) && void 0 !== t ? t : ""),
            i(null !== (n = e.secondary) && void 0 !== n ? n : "")
        }
        , [e.primary, e.secondary]);
      const u = s.useCallback(e=>{
          var t, n;
          "string" == typeof e ? r(e) : (r(null !== (t = e.primary) && void 0 !== t ? t : ""),
            i(null !== (n = e.secondary) && void 0 !== n ? n : ""))
        }
        , []);
      return {
        primary: a,
        secondary: c,
        suggestion: l,
        setSuggestion: u
      }
    }
  )(e)
    , [c,l] = s.useState(!o)
    , [m,d] = s.useState(!1)
    , [p,v] = s.useState(a)
    , [E,h] = s.useState(a)
    , {dispatch: f, state: g} = s.useContext(te)
    , {translator: _, browser: w} = s.useContext(pe)
    , b = s.useContext(Rn.a)
    , O = s.useMemo(()=>{
      var e;
      return null == (null === (e = g.user) || void 0 === e ? void 0 : e.favorites) ? [] : 0 === o.length ? g.user.favorites : g.user.favorites.filter(e=>kn(e.label, o))
    }
    , [o, g.user])
    , [y,C] = Bn(O)
    , N = e.withLocation && !(a && 0 === y.length)
    , L = s.useMemo(()=>{
      const e = Object(Pe.t)("livemap.favorites.home").toLowerCase()
        , t = Object(Pe.t)("livemap.favorites.work").toLowerCase()
        , n = o.trim().toLowerCase();
      return n.length > 0 && (e.startsWith(n) || t.startsWith(n))
    }
    , [o]);
  s.useEffect(()=>{
      v(e.primary || "")
    }
    , [e.primary]),
    s.useEffect(()=>{
        l(!e.primary),
        e.fromToSwitched && C([])
      }
      , [e.primary]),
    s.useEffect(()=>{
        var t;
        null === (t = e.onFocusedChange) || void 0 === t || t.call(e, m)
      }
      , [m]),
    s.useEffect(()=>{
        o || l(!0)
      }
      , [o]);
  const S = Object(gt.d)("REQUEST")
    , T = Object(gt.d)("DELETED")
    , R = Object(gt.d)("ITEM_CLICK")
    , k = Object(gt.d)("LOGIN_HOOK_SHOWN")
    , D = Object(gt.d)("LOGIN_HOOK_CLICK")
    , [A,x] = s.useState(Date.now())
    , j = null !== (t = e.searchProvider.name) && void 0 !== t ? t : "UNKNOWN"
    , P = function({searchProvider: e, env: t, searchCenter: n}) {
    const {browser: a} = Object(s.useContext)(pe)
      , r = Object(s.useContext)(Rn.a);
    return Object(s.useCallback)(o=>Fn(this, void 0, void 0, (function*() {
        const i = {
          browser: a,
          map: r
        }
          , s = ve.a.locale
          , c = {
          env: t,
          locale: s
        };
        if (e.supportsCenterRadius && null != n) {
          const {center: t, radius: a} = Gn(n, i);
          return e.search(o, Object.assign(Object.assign({}, c), {
            center: t,
            radius: a
          }))
        }
        const {circle: l, viewport: u} = yield Hn(i);
        return e.supportsViewport && null != u ? e.search(o, Object.assign(Object.assign({}, c), {
          viewportLo: u.lo,
          viewportHi: u.hi
        })) : e.supportsCenterRadius && null != l ? e.search(o, Object.assign(Object.assign({}, c), l)) : e.search(o, c)
      }
    )), [t, n, a, r, e])
  }(e)
    , z = s.useCallback(Object(ue.debounce)(t=>ca(this, void 0, void 0, (function*() {
      var n;
      null === (n = e.onInput) || void 0 === n || n.call(e, t);
      const a = Date.now();
      let r = []
        , o = !1;
      const s = 0 === E.length && 0 !== t.length;
      if (s && x(Date.now()),
        i(t),
        t.length) {
        try {
          r = yield P(t)
        } catch (e) {
          o = !0
        }
        S({
          params: {
            LATENCY_MS: Date.now() - a,
            QUERY: t,
            NUM_RESULTS: r.length,
            NEW_QUERY: s,
            HAS_ERROR: o,
            PROVIDER: j,
            HYBRID_EXP: an(Zt.HYBRID_VIEWPORT)
          }
        })
      } else
        T({
          params: {
            METHOD: "INPUT",
            PROVIDER: j,
            HYBRID_EXP: an(Zt.HYBRID_VIEWPORT)
          }
        });
      h(t),
        C(r)
    }
  )), e.requestDelayMs, 0 === e.requestDelayMs), [P, T, S, i])
    , M = s.useCallback(()=>{
      d(!0)
    }
    , [d])
    , U = s.useRef()
    , H = s.useCallback(t=>{
      var n;
      t && i({
        primary: t,
        secondary: r
      }),
      null === (n = e.onBlur) || void 0 === n || n.call(e),
        U.current = setTimeout(()=>{
            h(t),
              l(!t),
              d(!1),
              C([])
          }
          , 200)
    }
    , [r, i])
    , G = s.useCallback((t,n,a,r)=>ca(this, void 0, void 0, (function*() {
      var s, c, m, p, g, w;
      if (t.type == u.h.LOGIN_HOOK)
        return D({}),
          void On(f, _.locale);
      f(new I(!0)),
      U.current && clearTimeout(U.current);
      const O = "place"in t ? t.place : yield e.searchProvider.getDetails({
        label: t.label,
        value: t.value
      })
        , y = t.type != u.h.FAVORITE || t.favoriteType != u.c.HOME && t.favoriteType != u.c.WORK ? t.type : t.favoriteType
        , C = `${O.name}, ${O.address}`;
      i({
        primary: O.name,
        secondary: O.address
      }),
        v(O.name || ""),
        h(O.name || ""),
        l(!1),
        d(!1);
      const N = Date.now() - A;
      R({
        params: {
          RESULT_TYPE: y,
          LON: null === (s = O.latLng) || void 0 === s ? void 0 : s.lng,
          LAT: null === (c = O.latLng) || void 0 === c ? void 0 : c.lat,
          LINE_NUMBER: a,
          NUM_RESULTS: r,
          QUERY: E,
          DISTANCE: null != b ? new Re.LatLng(O.latLng.lat,O.latLng.lng).distanceTo(b.getCenter()) : void 0,
          GOOGLE_PLACE_ID: null === (m = O.rawGooglePlaceData) || void 0 === m ? void 0 : m.place_id,
          ADDRESS: null === (p = O.rawGooglePlaceData) || void 0 === p ? void 0 : p.formatted_address,
          GOOGLE_PLACE_TYPES: null === (g = O.rawGooglePlaceData) || void 0 === g ? void 0 : g.types.join(","),
          IS_ESTABLISHMENT: null === (w = O.rawGooglePlaceData) || void 0 === w ? void 0 : w.types.includes(u.g.ESTABLISHMENT),
          QUERY_MATCHES_LOCALIZED_HOME_OR_WORK: L,
          PROVIDER: j,
          QF_TIME: N,
          HYBRID_EXP: an(Zt.HYBRID_VIEWPORT)
        }
      });
      const S = y === u.h.SUGGESTION ? {
        index: n,
        suggestionIndex: null != a ? a : 0,
        queryTimeMs: N,
        queryText: o,
        text: C,
        place: O,
        type: y
      } : {
        index: n,
        text: t.label,
        place: O,
        type: y
      };
      e.onComplete(S)
    }
  )), [e, R, o, b, L, j, D, f, _.locale, A, i, E])
    , F = s.useCallback(()=>{
      i(""),
        h(""),
        C([]),
        e.onClear(),
        T({
          params: {
            METHOD: "CLEAR"
          }
        })
    }
    , [e.onClear, T, i])
    , B = s.useCallback(()=>{
      i(""),
        v(""),
        h(""),
        C([]),
      e.onInputClear && e.onInputClear(),
        T({
          params: {
            METHOD: "CLEAR"
          }
        }),
      U.current && clearTimeout(U.current)
    }
    , [e.onInputClear, T, i])
    , V = s.useRef(null)
    , W = s.useCallback(e=>{
      const t = Object(Wt.parseLonLat)(e.value);
      if (null != t) {
        const e = `lat=${t.lat} lng=${t.lng}`
          , n = {
          label: e,
          place: {
            latLng: t,
            name: e
          }
        };
        G(Object.assign(Object.assign({}, n), {
          type: u.h.RAW
        }), 0, 1)
      }
    }
    , [])
    , K = s.useCallback(t=>{
      "Escape" === t.key && (d(!1),
        i({
          primary: e.primary,
          secondary: e.secondary
        })),
        V.current ? V.current.onKeyDown(t) : "Enter" === t.key && W(t.target)
    }
    , [e.primary, e.secondary])
    , $ = !w.isMobile && (null == g.user || -1 === (null === (n = g.user) || void 0 === n ? void 0 : n.id)) && 0 == o.length
    , Y = c && m && (O.length > 0 || N || $ || y.length > 0);
  return s.useEffect(()=>{
      $ && Y && k({})
    }
    , [$, Y, k]),
    s.createElement("div", {
      className: re("wm-search", "theme-" + e.theme, c ? "is-editable" : "is-read-only", o ? "has-value" : "is-blank"),
      onKeyDown: K
    }, c ? s.createElement(Sn, {
      placeholder: e.placeholder,
      value: a,
      selection: p,
      isRouting: e.isRouting,
      onInput: z,
      onFocus: M,
      onBlur: H,
      onClear: B
    }) : s.createElement(Tn, {
      primary: a,
      secondary: r,
      poiUrl: e.poiUrl,
      isRouting: e.isRouting,
      onSelect: ()=>l(!0),
      onClear: F
    }), Y && s.createElement(In, {
      container: e.suggestionsContainer
    }, s.createElement(Ln, {
      ref: V,
      items: y,
      selection: a,
      onSelect: G,
      withGeolocation: N,
      favorites: O,
      withFavoritesLoginHook: $,
      suggestionMatchesHomeOrWork: L,
      title: e.title
    })))
}
