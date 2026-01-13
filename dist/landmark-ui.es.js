import { defineComponent as o, createElementBlock as l, openBlock as i, normalizeClass as r, createElementVNode as a, toDisplayString as n, createCommentVNode as m, Fragment as _, renderList as v, withModifiers as g } from "vue";
const f = ["disabled"], k = { class: "ui-button-text" }, b = /* @__PURE__ */ o({
  __name: "Button",
  props: {
    buttonText: {},
    loadingText: { default: "Loading..." },
    loading: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (d, t) => (i(), l("button", {
      type: "submit",
      disabled: e.disabled || e.loading,
      class: r(["ui-button", { "ui-button_loading": e.loading }])
    }, [
      a("span", k, n(e.loading ? e.loadingText : e.buttonText), 1)
    ], 10, f));
  }
}), c = (e, d) => {
  const t = e.__vccOpts || e;
  for (const [s, u] of d)
    t[s] = u;
  return t;
}, F = /* @__PURE__ */ c(b, [["__scopeId", "data-v-0f722ff4"]]), h = ["for"], y = ["id", "type", "value", "required", "placeholder"], $ = {
  key: 0,
  class: "ui-error"
}, C = /* @__PURE__ */ o({
  __name: "Input",
  props: {
    modelValue: {},
    id: {},
    label: {},
    type: { default: "text" },
    placeholder: { default: "" },
    required: { type: Boolean, default: !1 },
    errorMessage: { default: "" },
    containerClass: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (d, t) => (i(), l("div", {
      class: r(["ui-group", e.containerClass])
    }, [
      a("label", {
        for: e.id,
        class: "ui-label"
      }, n(e.label), 9, h),
      a("input", {
        id: e.id,
        type: e.type,
        value: e.modelValue,
        onInput: t[0] || (t[0] = (s) => d.$emit("update:modelValue", s.target.value)),
        required: e.required,
        class: r(["ui-input", { "ui-input_error": e.errorMessage }]),
        placeholder: e.placeholder
      }, null, 42, y),
      e.errorMessage ? (i(), l("span", $, n(e.errorMessage), 1)) : m("", !0)
    ], 2));
  }
}), N = /* @__PURE__ */ c(C, [["__scopeId", "data-v-9a0a94e2"]]), x = { class: "landmark-card__header" }, B = { class: "landmark-card__title" }, p = { class: "landmark-card__rating" }, I = { class: "landmark-card__rating-value" }, V = { class: "landmark-card__meta" }, M = { class: "landmark-card__visits" }, q = { class: "landmark-card__actions" }, L = { class: "landmark-card__user-rating" }, T = { class: "landmark-card__rating-label" }, w = { class: "landmark-card__stars" }, R = ["onClick"], A = /* @__PURE__ */ o({
  __name: "LandmarkCard",
  props: {
    name: {},
    rating: {},
    visits: {},
    userRating: {},
    isActive: { type: Boolean },
    labels: {}
  },
  emits: ["view-details", "rate"],
  setup(e) {
    return (d, t) => (i(), l("div", {
      class: r(["landmark-card", { "landmark-card_active": e.isActive }]),
      onClick: t[0] || (t[0] = (s) => d.$emit("view-details"))
    }, [
      a("div", x, [
        a("h3", B, n(e.name), 1),
        a("div", p, [
          a("span", I, n(e.rating.toFixed(1)), 1),
          t[1] || (t[1] = a("span", { class: "landmark-card__rating-star" }, "★", -1))
        ])
      ]),
      a("div", V, [
        a("span", M, n(e.visits) + " " + n(e.labels.visits), 1)
      ]),
      a("div", q, [
        a("div", L, [
          a("span", T, n(e.labels.yourRating) + ":", 1),
          a("div", w, [
            (i(), l(_, null, v(5, (s) => a("button", {
              key: s,
              type: "button",
              class: r(["landmark-card__star", { "landmark-card__star_active": s <= e.userRating }]),
              onClick: g((u) => d.$emit("rate", s), ["stop"])
            }, "★", 10, R)), 64))
          ])
        ])
      ])
    ], 2));
  }
}), z = /* @__PURE__ */ c(A, [["__scopeId", "data-v-1886af95"]]);
export {
  F as Button,
  N as Input,
  z as LandmarkCard
};
