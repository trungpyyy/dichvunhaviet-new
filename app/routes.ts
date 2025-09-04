import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/about", "routes/about.tsx"),
  route("/gioi-thieu", "routes/gioi-thieu.tsx"),
  route("/dich-vu-dien-nuoc", "routes/dich-vu-dien-nuoc.tsx"),
  route("/dich-vu-dien-lanh", "routes/dich-vu-dien-lanh.tsx"),
  route("/chong-tham", "routes/chong-tham.tsx"),
  route("/san-pham", "routes/san-pham.tsx"),
  route("/nhat-ky", "routes/nhat-ky.tsx"),
  route("/tin-tuc", "routes/tin-tuc.tsx"),
] satisfies RouteConfig;
