import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
//设置懒加载,读取到该页面在加载该页面的路由
const login = () => import("../pages/login/login")
const index = () => import("../pages/index/index")
//二级路由组件
const home = () => import("../pages/home/home")
const banner = () => import("../pages/banner/banner")
const goods = () => import("../pages/goods/goods")
const classify = () => import("../pages/classify/classify")
const manage = () => import("../pages/manage/manage")
const member = () => import("../pages/member/member")
const menu = () => import("../pages/menu/menu")
const role = () => import("../pages/role/role")
const seckill = () => import("../pages/seckill/seckill")
const spec = () => import("../pages/spec/spec")

//首页下面的二级路由规则
const indexRouter = [{
    path: "banner",
    component: banner
  },
  {
    path: "goods",
    component: goods
  },
  {
    path: "classify",
    component: classify
  },
  {
    path: "manage",
    component: manage
  },
  {
    path: "member",
    component: member
  },
  {
    path: "menu",
    component: menu
  },
  {
    path: "role",
    component: role
  },
  {
    path: "seckill",
    component: seckill
  },
  {
    path: "spec",
    component: spec
  },
]
export default new Router({
  routes: [{
      path: "/",
      component: index,
      children: [{
        path: "",
        component: home,
      },
      ...indexRouter
    ]
    },
    {
      path: "/login",
      component: login
    }
  ]
})
